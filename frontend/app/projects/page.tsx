"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../components/Container";

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

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data.filter((p: Project) => p.published) : []);
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
              <p className="text-black/40 text-sm mb-1" >✦ أعمالي</p>
              <h1 className="text-5xl font-bold text-black flex items-center gap-2" >
                <span>جميع المشاريع</span>
                <span className="text-black/30">✦</span>
              </h1>
              <p className="text-black/50 mt-2" >بعض من المشاريع التي قمت ببنائها</p>
            </div>
            <Link
              href="/"
              className="text-black font-medium text-sm hover:text-black/60 transition-colors whitespace-nowrap flex items-center gap-1"
 
            >
              <span>←</span>
              <span>العودة إلى الرئيسية</span>
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl border border-black/10 bg-white h-80 animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group rounded-2xl overflow-hidden border border-black/10 transition-all duration-300 hover:border-black/20 hover:-translate-y-1 active:border-black/20 active:-translate-y-0.5 bg-white"
                >
                  <div className="relative w-full h-44">
                    <img
                      src={project.image || ""}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-black font-semibold text-lg mb-2" >
                      {project.title}
                    </h2>
                    <p className="text-black/50 text-sm mb-4 leading-relaxed line-clamp-2" >
                      {project.descriptionShort || project.description}
                    </p>
                    <div className="flex flex-wrap justify-end gap-2">
                      {parseTags(project.tags).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-black/60 bg-black/5 px-3 py-1.5 rounded-full"
 
                        >
                          {tag}
                        </span>
                      ))}
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
