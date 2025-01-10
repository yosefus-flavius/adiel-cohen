import { Card } from "@/components/ui/card";
import BlogModel, { IBlog } from '@/server/blog/model';
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
                            <Link
                                key={post._id}
                                href={`/blog/${post.slug}`}
                                className="group h-full"
                            >
                                <Card className="h-full flex flex-col">

                                    <div className="relative h-48 mb-6 rounded-t-xl overflow-hidden">
                                        <Image
                                            src={post.coverImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-xl px-4 font-semibold flex-1 group-hover:text-gray-600 mb-3">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 px-4 mb-6  line-clamp-2">{post.excerpt}</p>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
