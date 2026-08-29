"use client";
export default function Skills() {
  const categories = [
    {
      label: "Frontend",
      skills: ["Next.js", "React", "Angular", "TypeScript", "JavaScript (ES6+)", "RxJS", "Zustand", "TanStack Query", "Tailwind CSS"],
    },
    {
      label: "Languages",
      skills: ["TypeScript", "JavaScript", "Java", "Python", "C#", "SQL"],
    },
    {
      label: "Backend & APIs",
      skills: ["FastAPI", ".NET Core", "Node.js", "Spring Boot", "REST APIs", "JWT"],
    },
    {
      label: "AI & LLM",
      skills: ["LLM Integration", "RAG", "MCP", "Spring AI", "AI Agents", "SSE"],
    },
    {
      label: "Cloud & DevOps",
      skills: ["AWS EC2", "AWS Secrets Manager", "Docker", "Jenkins CI/CD", "Git", "Postman"],
    },
    {
      label: "Databases",
      skills: ["PostgreSQL", "Oracle DB", "MongoDB", "MySQL"],
    },
    {
      label: "Realtime & Integrations",
      skills: ["SignalR", "Google Maps", "CleverTap", "GA4", "GTM", "Lighthouse", "OCR / ICR"],
    },
  ];

  return (
    <section id="skills" className="section-mobile" style={{ padding: "100px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal section-label">Skills</div>
      <h2 className="reveal reveal-delay-1" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 48 }}>
        Tech stack
      </h2>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {categories.map((cat, ci) => (
          <div
            key={cat.label}
            className={`reveal reveal-delay-${Math.min(ci + 1, 5)} skills-row`}
            style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              gap: 24,
              padding: "22px 0",
              borderTop: "1px solid var(--border)",
              alignItems: "baseline",
            }}
          >
            <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-faint)" }}>
              {cat.label}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", columnGap: "0.6em", rowGap: 8 }}>
              {cat.skills.map((skill, si) => (
                <span key={skill} style={{ display: "inline-flex", alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: "clamp(14px, 1.8vw, 16px)",
                      color: "var(--text-soft)",
                      cursor: "default",
                      transition: "color 0.2s ease",
                      borderBottom: "1px solid transparent",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; (e.currentTarget as HTMLElement).style.borderBottomColor = "var(--accent)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-soft)"; (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent"; }}
                  >
                    {skill}
                  </span>
                  {si < cat.skills.length - 1 && <span style={{ color: "var(--text-faint)", marginLeft: "0.6em" }}>·</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
