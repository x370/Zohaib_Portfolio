"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiDownload,
  FiMapPin,
  FiMail,
  FiPhone,
  FiCalendar,
  FiAward,
  FiBook,
  FiArrowRight,
} from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import { personal, education, tools } from "@/lib/data";

const values = [
  {
    title: "Performance-first",
    desc: "Every component ships faster. I measure before and after — 25% faster loads, 40% faster queries, not opinions.",
  },
  {
    title: "Security by default",
    desc: "OAuth 2.0, JWT refresh, RBAC, OWASP — security isn't a feature, it's the foundation.",
  },
  {
    title: "Scales under pressure",
    desc: "Government-grade systems taught me to build for edge cases first — Redis caching, Docker, CI/CD included.",
  },
  {
    title: "Clear & documented",
    desc: "Swagger specs, code reviews, TDD. Code should read itself; documentation should help the next engineer.",
  },
];

const journey = [
  { year: "2023", title: "Graduated BSIT", sub: "Lahore Garrison University" },
  { year: "2023", title: "Started at Systems Limited", sub: "Front-End Developer Intern" },
  { year: "2024", title: "Joined Maima Soft", sub: "Shipped Fuelbook with Redis caching" },
  { year: "2025", title: "Joined Octek Pvt. Ltd.", sub: "Full-Stack on PNG Government platform" },
  { year: "2026", title: "Joined Arham Soft", sub: "MERN + AI-Driven Products (Current)" },
];

export default function AboutPage() {
  return (
    <section className="section-pad pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="About Me"
          title="Engineer. Builder."
          highlight="Problem solver."
          subtitle="A short story about how I got here and what drives my work."
        />

        {/* Intro grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {/* Photo */}
          <div data-aos="fade-right" className="flex justify-center lg:justify-start">
            <div className="relative w-72 sm:w-80">
              <div className="rounded-2xl overflow-hidden border border-border shadow-card-hover aspect-[4/5]">
                <Image
                  src={personal.image}
                  alt={personal.name}
                  fill
                  sizes="(max-width: 1024px) 320px, 320px"
                  className="object-cover"
                />
              </div>
              {/* Simple badge */}
              <div className="absolute -bottom-4 -right-4 card-elevated rounded-xl px-4 py-3 shadow-card-hover">
                <p className="text-xs text-muted font-medium">Experience</p>
                <p className="text-xl font-bold text-primary">3+ Years</p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-6" data-aos="fade-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                My Story
              </p>
              <h3 className="text-2xl font-bold mb-4 text-fg">
                I build software that <span className="text-primary">earns trust</span>.
              </h3>
              <div className="space-y-3 text-muted leading-relaxed text-sm">
                <p>
                  I&apos;m a Full-Stack Developer based in{" "}
                  <span className="text-fg font-medium">Lahore, Pakistan</span> with
                  3+ years of experience building end-to-end web applications using React.js,
                  Next.js, Node.js, and NestJS — with hands-on AI integration including RAG
                  chatbots, LLM fine-tuning, and local model deployment (Ollama, GPT4All).
                </p>
                <p>
                  Currently at <span className="text-fg font-medium">Arham Soft</span>, I build
                  AI-driven automation products — including TeacherAI (RAG + Google Classroom),
                  PlusCareMD (AI healthcare platform), and Growth Botz AI (agentic workflow automation).
                </p>
                <p>
                  Previously at <span className="text-fg font-medium">Octek Pvt. Ltd.</span>, I led
                  full-stack delivery on the Papua New Guinea government platform — migrating 15+ modules
                  to ORM, cutting query time by 40%, and building Docker CI/CD pipelines.
                </p>
              </div>
            </div>

            {/* Quick info */}
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: FiMapPin, label: "Location", value: personal.location },
                { icon: FiMail, label: "Email", value: personal.email },
                { icon: FiPhone, label: "Phone", value: personal.phone },
                { icon: FiCalendar, label: "Availability", value: "Open to work" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card rounded-xl p-3.5 flex items-center gap-3"
                >
                  <div className="h-8 w-8 rounded-lg bg-primary/10 grid place-items-center">
                    <item.icon size={15} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted font-semibold">{item.label}</p>
                    <p className="text-sm font-medium text-fg truncate">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Hire Me
                <FiArrowRight size={14} />
              </Link>
              <a
                href={personal.resume}
                download="Zohaib_Safdar_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 font-medium text-sm hover:border-primary/40 hover:text-primary transition-colors"
              >
                <FiDownload size={14} /> Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-10" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">What I Value</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-fg">
              Principles that shape every commit
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="card-elevated rounded-xl p-5 card-hover"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="h-1 w-8 bg-primary rounded-full mb-4" />
                <h4 className="font-semibold mb-2 text-fg">{v.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey + Education */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {/* Journey */}
          <div className="card-elevated rounded-xl p-6" data-aos="fade-right">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center">
                <FiAward size={17} className="text-primary" />
              </div>
              <h3 className="font-semibold text-base">The Journey</h3>
            </div>
            <ul className="space-y-5 relative">
              <div className="absolute left-[9px] top-2 bottom-2 w-px bg-border" />
              {journey.map((j, i) => (
                <li key={i} className="flex gap-4 relative">
                  <div className="h-5 w-5 rounded-full border-2 border-primary bg-surface shrink-0 mt-0.5 relative z-10" />
                  <div>
                    <p className="text-xs text-primary font-semibold">{j.year}</p>
                    <p className="font-semibold text-sm text-fg">{j.title}</p>
                    <p className="text-xs text-muted">{j.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Education + Tools */}
          <div className="space-y-5">
            <div className="card-elevated rounded-xl p-6" data-aos="fade-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center">
                  <FiBook size={17} className="text-primary" />
                </div>
                <h3 className="font-semibold text-base">Education</h3>
              </div>
              <h4 className="font-semibold text-base text-fg mb-1">{education.degree}</h4>
              <p className="text-sm text-muted">{education.school}</p>
              <p className="text-xs text-primary font-medium mt-1">{education.duration}</p>
            </div>

            <div className="card-elevated rounded-xl p-6" data-aos="fade-left" data-aos-delay="80">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                Tools I Use Daily
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-3 py-1 rounded-md border border-border text-muted hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
