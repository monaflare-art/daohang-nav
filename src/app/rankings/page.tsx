import type { Metadata } from "next";
import { Surface } from "@/components/design-system";
import { ResourceCard } from "@/components/resource-card";
import { getRankingResources } from "@/data/resources";

export const metadata: Metadata = {
  title: "排行榜",
  description: "极新导航的推荐资源排行榜，推广资源会明确标记。",
};

export default function RankingsPage() {
  const rankingResources = getRankingResources();

  return (
    <main className="ui-shell py-8">
      <Surface className="mb-6 p-6 sm:p-8">
        <p className="text-[13px] font-semibold text-emerald-700">Ranking</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950">排行榜</h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-500">
          当前使用人工权重排序：推广资源、精选资源和稳定常用入口优先。真实点击统计可以在 V1.1 接入。
        </p>
      </Surface>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {rankingResources.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </div>
    </main>
  );
}
