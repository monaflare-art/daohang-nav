import Link from "next/link";
import { MonoBadge } from "@/components/design-system";
import { ExternalIcon } from "@/components/icons";
import { getCategory } from "@/data/categories";
import { getAffiliateLabel, getResourceCtaLabel, getResourceOutboundUrl, type Resource } from "@/data/resources";

function faviconUrl(url: string) {
  const hostname = new URL(url).hostname;

  return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
}

export function ResourceCard({ resource, compact = false }: { resource: Resource; compact?: boolean }) {
  const category = getCategory(resource.category);
  const affiliateLabel = getAffiliateLabel(resource);
  const outboundUrl = getResourceOutboundUrl(resource);
  const ctaLabel = getResourceCtaLabel(resource);

  return (
    <article
      className={`ui-card ui-card-hover group flex h-full flex-col rounded-2xl ${
        resource.status === "inactive" ? "opacity-60" : ""
      } ${compact ? "p-4" : "p-5"}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element -- External favicon endpoint returns tiny icons; Next image optimization is unnecessary here. */}
          <img src={faviconUrl(resource.url)} alt="" className="h-7 w-7 rounded-md" loading="lazy" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <Link href={`/resources/${resource.slug}`} className="block truncate text-base font-black text-slate-950 hover:text-[#116b5f]">
              {resource.name}
            </Link>
            <div className="flex shrink-0 gap-1">
              {resource.isSponsored ? <MonoBadge tone="amber">推广</MonoBadge> : resource.isFeatured ? <MonoBadge tone="accent">推荐</MonoBadge> : null}
              {affiliateLabel ? <MonoBadge tone={resource.affiliateStatus === "connected" ? "accent" : "amber"}>{affiliateLabel}</MonoBadge> : null}
              {resource.status === "inactive" ? (
                <MonoBadge>失效</MonoBadge>
              ) : null}
            </div>
          </div>
          <p className="mt-1 truncate text-xs font-semibold text-slate-500">
            {category?.name ?? resource.category} / {resource.subcategory}
          </p>
        </div>
      </div>
      <p className={`mt-3 flex-1 text-[13px] leading-6 text-slate-500 ${compact ? "line-clamp-2" : ""}`}>
        {resource.description}
      </p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-wrap gap-1">
          {resource.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-500">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={outboundUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-resource-slug={resource.slug}
          className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-slate-950 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-[#0f766e]"
        >
          {ctaLabel}
          <ExternalIcon />
        </a>
      </div>
    </article>
  );
}
