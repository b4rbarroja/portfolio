"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, LogIn, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.replace("/dashboard");
      return;
    }
    setChecking(false);
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Read straight from the DOM instead of the `form` state.
    // Autofill doesn't always trigger onChange, so the state can lag
    // behind what's actually visible/typed in the inputs.
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || `HTTP ${res.status}`);
      }

      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert(error instanceof Error ? error.message : "Login failed");
    }
  };

  if (checking) {
    return (
      <main className="relative min-h-screen flex items-center justify-center">
        <Loader2 className="w-6 h-6 text-black/40 animate-spin" />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4">
      <div className={`w-full max-w-sm`}>
        <div className="flex items-center justify-center gap-3 mb-8">
          <h1 className="section-title text-2xl text-black" >Sign in</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-black/10 rounded-2xl p-6 space-y-4 bg-white"
        >
          <div>
            <label className="block text-sm text-black/40 mb-1" >Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
              <input
                type="email"
                name="email"
                autoComplete="email"
 
                className="w-full border border-black/10 rounded-xl pl-10 pr-4 py-3 text-black outline-none focus:border-black/30 transition-colors bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm text-black/40 mb-1" >Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30" />
              <input
                type="password"
                name="password"
                autoComplete="current-password"
 
                className="w-full border border-black/10 rounded-xl pl-10 pr-4 py-3 text-black outline-none focus:border-black/30 transition-colors bg-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-text w-full flex items-center justify-center gap-2 bg-black hover:bg-black/80 text-white px-6 py-3 rounded-xl transition-colors"
 
          >
            <LogIn className="w-4 h-4" />
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
