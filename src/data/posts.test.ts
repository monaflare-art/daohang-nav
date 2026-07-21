import { describe, expect, it } from "vitest";
import { contentLinks } from "@/app/deals/page";
import { posts } from "@/data/posts";
import { allResources } from "@/data/resources";

const postSlugs = new Set(posts.map((post) => post.slug));
const resourceSlugs = new Set(allResources.map((resource) => resource.slug));

describe("post data integrity", () => {
  it("keeps post slugs unique", () => {
    expect(postSlugs.size).toBe(posts.length);
  });

  it("links every related resource slug to an existing resource", () => {
    const missingRelatedResources = posts.flatMap((post) =>
      post.relatedResourceSlugs
        .filter((resourceSlug) => !resourceSlugs.has(resourceSlug))
        .map((resourceSlug) => `${post.slug}:${resourceSlug}`),
    );

    expect(missingRelatedResources).toEqual([]);
  });

  it("points deals content links to existing blog posts", () => {
    const missingPosts = contentLinks
      .map((link) => link.href.replace(/^\/blog\//, ""))
      .filter((slug) => !postSlugs.has(slug));

    expect(missingPosts).toEqual([]);
  });
});
