"use client";

import { useState } from "react";
import Container from "../components/Container";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen">
      <section className={`py-16 sm:py-20 lg:py-24`}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-black/40 text-lg mb-1">✦ تواصل</p>
              <h1 className="text-6xl font-bold text-black mb-2">
                تواصل معي
              </h1>
              <p className="text-black/50 text-xl mb-8 max-w-md">
                عندك فكرة مشروع أو استفسار؟ املأ الفورم وسأعود إليك في أقرب وقت.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
                <div>
                  <label className="block text-lg text-black/40 mb-1.5">
                    الاسم
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    required
                    placeholder="اسمك الكريم"
                    className="w-full border border-black/10 rounded-xl px-4 py-3 text-black text-lg outline-none focus:border-black/30 transition-colors bg-white placeholder:text-black/20"
                  />
                </div>

                <div>
                  <label className="block text-lg text-black/40 mb-1.5">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                    placeholder="بريدك الإلكتروني"
                    className="w-full border border-black/10 rounded-xl px-4 py-3 text-black text-lg outline-none focus:border-black/30 transition-colors bg-white placeholder:text-black/20"
                  />
                </div>

                <div>
                  <label className="block text-lg text-black/40 mb-1.5">
                    الرسالة
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full border border-black/10 rounded-xl px-4 py-3 text-black text-lg outline-none focus:border-black/30 transition-colors resize-none bg-white placeholder:text-black/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="text-xl bg-black text-white px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" && <span>جاري الإرسال...</span>}
                  {status === "success" && <span>✓ تم الإرسال!</span>}
                  {status === "error" && <span>حدث خطأ، حاول مرة أخرى</span>}
                  {status === "idle" && (
                    <>
                      <span>إرسال</span>
                      <span className="rotate-45">↑</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="lg:pt-16">
              <div className="border border-black/10 rounded-2xl p-8 bg-white space-y-8">
                <div>
                  <h3 className="text-black font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-black/30">✦</span>
                    <span>البريد الإلكتروني</span>
                  </h3>
                  <a
                    href="mailto:m7mdjbr1426@gmail.com"
                    className="text-black/60 hover:text-black transition-colors text-lg"
                  >
                    m7mdjbr1426@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-black font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-black/30">✦</span>
                    <span>الهاتف</span>
                  </h3>
                  <p className="text-black/60 text-lg">
                    ٠٨٩١ ٦٥٦ ١٠٠ ٢٠+
                  </p>
                </div>

                <div>
                  <h3 className="text-black font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-black/30">✦</span>
                    <span>الموقع</span>
                  </h3>
                  <p className="text-black/60 text-lg">
                    منوفية، مصر
                  </p>
                </div>

                <div>
                  <h3 className="text-black font-semibold text-lg mb-3 flex items-center gap-2">
                    <span className="text-black/30">✦</span>
                    <span>روابط التواصل</span>
                  </h3>
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
              </div>

              <div className="mt-8 grid grid-cols-8 gap-1.5 opacity-20">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className="w-1 h-1 rounded-full bg-black/40" />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
