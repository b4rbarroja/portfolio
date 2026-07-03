import { Outfit } from "next/font/google";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const articles = [
  {
    title: "10 Tips for Writing Clean and Scalable Code",
    category: "Web Development",
    date: "May 15, 2024",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
  },
  {
    title: "Why I Love Next.js for Building Modern Web Apps",
    category: "Next.js",
    date: "Apr 28, 2024",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
  {
    title: "Building a Successful Online Store in 2024",
    category: "E-commerce",
    date: "Apr 10, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
];

export default function Articles() {
  return (
    <section
      className={`px-4 sm:px-6 md:px-16 py-12 sm:py-16 ${outfit.className}`}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Latest Articles
            </h2>
            <p className="text-gray-400 mt-1">Thoughts, tutorials and notes</p>
          </div>
          <a
            href="/blog"
            className="text-blue-400 font-medium text-sm hover:text-blue-300 active:text-blue-300 transition-colors whitespace-nowrap"
          >
            View All Articles →
          </a>
        </div>

        {/* Content grid: 3 articles + CTA card */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Article cards */}
          {articles.map((article) => (
            <div
              key={article.title}
              className="rounded-2xl overflow-hidden border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 active:bg-white/[0.06] active:border-white/20 active:-translate-y-0.5 "
            >
              {/* Image with category badge */}
              <div className="relative w-full h-40">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-3 left-3 bg-white/95 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="bg-[#0d1420] p-5">
                <h3 className="text-white font-semibold text-base leading-snug mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-xs">
                  {article.date} &middot; {article.readTime}
                </p>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-[#0d1420] border border-white/10 rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden">
            <h3 className="text-white font-bold text-lg mb-3">
              Let&apos;s work together
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Have a project in mind? Let&apos;s build something amazing
              together.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:from-blue-600 active:to-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-full w-fit transition-all">
              Start a Project →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
