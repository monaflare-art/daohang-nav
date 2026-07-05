import Link from "next/link";
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
  { label: "翻译", href: "https://www.deepl.com/translator", note: "DeepL" },
  { label: "网盘", href: "https://drive.google.com/", note: "Drive" },
  { label: "邮箱", href: "https://mail.google.com/", note: "Gmail" },
  { label: "在线工具", href: "https://www.ilovepdf.com/", note: "PDF" },
  { label: "代码托管", href: "https://github.com/", note: "GitHub" },
  { label: "设计协作", href: "https://www.figma.com/", note: "Figma" },
];

export default function HomePage() {
  const featuredResources = getFeaturedResources();
  const rankingResources = getRankingResources().slice(0, 10);

  return (
    <main>
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
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[220px_1fr_300px] lg:px-8">
          <aside id="categories" className="order-2 min-w-0 scroll-mt-24 lg:order-1">
            <div className="sticky top-20 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <p className="px-2 text-xs font-black uppercase text-slate-500">分类导航</p>
              <nav className="soft-scrollbar mt-3 flex max-w-full gap-2 overflow-x-auto lg:block lg:space-y-1 lg:overflow-visible">
                {categories.map((category) => (
                  <a
                    key={category.slug}
                    href={`#${category.slug}`}
                    className="block shrink-0 rounded-md px-3 py-2 text-sm font-bold text-slate-700 hover:bg-white hover:text-[#116b5f] lg:shrink"
                  >
                    {category.name}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="order-1 min-w-0 space-y-5 lg:order-2">
            <div className="rounded-xl border border-slate-200 bg-[#eefaf7] p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h1 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                    {siteConfig.name}
                  </h1>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
                    高密度中文综合资源导航。优先收录官方、合法、稳定、适合长期使用的网站入口。
                  </p>
                </div>
                <Link
                  href="/submit"
                  className="inline-flex h-10 shrink-0 items-center justify-center rounded-md bg-[#116b5f] px-4 text-sm font-black text-white hover:bg-slate-950"
                >
                  提交资源
                </Link>
              </div>
              <div className="mt-5">
                <SearchDirectory />
              </div>
            </div>

            <section className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-base font-black text-slate-950">常用快捷</h2>
                <span className="text-xs font-medium text-slate-500">高频入口</span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-800 hover:border-[#23a995] hover:bg-white"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-semibold text-slate-400">{link.note}</span>
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
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {featuredResources.slice(0, 9).map((resource) => (
                  <ResourceCard key={resource.slug} resource={resource} compact />
                ))}
              </div>
            </section>

            <section className="space-y-8">
              {categories.map((category) => {
                const categoryResources = resources.filter((resource) => resource.category === category.slug).slice(0, 8);

                return (
                  <section key={category.slug} id={category.slug} className="scroll-mt-24">
                    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <h2 className="text-xl font-black text-slate-950">{category.name}</h2>
                        <p className="mt-1 text-sm leading-6 text-slate-500">{category.description}</p>
                      </div>
                      <Link href={`/categories/${category.slug}`} className="text-sm font-bold text-[#116b5f] hover:text-slate-950">
                        更多
                      </Link>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      {categoryResources.map((resource) => (
                        <ResourceCard key={resource.slug} resource={resource} compact />
                      ))}
                    </div>
                  </section>
                );
              })}
            </section>
          </div>

          <aside className="order-3 min-w-0 space-y-5">
            <RecentVisits />
            <section className="rounded-xl border border-slate-200 bg-white p-4">
              <h2 className="text-base font-black text-slate-950">热门排行</h2>
              <ol className="mt-3 space-y-2">
                {rankingResources.map((resource, index) => (
                  <li key={resource.slug} className="flex gap-3 rounded-lg bg-slate-50 p-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-slate-950 text-xs font-black text-white">
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
