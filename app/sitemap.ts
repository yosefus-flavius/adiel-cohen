import { blogs } from "@/lib/data/blogs";
import BlogModel from "@/server/blog/blog.model";
import { connectToDatabase } from "@/server/connect";
import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://adiel-cohen.co.il';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectToDatabase()

  // Get all blog posts URLs
  const blogUrlsRaw = await BlogModel.find({ isActive: true })
    .select("slug")
    .lean()
    .exec()

  const blogUrls = blogUrlsRaw.map((blog) => ({
    url: `${siteUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));


  // Define static routes
  const routes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/calc`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/restore`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  return [...routes, ...blogUrls];
}