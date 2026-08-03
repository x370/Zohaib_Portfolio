"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiSend, FiUser, FiMail, FiMessageSquare, FiTag,
  FiCheckCircle, FiAlertCircle,
} from "react-icons/fi";

const FORMSPREE_FORM_ID = "YOUR_FORMSPREE_ID"; // ← formspree.io pe sign up kar ke apna ID yahan daalen

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setTimeout(() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }, 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full bg-bg border border-border rounded-lg pl-10 pr-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15 placeholder:text-muted/60";

  return (
    <form
      onSubmit={handleSubmit}
      className="card-elevated rounded-xl p-6 sm:p-8"
    >
      <h3 className="font-bold text-lg text-fg mb-6">Send a Message</h3>

      <div className="grid gap-4">
        {/* Name + Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { name: "name", label: "Your Name", icon: FiUser, type: "text", placeholder: "Ahmed Khan" },
            { name: "email", label: "Email Address", icon: FiMail, type: "email", placeholder: "you@email.com" },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">
                {f.label}
              </label>
              <div className="relative">
                <f.icon size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  required
                  type={f.type}
                  name={f.name}
                  value={form[f.name]}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder={f.placeholder}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Subject */}
        <div>
          <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">
            Subject
          </label>
          <div className="relative">
            <FiTag size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              required
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className={inputClass}
              placeholder="Project inquiry, collaboration, etc."
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">
            Message
          </label>
          <div className="relative">
            <FiMessageSquare size={14} className="absolute left-3.5 top-3.5 text-muted" />
            <textarea
              required
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} pl-10 resize-none`}
              placeholder="Tell me about your project…"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status !== "idle"}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-white font-medium text-sm hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                Send Message <FiSend size={14} />
              </motion.span>
            )}
            {status === "sending" && (
              <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                Sending…
              </motion.span>
            )}
            {status === "sent" && (
              <motion.span key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                <FiCheckCircle size={14} /> Sent!
              </motion.span>
            )}
            {status === "error" && (
              <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                <FiAlertCircle size={14} /> Failed — try again
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* Status messages */}
        <AnimatePresence>
          {status === "sent" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="flex items-center gap-2.5 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3.5"
            >
              <FiCheckCircle size={15} className="text-green-600 dark:text-green-400 shrink-0" />
              <p className="text-sm text-green-700 dark:text-green-400">
                Message delivered! I&apos;ll reply within 24 hours.
              </p>
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="flex items-center gap-2.5 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3.5"
            >
              <FiAlertCircle size={15} className="text-red-600 dark:text-red-400 shrink-0" />
              <p className="text-sm text-red-700 dark:text-red-400">
                Failed to send. Email me at{" "}
                <a href="mailto:za789688@gmail.com" className="underline">za789688@gmail.com</a>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-[11px] text-muted text-center">
          Your info is never shared. I usually respond within 24 hours.
        </p>
      </div>
    </form>
  );
}
