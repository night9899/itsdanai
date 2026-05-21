"use client";

import { useLanguage } from "@/context/languageContext";

export default function Contact() {
  const { lang, setLang, t } = useLanguage();

  return (
    <section id="contact" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Label */}
        <p className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          {t.contact.badge}
        </p>

        {/* Content */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Left */}
          <div className="max-w-2xl">
            <h2 className="mb-5 text-3xl font-semibold leading-tight md:text-4xl">
              {t.contact.title}
            </h2>

            <p className="text-base leading-7 text-zinc-400">
              {t.contact.description}
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 text-sm text-zinc-400">
            <a
              href="mailto:danai.puttt@gmail.com"
              className="transition hover:text-white"
            >
              {t.contact.email}
            </a>

            {/* <a
                href="https://github.com/"
                target="_blank"
                className="transition hover:text-white"
              >
                GitHub
              </a> */}
            <a
              href="/itsdanai-Resume.pdf"
              target="_blank"
              className="transition hover:text-white"
            >
              {t.contact.pdf}
            </a>
          </div>
        </div>
        <p className="pt-6 text-xs text-zinc-600">© 2026 Danai Puttachart</p>
      </div>
    </section>
  );
}
