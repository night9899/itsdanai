"use client";

import { useLanguage } from "@/context/languageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-lg font-semibold text-white">
          <a
            href="#top"
            className="text-lg font-semibold text-white transition hover:text-zinc-300"
          >
            itsdanai
          </a>
        </h1>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#projects" className="hover:text-white transition">
            {t.navbar.projects}
          </a>

          <a href="#about" className="hover:text-white transition">
            {t.navbar.about}
          </a>

          <a href="#contact" className="hover:text-white transition">
            {t.navbar.contact}
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-white" : "text-zinc-500"}
            >
              EN
            </button>

            <span>/</span>

            <button
              onClick={() => setLang("th")}
              className={lang === "th" ? "text-white" : "text-zinc-500"}
            >
              TH
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
