"use client";
import { useState, useEffect, FormEvent } from "react";

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  descriptionShort: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function DashboardProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    descriptionShort: "",
    image: "",
    githubUrl: "",
    liveUrl: "",
    featured: false,
    published: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) {
          console.error("Failed to fetch projects: HTTP", res.status);
          setProjects([]);
          return;
        }
        const data = await res.json();
        setProjects(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]);
      }
    };

    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`فشل الإضافة: ${data.message || "حدث خطأ ما"}`);
        return;
      }

      setProjects((prev) => [data, ...prev]);

      setFormData({
        title: "",
        slug: "",
        description: "",
        descriptionShort: "",
        image: "",
        githubUrl: "",
        liveUrl: "",
        featured: false,
        published: true,
      });

      alert("تم إضافة المشروع بنجاح!");
    } catch (error) {
      console.error("Error creating project:", error);
      alert("حدث خطأ في الاتصال بالسيرفر");
    }
  };

  const handleDelete = async (slug: string) => {
    const isConfirmed = window.confirm(
      "هل أنت متأكد من رغبتك في حذف هذا المشروع؟",
    );
    if (!isConfirmed) return;

    try {
      const res = await fetch(`/api/projects/${encodeURIComponent(slug)}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const data = await res.json();

      if (!res.ok) {
        alert(`فشل الحذف: ${data.message || "حدث خطأ أثناء الحذف"}`);
        return;
      }

      setProjects((prev) => prev.filter((project) => project.slug !== slug));

      alert("تم حذف المشروع بنجاح!");
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("حدث خطأ في الاتصال بالسيرفر أثناء الحذف");
    }
  };

  return (
    <main className="min-h-screen bg-[#080b14] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          المشاريع
        </div>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            إدارة المشاريع
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-white/50">
          أضف مشروعاً جديداً أو تصفح المشاريع المنشورة حالياً.
        </p>

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
          <h2 className="mb-6 text-xl font-bold text-white">إضافة مشروع جديد</h2>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs text-white/60">
                عنوان المشروع (Title)
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="أدخل عنوان المشروع..."
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-white/60">
                المعرف الفريد (Slug)
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="my-awesome-project"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-white/60">
                رابط الصورة (Image URL)
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.png"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-white/60">
                رابط GitHub (GitHub URL)
              </label>
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                placeholder="https://github.com/user/repo"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs text-white/60">
                رابط الموقع المباشر (Live URL)
              </label>
              <input
                type="url"
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleChange}
                placeholder="https://myproject.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs text-white/60">
                الوصف القصير (Description Short)
              </label>
              <input
                type="text"
                name="descriptionShort"
                value={formData.descriptionShort}
                onChange={handleChange}
                placeholder="وصف مختصر للظهور في الكروت..."
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs text-white/60">
                الوصف الكامل (Description)
              </label>
              <textarea
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                placeholder="تفاصيل المشروع والوصف الشامل..."
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-4 w-4 rounded border-white/10 bg-white/5 text-blue-600 focus:ring-0"
              />
              <label
                htmlFor="featured"
                className="cursor-pointer text-sm text-white/80"
              >
                مشروع مميز (Featured)
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="h-4 w-4 rounded border-white/10 bg-white/5 text-blue-600 focus:ring-0"
              />
              <label
                htmlFor="published"
                className="cursor-pointer text-sm text-white/80"
              >
                نشر المشروع مباشرة (Published)
              </label>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.99]"
              >
                إضافة المشروع
              </button>
            </div>
          </form>
        </section>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.06]"
            >
              {project.image && (
                <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="mb-2 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {project.featured ? "مميز" : "عادي"}
              </div>
              <h2 className="text-lg font-bold text-white line-clamp-2">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/45 line-clamp-3">
                {project.descriptionShort || project.description}
              </p>
              <div className="mt-4 flex gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-all hover:border-blue-500/40 hover:text-blue-400"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-all hover:border-cyan-500/40 hover:text-cyan-400"
                  >
                    Live
                  </a>
                )}
              </div>
              <div className="mt-auto pt-6 flex items-center justify-between text-xs text-white/30">
                <span>
                  {project.createdAt
                    ? new Date(project.createdAt).toLocaleDateString("ar-EG")
                    : ""}
                </span>
                <span
                  className={`${project.published ? "text-emerald-400" : "text-red-400"}`}
                >
                  {project.published ? "منشور" : "مسودة"}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(project.slug)}
                className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 py-2 text-xs font-semibold text-red-400 transition-all hover:bg-red-500 hover:text-white"
              >
                حذف المشروع
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}