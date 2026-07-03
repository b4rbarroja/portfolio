"use client";

import Link from "next/link";
import { Outfit } from "next/font/google";
import Image from "next/image";

const outfit = Outfit({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const orbitIcons = [
  { src: "/html.png", angle: 0 },
  { src: "/css.png", angle: 40 },
  { src: "/tailwind2.png", angle: 80 },
  { src: "/react.png", angle: 120 },
  { src: "/next.png", angle: 160 },
  { src: "/node.png", angle: 200 },
  { src: "/prisma.png", angle: 240 },
  { src: "/postgres.png", angle: 280 },
  { src: "/ts.png", angle: 320 },
];

export default function Hero() {
  return (
    <section
      className={`relative flex items-start text-white ${outfit.className}`}
    >
      <div className="w-full pt-8 md:pt-12 pb-16">
        <div className="flex justify-center md:hidden mb-5">
          <Link href="#">
            <Image src="/jabr2.png" alt="Logo" width={200} height={200} />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 xl:gap-24">
          {/* Left */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 blur-[2px] animate-ping"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400"></span>
              </span>
              <p className="text-green-400 text-sm">Available for freelance</p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
              Building Digital{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Products
              </span>{" "}
              That Drive Business.
            </h1>

            <p className="mt-6 text-gray-400 max-w-md mx-auto md:mx-0">
              I design and build scalable web applications, e-commerce platforms
              and custom software for ambitious brands.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 rounded-full shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] hover:scale-105 hover:from-blue-500 hover:to-cyan-400 active:scale-95 active:shadow-[0_0_35px_rgba(59,130,246,0.7)]">
                Start Project →
              </button>

              <button className="border border-white/20 px-6 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:scale-105 active:scale-95 active:bg-white active:text-black active:border-white">
                See Projects →
              </button>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-2 mt-6 text-yellow-400">
              {"★★★★★"}
              <span className="text-gray-400 text-sm ml-2">
                Trusted by businesses
              </span>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-8 text-center md:text-left">
              <div>
                <h2 className="text-2xl font-bold">15+</h2>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold">3+</h2>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold">100%</h2>
                <p className="text-gray-400 text-sm">Commitment</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[460px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full z-0" />

              <Image
                src="/mbg.png"
                alt="web development"
                width={300}
                height={300}
                className="relative z-10 w-[60%] sm:w-[65%]"
                priority
              />

              <div className="absolute inset-0 animate-spin-slow">
                {orbitIcons.map((icon) => (
                  <div
                    key={icon.src}
                    className="absolute inset-0"
                    style={{ transform: `rotate(${icon.angle}deg)` }}
                  >
                    <div
                      className="absolute top-0 left-1/2 bg-white/5 backdrop-blur-sm rounded-full p-1 sm:p-1.5 lg:p-2 border border-white/10"
                      style={{
                        transform: `translate(-50%, -50%) rotate(-${icon.angle}deg)`,
                      }}
                    >
                      <img
                        src={icon.src}
                        alt=""
                        className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
