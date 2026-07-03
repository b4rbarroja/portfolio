import React from "react";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  weight: ["400", "600"],
  subsets: ["latin"],
});
export default function HeroSection() {
  return (
    <div
      className={`flex items-center px-6 md:px-16 pt-4 pb-12 ${outfit.className}`}
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div>
          <div className="flex gap-2.5 items-center flex-row pb-5 font-bold">
            <p className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></p>
            <p>About me</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            I&apos;m a Developer who loves clean code and great designs.
          </h1>
          <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg">
            I enjoy turning complex problems into simple, elegant solutions,
            I&apos;m always learning and exploring new technologies to stay at
            the top of the game.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 rounded-full shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] hover:scale-105 hover:from-blue-500 hover:to-cyan-400 active:scale-95 active:shadow-[0_0_35px_rgba(59,130,246,0.7)]">
            More About Me →
          </button>{" "}
        </div>

        {/* Right side - Code editor card */}
        <div className="bg-[#0d1420] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          {/* Window controls */}
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          {/* Code content */}
          <pre className="p-6 text-sm md:text-[15px] leading-7 font-mono overflow-x-auto">
            <code>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-yellow-300">Developer</span>{" "}
              <span className="text-gray-300">= {"{"}</span>
              {"\n"}
              {"  "}
              <span className="text-cyan-300">name</span>
              <span className="text-gray-300">: </span>
              <span className="text-green-400">&quot;JABR&quot;</span>
              <span className="text-gray-300">,</span>
              {"\n"}
              {"  "}
              <span className="text-cyan-300">role</span>
              <span className="text-gray-300">: </span>
              <span className="text-green-400">
                &quot;Full Stack Developer&quot;
              </span>
              <span className="text-gray-300">,</span>
              {"\n"}
              {"  "}
              <span className="text-cyan-300">passion</span>
              <span className="text-gray-300">: [</span>
              <span className="text-green-400">&quot;Code&quot;</span>
              <span className="text-gray-300">, </span>
              <span className="text-green-400">&quot;Design&quot;</span>
              <span className="text-gray-300">, </span>
              <span className="text-green-400">
                &quot;Problem Solving&quot;
              </span>
              <span className="text-gray-300">],</span>
              {"\n"}
              {"  "}
              <span className="text-cyan-300">skills</span>
              <span className="text-gray-300">: {"{"}</span>
              {"\n"}
              {"    "}
              <span className="text-cyan-300">frontend</span>
              <span className="text-gray-300">: [</span>
              <span className="text-green-400">&quot;React&quot;</span>
              <span className="text-gray-300">, </span>
              <span className="text-green-400">&quot;Next.js&quot;</span>
              <span className="text-gray-300">, </span>
              <span className="text-green-400">&quot;TypeScript&quot;</span>
              <span className="text-gray-300">, </span>
              <span className="text-green-400">&quot;Tailwind CSS&quot;</span>
              <span className="text-gray-300">],</span>
              {"\n"}
              {"    "}
              <span className="text-cyan-300">backend</span>
              <span className="text-gray-300">: [</span>
              <span className="text-green-400">&quot;Node.js&quot;</span>
              <span className="text-gray-300">, </span>
              <span className="text-green-400">&quot;Express.js&quot;</span>
              <span className="text-gray-300">],</span>
              {"\n"}
              {"    "}
              <span className="text-cyan-300">database</span>
              <span className="text-gray-300">: [</span>
              <span className="text-green-400">&quot;PostgreSQL&quot;</span>
              <span className="text-gray-300">, </span>
              <span className="text-green-400">&quot;Prisma ORM&quot;</span>
              <span className="text-gray-300">],</span>
              {"\n"}
              {"    "}
              <span className="text-cyan-300">devops</span>
              <span className="text-gray-300">: [</span>
              <span className="text-green-400">&quot;Docker&quot;</span>
              <span className="text-gray-300">, </span>
              <span className="text-green-400">&quot;AWS&quot;</span>
              <span className="text-gray-300">, </span>
              <span className="text-green-400">&quot;Vercel&quot;</span>
              <span className="text-gray-300">, </span>
              <span className="text-green-400">&quot;Git&quot;</span>
              <span className="text-gray-300">, </span>
              <span className="text-green-400">&quot;GitHub&quot;</span>
              <span className="text-gray-300">]</span>
              {"\n"}
              {"  "}
              <span className="text-gray-300">{"},"}</span>
              {"\n"}
              {"  "}
              <span className="text-cyan-300">mindset</span>
              <span className="text-gray-300">: </span>
              <span className="text-green-400">
                &quot;Always building. Always improving.&quot;
              </span>
              {"\n"}
              <span className="text-gray-300">{"};"}</span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
