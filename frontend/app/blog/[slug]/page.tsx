"use client";

import { use } from "react";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { posts } from "@/app/data/posts";
import { ArrowLeft } from "lucide-react";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="relative bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px]" />

        <section
          className={`relative min-h-screen flex flex-col items-center justify-center px-6 ${outfit.className}`}
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The blog post you are looking for does not exist.
          </p>
          <Link
            href="/blog"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            &larr; Back to Blog
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="relative bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen">
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px]" />

      <section className={`relative px-4 sm:px-6 md:px-12 lg:px-20 pt-8 md:pt-12 pb-16 ${outfit.className}`}>
        {/* Post Content */}
        <article className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-3 text-gray-400 text-sm mb-4">
            <span className="bg-white/10 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
              {post.category.en}
            </span>
            <span>{post.date}</span>
            <span className="text-gray-500">&middot;</span>
            <span>{post.readTime.en}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {post.title.en}
          </h1>

          <div className="mb-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>

          {/* Featured Image */}
          <div className="rounded-2xl overflow-hidden mb-10 border border-white/5">
            <img
              src={post.image}
              alt={post.title.en}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
            {post.content.en.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>

      </section>
    </main>
  );
}
