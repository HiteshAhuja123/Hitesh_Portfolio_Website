"use client";
import Link from "next/link";

const projects = [
  {
    tag: "AI + Full Stack", title: "Travel Insurance Conversational AI",
    desc: "Full-stack chatbot enabling the entire insurance journey — quote, KYC, payment, policy — via conversation.",
    highlights: ["Next.js + FastAPI + SSE", "95%+ intent accuracy", "~60% LLM cost reduction", "<200ms response time"],
    href: "/projects/chatbot", accent: "#7C6EF7",
  },
  {
    tag: "Enterprise", title: "ICICI Lombard Campaign Platform",
    desc: "Campaign-driven travel insurance flow with RSA-encrypted payloads, Oracle session persistence, and AWS ECS autoscaling.",
    highlights: ["850KB → 520KB bundle (–39%)", "RSA encryption + JWT auth", "FCP 1.8s on 3G", "AWS ECS autoscaling"],
    href: "/projects/icici-lombard", accent: "#E879F9",
  },
  {
    tag: "Fintech", title: "FreshBuy Home Insurance Platform",
    desc: "Digital home insurance platform compressing quote-to-policy to under 5 minutes with 20+ add-on covers.",
    highlights: ["Real-time RxJS premium calc", "CryptoJS data encryption", "45% conversion rate", "95% payment success"],
    href: "/projects/freshbuy", accent: "#7C6EF7",
  },
  {
    tag: "AI Multi-Agent", title: "ILTakeCare KYP Platform",
    desc: "Multi-agent AI platform with RAG chatbot, contactless vitals via camera, claim filing, and medical OCR analysis.",
    highlights: ["RAG + 4-tool orchestration", "Contactless HR/SpO2/BP detection", "Gemini Vision + OCR", "MCP server for GPT + Gemini"],
    href: "/projects/iltakecare", accent: "#E879F9",
  },
  {
    tag: "Web + CMS", title: "Radheshyam Glass House",
    desc: "Full web storefront for a 30-year-old artisan glass business — built from scratch with headless CMS, live price calculator, and zero ongoing dev dependency.",
    highlights: ["Next.js 14 + Sanity CMS + ISR", "Live ₹/sqft price calculator", "~60% image payload reduction", "0 devs needed post-launch"],
    href: "/projects/cms", accent: "#7C6EF7",
  },
  {
    tag: "Full Stack", title: "Flick Ticket System",
    desc: "Hybrid ticket booking platform with dynamic multi-venue seat layouts and real-time conflict detection.",
    highlights: ["Laravel + React", "Dynamic seat selection", "100% conflict elimination in QA", "RESTful MVC architecture"],
    href: "/projects/flick-ticket", accent: "#E879F9",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal section-label">Selected Work</div>
      <h2 className="reveal reveal-delay-1" style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 36 }}>
        Things I&apos;ve shipped
      </h2>

      <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 18 }}>
        {projects.map((p, i) => (
          <div key={p.title} className={`card-hover reveal reveal-delay-${(i % 3) + 1}`}
            style={{ background: "var(--card-bg)", borderRadius: 18, padding: "24px", display: "flex", flexDirection: "column", gap: 14, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 110, height: 110, borderRadius: "50%", background: `radial-gradient(circle, ${p.accent}18 0%, transparent 70%)`, pointerEvents: "none" }} />
            <span style={{ fontSize: 10, fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: p.accent, border: `1px solid ${p.accent}30`, padding: "4px 10px", borderRadius: 100, background: `${p.accent}08`, alignSelf: "flex-start" }}>
              {p.tag}
            </span>
            <h3 style={{ fontSize: "clamp(16px, 2.5vw, 19px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>{p.title}</h3>
            <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 5 }}>
              {p.highlights.map(h => (
                <li key={h} style={{ fontSize: 12, color: "var(--text-subtle)", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: p.accent, flexShrink: 0, opacity: 0.7 }} />
                  {h}
                </li>
              ))}
            </ul>
            <Link href={p.href} style={{ marginTop: "auto", fontSize: 12, fontFamily: "var(--font-display)", fontWeight: 600, color: p.accent, textDecoration: "none" }}>
              Case study →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
