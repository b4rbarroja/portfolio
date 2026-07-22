"use client";

import { Outfit } from "next/font/google";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { posts as localPosts } from "../data/posts";
import { useEffect, useState } from "react";

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
  published: boolean;
  createdAt: string;
}

export default function BlogPage() {
  const { lang, dir } = useLanguage();
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/api/blogs", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) return [];
        return res.json();
      })
      .then((data) => setBlogs(Array.isArray(data) ? data : []))
      .catch(() => setBlogs([]));
  }, []);

  return (
    <main className="relative bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen">
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px]" />

      <section
        className={`relative px-4 sm:px-6 md:px-12 lg:px-20 pt-8 md:pt-12 pb-16 ${outfit.className}`}
        dir={dir}
      >
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {lang === "en" ? "Blog" : "المدونة"}
          </h1>
          <p className="text-gray-400 mt-1">
            {lang === "en" ? "Thoughts, tutorials and notes" : "أفكار، دروس وملاحظات"}
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            {lang === "en" ? "Not Found rn babe" : "غير موجود حالياً"}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => {
              const local = localPosts.find((p) => p.slug === blog.slug);
              return (
                <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                  <div className="group rounded-2xl overflow-hidden border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 active:bg-white/[0.06] active:border-white/20 active:-translate-y-0.5 cursor-pointer h-full flex flex-col">
                    <div className="relative w-full h-44 overflow-hidden bg-white/5">
                      <img
                        src={blog.image || "/placeholder.png"}
                        alt={local?.title?.[lang] || blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-3 left-3 bg-white/95 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                        {local?.category?.[lang] || blog.type}
                      </span>
                    </div>

                    <div className="bg-[#0d1420] p-5 flex-1 flex flex-col">
                      <h3 className="text-white font-semibold text-base leading-snug mb-2 line-clamp-2">
                        {local?.title?.[lang] || blog.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                        {local?.excerpt?.[lang] || blog.descriptionShort || blog.description}
                      </p>
                      <p className="text-gray-500 text-xs mt-auto">
                        {blog.createdAt
                          ? new Date(blog.createdAt).toLocaleDateString(lang === "ar" ? "ar-SA" : "en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          : ""}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
