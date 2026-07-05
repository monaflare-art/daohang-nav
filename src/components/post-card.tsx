import Link from "next/link";
import type { Post } from "@/data/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block rounded-lg border border-slate-200 bg-white p-4 transition hover:border-[#23a995] hover:shadow-md">
      <p className="text-xs font-bold text-[#116b5f]">{post.category}</p>
      <h3 className="mt-2 text-base font-bold leading-6 text-slate-950">{post.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{post.excerpt}</p>
      <p className="mt-3 text-xs font-medium text-slate-400">{post.date}</p>
    </Link>
  );
}
