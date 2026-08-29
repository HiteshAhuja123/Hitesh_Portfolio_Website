export default function Experience() {
  const jobs = [
    {
      company: "ICICI Lombard General Insurance",
      role: "Full Stack Developer",
      period: "Aug 2025 – Present",
      location: "Mumbai, India",
      bullets: [
        "Built the frontend for a Travel Insurance Conversational AI journey (Next.js 15, React, TypeScript, SSE) — conversational quote, KYC, insured details and payment flows with dynamic UI-schema rendering and resilient stream parsing",
        "Developed the OPD & Elevate Her healthcare marketplace (Next.js 16, React 19) embedded in a Flutter WebView, covering 10+ service verticals, using Zustand and TanStack Query for state and SignalR for real-time features",
        "Implemented a typed Flutter ↔ WebView bridge and a custom API/service layer handling JWT auth, token refresh and encrypted payloads across multiple API domains",
        "Contributed to the Angular Home Insurance purchase flow — reactive forms, RxJS state, premium and add-on integrations against .NET Core REST APIs",
        "Delivered 7–8 business-driven change requests across insurance products, primarily frontend with 1–2 .NET backend changes",
        "Worked across the AWS ecosystem (EC2, Secrets Manager) with Docker-based deployments and Jenkins CI/CD, with hands-on exposure to FastAPI and .NET APIs across the frontend-to-API lifecycle",
      ],
    },
    {
      company: "ICICI Lombard General Insurance",
      role: "Software Engineer Intern",
      period: "Feb 2025 – Aug 2025",
      location: "Mumbai, India",
      bullets: [
        "Built and shipped a mobile-first Next.js 14 travel-insurance campaign landing journey reached from YouTube/Instagram ads, owning requirement-gathering and the 6-step quote flow",
        "Reduced time-to-quote from ~5 minutes to ~2.5 minutes through frontend and Lighthouse performance optimization",
        "Deployed on AWS EC2 via Jenkins; implemented GA4/GTM events across key interactions to track progression and drop-offs on an application handling 10K+ daily API requests",
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
