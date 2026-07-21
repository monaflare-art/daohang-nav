import type { Metadata } from "next";
import Link from "next/link";
import { MonoBadge, SectionHeader, Surface } from "@/components/design-system";
import { ExternalIcon } from "@/components/icons";
import { getAffiliateLabel, getResourceOutboundUrl, resources, type Resource } from "@/data/resources";

export const metadata: Metadata = {
  title: "建站优惠",
  description: "面向站长、开发者和个人项目的云服务器、免备案主机、CDN 和建站工具优惠入口。",
  alternates: {
    canonical: "/deals",
  },
};

const dealSections = [
  {
    title: "便宜云服务器 / VPS",
    description: "更适合新站、学生、小工具和个人项目先跑起来。",
    slugs: ["rainyun", "yecaoyun", "wwdx", "ucloud"],
  },
  {
    title: "免备案建站 / 企业官网",
    description: "适合外贸站、临时项目、企业官网和模板建站需求。",
    slugs: ["yecaoyun", "wwdx", "jdcloud-site"],
  },
  {
    title: "CDN / 对象存储 / 静态资源",
    description: "适合图片站、下载站、静态站和内容分发场景。",
    slugs: ["upyun", "qiniu-cloud", "ucloud"],
  },
  {
    title: "主流云厂商活动",
    description: "适合云服务器、数据库、AI 云和企业上云活动导流。",
    slugs: ["aliyun", "tencent-cloud", "baidu-ai-cloud", "jdcloud-yuntuike"],
  },
  {
    title: "AI API / 开发者工具",
    description: "适合把大模型、接口市场和开发工具做成教程或选型页。",
    slugs: ["siliconflow", "api-cloud-market", "z-api", "qianbi-writing"],
  },
  {
    title: "跨境运营 / 工具 SaaS",
    description: "适合客服、指纹浏览器、代理 IP、知识库和数据采集类购买决策。",
    slugs: ["salesmartly", "adspower", "ipfoxy", "kookeey", "helplook"],
  },
];

const checkpoints = [
  "首年价格和续费价格分开看",
  "确认是否需要备案和实名",
  "优先选能快速上线的小额套餐",
  "推广入口必须明确标记",
];

function resourcesBySlug(slugs: string[]) {
  return slugs.map((slug) => resources.find((resource) => resource.slug === slug)).filter((resource): resource is Resource => Boolean(resource));
}

function DealResourceRow({ resource }: { resource: Resource }) {
  const affiliateLabel = getAffiliateLabel(resource);
  const outboundUrl = getResourceOutboundUrl(resource);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md">
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="min-w-0">
          <Link href={`/resources/${resource.slug}`} className="text-base font-semibold text-slate-950 hover:text-emerald-700">
            {resource.name}
          </Link>
          <p className="mt-1 text-xs font-semibold text-slate-400">{resource.subcategory}</p>
        </div>
        {affiliateLabel ? <MonoBadge tone={resource.affiliateStatus === "connected" ? "accent" : "amber"}>{affiliateLabel}</MonoBadge> : null}
      </div>
      <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-slate-500">{resource.description}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1">
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
          className="inline-flex h-9 shrink-0 items-center gap-1 rounded-xl bg-slate-950 px-3 text-xs font-semibold text-white transition hover:bg-emerald-700"
        >
          查看优惠
          <ExternalIcon className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

export default function DealsPage() {
  return (
    <main className="ui-shell py-8">
      <Surface className="overflow-hidden p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[13px] font-semibold text-emerald-700">High-intent deals</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl">
              建站、主机、云存储优惠入口
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-500">
              这里不做泛品牌入口，只放更可能产生购买决策的云服务器、VPS、免备案建站、CDN、对象存储、AI API 和工具 SaaS。已接入推广的链接会明确标记。
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-950">选择前先看</p>
            <div className="mt-3 grid gap-2">
              {checkpoints.map((item) => (
                <div key={item} className="flex items-center gap-2 text-[13px] font-medium text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Surface>

      <div className="mt-6 space-y-6">
        {dealSections.map((section) => {
          const sectionResources = resourcesBySlug(section.slugs);

          return (
            <section key={section.title}>
              <SectionHeader title={section.title} description={section.description} className="mb-4" />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {sectionResources.map((resource) => (
                  <DealResourceRow key={`${section.title}-${resource.slug}`} resource={resource} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <Surface className="mt-8 p-6">
        <SectionHeader title="后续内容方向" description="这个页面应该配合专题文章，而不是单独堆链接。" />
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <Link href="/blog/cheap-cn-cloud-server-guide" className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-950 hover:border-emerald-200 hover:text-emerald-700">
            国内便宜云服务器怎么选
          </Link>
          <Link href="/blog/no-icp-website-hosting-tools" className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-950 hover:border-emerald-200 hover:text-emerald-700">
            免备案建站工具和主机入口
          </Link>
          <Link href="/blog/cloud-vendor-campaigns-guide" className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-950 hover:border-emerald-200 hover:text-emerald-700">
            主流云厂商活动怎么选
          </Link>
          <Link href="/blog/cdn-object-storage-guide" className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-950 hover:border-emerald-200 hover:text-emerald-700">
            CDN 和对象存储怎么选
          </Link>
          <Link href="/blog/ai-api-saas-tools-guide" className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-950 hover:border-emerald-200 hover:text-emerald-700">
            AI API 和工具 SaaS 怎么选
          </Link>
          <Link href="/blog/api-market-model-api-guide" className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-950 hover:border-emerald-200 hover:text-emerald-700">
            API 接口市场怎么选
          </Link>
          <Link href="/blog/cross-border-ops-tools-guide" className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-950 hover:border-emerald-200 hover:text-emerald-700">
            跨境运营工具怎么选
          </Link>
        </div>
      </Surface>
    </main>
  );
}
