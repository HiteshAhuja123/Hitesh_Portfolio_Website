"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  void scrolled;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{ padding: scrolled ? "12px 0" : "18px 0", transition: "padding 0.3s ease" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "#e8e8f0", textDecoration: "none", letterSpacing: "-0.02em" }}>
          <span className="grad-text">HA</span>
          <span style={{ color: "rgba(232,232,240,0.4)", marginLeft: 8, fontSize: 13, fontWeight: 400 }}>/ hitesh ahuja</span>
        </a>

        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} style={{ display: "none" }} className="nav-link">{l.label}</a>
          ))}
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {links.map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "8px 18px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #7C6EF7, #E879F9)",
              color: "white",
              textDecoration: "none",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.opacity = "0.85"; (e.target as HTMLElement).style.transform = "scale(1.03)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.opacity = "1"; (e.target as HTMLElement).style.transform = "scale(1)"; }}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
