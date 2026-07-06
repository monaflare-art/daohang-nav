"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GridIcon } from "@/components/icons";
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
    <header className="sticky top-0 z-40 border-b border-[#dfe7f0] bg-white/96 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1500px] min-w-0 items-center justify-between gap-3 px-4 sm:gap-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${siteConfig.name} 首页`}>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#116b5f] text-2xl font-black text-white shadow-sm">
            方
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block text-xl font-black leading-6 text-slate-950 sm:text-2xl">{siteConfig.name}</span>
            <span className="hidden text-xs font-semibold text-slate-500 sm:block">实用资源 一站直达</span>
          </span>
        </Link>
        <nav className="soft-scrollbar flex min-w-0 max-w-full items-center gap-2 overflow-x-auto" aria-label="主导航">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className={`inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-xl px-4 text-base font-black transition hover:bg-slate-100 hover:text-slate-950 ${
                isCurrent(item.href) ? "bg-slate-100 text-slate-950" : "text-slate-700"
              }`}
            >
              {item.label === "分类" ? <GridIcon className="h-4 w-4" /> : null}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
