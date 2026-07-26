"use client";
import { useState, useEffect, FormEvent } from "react";
import { authFetch } from "@/app/lib/authFetch";

interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  descriptionShort: string;
  content?: string;
  excerpt?: string;
  readTime?: string;
  date?: string;
  image?: string;
  type: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    descriptionShort: "",
    content: "",
    excerpt: "",
    readTime: "",
    date: "",
    image: "",
    type: "",
    published: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await authFetch("/api/blogs");
        if (!res.ok) {
          console.error("Failed to fetch blogs: HTTP", res.status);
          setBlogs([]);
          return;
        }
        const data = await res.json();
        setBlogs(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
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
      const payload = {
        ...formData,
        content: formData.content || undefined,
      };

      const res = await authFetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`فشل الإضافة: ${data.message || "حدث خطأ ما"}`);
        return;
      }

      setBlogs((prev) => [data, ...prev]);

      setFormData({
        title: "",
        slug: "",
        description: "",
        descriptionShort: "",
        content: "",
        excerpt: "",
        readTime: "",
        date: "",
        image: "",
        type: "",
        published: true,
      });

      alert("تم إضافة المقال بنجاح!");
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("حدث خطأ في الاتصال بالسيرفر");
    }
  };

  const handleDelete = async (slug: string) => {
    const isConfirmed = window.confirm(
      "هل أنت متأكد من رغبتك في حذف هذا المقال؟",
    );
    if (!isConfirmed) return;

    try {
      const res = await authFetch(`/api/blogs/${encodeURIComponent(slug)}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        alert(data?.message || "فشل حذف المقال من السيرفر");
        return;
      }

      setBlogs((prev) => prev.filter((blog) => blog.slug !== slug));
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("حدث خطأ في الاتصال بالسيرفر أثناء الحذف");
    }
  };

  const parseContent = (content?: string) => {
    if (!content) return [];
    try {
      return JSON.parse(content) as string[];
    } catch {
      return [];
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-black">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/50">
          <span className="h-1.5 w-1.5 rounded-full bg-black/30" />
          المقالات
        </div>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl text-black" >
          إدارة المقالات
        </h1>
        <p className="mt-4 max-w-xl text-black/50" >
          أضف مقالاً جديداً أو تصفح المقالات المنشورة حالياً.
        </p>

        <section className="mt-10 rounded-2xl border border-black/10 bg-white p-6">
          <h2 className="mb-6 text-xl font-bold text-black" >إضافة مقال جديد</h2>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs text-black/60">
                عنوان المقال (Title)
              </label>
              <input 
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="أدخل عنوان المقال..."
                required
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-black/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-black/60">
                المعرف الفريد (Slug)
              </label>
              <input 
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="react-nextjs-guide"
                required
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-black/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-black/60">
                التصنيف (Type)
              </label>
              <input 
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Web Development"
                required
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-black/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-black/60">
                رابط الصورة (Image URL)
              </label>
              <input 
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.png"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-black/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-black/60">
                وقت القراءة (Read Time)
              </label>
              <input 
                type="text"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                placeholder="5 دقائق"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-black/30 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs text-black/60">
                التاريخ (Date)
              </label>
              <input 
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="15 يونيو 2025"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-black/30 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs text-black/60">
                المقدمة (Excerpt)
              </label>
              <input 
                type="text"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="نص قصير يظهر في معاينة المقال..."
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-black/30 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs text-black/60">
                الوصف القصير (Description Short)
              </label>
              <input 
                type="text"
                name="descriptionShort"
                value={formData.descriptionShort}
                onChange={handleChange}
                placeholder="وصف مختصر للظهور في الكروت..."
                required
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-black/30 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs text-black/60">
                الوصف الكامل (Description)
              </label>
              <textarea 
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                placeholder="تفاصيل المقال والوصف الشامل..."
                required
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-black/30 focus:outline-none resize-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-xs text-black/60">
                المحتوى (Content) - يدعم Markdown
              </label>
              <textarea 
                name="content"
                rows={10}
                value={formData.content}
                onChange={handleChange}
                placeholder="اكتب محتوى المقال هنا... يمكنك استخدام Markdown للتنسيق"
                className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm text-black placeholder-black/30 focus:border-black/30 focus:outline-none resize-none"
              />
            </div>

            <div className="flex items-center gap-2 sm:col-span-2">
              <input 
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="h-4 w-4 rounded border-black/10 text-black focus:ring-0"
              />
              <label 
                htmlFor="published"
                className="cursor-pointer text-sm text-black/80"
              >
                نشر المقال مباشرة (Published)
              </label>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-xl bg-black py-3 text-sm font-semibold text-white transition-all hover:opacity-80 active:scale-[0.99]"
 
              >
                إضافة المقال
              </button>
            </div>
          </form>
        </section>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black/30 hover:shadow-lg"
            >
              {blog.image && (
                <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-xl border border-black/5 bg-black/5">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="mb-3 inline-flex w-fit items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/60">
                {blog.type}
              </div>
              <h2 className="text-lg font-bold text-black line-clamp-2" >
                {blog.title}
              </h2>
              {blog.readTime && (
                <span className="text-xs text-black/40 mt-1">
                  {blog.readTime}
                </span>
              )}
              <p className="mt-2 text-sm leading-relaxed text-black/50 line-clamp-3">
                {blog.descriptionShort || blog.description}
              </p>
              <div className="mt-auto pt-6 flex items-center justify-between text-xs text-black/40">
                <span>
                  {blog.date || (blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString("ar-EG")
                    : "")}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(blog.slug)}
                className="mt-4 rounded-xl border border-red-500/20 bg-red-50 py-2 text-xs font-semibold text-red-500 transition-all hover:bg-red-500 hover:text-white"
 
              >
                حذف المقال
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
