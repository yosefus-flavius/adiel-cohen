'use server'

import { auth } from '@/auth'
import FlashModel from '@/server/blog/blog.model'
import { connectToDatabase } from '@/server/connect'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { ZodError } from 'zod'

const flashSchema = z.object({
   title: z.string().min(5, "כותרת חייבת להכיל לפחות 5 תווים"),
   content: z.string().min(20, "תוכן חייב להכיל לפחות 20 תווים"),
   img: z.string(),
   category: z.string().min(2, "קטגוריה חייבת להכיל לפחות 2 תווים"),
   isActive: z.boolean().default(true)
})


export async function createOrUpdateFlash(formData: FormData) { 
   const session = await auth()
   if (!session) {
      return { error: 'אין הרשאה לביצוע פעולה זו' }
   }

   const rawFormData = Object.fromEntries(formData)

   try {
      const validatedData = flashSchema.parse({
         ...rawFormData,
         // @ts-ignore
         tags: rawFormData.tags ? rawFormData.tags.split(',') : [],
         isActive: rawFormData.isActive === 'on',
         // @ts-ignore
         slug: rawFormData.slug.replace(/\s+/g, '-').toLowerCase()
      })

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
      if (error instanceof ZodError) {
         return { error: error.message }
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
