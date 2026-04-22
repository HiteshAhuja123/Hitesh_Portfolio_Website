"use client";
import Link from "next/link";

const projects = [
  {
    tag: "AI + Full Stack",
    title: "Travel Insurance Conversational AI",
    desc: "Full-stack chatbot enabling the entire insurance journey — quote, KYC, payment, policy — via conversation.",
    highlights: ["Next.js + FastAPI + SSE", "State machine architecture", "95%+ intent accuracy", "<200ms response time", "~60% LLM cost reduction"],
    href: "/projects/chatbot",
    accent: "#7C6EF7",
  },
  {
    tag: "Enterprise Platform",
    title: "ICICI Lombard Campaign Platform",
    desc: "Dynamic campaign-driven travel insurance flow with RSA-encrypted payloads, Oracle session persistence, and AWS ECS autoscaling.",
    highlights: ["Progressive quote-to-policy flow", "RSA encryption + JWT auth", "Oracle-backed session resumption", "FastAPI SSE streaming", "AWS ECS autoscaling"],
    href: "/projects/icici-lombard",
    accent: "#E879F9",
  },
  {
    tag: "Fintech",
    title: "FreshBuy Home Insurance Platform",
    desc: "Digital home insurance platform compressing quote-to-policy to under 5 minutes with 20+ add-on covers.",
    highlights: ["Real-time premium calculation", "RxJS state management", "CryptoJS data encryption", "Lazy-loaded Angular SPA", "Cross-device quote resumption"],
    href: "/projects/freshbuy",
    accent: "#7C6EF7",
  },
  {
    tag: "AI Multi-Agent",
    title: "ILTakeCare KYP Platform",
    desc: "Multi-agent AI platform with RAG chatbot, contactless vitals via camera, claim filing, and medical OCR analysis.",
    highlights: ["RAG + 4-tool orchestration", "Contactless HR/SpO2/BP detection", "Gemini Vision + OCR", "MCP server for ChatGPT/Gemini", "SSE streaming"],
    href: "/projects/iltakecare",
    accent: "#E879F9",
  },
  {
    tag: "Architecture",
    title: "Headless CMS Migration",
    desc: "Migrated 400+ page monolithic Sitefinity CMS to headless Next.js — cutting deployment time by ~40%.",
    highlights: ["400+ pages migrated", "Component-based rendering", "~40% faster deployments", "Centralized content management"],
    href: "/projects/cms",
    accent: "#7C6EF7",
  },
  {
    tag: "Full Stack",
    title: "Flick Ticket Booking",
    desc: "Hybrid ticket booking system with dynamic multi-venue seat layouts and real-time scheduling conflict detection.",
    highlights: ["Laravel + React", "Dynamic seat selection", "100% booking conflict elimination in QA", "Eloquent ORM relationships"],
    href: "/projects/flick-ticket",
    accent: "#E879F9",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 24px 100px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal section-label">Selected Work</div>
      <h2 className="reveal reveal-delay-1" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
        Things I&apos;ve shipped
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
        {projects.map((p, i) => (
          <div key={p.title} className={`card-hover reveal reveal-delay-${(i % 3) + 1}`}
            style={{ background: "rgba(255,255,255,0.02)", borderRadius: 20, padding: "28px", display: "flex", flexDirection: "column", gap: 16, position: "relative", overflow: "hidden" }}>
            {/* accent glow */}
            <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: `radial-gradient(circle, ${p.accent}15 0%, transparent 70%)`, pointerEvents: "none" }} />

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 11, fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: p.accent, border: `1px solid ${p.accent}30`, padding: "4px 10px", borderRadius: 100, background: `${p.accent}08` }}>
                {p.tag}
              </span>
            </div>

            <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, margin: 0 }}>{p.title}</h3>
            <p style={{ color: "rgba(232,232,240,0.5)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{p.desc}</p>

            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
              {p.highlights.map(h => (
                <li key={h} style={{ fontSize: 13, color: "rgba(232,232,240,0.4)", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: p.accent, flexShrink: 0, opacity: 0.7 }} />
                  {h}
                </li>
              ))}
            </ul>

            <Link href={p.href} style={{ marginTop: "auto", fontSize: 13, fontFamily: "var(--font-display)", fontWeight: 600, color: p.accent, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
              Case study →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
