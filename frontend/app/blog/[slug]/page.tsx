"use client";

import { use, useEffect, useState } from "react";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { posts as localPosts } from "../../data/posts";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  descriptionShort?: string;
  image?: string;
  type: string;
  createdAt: string;
}

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { lang, dir } = useLanguage();

  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/blogs/${encodeURIComponent(slug)}`,
        );
        if (!res.ok) {
          setPost(null);
          return;
        }
        const data = await res.json();
        setPost(data);
      } catch {
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  const local = localPosts.find((p) => p.slug === slug);

  if (loading) {
    return (
      <main className="relative bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen flex items-center justify-center">
        <p className="text-gray-400">
          {lang === "en" ? "Loading article..." : "جاري تحميل المقال..."}
        </p>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="relative bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px]" />

        <section
          className={`relative min-h-screen flex flex-col items-center justify-center px-6 ${outfit.className}`}
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            {lang === "en" ? "Post Not Found" : "المقال غير موجود"}
          </h1>
          <p className="text-gray-400 mb-8">
            {lang === "en"
              ? "The blog post you are looking for does not exist."
              : "المقال الذي تبحث عنه غير موجود."}
          </p>
          <Link
            href="/blog"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            {lang === "en" ? "← Back to Blog" : "→ العودة إلى المدونة"}
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="relative bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen">
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px]" />

      <section
        className={`relative px-4 sm:px-6 md:px-12 lg:px-20 pt-8 md:pt-12 pb-16 ${outfit.className}`}
        dir={dir}
      >
        <article className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 text-gray-400 text-sm mb-4">
            <span className="bg-white/10 text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
              {local?.category?.[lang] || post.type}
            </span>
            <span>
              {post.createdAt
                ? new Date(post.createdAt).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : ""}
            </span>
            {local?.readTime?.[lang] && (
              <span>&middot; {local.readTime[lang]}</span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {local?.title?.[lang] || post.title}
          </h1>

          <div className="mb-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} />
              {lang === "en" ? "Back to Blog" : "العودة إلى المدونة"}
            </Link>
          </div>

          {post.image && (
            <div className="rounded-2xl overflow-hidden mb-10 border border-white/5">
              <img
                src={post.image}
                alt={local?.title?.[lang] || post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div
            className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line"
            dir={dir}
          >
            {local?.content?.[lang]
              ? local.content[lang].map((p, i) => <p key={i}>{p}</p>)
              : post.description}
          </div>
        </article>
      </section>
    </main>
  );
}
