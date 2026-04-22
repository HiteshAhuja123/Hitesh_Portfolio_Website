export default function Experience() {
  const jobs = [
    {
      company: "ICICI Lombard General Insurance",
      role: "Frontend Developer — Full-Time",
      period: "Aug 2025 – Present",
      location: "Mumbai, India",
      bullets: [
        "Built end-to-end Travel & Home Insurance purchase flows — multi-step forms, dynamic quote generation, KYC with OCR/ICR, RSA-encrypted payment (Juspay/AgoraX), and automated policy PDF generation",
        "Designed conversational AI Chatbot (Next.js + FastAPI + SSE) with state machine workflows, 95%+ intent accuracy, <200ms response time, and ~60% reduction in LLM API costs",
        "Led CMS migration from monolithic Sitefinity to Headless Next.js across 400+ pages, cutting deployment time by ~40%",
        "Boosted Lighthouse score from 58 → 91 (+57%), SEO to 98/100, cut load time ~35% via JS cleanup and lazy loading",
        "Architected MCP-based tool wrappers exposing 10+ insurance endpoints to ChatGPT for AI-driven conversational access",
      ],
      accent: "#7C6EF7",
    },
    {
      company: "ICICI Lombard General Insurance",
      role: "Frontend Developer — Intern",
      period: "Feb 2025 – Aug 2025",
      location: "Mumbai, India",
      bullets: [
        "Implemented GA4 event tracking across 15+ user journey touchpoints, identifying drop-offs and improving funnel visibility",
        "Integrated KYC flows (OCR/ICR) for automated document verification; built API integrations for Family Shield product",
        "Reduced JS bundle size by ~22% by removing unused dependencies, cutting initial page load by ~1.2s",
      ],
      accent: "#E879F9",
    },
    {
      company: "One Stop Engineering",
      role: "Full Stack Developer Intern — Flick Ticket",
      period: "Jul 2024 – Aug 2024",
      location: "Remote",
      bullets: [
        "Built hybrid ticket booking system (Laravel + React) with dynamic multi-venue seat layouts and real-time state management",
        "Implemented overlapping schedule detection — reduced booking conflicts by 100% in QA",
        "Practiced MVC architecture and RESTful API design across a full stack codebase",
      ],
      accent: "#7C6EF7",
    },
  ];

  return (
    <section id="experience" style={{ padding: "80px 24px 100px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal section-label">Experience</div>
      <h2 className="reveal reveal-delay-1" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
        Where I&apos;ve worked
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {jobs.map((job, i) => (
          <div key={job.period} className={`card-hover reveal reveal-delay-${i + 1}`}
            style={{ background: "rgba(255,255,255,0.02)", borderRadius: 20, padding: "32px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, borderRadius: "3px 0 0 3px", background: `linear-gradient(to bottom, ${job.accent}, transparent)` }} />

            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 4px" }}>{job.company}</h3>
                <div style={{ fontSize: 14, color: job.accent, fontFamily: "var(--font-display)", fontWeight: 500 }}>{job.role}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 13, color: "rgba(232,232,240,0.4)", fontFamily: "var(--font-display)" }}>{job.period}</div>
                <div style={{ fontSize: 12, color: "rgba(232,232,240,0.25)", marginTop: 2 }}>{job.location}</div>
              </div>
            </div>

            <ul style={{ margin: "16px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {job.bullets.map((b, bi) => (
                <li key={bi} style={{ fontSize: 14, color: "rgba(232,232,240,0.55)", lineHeight: 1.65, display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: job.accent, flexShrink: 0, marginTop: 7, opacity: 0.7 }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ marginTop: 48 }}>
        <div className="reveal section-label" style={{ marginBottom: 20 }}>Education</div>
        <div className="reveal reveal-delay-1 card-hover" style={{ background: "rgba(255,255,255,0.02)", borderRadius: 20, padding: "28px 32px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, border: "1px solid rgba(255,255,255,0.05)" }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 4px" }}>Bachelor of Engineering — Computer Engineering</h3>
            <div style={{ fontSize: 14, color: "rgba(232,232,240,0.5)" }}>Thadomal Shahani Engineering College, Bandra, Mumbai</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 14, fontFamily: "var(--font-display)", fontWeight: 600 }} className="grad-text">CGPA 8.42 / 10</div>
            <div style={{ fontSize: 12, color: "rgba(232,232,240,0.3)", marginTop: 4 }}>2021 – 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}
