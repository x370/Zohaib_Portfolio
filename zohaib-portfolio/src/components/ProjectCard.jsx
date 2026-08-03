"use client";

import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <article
      className="card-elevated rounded-xl p-6 card-hover flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      {/* Top: year + featured */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-mono text-muted">{project.year}</span>
        {project.featured && (
          <span className="tag text-[11px]">Featured</span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-fg mb-1">{project.title}</h3>
      <p className="text-sm text-primary font-medium mb-3">{project.subtitle}</p>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.highlights.map((h) => (
            <span
              key={h}
              className="text-[11px] font-medium bg-primary/8 text-primary rounded px-2 py-0.5"
            >
              {h}
            </span>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono px-2 py-0.5 rounded border border-border text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={14} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="Live site"
            >
              <FiExternalLink size={14} />
            </a>
          )}
        </div>
        <div className="h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted cursor-default">
          <FiArrowUpRight size={15} />
        </div>
      </div>
    </article>
  );
}
