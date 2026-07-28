"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const oneHour = 1000 * 60 * 60;
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
      return;
    }
    setChecked(true);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.replace("/login");
  };

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="w-6 h-6 text-black/40 animate-spin" />
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[#f8f9fa]`}>
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-4 border-b border-black/5">
          <a href="/dashboard" className="text-sm font-semibold text-black/60 hover:text-black transition-colors" >
            لوحة التحكم
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-black/40 hover:text-red-500 transition-colors"

          >
            تسجيل الخروج
        </button>
      </div>
      {children}
    </div>
  );
}
