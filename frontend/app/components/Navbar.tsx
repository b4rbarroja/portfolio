"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Outfit } from "next/font/google";
import Sidebar from "./Sidebar";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];
const outfit = Outfit({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`sticky top-0 z-40 w-full bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] border-b border-white/10 ${outfit.className}`}>
        <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight font-mono text-white">&lt;JabrDev /&gt;</span>
          </Link>

          <button
            type="button"
            onClick={toggleOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="transition hover:text-white">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-linear-to-r from-blue-600 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.25)] transition hover:shadow-[0_0_26px_rgba(59,130,246,0.35)] hover:scale-[1.02]"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      </header>
      <Sidebar open={open} onClose={closeMenu} />
    </>
  );
}






