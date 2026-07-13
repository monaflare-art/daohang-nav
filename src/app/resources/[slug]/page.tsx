import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { MonoBadge, SectionHeader, Surface } from "@/components/design-system";
import { ExternalIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { ResourceCard } from "@/components/resource-card";
import { getCategory } from "@/data/categories";
import { getAffiliateLabel, getResource, getResourceOutboundUrl, resources } from "@/data/resources";
import { absoluteUrl, defaultOgImage, siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    return {};
  }

  return {
    title: resource.name,
    description: resource.description,
    alternates: {
      canonical: `/resources/${resource.slug}`,
    },
    openGraph: {
      title: resource.name,
      description: resource.description,
      url: `/resources/${resource.slug}`,
      type: "article",
      siteName: siteConfig.name,
      images: [defaultOgImage],
    },
  };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    notFound();
  }

  const category = getCategory(resource.category);
  const affiliateLabel = getAffiliateLabel(resource);
  const outboundUrl = getResourceOutboundUrl(resource);
  const related = resources
    .filter((item) => item.slug !== resource.slug && (item.category === resource.category || item.tags.some((tag) => resource.tags.includes(tag))))
    .slice(0, 6);

  return (
    <main className="ui-shell max-w-6xl py-8">
      <Breadcrumb
        items={[
          ...(category ? [{ label: category.name, href: `/categories/${category.slug}` }] : []),
          { label: resource.name, href: `/resources/${resource.slug}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `${resource.name} - ${siteConfig.name}`,
          description: resource.description,
          url: absoluteUrl(`/resources/${resource.slug}`),
          datePublished: resource.submittedAt,
          isPartOf: {
            "@type": "WebSite",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          about: {
            "@type": "Thing",
            name: resource.name,
            url: resource.url,
          },
        }}
      />
      <Surface className="p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[13px] font-semibold text-emerald-700">{category?.name} / {resource.subcategory}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950">{resource.name}</h1>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate-500">{resource.description}</p>
          </div>
          <a
            href={outboundUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-resource-slug={resource.slug}
            className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-[13px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            访问官网
            <ExternalIcon />
          </a>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {resource.isSponsored ? (
            <MonoBadge tone="amber">推广资源</MonoBadge>
          ) : null}
          {affiliateLabel ? (
            <MonoBadge tone={resource.affiliateStatus === "connected" ? "accent" : "amber"}>{affiliateLabel}</MonoBadge>
          ) : null}
          {resource.isFeatured ? (
            <MonoBadge tone="accent">编辑推荐</MonoBadge>
          ) : null}
          {resource.tags.map((tag) => (
            <MonoBadge key={tag}>{tag}</MonoBadge>
          ))}
        </div>
      </Surface>

      <Surface className="mt-6 p-6">
        <SectionHeader title="收录说明" />
        <div className="mt-4 grid gap-4 text-sm leading-6 text-slate-500 sm:grid-cols-4">
          <div className="ui-card rounded-2xl p-4">
            <p className="font-semibold text-slate-950">状态</p>
            <p className="mt-1">{resource.status === "active" ? "正常可访问" : "暂时失效"}</p>
          </div>
          <div className="ui-card rounded-2xl p-4">
            <p className="font-semibold text-slate-950">标记</p>
            <p className="mt-1">{resource.officialLabel}</p>
          </div>
          <div className="ui-card rounded-2xl p-4">
            <p className="font-semibold text-slate-950">收录日期</p>
            <p className="mt-1">{resource.submittedAt}</p>
          </div>
          <div className="ui-card rounded-2xl p-4">
            <p className="font-semibold text-slate-950">推广状态</p>
            <p className="mt-1">{affiliateLabel ?? "未发现官方推广入口"}</p>
            {resource.commissionNote ? (
              <p className="mt-2 text-xs leading-5 text-slate-400">{resource.commissionNote}</p>
            ) : null}
            {resource.affiliateProgramUrl ? (
              <a
                href={resource.affiliateProgramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-xs font-bold text-emerald-700 hover:text-slate-950"
              >
                申请推广计划
              </a>
            ) : null}
          </div>
        </div>
      </Surface>

      <section className="mt-8">
        <SectionHeader
          title="相关资源"
          action={category ? (
            <Link href={`/categories/${category.slug}`} className="text-sm font-bold text-[#116b5f] hover:text-slate-950">
              查看分类
            </Link>
          ) : null}
          className="mb-4"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {related.map((item) => (
            <ResourceCard key={item.slug} resource={item} compact />
          ))}
        </div>
      </section>
    </main>
  );
}
