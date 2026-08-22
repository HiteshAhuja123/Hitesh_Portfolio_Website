"use client";
export default function About() {
  const stats = [
    { value: "1+", label: "Years experience" },
    { value: "3+", label: "Products shipped" },
    { value: "91", label: "Lighthouse score" },
    { value: "10+", label: "Microservices built" },
  ];

  return (
    <section id="about" className="section-mobile" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal section-label">About</div>

      <div className="about-grid reveal reveal-delay-1" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "start" }}>
        <div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: 24 }}>
            I build things that <span className="accent-text">actually ship</span>.
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.8, marginBottom: 16 }}>
            Full Stack Developer currently at ICICI Lombard General Insurance, where I&apos;ve shipped complete insurance purchase flows — from quote generation to KYC, payment, and policy PDFs.
          </p>
          <p style={{ color: "var(--text-subtle)", fontSize: "clamp(14px, 2vw, 16px)", lineHeight: 1.8 }}>
            I&apos;m drawn to complex, real-world engineering problems: state machine chatbots, headless CMS migrations at scale, and AI-integrated architectures. I care about performance, clean APIs, and systems that don&apos;t break under pressure.
          </p>
        </div>

        <div className="stats-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", rowGap: 32, columnGap: 24, paddingTop: 4 }}>
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal reveal-delay-${i + 1}`} style={{ borderTop: "1px solid var(--border)", paddingTop: 14 }}>
              <div className="stat-val" style={{ fontSize: "clamp(30px, 4vw, 44px)", fontWeight: 700, fontFamily: "var(--font-display)", letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 6 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "var(--text-subtle)", letterSpacing: "0.02em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
