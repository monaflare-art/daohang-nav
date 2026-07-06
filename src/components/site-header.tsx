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
  if (pathname === "/") {
    return null;
  }

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
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/82 backdrop-blur-2xl">
      <div className="ui-shell flex h-[72px] min-w-0 items-center justify-between gap-3 sm:gap-5">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${siteConfig.name} 首页`}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-xl font-black text-white shadow-sm ring-1 ring-slate-950/10">
            方
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block text-[17px] font-semibold leading-5 tracking-[-0.02em] text-slate-950">{siteConfig.name}</span>
            <span className="hidden text-[12px] font-medium text-slate-500 sm:block">Resource OS</span>
          </span>
        </Link>
        <nav className="soft-scrollbar flex min-w-0 max-w-full items-center gap-1 overflow-x-auto rounded-2xl border border-slate-200 bg-white/70 p-1 shadow-sm" aria-label="主导航">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className={`inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-xl px-3 text-[13px] font-semibold transition hover:bg-slate-100 hover:text-slate-950 sm:px-4 ${
                isCurrent(item.href) ? "bg-slate-950 text-white shadow-sm" : "text-slate-600"
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
