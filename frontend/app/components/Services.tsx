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
    x: 74,
    y: 8,
  },
  {
    icon: Server,
    title: "تطوير الواجهات الخلفية",
    description: "تطوير الواجهات الخلفية لموقعك باستخدام أحدث التقنيات.",
    x: 26,
    y: 34,
  },
  {
    icon: Smartphone,
    title: "بتصميم متجاوب",
    description: "بتصميم متجاوب على جميع الأجهزة والشاشات",
    x: 74,
    y: 60,
  },
  {
    icon: Zap,
    title: "وأداء فائق",
    description: "وأداء فائق لا تشكو منه بطئا ولا انتظارات",
    x: 26,
    y: 86,
  },
];

// Winding trail through the four stops, in a 0-100 x 0-100 coordinate space.
// preserveAspectRatio="none" on the <svg> stretches this exactly onto the
// container, so it always lines up with the percentage-positioned pins below.
const TRAIL_PATH =
  "M 68 2 " +
  "Q 76 4 74 8 " +
  "C 56 16 36 20 26 34 " +
  "C 12 46 60 48 74 60 " +
  "C 92 72 40 76 26 86 " +
  "Q 18 92 22 96";

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col justify-center items-center py-16 sm:py-20 lg:py-24 overflow-x-hidden"
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
          <div className="relative w-full max-w-3xl h-[820px] sm:h-[1000px] md:h-[1150px] lg:h-[1210px] overflow-x-hidden">
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
              style={{ left: "68%", top: "2%" }}
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-black text-white flex items-center justify-center shadow-sm">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" strokeWidth={2} />
              </div>
            </div>

            {/* stops */}
            {journey.map(({ icon: Icon, title, description, x, y }) => (
              <div
                key={title}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center gap-2 sm:gap-3 w-[150px] sm:w-[210px] md:w-[260px]"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border border-black/10 bg-white flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-black" strokeWidth={1.5} />
                </div>
                <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-black/5 shadow-sm px-3 py-2.5 sm:px-5 sm:py-4">
                  <h3 className="text-sm sm:text-base md:text-xl font-semibold text-black mb-1">
                    {title}
                  </h3>
                  <p className="text-black/60 text-xs sm:text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}

            {/* finish marker + treasure (the CTA) */}
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 sm:gap-3"
              style={{ left: "22%", top: "96%" }}
            >
              <a
                href="#contact"
                className="whitespace-nowrap px-4 py-2 sm:px-7 sm:py-3 rounded-full bg-black text-white text-xs sm:text-sm md:text-base font-medium hover:bg-black/80 transition-colors"
              >
                تواصل معنا لإنشاء مشروعك
              </a>
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-none select-none">
                ×
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
