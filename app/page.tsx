import Navbar from '../components/Navbar.tsx';
import Image from 'next/image';

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            FULL STACK & INTERNAL SYSTEM DEVELOPER
          </p>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Hi, I&apos;m <span className="text-white">Danai Puttachart</span>
          </h1>

          <h2 className="mb-8 max-w-4xl text-2xl font-medium leading-relaxed text-zinc-300 md:text-4xl">
            Building scalable internal systems, automation platforms, and
            business tools.
          </h2>

          <p className="max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
            Focused on developing scalable internal platforms, operational
            dashboards, automation systems, and production-ready web
            applications using React, Node.js, MongoDB, and Google Cloud.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
      {/* Tech Stack */}
      <section className="relative overflow-hidden border-y border-white/10 py-8">
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
      </section>
      {/* Projects */}
      <section id="projects" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          {/* Header */}
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                Projects
              </p>

              <h2 className="text-3xl font-semibold md:text-4xl">
                Featured Projects
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
                Enterprise systems, monitoring platforms, and operational tools
                focused on scalability, automation, and production visibility.
              </p>
            </div>

            <a
              href="/projects"
              className="hidden rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white md:block"
            >
              View All Projects
            </a>
          </div>

          {/* Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Featured Large Card */}
            <a
              href="/projects/vm-health-monitoring"
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
                  Real-time infrastructure monitoring system for virtual
                  machines with logging, health checks, telemetry tracking, and
                  Telegram alert notifications.
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
              href="/projects/pms-dashboard"
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
              href="/projects"
              className="inline-flex rounded-xl border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
      {/* About */}
      <section id="about" className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2">
          {/* Left */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              About
            </p>

            <h2 className="mb-6 text-3xl font-semibold leading-tight md:text-4xl">
              Building scalable internal platforms with a focus on automation,
              operational efficiency, and infrastructure.
            </h2>

            <p className="leading-8 text-zinc-400">
              Full Stack Developer focused on building internal systems,
              operational dashboards, automation workflows, and production-ready
              web applications. Experienced in backend API development, database
              design, infrastructure deployment, and scalable web platforms.
            </p>
          </div>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="mb-2 text-sm text-zinc-500">
                Operational Experience
              </p>

              <h3 className="text-3xl font-semibold">1+</h3>

              <p className="mt-2 text-sm text-zinc-400">
                Years developing internal business systems.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="mb-2 text-sm text-zinc-500">Systems Built</p>

              <h3 className="text-3xl font-semibold">8+</h3>

              <p className="mt-2 text-sm text-zinc-400">
                Internal systems and operational platforms developed.{' '}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="mb-2 text-sm text-zinc-500">Core Stack</p>

              <h3 className="text-xl font-semibold">
                Node.js • MongoDB • Google Cloud
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Building scalable internal and operational platforms.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <p className="mb-2 text-sm text-zinc-500">
                Production Infrastructure
              </p>

              <h3 className="text-xl font-semibold">GCP • PM2 • Nginx</h3>

              <p className="mt-2 text-sm text-zinc-400">
                Deployment, monitoring, and production infrastructure
                management.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Engineering Approach */}
      <section id="approach" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Engineering Approach
            </p>

            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Building systems focused on operational reliability and long-term
              maintainability.
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {/* Item */}
            <div className="grid gap-4 py-8 md:grid-cols-3">
              <h3 className="text-lg font-medium">Operational Thinking</h3>

              <p className="leading-7 text-zinc-400 md:col-span-2">
                Design systems around real operational workflows, business
                processes, and production requirements.
              </p>
            </div>

            {/* Item */}
            <div className="grid gap-4 py-8 md:grid-cols-3">
              <h3 className="text-lg font-medium">Problem Solving</h3>

              <p className="leading-7 text-zinc-400 md:col-span-2">
                Focused on reliability, maintainability, scalability, and
                production stability.
              </p>
            </div>

            {/* Item */}
            <div className="grid gap-4 py-8 md:grid-cols-3">
              <h3 className="text-lg font-medium">
                Cross-functional Collaboration
              </h3>

              <p className="leading-7 text-zinc-400 md:col-span-2">
                Comfortable collaborating with internal teams, operational
                users, and non-technical stakeholders.
              </p>
            </div>

            {/* Item */}
            <div className="grid gap-4 py-8 md:grid-cols-3">
              <h3 className="text-lg font-medium">Continuous Learning</h3>

              <p className="leading-7 text-zinc-400 md:col-span-2">
                Quickly adapt to new technologies, infrastructure environments,
                and evolving business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact / Footer */}
      <section
        id="contact"
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          {/* Label */}
          <p className="mb-10 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>

          {/* Content */}
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
            {/* Left */}
            <div className="max-w-2xl">
              <h2 className="mb-5 text-3xl font-semibold leading-tight md:text-4xl">
                Building systems that solve operational problems.
              </h2>

              <p className="text-base leading-7 text-zinc-400">
                Focused on scalable internal systems, operational dashboards,
                monitoring platforms, and automation workflows.{' '}
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 text-sm text-zinc-400">
              <a
                href="mailto:danai.puttt@gmail.com"
                className="transition hover:text-white"
              >
                danai.puttt@gmail.com
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                className="transition hover:text-white"
              >
                GitHub
              </a>
              <a
                href="/itsdanai-Resume.pdf"
                target="_blank"
                className="transition hover:text-white"
              >
                Resume PDF
              </a>
            </div>
          </div>
          <p className="pt-6 text-xs text-zinc-600">© 2026 Danai Puttachart</p>
        </div>
      </section>
    </main>
  );
}
