"use client";

import { Outfit } from "next/font/google";
import { useState } from "react";
import { authFetch } from "@/app/lib/authFetch";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(form);
      const res = await authFetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      console.log(data);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <main className="relative bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen">
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px]" />

      <section
        className={`relative px-4 sm:px-6 md:px-12 lg:px-20 pt-8 md:pt-12 pb-16 ${outfit.className}`}
      >
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Contact</h1>
          <p className="text-gray-400 mt-1">Get in touch</p>
        </div>

        <div className="max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-400/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-400/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Subject
              </label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-400/50 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-400/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-xl transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
