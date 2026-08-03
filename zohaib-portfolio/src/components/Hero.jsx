"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiDownload,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex items-center pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: copy */}
          <div className="order-2 lg:order-1">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full px-3.5 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-medium text-green-700 dark:text-green-400">
                Available for new projects
              </span>
            </div>

            {/* Name */}
            <p className="text-sm font-medium text-primary mb-2">
              Hi, I&apos;m Zohaib Safdar
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-fg mb-5">
              Full-Stack + AI Developer
              <br />
              <span className="text-primary">building for scale.</span>
            </h1>

            {/* Subline */}
            <p className="text-muted text-base sm:text-lg max-w-lg leading-relaxed mb-6">
              I specialize in{" "}
              <span className="text-fg font-medium">React</span>,{" "}
              <span className="text-fg font-medium">Next.js</span>,{" "}
              <span className="text-fg font-medium">NestJS</span>, and{" "}
              <span className="text-fg font-medium">AI integration</span> (RAG, LLMs, Ollama).
              Currently building AI-driven products at Arham Soft.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-muted mb-8">
              <FiMapPin size={14} className="text-primary" />
              <span>{personal.location}</span>
              <span className="text-border">·</span>
              <span>{personal.years}+ years experience</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                View My Work
                <FiArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 font-medium text-sm hover:border-primary/40 hover:text-primary transition-colors"
              >
                <FiMail size={15} />
                Let&apos;s Talk
              </Link>
              <a
                href={personal.resume}
                download="Zohaib_Safdar_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium text-sm text-muted hover:text-fg transition-colors"
              >
                <FiDownload size={15} />
                Resume
              </a>
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs text-muted">Find me on</span>
              <div className="flex gap-2">
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
          </div>

          {/* Right: profile image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Simple circular photo */}
              <div className="relative h-72 w-72 sm:h-80 sm:w-80 rounded-2xl overflow-hidden border-2 border-border shadow-card-hover">
                <Image
                  src={personal.image}
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 288px, 320px"
                  className="object-cover"
                />
              </div>

              {/* Simple stat badge */}
              <div className="absolute -bottom-4 -left-4 card-elevated rounded-xl px-4 py-3 shadow-card-hover">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-xs text-muted font-medium">Years Exp.</p>
              </div>

              {/* Open to work badge */}
              <div className="absolute -top-3 -right-3 card-elevated rounded-full px-3.5 py-1.5 shadow-card-hover">
                <span className="text-xs font-medium text-green-600 dark:text-green-400">
                  ● Open to Work
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex flex-col items-center gap-2 mt-16 text-muted">
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-border to-transparent" />
        </div>
      </div>
    </section>
  );
}
