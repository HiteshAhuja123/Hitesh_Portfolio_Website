"use client";
import Link from "next/link";

export function CaseStudyLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main style={{ minHeight: "100vh", padding: "clamp(80px, 10vw, 100px) clamp(16px, 5vw, 40px) 80px", background: "#080810", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Link href="/#projects" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(232,232,240,0.4)", textDecoration: "none", fontFamily: "var(--font-display)", transition: "color 0.2s", marginBottom: 40 }}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "#e8e8f0")}
          onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.color = "rgba(232,232,240,0.4)")}>
          ← Selected work
        </Link>

        <p style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(124,110,247,0.8)", fontFamily: "var(--font-display)", marginBottom: 12 }}>
          Case study
        </p>
        <h1 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em", color: "#e8e8f0", fontFamily: "var(--font-display)", marginBottom: 0 }}>
          {title}
        </h1>

        <div style={{ marginTop: "clamp(40px, 8vw, 72px)" }}>{children}</div>
      </div>
    </main>
  );
}

export function StudySection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: "clamp(40px, 8vw, 64px)", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "clamp(32px, 6vw, 56px)" }}>
      <h2 style={{ fontSize: "clamp(16px, 3vw, 20px)", fontWeight: 700, letterSpacing: "-0.02em", color: "#e8e8f0", fontFamily: "var(--font-display)", marginBottom: 18 }}>{label}</h2>
      <div style={{ fontSize: "clamp(13px, 2vw, 15px)", lineHeight: 1.78, color: "rgba(232,232,240,0.5)" }}>
        {children}
      </div>
    </section>
  );
}

export function ArchBlock({ lines }: { lines: string[] }) {
  return (
    <div style={{ marginTop: 16, borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.025)", padding: "clamp(14px, 3vw, 20px)", fontFamily: "monospace", fontSize: "clamp(11px, 2vw, 13px)", lineHeight: 1.7, color: "rgba(232,232,240,0.7)", overflowX: "auto" }}>
      {lines.map((line) => (
        <div key={line} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "8px 0", whiteSpace: "nowrap" }} className="last:border-0 last:pb-0 first:pt-0">
          {line}
        </div>
      ))}
    </div>
  );
}
