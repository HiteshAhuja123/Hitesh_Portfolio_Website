"use client";
import Link from "next/link";

const projects = [
  {
    tag: "AI · Frontend Engineering", title: "Travel Insurance Conversational AI",
    desc: "Built the frontend for a conversational travel-insurance purchase journey — quote, KYC, insured details, payment and policy issuance through a single guided chat, powered by SSE streaming and dynamic UI-schema rendering.",
    stack: "Next.js 15 · React · TypeScript · SSE",
    results: ["~60% LLM cost reduction", "<200ms on structured steps", "Lighthouse 58 → 91"],
    href: "/projects/chatbot",
  },
  {
    tag: "Full Stack · Healthcare", title: "OPD & Elevate Her Healthcare Marketplace",
    desc: "A healthcare marketplace embedded in a Flutter WebView, spanning 10+ service verticals — consultations, lab tests, medicines, cashless procedures — plus Elevate Her, a dedicated women's-health section.",
    stack: "Next.js 16 · React 19 · Zustand · TanStack Query · SignalR",
    results: ["10+ service verticals", "Typed Flutter ↔ WebView bridge", "Real-time SignalR chat"],
    href: "/projects/opd-elevate-her",
  },
  {
    tag: "Frontend · Performance", title: "Travel Insurance Campaign Platform",
    desc: "Mobile-first campaign landing journey reached from social-media ads, built around a 6-step quote flow with a primary focus on Lighthouse and frontend performance.",
    stack: "Next.js 14 · TypeScript · AWS EC2 · Jenkins",
    results: ["Time-to-quote 5 min → 2.5 min", "10K+ daily API requests", "GA4 / GTM funnel tracking"],
    href: "/projects/icici-lombard",
  },
  {
    tag: "Frontend · Insurance", title: "Home Insurance Platform",
    desc: "Angular purchase journey for home insurance — property details, quotes, add-on coverage, KYC, payment and policy issuance — integrated with .NET Core REST APIs and encrypted request flows.",
    stack: "Angular · TypeScript · RxJS · .NET Core APIs",
    results: ["Reactive forms + RxJS state", "7–8 business-driven CRs", "Encrypted API + JWT auth"],
    href: "/projects/home-insurance",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-mobile" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal section-label">Selected Work</div>
      <h2 className="reveal reveal-delay-1" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 48 }}>
        Things I&apos;ve shipped
      </h2>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((p, i) => (
          <Link
            key={p.title}
            href={p.href}
            className={`project-row reveal reveal-delay-${(i % 3) + 1}`}
            style={{
              display: "grid",
              gridTemplateColumns: "56px 1fr",
              gap: 24,
              padding: "36px 0",
              borderTop: "1px solid var(--border)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-faint)", paddingTop: 2 }}>
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <span className="meta-tag" style={{ letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}>
                {p.tag}
              </span>

              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: 12, marginTop: 8 }}>
                <h3 style={{ fontSize: "clamp(19px, 2.5vw, 26px)", fontWeight: 600, letterSpacing: "-0.02em", margin: 0 }}>{p.title}</h3>
                <span className="project-row-arrow" style={{ fontSize: 13, fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--accent)", whiteSpace: "nowrap", transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)" }}>
                  View case study →
                </span>
              </div>

              <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, margin: "10px 0 16px", maxWidth: 560 }}>{p.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 28px" }}>
                <span className="meta-tag">{p.stack}</span>
                {p.results.map(r => (
                  <span key={r} style={{ fontSize: 12, color: "var(--text-subtle)" }}>{r}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
