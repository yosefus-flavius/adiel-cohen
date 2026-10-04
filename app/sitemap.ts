import BlogModel from "@/server/blog/blog.model";
import { connectToDatabase } from "@/server/connect";
import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adiel-cohen.co.il';

// Force dynamic rendering to ensure sitemap reflects latest blog posts
export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectToDatabase()

  // Get all blog posts URLs
  const blogUrlsRaw = await BlogModel.find({ isActive: true })
    .select("slug updatedAt")
    .lean()
    .exec()

  const blogUrls = blogUrlsRaw.map((blog) => ({
    url: `${siteUrl}/blog/${blog.slug}`,
    lastModified: blog.updatedAt ? new Date(blog.updatedAt) : undefined,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));


  // Define static routes
  const routes = [
    {
      url: siteUrl,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/calc`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/news`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/leads`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/restore`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  return [...routes, ...blogUrls];
}