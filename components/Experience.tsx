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
    },
  ];

  return (
    <section id="experience" className="section-mobile" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal section-label">Experience</div>
      <h2 className="reveal reveal-delay-1" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 56 }}>
        Where I&apos;ve worked
      </h2>

      <div style={{ position: "relative", paddingLeft: 28, maxWidth: 760 }}>
        <div className="reveal-line-v timeline-rail" style={{ left: 0 }} />

        <div style={{ display: "flex", flexDirection: "column", gap: 52 }}>
          {jobs.map((job, i) => (
            <div key={job.period} className={`reveal reveal-delay-${i + 1}`} style={{ position: "relative" }}>
              <div className="timeline-node" style={{ top: 6 }} />

              <div className="exp-head-mobile" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                <div>
                  <h3 style={{ fontSize: "clamp(16px, 2.5vw, 19px)", fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 3px" }}>{job.company}</h3>
                  <div style={{ fontSize: "clamp(12px, 2vw, 14px)", color: "var(--accent)", fontFamily: "var(--font-display)", fontWeight: 500 }}>{job.role}</div>
                </div>
                <div className="exp-period" style={{ textAlign: "right" }}>
                  <div className="meta-tag">{job.period}</div>
                  <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 2 }}>{job.location}</div>
                </div>
              </div>

              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                {job.bullets.map((b, bi) => (
                  <li key={bi} style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "var(--text-muted)", lineHeight: 1.65, display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--text-faint)", flexShrink: 0, marginTop: 7 }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div style={{ marginTop: 56 }}>
        <div className="reveal section-label" style={{ marginBottom: 20 }}>Education</div>
        <div className="reveal reveal-delay-1" style={{ borderTop: "1px solid var(--border)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
          <div>
            <h3 style={{ fontSize: "clamp(15px, 2.5vw, 17px)", fontWeight: 600, margin: "0 0 4px" }}>B.E. Computer Engineering</h3>
            <div style={{ fontSize: "clamp(12px, 2vw, 14px)", color: "var(--text-subtle)" }}>Thadomal Shahani Engineering College, Bandra, Mumbai</div>
          </div>
          <div>
            <div style={{ fontSize: "clamp(16px, 2.5vw, 18px)", fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--accent)", textAlign: "right" }}>CGPA 8.42 / 10</div>
            <div style={{ fontSize: 11, color: "var(--text-faint)", marginTop: 3, textAlign: "right" }}>2021 – 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}
