import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "收录提交",
  description: "提交适合方舟导航收录的合法、稳定、公开资源。",
};

export default function SubmitPage() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent("资源收录提交")}&body=${encodeURIComponent(
    "资源名称：\n官网链接：\n所属分类：\n一句话介绍：\n是否推广合作：否\n提交人联系方式：\n",
  )}`;

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-black text-slate-950">收录提交</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          V1 使用邮件提交，避免一开始就做后台审核系统。收到资源后人工确认是否符合收录标准。
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {["资源名称", "官网链接", "所属分类", "一句话介绍", "是否推广合作", "提交人联系方式"].map((label) => (
            <label key={label} className="block">
              <span className="text-sm font-bold text-slate-700">{label}</span>
              <input
                disabled
                placeholder="邮件中填写"
                className="mt-2 h-11 w-full rounded-md border border-slate-200 bg-slate-50 px-3 text-sm text-slate-500"
              />
            </label>
          ))}
        </div>
        <a
          href={mailto}
          className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-[#116b5f] px-5 text-sm font-black text-white hover:bg-slate-950"
        >
          打开邮件提交
        </a>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-black text-slate-950">收录标准</h2>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
          <li>资源必须公开可访问，优先官方入口、开源项目、合法素材和稳定工具。</li>
          <li>推广或赞助合作必须说明，站内会明确显示推广标签。</li>
          <li>不收录盗版影视、破解软件、磁力下载、侵权网盘和明显擦边资源。</li>
        </ul>
      </section>
    </main>
  );
}
