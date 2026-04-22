"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      <nav style={{ padding: scrolled ? "10px 0" : "16px 0", transition: "padding 0.3s ease" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <a href="#" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--text)", textDecoration: "none", letterSpacing: "-0.02em", display: "flex", alignItems: "center", gap: 8 }}>
            <span className="grad-text">HA</span>
            <span style={{ color: "var(--text-faint)", fontSize: 12, fontWeight: 400 }}>/ hitesh ahuja</span>
          </a>

          {/* Desktop links */}
          <div className="nav-desktop-links">
            {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}

            {/* Theme toggle */}
            {mounted && (
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
            )}

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

          {/* Mobile: theme toggle + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {mounted && (
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" style={{ display: "flex" }}>
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
            )}
            <button
              className="nav-mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", padding: 4, cursor: "pointer" }}
              aria-label="Toggle menu"
            >
              <span style={{ display: "block", width: 22, height: 2, background: menuOpen ? "var(--accent)" : "var(--text-soft)", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
              <span style={{ display: "block", width: 22, height: 2, background: "var(--text-soft)", borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: "block", width: 22, height: 2, background: menuOpen ? "var(--accent)" : "var(--text-soft)", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: scrolled ? 54 : 66, left: 0, right: 0,
          background: "var(--mobile-menu-bg)",
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
                color: "var(--text-soft)", textDecoration: "none",
                letterSpacing: "0.02em", padding: "4px 0",
                borderBottom: "1px solid var(--card-border)",
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
