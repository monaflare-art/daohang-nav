import Link from "next/link";
import { ExternalIcon } from "@/components/icons";
import { getCategory } from "@/data/categories";
import type { Resource } from "@/data/resources";

function faviconUrl(url: string) {
  const hostname = new URL(url).hostname;

  return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
}

export function ResourceCard({ resource, compact = false }: { resource: Resource; compact?: boolean }) {
  const category = getCategory(resource.category);

  return (
    <article
      className={`group flex h-full flex-col rounded-xl border bg-white transition hover:-translate-y-0.5 hover:border-[#23a995] hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] ${
        resource.status === "inactive" ? "border-slate-200 opacity-60" : "border-[#dfe7f0]"
      } ${compact ? "p-4" : "p-5"}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element -- External favicon endpoint returns tiny icons; Next image optimization is unnecessary here. */}
          <img src={faviconUrl(resource.url)} alt="" className="h-7 w-7 rounded-md" loading="lazy" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <Link href={`/resources/${resource.slug}`} className="block truncate text-base font-black text-slate-950 hover:text-[#116b5f]">
              {resource.name}
            </Link>
            <div className="flex shrink-0 gap-1">
              {resource.isSponsored ? (
                <span className="rounded-md bg-amber-100 px-1.5 py-1 text-[11px] font-black text-amber-800">推广</span>
              ) : resource.isFeatured ? (
                <span className="rounded-md bg-emerald-50 px-1.5 py-1 text-[11px] font-black text-emerald-700">推荐</span>
              ) : null}
              {resource.status === "inactive" ? (
                <span className="rounded-md bg-slate-100 px-1.5 py-1 text-[11px] font-bold text-slate-500">失效</span>
              ) : null}
            </div>
          </div>
          <p className="mt-1 truncate text-xs font-semibold text-slate-500">
            {category?.name ?? resource.category} / {resource.subcategory}
          </p>
        </div>
      </div>
      <p className={`mt-3 flex-1 text-sm leading-6 text-slate-600 ${compact ? "line-clamp-2" : ""}`}>
        {resource.description}
      </p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-wrap gap-1">
          {resource.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-600">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          data-resource-slug={resource.slug}
          className="inline-flex shrink-0 items-center gap-1 rounded-md bg-slate-950 px-2.5 py-1.5 text-xs font-bold text-white transition hover:bg-[#116b5f]"
        >
          访问
          <ExternalIcon />
        </a>
      </div>
    </article>
  );
}
