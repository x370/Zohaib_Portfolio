"use client";

import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";
import { personal } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-8 w-8 rounded-lg bg-primary grid place-items-center">
                <span className="font-semibold text-white text-sm">ZS</span>
              </div>
              <p className="font-semibold text-sm">{personal.name}</p>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Full-Stack Developer based in Lahore, Pakistan. Building scalable,
              production-grade web applications.
            </p>
            {/* Socials */}
            <div className="flex gap-2 mt-4">
              {[
                { icon: FiGithub, href: personal.github, label: "GitHub" },
                { icon: FiLinkedin, href: personal.linkedin, label: "LinkedIn" },
                { icon: FiMail, href: `mailto:${personal.email}`, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-9 w-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
              Navigate
            </h3>
            <ul className="space-y-2 text-sm">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((l) => (
                <li key={l}>
                  <Link
                    href={`/${l.toLowerCase()}`}
                    className="text-muted hover:text-primary inline-flex items-center gap-1 transition-colors"
                  >
                    {l}
                    <FiArrowUpRight size={12} className="opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5 text-muted hover:text-fg transition-colors">
                <FiMail size={14} className="text-primary shrink-0" />
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </li>
              <li className="flex items-center gap-2.5 text-muted hover:text-fg transition-colors">
                <FiPhone size={14} className="text-primary shrink-0" />
                <a href={`tel:${personal.phone.replace(/\s/g, "")}`}>{personal.phone}</a>
              </li>
              <li className="flex items-center gap-2.5 text-muted">
                <FiMapPin size={14} className="text-primary shrink-0" />
                <span>{personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p className="font-mono">Next.js · Tailwind CSS · TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
