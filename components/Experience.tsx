export default function Experience() {
  const jobs = [
    {
      company: "ICICI Lombard General Insurance",
      role: "Frontend Developer — Full-Time",
      period: "Aug 2025 – Present",
      location: "Mumbai, India",
      bullets: [
        "Built end-to-end Travel & Home Insurance flows — KYC with OCR/ICR, RSA-encrypted payment (Juspay/AgoraX), automated policy PDF generation",
        "Designed AI Chatbot (Next.js + FastAPI + SSE) — 95%+ intent accuracy, <200ms response time, ~60% LLM cost reduction",
        "Led CMS migration from Sitefinity → headless Next.js across 400+ pages, cutting deployment time ~40%",
        "Boosted Lighthouse score from 58 → 91 (+57%), SEO 98/100, load time cut ~35%",
        "Architected MCP-based tool wrappers exposing 10+ insurance endpoints to ChatGPT",
      ],
      accent: "#7C6EF7",
    },
    {
      company: "ICICI Lombard General Insurance",
      role: "Frontend Developer — Intern",
      period: "Feb 2025 – Aug 2025",
      location: "Mumbai, India",
      bullets: [
        "GA4 event tracking across 15+ user journey touchpoints — identified key drop-offs",
        "Integrated KYC flows (OCR/ICR) for automated document verification",
        "Reduced JS bundle size ~22% by removing unused dependencies, cutting initial page load ~1.2s",
      ],
      accent: "#E879F9",
    },
    {
      company: "One Stop Engineering",
      role: "Full Stack Developer Intern — Flick Ticket",
      period: "Jul 2024 – Aug 2024",
      location: "Remote",
      bullets: [
        "Built hybrid ticket booking system (Laravel + React) with dynamic multi-venue seat layouts",
        "Implemented overlapping schedule detection — 100% conflict resolution in QA",
        "Practiced MVC architecture and RESTful API design across a full stack codebase",
      ],
      accent: "#7C6EF7",
    },
  ];

  return (
    <section id="experience" style={{ padding: "80px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal section-label">Experience</div>
      <h2 className="reveal reveal-delay-1" style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 36 }}>
        Where I&apos;ve worked
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {jobs.map((job, i) => (
          <div key={job.period} className={`card-hover reveal reveal-delay-${i + 1}`}
            style={{ background: "var(--card-bg)", borderRadius: 18, padding: "clamp(20px, 4vw, 28px)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(to bottom, ${job.accent}, transparent)` }} />

            <div className="exp-head-mobile" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 6 }}>
              <div>
                <h3 style={{ fontSize: "clamp(15px, 2.5vw, 19px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 3px" }}>{job.company}</h3>
                <div style={{ fontSize: "clamp(12px, 2vw, 14px)", color: job.accent, fontFamily: "var(--font-display)", fontWeight: 500 }}>{job.role}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 12, color: "var(--text-subtle)", fontFamily: "var(--font-display)" }}>{job.period}</div>
                <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2 }}>{job.location}</div>
              </div>
            </div>

            <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {job.bullets.map((b, bi) => (
                <li key={bi} style={{ fontSize: "clamp(12px, 2vw, 14px)", color: "var(--text-muted)", lineHeight: 1.65, display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: job.accent, flexShrink: 0, marginTop: 7, opacity: 0.7 }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ marginTop: 40 }}>
        <div className="reveal section-label" style={{ marginBottom: 16 }}>Education</div>
        <div className="reveal reveal-delay-1 card-hover" style={{ background: "var(--card-bg)", borderRadius: 18, padding: "clamp(18px, 4vw, 24px)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
          <div>
            <h3 style={{ fontSize: "clamp(14px, 2.5vw, 17px)", fontWeight: 700, margin: "0 0 4px" }}>B.E. Computer Engineering</h3>
            <div style={{ fontSize: "clamp(12px, 2vw, 14px)", color: "var(--text-subtle)" }}>Thadomal Shahani Engineering College, Bandra, Mumbai</div>
          </div>
          <div>
            <div style={{ fontSize: "clamp(15px, 2.5vw, 17px)", fontFamily: "var(--font-display)", fontWeight: 700 }} className="grad-text">CGPA 8.42 / 10</div>
            <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 3, textAlign: "right" }}>2021 – 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}
