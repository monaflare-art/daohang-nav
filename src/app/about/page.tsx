import type { Metadata } from "next";
import { Surface } from "@/components/design-system";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "关于",
  description: `关于${siteConfig.name}。`,
};

export default function AboutPage() {
  return (
    <main className="ui-shell max-w-4xl py-8">
      <Surface className="p-6 sm:p-8">
        <p className="text-[13px] font-semibold text-emerald-700">About</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950">关于{siteConfig.name}</h1>
        <div className="mt-6 space-y-4 text-[15px] leading-8 text-slate-600">
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
      </Surface>
    </main>
  );
}
