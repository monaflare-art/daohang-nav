import type { Metadata } from "next";
import { Surface } from "@/components/design-system";

export const metadata: Metadata = {
  title: "免责声明",
};

export default function DisclaimerPage() {
  return (
    <main className="ui-shell max-w-4xl py-8">
      <Surface className="p-6 sm:p-8">
        <p className="text-[13px] font-semibold text-emerald-700">Disclaimer</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950">免责声明</h1>
        <div className="mt-6 space-y-4 text-[15px] leading-8 text-slate-600">
          <p>本站仅提供公开网站入口整理，不对第三方网站的内容、服务、价格、可用性和安全性作保证。</p>
          <p>访问外部网站前，请自行判断风险。若发现失效、侵权或不适合收录的链接，可通过收录提交页反馈。</p>
          <p>推广资源会在页面中明确标记，但标记不等于本站对第三方服务做出承诺。</p>
        </div>
      </Surface>
    </main>
  );
}
