"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { FiFilter, FiLayers } from "react-icons/fi";

const filters = ["All", "AI / ML", "Full-Stack", "Frontend", "Featured"];

const filterMap = {
  All: () => true,
  "AI / ML": (p) => p.tags.some((t) => ["RAG", "LLM", "AI Integration", "Agentic AI", "Vector DB", "Ollama"].includes(t)),
  "Full-Stack": (p) => p.tags.some((t) => ["NestJS", "Node.js", "REST API"].includes(t)),
  Frontend: (p) => p.tags.some((t) => ["React.js", "Next.js", "Material UI"].includes(t)),
  Featured: (p) => p.featured,
};

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered = projects.filter(filterMap[active]);

  return (
    <section className="section-pad pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Case Studies"
          title="Projects I'm"
          highlight="proud of"
          subtitle="Real production systems — government platforms, SaaS apps, and client-facing tools."
        />

        {/* Filter bar */}
        <div
          className="flex items-center gap-2 flex-wrap mb-8 p-1 card rounded-xl w-fit"
          data-aos="fade-up"
        >
          <span className="flex items-center gap-1.5 pl-2 pr-1 text-xs text-muted font-medium">
            <FiFilter size={12} /> Filter:
          </span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                active === f
                  ? "bg-primary text-white"
                  : "text-muted hover:text-fg hover:bg-fg/5"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="text-xs text-muted pl-1 pr-2">{filtered.length} shown</span>
        </div>

        {/* Projects grid — 3 cols */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted card-elevated rounded-xl">
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
  );
}
