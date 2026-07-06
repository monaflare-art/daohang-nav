"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ExternalIcon, SearchIcon } from "@/components/icons";
import { categories } from "@/data/categories";
import { resources } from "@/data/resources";

const recentSearches = ["ChatGPT", "PDF工具", "思维导图", "设计素材"];
const hotSearches = ["ChatGPT", "DeepSeek", "Canva", "Google Translate", "Smallpdf"];

function faviconUrl(url: string) {
  return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`;
}

export function HomeCommandSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    const fallback = resources.filter((resource) => resource.isFeatured).slice(0, 5);

    if (!keyword) {
      return fallback;
    }

    return resources
      .filter((resource) => {
        const categoryName = categories.find((category) => category.slug === resource.category)?.name ?? "";
        return [resource.name, resource.description, resource.subcategory, categoryName, ...resource.tags]
          .join(" ")
          .toLowerCase()
          .includes(keyword);
      })
      .slice(0, 5);
  }, [query]);

  return (
    <section className="command-panel">
      <label htmlFor="home-command-search" className="sr-only">搜索资源</label>
      <div className="command-input-shell">
        <span className="command-search-icon">
          <SearchIcon className="h-7 w-7" />
        </span>
        <input
          id="home-command-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="搜索资源、工具、文章"
          className="h-16 min-w-0 flex-1 bg-transparent text-2xl font-medium tracking-[-0.03em] text-slate-950 outline-none placeholder:text-slate-400"
        />
        <div className="hidden items-center gap-2 text-[12px] font-semibold text-slate-400 md:flex">
          <span className="command-kbd">⌘</span>
          <span className="command-kbd">K</span>
        </div>
      </div>

      <div className="command-grid">
        <div className="command-column">
          <div className="command-column-title">最近搜索</div>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setQuery(item)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-[13px] font-medium text-slate-600 transition hover:border-emerald-200 hover:text-emerald-700"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="command-column">
          <div className="command-column-title">热门搜索</div>
          <ol className="space-y-2">
            {hotSearches.map((item, index) => (
              <li key={item} className="flex items-center gap-2 text-[13px] font-medium text-slate-600">
                <span className="flex h-5 w-5 items-center justify-center rounded-md border border-slate-200 bg-white text-[11px] text-slate-500">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div className="command-column command-preview">
          <div className="mb-3 flex items-center justify-between">
            <div className="command-column-title">搜索预览</div>
            <Link href="/rankings" className="text-[12px] font-semibold text-slate-400 hover:text-slate-950">
              查看全部
            </Link>
          </div>
          <div className="space-y-1">
            {results.map((resource) => {
              const category = categories.find((item) => item.slug === resource.category);

              return (
                <Link key={resource.slug} href={`/resources/${resource.slug}`} className="group flex min-w-0 items-center gap-3 rounded-2xl px-2.5 py-2 transition hover:bg-slate-50">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element -- External favicon endpoint returns tiny icons; Next image optimization is unnecessary here. */}
                    <img src={faviconUrl(resource.url)} alt="" className="h-5 w-5 rounded" loading="lazy" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-slate-950">{resource.name}</span>
                    <span className="mt-0.5 block truncate text-xs text-slate-500">{resource.description}</span>
                  </span>
                  <span className="hidden shrink-0 text-[12px] font-semibold text-emerald-700 sm:block">{category?.name}</span>
                  <ExternalIcon className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-slate-950" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
