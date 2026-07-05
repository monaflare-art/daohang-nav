import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免责声明",
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-black text-slate-950">免责声明</h1>
        <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
          <p>本站仅提供公开网站入口整理，不对第三方网站的内容、服务、价格、可用性和安全性作保证。</p>
          <p>访问外部网站前，请自行判断风险。若发现失效、侵权或不适合收录的链接，可通过收录提交页反馈。</p>
          <p>推广资源会在页面中明确标记，但标记不等于本站对第三方服务做出承诺。</p>
        </div>
      </section>
    </main>
  );
}
