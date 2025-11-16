import BlogModel from "@/server/blog/blog.model";
import { connectToDatabase } from "@/server/connect";
import { ArrowLeft } from "lucide-react";
import { unstable_cache } from "next/cache";
import Link from "next/link";
import BlogCard from "../blog-card";
import { Button } from "./button";

const getBlogs = unstable_cache(
  async () => {
    await connectToDatabase();
    return await BlogModel.find({ isActive: true }).sort({ createdAt: -1 }).limit(3)
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
)

export async function LatestBlogs() {
  const latestBlogs = await getBlogs();

  return (
    <section className="py-12 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16 gap-4 flex-wrap flex-cols sm:flex-row">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">כתבות אחרונות</h2>
          <Link
            href="/blog"
            className=""
          >
            <Button className="text-sm flex gap-4" variant="link" >
              לכל הכתבות
              <ArrowLeft />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section >
  );
}
