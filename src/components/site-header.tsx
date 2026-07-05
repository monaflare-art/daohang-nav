"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/#categories", label: "分类" },
  { href: "/rankings", label: "排行榜" },
  { href: "/blog", label: "文章资讯" },
  { href: "/submit", label: "收录提交" },
  { href: "/about", label: "关于" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isCurrent = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href.includes("#")) {
      return false;
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/92 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl min-w-0 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} 首页`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#116b5f] text-base font-black text-white">
            方
          </span>
          <span className="min-w-0">
            <span className="block text-base font-black text-slate-950">{siteConfig.name}</span>
            <span className="hidden text-xs font-medium text-slate-500 sm:block">清晰、合法、可维护的资源入口</span>
          </span>
        </Link>
        <nav className="soft-scrollbar flex min-w-0 max-w-full items-center gap-1 overflow-x-auto" aria-label="主导航">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-semibold transition hover:bg-slate-100 hover:text-slate-950 ${
                isCurrent(item.href) ? "bg-slate-100 text-slate-950" : "text-slate-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
