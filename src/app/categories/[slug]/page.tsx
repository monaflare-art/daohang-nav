import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { ResourceCard } from "@/components/resource-card";
import { categories, getCategory } from "@/data/categories";
import { getResourcesByCategory } from "@/data/resources";
import { defaultOgImage } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    return {};
  }

  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: `/categories/${category.slug}`,
    },
    openGraph: {
      title: category.name,
      description: category.description,
      url: `/categories/${category.slug}`,
      type: "website",
      images: [defaultOgImage],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);

  if (!category) {
    notFound();
  }

  const categoryResources = getResourcesByCategory(category.slug);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumb items={[{ label: category.name, href: `/categories/${category.slug}` }]} />
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5">
        <p className="text-sm font-bold text-[#116b5f]">分类资源</p>
        <h1 className="mt-2 text-3xl font-black text-slate-950">{category.name}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{category.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {category.subcategories.map((subcategory) => (
            <span key={subcategory} className="rounded bg-slate-100 px-2.5 py-1.5 text-xs font-bold text-slate-600">
              {subcategory}
            </span>
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categoryResources.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </div>
    </main>
  );
}
