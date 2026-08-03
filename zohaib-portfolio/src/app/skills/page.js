"use client";

import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import TechMarquee from "@/components/TechMarquee";
import {
  FiCode, FiLayout, FiServer, FiDatabase, FiCloud, FiShield, FiTool, FiCpu,
} from "react-icons/fi";
import { skills } from "@/lib/data";

const categories = [
  { title: "Languages", icon: FiCode, skills: skills.languages, color: "primary" },
  { title: "Frontend", icon: FiLayout, skills: skills.frontend, color: "accent" },
  { title: "Backend & APIs", icon: FiServer, skills: skills.backend, color: "gold" },
  { title: "Databases", icon: FiDatabase, skills: skills.databases, color: "primary" },
  { title: "Cloud & DevOps", icon: FiCloud, skills: skills.devops, color: "accent" },
  { title: "Auth & Security", icon: FiShield, skills: skills.security, color: "gold" },
  { title: "AI / ML & LLMs", icon: FiCpu, skills: skills.ai, color: "primary" },
  { title: "Platforms & Tools", icon: FiTool, skills: skills.platforms, color: "accent" },
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

export default function SkillsPage() {
  return (
    <section className="section-pad pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Skills & Stack"
          title="The tools I use to"
          highlight="ship fast"
          subtitle="A combination of modern frameworks, battle-tested patterns, and a lot of care for maintainability."
        />

        {/* Skill cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((c, i) => (
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

        {/* Tech marquee */}
        <div className="mt-16 border-y border-border py-1">
          <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-muted mb-0 pt-4 pb-1">
            Every Day Stack
          </p>
          <TechMarquee />
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

        {/* Measurable outcomes */}
        <div className="mt-16 card-elevated rounded-xl p-8 sm:p-10" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Measured Impact
          </p>
          <h3 className="text-xl font-bold text-fg mb-8">
            Numbers that came out of this stack
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { k: "25%", v: "faster page loads on Centurion" },
              { k: "40%", v: "faster queries via schema restructure" },
              { k: "30%", v: "faster dashboard with Redis caching" },
              { k: "35%", v: "fewer support tickets after training" },
            ].map((s, i) => (
              <div
                key={i}
                className="card rounded-xl p-5"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <p className="text-3xl font-bold text-primary mb-1">{s.k}</p>
                <p className="text-xs text-muted leading-snug">{s.v}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
