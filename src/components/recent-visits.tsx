"use client";

import { useEffect, useState } from "react";
import { recentStorageKey, recentUpdatedEvent } from "@/components/resource-click-tracker";
import { resources, type Resource } from "@/data/resources";

export function RecentVisits() {
  const [recent, setRecent] = useState<Resource[]>([]);

  useEffect(() => {
    const updateRecent = () => {
      const raw = window.localStorage.getItem(recentStorageKey);
      const slugs = raw ? (JSON.parse(raw) as string[]) : [];
      setRecent(slugs.map((slug) => resources.find((resource) => resource.slug === slug)).filter(Boolean) as Resource[]);
    };

    updateRecent();
    window.addEventListener(recentUpdatedEvent, updateRecent);

    return () => window.removeEventListener(recentUpdatedEvent, updateRecent);
  }, []);

  if (recent.length === 0) {
    return (
      <section className="rounded-lg border border-dashed border-slate-300 bg-white p-4">
        <h2 className="text-sm font-black text-slate-950">最近访问</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">访问资源后会自动显示在这里，只保存在当前浏览器。</p>
      </section>
    );
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <h2 className="text-sm font-black text-slate-950">最近访问</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {recent.map((resource) => (
          <a
            key={resource.slug}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            data-resource-slug={resource.slug}
            className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-[#116b5f] hover:text-white"
          >
            {resource.name}
          </a>
        ))}
      </div>
    </section>
  );
}
