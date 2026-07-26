"use client";

import Link from "next/link";
import Container from "./Container";

function HeroSVG() {
  return (
    <svg viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-4xl mx-auto" style={{ overflow: "visible" }}>
      <defs>
        <pattern id="grid" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#111" opacity="0.1" />
        </pattern>
      </defs>
      <style>
        {`
          @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
          @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
          @keyframes floatC { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
          @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
          @keyframes dash { to{stroke-dashoffset:-20} }
          @keyframes pulse { 0%,100%{opacity:0.2} 50%{opacity:0.8} }
          .fa { animation:floatA 6s ease-in-out infinite }
          .fb { animation:floatB 4.5s ease-in-out infinite }
          .fc { animation:floatC 5s ease-in-out infinite }
          .blink { animation:blink 1.2s step-end infinite }
          .dash { animation:dash 2s linear infinite }
          .pulse { animation:pulse 3s ease-in-out infinite }
        `}
      </style>

      <rect width="800" height="500" fill="url(#grid)" />

      <g className="fa">
        <rect x="190" y="80" width="420" height="280" rx="16" stroke="#333" strokeWidth="1.5" />
        <rect x="190" y="80" width="420" height="42" rx="16" stroke="#333" strokeWidth="1.5" />
        <rect x="190" y="105" width="420" height="17" fill="#111" fillOpacity="0.02" />
        <clipPath id="browserBottom"><rect x="190" y="122" width="420" height="238" rx="0" /></clipPath>
        <g clipPath="url(#browserBottom)">
          <circle cx="216" cy="101" r="5" fill="#777" />
          <circle cx="236" cy="101" r="5" fill="#777" />
          <circle cx="256" cy="101" r="5" fill="#777" />

          <rect x="220" y="145" width="60" height="4" rx="2" fill="#777" />
          <rect x="220" y="163" width="120" height="4" rx="2" fill="#777" />
          <rect x="240" y="181" width="80" height="4" rx="2" fill="#777" />
          <rect x="240" y="199" width="140" height="4" rx="2" fill="#333" />

          <text x="220" y="255" fontFamily="monospace" fontSize="30" fontWeight="700" fill="#4F46E5">{`{ }`}</text>

          <rect x="220" y="285" width="100" height="4" rx="2" fill="#777" />
          <rect x="220" y="305" width="10" height="20" rx="2" fill="#4F46E5" className="blink" />

          <rect x="440" y="145" width="140" height="80" rx="8" stroke="#333" strokeWidth="1" fill="none" />
          <rect x="455" y="165" width="50" height="4" rx="2" fill="#777" />
          <rect x="455" y="183" width="90" height="4" rx="2" fill="#777" />
          <rect x="455" y="201" width="70" height="4" rx="2" fill="#777" />

          <path d="M 440 320 L 465 302 L 490 306 L 515 284 L 540 292 L 565 270" stroke="#4F46E5" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="565" cy="270" r="4" fill="#4F46E5" />
        </g>
      </g>

      <g className="fb" style={{ transformOrigin: "100px 200px" }}>
        <line x1="80" y1="160" x2="170" y2="210" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="170" y1="210" x2="80" y2="290" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="80" y1="290" x2="170" y2="350" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="80" y1="160" x2="80" y2="290" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="80" cy="160" r="6" fill="#111" />
        <circle cx="170" cy="210" r="6" fill="#4F46E5" className="pulse" />
        <circle cx="80" cy="290" r="6" fill="#333" />
        <circle cx="170" cy="350" r="6" fill="#111" />
      </g>

      <g className="fc" style={{ transformOrigin: "720px 260px" }}>
        <line x1="630" y1="170" x2="710" y2="210" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="710" y1="210" x2="630" y2="310" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="630" y1="170" x2="630" y2="310" stroke="#333" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="630" cy="170" r="6" fill="#111" />
        <circle cx="710" cy="210" r="6" fill="#4F46E5" className="pulse" />
        <circle cx="630" cy="310" r="6" fill="#333" />
      </g>

      <path d="M 180 430 C 280 400, 380 450, 500 420 S 620 440, 680 410" stroke="#777" strokeWidth="0.75" fill="none" strokeDasharray="8 4" className="dash" />
      <path d="M 80 455 C 240 425, 350 480, 520 450 S 650 470, 750 440" stroke="#333" strokeWidth="0.5" fill="none" />

      <g>
        <path d="M 50 100 l 4 8 l 8 4 l -8 4 l -4 8 l -4 -8 l -8 -4 l 8 -4 Z" fill="#4F46E5" className="pulse" />
        <path d="M 740 80 l 3 6 l 6 3 l -6 3 l -3 6 l -3 -6 l -6 -3 l 6 -3 Z" fill="#111" />
        <path d="M 660 370 l 2 5 l 5 2 l -5 2 l -2 5 l -2 -5 l -5 -2 l 5 -2 Z" fill="#4F46E5" className="pulse" />
        <path d="M 120 390 l 2 4 l 4 2 l -4 2 l -2 4 l -2 -4 l -4 -2 l 4 -2 Z" fill="#777" />
      </g>

      <text x="640" y="430" fontFamily="monospace" fontSize="14" fill="#777" opacity="0.4">&lt;/&gt;</text>
      <text x="130" y="115" fontFamily="monospace" fontSize="12" fill="#777" opacity="0.35">&lt;/&gt;</text>

      <circle cx="350" cy="410" r="3" fill="#4F46E5" opacity="0.25" />
      <circle cx="490" cy="390" r="2" fill="#333" opacity="0.35" />
      <circle cx="590" cy="430" r="4" fill="#111" opacity="0.12" />

      <rect x="660" y="140" width="36" height="22" rx="4" stroke="#777" strokeWidth="1" fill="none" className="fc" opacity="0.5" />
      <rect x="105" y="350" width="28" height="28" rx="6" stroke="#333" strokeWidth="1" fill="none" className="fa" opacity="0.4" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative flex items-start">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-black/40 text-sm">
            <span>مطور ويب متكامل</span>
            <span>✦</span>
          </div>

          <h1 className="hero-title text-3xl sm:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto">
            أبني منتجات رقمية
            <br />
            <span className="relative inline-block">
              تدفع الأعمال إلى الأمام.
            </span>
          </h1>

          <p className="body-text mt-6 text-black/60 max-w-lg mx-auto">
            أصمم وأطور تطبيقات ويب حديثة، متاجر إلكترونية، ومنصات مخصصة
            تساعد العلامات التجارية على النمو.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Link href="/contact">
              <button className="btn-text bg-black text-white px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
                <span className="rotate-45">↑</span>
                استعرض المشاريع
              </button>
            </Link>
            <Link href="/projects">
              <button className="btn-text border border-black/15 px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 active:scale-95">
                تحدث عن مشروعك
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <div className="flex justify-center mb-1 text-black">⚡</div>
              <h2 className="text-2xl font-bold">100%</h2>
              <p className="text-black/50 text-sm">التزام بالجودة</p>
            </div>
            <div>
              <div className="flex justify-center mb-1 text-black">👥</div>
              <h2 className="text-2xl font-bold">3+</h2>
              <p className="text-black/50 text-sm">سنوات خبرة</p>
            </div>
            <div>
              <div className="flex justify-center mb-1 text-black">{"</>"}</div>
              <h2 className="text-2xl font-bold">15+</h2>
              <p className="text-black/50 text-sm">مشروع مكتمل</p>
            </div>
          </div>

          <div className="mt-12 w-full">
            <HeroSVG />
          </div>
        </div>
      </Container>
    </section>
  );
}
