import { auth } from '@/auth';
import BlogModel, { IBlog } from '@/server/blog/model';
import { connectToDatabase } from '@/server/connect';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function AdminBlogList() {
    const session = await auth();

    if (!session || !session.user) {
        redirect('/auth/signin');
    }

    await connectToDatabase();
    const blogs = await BlogModel.find().sort({ date: -1 });

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Blog Management</h1>
            <Link
                href="/admin/blogs/create"
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
            >
                Create New Blog
            </Link>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Date</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog: IBlog) => (
                        <tr key={blog._id?.toString()}>
                            <td className="border p-2">{blog.title}</td>
                            <td className="border p-2">{blog.date.toLocaleDateString()}</td>
                            <td className="border p-2">
                                <Link
                                    href={`/admin/blogs/${blog._id}/edit`}
                                    className="text-blue-500 mr-2"
                                >
                                    Edit
                                </Link>
                                <button
                                    className="text-red-500"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}