"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Frontend Developer",
  "AI Systems Builder",
  "Full Stack Engineer",
  "Next.js Specialist",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const full = roles[roleIndex];
    if (typing) {
      if (displayed.length < full.length) {
        const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden" }}>

      {/* Orbs */}
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,110,247,0.12) 0%, transparent 70%)", top: "10%", left: "10%", filter: "blur(60px)", pointerEvents: "none" }} className="float-1" />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,121,249,0.08) 0%, transparent 70%)", bottom: "15%", right: "10%", filter: "blur(60px)", pointerEvents: "none" }} className="float-2" />

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>

        {/* Avatar */}
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="avatar">HA</div>
        </motion.div>

        {/* Badge */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <span style={{ fontSize: 12, fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", border: "1px solid rgba(124,110,247,0.25)", padding: "5px 14px", borderRadius: 100, background: "rgba(124,110,247,0.07)" }}>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
          style={{ fontSize: "clamp(48px, 8vw, 88px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
          Hitesh Ahuja
        </motion.h1>

        {/* Typing role */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          style={{ fontSize: "clamp(20px, 3vw, 28px)", fontFamily: "var(--font-display)", fontWeight: 500, color: "rgba(232,232,240,0.7)", minHeight: "1.5em" }}>
          <span className="grad-text typing-cursor">{displayed}</span>
        </motion.div>

        {/* Bio */}
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}
          style={{ maxWidth: 560, color: "rgba(232,232,240,0.5)", fontSize: 17, lineHeight: 1.7, margin: 0 }}>
          Full Stack Developer with 1.5+ years at ICICI Lombard, building insurance systems, AI chatbots, and CMS platforms that handle real transactions at scale.
        </motion.p>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
          style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
          <a href="#projects" style={{
            padding: "13px 28px", borderRadius: 100,
            background: "linear-gradient(135deg, #7C6EF7, #E879F9)",
            color: "white", textDecoration: "none",
            fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600,
            letterSpacing: "0.03em",
            transition: "opacity 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
            View My Work
          </a>
          <a href="#contact" style={{
            padding: "13px 28px", borderRadius: 100,
            border: "1px solid rgba(124,110,247,0.3)",
            background: "rgba(124,110,247,0.06)",
            color: "#e8e8f0", textDecoration: "none",
            fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600,
            transition: "border-color 0.2s, background 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,110,247,0.6)"; (e.currentTarget as HTMLElement).style.background = "rgba(124,110,247,0.12)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,110,247,0.3)"; (e.currentTarget as HTMLElement).style.background = "rgba(124,110,247,0.06)"; }}>
            Get in Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          style={{ display: "flex", gap: 36, marginTop: 4, alignItems: "center" }}>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/hitesh-ahuja-2b430a246", icon: "in" },
            { label: "GitLab", href: "https://gitlab.com/Hitesh-Ahuja", icon: "gl" },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 12, fontFamily: "var(--font-display)", color: "rgba(232,232,240,0.4)", textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(124,110,247,0.9)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(232,232,240,0.4)"}>
              {s.label} ↗
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 11, fontFamily: "var(--font-display)", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(232,232,240,0.25)" }}>scroll</span>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(124,110,247,0.4), transparent)", animation: "float 2s ease-in-out infinite" }} />
      </motion.div>
    </section>
  );
}
