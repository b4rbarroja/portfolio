"use client";
import { useState, useEffect, FormEvent } from "react";

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  descriptionShort: string;
  image?: string;
  type: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  // 📝 State خاص ببيانات النموذج (Form Data)
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    descriptionShort: "",
    image: "",
    type: "",
    published: true,
  });

  // 🔄 جلب المقالات عند تحميل الصفحة
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
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
      const res = await fetch("/api/blogs", {
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

      // إضافة المقال الجديد للقائمة
      setBlogs((prev) => [data, ...prev]);

      // إعادة تعيين حقول الـ Form
      setFormData({
        title: "",
        slug: "",
        description: "",
        descriptionShort: "",
        image: "",
        type: "",
        published: true,
      });

      alert("تم إضافة المقال بنجاح! 🎉");
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("حدث خطأ في الاتصال بالسيرفر");
    }
  };

  // 🗑️ دالة حذف المقال بواسطة الـ slug
  const removeArticle = async (slug: string) => {
    const isConfirmed = window.confirm(
      "هل أنت متأكد من رغبتك في حذف هذا المقال؟",
    );
    if (!isConfirmed) return;

    try {
      const res = await fetch(
        `/api/blogs/${encodeURIComponent(slug)}`,
        {
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

      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.slug !== slug));

      alert("تم حذف المقال بنجاح! 🗑️");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("حدث خطأ في الاتصال بالسيرفر أثناء الحذف");
    }
  };

  const handleDelete = async (slug: string) => {
    try {
      const res = await fetch(`/api/blogs/${slug}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        alert("فشل حذف المقال من السيرفر");
        return;
      }

      setBlogs((prev) => prev.filter((blog) => blog.slug !== slug));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <main className="min-h-screen bg-[#080b14] text-white">
      {/* خلفية جمالية */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          المقالات
        </div>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            إدارة المقالات
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-white/50">
          أضف مقالاً جديداً أو تصفح المقالات المنشورة حالياً.
        </p>

        {/* 📋 نموذج إضافة مقال جديد */}
        <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
          <h2 className="mb-6 text-xl font-bold text-white">إضافة مقال جديد</h2>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            {/* Title */}
            <div>
              <label className="mb-2 block text-xs text-white/60">
                عنوان المقال (Title)
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="أدخل عنوان المقال..."
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Slug */}
            <div>
              <label className="mb-2 block text-xs text-white/60">
                المعرف الفريد (Slug)
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="react-nextjs-guide"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Type */}
            <div>
              <label className="mb-2 block text-xs text-white/60">
                التصنيف (Type)
              </label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Web Development"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Image URL */}
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

            {/* Short Description */}
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

            {/* Full Description */}
            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs text-white/60">
                الوصف الكامل (Description)
              </label>
              <textarea
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                placeholder="تفاصيل المقال والوصف الشامل..."
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Published Status */}
            <div className="flex items-center gap-2 sm:col-span-2">
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
                نشر المقال مباشرة (Published)
              </label>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-[0.99]"
              >
                إضافة المقال
              </button>
            </div>
          </form>
        </section>

        {/* 📰 شبكة عرض المقالات */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/[0.06]"
            >
              {/* 🖼️ صورة المقال */}
              {blog.image && (
                <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl border border-white/5 bg-white/5">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="mb-3 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-400">
                {blog.type}
              </div>
              <h2 className="text-lg font-bold text-white line-clamp-2">
                {blog.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/45 line-clamp-3">
                {blog.descriptionShort || blog.description}
              </p>
              <div className="mt-auto pt-6 flex items-center justify-between text-xs text-white/30">
                <span>
                  {blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString("ar-EG")
                    : ""}
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(blog.slug);
                }}
                className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 py-2 text-xs font-semibold text-red-400 transition-all hover:bg-red-500 hover:text-white"
              >
                delete this article
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
