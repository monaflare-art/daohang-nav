import { describe, expect, it } from "vitest";
import {
  getFeaturedResources,
  getRankingResources,
  getResource,
  getResourcesByCategory,
} from "@/data/resources";

describe("resource data helpers", () => {
  it("returns a resource by slug and undefined for missing slugs", () => {
    expect(getResource("deepseek")?.name).toBe("DeepSeek");
    expect(getResource("missing-resource-slug")).toBeUndefined();
  });

  it("filters resources by category and returns an empty array for missing categories", () => {
    const aiTools = getResourcesByCategory("ai-tools");

    expect(aiTools.length).toBeGreaterThan(0);
    expect(aiTools.every((resource) => resource.category === "ai-tools")).toBe(true);
    expect(getResourcesByCategory("missing-category")).toEqual([]);
  });

  it("returns only featured resources", () => {
    const featuredResources = getFeaturedResources();

    expect(featuredResources.length).toBeGreaterThan(0);
    expect(featuredResources.every((resource) => resource.isFeatured)).toBe(true);
  });

  it("sorts ranking resources by sponsored, then featured, then name", () => {
    const rankedResources = getRankingResources();

    const expected = [...rankedResources].sort((a, b) => {
      if (a.isSponsored !== b.isSponsored) {
        return Number(b.isSponsored) - Number(a.isSponsored);
      }

      if (a.isFeatured !== b.isFeatured) {
        return Number(b.isFeatured) - Number(a.isFeatured);
      }

      return a.name.localeCompare(b.name);
    });

    expect(rankedResources.map((resource) => resource.slug)).toEqual(
      expected.map((resource) => resource.slug),
    );
    expect(rankedResources.findIndex((resource) => !resource.isSponsored)).toBeGreaterThan(0);
    expect(rankedResources.slice(0, rankedResources.findIndex((resource) => !resource.isSponsored)).every((resource) => resource.isSponsored)).toBe(true);
  });
});
