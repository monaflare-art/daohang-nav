import type { Metadata } from "next";
import { PostCard } from "@/components/post-card";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "文章资讯",
  description: "方舟导航的资源整理、运营规则和工具站建设文章。",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-3xl font-black text-slate-950">文章资讯</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          用文章承接搜索流量，也解释资源收录标准和工具使用方法。
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
