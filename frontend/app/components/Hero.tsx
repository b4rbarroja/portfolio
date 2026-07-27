"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { Reveal } from "./Reveal";

const orbitIcons = [
  { src: "/react.png", top: "-8%", left: "-10%", size: 64, delay: "0s" },
  { src: "/next.png", top: "-10%", left: "58%", size: 60, delay: "0.6s" },
  { src: "/ts.png", top: "22%", left: "-16%", size: 56, delay: "1.2s" },
  { src: "/node.png", top: "70%", left: "-14%", size: 58, delay: "1.8s" },
  { src: "/tailwind2.png", top: "80%", left: "60%", size: 60, delay: "0.9s" },
  { src: "/js.png", top: "20%", left: "82%", size: 56, delay: "1.5s" },
];

function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-xl mx-auto min-h-[480px]">
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-16px); }
          }
          @keyframes float-icon {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse-ring {
            0% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.05); opacity: 0.15; }
            100% { transform: scale(1); opacity: 0.3; }
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          @keyframes terminal-type {
            from { width: 0; }
            to { width: 100%; }
          }
          .img-float { animation: float 6s ease-in-out infinite; }
          .icon-float { animation: float-icon 4.5s ease-in-out infinite; }
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

      {/* Square image with skill icons orbiting around it */}
      <div className="img-float relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
        {/* Outer glow */}
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-indigo-500/20 blur-2xl pulse-ring" />

        {/* Square profile image */}
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-2xl">
          <Image
            src="/personal.png"
            alt="Personal"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Skill icons orbiting around the square image */}
        {orbitIcons.map((icon) => (
          <div
            key={icon.src}
            className="icon-float absolute z-10"
            style={{
              top: icon.top,
              left: icon.left,
              animationDelay: icon.delay,
            }}
          >
            <div
              className="rounded-2xl bg-white shadow-lg border border-black/10 flex items-center justify-center p-2.5"
              style={{ width: icon.size, height: icon.size }}
            >
              <Image
                src={icon.src}
                alt=""
                width={icon.size}
                height={icon.size}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}

        {/* Code badge at bottom of square */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 z-20 whitespace-nowrap">
          <span className="text-emerald-400 font-mono text-sm">$ </span>
          <span className="text-white/80 font-mono text-sm typing">building cool stuff...</span>
        </div>
      </div>

      {/* Floating code dust */}
      <div className="absolute top-[8%] left-[4%] text-indigo-400/20 font-mono text-sm select-none pointer-events-none" style={{ animation: "float 7s ease-in-out infinite 1s" }}>
        {"</>"}
      </div>
      <div className="absolute bottom-[12%] right-[2%] text-purple-400/20 font-mono text-sm select-none pointer-events-none" style={{ animation: "float 9s ease-in-out infinite 2s" }}>
        {"{ }"}
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
            <Reveal delay={0}>
              <div className="flex items-center gap-2 mb-5 text-black/40 text-sm md:text-base">
                <span>✦</span>
                <span>مطور ويب متكامل</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold max-w-xl leading-tight">
                حول فكرتك إلى واقع تراه عيناك
                <br />

              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-base md:text-lg mt-8 text-black/60 max-w-lg">
                مبرمج يسعى لتطوير الأفكار لتصبح رأي العين حية!
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link href="/projects">
                  <button className="text-sm md:text-base bg-black text-white px-11 py-5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">

                    ألق نظرة على مشاريعي
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="text-sm md:text-base border border-black/15 px-11 py-5 rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 active:scale-95">
                    أخبرني بفكرتك
                  </button>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="grid grid-cols-3 gap-8 mt-14">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">100%</h2>
                  <p className="text-black/50 text-sm md:text-base">التزام بالجودة</p>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">+5</h2>
                  <p className="text-black/50 text-sm md:text-base">مشروع مكتمل</p>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">100%</h2>
                  <p className="text-black/50 text-sm md:text-base">رضا العملاء</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="order-2 lg:order-2">
            <Reveal delay={150} duration={800}>
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
