import BlogCard from "@/components/blog-card";
import { SearchPosts } from "@/components/ui/search-posts";
// import { blogsGemini } from "@/lib/data/blogs-gemini";
// import { blogs } from "@/lib/data/blogs";
import BlogModel, { IBlog } from "@/server/blog/blog.model";
import { connectToDatabase } from "@/server/connect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "כתבות משכנתאות",
  description: "כתבות ותחקירים בנושא חדשות פיננסים ומשכנתאות "
}


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

  // if (!filteredBlogs.length) {
  //   await BlogModel.create(blogsGemini)
  // }

  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-center ">
            כתבות משכנתאות
          </h1>
          <p className="mb-8 text-center opacity-80" >
            כתבות ומדריכים בנושא חדשות פיננסים ומשכנתאות
          </p>
          <SearchPosts />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog: IBlog) => (<BlogCard key={blog._id as string} blog={blog} />))}
          {!filteredBlogs.length && <p className="text-center">לא נמצאו כתבות</p>}
        </div>
      </div>
    </main>
  );
}
