"use client";
import { Palette, Server, Smartphone, Zap, MapPin } from "lucide-react";
import Container from "./Container";
import { Reveal } from "./Reveal";

const journey = [
  {
    icon: Palette,
    title: "تصميم الواجهات الأمامية",
    description:
      "تصميم واجهات أمامية لموقعك ذات شكل جمالي خلاب.",
    x: 78,
    y: 8,
  },
  {
    icon: Server,
    title: "تطوير الواجهات الخلفية",
    description: "تطوير الواجهات الخلفية لموقعك باستخدام أحدث التقنيات.",
    x: 22,
    y: 34,
  },
  {
    icon: Smartphone,
    title: "بتصميم متجاوب",
    description: "بتصميم متجاوب على جميع الأجهزة والشاشات",
    x: 78,
    y: 60,
  },
  {
    icon: Zap,
    title: "وأداء فائق",
    description: "وأداء فائق لا تشكو منه بطئا ولا انتظارات",
    x: 22,
    y: 86,
  },
];

// Winding trail through the four stops, in a 0-100 x 0-100 coordinate space.
// preserveAspectRatio="none" on the <svg> stretches this exactly onto the
// container, so it always lines up with the percentage-positioned pins below.
const TRAIL_PATH =
  "M 70 2 " +
  "Q 80 4 78 8 " +
  "C 58 16 34 20 22 34 " +
  "C 8 46 62 48 78 60 " +
  "C 96 72 38 76 22 86 " +
  "Q 14 92 18 96";

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col justify-center items-center py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <Reveal>
          <div className="flex justify-center items-center flex-col text-center mb-14 w-full max-w-3xl">
            <span className="text-black/30 text-sm md:text-base mb-2">+</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              ما أقدمه
            </h2>
            <div className="w-full border-t border-dashed border-black/10" />
          </div>
        </Reveal>

        <Reveal>
          <div className="relative w-full max-w-3xl h-[960px] sm:h-[1060px] md:h-[1210px]">
            {/* the trail */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <path
                d={TRAIL_PATH}
                fill="none"
                stroke="#000000"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeDasharray="0.4 2.6"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {/* start marker */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
              style={{ left: "70%", top: "2%" }}
            >
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shadow-sm">
                <MapPin className="w-4 h-4" strokeWidth={2} />
              </div>
            </div>

            {/* stops */}
            {journey.map(({ icon: Icon, title, description, x, y }) => (
              <div
                key={title}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center gap-3 w-[220px] sm:w-[260px]"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="w-20 h-20 rounded-full border border-black/10 bg-white flex items-center justify-center shadow-sm">
                  <Icon className="w-9 h-9 text-black" strokeWidth={1.5} />
                </div>
                <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-black/5 shadow-sm px-5 py-4">
                  <h3 className="text-lg md:text-xl font-semibold text-black mb-1">
                    {title}
                  </h3>
                  <p className="text-black/60 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}

            {/* finish marker + treasure (the CTA) */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-3"
              style={{ left: "18%", top: "96%" }}
            >
              <a
                href="#contact"
                className="whitespace-nowrap px-7 py-3 rounded-full bg-black text-white text-sm md:text-base font-medium hover:bg-black/80 transition-colors"
              >
                تواصل معنا لإنشاء مشروعك
              </a>
              <span className="text-3xl font-bold text-black leading-none select-none">
                ×
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
