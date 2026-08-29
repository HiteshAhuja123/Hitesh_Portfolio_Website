"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Engineer",
  "Frontend Specialist",
  "Next.js Developer",
  "AI Product Engineer",
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const full = roles[roleIndex];
    if (typing) {
      if (displayed.length < full.length) {
        const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 55);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1700);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 24px 80px", position: "relative", overflow: "hidden" }}>

      {/* Corner system metadata — the signature code-inspired detail */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.5 }}
        className="meta-block hero-meta-corner"
        style={{ position: "absolute", top: 100, right: 24, textAlign: "right" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>&lt;system /&gt;</span>
          <span>build: <span className="accent">hitesh.2026</span></span>
          <span>status: <span className="accent">available</span></span>
        </div>
      </motion.div>

      <div style={{ maxWidth: 760, width: "100%", margin: "0 auto" }}>

        {/* HA mark */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: 28 }}
        >
          <div className="avatar" style={{ width: 52, height: 52, fontSize: 18 }}>HA</div>
        </motion.div>

        {/* Drawn line */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.7, delay: 0.35, ease }}
          style={{ transformOrigin: "left", width: 64, height: 1, background: "var(--accent-line)", marginBottom: 22 }}
        />

        {/* Badge */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.5 }} style={{ marginBottom: 18 }}>
          <span className="meta-tag" style={{ border: "1px solid var(--border-strong)", padding: "5px 12px", display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7, ease }}
          className="hero-name"
          style={{ fontSize: "clamp(46px, 9vw, 96px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.98, margin: 0, fontFamily: "var(--font-display)" }}>
          Hitesh Ahuja
        </motion.h1>

        {/* Typing role */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.68, duration: 0.5 }}
          className="hero-role"
          style={{ fontSize: "clamp(18px, 3vw, 26px)", fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--text-soft)", minHeight: "1.5em", marginTop: 14 }}>
          <span className="typing-cursor accent-text">{displayed}</span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6, ease }}
          className="hero-bio"
          style={{ maxWidth: 540, color: "var(--text-muted)", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75, margin: "22px 0 0" }}>
          Full Stack Software Engineer with 1.5+ years at ICICI Lombard, building customer-facing insurance products — conversational AI journeys, a healthcare marketplace, and Next.js / Angular purchase flows — across the frontend-to-API stack.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.92, duration: 0.5, ease }}
          className="hero-ctas"
          style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36 }}>
          <a href="#projects" className="btn btn-primary">
            See what I&apos;ve built
          </a>
          <a href="#contact" className="btn btn-secondary">
            Let&apos;s talk
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05 }}
          style={{ display: "flex", gap: 24, marginTop: 32 }}>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/hitesh-ahuja-2b430a246" },
            { label: "GitLab", href: "https://gitlab.com/Hitesh-Ahuja" },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              className="link-underline"
              style={{ fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.02em" }}>
              {s.label} ↗
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
        style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <span className="meta-tag" style={{ letterSpacing: "0.16em", textTransform: "uppercase" }}>scroll</span>
        <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom, var(--accent-line), transparent)" }} />
      </motion.div>
    </section>
  );
}
