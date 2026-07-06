import Link from "next/link";
import { CategoryGlyph, GridIcon, RankIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PostCard } from "@/components/post-card";
import { RecentVisits } from "@/components/recent-visits";
import { ResourceCard } from "@/components/resource-card";
import { SearchDirectory } from "@/components/search-directory";
import { categories } from "@/data/categories";
import { getFeaturedResources, getRankingResources, resources } from "@/data/resources";
import { posts } from "@/data/posts";
import { absoluteUrl, siteConfig } from "@/lib/site";

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

function CompactResourceRow({ resource }: { resource: (typeof resources)[number] }) {
  return (
    <Link href={`/resources/${resource.slug}`} className="flex min-w-0 items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-slate-50">
      {/* eslint-disable-next-line @next/next/no-img-element -- External favicon endpoint returns tiny icons; Next image optimization is unnecessary here. */}
      <img src={faviconUrl(resource.url)} alt="" className="h-5 w-5 shrink-0 rounded" loading="lazy" />
      <span className="truncate text-sm font-semibold text-slate-700">{resource.name}</span>
    </Link>
  );
}

export default function HomePage() {
  const featuredResources = getFeaturedResources();
  const rankingResources = getRankingResources().slice(0, 10);

  return (
    <main>
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
      <section className="border-b border-slate-200 bg-[#f5f7fb]">
        <div className="mx-auto grid max-w-[1500px] gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[230px_1fr_320px] lg:px-8">
          <aside id="categories" className="order-2 min-w-0 scroll-mt-24 lg:order-1">
            <div className="sticky top-24 rounded-2xl border border-[#dfe7f0] bg-white p-3 shadow-sm">
              <p className="flex items-center gap-2 px-2 text-xs font-black uppercase text-slate-500">
                <GridIcon className="h-4 w-4" />
                分类导航
              </p>
              <nav className="soft-scrollbar mt-3 flex max-w-full gap-2 overflow-x-auto lg:block lg:space-y-1 lg:overflow-visible">
                {categories.map((category) => (
                  <a
                    key={category.slug}
                    href={`#${category.slug}`}
                    className="flex shrink-0 items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-black text-slate-700 hover:bg-[#eefaf7] hover:text-[#116b5f] lg:shrink"
                  >
                    <CategoryGlyph label={category.name} className="h-6 w-6" />
                    {category.name}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="order-1 min-w-0 space-y-5 lg:order-2">
            <section className="rounded-2xl border border-[#dfe7f0] bg-white p-5 shadow-sm">
              <div className="mx-auto max-w-3xl">
                <SearchDirectory />
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-bold text-slate-500">热门搜索：</span>
                  {hotSearches.map((item) => (
                    <Link key={item.label} href={item.href} className="font-semibold text-slate-500 hover:text-[#116b5f]">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#dfe7f0] bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-lg font-black text-slate-950">常用推荐</h2>
                <span className="text-xs font-medium text-slate-500">高频入口</span>
              </div>
              <div className="grid gap-0 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:grid-cols-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eefaf7] text-sm font-black text-[#116b5f]">{link.icon}</span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-black text-slate-900">{link.label}</span>
                      <span className="mt-0.5 block truncate text-xs font-semibold text-slate-500">{link.note}</span>
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-end justify-between gap-3">
                <div>
                  <h2 className="text-xl font-black text-slate-950">推荐网址</h2>
                  <p className="mt-1 text-sm text-slate-500">推广和精选入口会明确标记。</p>
                </div>
                <Link href="/rankings" className="text-sm font-bold text-[#116b5f] hover:text-slate-950">
                  查看排行
                </Link>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featuredResources.slice(0, 12).map((resource) => (
                  <ResourceCard key={resource.slug} resource={resource} compact />
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-2">
                <GridIcon className="h-5 w-5 text-[#116b5f]" />
                <h2 className="text-xl font-black text-slate-950">分类资源</h2>
              </div>
              <div className="grid gap-4 xl:grid-cols-2">
                {categories.map((category) => {
                  const categoryResources = resources.filter((resource) => resource.category === category.slug).slice(0, 6);

                  return (
                    <section key={category.slug} id={category.slug} className="scroll-mt-24 rounded-2xl border border-[#dfe7f0] bg-white p-4 shadow-sm">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div className="flex min-w-0 items-center gap-2">
                          <CategoryGlyph label={category.name} className="h-8 w-8 shrink-0" />
                          <h3 className="truncate text-base font-black text-slate-950">{category.name}</h3>
                        </div>
                        <Link href={`/categories/${category.slug}`} className="shrink-0 text-xs font-black text-slate-400 hover:text-[#116b5f]">
                          更多
                        </Link>
                      </div>
                      <div className="grid gap-1 sm:grid-cols-2">
                        {categoryResources.map((resource) => (
                          <CompactResourceRow key={resource.slug} resource={resource} />
                        ))}
                    </div>
                    </section>
                  );
                })}
              </div>
            </section>
          </div>

          <aside className="order-3 min-w-0 space-y-5">
            <RecentVisits />
            <section className="rounded-2xl border border-[#dfe7f0] bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-base font-black text-slate-950">
                  <RankIcon className="h-4 w-4 text-[#116b5f]" />
                  热门排行
                </h2>
                <Link href="/rankings" className="text-xs font-black text-slate-400 hover:text-[#116b5f]">更多</Link>
              </div>
              <ol className="mt-3 space-y-2">
                {rankingResources.map((resource, index) => (
                  <li key={resource.slug} className="flex gap-3 rounded-xl bg-slate-50 p-2.5">
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-black text-white ${index < 3 ? "bg-orange-500" : "bg-slate-300"}`}>
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <Link href={`/resources/${resource.slug}`} className="block truncate text-sm font-bold text-slate-950 hover:text-[#116b5f]">
                        {resource.name}
                      </Link>
                      <p className="mt-0.5 truncate text-xs text-slate-500">{resource.subcategory}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
            <section className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-black text-slate-950">最新文章</h2>
                <Link href="/blog" className="text-xs font-bold text-[#116b5f]">全部</Link>
              </div>
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
