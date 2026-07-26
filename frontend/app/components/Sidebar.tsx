"use client";
import { useCallback } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "المدونة", href: "/blog" },
  { name: "المشاريع", href: "/projects" },
  { name: "الخدمات", href: "/#services" },
  { name: "التواصل", href: "/contact" },
];

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
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
      onClose();
    },
    [onClose],
  );

  return (
    <>
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white border-l border-black/10 flex flex-col items-center py-8 gap-10 transition-transform duration-300 lg:hidden border-black/10 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="lg:hidden absolute top-4 left-4 text-black/40 hover:text-black p-1 transition-colors"
          aria-label="Close menu"
        >
          <X size={22} />
        </button>
        <Link href="#" onClick={onClose} className="flex justify-center w-full px-6">
          <Logo />
        </Link>
        <nav className="nav-text flex flex-col items-center gap-6 text-black/60">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="relative cursor-pointer hover:text-black active:text-black transition
                after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
                after:w-0 after:h-[2px] after:bg-black
                after:transition-all after:duration-300
                hover:after:w-full active:after:w-full"
            >
              {name}
            </Link>
          ))}
        </nav>
        <Link href="/contact">
          <button
            onClick={onClose}
            className="btn-text bg-black text-white px-5 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
          >
            تواصل معي
          </button>
        </Link>
      </aside>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/20 lg:hidden" onClick={onClose} />
      )}
    </>
  );
}
