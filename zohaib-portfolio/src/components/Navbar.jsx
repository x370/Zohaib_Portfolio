"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { personal } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // Close sidebar on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Disable body scroll when sidebar drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Header Bar */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-card"
            : "bg-surface/80 backdrop-blur-md sm:bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 gap-2">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="h-9 w-9 rounded-xl bg-primary grid place-items-center shadow-md shadow-primary/20 group-hover:scale-105 transition-transform shrink-0">
                <span className="font-bold text-white text-sm">ZS</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-none text-fg">Zohaib Safdar</span>
                <span className="text-[10px] text-muted font-medium mt-0.5 hidden sm:block">Full-Stack Developer</span>
              </div>
            </Link>

            {/* Desktop Navigation Links (Visible on lg: 1024px+) */}
            <ul className="hidden lg:flex items-center gap-1 bg-surface/80 border border-border/60 rounded-full px-3 py-1.5 shadow-sm">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        active
                          ? "text-white bg-primary shadow-sm shadow-primary/30"
                          : "text-muted hover:text-fg hover:bg-fg/5"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right Controls (Theme toggle & Hamburger button) */}
            <div className="flex items-center gap-2 shrink-0">
              <ThemeToggle />
              {/* Hamburger Button for Mobile & Tablet */}
              <button
                aria-label="Toggle navigation drawer"
                onClick={() => setOpen(true)}
                className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 rounded-xl border border-border flex items-center justify-center text-fg hover:border-primary/40 hover:text-primary transition-colors bg-surface shrink-0"
              >
                <HiBars3 size={22} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile / Tablet Full-Height Side Drawer Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-fade-in-up"
            aria-hidden="true"
          />

          {/* Slide-over Side Drawer */}
          <aside className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-surface border-l border-border shadow-2xl z-50 flex flex-col justify-between p-6 overflow-y-auto">

            {/* Top Bar inside Drawer */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-primary grid place-items-center text-white font-bold text-sm shrink-0">
                    ZS
                  </div>
                  <div>
                    <p className="font-bold text-sm text-fg">{personal.name}</p>
                    <p className="text-[11px] text-primary font-medium">3+ Years Exp.</p>
                  </div>
                </div>
                <button
                  aria-label="Close drawer"
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 rounded-xl border border-border flex items-center justify-center text-muted hover:text-fg hover:bg-fg/5 transition-colors shrink-0"
                >
                  <HiXMark size={20} />
                </button>
              </div>

              {/* Navigation Links List */}
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-2 px-1">
                Navigation
              </p>
              <nav className="space-y-1">
                {links.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        active
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "text-muted hover:text-fg hover:bg-fg/5"
                      }`}
                    >
                      <span>{l.label}</span>
                      {active && <span className="h-2 w-2 rounded-full bg-white" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Drawer Footer (Socials & Quick Info) */}
            <div className="pt-6 border-t border-border mt-6">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted mb-3 px-1">
                Connect With Me
              </p>
              <div className="flex gap-2 mb-4">
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
                    className="flex-1 h-10 rounded-xl border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-colors bg-bg"
                  >
                    <s.icon size={17} />
                  </a>
                ))}
              </div>
              <p className="text-[11px] text-muted text-center font-mono">
                {personal.email}
              </p>
            </div>

          </aside>
        </div>
      )}
    </>
  );
}
