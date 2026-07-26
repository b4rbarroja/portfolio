"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-lg mx-auto min-h-[420px]">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-16px); }
          }
          @keyframes ring-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes ring-spin-reverse {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }
          @keyframes ring-glow {
            0%, 100% { opacity: 0.25; }
            50% { opacity: 0.6; }
          }
          @keyframes code-orbit {
            0% { transform: rotate(0deg) translateX(170px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(170px) rotate(-360deg); }
          }
          @keyframes code-orbit-rev {
            0% { transform: rotate(0deg) translateX(140px) rotate(0deg); }
            100% { transform: rotate(-360deg) translateX(140px) rotate(360deg); }
          }
          @keyframes code-orbit-outer {
            0% { transform: rotate(0deg) translateX(210px) rotate(0deg); }
            100% { transform: rotate(-360deg) translateX(210px) rotate(360deg); }
          }
          @keyframes dash-spin {
            to { stroke-dashoffset: -200; }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          @keyframes pulse-ring {
            0% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.05); opacity: 0.15; }
            100% { transform: scale(1); opacity: 0.3; }
          }
          @keyframes terminal-type {
            from { width: 0; }
            to { width: 100%; }
          }
          .img-float { animation: float 6s ease-in-out infinite; }
          .ring-spin { animation: ring-spin 8s linear infinite; }
          .ring-spin-rev { animation: ring-spin-reverse 12s linear infinite; }
          .ring-glow { animation: ring-glow 3s ease-in-out infinite; }
          .code-orbit { animation: code-orbit 16s linear infinite; }
          .code-orbit-rev { animation: code-orbit-rev 20s linear infinite; }
          .code-orbit-outer { animation: code-orbit-outer 24s linear infinite; }
          .dash-spin { animation: dash-spin 3s linear infinite; }
          .blink { animation: blink 1s step-end infinite; }
          .pulse-ring { animation: pulse-ring 4s ease-in-out infinite; }
          .typing {
            overflow: hidden; white-space: nowrap; border-right: 2px solid #4F46E5;
            width: 0; animation: terminal-type 2s steps(18) 0.5s forwards, blink 0.8s step-end infinite 2.5s;
          }
        `}
      </style>

      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-50"
        style={{ backgroundImage: "radial-gradient(circle, rgba(79,70,229,0.06) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      {/* Animated code rings */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="ring1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="ring2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#4F46E5" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Ring 1 - outer dashed */}
        <circle cx="50%" cy="50%" r="130" fill="none" stroke="url(#ring1)" strokeWidth="1" strokeDasharray="6 8" className="ring-spin ring-glow" />
        {/* Ring 2 - inner dashed */}
        <circle cx="50%" cy="50%" r="100" fill="none" stroke="url(#ring2)" strokeWidth="1" strokeDasharray="4 10" className="ring-spin-rev ring-glow" style={{ animationDelay: "0.5s" }} />
        {/* Ring 3 - pulsing faint */}
        <circle cx="50%" cy="50%" r="160" fill="none" stroke="#4F46E5" strokeWidth="0.5" strokeDasharray="2 14" className="ring-spin" opacity="0.15" style={{ animationDirection: "reverse", animationDuration: "20s" }} />
      </svg>

      {/* Orbiting code labels on rings */}
      <div className="absolute w-0 h-0 code-orbit pointer-events-none select-none z-10">
        <div className="relative -left-7 -top-3 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-md text-indigo-600 font-mono text-[10px] font-bold shadow-sm border border-indigo-200/50">
          {"<dev />"}
        </div>
      </div>
      <div className="absolute w-0 h-0 code-orbit-rev pointer-events-none select-none z-10">
        <div className="relative -left-5 -top-3 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-md text-purple-600 font-mono text-[10px] font-bold shadow-sm border border-purple-200/50">
          {"{code}"}
        </div>
      </div>
      <div className="absolute w-0 h-0 code-orbit-outer pointer-events-none select-none z-10">
        <div className="relative -left-6 -top-3 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-md text-indigo-500 font-mono text-[10px] font-bold shadow-sm border border-indigo-200/50">
          {"<script>"}
        </div>
      </div>

      {/* Circular image */}
      <div className="img-float relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
        {/* Outer glow ring */}
        <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-indigo-500/20 blur-xl pulse-ring" />

        {/* Image */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-xl">
          <Image
            src="/personal.png"
            alt="Personal"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Code badge at bottom of circle */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 z-10 whitespace-nowrap">
          <span className="text-emerald-400 font-mono text-[10px]">$ </span>
          <span className="text-white/80 font-mono text-[10px] typing">building cool stuff...</span>
        </div>
      </div>

      {/* Floating code dust */}
      <div className="absolute top-[12%] left-[8%] text-indigo-400/20 font-mono text-[10px] select-none pointer-events-none" style={{ animation: "float 7s ease-in-out infinite 1s" }}>
        {"</>"}
      </div>
      <div className="absolute bottom-[18%] right-[6%] text-purple-400/20 font-mono text-[10px] select-none pointer-events-none" style={{ animation: "float 9s ease-in-out infinite 2s" }}>
        {"{ }"}
      </div>
      <div className="absolute top-[30%] right-[10%] text-indigo-400/15 font-mono text-[9px] select-none pointer-events-none" style={{ animation: "float 8s ease-in-out infinite 0.5s" }}>
        {"npm i"}
      </div>
      <div className="absolute bottom-[35%] left-[5%] text-purple-400/15 font-mono text-[9px] select-none pointer-events-none" style={{ animation: "float 10s ease-in-out infinite 1.5s" }}>
        {"yarn"}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-2 mb-4 text-black/40 text-sm">
              <span>✦</span>
              <span>مطور ويب متكامل</span>
            </div>

            <h1 className="hero-title text-3xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-xl">
              أبني منتجات رقمية
              <br />
              <span className="relative inline-block">
                تدفع الأعمال إلى الأمام.
              </span>
            </h1>

            <p className="body-text mt-6 text-black/60 max-w-lg">
              أصمم وأطور تطبيقات ويب حديثة، متاجر إلكترونية، ومنصات مخصصة
              تساعد العلامات التجارية على النمو.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/projects">
                <button className="btn-text bg-black text-white px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
                  <span className="rotate-45">↑</span>
                  استعرض المشاريع
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-text border border-black/15 px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 active:scale-95">
                  تحدث عن مشروعك
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">
              <div>
                <div className="mb-1 text-black">⚡</div>
                <h2 className="text-2xl font-bold">100%</h2>
                <p className="text-black/50 text-sm">التزام بالجودة</p>
              </div>
              <div>
                <div className="mb-1 text-black">👥</div>
                <h2 className="text-2xl font-bold">3+</h2>
                <p className="text-black/50 text-sm">سنوات خبرة</p>
              </div>
              <div>
                <div className="mb-1 text-black">{"</>"}</div>
                <h2 className="text-2xl font-bold">15+</h2>
                <p className="text-black/50 text-sm">مشروع مكتمل</p>
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
