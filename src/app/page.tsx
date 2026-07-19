import Link from "next/link";
import { HomeCommandSearch } from "@/components/home-command-search";
import { CategoryGlyph, ExternalIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { categories } from "@/data/categories";
import { getAffiliateLabel, getRankingResources, getResourceOutboundUrl, resources, type Resource } from "@/data/resources";
import { posts } from "@/data/posts";
import { absoluteUrl, siteConfig } from "@/lib/site";

const topNavItems = [
  { href: "/", label: "首页" },
  { href: "/rankings", label: "排行榜" },
  { href: "/blog", label: "文章资讯" },
  { href: "/deals", label: "建站优惠" },
  { href: "/submit", label: "收录提交" },
  { href: "/about", label: "关于" },
];

const shortcutGroups = [
  { title: "翻译", slugs: ["baidu-translate", "youdao-translate", "sogou-translate", "deepl"] },
  { title: "网盘", slugs: ["baidu-pan", "aliyun-drive", "quark-pan"] },
  { title: "邮箱", slugs: ["qq-mail", "netease-mail", "gmail"] },
  { title: "工具", slugs: ["ilovepdf", "remove-bg", "smallpdf", "tiny-png"] },
];

const promotionSlugs = [
  "rainyun",
  "yecaoyun",
  "wwdx",
  "jdcloud-site",
  "upyun",
  "qiniu-cloud",
];

const dailySlugs = [
  "rainyun",
  "yecaoyun",
  "wwdx",
  "jdcloud-site",
  "upyun",
  "qiniu-cloud",
  "ucloud",
  "jdcloud-yuntuike",
  "deepseek",
  "doubao",
  "kimi",
  "tongyi",
  "baidu-translate",
  "ilovepdf",
];

function faviconUrl(url: string) {
  return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`;
}

function getBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

function ResourceLogo({ resource, size = "md" }: { resource: Resource; size?: "sm" | "md" }) {
  return (
    <span className={`${size === "sm" ? "h-7 w-7 rounded-lg" : "h-9 w-9 rounded-xl"} portal-logo`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- External favicon endpoint returns tiny icons; Next image optimization is unnecessary here. */}
      <img src={faviconUrl(resource.url)} alt="" className={`${size === "sm" ? "h-4 w-4" : "h-5 w-5"} rounded`} loading="lazy" />
    </span>
  );
}

function ShortcutColumn({ title, slugs }: { title: string; slugs: string[] }) {
  const items = slugs.map(getBySlug).filter((resource): resource is Resource => Boolean(resource));

  return (
    <section className="portal-shortcut-column">
      <h2>{title}</h2>
      <div className="space-y-1.5">
        {items.map((resource) => (
          <a key={resource.slug} href={getResourceOutboundUrl(resource)} target="_blank" rel="noopener noreferrer" data-resource-slug={resource.slug}>
            <ResourceLogo resource={resource} size="sm" />
            <span>{resource.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function PromoCard({ resource }: { resource: Resource }) {
  const affiliateLabel = getAffiliateLabel(resource);

  return (
    <a href={getResourceOutboundUrl(resource)} target="_blank" rel="noopener noreferrer" data-resource-slug={resource.slug} className="portal-promo-card">
      <div className="flex min-w-0 items-start gap-3">
        <ResourceLogo resource={resource} />
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="truncate font-semibold text-slate-950">{resource.name}</span>
            <span className="portal-pill portal-pill-amber">{affiliateLabel ?? "推荐"}</span>
          </div>
          <p>{resource.description}</p>
        </div>
      </div>
      <ExternalIcon className="h-3.5 w-3.5 shrink-0 text-slate-400" />
    </a>
  );
}

function CompactResource({ resource }: { resource: Resource }) {
  const affiliateLabel = getAffiliateLabel(resource);
  const ctaLabel = resource.affiliateStatus === "connected" ? "优惠" : "访问";

  return (
    <article className="portal-resource-card">
      <div className="flex min-w-0 items-start gap-3">
        <ResourceLogo resource={resource} />
        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-2">
            <Link href={`/resources/${resource.slug}`} className="truncate font-semibold text-slate-950 hover:text-emerald-700">
              {resource.name}
            </Link>
            {affiliateLabel ? <span className="portal-pill portal-pill-green">{affiliateLabel}</span> : null}
          </div>
          <p>{resource.description}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="truncate text-[11px] font-semibold text-slate-400">{resource.subcategory}</span>
        <a href={getResourceOutboundUrl(resource)} target="_blank" rel="noopener noreferrer" data-resource-slug={resource.slug} className="portal-mini-button">
          {ctaLabel}
          <ExternalIcon className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}

function CategoryBlock({ category }: { category: (typeof categories)[number] }) {
  const categoryResources = resources.filter((resource) => resource.category === category.slug).slice(0, 10);

  if (!categoryResources.length) {
    return null;
  }

  return (
    <section id={category.slug} className="portal-section">
      <div className="portal-section-head">
        <div className="flex min-w-0 items-center gap-2">
          <CategoryGlyph label={category.name} className="h-7 w-7 shrink-0 rounded-lg bg-emerald-50 text-emerald-700" />
          <h2>{category.name}</h2>
        </div>
        <Link href={`/categories/${category.slug}`}>更多</Link>
      </div>
      <div className="portal-category-grid">
        {categoryResources.map((resource) => (
          <Link key={resource.slug} href={`/resources/${resource.slug}`} className="portal-category-item">
            <ResourceLogo resource={resource} size="sm" />
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold text-slate-900">{resource.name}</span>
              <span className="block truncate text-[11px] text-slate-400">{resource.subcategory}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function SidebarResource({ resource, index }: { resource: Resource; index: number }) {
  return (
    <Link href={`/resources/${resource.slug}`} className="portal-rank-row">
      <span className={index < 3 ? "is-hot" : ""}>{index + 1}</span>
      <ResourceLogo resource={resource} size="sm" />
      <span className="min-w-0">
        <span className="block truncate text-sm font-semibold text-slate-900">{resource.name}</span>
        <span className="block truncate text-xs text-slate-400">{resource.subcategory}</span>
      </span>
    </Link>
  );
}

export default function HomePage() {
  const promotedResources = promotionSlugs.map(getBySlug).filter((resource): resource is Resource => Boolean(resource));
  const dailyResources = dailySlugs.map(getBySlug).filter((resource): resource is Resource => Boolean(resource));
  const fallbackResources = resources.filter((resource) => !dailyResources.some((item) => item.slug === resource.slug)).slice(0, 8);
  const recommendedResources = [...dailyResources, ...fallbackResources].slice(0, 18);
  const rankingResources = getRankingResources().slice(0, 10);
  const visibleCategories = categories.filter((category) => resources.some((resource) => resource.category === category.slug));

  return (
    <main className="portal-page">
      <h1 className="sr-only">{siteConfig.name}</h1>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          potentialAction: {
            "@type": "SearchAction",
            target: `${siteConfig.url}/?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${siteConfig.name} 推荐网址`,
          itemListElement: promotedResources.map((resource, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: absoluteUrl(`/resources/${resource.slug}`),
            name: resource.name,
          })),
        }}
      />

      <header className="portal-header">
        <div className="portal-header-inner">
          <Link href="/" className="portal-brand" aria-label={`${siteConfig.name} 首页`}>
            <span>极</span>
            <strong>{siteConfig.name}</strong>
          </Link>
          <nav aria-label="主导航">
            {topNavItems.map((item) => (
              <Link key={item.href} href={item.href} className={item.href === "/" ? "is-active" : ""}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div className="portal-shell">
        <aside className="portal-left">
          <section className="portal-panel portal-category-menu">
            <h2>分类导航</h2>
            <div>
              {visibleCategories.map((category) => (
                <a key={category.slug} href={`#${category.slug}`}>
                  <CategoryGlyph label={category.name} className="h-6 w-6 shrink-0 rounded-md bg-emerald-50 text-emerald-700" />
                  <span>{category.name}</span>
                </a>
              ))}
            </div>
          </section>
        </aside>

        <section className="portal-main">
          <section className="portal-panel portal-search-panel">
            <HomeCommandSearch />
            <div className="portal-shortcuts">
              {shortcutGroups.map((group) => (
                <ShortcutColumn key={group.title} {...group} />
              ))}
            </div>
          </section>

          <section className="portal-panel">
            <div className="portal-section-head">
              <h2>推荐网址</h2>
              <Link href="/deals">建站优惠</Link>
            </div>
            <div className="portal-promo-grid">
              {promotedResources.map((resource) => (
                <PromoCard key={resource.slug} resource={resource} />
              ))}
            </div>
          </section>

          <section className="portal-panel">
            <div className="portal-section-head">
              <div>
                <h2>常用推荐</h2>
                <p>每日优先展示高意图、可长期使用的入口</p>
              </div>
              <Link href="/rankings">更多</Link>
            </div>
            <div className="portal-resource-grid">
              {recommendedResources.map((resource) => (
                <CompactResource key={resource.slug} resource={resource} />
              ))}
            </div>
          </section>

          <section className="portal-panel">
            <div className="portal-section-head">
              <div>
                <h2>最新文章</h2>
                <p>用专题页承接搜索需求和购买决策</p>
              </div>
              <Link href="/blog">更多</Link>
            </div>
            <div className="portal-article-grid">
              {posts.slice(0, 4).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="portal-article-card">
                  <span>{post.category}</span>
                  <strong>{post.title}</strong>
                  <p>{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>

          {visibleCategories.map((category) => (
            <CategoryBlock key={category.slug} category={category} />
          ))}
        </section>

        <aside className="portal-right">
          <section className="portal-panel portal-user-card">
            <div className="portal-avatar">极</div>
            <strong>未登录</strong>
            <p>登录能力暂不开放，先专注公开导航、SEO 和推广转化。</p>
            <Link href="/submit">收录提交</Link>
          </section>

          <section className="portal-panel">
            <div className="portal-section-head">
              <h2>热门排行</h2>
              <Link href="/rankings">更多</Link>
            </div>
            <div className="space-y-1">
              {rankingResources.map((resource, index) => (
                <SidebarResource key={resource.slug} resource={resource} index={index} />
              ))}
            </div>
          </section>

          <section className="portal-panel">
            <div className="portal-section-head">
              <h2>热门文章</h2>
              <Link href="/blog">更多</Link>
            </div>
            <div className="space-y-3">
              {posts.slice(0, 5).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="portal-side-article">
                  <strong>{post.title}</strong>
                  <span>{post.date}</span>
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
