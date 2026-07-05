import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "关于",
  description: `关于${siteConfig.name}。`,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-black text-slate-950">关于{siteConfig.name}</h1>
        <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
          <p>
            {siteConfig.name} 是一个中文综合资源导航站，目标是把常用、合法、稳定的网站入口整理成清晰的分类。
          </p>
          <p>
            本站不追求无限收录。资源越多，维护成本越高，用户也越难判断优先级。所以 V1 优先覆盖高频场景，并保留人工筛选。
          </p>
          <p>
            推广资源会明确标记。内容安全和长期可维护性优先于短期点击。
          </p>
        </div>
      </section>
    </main>
  );
}
