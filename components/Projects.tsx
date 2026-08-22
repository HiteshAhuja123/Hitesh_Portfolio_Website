"use client";
import Link from "next/link";

const projects = [
  {
    tag: "AI + Full Stack", title: "Travel Insurance Conversational AI",
    desc: "Full-stack chatbot enabling the entire insurance journey — quote, KYC, payment, policy — via conversation.",
    stack: "Next.js · FastAPI · SSE",
    results: ["95%+ intent accuracy", "~60% LLM cost reduction", "<200ms response time"],
    href: "/projects/chatbot",
  },
  {
    tag: "Enterprise", title: "ICICI Lombard Campaign Platform",
    desc: "Campaign-driven travel insurance flow with RSA-encrypted payloads, Oracle session persistence, and AWS ECS autoscaling.",
    stack: "Next.js · Oracle · AWS ECS",
    results: ["850KB → 520KB bundle (–39%)", "RSA encryption + JWT auth", "FCP 1.8s on 3G"],
    href: "/projects/icici-lombard",
  },
  {
    tag: "Fintech", title: "FreshBuy Home Insurance Platform",
    desc: "Digital home insurance platform compressing quote-to-policy to under 5 minutes with 20+ add-on covers.",
    stack: "Angular · RxJS · CryptoJS",
    results: ["45% conversion rate", "95% payment success", "Real-time premium calc"],
    href: "/projects/freshbuy",
  },
  {
    tag: "AI Multi-Agent", title: "ILTakeCare KYP Platform",
    desc: "Multi-agent AI platform with RAG chatbot, contactless vitals via camera, claim filing, and medical OCR analysis.",
    stack: "Gemini Vision · RAG · MCP",
    results: ["4-tool orchestration", "Contactless HR/SpO2/BP detection", "MCP server for GPT + Gemini"],
    href: "/projects/iltakecare",
  },
  {
    tag: "Full Stack", title: "Flick Ticket System",
    desc: "Hybrid ticket booking platform with dynamic multi-venue seat layouts and real-time conflict detection.",
    stack: "Laravel · React",
    results: ["Dynamic seat selection", "100% conflict elimination in QA", "RESTful MVC architecture"],
    href: "/projects/flick-ticket",
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
