import type { Metadata } from "next";
import { Surface } from "@/components/design-system";
import { PostCard } from "@/components/post-card";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "文章资讯",
  description: "极新导航的资源整理、运营规则和工具站建设文章。",
};

export default function BlogPage() {
  return (
    <main className="ui-shell max-w-5xl py-8">
      <Surface className="mb-6 p-6 sm:p-8">
        <p className="text-[13px] font-semibold text-emerald-700">Editorial</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950">文章资讯</h1>
        <p className="mt-3 text-[15px] leading-7 text-slate-500">
          用文章承接搜索流量，也解释资源收录标准和工具使用方法。
        </p>
      </Surface>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
