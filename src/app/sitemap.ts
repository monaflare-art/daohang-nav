import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { posts } from "@/data/posts";
import { resources } from "@/data/resources";
import { siteConfig } from "@/lib/site";

export function latestDate(dates: string[]) {
  return new Date(
    dates
      .map((date) => new Date(date).getTime())
      .filter((time) => Number.isFinite(time))
      .sort((a, b) => b - a)[0] ?? Date.now(),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const latestContentDate = latestDate([...resources.map((resource) => resource.submittedAt), ...posts.map((post) => post.date)]);

  const staticRoutes = ["", "/rankings", "/blog", "/submit", "/about", "/disclaimer", "/privacy"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: latestContentDate,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${siteConfig.url}/categories/${category.slug}`,
    lastModified: latestDate(resources.filter((resource) => resource.category === category.slug).map((resource) => resource.submittedAt)),
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
