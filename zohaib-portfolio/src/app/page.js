"use client";

import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import {
  FiArrowRight,
  FiCode,
  FiServer,
  FiDatabase,
  FiShield,
  FiLayers,
  FiZap,
} from "react-icons/fi";
import { stats, projects } from "@/lib/data";

const services = [
  {
    icon: FiCode,
    title: "Frontend Engineering",
    desc: "React, Next.js, TypeScript, Tailwind & Material UI — performance-obsessed interfaces.",
  },
  {
    icon: FiServer,
    title: "Backend & APIs",
    desc: "NestJS, Node.js, Express, RESTful design, microservices and Swagger-documented APIs.",
  },
  {
    icon: FiDatabase,
    title: "Databases & Caching",
    desc: "MongoDB, MySQL, Redis caching, ORM migrations, schema optimization.",
  },
  {
    icon: FiShield,
    title: "Auth & Security",
    desc: "OAuth 2.0 (Google + Microsoft), JWT refresh flows, RBAC, OWASP guidelines.",
  },
  {
    icon: FiLayers,
    title: "DevOps & CI/CD",
    desc: "Docker containerization, GitHub Actions pipelines, AWS deployments.",
  },
  {
    icon: FiZap,
    title: "AI & LLM Integration",
    desc: "RAG chatbots, LLM fine-tuning, Ollama/GPT4All local models, agentic AI workflows.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Tech marquee strip */}
      <section className="border-y border-border bg-surface/60 py-1">
        <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-muted mb-0 pt-4 pb-1">
          Technologies I Work With
        </p>
        <TechMarquee />
      </section>

      {/* Stats */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-elevated rounded-xl p-6 text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-primary">
                  {s.value}{s.suffix}
                </p>
                <p className="text-xs font-medium text-muted mt-1.5 uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="section-pad bg-surface/50 border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What I Do"
            title="End-to-end engineering for"
            highlight="modern web"
            subtitle="From initial architecture to production deployment — I build systems that are fast, secure, and maintainable."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="card-elevated rounded-xl p-5 card-hover"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center mb-4">
                  <s.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold text-base mb-1.5">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <SectionHeading
              eyebrow="Selected Work"
              title="Recent"
              highlight="projects"
              align="left"
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View all projects
              <FiArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects
              .filter((p) => p.featured)
              .slice(0, 3)
              .map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i} />
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-primary/5 border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Let&apos;s Build Together
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-fg">
            Got a project in mind?
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-xl mx-auto">
            I&apos;m currently available for freelance work and new opportunities.
            Let&apos;s turn your idea into a shipped product.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Start a Conversation
              <FiArrowRight size={15} />
            </Link>
            <a
              href="mailto:za789688@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 font-medium text-sm hover:border-primary/40 transition-colors"
            >
              za789688@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
