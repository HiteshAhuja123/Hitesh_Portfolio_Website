"use client";
import Link from "next/link";
import type { CSSProperties } from "react";
import { freelanceProjects } from "@/lib/freelanceProjects";

function Monogram({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join("")
    .toUpperCase();

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(48px, 8vw, 72px)", letterSpacing: "-0.03em", color: "var(--text-faint)" }}>
        {initials}
      </span>
    </div>
  );
}

export default function Freelance() {
  return (
    <section id="freelance" className="section-mobile" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal section-label">Freelance Projects</div>
      <div className="reveal reveal-delay-1" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 16, marginBottom: 48 }}>
        <h2 style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", margin: 0 }}>
          Things I&apos;ve built outside the day job
        </h2>
        <p style={{ fontSize: 14, color: "var(--text-subtle)", maxWidth: 320, margin: 0 }}>
          Real products for real clients — end to end, from design to deployment.
        </p>
      </div>

      <div className="freelance-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 28 }}>
        {freelanceProjects.map((p, i) => {
          const cardClassName = `freelance-card reveal reveal-delay-${(i % 3) + 1}`;
          const cardStyle: CSSProperties = { display: "block", textDecoration: "none", color: "inherit" };

          const content = (
            <>
              <div className="freelance-preview">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={p.name} style={{ width: "100%", aspectRatio: "16 / 10", objectFit: "cover", display: "block" }} loading="lazy" />
                ) : (
                  <Monogram name={p.name} />
                )}
              </div>

              <div style={{ padding: "18px 2px 0", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                  <h3 style={{ fontSize: "clamp(17px, 2vw, 20px)", fontWeight: 600, letterSpacing: "-0.02em", margin: 0 }}>{p.name}</h3>
                  <span className="meta-tag">{p.year}</span>
                </div>

                <div className="meta-tag" style={{ color: "var(--text-subtle)" }}>{p.client}</div>

                <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.7, margin: "2px 0 0" }}>{p.description}</p>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 10, marginTop: 8, paddingTop: 12, borderTop: "1px solid var(--border)" }}>
                  <span className="meta-tag">{p.technologies.join(" · ")}</span>
                  {p.caseStudyHref && (
                    <span className="freelance-card-arrow" style={{ fontSize: 12, fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--accent)", whiteSpace: "nowrap", transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)" }}>
                      Details →
                    </span>
                  )}
                </div>
              </div>
            </>
          );

          if (p.caseStudyHref) {
            return (
              <Link key={p.name} href={p.caseStudyHref} className={cardClassName} style={cardStyle}>
                {content}
              </Link>
            );
          }

          return (
            <div key={p.name} className={cardClassName} style={cardStyle}>
              {content}
            </div>
          );
        })}

        {/* CTA tile */}
        <a
          href="#contact"
          className="freelance-card reveal reveal-delay-3"
          style={{
            display: "flex", flexDirection: "column", justifyContent: "center", gap: 10,
            minHeight: 220,
            border: "1px solid var(--border)",
            padding: "32px 28px",
            textDecoration: "none", color: "inherit",
          }}
        >
          <span className="meta-tag">{"// let's work together"}</span>
          <span style={{ fontSize: "clamp(19px, 2.2vw, 23px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.3 }}>
            Have something in mind? <span className="accent-text">Let&apos;s build it.</span>
          </span>
          <span className="link-underline" style={{ fontSize: 13, marginTop: 6, alignSelf: "flex-start" }}>
            Get in touch →
          </span>
        </a>
      </div>
    </section>
  );
}
