"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Globe, Code2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Container from "@/app/components/Container";

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  descriptionShort: string;
  fullDescription?: string;
  problem?: string;
  solution?: string;
  tags?: string;
  image?: string;
  githubUrl?: string;
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
  published: boolean;
}

function parseTags(tags?: string): string[] {
  if (!tags) return [];
  try {
    return JSON.parse(tags) as string[];
  } catch {
    return [];
  }
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [project, setProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`/api/projects/${encodeURIComponent(slug)}`).then((r) => r.json()),
      fetch("/api/projects").then((r) => r.json()),
    ])
      .then(([projectData, allProjects]) => {
        setProject(projectData);
        setProjects(Array.isArray(allProjects) ? allProjects.filter((p: Project) => p.published) : []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (loading) {
    return (
      <main className="relative min-h-screen">
        <section className={`min-h-screen flex items-center justify-center`}>
          <div className="text-black/40" >جاري التحميل...</div>
        </section>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="relative min-h-screen">
        <section
          className={`min-h-screen flex flex-col items-center justify-center px-6`}
        >
          <span className="text-black/20 text-6xl mb-6">✦</span>
          <h1 className="text-4xl font-bold text-black mb-4" >
            المشروع غير موجود
          </h1>
          <p className="text-black/40 mb-8" >المشروع الذي تبحث عنه غير موجود.</p>
          <Link
            href="/projects"
            className="text-lg bg-black text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"

>
            <span>←</span>
            <span>العودة إلى المشاريع</span>
          </Link>
        </section>
      </main>
    );
  }

  const tags = parseTags(project.tags);

  return (
    <main className="relative min-h-screen">
      <article className={`py-16 sm:py-20 lg:py-24`}>
        <Container>
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors text-sm font-medium mb-6"
 
            >
              <ArrowLeft size={16} />
              <span>العودة إلى المشاريع</span>
            </Link>

            <h1 className="text-5xl font-bold text-black mb-4" >
              {project.title}
            </h1>

            <p className="text-black/50 text-lg max-w-2xl" >
              {project.description}
            </p>
          </div>

          {project.image && (
            <div className="rounded-2xl overflow-hidden mb-12 border border-black/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {tags.length > 0 && (
            <div className="mb-12">
              <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2" >
                <span className="text-black/30">✦</span>
                <span>التقنيات المستخدمة</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-black/60 bg-black/5 px-4 py-2 rounded-full border border-black/10"
 
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.fullDescription && (
            <div className="mb-12 max-w-3xl">
              <h2 className="text-lg font-bold text-black mb-4 flex items-center gap-2" >
                <span className="text-black/30">✦</span>
                <span>عن المشروع</span>
              </h2>
              <div className="prose prose-lg max-w-none text-black/60">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {project.fullDescription}
                </ReactMarkdown>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {project.problem && (
              <div className="border border-black/10 rounded-2xl p-6 bg-white">
                <h2 className="text-lg font-bold text-black mb-3 flex items-center gap-2" >
                  <span className="text-black/30">✦</span>
                  <span>المشكلة</span>
                </h2>
                <div className="prose prose-lg max-w-none text-black/60">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {project.problem}
                  </ReactMarkdown>
                </div>
              </div>
            )}
            {project.solution && (
              <div className="border border-black/10 rounded-2xl p-6 bg-white">
                <h2 className="text-lg font-bold text-black mb-3 flex items-center gap-2" >
                  <span className="text-black/30">✦</span>
                  <span>الحل</span>
                </h2>
                <div className="prose prose-lg max-w-none text-black/60">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {project.solution}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mb-16">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg bg-black text-white px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
 
              >
                <Globe size={18} />
                <span>المشروع المباشر</span>
                <span className="rotate-45">↑</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg border border-black/10 px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 active:scale-95 flex items-center gap-2"
 
              >
                <Code2 size={18} />
                <span>الكود المصدري</span>
              </a>
            )}
          </div>

          {nextProject && (
            <div className="border-t border-black/10 pt-12">
              <p className="text-black/30 text-sm mb-4" >✦ المشروع التالي</p>
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-black/10 p-6 transition-all duration-300 hover:border-black/20 hover:-translate-y-1 bg-white"
              >
                <div>
                  <h3 className="text-black font-bold text-xl" >
                    {nextProject.title}
                  </h3>
                  <p className="text-black/50 text-sm mt-1" >
                    {nextProject.descriptionShort || nextProject.description}
                  </p>
                </div>
                <span className="text-black text-2xl transition-transform group-hover:translate-x-1">
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
