"use client";

import { useLanguage } from "@/context/languageContext";

export default function About() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div id="about" className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2">
        {/* Left */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            {t.about.badge}
          </p>

          <h2 className="mb-6 text-3xl font-semibold leading-tight md:text-4xl">
            {t.about.title}
          </h2>

          <p className="leading-8 text-zinc-400">{t.about.description}</p>
        </div>

        {/* Right */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="mb-2 text-sm text-zinc-500">{t.about.card1.badge}</p>

            <h3 className="text-3xl font-semibold">{t.about.card1.title}</h3>

            <p className="mt-2 text-sm text-zinc-400">
              {t.about.card1.description}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="mb-2 text-sm text-zinc-500">{t.about.card2.badge}</p>

            <h3 className="text-3xl font-semibold">{t.about.card2.title}</h3>

            <p className="mt-2 text-sm text-zinc-400">
              {t.about.card2.description}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="mb-2 text-sm text-zinc-500">{t.about.card3.badge}</p>

            <h3 className="text-xl font-semibold">{t.about.card3.title}</h3>

            <p className="mt-2 text-sm text-zinc-400">
              {t.about.card3.description}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <p className="mb-2 text-sm text-zinc-500">{t.about.card4.badge}</p>

            <h3 className="text-xl font-semibold">{t.about.card4.title}</h3>

            <p className="mt-2 text-sm text-zinc-400">
              {t.about.card4.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
