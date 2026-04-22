"use client";
export default function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 24px 120px", maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
      <div className="reveal section-label">Contact</div>

      <h2 className="reveal reveal-delay-1" style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 20 }}>
        Let&apos;s build something <span className="grad-text">great</span>
      </h2>

      <p className="reveal reveal-delay-2" style={{ color: "rgba(232,232,240,0.45)", fontSize: 17, lineHeight: 1.7, marginBottom: 40 }}>
        Open to full-time roles, freelance projects, and interesting problems. If you&apos;re building something real, I&apos;d love to hear about it.
      </p>

      <div className="reveal reveal-delay-3" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
        <a href="mailto:hitesh2211ahuja@gmail.com"
          style={{
            display: "inline-block",
            padding: "16px 36px", borderRadius: 100,
            background: "linear-gradient(135deg, #7C6EF7, #E879F9)",
            color: "white", textDecoration: "none",
            fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
            letterSpacing: "-0.01em",
            transition: "opacity 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
          hitesh2211ahuja@gmail.com
        </a>

        <div style={{ display: "flex", gap: 24, marginTop: 8 }}>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/hitesh-ahuja-2b430a246" },
            { label: "GitLab", href: "https://gitlab.com/Hitesh-Ahuja" },
            { label: "Resume", href: "/resume.pdf" },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, fontFamily: "var(--font-display)", fontWeight: 500, color: "rgba(232,232,240,0.4)", textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(124,110,247,0.9)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(232,232,240,0.4)"}>
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="reveal reveal-delay-4" style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontSize: 12, color: "rgba(232,232,240,0.2)", fontFamily: "var(--font-display)" }}>Hitesh Ahuja — 2025</span>
        <span style={{ fontSize: 12, color: "rgba(232,232,240,0.2)", fontFamily: "var(--font-display)" }}>Kalyan, Maharashtra</span>
      </div>
    </section>
  );
}
