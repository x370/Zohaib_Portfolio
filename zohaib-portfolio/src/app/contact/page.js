"use client";

import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { personal } from "@/lib/data";
import {
  FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiClock,
} from "react-icons/fi";

const contacts = [
  { icon: FiMail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: FiPhone, label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: FiMapPin, label: "Location", value: personal.location, href: "#" },
  { icon: FiClock, label: "Response Time", value: "Within 24 hours", href: "#" },
];

export default function ContactPage() {
  return (
    <section className="section-pad pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something"
          highlight="meaningful"
          subtitle="Freelance projects, full-time roles, collaborations — the inbox is always open."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: contact info */}
          <div className="lg:col-span-2 space-y-4" data-aos="fade-right">

            {/* Direct channels */}
            <div className="card-elevated rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                Direct Channels
              </p>
              <h3 className="font-bold text-base text-fg mb-4">Prefer talking directly?</h3>
              <p className="text-sm text-muted leading-relaxed mb-5">
                I reply fastest on email. For urgent chats, WhatsApp works too
                — just use the phone number below.
              </p>
              <div className="space-y-2.5">
                {contacts.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-3 rounded-lg border border-border p-3 hover:border-primary/40 hover:text-primary transition-colors group"
                  >
                    <div className="h-8 w-8 rounded-md bg-primary/10 grid place-items-center shrink-0">
                      <c.icon size={15} className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">{c.label}</p>
                      <p className="text-sm font-medium truncate">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="card-elevated rounded-xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                Follow the Work
              </p>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub, label: "GitHub", href: personal.github },
                  { icon: FiLinkedin, label: "LinkedIn", href: personal.linkedin },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-border rounded-lg p-3.5 text-center hover:border-primary/40 hover:text-primary transition-colors"
                  >
                    <s.icon size={20} className="mx-auto mb-1.5" />
                    <p className="text-xs font-medium">{s.label}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card-elevated rounded-xl p-4 border-l-4 border-l-green-500">
              <div className="flex items-start gap-3">
                <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <div>
                  <p className="font-semibold text-sm text-fg">Currently available</p>
                  <p className="text-xs text-muted mt-1 leading-relaxed">
                    Open to freelance, contract, and full-time opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3" data-aos="fade-left">
            <ContactForm />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <div className="text-center mb-8" data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Quick Answers</p>
            <h3 className="text-2xl font-bold text-fg">
              Before you reach <span className="text-primary">out</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                q: "What kind of projects do you take on?",
                a: "Full-stack web applications, React/Next.js frontends, NestJS backends, and anything involving OAuth, ORM migrations, or Docker deployments.",
              },
              {
                q: "Do you work remotely?",
                a: "Yes — I work with teams globally. I'm based in Lahore (GMT+5) but I overlap with EU and US time zones regularly.",
              },
              {
                q: "What's your typical turnaround?",
                a: "I reply to emails within 24 hours. Small projects kick off within a week; larger engagements depend on scope.",
              },
              {
                q: "Open to full-time roles?",
                a: "Yes — I'm currently open to full-time positions, especially roles involving production-grade MERN or Next.js + NestJS stacks.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="card-elevated rounded-xl p-5 card-hover"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <h4 className="font-semibold text-sm text-fg mb-2">{f.q}</h4>
                <p className="text-sm text-muted leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
