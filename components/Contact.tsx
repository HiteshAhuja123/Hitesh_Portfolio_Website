"use client";
export default function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 24px 100px", maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
      <div className="reveal section-label">Contact</div>

      <h2 className="reveal reveal-delay-1 contact-title-mobile" style={{ fontSize: "clamp(28px, 6vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 18 }}>
        Let&apos;s build something <span className="grad-text">great</span>
      </h2>

      <p className="reveal reveal-delay-2" style={{ color: "var(--text-muted)", fontSize: "clamp(14px, 2.5vw, 17px)", lineHeight: 1.7, marginBottom: 36 }}>
        Open to full-time roles, freelance projects, and interesting problems. If you&apos;re building something real, I&apos;d love to hear about it.
      </p>

      <div className="reveal reveal-delay-3" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
        <a href="mailto:hitesh2211ahuja@gmail.com"
          style={{
            display: "inline-block", padding: "14px clamp(20px, 5vw, 32px)", borderRadius: 100,
            background: "linear-gradient(135deg, #7C6EF7, #E879F9)",
            color: "white", textDecoration: "none",
            fontFamily: "var(--font-display)", fontSize: "clamp(13px, 2.5vw, 15px)", fontWeight: 700,
            letterSpacing: "-0.01em", transition: "opacity 0.2s, transform 0.2s",
            wordBreak: "break-all",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}>
          hitesh2211ahuja@gmail.com
        </a>

        <div style={{ display: "flex", gap: "clamp(16px, 4vw, 24px)", marginTop: 4, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/hitesh-ahuja-2b430a246" },
            { label: "GitLab", href: "https://gitlab.com/Hitesh-Ahuja" },
            { label: "Resume", href: "/resume.pdf" },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "clamp(11px, 2vw, 13px)", fontFamily: "var(--font-display)", fontWeight: 500, color: "var(--text-subtle)", textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(124,110,247,0.9)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-subtle)"}>
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="reveal reveal-delay-4" style={{ marginTop: 60, paddingTop: 24, borderTop: "1px solid var(--card-border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
        <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: "var(--font-display)" }}>Hitesh Ahuja — 2025</span>
        <span style={{ fontSize: 11, color: "var(--text-faint)", fontFamily: "var(--font-display)" }}>Built with Next.js</span>
      </div>
    </section>
  );
}
