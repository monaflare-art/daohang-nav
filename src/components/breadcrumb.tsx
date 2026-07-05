import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, siteConfig } from "@/lib/site";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "首页", href: "/" }, ...items];

  return (
    <>
      <nav aria-label="breadcrumb" className="mb-4 text-sm font-semibold text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={`${item.href}-${item.label}`} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-slate-950">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-[#116b5f]">
                    {item.label}
                  </Link>
                )}
                {!isLast ? <span aria-hidden="true">/</span> : null}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: allItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: absoluteUrl(item.href),
          })),
          name: `${siteConfig.name} 面包屑导航`,
        }}
      />
    </>
  );
}
