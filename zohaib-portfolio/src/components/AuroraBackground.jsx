"use client";

import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ "--mx": "50%", "--my": "50%" }}
    >
      {/* Aurora blobs */}
      <div className="absolute -top-1/4 -left-1/4 h-[60vw] w-[60vw] rounded-full bg-primary/30 blur-[120px] animate-float-slow" />
      <div className="absolute -bottom-1/4 -right-1/4 h-[55vw] w-[55vw] rounded-full bg-accent/25 blur-[120px] animate-float-slow [animation-delay:-4s]" />
      <div className="absolute top-1/2 left-1/2 h-[35vw] w-[35vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[100px]" />

      {/* Mouse-tracked spotlight */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-60 transition-opacity"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), hsl(var(--primary) / .15), transparent 40%)",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.35] dark:opacity-[0.5] mask-fade-b" />

      {/* Noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
    </div>
  );
}
