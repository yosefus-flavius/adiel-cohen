import BlogModel, { IBlog } from "@/server/blog/blog.model";
import { connectToDatabase } from "@/server/connect";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPosts from "./related-posts";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adiel-cohen.co.il";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  await connectToDatabase();
  const blogDoc = await BlogModel.findOne({ slug: decodeURIComponent(slug), isActive: true }).lean() as unknown as IBlog;

  if (!blogDoc) {
    notFound();
  }

  // Convert MongoDB document to plain object
  const blog = {
    ...blogDoc,
    _id: String(blogDoc._id),
    createdAt: blogDoc.createdAt ? new Date(blogDoc.createdAt).toISOString() : undefined,
    updatedAt: blogDoc.updatedAt ? new Date(blogDoc.updatedAt).toISOString() : undefined,
    date: blogDoc.date ? new Date(blogDoc.date).toISOString() : undefined,
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImage,
    datePublished: blog.date,
    dateModified: blog.updatedAt ?? blog.date,
    author: { "@type": "Person", name: blog.author || "עדיאל כהן" },
    publisher: { "@type": "Organization", name: "עדיאל כהן - יועץ משכנתאות", url: siteUrl },
    mainEntityOfPage: `${siteUrl}/blog/${blog.slug}`,
    inLanguage: "he-IL",
  };

  return (
    <main className="min-h-screen py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <article className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6 text-sm">
             {blog.date && <time dateTime={blog.date} className="text-gray-500">
                {new Date(blog.date).toLocaleDateString("he-IL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>}
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
            {blog.tags?.map?.((tag: string) => (
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

        <RelatedPosts blog={blog as unknown as IBlog} />
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

  const url = `${siteUrl}/blog/${blog.slug}`;

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: { canonical: `/blog/${blog.slug}` },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      url,
      publishedTime: blog.date ? new Date(blog.date).toISOString() : undefined,
      modifiedTime: blog.updatedAt ? new Date(blog.updatedAt).toISOString() : undefined,
      authors: [blog.author],
      images: [{ url: blog.coverImage, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
    },
  } as Metadata;
}
