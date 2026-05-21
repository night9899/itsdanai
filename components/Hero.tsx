"use client";

import { useLanguage } from "@/context/languageContext";

export default function Hero() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-4xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          {t.hero.badge}
        </p>

        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          Hi, I&apos;m <span className="text-white">Danai Puttachart</span>
        </h1>

        <h2 className="mb-8 max-w-4xl text-2xl font-medium leading-relaxed text-zinc-300 md:text-4xl">
          {t.hero.subtitle}
        </h2>

        <p className="max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            {t.hero.viewProjects}
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30"
          >
            {t.hero.contact}
          </a>
        </div>
      </div>
    </div>
  );
}
