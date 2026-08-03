"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";

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

  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent scroll when mobile menu is open
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
      {/* Background Backdrop Overlay when mobile menu is open */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-sm lg:hidden transition-all duration-300 animate-fade-in-up"
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-card"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="h-8 w-8 rounded-lg bg-primary grid place-items-center shadow-sm">
                <span className="font-semibold text-white text-sm">ZS</span>
              </div>
              <span className="font-semibold text-sm hidden sm:block">Zohaib Safdar</span>
            </Link>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-1">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`relative px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                        active
                          ? "text-primary bg-primary/8 font-semibold"
                          : "text-muted hover:text-fg hover:bg-fg/5"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden h-9 w-9 rounded-md flex items-center justify-center text-muted hover:text-fg hover:bg-fg/5 transition-colors"
              >
                {open ? <HiXMark size={20} /> : <HiBars3 size={20} />}
              </button>
            </div>
          </nav>

          {/* Mobile menu dropdown */}
          {open && (
            <div className="lg:hidden pb-4 pt-1 border-t border-border/80">
              <ul className="flex flex-col gap-1">
                {links.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          active
                            ? "text-primary bg-primary/10 font-semibold"
                            : "text-muted hover:text-fg hover:bg-fg/5"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
