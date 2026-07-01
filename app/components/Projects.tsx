import { Outfit } from "next/font/google";
const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const projects = [
  {
    title: "EcomZone",
    category: "E-commerce",
    description:
      "A modern e-commerce platform with payment integration and dashboard.",
    tags: ["Next.js", "Tailwind", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "TaskFlow",
    category: "SaaS",
    description:
      "A productivity SaaS app for teams to manage tasks and projects efficiently.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "StudyHub",
    category: "Education",
    description:
      "An online learning platform with courses, quizzes and certificates.",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default function Projects() {
  return (
    <section className={` px-6 md:px-16 py-16 ${outfit.className}`}>
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Featured Projects
            </h2>
            <p className="text-gray-400 mt-1">
              Some of the projects I&apos;ve built
            </p>
          </div>
          <a
            href="#"
            className="text-blue-400 font-medium text-sm hover:text-blue-300 transition-colors whitespace-nowrap"
          >
            View All Projects →
          </a>
        </div>
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.35)] border border-white/5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 "
            >
              {/* Image with category badge */}
              <div className="relative w-full h-44">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-white/95 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              {/* Content */}
              <div className="bg-white p-5">
                <h3 className="text-[#1a1d29] font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-[#6b7280] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#4b5563] bg-[#f3f4f6] px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
