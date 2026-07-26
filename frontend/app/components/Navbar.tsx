"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Container from "./Container";
import Logo from "./Logo";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "الخدمات", href: "/#services" },
  { name: "المشاريع", href: "/projects" },
  { name: "المدونة", href: "/blog" },
  { name: "تواصل معي", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full backdrop-blur-md border-b border-black/10`}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          <nav className="nav-text hidden lg:flex items-center gap-8 text-sm text-black">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative transition hover:text-black/70 ${
                  idx === 0 ? "text-black" : "text-black/70"
                }`}

              >
                {link.name}
                {idx === 0 && (
                  <span className="absolute -bottom-2 right-0 left-0 h-[2px] bg-black rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-text hidden sm:inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm text-black shadow-sm transition hover:bg-black hover:text-white"

            >
              تحدث معي
              <span className="rotate-45">↑</span>
            </Link>

            <button
              type="button"
              onClick={toggleOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition hover:bg-black hover:text-white lg:hidden"
              aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </header>
      <Sidebar open={open} onClose={closeMenu} />
    </>
  );
}
