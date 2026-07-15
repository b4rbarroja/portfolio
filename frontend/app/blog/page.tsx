import { Outfit } from "next/font/google";
import Link from "next/link";
import { posts } from "@/app/data/posts";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function BlogPage() {
  return (
    <main className="relative bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen">
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px]" />

      <section className={`relative px-4 sm:px-6 md:px-12 lg:px-20 pt-8 md:pt-12 pb-16 ${outfit.className}`}>
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Blog</h1>
          <p className="text-gray-400 mt-1">Thoughts, tutorials and notes</p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="group rounded-2xl overflow-hidden border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 active:bg-white/[0.06] active:border-white/20 active:-translate-y-0.5 cursor-pointer h-full flex flex-col">
                {/* Image */}
                <div className="relative w-full h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title.en}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                    {post.category.en}
                  </span>
                </div>

                {/* Content */}
                <div className="bg-[#0d1420] p-5 flex-1 flex flex-col">
                  <h3 className="text-white font-semibold text-base leading-snug mb-2">
                    {post.title.en}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt.en}
                  </p>
                  <p className="text-gray-500 text-xs mt-auto">
                    {post.date} &middot; {post.readTime.en}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
