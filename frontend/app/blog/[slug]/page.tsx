"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/app/components/Container";

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  descriptionShort: string;
  content?: string;
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
  backToBlog: "العودة إلى المدونة",
  nextArticle: "✦ المقال التالي",
  readTime: "دقائق قراءة",
  by: "بقلم",
  author: "جبر",
};

function parseContent(content?: string): string[] {
  if (!content) return [];
  try {
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [content];
  } catch {
    return [];
  }
}

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [post, setPost] = useState<Blog | null>(null);
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`/api/blogs/${encodeURIComponent(slug)}`).then((r) => r.json()),
      fetch("/api/blogs").then((r) => r.json()),
    ])
      .then(([postData, allPosts]) => {
        setPost(postData);
        setPosts(Array.isArray(allPosts) ? allPosts.filter((p: Blog) => p.published) : []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  if (loading) {
    return (
      <main className="relative min-h-screen">
        <section className={`min-h-screen flex items-center justify-center`}>
          <div className="text-black/40" >جاري التحميل...</div>
        </section>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="relative min-h-screen">
        <section
          className={`min-h-screen flex flex-col items-center justify-center px-6`}
        >
          <span className="text-black/20 text-6xl mb-6">✦</span>
          <h1 className="text-4xl font-bold text-black mb-4" >
            المقال غير موجود
          </h1>
          <p className="text-black/40 mb-8" >
            المقال الذي تبحث عنه غير موجود.
          </p>
          <Link
            href="/blog"
            className="btn-text bg-black text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"

>
            <span>←</span>
            <span>العودة إلى المدونة</span>
          </Link>
        </section>
      </main>
    );
  }

  const content = parseContent(post.content);

  return (
    <main className="relative min-h-screen">
      <article className={`py-16 sm:py-20 lg:py-24`}>
        <Container>
          <div className="mb-8 max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors text-sm font-medium mb-6"
 
            >
              <ArrowLeft size={16} />
              <span>{t.backToBlog}</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-black/40 text-sm mb-3">
              <span className="border border-black/10 text-black/60 text-xs font-medium px-3 py-1 rounded-full bg-white" >
                {categoryMap[post.type] || post.type}
              </span>
              {post.date && <span>{post.date}</span>}
              {post.readTime && <span>&middot; {post.readTime} {t.readTime}</span>}
            </div>

            <h1 className="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4" >
              {post.title}
            </h1>

            <div className="flex items-center gap-2 text-black/40 text-sm" >
              <span>{t.by}</span>
              <span className="font-medium text-black/60">{t.author}</span>
            </div>
          </div>

          {post.image && (
            <div className="rounded-2xl overflow-hidden mb-10 border border-black/10 max-w-3xl mx-auto">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          <div className="max-w-3xl mx-auto">
            <div className="body-text space-y-6 text-black/60 text-base md:text-lg">
              {content.length > 0 ? (
                content.map((paragraph, i) => (
                  <p key={i} >{paragraph}</p>
                ))
              ) : (
                <p >{post.description}</p>
              )}
            </div>
          </div>

          {nextPost && (
            <div className="border-t border-black/10 pt-12 mt-16 max-w-3xl mx-auto">
              <p className="text-black/30 text-sm mb-4" >{t.nextArticle}</p>
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-black/10 p-6 transition-all duration-300 hover:border-black/20 hover:-translate-y-1 bg-white"
              >
                <div>
                  <h3 className="text-black font-bold text-xl" >
                    {nextPost.title}
                  </h3>
                  <p className="text-black/50 text-sm mt-1 line-clamp-2" >
                    {nextPost.excerpt || nextPost.descriptionShort || nextPost.description}
                  </p>
                </div>
                <span className="text-black text-2xl transition-transform group-hover:translate-x-1 shrink-0">
                  ←
                </span>
              </Link>
            </div>
          )}
        </Container>
      </article>
    </main>
  );
}
