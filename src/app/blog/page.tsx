import type { Metadata } from "next";
import { Surface } from "@/components/design-system";
import { PostCard } from "@/components/post-card";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "文章资讯",
  description: "极新导航的资源整理、运营规则和工具站建设文章。",
};

const featuredSlugs = [
  "cheap-cn-cloud-server-guide",
  "no-icp-website-hosting-tools",
  "cloud-vendor-campaigns-guide",
  "ai-api-saas-tools-guide",
];

const postsByCategory = posts.reduce<Record<string, typeof posts>>((groups, post) => {
  const group = groups[post.category] ?? [];
  groups[post.category] = [...group, post];
  return groups;
}, {});

const featuredPosts = featuredSlugs.map((slug) => posts.find((post) => post.slug === slug)).filter((post): post is (typeof posts)[number] => Boolean(post));
const categoryEntries = Object.entries(postsByCategory).sort(([categoryA], [categoryB]) => categoryA.localeCompare(categoryB, "zh-Hans-CN"));

export default function BlogPage() {
  return (
    <main className="ui-shell py-8">
      <Surface className="mb-6 p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-[13px] font-semibold text-emerald-700">Editorial matrix</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950">文章资讯</h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-500">
              用场景文章承接搜索流量，把云服务器、免备案建站、AI API、客服系统和跨境工具的购买决策讲清楚。
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
            <div>
              <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{posts.length}</p>
              <p className="mt-1 text-[12px] font-medium text-slate-400">篇文章</p>
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{categoryEntries.length}</p>
              <p className="mt-1 text-[12px] font-medium text-slate-400">个专题</p>
            </div>
            <div>
              <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">{featuredPosts.length}</p>
              <p className="mt-1 text-[12px] font-medium text-slate-400">个主入口</p>
            </div>
          </div>
        </div>
      </Surface>

      <section className="mb-8">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-[15px] font-semibold text-slate-950">优先阅读</h2>
            <p className="mt-1 text-[13px] text-slate-500">先承接最明确的购买和建站搜索意图。</p>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-4">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <div className="space-y-8">
        {categoryEntries.map(([category, categoryPosts]) => (
          <section key={category}>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-[15px] font-semibold text-slate-950">{category}</h2>
                <p className="mt-1 text-[13px] text-slate-500">{categoryPosts.length} 篇专题文章</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {categoryPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        ))}
      </div>

    </main>
  );
}
