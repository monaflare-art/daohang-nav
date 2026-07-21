import { describe, expect, it } from "vitest";
import { contentLinks, dealSections, getDealPageStats } from "@/app/deals/page";
import { getConnectedAffiliateResourceCount, posts } from "@/data/posts";
import { allResources, resources } from "@/data/resources";

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

  it("keeps deals sections connected to existing public resources", () => {
    const publicResourceSlugs = new Set(resources.map((resource) => resource.slug));
    const missingResources = dealSections.flatMap((section) =>
      section.slugs
        .filter((resourceSlug) => !publicResourceSlugs.has(resourceSlug))
        .map((resourceSlug) => `${section.title}:${resourceSlug}`),
    );

    expect(missingResources).toEqual([]);
    expect(dealSections.every((section) => section.slugs.length > 0)).toBe(true);
  });

  it("keeps deals section titles unique", () => {
    const sectionTitles = dealSections.map((section) => section.title);

    expect(new Set(sectionTitles).size).toBe(sectionTitles.length);
  });

  it("summarizes unique public deal resources and connected affiliate entries", () => {
    const publicResourceSlugs = new Set(resources.map((resource) => resource.slug));
    const uniqueDealSlugs = new Set(dealSections.flatMap((section) => section.slugs).filter((resourceSlug) => publicResourceSlugs.has(resourceSlug)));
    const connectedDealSlugs = new Set(
      resources
        .filter((resource) => uniqueDealSlugs.has(resource.slug))
        .filter((resource) => resource.affiliateStatus === "connected")
        .map((resource) => resource.slug),
    );
    const stats = getDealPageStats();

    expect(stats.resourceCount).toBe(uniqueDealSlugs.size);
    expect(stats.connectedCount).toBe(connectedDealSlugs.size);
    expect(stats.sectionCount).toBe(dealSections.length);
    expect(stats.contentCount).toBe(contentLinks.length);
  });

  it("counts only connected affiliate resources for article conversion CTAs", () => {
    expect(
      getConnectedAffiliateResourceCount([
        { affiliateStatus: "connected" },
        { affiliateStatus: "pending" },
        { affiliateStatus: "available" },
        { affiliateStatus: "none" },
        {},
      ]),
    ).toBe(1);
  });
});
