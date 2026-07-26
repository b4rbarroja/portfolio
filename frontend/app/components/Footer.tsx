import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

const quickLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "من أنا", href: "/#about" },
  { name: "المشاريع", href: "/projects" },
  { name: "الخدمات", href: "/#services" },
  { name: "المدونة", href: "/blog" },
  { name: "تواصل معي", href: "/contact" },
];

const services = [
  "تطوير الويب",
  "التجارة الإلكترونية",
  "المنصات التعليمية",
  "لوحات التحكم & SaaS",
  "واجهات برمجة التطبيقات",
];

const t = {
  tagline: "نبني منتجات رقمية تصنع فرقاً حقيقياً.",
  quickLinksTitle: "روابط سريعة",
  servicesTitle: "خدماتي",
  contactTitle: "تواصل معي",
  location: "منوفية، مصر",
  rights: "جميع الحقوق محفوظة.",
  madeWith: "صنع بكل شغف",
};

export default function Footer() {
  return (
    <footer
      className={" relative overflow-hidden border-t border-black/10 pt-14 pb-6"}
    >
      <div className="absolute bottom-10 left-0 grid grid-cols-8 gap-1.5 opacity-30 -z-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <span key={i} className="w-1 h-1 rounded-full bg-black/40" />
        ))}
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3 text-black">
              <Logo />
            </div>
            <p className="text-black/50 text-sm leading-relaxed mb-6 max-w-xs" >
              {t.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/m7mdjbr"
                aria-label="GitHub"
                className="text-black/60 hover:text-white active:text-white transition-colors bg-black/5 hover:bg-black p-2.5 rounded-full"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/m7mdjbr/"
                aria-label="LinkedIn"
                className="text-black/60 hover:text-white active:text-white transition-colors bg-black/5 hover:bg-black p-2.5 rounded-full"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 11.01-4.12 2.06 2.06 0 01-.01 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
              <a
                href="mailto:m7mdjbr1426@gmail.com"
                aria-label="Email"
                className="text-black/60 hover:text-white active:text-white transition-colors bg-black/5 hover:bg-black p-2.5 rounded-full"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-black font-semibold text-sm mb-4 tracking-wide" >
              {t.quickLinksTitle}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-black/50 text-sm hover:text-black active:text-black transition-colors hover:-translate-x-1 inline-block"

                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold text-sm mb-4 tracking-wide" >
              {t.servicesTitle}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/projects"
                    className="text-black/50 text-sm hover:text-black active:text-black transition-colors hover:-translate-x-1 inline-block"

                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-black font-semibold text-sm mb-4 tracking-wide" >
              {t.contactTitle}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-black/50 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                m7mdjbr1426@gmail.com
              </li>
              <li className="flex items-center gap-3 text-black/50 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                ٠٨٩١ ٦٥٦ ١٠٠ ٢٠+
              </li>
              <li className="flex items-center gap-3 text-black/50 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span >{t.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-black/40 text-xs" >
            © {new Date().getFullYear()} جبر. {t.rights}
          </p>
          <p className="text-black/40 text-xs flex items-center gap-1" >
            {t.madeWith}
            <span className="text-red-500">♥</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
