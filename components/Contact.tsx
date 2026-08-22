"use client";
import { useRef } from "react";

export default function Contact() {
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ctaRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="contact" className="section-mobile" style={{ padding: "100px 24px 100px", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
      <div className="reveal section-label" style={{ justifyContent: "center" }}>Contact</div>

      <h2 className="reveal reveal-delay-1 contact-title-mobile" style={{ fontSize: "clamp(32px, 6vw, 56px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: 20 }}>
        Let&apos;s build something <span className="accent-text">great</span>
      </h2>

      <p className="reveal reveal-delay-2" style={{ color: "var(--text-muted)", fontSize: "clamp(14px, 2.5vw, 17px)", lineHeight: 1.7, marginBottom: 40, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
        Open to full-time roles, freelance projects, and interesting problems. If you&apos;re building something real, I&apos;d love to hear about it.
      </p>

      <div className="reveal reveal-delay-3" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
        <a
          ref={ctaRef}
          href="mailto:hitesh2211ahuja@gmail.com"
          onMouseMove={handleMove}
          className="contact-cta"
          style={{
            position: "relative",
            display: "inline-block",
            padding: "16px clamp(24px, 5vw, 40px)",
            border: "1px solid var(--border-strong)",
            color: "var(--text)",
            textDecoration: "none",
            fontFamily: "var(--font-display)",
            fontSize: "clamp(14px, 2.5vw, 16px)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            overflow: "hidden",
            wordBreak: "break-all",
          }}
        >
          <span style={{ position: "relative", zIndex: 1 }}>hitesh2211ahuja@gmail.com</span>
        </a>

        <div style={{ display: "flex", gap: "clamp(16px, 4vw, 24px)", marginTop: 4, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/hitesh-ahuja-2b430a246" },
            { label: "GitLab", href: "https://gitlab.com/Hitesh-Ahuja" },
            { label: "Resume", href: "/resume.pdf" },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="link-underline"
              style={{ fontSize: "clamp(11px, 2vw, 13px)", fontFamily: "var(--font-mono)" }}>
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="reveal reveal-delay-4" style={{ marginTop: 72, paddingTop: 24, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
        <span className="meta-tag">Hitesh Ahuja — 2026</span>
        <span className="meta-tag">Built with Next.js</span>
      </div>
    </section>
  );
}
