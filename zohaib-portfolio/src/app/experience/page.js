"use client";

import SectionHeading from "@/components/SectionHeading";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { experience, education } from "@/lib/data";
import { FiBook, FiTrendingUp, FiAward } from "react-icons/fi";

export default function ExperiencePage() {
  return (
    <section className="section-pad pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Work Experience"
          title="Where I've"
          highlight="shipped"
          subtitle="Roles, companies, and the actual work — not just titles on a page."
        />

        <ExperienceTimeline items={experience} />

        {/* Education + Career Arc */}
        <div className="mt-16 grid lg:grid-cols-2 gap-5">
          {/* Education */}
          <div className="card-elevated rounded-xl p-6" data-aos="fade-right">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center">
                <FiBook size={17} className="text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Education</p>
                <h3 className="font-semibold text-sm">Academic</h3>
              </div>
            </div>
            <h4 className="font-bold text-base text-fg mb-1">{education.degree}</h4>
            <p className="text-sm text-muted">{education.school}</p>
            <p className="text-xs text-primary font-medium mt-2">{education.duration}</p>
          </div>

          {/* Career Arc */}
          <div className="card-elevated rounded-xl p-6" data-aos="fade-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center">
                <FiTrendingUp size={17} className="text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Career Arc</p>
                <h3 className="font-semibold text-sm">Intern → Full-Stack</h3>
              </div>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-5">
              In 3+ years I&apos;ve moved from front-end internships into owning full-stack
              delivery on production systems — with government compliance, OAuth 2.0, and 24/7
              uptime requirements. My growth has been measured in shipped features, not certifications.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { k: "3", v: "Companies" },
                { k: "4", v: "Major Products" },
                { k: "20+", v: "Modules Shipped" },
              ].map((s, i) => (
                <div key={i} className="card rounded-lg p-3 text-center">
                  <p className="text-xl font-bold text-primary">{s.k}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-muted mt-0.5">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-5 card-elevated rounded-xl p-6" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center">
              <FiAward size={17} className="text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Notable Wins</p>
              <h3 className="font-semibold text-sm">Highlights from the road</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Owned migration of 15+ modules from raw SQL to ORM with 40% query improvement.",
              "Architected Redis caching layer reducing dashboard response time by 30%.",
              "Onboarded 10+ enterprise clients, cutting post-launch support tickets by 35%.",
            ].map((h, i) => (
              <div key={i} className="card rounded-lg p-4">
                <div className="h-6 w-6 rounded-full bg-primary text-white grid place-items-center font-mono text-xs mb-3">
                  {i + 1}
                </div>
                <p className="text-sm text-muted leading-relaxed">{h}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
