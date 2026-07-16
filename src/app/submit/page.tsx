import type { Metadata } from "next";
import { Surface } from "@/components/design-system";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "收录提交",
  description: "提交适合极新导航收录的合法、稳定、公开资源。",
};

export default function SubmitPage() {
  const mailto = siteConfig.email ? `mailto:${siteConfig.email}?subject=${encodeURIComponent("资源收录提交")}&body=${encodeURIComponent(
    "资源名称：\n官网链接：\n所属分类：\n一句话介绍：\n是否推广合作：否\n提交人联系方式：\n",
  )}` : undefined;
  const submitHref = siteConfig.submitFormUrl ?? mailto;

  return (
    <main className="ui-shell max-w-4xl py-8">
      <Surface className="p-6 sm:p-8">
        <p className="text-[13px] font-semibold text-emerald-700">Submit</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950">收录提交</h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-500">
          V1 使用邮件提交，避免一开始就做后台审核系统。收到资源后人工确认是否符合收录标准。
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {["资源名称", "官网链接", "所属分类", "一句话介绍", "是否推广合作", "提交人联系方式"].map((label) => (
            <label key={label} className="block">
              <span className="text-sm font-semibold text-slate-700">{label}</span>
              <input
                disabled
                placeholder="邮件中填写"
                className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white/70 px-3 text-sm text-slate-500"
              />
            </label>
          ))}
        </div>
        {submitHref ? (
          <a
            href={submitHref}
            target={siteConfig.submitFormUrl ? "_blank" : undefined}
            rel={siteConfig.submitFormUrl ? "noopener noreferrer" : undefined}
            className="mt-6 inline-flex h-10 items-center justify-center rounded-xl bg-slate-950 px-5 text-[13px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            {siteConfig.submitFormUrl ? "打开提交表单" : "打开邮件提交"}
          </a>
        ) : (
          <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800">
            提交通道待配置。上线后可通过 `NEXT_PUBLIC_SUBMIT_EMAIL` 或 `NEXT_PUBLIC_SUBMIT_FORM_URL` 启用提交入口。
          </p>
        )}
      </Surface>

      <Surface className="mt-6 p-6">
        <h2 className="text-[15px] font-semibold text-slate-950">收录标准</h2>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-500">
          <li>资源必须公开可访问，优先官方入口、开源项目、合法素材和稳定工具。</li>
          <li>推广或赞助合作必须说明，站内会明确显示推广标签。</li>
          <li>不收录盗版影视、破解软件、磁力下载、侵权网盘和明显擦边资源。</li>
        </ul>
      </Surface>
    </main>
  );
}
