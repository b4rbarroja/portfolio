import Image from "next/image";
import { Outfit } from "next/font/google";
const outfit = Outfit({
  weight: ["400", "500"],
  subsets: ["latin"],
});
export default function Skills() {
  return (
    <section
      id="skills"
      className={` bg-white/[0.03] mb-25 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col justify-center items-center gap-6 ${outfit.className}`}
    >
      <div className="flex justify-center items-center flex-col text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Technology Stack
        </h2>
        <p className="text-gray-400 mt-2 text-sm">
          Tools and technologies I work with
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 sm:gap-x-14 sm:gap-y-10 md:gap-x-16 md:gap-y-12">
        <div className="flex justify-center items-center flex-col gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 transition-all duration-300">
          <Image
            src="/html.png"
            alt="HTML"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <p className="text-[11px] sm:text-[12px] text-gray-400">HTML</p>
        </div>

        <div className="flex justify-center items-center flex-col gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 transition-all duration-300">
          <Image
            src="/css2.svg"
            alt="CSS"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <p className="text-[11px] sm:text-[12px] text-gray-400">CSS</p>
        </div>

        <div className="flex justify-center items-center flex-col gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 transition-all duration-300">
          <Image
            src="/js.png"
            alt="JS"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <p className="text-[11px] sm:text-[12px] text-gray-400">JS</p>
        </div>

        <div className="flex justify-center items-center flex-col gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 transition-all duration-300">
          <Image
            src="/tailwind2.png"
            alt="Tailwind CSS"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <p className="text-[11px] sm:text-[12px] text-gray-400">
            Tailwind CSS
          </p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 transition-all duration-300">
          <Image
            src="/react.png"
            alt="React"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <p className="text-[11px] sm:text-[12px] text-gray-400">React</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 transition-all duration-300">
          <Image
            src="/next.png"
            alt="Next.js"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <p className="text-[11px] sm:text-[12px] text-gray-400">Next.js</p>
        </div>

        <div className="flex justify-center items-center flex-col gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 transition-all duration-300">
          <Image
            src="/ts.png"
            alt="TypeScript"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <p className="text-[11px] sm:text-[12px] text-gray-400">TypeScript</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 transition-all duration-300">
          <Image
            src="/node.png"
            alt="Node.js"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <p className="text-[11px] sm:text-[12px] text-gray-400">Node.js</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 brightness-0 invert opacity-60 hover:opacity-100 active:opacity-100 transition-all duration-300">
          <Image
            src="/ex.png"
            alt="Express.js"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <p className="text-[11px] sm:text-[12px] text-gray-400">Express.js</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 transition-all duration-300">
          <Image
            src="/postgres.png"
            alt="PostgreSQL"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <p className="text-[11px] sm:text-[12px] text-gray-400">PostgreSQL</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 transition-all duration-300">
          <Image
            src="/prisma.png"
            alt="Prisma"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <p className="text-[11px] sm:text-[12px] text-gray-400">Prisma</p>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 active:grayscale-0 active:opacity-100 transition-all duration-300">
          <Image
            src="/git.png"
            alt="Git"
            width={40}
            height={40}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <p className="text-[11px] sm:text-[12px] text-gray-400">Git</p>
        </div>
      </div>
    </section>
  );
}
