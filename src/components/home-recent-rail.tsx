"use client";

import { useEffect, useState } from "react";
import { recentStorageKey, recentUpdatedEvent } from "@/components/resource-click-tracker";
import { resources, type Resource } from "@/data/resources";

const fallbackSlugs = ["chatgpt", "deepseek", "figma", "google-drive", "notion"];

function faviconUrl(url: string) {
  return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`;
}

export function HomeRecentRail() {
  const [recent, setRecent] = useState<Resource[]>([]);

  useEffect(() => {
    const updateRecent = () => {
      const raw = window.localStorage.getItem(recentStorageKey);
      const slugs = raw ? (JSON.parse(raw) as string[]) : fallbackSlugs;
      setRecent(slugs.map((slug) => resources.find((resource) => resource.slug === slug)).filter(Boolean) as Resource[]);
    };

    updateRecent();
    window.addEventListener(recentUpdatedEvent, updateRecent);

    return () => window.removeEventListener(recentUpdatedEvent, updateRecent);
  }, []);

  return (
    <div className="command-rail-recent">
      <p>最近</p>
      <div className="space-y-2">
        {recent.slice(0, 5).map((resource) => (
          <a
            key={resource.slug}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            data-resource-slug={resource.slug}
            className="group flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-emerald-200"
            aria-label={resource.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- External favicon endpoint returns tiny icons; Next image optimization is unnecessary here. */}
            <img src={faviconUrl(resource.url)} alt="" className="h-5 w-5 rounded" loading="lazy" />
          </a>
        ))}
      </div>
    </div>
  );
}
