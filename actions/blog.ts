'use server'

import { auth } from '@/auth'
import BlogModel from '@/server/blog/blog.model'
import { connectToDatabase } from '@/server/connect'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'

const blogSchema = z.object({
    title: z.string().min(5, "כותרת חייבת להכיל לפחות 5 תווים"),
    slug: z.string().min(3, "כתובת URL חייבת להכיל לפחות 3 תווים"),
    content: z.string().min(20, "תוכן חייב להכיל לפחות 20 תווים"),
    excerpt: z.string().max(200, "תקציר לא יכול להיות ארוך מ-200 תווים"),
    coverImage: z.string(),
    category: z.string().min(2, "קטגוריה חייבת להכיל לפחות 2 תווים"),
    tags: z.array(z.string()).min(1, "חייב לבחור לפחות תג אחד"),
    isActive: z.boolean().default(true)
})


import { ZodError } from 'zod'

function formatZodErrors(error: ZodError): string {
    return error.errors.map(err => {
        switch (err.code) {
            case 'too_small':
                switch (err.path[0]) {
                    case 'title':
                        return 'כותרת חייבת להכיל לפחות 5 תווים'
                    case 'slug':
                        return 'כתובת URL חייבת להכיל לפחות 3 תווים'
                    case 'content':
                        return 'תוכן חייב להכיל לפחות 20 תווים'
                    case 'category':
                        return 'קטגוריה חייבת להכיל לפחות 2 תווים'
                    case 'tags':
                        return 'חייב לבחור לפחות תג אחד'
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
                    case 'slug':
                        return 'כתובת URL יכולה להכיל רק אותיות קטנות, מספרים ומקפים'
                    default:
                        return 'הטקסט שהוזן אינו תקין'
                }
            default:
                return 'אירעה שגיאת אימות'
        }
    }).join(', ')
}

export async function createOrUpdateBlog(formData: FormData) {
    const session = await auth()
    if (!session) {
        return { error: 'אין הרשאה לביצוע פעולה זו' }
    }

    const rawFormData = Object.fromEntries(formData)

    try {
        const validatedData = blogSchema.parse({
            ...rawFormData,
            // @ts-ignore
            tags: rawFormData.tags ? rawFormData.tags.split(',') : [],
            isActive: rawFormData.isActive === 'on',
            // @ts-ignore
            slug: rawFormData.slug.replace(/\s+/g, '-').toLowerCase()
        })

        await connectToDatabase()

        if (rawFormData.id) {
            const res = await BlogModel.findByIdAndUpdate(rawFormData.id, validatedData, { new: true })
            revalidatePath(`/blog/${rawFormData.slug}`)
            revalidatePath(`/blog`)
            if (process.env.NODE_ENV === 'production') {
                await revalidateNetlify(rawFormData.slug as string)
            }
            return { message: 'המאמר עודכן בהצלחה', id: String(res._id) }
        } else {
            const newBlog = await BlogModel.create(validatedData)
            revalidatePath(`/blog/${rawFormData.slug}`)
            revalidatePath(`/blog`)
            if (process.env.NODE_ENV === 'production') {
                await revalidateNetlify(rawFormData.slug as string)
            }
            await fetch(`https://www.google.com/ping?sitemap=${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`)
            return { message: 'המאמר נוצר בהצלחה' , id: String(newBlog._id) }
        }
    } catch (error) {
        if (error instanceof ZodError) {
            return {
                error: formatZodErrors(error),
                details: error.errors  // Optional: for debugging
            }
        }
        console.error(error)
        return { error: 'אירעה שגיאה בשמירת המאמר' }
    }
}
const revalidateNetlify = async (slug: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?path=/blog/${slug}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.REVALIDATE_TOKEN}`
        }
    })
    await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate?path=/blog`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.REVALIDATE_TOKEN}`
        }
    })
    return true
}