"use client";

import Link from "next/link";
import { Code2, User, Zap } from "lucide-react";

const t = {
  label: "عني",
  titleLine1: "مطور يحب الكود النظيف",
  titleLine2: "والتصاميم الراقية.",
  paragraph:
    "أنا مطور ويب شغوف بتحويل الأفكار المعقدة إلى حلول رقمية أنيقة وفعالة. أركز على كتابة كود نظيف، تجربة مستخدم مميزة، وتصاميم حديثة تعكس هوية العلامة التجارية.",
  contactBtn: "تواصل معي",
  viewWork: "استعرض أعمالي",
  stat1: "مشروع مكتمل",
  stat2: "سنوات خبرة",
  stat3: "التزام بالجودة",
  badge: "أكتب اليوم ما يصنع الفرق غداً",
};

export default function About() {
  return (
    <section
      id="about"
      className={" relative overflow-hidden bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 lg:py-24"}
    >
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-right">
          <div className="flex items-center justify-center lg:justify-end gap-2 mb-5 text-black font-semibold">
            <span >{t.label}</span>
            <span className="text-black/40">✦</span>
          </div>

          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl text-black mb-6" >
            {t.titleLine1}
            <br />
            {t.titleLine2}
          </h1>

          <p className="body-text text-black/50 text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0" >
            {t.paragraph}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-12">
            <Link href="/contact">
              <button className="btn-text bg-black text-white px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2" >
                <span>{t.contactBtn}</span>
                <span className="-rotate-45">→</span>
              </button>
            </Link>
            <Link
              href="/projects"
              className="text-black font-medium underline underline-offset-4 decoration-black/30 hover:decoration-black transition-all"
 
            >
              {t.viewWork}
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            <div className="flex flex-col items-center lg:items-end gap-2">
              <Code2 className="w-5 h-5 text-blue-500" strokeWidth={2} />
              <h2 className="text-xl md:text-2xl font-bold text-black">+15</h2>
              <p className="text-black/40 text-xs" >{t.stat1}</p>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-2">
              <User className="w-5 h-5 text-blue-500" strokeWidth={2} />
              <h2 className="text-xl md:text-2xl font-bold text-black">+3</h2>
              <p className="text-black/40 text-xs" >{t.stat2}</p>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-2">
              <Zap className="w-5 h-5 text-amber-500" strokeWidth={2} fill="currentColor" />
              <h2 className="text-xl md:text-2xl font-bold text-black">100%</h2>
              <p className="text-black/40 text-xs" >{t.stat3}</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-start">
          <div className="absolute -top-10 -right-6 lg:-right-10 w-40 h-40 rounded-full border border-black/10 -z-10" />
          <div className="absolute top-1/2 -right-4 lg:right-auto lg:-left-8 grid grid-cols-4 gap-1.5 opacity-40 -z-10">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="w-1 h-1 rounded-full bg-black/40" />
            ))}
          </div>

          <div className="relative w-full max-w-[480px]">
            <svg
              viewBox="0 0 480 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <circle cx="240" cy="210" r="180" fill="black" fillOpacity="0.03" />
              <circle cx="240" cy="210" r="180" stroke="black" strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 6" />

              <rect x="90" y="80" width="300" height="200" rx="14" stroke="black" strokeWidth="2.5" />
              <line x1="90" y1="118" x2="390" y2="118" stroke="black" strokeWidth="2.5" />
              <circle cx="108" cy="99" r="4" fill="black" />
              <circle cx="122" cy="99" r="4" fill="black" fillOpacity="0.4" />
              <circle cx="136" cy="99" r="4" fill="black" fillOpacity="0.2" />

              <text
                x="240"
                y="215"
                textAnchor="middle"
                fontFamily="monospace"
                fontSize="56"
                fontWeight="700"
                fill="black"
              >
                {"</>"}
              </text>

              <line x1="115" y1="145" x2="175" y2="145" stroke="black" strokeOpacity="0.25" strokeWidth="4" strokeLinecap="round" />
              <line x1="115" y1="245" x2="150" y2="245" stroke="black" strokeOpacity="0.25" strokeWidth="4" strokeLinecap="round" />
              <line x1="305" y1="145" x2="365" y2="145" stroke="black" strokeOpacity="0.25" strokeWidth="4" strokeLinecap="round" />
              <line x1="330" y1="245" x2="365" y2="245" stroke="black" strokeOpacity="0.25" strokeWidth="4" strokeLinecap="round" />

              <path d="M60 280 L420 280 L400 300 L80 300 Z" stroke="black" strokeWidth="2.5" strokeLinejoin="round" />
              <line x1="215" y1="290" x2="265" y2="290" stroke="black" strokeWidth="2.5" strokeLinecap="round" />

              <g>
                <rect x="20" y="150" width="46" height="46" rx="12" stroke="black" strokeWidth="2" />
                <text x="43" y="179" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="16" fill="black">{"{ }"}</text>
              </g>
              <g>
                <rect x="405" y="60" width="46" height="46" rx="12" stroke="black" strokeWidth="2" />
                <path d="M420 83 l7 -7 M420 83 l7 7 M436 76 l7 7 M436 90 l-7 -7" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </g>
              <g>
                <circle cx="425" cy="330" r="24" stroke="black" strokeWidth="2" />
                <path d="M418 330 l5 5 l10 -10" stroke="black" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              <path d="M35 60 l4 10 l10 4 l-10 4 l-4 10 l-4 -10 l-10 -4 l10 -4 Z" fill="black" fillOpacity="0.15" />
              <path d="M455 220 l3 7 l7 3 l-7 3 l-3 7 l-3 -7 l-7 -3 l7 -3 Z" fill="black" fillOpacity="0.2" />
            </svg>

            <div className="absolute -bottom-4 right-1/2 translate-x-1/2 lg:right-8 lg:translate-x-0 bg-black rounded-full px-5 py-2.5 shadow-xl flex items-center gap-2 whitespace-nowrap">
              <Code2 className="w-4 h-4 text-white" strokeWidth={2} />
              <span className="text-white text-xs sm:text-sm font-medium" >{t.badge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
