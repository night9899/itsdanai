"use client";

import { useLanguage } from "@/context/languageContext";

export default function Approach() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div id="approach" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            {t.approach.badge}
          </p>

          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            {t.approach.title}
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {t.approach.items.map((item) => (
            <div key={item.title} className="grid gap-4 py-8 md:grid-cols-3">
              <h3 className="text-lg font-medium">{item.title}</h3>

              <p className="leading-7 text-zinc-400 md:col-span-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
