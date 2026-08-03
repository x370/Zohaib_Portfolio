"use client";

import { useEffect, useRef } from "react";

const colorMap = {
  primary: "bg-primary",
  accent: "bg-primary/70",
  gold: "bg-primary/50",
};

export default function SkillCard({ title, icon: Icon, skills, color = "primary", delay = 0 }) {
  const barsRef = useRef([]);
  const cardRef = useRef(null);

  useEffect(() => {
    const bars = barsRef.current.filter(Boolean);
    if (!bars.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bars.forEach((bar) => {
              const level = bar.dataset.level;
              bar.style.transition = "width 0.8s ease";
              bar.style.width = level + "%";
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      data-aos="fade-up"
      className="card-elevated rounded-xl p-5 card-hover"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center">
          <Icon size={18} className="text-primary" />
        </div>
        <h3 className="font-semibold text-base">{title}</h3>
      </div>

      {/* Skill bars */}
      <div className="space-y-3">
        {skills.map((s, i) => (
          <div key={s.name}>
            <div className="flex items-center justify-between text-sm mb-1.5">
              <span className="text-fg/90">{s.name}</span>
              <span className="font-mono text-xs text-muted">{s.level}%</span>
            </div>
            <div className="h-1.5 bg-border rounded-full overflow-hidden">
              <div
                ref={(el) => (barsRef.current[i] = el)}
                data-level={s.level}
                className={`h-full rounded-full ${colorMap[color] || "bg-primary"}`}
                style={{ width: "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
