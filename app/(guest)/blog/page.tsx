import BlogCard from "@/components/blog-card";
import { SearchPosts } from "@/components/ui/search-posts";
// import { blogsGemini } from "@/lib/data/blogs-gemini";
// import { blogs } from "@/lib/data/blogs";
import BlogModel, { IBlog } from "@/server/blog/blog.model";
import { connectToDatabase } from "@/server/connect";
import { Metadata } from "next";

export const metadata: Metadata = {
   alternates: { canonical: '/blog' },
  title: "כתבות משכנתאות",
  description: "כתבות ומדריכים בנושא משכנתאות: איך לבחור מסלול, מתי כדאי למחזר ומה חשוב לדעת לפני שלוקחים משכנתא."
}


export default async function BlogPage({ searchParams }: { searchParams: Promise<{ search?: string }> }) {
  const query = await searchParams
  const term = query.search || ''

  await connectToDatabase();

  const blogs = term ? await BlogModel.find({
    $or: [
      { name: { $regex: term, $options: 'i' } },
      { content: { $regex: term, $options: 'i' } }
    ],
    isActive: true
  }).sort({ createdAt: -1 }).lean() : await BlogModel.find({ isActive: true }).sort({ createdAt: -1 }).lean();

  // Convert MongoDB documents to plain objects for client component serialization
  const filteredBlogs = blogs.map(blog => ({
    ...blog,
    _id: String(blog._id),
    createdAt: blog.createdAt ? new Date(blog.createdAt).toISOString() : undefined,
    updatedAt: blog.updatedAt ? new Date(blog.updatedAt).toISOString() : undefined,
    date: blog.date ? new Date(blog.date).toISOString() : undefined,
  }));
  // if (!filteredBlogs.length) {
  //   await BlogModel.create(blogs.map(b=> ({...b, author: 'עדיאל כהן', date: new Date()})))
  // }

  // if (!filteredBlogs.length) {
  //   await BlogModel.create(blogsGemini)
  // }

  return (
    <main className="bg-background py-16 text-foreground md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-16">
          <h1 className="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl">
            כתבות משכנתאות
          </h1>
          <p className="mb-8 text-center text-lg text-muted-foreground">
            כתבות ומדריכים בנושא חדשות פיננסים ומשכנתאות
          </p>
          <SearchPosts />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (<BlogCard key={blog._id} blog={blog as unknown as IBlog} headingLevel="h2" />))}
          {!filteredBlogs.length && <p className="col-span-full py-12 text-center text-muted-foreground">לא נמצאו כתבות</p>}
        </div>
      </div>
    </main>
  );
}
