"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";
import { Reveal } from "./Reveal";

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
  ctaTitle: "دعنا نصنعها سويا !",
  ctaDesc: "دعنا نصنع ما يدور في بالك من أفكار",
  ctaButton: "ابدأ مشروعاً",
  readTime: "دقائق قراءة",
};

export default function Articles() {
  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        const published = Array.isArray(data)
          ? data.filter((p: Blog) => p.published)
          : [];
        setPosts(published.slice(0, 3));
      })
      .catch(console.error);
  }, []);

  return (
    <section className={" py-16 sm:py-20 lg:py-24"}>
      <Container>
        <Reveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black flex items-center gap-2">
                <span>{t.title}</span>
              </h2>
              <p className="text-black/50 text-base md:text-lg mt-1">
                {t.subtitle}
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm md:text-base font-medium text-black transition hover:bg-black hover:text-white"
            >
              <span>{t.viewAll}</span>
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 100}>
              <Link
                href={"/blog/" + post.slug}
                className="group flex flex-col h-full rounded-2xl overflow-hidden border border-black/10 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-black/20 hover:-translate-y-1.5 active:translate-y-0"
              >
                <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                  <img
                    src={post.image || ""}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {post.type && (
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-black text-xs font-semibold px-3 py-1 rounded-full border border-black/5 shadow-sm">
                      {post.type}
                    </span>
                  )}
                </div>

                <div className="flex flex-col justify-between flex-1 p-5">
                  <h3 className="text-black font-semibold text-lg md:text-xl leading-snug mb-4 line-clamp-2 group-hover:text-black/80 transition-colors">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-between text-black/50 text-xs pt-3 border-t border-black/5 font-medium">
                    <span className="flex items-center gap-1">
                      {post.readTime && <span>{post.readTime}</span>}
                      <span>{t.readTime}</span>
                    </span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
