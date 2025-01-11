import { auth } from '@/auth'
import BlogModel, { IBlog } from '@/server/blog/model'
import { connectToDatabase } from '@/server/connect'
import { redirect } from 'next/navigation'
import BlogForm from './blog-form'


async function getBlog(id: string) {
    await connectToDatabase()
    return await BlogModel.findById(id)
}


export default async function BlogEditPage({ params }: { params: Promise<{ id: string }> }) {
    const session = await auth()
    if (!session) {
        redirect('/login')
    }
    const { id } = await params

    let blog: IBlog | null = id !== 'new' ? await getBlog(id) : null

    if (blog) {
       blog = JSON.parse(JSON.stringify(blog))
    }
    
    return (
        <div className="container mx-auto p-4">
            <BlogForm blog={blog} />
        </div>
    )
}