"use client";

import Image from "next/image";
import Link from "next/link";
import { Code2 } from "lucide-react";
import { Reveal } from "./Reveal";

const t = {
  label: "عني",
  titleLine1: "مطور ويب متكامل جمع بين الشكل والأداء.",
  paragraph1:
    "شغوف بتحويل الأفكار المعقدة إلى تجارب رقمية سلسة وتفاعلية. أحرص دائماً على بناء واجهات مستخدم جذابة وسريعة التجاوب على كافة الشاشات.",
  paragraph2:
    "أركز على كتابة كود برمجي نظيف ومستقر، يعتمد أحدث التقنيات لضمان أفضل أداء لموقعك وسهولة في التوسع مستقبلاً.",
  contactBtn: "تواصل معي",
  viewWork: "استعرض أعمالي",
  badge: "أكتب اليوم ما يصنع الفرق غداً",
};

const stack = [
  { src: "/html.png", name: "HTML5", desc: "لغة ترميز" },
  { src: "/css2.svg", name: "CSS3", desc: "تصميم" },
  { src: "/js.png", name: "JavaScript", desc: "لغة برمجة" },
  { src: "/ts.png", name: "TypeScript", desc: "لغة برمجة" },
  { src: "/react.png", name: "React", desc: "مكتبة واجهات" },
  { src: "/next.png", name: "Next.js", desc: "إطار عمل" },
  { src: "/node.png", name: "Node.js", desc: "بيئة تشغيل" },
  { src: "/tailwind2.png", name: "Tailwind CSS", desc: "إطار عمل CSS" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-4 sm:px-6 md:px-10 lg:px-14 py-16 sm:py-20 lg:py-24"
    >
      <div className="relative w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* قسم النصوص والتحويل للعمل */}
        <div className="order-2 lg:order-1 text-center lg:text-right">
          <Reveal delay={0}>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-black font-semibold text-sm md:text-base">
              <span>{t.label}</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              {t.titleLine1}
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-4 text-black/60 text-base md:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              <p>{t.paragraph1}</p>
              <p>{t.paragraph2}</p>
            </div>
          </Reveal>

          {/* الزراير مكان الإحصائيات القديمة */}
          <Reveal delay={300}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
              <Link href="/contact">
                <button className="text-sm md:text-base bg-black text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
                  <span>{t.contactBtn}</span>
                </button>
              </Link>
              <Link
                href="/projects"
                className="text-black font-semibold text-sm md:text-base px-6 py-4 rounded-full border border-black/10 transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                {t.viewWork}
              </Link>
            </div>
          </Reveal>
        </div>

        {/* قسم التقنيات (Stack Grid) */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-start">
          <div className="absolute -top-10 -right-6 lg:-right-10 w-40 h-40 rounded-full border border-black/10 -z-10" />
          <div className="absolute top-1/2 -right-4 lg:right-auto lg:-left-8 grid grid-cols-4 gap-1.5 opacity-40 -z-10">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="w-1 h-1 rounded-full bg-black/40" />
            ))}
          </div>

          <Reveal delay={200} duration={800}>
            <div className="relative w-full max-w-[480px]">
              <div className="relative rounded-[28px] border border-black/10 bg-black/[0.02] p-6 sm:p-8">
                <div className="grid grid-cols-4 gap-3 sm:gap-4">
                  {stack.map((item, i) => (
                    <div
                      key={item.name}
                      title={item.name}
                      className="group relative aspect-square rounded-2xl border border-black/10 bg-white flex items-center justify-center animate-[stackFloat_5s_ease-in-out_infinite] transition-transform duration-300 hover:scale-110 hover:border-black/30 hover:z-10"
                      style={{ animationDelay: `${i * 0.35}s` }}
                    >
                      <Image
                        src={item.src}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="w-1/2 h-1/2 object-contain transition-all duration-300"
                      />

                      <div className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-3 py-1 text-[11px] text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                        {item.name}
                        <span className="block text-center text-white/50 text-[10px]">
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-4 right-1/2 translate-x-1/2 lg:right-8 lg:translate-x-0 bg-black rounded-full px-5 py-2.5 shadow-xl flex items-center gap-2 whitespace-nowrap">
                <Code2 className="w-4 h-4 text-white" strokeWidth={2} />
                <span className="text-white text-sm md:text-base font-medium">
                  {t.badge}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx global>{`
        @keyframes stackFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="stackFloat"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
