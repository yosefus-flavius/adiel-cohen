import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/data/blogs";

export function LatestBlogs() {
  // Get the 3 most recent blogs
  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">כתבות אחרונות</h2>
          <Link
            href="/blog"
            className="text-lg font-semibold text-blue-600 hover:text-blue-500"
          >
            לכל הכתבות
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((blog) => (
            <Link
              key={blog._id}
              href={`/blog/${blog.slug}`}
              className="group"
            >
              <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div>
                <span className="text-sm text-gray-500">
                  {new Date(blog.date).toLocaleDateString("he-IL", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <h3 className="mt-2 text-xl font-semibold group-hover:text-blue-600">
                  {blog.title}
                </h3>
                <p className="mt-3 text-gray-600 line-clamp-2">{blog.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
