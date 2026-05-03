import BlogModel, { IBlog } from "@/server/blog/blog.model";
import { connectToDatabase } from "@/server/connect";
import { ArrowLeft } from "lucide-react";
import { unstable_cache } from "next/cache";
import Link from "next/link";
import BlogCard from "../blog-card";
import { Button } from "./button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

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
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-main">
        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[var(--color-brand-gold)]" />
              <span className="text-sm font-semibold text-[var(--color-brand-gold)] uppercase tracking-wider">
                בלוג
              </span>
            </div>
            <h2 className="text-h2 text-slate-900">
              כתבות אחרונות
            </h2>
          </div>
          
          <Link href="/blog">
            <Button 
              className="text-[var(--color-brand-gold)] hover:text-[var(--color-brand-gold-dark)] flex gap-2 items-center font-semibold" 
              variant="ghost"
            >
              לכל הכתבות
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
        </FadeIn>

        {/* Blog Grid */}
        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {latestBlogs.map((blog) => (
            <StaggerItem key={blog._id}>
              <BlogCard blog={blog as unknown as IBlog} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
