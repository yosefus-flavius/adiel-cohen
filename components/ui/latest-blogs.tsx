import BlogModel, { IBlog } from "@/server/blog/blog.model";
import { connectToDatabase } from "@/server/connect";
import { ArrowLeft } from "lucide-react";
import { unstable_cache } from "next/cache";
import Link from "next/link";
import BlogCard from "../blog-card";

const getBlogs = unstable_cache(
  async () => {
    await connectToDatabase();
    const blogs = await BlogModel.find({ isActive: true }).sort({ createdAt: -1 }).limit(3).lean();
    // Convert MongoDB documents to plain objects for client component serialization
    return blogs.map(blog => ({
      ...blog,
      _id: String(blog._id),
      createdAt: blog.createdAt ? new Date(blog.createdAt).toISOString() : undefined,
      updatedAt: blog.updatedAt ? new Date(blog.updatedAt).toISOString() : undefined,
      date: blog.date ? new Date(blog.date).toISOString() : undefined,
    }));
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
)

export async function LatestBlogs() {
  const latestBlogs = await getBlogs();

  return (
    <section className="section-padding border-t border-border bg-card">
      <div className="container-main">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-bold text-[var(--color-brand-gold-text)]">בלוג</p>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">כתבות אחרונות</h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center gap-2 text-base font-bold text-[var(--color-brand-gold-text)] hover:underline"
          >
            לכל הכתבות
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog as unknown as IBlog} />
          ))}
        </div>
      </div>
    </section>
  );
}
