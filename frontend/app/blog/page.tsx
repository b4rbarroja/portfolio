"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../components/Container";

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  descriptionShort: string;
  excerpt?: string;
  readTime?: string;
  date?: string;
  image?: string;
  type: string;
  published: boolean;
}

const categoryMap: Record<string, string> = {
  "Web Development": "تطوير ويب",
  "Best Practices": "أفضل الممارسات",
  CSS: "CSS",
  TypeScript: "TypeScript",
  Backend: "الخلفية",
};

const t = {
  label: "✦ المدونة",
  title: "كل المقالات",
  subtitle: "أفكار، شروحات، وملاحظات من رحلتي في التطوير",
  backToHome: "العودة إلى الرئيسية",
  readTime: "دقائق قراءة",
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setPosts(Array.isArray(data) ? data.filter((p: Blog) => p.published) : []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="relative min-h-screen">
      <section className={`py-16 sm:py-20 lg:py-24`}>
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <p className="text-black/40 text-sm mb-1" >{t.label}</p>
              <h1 className="section-title text-3xl md:text-5xl text-black flex items-center gap-2" >
                <span>{t.title}</span>
                <span className="text-black/30">✦</span>
              </h1>
              <p className="body-text text-black/50 mt-2" >{t.subtitle}</p>
            </div>
            <Link
              href="/"
              className="text-black font-medium text-sm hover:text-black/60 transition-colors whitespace-nowrap flex items-center gap-1"
 
            >
              <span>←</span>
              <span>{t.backToHome}</span>
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl border border-black/10 bg-white h-72 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl overflow-hidden border border-black/10 transition-all duration-300 hover:border-black/20 hover:-translate-y-1 active:border-black/20 active:-translate-y-0.5 bg-white"
                >
                  <div className="relative w-full h-44">
                    <img
                      src={post.image || ""}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-3 right-3 bg-white/95 text-black text-xs font-medium px-3 py-1 rounded-full border border-black/10" >
                      {categoryMap[post.type] || post.type}
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="text-black font-semibold text-base leading-snug mb-2 line-clamp-2" >
                      {post.title}
                    </h2>
                    <p className="text-black/60 text-sm leading-relaxed mb-4 line-clamp-3" >
                      {post.excerpt || post.descriptionShort || post.description}
                    </p>
                    <div className="flex items-center justify-between text-black/40 text-xs">
                      <span className="flex items-center gap-1" >
                        {post.readTime && <span>{post.readTime}</span>}
                      </span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
