import type { Metadata } from "next";
import { ResourceCard } from "@/components/resource-card";
import { getRankingResources } from "@/data/resources";

export const metadata: Metadata = {
  title: "排行榜",
  description: "方舟导航的推荐资源排行榜，推广资源会明确标记。",
};

export default function RankingsPage() {
  const rankingResources = getRankingResources();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-3xl font-black text-slate-950">排行榜</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          当前使用人工权重排序：推广资源、精选资源和稳定常用入口优先。真实点击统计可以在 V1.1 接入。
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rankingResources.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </div>
    </main>
  );
}
