import Link from "next/link";
import { ExternalIcon } from "@/components/icons";
import { getCategory } from "@/data/categories";
import type { Resource } from "@/data/resources";

export function ResourceCard({ resource, compact = false }: { resource: Resource; compact?: boolean }) {
  const category = getCategory(resource.category);

  return (
    <article
      className={`group flex h-full flex-col rounded-lg border bg-white transition hover:-translate-y-0.5 hover:border-[#23a995] hover:shadow-md ${
        resource.status === "inactive" ? "border-slate-200 opacity-60" : "border-slate-200"
      } ${compact ? "p-3" : "p-4"}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Link href={`/resources/${resource.slug}`} className="block truncate text-base font-bold text-slate-950 hover:text-[#116b5f]">
            {resource.name}
          </Link>
          <p className="mt-1 text-xs font-medium text-slate-500">
            {category?.name ?? resource.category} / {resource.subcategory}
          </p>
        </div>
        <div className="flex shrink-0 gap-1">
          {resource.isSponsored ? (
            <span className="rounded bg-amber-100 px-1.5 py-1 text-[11px] font-bold text-amber-800">推广</span>
          ) : resource.isFeatured ? (
            <span className="rounded bg-emerald-50 px-1.5 py-1 text-[11px] font-bold text-emerald-700">推荐</span>
          ) : null}
          {resource.status === "inactive" ? (
            <span className="rounded bg-slate-100 px-1.5 py-1 text-[11px] font-bold text-slate-500">失效</span>
          ) : null}
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
