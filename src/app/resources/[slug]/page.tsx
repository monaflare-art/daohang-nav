import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalIcon } from "@/components/icons";
import { ResourceCard } from "@/components/resource-card";
import { getCategory } from "@/data/categories";
import { getResource, resources } from "@/data/resources";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    return {};
  }

  return {
    title: resource.name,
    description: resource.description,
    alternates: {
      canonical: `/resources/${resource.slug}`,
    },
  };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    notFound();
  }

  const category = getCategory(resource.category);
  const related = resources
    .filter((item) => item.slug !== resource.slug && (item.category === resource.category || item.tags.some((tag) => resource.tags.includes(tag))))
    .slice(0, 6);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-bold text-[#116b5f]">{category?.name} / {resource.subcategory}</p>
            <h1 className="mt-2 text-3xl font-black text-slate-950">{resource.name}</h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{resource.description}</p>
          </div>
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            data-resource-slug={resource.slug}
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-[#116b5f] px-4 text-sm font-black text-white hover:bg-slate-950"
          >
            访问官网
            <ExternalIcon />
          </a>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {resource.isSponsored ? (
            <span className="rounded bg-amber-100 px-2.5 py-1.5 text-xs font-bold text-amber-800">推广资源</span>
          ) : null}
          {resource.isFeatured ? (
            <span className="rounded bg-emerald-50 px-2.5 py-1.5 text-xs font-bold text-emerald-700">编辑推荐</span>
          ) : null}
          {resource.tags.map((tag) => (
            <span key={tag} className="rounded bg-slate-100 px-2.5 py-1.5 text-xs font-bold text-slate-600">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-black text-slate-950">收录说明</h2>
        <div className="mt-4 grid gap-4 text-sm leading-6 text-slate-600 sm:grid-cols-3">
          <div>
            <p className="font-bold text-slate-950">状态</p>
            <p className="mt-1">{resource.status === "active" ? "正常可访问" : "暂时失效"}</p>
          </div>
          <div>
            <p className="font-bold text-slate-950">标记</p>
            <p className="mt-1">{resource.officialLabel}</p>
          </div>
          <div>
            <p className="font-bold text-slate-950">收录日期</p>
            <p className="mt-1">{resource.submittedAt}</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-950">相关资源</h2>
          {category ? (
            <Link href={`/categories/${category.slug}`} className="text-sm font-bold text-[#116b5f] hover:text-slate-950">
              查看分类
            </Link>
          ) : null}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {related.map((item) => (
            <ResourceCard key={item.slug} resource={item} compact />
          ))}
        </div>
      </section>
    </main>
  );
}
