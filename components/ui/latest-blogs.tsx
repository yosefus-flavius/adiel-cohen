import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/data/blogs";
import { Card } from "./card";
import { Button } from "./button";
import { ArrowLeft } from "lucide-react";
import BlogModel from "@/server/blog/model";
import { unstable_cache } from "next/cache";

const getBlogs = unstable_cache(
  async () => {
    return  await BlogModel.find({ isActive: true }).sort({ createdAt: -1 }).limit(3)
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
)

export async function LatestBlogs() {
  const latestBlogs = await getBlogs(); ;
  // await new Promise((resolve) => setTimeout(resolve, 12000));

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
            <Link
              href={`/blog/${blog.slug}`}
              key={blog._id}
              className="group "
            >
              <Card
                className=" rounded-2xl p-8 shadow-sm hover:shadow-md h-full transition-shadow"
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
                <h3 className="mt-2 text-xl font-semibold group-hover:text-gray-600">
                  {blog.title}
                </h3>
                <p className="mt-3 text-gray-600 line-clamp-2">{blog.excerpt}</p>
              </div>
              </Card>
            </Link>
          ))}
      </div>
    </div>
    </section >
  );
}
