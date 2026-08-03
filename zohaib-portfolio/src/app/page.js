"use client";

import { useState } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";

import {
  FiDownload,
  FiMapPin,
  FiMail,
  FiPhone,
  FiCalendar,
  FiAward,
  FiBook,
  FiArrowRight,
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiCloud,
  FiShield,
  FiTool,
  FiCpu,
  FiTrendingUp,
  FiFilter,
  FiLayers,
  FiClock,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

import {
  personal,
  stats,
  skills,
  experience,
  projects,
  education,
  tools,
} from "@/lib/data";

/* ---------- Data Helpers for Single Page ---------- */
const skillCategories = [
  { title: "Languages", icon: FiCode, skills: skills.languages, color: "primary" },
  { title: "Frontend", icon: FiLayout, skills: skills.frontend, color: "accent" },
  { title: "Backend & APIs", icon: FiServer, skills: skills.backend, color: "gold" },
  { title: "Databases", icon: FiDatabase, skills: skills.databases, color: "primary" },
  { title: "Cloud & DevOps", icon: FiCloud, skills: skills.devops, color: "accent" },
  { title: "Auth & Security", icon: FiShield, skills: skills.security, color: "gold" },
  { title: "AI / ML & LLMs", icon: FiCpu, skills: skills.ai, color: "primary" },
  { title: "Platforms & Tools", icon: FiTool, skills: skills.platforms, color: "accent" },
];

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

const methodologies = [
  "Agile / Scrum",
  "Test-Driven Development",
  "Code Reviews",
  "Unit Testing",
  "Integration Testing",
  "Component-Based Architecture",
  "Microservices",
  "REST API Design",
  "Schema Migration",
  "Database Optimization",
];

const projectFilters = ["All", "AI / ML", "Full-Stack", "Frontend", "Featured"];

const projectFilterMap = {
  All: () => true,
  "AI / ML": (p) => p.tags.some((t) => ["RAG", "LLM", "AI Integration", "Agentic AI", "Vector DB", "Ollama"].includes(t)),
  "Full-Stack": (p) => p.tags.some((t) => ["NestJS", "Node.js", "REST API"].includes(t)),
  Frontend: (p) => p.tags.some((t) => ["React.js", "Next.js", "Material UI"].includes(t)),
  Featured: (p) => p.featured,
};

const contactsList = [
  { icon: FiMail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: FiPhone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: FiMapPin, label: "Location", value: personal.location, href: "#" },
  { icon: FiClock, label: "Response Time", value: "Within 24 hours", href: "#" },
];

export default function SinglePagePortfolio() {
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");
  const filteredProjects = projects.filter(projectFilterMap[activeProjectFilter]);

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-4">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* Tech Marquee Strip */}
      <section className="border-y border-border bg-surface/60 py-2">
        <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-muted mb-0 pt-2 pb-1">
          Technologies I Work With
        </p>
        <TechMarquee />
      </section>

      {/* Stats Counter Section */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card-elevated rounded-xl p-6 text-center">
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

      {/* 2. ABOUT SECTION */}
      <section id="about" className="section-pad border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Me"
            title="Engineer. Builder."
            highlight="Problem solver."
            subtitle="A short story about how I got here and what drives my work."
          />

          {/* Intro grid */}
          <div className="grid lg:grid-cols-2 gap-10 mb-16">
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
                  <div key={item.label} className="card rounded-xl p-3.5 flex items-center gap-3">
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
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  Hire Me
                  <FiArrowRight size={14} />
                </button>
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
          <div className="mb-16">
            <div className="text-center mb-8" data-aos="fade-up">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">What I Value</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-fg">
                Principles that shape every commit
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((v, i) => (
                <div key={v.title} className="card-elevated rounded-xl p-5 card-hover" data-aos="fade-up" data-aos-delay={i * 80}>
                  <div className="h-1 w-8 bg-primary rounded-full mb-4" />
                  <h4 className="font-semibold mb-2 text-fg">{v.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Journey + Education */}
          <div className="grid lg:grid-cols-2 gap-6">
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

      {/* 3. SKILLS SECTION */}
      <section id="skills" className="section-pad border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Skills & Stack"
            title="The tools I use to"
            highlight="ship fast"
            subtitle="A combination of modern frameworks, battle-tested patterns, and a lot of care for maintainability."
          />

          {/* Skill cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((c, i) => (
              <SkillCard
                key={c.title}
                title={c.title}
                icon={c.icon}
                skills={c.skills}
                color={c.color}
                delay={i * 0.06}
              />
            ))}
          </div>

          {/* Methodologies */}
          <div className="mt-16">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div data-aos="fade-right">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                  Methodologies
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-fg mb-3">
                  How I <span className="text-primary">work</span>, not just what I use.
                </h3>
                <p className="text-muted leading-relaxed text-sm">
                  Tools come and go. The habits behind them are what make software
                  reliable. Here are the practices I bring to every codebase.
                </p>
              </div>

              <div className="flex flex-wrap gap-2" data-aos="fade-left" data-aos-delay="80">
                {methodologies.map((m) => (
                  <span
                    key={m}
                    className="text-sm font-medium px-3.5 py-1.5 rounded-lg border border-border text-muted hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE SECTION */}
      <section id="experience" className="section-pad border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Work Experience"
            title="Where I've"
            highlight="shipped"
            subtitle="Roles, companies, and the actual work — not just titles on a page."
          />

          <ExperienceTimeline items={experience} />

          {/* Career Arc + Highlights */}
          <div className="mt-12 grid lg:grid-cols-2 gap-5">
            <div className="card-elevated rounded-xl p-6" data-aos="fade-right">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center">
                  <FiTrendingUp size={17} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Career Arc</p>
                  <h3 className="font-semibold text-sm">Intern → Full-Stack + AI</h3>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-5">
                In 3+ years I&apos;ve moved from front-end internships into owning full-stack
                delivery and AI integration on production systems — with government compliance,
                OAuth 2.0, and RAG pipelines.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { k: "4", v: "Companies" },
                  { k: "11+", v: "Major Products" },
                  { k: "20+", v: "Modules Shipped" },
                ].map((s, i) => (
                  <div key={i} className="card rounded-lg p-3 text-center">
                    <p className="text-xl font-bold text-primary">{s.k}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted mt-0.5">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-elevated rounded-xl p-6" data-aos="fade-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center">
                  <FiAward size={17} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Notable Wins</p>
                  <h3 className="font-semibold text-sm">Highlights from the road</h3>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  "Built TeacherAI RAG chatbot with Google Classroom & MongoDB Atlas Vector Store.",
                  "Owned migration of 15+ modules from raw SQL to ORM with 40% query improvement.",
                  "Architected Redis caching layer reducing dashboard response time by 30%.",
                ].map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-muted leading-relaxed">
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary font-mono text-[10px] grid place-items-center shrink-0 mt-0.5 font-bold">
                      {i + 1}
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects" className="section-pad border-t border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case Studies"
            title="Projects I'm"
            highlight="proud of"
            subtitle="Real production systems — AI platforms, government portals, SaaS apps, and client tools."
          />

          {/* Filter bar */}
          <div className="flex items-center gap-2 flex-wrap mb-8 p-1 card rounded-xl w-fit" data-aos="fade-up">
            <span className="flex items-center gap-1.5 pl-2 pr-1 text-xs text-muted font-medium">
              <FiFilter size={12} /> Filter:
            </span>
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveProjectFilter(f)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeProjectFilter === f
                    ? "bg-primary text-white"
                    : "text-muted hover:text-fg hover:bg-fg/5"
                }`}
              >
                {f}
              </button>
            ))}
            <span className="text-xs text-muted pl-1 pr-2">{filteredProjects.length} shown</span>
          </div>

          {/* Projects grid — 3 cols */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-muted card-elevated rounded-xl">
              <FiLayers size={36} className="mx-auto mb-3 text-primary opacity-40" />
              <p className="text-sm">No projects match this filter yet.</p>
            </div>
          )}

          {/* AI Spotlight */}
          <div className="mt-16 card-elevated rounded-xl p-7 sm:p-10" data-aos="fade-up">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                  AI Spotlight
                </p>
                <h3 className="text-2xl font-bold text-fg mb-3">
                  Building with <span className="text-primary">AI at Arham Soft</span>
                </h3>
                <p className="text-muted leading-relaxed text-sm mb-5">
                  At Arham Soft I&apos;m building AI-driven products using RAG pipelines,
                  LLM fine-tuning, and agentic AI workflows — from a Google Classroom-integrated
                  chatbot to a national healthcare platform with AI-powered consultations.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["RAG", "LLM Fine-Tuning", "Ollama", "GPT4All", "MongoDB Atlas Vector", "Agentic AI", "Prompt Engineering", "Google Classroom API"].map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-border text-muted">{t}</span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { k: "3", title: "AI Products Built", desc: "TeacherAI, PlusCareMD, Growth Botz AI" },
                  { k: "RAG", title: "Architecture", desc: "Document-grounded Q&A with vector search." },
                  { k: "Local", title: "LLM Deployment", desc: "Ollama & GPT4All for private model hosting." },
                  { k: "11+", title: "Projects Total", desc: "Across 4 companies in 3 years." },
                ].map((m, i) => (
                  <div key={i} className="card rounded-lg p-4" data-aos="fade-up" data-aos-delay={i * 60}>
                    <p className="text-3xl font-bold text-primary">{m.k}</p>
                    <p className="font-semibold text-sm mt-1 text-fg">{m.title}</p>
                    <p className="text-xs text-muted mt-1 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="section-pad border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's build something"
            highlight="meaningful"
            subtitle="Freelance projects, full-time roles, collaborations — the inbox is always open."
          />

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: contact info */}
            <div className="lg:col-span-2 space-y-4" data-aos="fade-right">
              {/* Direct channels */}
              <div className="card-elevated rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                  Direct Channels
                </p>
                <h3 className="font-bold text-base text-fg mb-4">Prefer talking directly?</h3>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  I reply fastest on email. For urgent chats, WhatsApp works too
                  — just use the phone number below.
                </p>
                <div className="space-y-2.5">
                  {contactsList.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-center gap-3 rounded-lg border border-border p-3 hover:border-primary/40 hover:text-primary transition-colors group"
                    >
                      <div className="h-8 w-8 rounded-md bg-primary/10 grid place-items-center shrink-0">
                        <c.icon size={15} className="text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">{c.label}</p>
                        <p className="text-sm font-medium truncate">{c.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="card-elevated rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                  Follow the Work
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: FiGithub, label: "GitHub", href: personal.github },
                    { icon: FiLinkedin, label: "LinkedIn", href: personal.linkedin },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-border rounded-lg p-3.5 text-center hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      <s.icon size={20} className="mx-auto mb-1.5" />
                      <p className="text-xs font-medium">{s.label}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="card-elevated rounded-xl p-4 border-l-4 border-l-green-500">
                <div className="flex items-start gap-3">
                  <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-fg">Currently available</p>
                    <p className="text-xs text-muted mt-1 leading-relaxed">
                      Open to freelance, contract, and full-time opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3" data-aos="fade-left">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
