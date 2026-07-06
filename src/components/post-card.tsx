import Link from "next/link";
import type { Post } from "@/data/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="ui-card ui-card-hover block rounded-2xl p-4">
      <p className="text-[12px] font-semibold text-emerald-700">{post.category}</p>
      <h3 className="mt-2 text-[15px] font-semibold leading-6 tracking-[-0.01em] text-slate-950">{post.title}</h3>
      <p className="mt-2 line-clamp-3 text-[13px] leading-6 text-slate-500">{post.excerpt}</p>
      <p className="mt-4 text-[12px] font-medium text-slate-400">{post.date}</p>
    </Link>
  );
}
