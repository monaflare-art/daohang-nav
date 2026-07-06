import Link from "next/link";
import { MonoBadge, SectionHeader } from "@/components/design-system";
import { CategoryGlyph, ExternalIcon, GridIcon, RankIcon, SearchIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { RecentVisits } from "@/components/recent-visits";
import { SearchDirectory } from "@/components/search-directory";
import { categories } from "@/data/categories";
import { getFeaturedResources, getRankingResources, resources, type Resource } from "@/data/resources";
import { posts } from "@/data/posts";
import { absoluteUrl, siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "工作台" },
  { href: "/rankings", label: "排行榜" },
  { href: "/blog", label: "文章资讯" },
  { href: "/submit", label: "收录提交" },
  { href: "/about", label: "关于" },
];

const quickLinks = [
  { label: "翻译", href: "https://www.deepl.com/translator", note: "多语言互译", icon: "译" },
  { label: "网盘", href: "https://drive.google.com/", note: "多平台存储", icon: "盘" },
  { label: "邮箱", href: "https://mail.google.com/", note: "高效稳定", icon: "邮" },
  { label: "在线工具", href: "https://www.ilovepdf.com/", note: "即开即用", icon: "工" },
  { label: "代码托管", href: "https://github.com/", note: "项目协作", icon: "码" },
  { label: "设计协作", href: "https://www.figma.com/", note: "原型设计", icon: "设" },
];

const hotSearches = [
  { label: "ChatGPT", href: "/resources/chatgpt" },
  { label: "PDF", href: "/resources/ilovepdf" },
  { label: "AI 编程", href: "/categories/ai-tools" },
  { label: "部署", href: "/categories/dev" },
  { label: "字体", href: "/resources/google-fonts" },
  { label: "图片处理", href: "/categories/online-tools" },
  { label: "开源合集", href: "/resources/awesome-lists" },
];

function faviconUrl(url: string) {
  return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`;
}

function ResourceRow({ resource, rank }: { resource: Resource; rank?: number }) {
  return (
    <Link href={`/resources/${resource.slug}`} className="group flex min-w-0 items-center gap-3 rounded-2xl px-3 py-2.5 transition hover:bg-slate-50">
      {rank ? (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-[12px] font-semibold text-white">
          {rank}
        </span>
      ) : (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element -- External favicon endpoint returns tiny icons; Next image optimization is unnecessary here. */}
          <img src={faviconUrl(resource.url)} alt="" className="h-5 w-5 rounded" loading="lazy" />
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold text-slate-950">{resource.name}</span>
        <span className="mt-0.5 block truncate text-xs text-slate-500">{resource.subcategory}</span>
      </span>
      <ExternalIcon className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-slate-950" />
    </Link>
  );
}

function SpotlightResource({ resource }: { resource: Resource }) {
  return (
    <article className="group rounded-2xl bg-slate-50/70 p-3 transition hover:bg-white hover:shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element -- External favicon endpoint returns tiny icons; Next image optimization is unnecessary here. */}
          <img src={faviconUrl(resource.url)} alt="" className="h-6 w-6 rounded-md" loading="lazy" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <Link href={`/resources/${resource.slug}`} className="truncate text-[15px] font-semibold text-slate-950 group-hover:text-emerald-700">
              {resource.name}
            </Link>
            {resource.isSponsored ? <MonoBadge tone="amber">推广</MonoBadge> : resource.isFeatured ? <MonoBadge tone="accent">推荐</MonoBadge> : null}
          </div>
          <p className="mt-1 line-clamp-2 text-[13px] leading-6 text-slate-500">{resource.description}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-wrap gap-1">
          {resource.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-lg bg-white px-2 py-1 text-[11px] font-semibold text-slate-500">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          data-resource-slug={resource.slug}
          className="inline-flex shrink-0 items-center gap-1 rounded-xl bg-slate-950 px-2.5 py-1.5 text-xs font-semibold text-white transition hover:bg-emerald-700"
        >
          访问
          <ExternalIcon />
        </a>
      </div>
    </article>
  );
}

function WorkflowCard({ title, note, resources: items }: { title: string; note: string; resources: Resource[] }) {
  return (
    <section className="premium-card p-4">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[15px] font-semibold text-slate-950">{title}</h3>
          <p className="mt-1 text-[12px] leading-5 text-slate-500">{note}</p>
        </div>
        <span className="rounded-full border border-slate-200 px-2 py-1 text-[11px] font-semibold text-slate-400">Stack</span>
      </div>
      <div className="space-y-1">
        {items.slice(0, 4).map((resource) => (
          <ResourceRow key={resource.slug} resource={resource} />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  const featuredResources = getFeaturedResources();
  const rankingResources = getRankingResources().slice(0, 10);
  const aiStack = resources.filter((resource) => resource.category === "ai-tools").slice(0, 4);
  const devStack = resources.filter((resource) => resource.category === "dev").slice(0, 4);
  const designStack = resources.filter((resource) => resource.category === "design").slice(0, 4);

  return (
    <main className="min-h-screen bg-[#f6f7fb]">
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
          name: `${siteConfig.name} 推荐资源`,
          itemListElement: featuredResources.slice(0, 9).map((resource, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: absoluteUrl(`/resources/${resource.slug}`),
            name: resource.name,
          })),
        }}
      />

      <div className="premium-workspace">
        <aside className="premium-sidebar">
          <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} 首页`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl font-black text-slate-950 shadow-sm">
              方
            </span>
            <span>
              <span className="block text-[15px] font-semibold text-white">{siteConfig.name}</span>
              <span className="block text-[12px] text-white/45">Resource OS</span>
            </span>
          </Link>

          <nav className="premium-side-nav mt-8 space-y-1" aria-label="主导航">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between rounded-2xl px-3 py-2.5 text-[13px] font-semibold transition ${
                  item.href === "/" ? "bg-white text-slate-950 shadow-sm" : "text-white/62 hover:bg-white/8 hover:text-white"
                }`}
              >
                {item.label}
                {item.href === "/" ? <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> : null}
              </Link>
            ))}
          </nav>

          <div className="premium-collections mt-8">
            <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">Collections</p>
            <div id="categories" className="mt-3 space-y-1">
              {categories.map((category) => (
                <a
                  key={category.slug}
                  href={`#${category.slug}`}
                  className="flex items-center gap-2 rounded-2xl px-3 py-2 text-[13px] font-medium text-white/58 transition hover:bg-white/8 hover:text-white"
                >
                  <CategoryGlyph label={category.name} className="h-6 w-6 bg-white/8 text-emerald-200" />
                  {category.name}
                </a>
              ))}
            </div>
          </div>

          <Link
            href="/submit"
            className="mt-auto flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-[13px] font-semibold text-slate-950 shadow-sm transition hover:-translate-y-0.5"
          >
            提交资源
          </Link>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="premium-topbar">
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <SearchIcon className="h-5 w-5 shrink-0 text-slate-400" />
              <span className="truncate text-sm font-medium text-slate-400">搜索资源、网站、工具、文章</span>
              <span className="ml-auto hidden rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-semibold text-slate-400 sm:inline">⌘ K</span>
            </div>
            <Link href="/submit" className="hidden h-11 items-center rounded-2xl bg-slate-950 px-4 text-[13px] font-semibold text-white shadow-sm transition hover:bg-emerald-700 sm:inline-flex">
              收录提交
            </Link>
          </header>

          <div className="grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="min-w-0 space-y-5">
              <section className="premium-hero">
                <div className="relative z-10 max-w-2xl">
                  <h2 className="max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-slate-950 sm:text-6xl 2xl:text-7xl">
                    发现、筛选、直达。
                  </h2>
                  <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-500">
                    一个面向 AI、开发、设计、办公和生活场景的资源操作台。把常用入口、精选工具和最新内容放在同一个高效界面里。
                  </p>
                  <div className="mt-7">
                    <SearchDirectory />
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {hotSearches.map((item) => (
                      <Link key={item.label} href={item.href} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[12px] font-semibold text-slate-500 transition hover:border-slate-300 hover:text-slate-950">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="premium-orbit" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </section>

              <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="premium-card p-5">
                  <SectionHeader title="今日精选" description="优先展示稳定、常用、可长期使用的入口" action={<Link href="/rankings" className="text-[12px] font-semibold text-slate-400 hover:text-slate-950">全部</Link>} className="mb-4" />
                  <div className="grid gap-3 2xl:grid-cols-2">
                    {featuredResources.slice(0, 4).map((resource) => (
                      <SpotlightResource key={resource.slug} resource={resource} />
                    ))}
                  </div>
                </div>
                <div className="premium-card overflow-hidden p-5">
                  <SectionHeader title="常用工作流" description="一组入口完成一个真实任务" className="mb-4" />
                  <div className="grid gap-2">
                    {quickLinks.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 px-3 py-3 transition hover:border-slate-200 hover:bg-white">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-emerald-700 shadow-sm">{link.icon}</span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-semibold text-slate-950">{link.label}</span>
                          <span className="mt-0.5 block truncate text-xs text-slate-500">{link.note}</span>
                        </span>
                        <ExternalIcon className="h-4 w-4 text-slate-300 transition group-hover:text-slate-950" />
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              <section className="grid gap-4 lg:grid-cols-3">
                <WorkflowCard title="AI 工具栈" note="问答、搜索、写作和代码辅助" resources={aiStack} />
                <WorkflowCard title="开发部署" note="代码托管、云平台和接口调试" resources={devStack} />
                <WorkflowCard title="设计生产" note="设计协作、素材和字体系统" resources={designStack} />
              </section>

              <section className="space-y-4">
                <SectionHeader title="分类资源" description="保留完整目录，但用更轻的矩阵承载" action={<GridIcon className="h-4 w-4 text-slate-400" />} />
                <div className="grid gap-3 md:grid-cols-2">
                  {categories.map((category) => {
                    const categoryResources = resources.filter((resource) => resource.category === category.slug).slice(0, 5);

                    return (
                      <section key={category.slug} id={category.slug} className="premium-card scroll-mt-8 p-4">
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-2">
                            <CategoryGlyph label={category.name} className="h-8 w-8 shrink-0" />
                            <h3 className="truncate text-sm font-semibold text-slate-950">{category.name}</h3>
                          </div>
                          <Link href={`/categories/${category.slug}`} className="shrink-0 text-xs font-semibold text-slate-400 hover:text-slate-950">
                            更多
                          </Link>
                        </div>
                        <div className="grid gap-1">
                          {categoryResources.map((resource) => (
                            <ResourceRow key={resource.slug} resource={resource} />
                          ))}
                        </div>
                      </section>
                    );
                  })}
                </div>
              </section>
            </div>

            <aside className="min-w-0 space-y-5">
              <RecentVisits />
              <section className="premium-card p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="flex items-center gap-2 text-[15px] font-semibold text-slate-950">
                    <RankIcon className="h-4 w-4 text-emerald-700" />
                    热门排行
                  </h2>
                  <Link href="/rankings" className="text-xs font-semibold text-slate-400 hover:text-slate-950">更多</Link>
                </div>
                <ol className="space-y-1">
                  {rankingResources.map((resource, index) => (
                    <li key={resource.slug}>
                      <ResourceRow resource={resource} rank={index + 1} />
                    </li>
                  ))}
                </ol>
              </section>
              <section className="premium-card p-4">
                <SectionHeader title="最新文章" action={<Link href="/blog" className="text-xs font-semibold text-slate-400 hover:text-slate-950">全部</Link>} className="mb-3" />
                <div className="space-y-3">
                  {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-2xl bg-slate-50/70 p-3 transition hover:bg-white hover:shadow-sm">
                      <p className="text-[11px] font-semibold text-emerald-700">{post.category}</p>
                      <h3 className="mt-1 line-clamp-2 text-[13px] font-semibold leading-5 text-slate-950">{post.title}</h3>
                      <p className="mt-2 line-clamp-2 text-[12px] leading-5 text-slate-500">{post.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </section>
              <section className="premium-card p-4">
                <p className="text-[13px] font-semibold text-slate-950">收录策略</p>
                <p className="mt-2 text-[13px] leading-6 text-slate-500">
                  V1 优先官方、合法、稳定资源。推广、推荐和失效状态都会明确标记。
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <MonoBadge tone="accent">官方优先</MonoBadge>
                  <MonoBadge>长期可用</MonoBadge>
                  <MonoBadge tone="amber">推广标记</MonoBadge>
                </div>
              </section>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
