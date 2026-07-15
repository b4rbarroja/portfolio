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
  {
    title: "DevPort",
    category: "Portfolio",
    description:
      "A sleek developer portfolio template with blog and CMS integration.",
    tags: ["Next.js", "MDX", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "ChatBox",
    category: "Real-time",
    description:
      "A real-time messaging app with rooms, typing indicators, and file sharing.",
    tags: ["Socket.io", "React", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
  },
  {
    title: "FitTrack",
    category: "Health",
    description:
      "A fitness tracking app with workout plans, progress charts, and meal logging.",
    tags: ["React Native", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen">
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px]" />

      <section className={`relative px-4 sm:px-6 md:px-12 lg:px-20 pt-8 md:pt-12 pb-16 ${outfit.className}`}>
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Projects</h1>
          <p className="text-gray-400 mt-1">Some of the things I&apos;ve built</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 active:bg-white/[0.06] active:border-white/20 active:-translate-y-0.5"
            >
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 bg-white/95 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="bg-[#0d1420] p-5">
                <h3 className="text-white font-semibold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-300 bg-white/10 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
