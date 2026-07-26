"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";

interface Blog {
  slug: string;
  title: string;
  excerpt?: string;
  readTime?: string;
  date?: string;
  image?: string;
  type: string;
  published: boolean;
}

const t = {
  title: "أحدث المقالات",
  subtitle: "أفكار، شروحات، وملاحظات من رحلتي في التطوير",
  viewAll: "عرض كل المقالات",
  ctaTitle: "لنصنع شيئاً رائعاً معاً",
  ctaDesc: "هل لديك فكرة مشروع؟ دعنا نحولها إلى منتج رقمي مميز.",
  ctaButton: "ابدأ مشروعاً",
  readTime: "دقائق قراءة",
};

export default function Articles() {
  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        const published = Array.isArray(data) ? data.filter((p: Blog) => p.published) : [];
        setPosts(published.slice(0, 3));
      })
      .catch(console.error);
  }, []);

  return (
    <section
      className={" py-16 sm:py-20 lg:py-24"}
    >
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h2 className="text-6xl font-bold text-black flex items-center gap-2">
              <span>{t.title}</span>
              <span className="text-black/30">✦</span>
            </h2>
            <p className="text-black/50 text-xl mt-1">{t.subtitle}</p>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-lg font-medium text-black transition hover:bg-black hover:text-white"
          >
            <span>{t.viewAll}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={"/blog/" + post.slug}
              className="rounded-2xl overflow-hidden border border-black/10 transition-all duration-300 hover:border-black/20 hover:-translate-y-1 active:border-black/20 active:-translate-y-0.5 bg-white"
            >
              <div className="relative w-full h-40">
                <img
                  src={post.image || ""}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 right-3 bg-white/95 text-black text-sm font-medium px-3 py-1 rounded-full border border-black/10">
                  {post.type}
                </span>
              </div>
              <div className="bg-white p-5">
                <h3 className="text-black font-semibold text-xl leading-snug mb-3">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-black/40 text-sm">
                  <span className="flex items-center gap-1">
                    {post.readTime && <span>{post.readTime}</span>}
                    <span>{t.readTime}</span>
                  </span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}

          <div className="relative overflow-hidden bg-white border border-black/10 rounded-2xl p-6 flex flex-col items-center text-center justify-center gap-3">
            <span className="absolute top-4 right-4 text-black/20 text-2xl">✦</span>
            <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center text-3xl">
              👥
            </div>
            <h3 className="text-black font-bold text-2xl">{t.ctaTitle}</h3>
            <p className="text-black/50 text-lg leading-relaxed">{t.ctaDesc}</p>
            <Link href="/contact">
              <button className="text-xl mt-2 bg-black hover:bg-black/80 active:bg-black/80 text-white px-6 py-3 rounded-full w-fit transition-all flex items-center gap-2">
                <span>{t.ctaButton}</span>
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
