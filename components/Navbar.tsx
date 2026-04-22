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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav style={{ padding: scrolled ? "10px 0" : "16px 0", transition: "padding 0.3s ease" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="#" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "#e8e8f0", textDecoration: "none", letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: 8 }}>
            <span className="grad-text">HA</span>
            <span style={{ color: "rgba(232,232,240,0.3)", fontSize: 12, fontWeight: 400 }}>/ hitesh ahuja</span>
          </a>

          {/* Desktop links */}
          <div className="nav-desktop-links">
            {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
            <a
              href="/resume.pdf"
              target="_blank"
              style={{
                fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 600,
                letterSpacing: "0.06em", textTransform: "uppercase",
                padding: "8px 18px", borderRadius: 100,
                background: "linear-gradient(135deg, #7C6EF7, #E879F9)",
                color: "white", textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
            >
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", padding: 4, cursor: "pointer" }}
            aria-label="Toggle menu"
          >
            <span style={{ display: "block", width: 22, height: 2, background: menuOpen ? "var(--accent)" : "rgba(232,232,240,0.7)", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "rgba(232,232,240,0.7)", borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 22, height: 2, background: menuOpen ? "var(--accent)" : "rgba(232,232,240,0.7)", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: scrolled ? 54 : 66, left: 0, right: 0,
          background: "rgba(8,8,16,0.97)",
          borderBottom: "1px solid rgba(124,110,247,0.12)",
          padding: "20px 24px 28px",
          display: "flex", flexDirection: "column", gap: 20,
          zIndex: 99,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              style={{
                fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 500,
                color: "rgba(232,232,240,0.75)", textDecoration: "none",
                letterSpacing: "0.02em", padding: "4px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            onClick={closeMenu}
            style={{
              display: "inline-block", textAlign: "center",
              padding: "12px 24px", borderRadius: 100,
              background: "linear-gradient(135deg, #7C6EF7, #E879F9)",
              color: "white", textDecoration: "none",
              fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
              letterSpacing: "0.04em", marginTop: 4,
            }}
          >
            Download Resume
          </a>
        </div>
      )}
    </>
  );
}
