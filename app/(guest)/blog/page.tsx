import { Card } from "@/components/ui/card";
import { SearchPosts } from "@/components/ui/search-posts";
// import { blogs } from "@/lib/data/blogs";
import BlogModel, { IBlog } from "@/server/blog/model";
import { connectToDatabase } from "@/server/connect";
import Image from "next/image";
import Link from "next/link";


export default async function BlogPage({ searchParams }: { searchParams: Promise<{ search?: string }> }) {
  const query = await searchParams
  const term = query.search || ''

  await connectToDatabase();

  const filteredBlogs = term ? await BlogModel.find({
    $or: [
      { name: { $regex: term, $options: 'i' } },
      { content: { $regex: term, $options: 'i' } }
    ],
    isActive: true
  }).sort({ createdAt: -1 }) : await BlogModel.find({ isActive: true }).sort({ createdAt: -1 });
  // if (!filteredBlogs.length) {
  //   await BlogModel.create(blogs.map(b=> ({...b, author: 'עדיאל כהן', date: new Date()})))
  // }

  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-center mb-8">
            הבלוג שלי
          </h1>
          <SearchPosts />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog: IBlog) => (
            <Link
              key={blog._id?.toString()}
              href={`/blog/${blog.slug}`}
              className="group h-full"
            >
              <Card className="h-full">

                <div className="relative h-64 mb-6 rounded-t-xl  overflow-hidden">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm text-gray-500">
                      {new Date(blog.date).toLocaleDateString("he-IL", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-sm font-medium text-gray-600">
                      {blog.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold group-hover:text-gray-600 mb-3">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
