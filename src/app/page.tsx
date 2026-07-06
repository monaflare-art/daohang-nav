import Link from "next/link";
import { HomeCommandSearch } from "@/components/home-command-search";
import { HomeRecentRail } from "@/components/home-recent-rail";
import { CategoryGlyph, ExternalIcon, GridIcon, RankIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { categories } from "@/data/categories";
import { getFeaturedResources, getRankingResources, resources, type Resource } from "@/data/resources";
import { posts } from "@/data/posts";
import { absoluteUrl, siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "首页", icon: "⌂" },
  { href: "/categories/ai-tools", label: "分类", icon: "⌘" },
  { href: "/rankings", label: "排行榜", icon: "↟" },
  { href: "/blog", label: "文章资讯", icon: "□" },
  { href: "/submit", label: "收录提交", icon: "↑" },
  { href: "/about", label: "关于", icon: "i" },
];

const workflowGroups = [
  {
    title: "翻译与阅读",
    note: "翻译、词典、PDF 阅读工具集合",
    slugs: ["deepl", "google-translate", "ilovepdf"],
  },
  {
    title: "AI 写作与创作",
    note: "AI 写作、总结和内容生成",
    slugs: ["notion", "chatgpt", "claude"],
  },
  {
    title: "设计与开发",
    note: "设计协作、开发工具、代码托管",
    slugs: ["figma", "github", "vercel"],
  },
  {
    title: "文件处理",
    note: "PDF、压缩、格式转换、文档处理",
    slugs: ["smallpdf", "ilovepdf", "tinypng"],
  },
  {
    title: "云存储与同步",
    note: "网盘、同步、备份、资源管理",
    slugs: ["google-drive", "dropbox", "onedrive"],
  },
];

function faviconUrl(url: string) {
  return `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}&sz=64`;
}

function getBySlug(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}

function ResourceLogo({ resource, size = "md" }: { resource: Resource; size?: "sm" | "md" }) {
  return (
    <span className={`${size === "sm" ? "h-8 w-8 rounded-xl" : "h-10 w-10 rounded-2xl"} flex shrink-0 items-center justify-center border border-slate-200 bg-white shadow-sm`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- External favicon endpoint returns tiny icons; Next image optimization is unnecessary here. */}
      <img src={faviconUrl(resource.url)} alt="" className={`${size === "sm" ? "h-5 w-5" : "h-6 w-6"} rounded-md`} loading="lazy" />
    </span>
  );
}

function ResourceTableRow({ resource }: { resource: Resource }) {
  const category = categories.find((item) => item.slug === resource.category);

  return (
    <div className="resource-table-row">
      <div className="flex min-w-0 items-center gap-3">
        <ResourceLogo resource={resource} />
        <Link href={`/resources/${resource.slug}`} className="truncate text-sm font-semibold text-slate-950 hover:text-emerald-700">
          {resource.name}
        </Link>
        {resource.isFeatured ? <span className="rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">推荐</span> : null}
        {resource.isSponsored ? <span className="rounded-md bg-amber-50 px-2 py-1 text-[11px] font-semibold text-amber-700">推广</span> : null}
      </div>
      <span className="hidden min-w-0 truncate text-[13px] text-slate-500 md:block">{category?.name ?? resource.category}</span>
      <span className="hidden min-w-0 truncate text-[13px] text-slate-500 lg:block">{resource.description}</span>
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        data-resource-slug={resource.slug}
        className="inline-flex h-8 shrink-0 items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 text-[12px] font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
      >
        访问
        <ExternalIcon className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function RankingRow({ resource, index }: { resource: Resource; index: number }) {
  return (
    <Link href={`/resources/${resource.slug}`} className="group flex min-w-0 items-center gap-3 rounded-2xl px-2 py-2 transition hover:bg-slate-50">
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold ${index < 3 ? "bg-amber-400 text-white" : "bg-slate-100 text-slate-500"}`}>
        {index + 1}
      </span>
      <ResourceLogo resource={resource} size="sm" />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold text-slate-950">{resource.name}</span>
        <span className="mt-0.5 block truncate text-xs text-slate-500">{resource.subcategory}</span>
      </span>
      <span className="text-[12px] font-semibold text-slate-400 group-hover:text-emerald-700">{(98 - index * 4.7).toFixed(1)}k</span>
    </Link>
  );
}

function WorkflowCard({ title, note, slugs }: { title: string; note: string; slugs: string[] }) {
  const items = slugs.map(getBySlug).filter((item): item is Resource => Boolean(item));

  return (
    <section className="workflow-card">
      <div className="mb-4">
        <h3 className="text-[15px] font-semibold text-slate-950">{title}</h3>
        <p className="mt-1 text-[12px] leading-5 text-slate-500">{note}</p>
      </div>
      <div className="flex items-center gap-2">
        {items.map((resource) => (
          <Link key={resource.slug} href={`/resources/${resource.slug}`} aria-label={resource.name}>
            <ResourceLogo resource={resource} size="sm" />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  const featuredResources = getFeaturedResources().slice(0, 4);
  const rankingResources = getRankingResources().slice(0, 10);

  return (
    <main className="command-app min-h-screen bg-[#f7f9fc]">
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
          itemListElement: featuredResources.map((resource, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: absoluteUrl(`/resources/${resource.slug}`),
            name: resource.name,
          })),
        }}
      />

      <aside className="command-sidebar">
        <Link href="/" className="mb-6 flex items-center justify-center" aria-label={`${siteConfig.name} 首页`}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-black text-white shadow-sm">
            方
          </span>
        </Link>

        <nav className="space-y-1" aria-label="首页导航">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`command-nav-item ${item.href === "/" ? "is-active" : ""}`}>
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <HomeRecentRail />
          <Link href="/submit" className="command-rail-action" aria-label="收录提交">+</Link>
        </div>
      </aside>

      <section className="command-main">
        <header className="command-topbar">
          <div className="command-brand">
            <span className="text-[17px] font-semibold tracking-[-0.02em] text-slate-950">{siteConfig.name}</span>
            <span className="mt-0.5 text-[12px] text-slate-500">发现优质资源，高效抵达</span>
          </div>
          <div className="command-top-search">
            <span className="text-slate-400">⌕</span>
            <span className="truncate">搜索资源、网站、工具、文章（支持中文）</span>
            <span className="ml-auto rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-semibold text-slate-400">⌘ K</span>
          </div>
          <Link href="/submit" className="command-top-action">收录提交</Link>
          <Link href="/about" className="command-icon-button" aria-label="关于">i</Link>
        </header>

        <div className="command-layout">
          <div className="min-w-0 space-y-5">
            <HomeCommandSearch />

            <section className="command-surface overflow-hidden">
              <div className="command-section-head">
                <div>
                  <h2>推荐资源</h2>
                  <p>精选优质资源，官方推荐</p>
                </div>
                <Link href="/rankings">查看全部</Link>
              </div>
              <div className="resource-table-head">
                <span>资源名称</span>
                <span className="hidden md:block">分类</span>
                <span className="hidden lg:block">描述</span>
                <span>访问</span>
              </div>
              <div>
                {featuredResources.map((resource) => (
                  <ResourceTableRow key={resource.slug} resource={resource} />
                ))}
              </div>
            </section>

            <section className="command-surface p-5">
              <div className="command-section-head mb-5 px-0 pt-0">
                <div>
                  <h2>常用工作流</h2>
                  <p>把资源按真实任务组合起来</p>
                </div>
                <Link href="/categories/online-tools">查看全部</Link>
              </div>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                {workflowGroups.map((group) => (
                  <WorkflowCard key={group.title} {...group} />
                ))}
              </div>
            </section>

            <section className="command-surface p-5">
              <div className="command-section-head mb-5 px-0 pt-0">
                <div>
                  <h2>分类快捷入口</h2>
                  <p>按场景快速进入资源集合</p>
                </div>
                <Link href="#category-directory">查看全部</Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {categories.map((category) => {
                  const count = resources.filter((resource) => resource.category === category.slug).length;

                  return (
                    <Link key={category.slug} href={`/categories/${category.slug}`} className="category-shortcut">
                      <CategoryGlyph label={category.name} className="h-10 w-10 shrink-0 rounded-2xl bg-slate-50 text-emerald-700" />
                      <span>
                        <span className="block text-sm font-semibold text-slate-950">{category.name}</span>
                        <span className="mt-1 block text-xs text-slate-500">{count} 个资源</span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>

            <section id="category-directory" className="command-surface p-5">
              <div className="command-section-head mb-5 px-0 pt-0">
                <div>
                  <h2>分类目录</h2>
                  <p>完整目录仍然保留，但以列表承载，不再做卡片墙</p>
                </div>
                <GridIcon className="h-4 w-4 text-slate-400" />
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                {categories.map((category) => {
                  const categoryResources = resources.filter((resource) => resource.category === category.slug).slice(0, 5);

                  return (
                    <section key={category.slug} className="category-directory-card">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-2">
                          <CategoryGlyph label={category.name} className="h-8 w-8 shrink-0" />
                          <h3 className="truncate text-sm font-semibold text-slate-950">{category.name}</h3>
                        </div>
                        <Link href={`/categories/${category.slug}`} className="text-xs font-semibold text-slate-400 hover:text-slate-950">更多</Link>
                      </div>
                      <div className="space-y-1">
                        {categoryResources.map((resource) => (
                          <Link key={resource.slug} href={`/resources/${resource.slug}`} className="flex min-w-0 items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-slate-50">
                            <ResourceLogo resource={resource} size="sm" />
                            <span className="min-w-0">
                              <span className="block truncate text-sm font-semibold text-slate-800">{resource.name}</span>
                              <span className="block truncate text-xs text-slate-500">{resource.subcategory}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </section>
          </div>

          <aside className="command-insights">
            <section className="command-surface p-5">
              <div className="command-section-head mb-3 px-0 pt-0">
                <h2 className="flex items-center gap-2"><RankIcon className="h-4 w-4 text-emerald-700" />热门排行</h2>
                <Link href="/rankings">查看全部</Link>
              </div>
              <div className="space-y-1">
                {rankingResources.map((resource, index) => (
                  <RankingRow key={resource.slug} resource={resource} index={index} />
                ))}
              </div>
            </section>

            <section className="command-surface p-5">
              <div className="command-section-head mb-4 px-0 pt-0">
                <h2>最新文章</h2>
                <Link href="/blog">查看全部</Link>
              </div>
              <div className="space-y-4">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="article-row">
                    <span className="article-thumb" />
                    <span className="min-w-0">
                      <span className="line-clamp-2 text-sm font-semibold leading-5 text-slate-950">{post.title}</span>
                      <span className="mt-1 block text-xs text-slate-400">{post.date}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <footer className="command-footer">
          <span>© 2026 {siteConfig.name} · 发现优质资源，提升每一天</span>
          <span className="flex gap-4">
            <Link href="/disclaimer">免责声明</Link>
            <Link href="/privacy">隐私政策</Link>
          </span>
        </footer>
      </section>
    </main>
  );
}
