"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300 hover:text-white hover:border-white/20 transition-all"
      aria-label={`Switch language to ${lang === "en" ? "Arabic" : "English"}`}
    >
      {lang === "en" ? "AR" : "EN"}
      <span className="text-[10px] opacity-50">{lang === "en" ? "ع" : "En"}</span>
    </button>
  );
}
