import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import BlogModel, { IBlog } from "@/server/blog/blog.model";
import { connectToDatabase } from "@/server/connect";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPosts from "./related-posts";
import { Markdown } from "@/components/markdown";
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
    <main className="bg-background py-8 text-foreground md:py-12">
      <BreadcrumbJsonLd items={[{ name: "כתבות", path: "/blog" }, { name: blog.title, path: `/blog/${blog.slug}` }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <article className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6 text-sm">
             {blog.date && <time dateTime={blog.date} className="text-muted-foreground">
                {new Date(blog.date).toLocaleDateString("he-IL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>}
              <span className="rounded-full bg-[var(--color-brand-gold)]/15 px-3 py-1 font-medium text-[var(--color-brand-gold-text)]">{blog.category}</span>
            </div>
            <h1 className="mb-8 text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl">{blog.title}</h1>
            <div className="relative h-[40vh] overflow-hidden rounded-2xl bg-muted md:h-[55vh]">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
                priority
              />
            </div>
          </header>

          <Markdown content={blog.content} />

          <div className="flex flex-wrap gap-2 mt-8">
            {blog.tags?.map?.((tag: string) => (
              <Link key={tag} href={`/blog?search=${tag}`}>
                <span
                  className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-[var(--color-brand-gold-text)]"
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

// WhatsApp/Facebook often skip webp: serve a 1200x630 JPG via Cloudinary, else the default JPG.
function shareImage(src?: string) {
  if (src && src.includes("res.cloudinary.com") && src.includes("/image/upload/")) {
    return src
      .replace("/image/upload/", "/image/upload/f_jpg,q_auto,c_fill,w_1200,h_630/")
      .replace(/\.(webp|png|avif)(\?.*)?$/i, ".jpg");
  }
  return `${siteUrl}/og-image.jpg`;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  await connectToDatabase();
  const slug = (await params).slug
  const blog = await BlogModel.findOne({ slug: decodeURIComponent(slug), isActive: true });

  if (!blog) {
    return {
      title: "הכתבה לא נמצאה",
      robots: { index: false },
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
      images: [{ url: shareImage(blog.coverImage), width: 1200, height: 630, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [shareImage(blog.coverImage)],
    },
  } as Metadata;
}
