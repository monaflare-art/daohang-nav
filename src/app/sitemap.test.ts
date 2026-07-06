import { describe, expect, it } from "vitest";
import { latestDate } from "@/app/sitemap";

describe("latestDate", () => {
  it("does not throw for an empty array and returns a valid fallback date", () => {
    const result = latestDate([]);

    expect(result).toBeInstanceOf(Date);
    expect(Number.isNaN(result.getTime())).toBe(false);
  });

  it("filters invalid date strings and returns the latest valid date", () => {
    const result = latestDate(["not-a-date", "2026-02-01", "invalid", "2026-07-06", "2025-12-31"]);

    expect(result.toISOString()).toBe(new Date("2026-07-06").toISOString());
  });
});
