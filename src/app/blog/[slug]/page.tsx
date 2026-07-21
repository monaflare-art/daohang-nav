import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { SectionHeader, Surface } from "@/components/design-system";
import { ResourceCard } from "@/components/resource-card";
import { getConnectedAffiliateResourceCount, getPost, posts } from "@/data/posts";
import { resources } from "@/data/resources";
import { defaultOgImage } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: [defaultOgImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedResources = post.relatedResourceSlugs
    .map((resourceSlug) => resources.find((resource) => resource.slug === resourceSlug))
    .filter((resource): resource is (typeof resources)[number] => Boolean(resource));
  const connectedResourcesCount = getConnectedAffiliateResourceCount(relatedResources);

  return (
    <main className="ui-shell max-w-5xl py-8">
      <Breadcrumb items={[{ label: "文章资讯", href: "/blog" }, { label: post.title, href: `/blog/${post.slug}` }]} />
      <Surface className="p-6 sm:p-8">
        <Link href="/blog" className="text-[13px] font-semibold text-emerald-700 hover:text-slate-950">
          返回文章列表
        </Link>
        <p className="mt-5 text-[13px] font-semibold text-emerald-700">{post.category}</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-950">{post.title}</h1>
        <p className="mt-3 text-[13px] font-medium text-slate-400">{post.date}</p>
        <p className="mt-5 max-w-3xl text-[16px] leading-8 text-slate-600">{post.excerpt}</p>
        <div className="mt-7 space-y-4 text-[15px] leading-8 text-slate-600">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Surface>

      {connectedResourcesCount > 0 ? (
        <Surface className="mt-6 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[13px] font-semibold text-emerald-700">已接入推广入口</p>
              <h2 className="mt-1 text-[18px] font-semibold tracking-[-0.02em] text-slate-950">继续查看可投放优惠资源</h2>
              <p className="mt-2 text-[13px] leading-6 text-slate-500">
                这篇文章关联 {connectedResourcesCount} 个已确认可公开投放的资源，推广入口会在资源卡片和优惠页中明确标记。
              </p>
            </div>
            <Link
              href="/deals"
              className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              查看优惠入口
            </Link>
          </div>
        </Surface>
      ) : null}

      {relatedResources.length > 0 ? (
        <section className="mt-8">
          <SectionHeader title="相关资源" description="与这篇文章相关的工具入口" className="mb-4" />
          <div className="grid gap-4 md:grid-cols-2">
            {relatedResources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} compact />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
