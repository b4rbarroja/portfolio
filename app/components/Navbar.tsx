"use client";
import { useState } from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";
import { Menu, X } from "lucide-react";
const outfit = Outfit({
  weight: ["400", "500"],
  subsets: ["latin"],
});
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className={`sticky top-0 z-50  ${outfit.className}`}>
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between py-4">
          <Image src="/jabr2.png" alt="Logo" width={110} height={40} />
          <div className="hidden md:flex items-center gap-8 text-gray-300">
            {["Home", "Projects", "Services", "Blog", "Contact"].map((item) => (
              <span
                key={item}
                className="relative cursor-pointer hover:text-white transition
                after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
                after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-blue-400 px-5 py-2 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:scale-105 hover:from-blue-500 hover:to-cyan-400 active:scale-95">
              Let’s Talk →
            </button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-1.5 rounded-full transition-all duration-200 hover:bg-white/10 active:scale-90"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col gap-4 text-gray-300 animate-in fade-in slide-in-from-top-2 duration-300">
            {["Home", "Projects", "Services", "Blog", "Contact"].map((item) => (
              <span
                key={item}
                className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
              >
                {item}
              </span>
            ))}
            <button className="mt-4 bg-gradient-to-r from-blue-600 to-blue-400 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-[1.02] active:scale-95">
              Let’s Talk →
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
