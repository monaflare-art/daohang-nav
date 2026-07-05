"use client";

import { useMemo, useState } from "react";
import { SearchIcon } from "@/components/icons";
import { ResourceCard } from "@/components/resource-card";
import { categories } from "@/data/categories";
import { resources } from "@/data/resources";

export function SearchDirectory() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    if (!keyword) {
      return [];
    }

    return resources
      .filter((resource) => {
        const haystack = [
          resource.name,
          resource.description,
          resource.subcategory,
          ...resource.tags,
          categories.find((category) => category.slug === resource.category)?.name ?? "",
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(keyword);
      })
      .slice(0, 12);
  }, [query]);

  return (
    <section className="min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <label htmlFor="site-search" className="sr-only">搜索资源</label>
      <div className="flex min-w-0 items-center gap-3 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 focus-within:border-[#23a995] focus-within:bg-white">
        <SearchIcon className="h-5 w-5 shrink-0 text-slate-400" />
        <input
          id="site-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="搜索资源、标签、分类，例如 AI、PDF、部署、字体"
          className="h-10 min-w-0 flex-1 bg-transparent text-sm font-semibold text-slate-950 outline-none placeholder:text-slate-400"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="rounded-md px-2 py-1 text-xs font-bold text-slate-500 hover:bg-slate-200 hover:text-slate-950"
          >
            清空
          </button>
        ) : null}
      </div>
      {query ? (
        <div className="mt-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-bold text-slate-950">搜索结果</p>
            <p className="text-xs font-medium text-slate-500">{results.length} 个匹配</p>
          </div>
          {results.length > 0 ? (
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {results.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} compact />
              ))}
            </div>
          ) : (
            <p className="rounded-lg bg-slate-50 p-4 text-sm text-slate-500">没有匹配结果，可以去收录提交页推荐资源。</p>
          )}
        </div>
      ) : null}
    </section>
  );
}
