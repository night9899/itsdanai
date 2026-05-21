"use client";

import { useLanguage } from "@/context/languageContext";

export default function Projects() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div id="projects" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Header */}
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              {t.projects.badge}
            </p>

            <h2 className="text-3xl font-semibold md:text-4xl">
              {t.projects.title}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              {t.projects.description}
            </p>
          </div>

          <a
            // href="/projects"
            className="hidden rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white md:block"
          >
            {t.projects.viewProject}
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Featured Large Card */}
          <a
            // href="/projects/vm-health-monitoring"
            className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:border-white/20 hover:bg-zinc-900 lg:col-span-2"
          >
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-wide text-zinc-500">
                INFRASTRUCTURE MONITORING
              </p>

              <h3 className="mb-5 text-3xl font-semibold leading-tight">
                VM Health Monitoring System
              </h3>

              <p className="max-w-2xl leading-8 text-zinc-400">
                Real-time infrastructure monitoring system for virtual machines
                with logging, health checks, telemetry tracking, and Telegram
                alert notifications.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-zinc-500">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Telegram API</span>
              <span>PM2</span>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            </div>
          </a>

          {/* Secondary Card */}
          <a
            // href="/projects/pms-dashboard"
            className="group flex min-h-[320px] flex-col justify-between rounded-3xl border border-white/10 bg-zinc-950 p-8 transition hover:border-white/20 hover:bg-zinc-900"
          >
            <p className="mb-3 text-sm uppercase tracking-wide text-zinc-500">
              OPERATIONAL DASHBOARD
            </p>

            <h3 className="mb-5 text-2xl font-semibold">
              PMS Real-time Dashboard
            </h3>

            <p className="mb-10 leading-7 text-zinc-400">
              Operational dashboard platform for workflow tracking, system
              monitoring, and real-time business operations visibility.
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-zinc-500">
              <span>Next.js</span>
              <span>MongoDB</span>
              <span>REST API</span>
              <span>Tailwind</span>
            </div>
          </a>
        </div>

        {/* Mobile Button */}
        <div className="mt-8 md:hidden">
          <a
            // href="/projects"
            className="inline-flex rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
}
