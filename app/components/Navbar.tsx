import Image from "next/image";
import Link from "next/link";
import { Outfit } from "next/font/google";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/contact" },
];
const outfit = Outfit({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <header className={`sticky top-0 z-40 w-full bg-linear-to-br from-[#020617]/95 via-[#0B1120]/90 to-[#020617]/95 border-b border-white/10 backdrop-blur-xl ${outfit.className}`}>
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-3">
          <span className="hidden sm:inline-block text-xs tracking-[0.28em] uppercase text-gray-300">
            Jabr-Dev
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition hover:text-white"
            >
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
  );
}
