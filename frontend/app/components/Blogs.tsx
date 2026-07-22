"use client";

import { LineChart } from "lucide-react";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { posts } from "../data/posts";
import { useLanguage } from "../contexts/LanguageContext";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Articles() {
  const { lang, dir } = useLanguage();

  return (
    <section
      className={`px-4 sm:px-6 md:px-16 py-12 sm:py-16 ${outfit.className}`}
      dir={dir}
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {lang === "en" ? "Latest Articles" : "أحدث المقالات"}
            </h2>
            <p className="text-gray-400 mt-1">
              {lang === "en" ? "Thoughts, tutorials and notes" : "أفكار، دروس وملاحظات"}
            </p>
          </div>
          <a
            href="/blog"
            className="text-blue-400 font-medium text-sm hover:text-blue-300 active:text-blue-300 transition-colors whitespace-nowrap"
          >
            {lang === "en" ? "View All Articles →" : "عرض جميع المقالات ←"}
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl overflow-hidden border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 active:bg-white/[0.06] active:border-white/20 active:-translate-y-0.5"
            >
              <div className="relative w-full h-40">
                <img
                  src={post.image}
                  alt={post.title[lang]}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-white/95 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                  {post.category[lang]}
                </span>
              </div>

              <div className="bg-[#0d1420] p-5">
                <h3 className="text-white font-semibold text-base leading-snug mb-3">
                  {post.title[lang]}
                </h3>
                <p className="text-gray-400 text-xs">
                  {post.date} &middot; {post.readTime[lang]}
                </p>
              </div>
            </Link>
          ))}

          <div className="bg-[#0d1420] border border-white/10 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden">
            <h3 className="text-white font-bold text-lg mb-3">
              {lang === "en" ? "Let's work together" : "دعنا نعمل معاً"}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {lang === "en"
                ? "Have a project in mind? Let's build something amazing together."
                : "هل لديك مشروع في ذهنك؟ دعنا نبني شيئاً رائعاً معاً."}
            </p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-600 active:to-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-full w-fit transition-all">
                {lang === "en" ? "Start a Project →" : "ابدأ مشروعاً ←"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
