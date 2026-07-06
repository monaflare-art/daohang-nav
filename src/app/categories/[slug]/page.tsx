import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { MonoBadge, Surface } from "@/components/design-system";
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
    <main className="ui-shell py-8">
      <Breadcrumb items={[{ label: category.name, href: `/categories/${category.slug}` }]} />
      <Surface className="mb-6 p-6 sm:p-8">
        <p className="text-[13px] font-semibold text-emerald-700">Collection</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-slate-950">{category.name}</h1>
        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-500">{category.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {category.subcategories.map((subcategory) => (
            <MonoBadge key={subcategory}>{subcategory}</MonoBadge>
          ))}
        </div>
      </Surface>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categoryResources.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </div>
    </main>
  );
}
