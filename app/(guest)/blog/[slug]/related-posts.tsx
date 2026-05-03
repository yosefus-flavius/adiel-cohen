import BlogCard from "@/components/blog-card";
import BlogModel, { IBlog } from '@/server/blog/blog.model';

export default async function RelatedPosts({ blog }: { blog: IBlog }) {
    const posts = await BlogModel.aggregate([
        { $match: { slug: { $ne: blog.slug }, isActive: true } },
        { $sample: { size: 3 } },
        { $sort: { date: -1 } }
    ]);

    // Convert MongoDB documents to plain objects for client component serialization
    const relatedPosts = posts.map(post => ({
        ...post,
        _id: String(post._id),
        createdAt: post.createdAt ? new Date(post.createdAt).toISOString() : undefined,
        updatedAt: post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined,
        date: post.date ? new Date(post.date).toISOString() : undefined,
    }));

    return (
        <div>
            {relatedPosts.length > 0 && (
                <div className="max-w-7xl mx-auto mt-24">
                    <h2 className="text-3xl font-bold tracking-tight mb-12">כתבות נוספות</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map((post) => (
                            <BlogCard key={post._id} blog={post} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
