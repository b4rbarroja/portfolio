"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { Reveal } from "./Reveal";

interface Project {
  title: string;
  slug: string;
  description: string;
  descriptionShort: string;
  tags?: string;
  image?: string;
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

const arabicText = {
  sectionLabel: "أعمالي المختارة",
  title: "مشاريع مميزة",
  subtitle: "بعض من المشاريع التي قمت ببنائها",
  viewAll: "عرض جميع المشاريع",
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        const all = Array.isArray(data) ? data.filter((p: Project) => p.published) : [];
        const featured = all.filter((p: Project) => p.featured);
        setProjects(featured.length > 0 ? featured.slice(0, 3) : all.slice(0, 3));
      })
      .catch(console.error);
  }, []);

  return (
    <section id="projects" className={" py-16 sm:py-20 lg:py-24"}>
      <Container>
        <Reveal>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <div>
              <p className="text-black/40 text-xl mb-1">{arabicText.sectionLabel}</p>
              <h2 className="text-7xl font-bold text-black flex items-center gap-2">
                <span>{arabicText.title}</span>
                <span className="text-black/30">✦</span>
              </h2>
              <p className="text-black/50 text-2xl mt-1">{arabicText.subtitle}</p>
            </div>
            <Link
              href="/projects"
              className="text-black font-medium text-xl hover:text-black/60 active:text-black/60 transition-colors whitespace-nowrap flex items-center gap-1"
            >
              <span>{arabicText.viewAll}</span>
            </Link>
          </div>
        </Reveal>

        {projects.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-black/10 bg-white h-64 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 100}>
                <a
                  href={`/projects/${project.slug}`}
                  className="rounded-2xl overflow-hidden border border-black/10 transition-all duration-300 hover:border-black/20 hover:-translate-y-1 active:border-black/20 active:-translate-y-0.5 block"
                >
                  <div className="relative w-full h-44">
                    <img
                      src={project.image || ""}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-white p-5">
                    <h3 className="text-black font-semibold text-3xl mb-2">{project.title}</h3>
                    <p className="text-black/50 text-lg mb-4 leading-relaxed">
                      {project.descriptionShort || project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-black -rotate-45">↗</span>
                      <div className="flex flex-wrap justify-end gap-2">
                        {parseTags(project.tags).slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-base text-black/60 bg-black/5 px-3 py-1.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
