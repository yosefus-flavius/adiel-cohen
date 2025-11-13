import BlogModel from "@/server/blog/blog.model";
import { connectToDatabase } from "@/server/connect";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPosts from "./related-posts";
import Link from "next/link";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  await connectToDatabase();
  const blog = await BlogModel.findOne({ slug: decodeURIComponent(slug), isActive: true });
  blog._id = blog._id.toString();

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen py-8">
      <article className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6 text-sm">
              <time dateTime={blog.date} className="text-gray-500">
                {new Date(blog.date).toLocaleDateString("he-IL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-gray-600 font-medium">{blog.category}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-8">{blog.title}</h1>
            <div className="relative h-[60vh] rounded-2xl overflow-hidden">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none whitespace-pre-line">
            {blog.content}
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {blog.tags.map((tag: string) => (
              <Link key={tag} href={`/blog?search=${tag}`}>
                <span
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <RelatedPosts blog={blog} />
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  await connectToDatabase();
  const blogs = await BlogModel.find({ isActive: true }).select('slug');

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  await connectToDatabase();
  const slug = (await params).slug
  const blog = await BlogModel.findOne({ slug: decodeURIComponent(slug), isActive: true });

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    } as Metadata;
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${blog.slug}`,
      images: [
        {
          url: blog.coverImage,
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
    },
  } as Metadata;
}
//  for testing await 20 seconds
// await new Promise((resolve) => setTimeout(resolve, 20000));