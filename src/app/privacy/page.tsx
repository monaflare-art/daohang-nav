import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-black text-slate-950">隐私政策</h1>
        <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
          <p>V1 没有账号系统，也不收集用户登录信息。</p>
          <p>最近访问功能仅使用当前浏览器的 localStorage 保存访问过的资源 slug，不会上传到服务器。</p>
          <p>通过邮件提交资源时，你发送的联系方式和提交内容只用于资源审核与沟通。</p>
        </div>
      </section>
    </main>
  );
}
