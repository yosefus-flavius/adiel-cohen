import BlogCard from "@/components/blog-card";
import { Card } from "@/components/ui/card";
import BlogModel, { IBlog } from '@/server/blog/blog.model';
import Image from "next/image";
import Link from "next/link";

export default async function RelatedPosts({ blog }: { blog: IBlog }) {
    const relatedPosts = await BlogModel.find({
        $and: [
            { slug: { $ne: blog.slug } },
            {
                $or: [
                    { tags: { $elemMatch: { $in: blog.tags } } },
                    { category: blog.category }
                ]
            },
            { isActive: true }
        ]
    }).limit(3).sort({ date: -1 });

    return (
        <div>
            {relatedPosts.length > 0 && (
                <div className="max-w-7xl mx-auto mt-24">
                    <h2 className="text-3xl font-bold tracking-tight mb-12">כתבות דומות</h2>
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
