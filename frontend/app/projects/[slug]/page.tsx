"use client";

import { use, useEffect, useState } from "react";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";
import { authFetch } from "@/app/lib/authFetch";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  descriptionShort: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  published: boolean;
  createdAt: string;
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await authFetch(`/api/projects/${encodeURIComponent(slug)}`);
        if (!res.ok) {
          setProject(null);
          return;
        }
        const data = await res.json();
        setProject(data);
      } catch {
        setProject(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <main className="relative bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen flex items-center justify-center">
        <p className="text-gray-400">جاري تحميل المشروع...</p>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="relative bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen">
        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px]" />

        <section
          className={`relative min-h-screen flex flex-col items-center justify-center px-6 ${outfit.className}`}
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            المشروع غير موجود
          </h1>
          <p className="text-gray-400 mb-8">المشروع الذي تبحث عنه غير موجود.</p>
          <Link
            href="/projects"
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            → العودة إلى المشاريع
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
      >
        <article className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 text-gray-400 text-sm mb-4">
            {project.featured && (
              <span className="bg-emerald-500/10 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full border border-emerald-500/20">
                مميز
              </span>
            )}
            <span>
              {project.createdAt
                ? new Date(project.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : ""}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {project.title}
          </h1>

          <div className="mb-10 flex items-center justify-between">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} />
              العودة إلى المشاريع
            </Link>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Globe size={16} />
                  Live
                </a>
              )}
            </div>
          </div>

          {project.image && (
            <div className="rounded-2xl overflow-hidden mb-10 border border-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* تم إضافة max-w-2xl للتحكم في العرض و break-words لمنع النص/الروابط من الخروج برة الإطار */}
          <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line max-w-2xl break-words">
            {project.description}
          </div>
        </article>
      </section>
    </main>
  );
}
