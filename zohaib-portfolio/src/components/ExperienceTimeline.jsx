"use client";

import { FiBriefcase, FiCheckCircle } from "react-icons/fi";

export default function ExperienceTimeline({ items }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

      <div className="space-y-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="relative pl-12"
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            {/* Dot */}
            <div className="absolute left-0 top-5 flex items-center justify-center">
              <div
                className={`h-8 w-8 rounded-full border-2 ${
                  item.current
                    ? "border-primary bg-primary/10"
                    : "border-border bg-surface"
                } grid place-items-center`}
              >
                <FiBriefcase
                  size={14}
                  className={item.current ? "text-primary" : "text-muted"}
                />
              </div>
            </div>

            {/* Card */}
            <div className="card-elevated rounded-xl p-5 sm:p-6">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <div>
                  <h3 className="font-bold text-base text-fg">{item.role}</h3>
                  <p className="text-sm font-medium text-primary">{item.company}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full px-2.5 py-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Current
                    </span>
                  )}
                  <span className="text-xs font-mono text-muted">{item.duration}</span>
                </div>
              </div>

              <p className="text-xs text-muted mb-4 font-medium">
                Project: {item.project}
              </p>

              {/* Points */}
              <ul className="space-y-2.5">
                {item.points.map((p, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-muted">
                    <FiCheckCircle
                      size={14}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
