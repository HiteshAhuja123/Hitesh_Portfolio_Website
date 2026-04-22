export default function Skills() {
  const categories = [
    {
      label: "Frontend",
      skills: ["Angular", "Next.js", "React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      label: "Backend & APIs",
      skills: ["FastAPI", "REST APIs", "MCP Tool Architecture", "Node.js", ".NET / C#", "JSON"],
    },
    {
      label: "Database",
      skills: ["SQL", "Oracle DB", "MongoDB"],
    },
    {
      label: "DevOps & Tools",
      skills: ["Git", "Jenkins CI/CD", "AWS EC2 & ECS", "Postman", "Figma", "VS Code"],
    },
    {
      label: "Concepts",
      skills: ["System Design", "Headless CMS", "AI Integration", "State Machines", "Lighthouse / SEO", "SSE", "RxJS"],
    },
  ];

  return (
    <section id="skills" style={{ padding: "80px 24px 100px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="reveal section-label">Skills</div>
      <h2 className="reveal reveal-delay-1" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 48 }}>
        Tech stack
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {categories.map((cat, ci) => (
          <div key={cat.label} className={`reveal reveal-delay-${ci + 1}`}>
            <div style={{ fontSize: 11, fontFamily: "var(--font-display)", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(232,232,240,0.3)", marginBottom: 12 }}>
              {cat.label}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {cat.skills.map(skill => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
