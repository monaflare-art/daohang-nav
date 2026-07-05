import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResourceCard } from "@/components/resource-card";
import { getPost, posts } from "@/data/posts";
import { resources } from "@/data/resources";

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

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <article className="rounded-xl border border-slate-200 bg-white p-6">
        <Link href="/blog" className="text-sm font-bold text-[#116b5f] hover:text-slate-950">
          返回文章列表
        </Link>
        <p className="mt-5 text-sm font-bold text-[#116b5f]">{post.category}</p>
        <h1 className="mt-2 text-3xl font-black leading-tight text-slate-950">{post.title}</h1>
        <p className="mt-3 text-sm font-medium text-slate-500">{post.date}</p>
        <p className="mt-5 text-base leading-7 text-slate-600">{post.excerpt}</p>
        <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      {relatedResources.length > 0 ? (
        <section className="mt-8">
          <h2 className="mb-4 text-xl font-black text-slate-950">相关资源</h2>
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
