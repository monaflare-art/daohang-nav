import type { Metadata } from "next";
import { Surface } from "@/components/design-system";

export const metadata: Metadata = {
  title: "隐私政策",
};

export default function PrivacyPage() {
  return (
    <main className="ui-shell max-w-4xl py-8">
      <Surface className="p-6 sm:p-8">
        <p className="text-[13px] font-semibold text-emerald-700">Privacy</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950">隐私政策</h1>
        <div className="mt-6 space-y-4 text-[15px] leading-8 text-slate-600">
          <p>V1 没有账号系统，也不收集用户登录信息。</p>
          <p>最近访问功能仅使用当前浏览器的 localStorage 保存访问过的资源 slug，不会上传到服务器。</p>
          <p>通过邮件提交资源时，你发送的联系方式和提交内容只用于资源审核与沟通。</p>
        </div>
      </Surface>
    </main>
  );
}
