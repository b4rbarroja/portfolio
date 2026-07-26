import Link from "next/link";

const links = [
  {
    href: "/dashboard/projects",
    title: "المشاريع",
    description: "استعرض كل الأعمال والمشاريع المنجزة والجارية.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    href: "/dashboard/blogs",
    title: "المقالات",
    description: "تصفح آخر المقالات والمواضيع المنشورة.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M9 7h7M9 11h7" />
      </svg>
    ),
  },
  {
    href: "/dashboard/contact",
    title: "التواصل",
    description: "تفاصيل التواصل والرسائل الواردة.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-black">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/50">
          <span className="h-1.5 w-1.5 rounded-full bg-black/30" />
          لوحة التحكم
        </div>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl text-black" >
              مرحبًا بك في لوحة التحكم
          </h1>
          <p className="mt-4 max-w-xl text-black/50" >
              اختر أحد الأقسام أدناه للانتقال إليه وإدارة محتواه.
          </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white shadow-lg">
                {item.icon}
              </div>
                    <h2 className="text-lg font-bold text-black" >{item.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-black/50" >
                        {item.description}
                    </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-medium text-black/60">
                عرض
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-scale-x-100 transition-transform duration-300 group-hover:-translate-x-1"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
