'use server'

import { auth } from '@/auth'
import { connectToDatabase } from '@/server/connect'
import FlashModel from '@/server/flash/flash.model'
import { revalidatePath } from 'next/cache'
import { z, ZodError } from 'zod'

const flashSchema = z.object({
   title: z.string().min(5, "כותרת חייבת להכיל לפחות 5 תווים"),
   content: z.string().min(20, "תוכן חייב להכיל לפחות 20 תווים"),
   img: z.string().optional(),
   category: z.string().min(2, "קטגוריה חייבת להכיל לפחות 2 תווים"),
   links: z.array(z.string()).min(1, "חייב לבחור לפחות תג אחד").optional(),
   isActive: z.boolean().default(true)
})

function formatZodErrors(error: ZodError): string {
   return error.errors.map(err => {
      switch (err.code) {
         case 'too_small':
            switch (err.path[0]) {
               case 'title':
                  return 'כותרת חייבת להכיל לפחות 5 תווים'
               case 'content':
                  return 'תוכן חייב להכיל לפחות 20 תווים'
               case 'category':
                  return 'קטגוריה חייבת להכיל לפחות 2 תווים'

               default:
                  return 'אורך הטקסט קצר מדי'
            }
         case 'too_big':
            switch (err.path[0]) {
               case 'excerpt':
                  return 'תקציר לא יכול להיות ארוך מ-200 תווים'
               default:
                  return 'אורך הטקסט ארוך מדי'
            }
         case 'invalid_type':
            return 'סוג הנתון שהוזן אינו תקין'
         case 'invalid_string':
            switch (err.path[0]) {
               default:
                  return 'הטקסט שהוזן אינו תקין'
            }
         default:
            return 'אירעה שגיאת אימות'
      }
   }).join(', ')
}



export async function createOrUpdateFlash(formData: FormData) {
   const session = await auth()
   if (!session) {
      return { error: 'אין הרשאה לביצוע פעולה זו' }
   }

   const rawFormData = Object.fromEntries(formData)
   // @ts-ignore
   rawFormData.links = (rawFormData.links as string).split('\n')

   console.log({ rawFormData })
   
   try {
      const validatedData = flashSchema.parse({
         ...rawFormData,
         isActive: rawFormData.isActive === 'on',
      })
      
      console.log({ validatedData })
      await connectToDatabase()

      if (rawFormData.id) {
         const res = await FlashModel.findByIdAndUpdate(rawFormData.id, validatedData, { new: true })
         revalidatePath(`/flash`)
         revalidatePath(`/`)
         if (process.env.NODE_ENV === 'production') {
            await revalidateNetlify()
         }
         return { message: 'הידיעה עודכן בהצלחה', id: String(res._id) }
      } else {
         const res = await FlashModel.create(validatedData)
         revalidatePath(`/flash`)
         revalidatePath(`/`)
         if (process.env.NODE_ENV === 'production') {
            await revalidateNetlify()
         }
         return { message: 'הידיעה יוצרה בהצלחה', id: String(res._id) }
      }
   }
   catch (error) {
      console.log({ error })
      if (error instanceof ZodError) {
         return {
            error: formatZodErrors(error),
            details: error.errors  // Optional: for debugging
         }
      }
      return { error: 'שגיאה בשרת' }
   }
}


const revalidateNetlify = async () => {
   await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?path=/`, {
      method: 'POST',
      headers: {
         'Authorization': `Bearer ${process.env.REVALIDATE_TOKEN}`
      }
   })
   await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?path=/flash`, {
      method: 'POST',
      headers: {
         'Authorization': `Bearer ${process.env.REVALIDATE_TOKEN}`
      }
   })
   return true
}
