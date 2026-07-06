"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="border-t border-slate-200/80 bg-white/70 backdrop-blur">
      <div className="ui-shell grid gap-6 py-8 text-sm text-slate-600 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="font-semibold tracking-[-0.01em] text-slate-950">{siteConfig.name}</p>
          <p className="mt-2 max-w-2xl leading-6">
            只收录可公开访问、适合长期使用的资源。推广入口会明确标记，侵权和破解资源不进入导航。
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link href="/disclaimer" className="hover:text-slate-950">免责声明</Link>
          <Link href="/privacy" className="hover:text-slate-950">隐私政策</Link>
          <Link href="/submit" className="hover:text-slate-950">提交资源</Link>
        </div>
      </div>
    </footer>
  );
}
