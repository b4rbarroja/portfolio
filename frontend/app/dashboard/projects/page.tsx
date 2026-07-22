"use client";

import Link from "next/link";
import { useState } from "react";

interface ProjectEntry {
  id: number;
  title: string;
  slug: string;
  description: string;
  descriptionShort: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const emptyForm: ProjectEntry = {
  id: 0,
  title: "",
  slug: "",
  description: "",
  descriptionShort: "",
  image: "",
  githubUrl: "",
  liveUrl: "",
  featured: false,
};

const initialData: ProjectEntry[] = [
  { id: 1, title: "منصة التجارة الإلكترونية", slug: "ecommerce-platform", description: "منصة متكاملة للتجارة الإلكترونية تدعم الدفع الإلكتروني وإدارة المخزون.", descriptionShort: "منصة تسوق كاملة", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop", githubUrl: "https://github.com/user/ecommerce", liveUrl: "https://ecommerce-demo.com", featured: true },
  { id: 2, title: "تطبيق إدارة المهام", slug: "task-manager", description: "تطبيق ويب لإدارة المهام والمشاريع مع دعم الفرق والتعاون.", descriptionShort: "إدارة المهام بذكاء", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop", githubUrl: "https://github.com/user/task-manager", liveUrl: "", featured: true },
  { id: 3, title: "لوحة تحليلات ذكية", slug: "analytics-dashboard", description: "لوحة تفاعلية لتحليل البيانات وعرض الإحصائيات بشكل بصري.", descriptionShort: "تحليلات في الوقت الفعلي", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", githubUrl: "", liveUrl: "https://analytics-demo.com", featured: false },
];

const PER_PAGE = 4;

export default function ProjectsPage() {
  const [entries, setEntries] = useState<ProjectEntry[]>(initialData);
  const [page, setPage] = useState(0);
  const [modal, setModal] = useState<{ open: boolean; editId: number | null }>({ open: false, editId: null });
  const [form, setForm] = useState<ProjectEntry>(emptyForm);

  const openAdd = () => {
    setForm(emptyForm);
    setModal({ open: true, editId: null });
  };

  const openEdit = (id: number) => {
    const entry = entries.find((e) => e.id === id);
    if (entry) {
      setForm({ ...entry });
      setModal({ open: true, editId: id });
    }
  };

  const closeModal = () => {
    setModal({ open: false, editId: null });
    setForm(emptyForm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modal.editId) {
      setEntries((prev) => prev.map((entry) => (entry.id === modal.editId ? { ...form } : entry)));
    } else {
      const newId = Math.max(0, ...entries.map((e) => e.id)) + 1;
      setEntries((prev) => [...prev, { ...form, id: newId }]);
    }
    closeModal();
    setPage(0);
  };

  const removeEntry = (id: number) => {
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
    setPage(0);
  };

  const totalPages = Math.ceil(entries.length / PER_PAGE) || 1;
  const paginated = entries.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const inputClass = "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500/50 focus:bg-white/[0.07] placeholder:text-white/30";
  const labelClass = "block text-sm font-medium text-white/60 mb-1.5";

  return (
    <main className="min-h-screen bg-[#080b14] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/dashboard"
          className="mb-8 inline-flex items-center gap-1 text-sm text-white/50 transition hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          العودة للوحة التحكم
        </Link>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-extrabold sm:text-4xl">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">المشاريع</span>
            </h1>
            <p className="mt-3 max-w-xl text-white/50">إدارة المشاريع المنجزة والجارية</p>
          </div>
          <button
            onClick={openAdd}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            + إضافة مشروع
          </button>
        </div>

        <div className="mt-8 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3">
          <span className="text-sm text-white/60">
            <span className="font-medium text-white">{entries.length}</span> مشروع
          </span>
          <span className="text-sm text-white/40">
            صفحة {page + 1} من {totalPages}
          </span>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <table className="w-full text-right">
            <thead>
              <tr className="border-b border-white/10 text-sm text-white/40">
                <th className="px-6 py-4 font-medium">العنوان</th>
                <th className="px-6 py-4 font-medium">الرابط المختصر</th>
                <th className="px-6 py-4 font-medium">مميز</th>
                <th className="px-6 py-4 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((entry) => (
                <tr key={entry.id} className="border-b border-white/5 last:border-0 transition hover:bg-white/[0.02]">
                  <td className="px-6 py-4 text-sm">{entry.title}</td>
                  <td className="px-6 py-4 text-sm text-white/60" dir="ltr">{entry.slug}</td>
                  <td className="px-6 py-4">
                    {entry.featured ? (
                      <span className="inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">مميز</span>
                    ) : (
                      <span className="text-xs text-white/30">—</span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button onClick={() => openEdit(entry.id)} className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400 transition hover:bg-blue-500/20">تعديل</button>
                      <button onClick={() => removeEntry(entry.id)} className="rounded-lg bg-red-500/10 px-3 py-1.5 text-xs text-red-400 transition hover:bg-red-500/20">إزالة</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {entries.length === 0 && (
            <div className="p-12 text-center text-white/40">لا توجد مشاريع مضافة بعد</div>
          )}

          {entries.length > PER_PAGE && (
            <div className="flex items-center justify-center gap-4 border-t border-white/10 px-6 py-4">
              <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0} className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white disabled:cursor-not-allowed disabled:opacity-30">السابق</button>
              <span className="text-sm text-white/40">{page + 1} / {totalPages}</span>
              <button onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1} className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white disabled:cursor-not-allowed disabled:opacity-30">التالي</button>
            </div>
          )}
        </div>
      </div>

      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0d1420] p-8">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">{modal.editId ? "تعديل المشروع" : "إضافة مشروع"}</h2>
              <button onClick={closeModal} className="text-white/40 transition hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>العنوان</label>
                  <input name="title" value={form.title} onChange={handleChange} className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>الرابط (Slug)</label>
                  <input name="slug" value={form.slug} onChange={handleChange} className={inputClass} dir="ltr" required />
                </div>
              </div>

              <div>
                <label className={labelClass}>الوصف القصير</label>
                <input name="descriptionShort" value={form.descriptionShort} onChange={handleChange} className={inputClass} required />
              </div>

              <div>
                <label className={labelClass}>الوصف</label>
                <textarea name="description" value={form.description} onChange={handleChange} rows={3} className={inputClass} required />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className={labelClass}>رابط الصورة</label>
                  <input name="image" value={form.image} onChange={handleChange} className={inputClass} dir="ltr" />
                </div>
                <div>
                  <label className={labelClass}>GitHub</label>
                  <input name="githubUrl" value={form.githubUrl} onChange={handleChange} className={inputClass} dir="ltr" />
                </div>
                <div>
                  <label className={labelClass}>الموقع المباشر</label>
                  <input name="liveUrl" value={form.liveUrl} onChange={handleChange} className={inputClass} dir="ltr" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="featured" name="featured" checked={form.featured} onChange={handleChange} className="h-4 w-4 rounded border-white/10 bg-white/5 accent-blue-500" />
                <label htmlFor="featured" className="text-sm text-white/60">مشروع مميز</label>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={closeModal} className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white">إلغاء</button>
                <button type="submit" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90">{modal.editId ? "حفظ التعديلات" : "إضافة المشروع"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
