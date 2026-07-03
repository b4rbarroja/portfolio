"use client";
import { useCallback, useState } from "react";
import { Outfit } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
const outfit = Outfit({
  weight: ["400", "500"],
  subsets: ["latin"],
});
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/contact" },
];
export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(false);

  const handleNav = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("/#")) {
        const id = href.slice(2);
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
      setOpen(false);
    },
    []
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden text-white p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-200 hover:bg-white/20 active:scale-90"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-[#020617] via-[#0B1120] to-[#020617] border-r border-white/5 flex flex-col items-center py-8 gap-10 transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        } ${outfit.className}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white p-1 transition-colors"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
        <Link href="#" onClick={handleClick} className="flex justify-center w-full px-6">
          <Image
            src="/jabr2.png"
            alt="Logo"
            width={130}
            height={48}
            className="w-auto h-12 object-contain"
            priority
          />
        </Link>
        <nav className="flex flex-col items-center gap-6 text-gray-300">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="relative cursor-pointer hover:text-white active:text-white transition
                after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
                after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400
                after:transition-all after:duration-300
                hover:after:w-full active:after:w-full"
            >
              {name}
            </Link>
          ))}
        </nav>
        <button
          onClick={handleClick}
          className="bg-gradient-to-r from-blue-600 to-blue-400 px-5 py-2 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] hover:scale-105 hover:from-blue-500 hover:to-cyan-400 active:scale-95 active:shadow-[0_0_30px_rgba(59,130,246,0.7)]"
        >
          Let&rsquo;s Talk →
        </button>
      </aside>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
