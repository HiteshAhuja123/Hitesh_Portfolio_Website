"use client";
export default function About() {
  const stats = [
    { value: "1.5+", label: "Years experience" },
    { value: "3+", label: "End-to-end products" },
    { value: "91", label: "Lighthouse score" },
    { value: "8.42", label: "CGPA" },
  ];

  return (
    <section id="about" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal section-label">About</div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="reveal reveal-delay-1">
        <div>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 24 }}>
            I build things that <span className="grad-text">actually ship</span>
          </h2>
          <p style={{ color: "rgba(232,232,240,0.55)", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
            Full Stack Developer currently at ICICI Lombard General Insurance, where I&apos;ve shipped complete insurance purchase flows — from quote generation to KYC, payment, and policy PDFs.
          </p>
          <p style={{ color: "rgba(232,232,240,0.4)", fontSize: 16, lineHeight: 1.8 }}>
            I&apos;m drawn to complex, real-world engineering problems: state machine chatbots, headless CMS migrations at scale, and AI-integrated architectures. I care about performance, clean APIs, and systems that don&apos;t break under pressure.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {stats.map((s, i) => (
            <div key={s.label} className={`card-hover reveal reveal-delay-${i + 1}`}
              style={{ background: "rgba(255,255,255,0.02)", borderRadius: 16, padding: "28px 24px" }}>
              <div style={{ fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 800, fontFamily: "var(--font-display)", marginBottom: 6 }} className="grad-text">{s.value}</div>
              <div style={{ fontSize: 13, color: "rgba(232,232,240,0.45)", letterSpacing: "0.02em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
