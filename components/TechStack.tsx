"use client";

import { useLanguage } from "@/context/languageContext";

export default function TechStack() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="relative overflow-hidden border-y border-white/10 py-8">
      {/* Fade Left */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent" />

      {/* Fade Right */}
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent" />

      <div className="animate-marquee flex min-w-max gap-16 px-6 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
        <span>React</span>
        <span>Next.js</span>
        <span>TypeScript</span>
        <span>Node.js</span>
        <span>MongoDB</span>
        <span>MQTT</span>
        <span>Google Cloud</span>
        <span>REST API</span>
        <span>PM2</span>
        <span>Nginx</span>

        {/* Duplicate for smooth loop */}
        <span>React</span>
        <span>Next.js</span>
        <span>TypeScript</span>
        <span>Node.js</span>
        <span>MongoDB</span>
        <span>MQTT</span>
        <span>Google Cloud</span>
        <span>REST API</span>
        <span>PM2</span>
        <span>Nginx</span>
      </div>
    </div>
  );
}
