import { Card } from "@/components/ui/card";
import { blogs } from "@/lib/data/blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


export default async function BlogPostPage({ params, }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const blog = blogs.find((b) => b.slug === slug);

  //  for testing await 20 seconds
  // await new Promise((resolve) => setTimeout(resolve, 20000));

  if (!blog) {
    notFound();
  }

  // Get 3 related posts (same category, excluding current post)
  const relatedPosts = blogs
    .filter((b) => b.tags.find(tag=>  blog.tags.includes(tag))  || b.category === blog.category && (b.slug !== blog.slug))
    .slice(0, 3);

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
              <span className="text-blue-600 font-medium">{blog.category}</span>
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
                  <h3 className="text-xl px-4 font-semibold flex-1 group-hover:text-blue-600 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 px-4 mb-6  line-clamp-2">{post.excerpt}</p>
                      </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}


export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }
  else {
    return {
      title: blog.title,
      description: blog.excerpt,
      openGraph: {
        title: blog.title,
        description: blog.excerpt,
        type: "article",
        url: `https://example.com/blog/${slug}`,
        images: [
          {
            url: blog.coverImage,
            width: 800,
            height: 600,
            alt: blog.title,
          },
        ],
      },
    };
  }
}