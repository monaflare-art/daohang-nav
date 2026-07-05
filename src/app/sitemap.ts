import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { posts } from "@/data/posts";
import { resources } from "@/data/resources";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/rankings", "/blog", "/submit", "/about", "/disclaimer", "/privacy"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-07-05"),
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${siteConfig.url}/categories/${category.slug}`,
    lastModified: new Date("2026-07-05"),
  }));

  const resourceRoutes = resources.map((resource) => ({
    url: `${siteConfig.url}/resources/${resource.slug}`,
    lastModified: new Date(resource.submittedAt),
  }));

  const postRoutes = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...categoryRoutes, ...resourceRoutes, ...postRoutes];
}
