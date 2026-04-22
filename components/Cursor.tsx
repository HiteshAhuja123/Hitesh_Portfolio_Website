"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const glow = document.getElementById("cursor-glow");

    const move = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
      if (glow) {
        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";
      }
    };

    const grow = () => {
      if (cursor) { cursor.style.width = "32px"; cursor.style.height = "32px"; cursor.style.opacity = "0.6"; }
    };
    const shrink = () => {
      if (cursor) { cursor.style.width = "12px"; cursor.style.height = "12px"; cursor.style.opacity = "1"; }
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div id="cursor" style={{ position: "fixed", borderRadius: "50%", pointerEvents: "none", zIndex: 9999, mixBlendMode: "exclusion", background: "#7C6EF7", width: 12, height: 12, transform: "translate(-50%,-50%)", transition: "width 0.2s, height 0.2s, opacity 0.2s" }} />
      <div id="cursor-glow" style={{ position: "fixed", width: 400, height: 400, borderRadius: "50%", pointerEvents: "none", zIndex: 1, transform: "translate(-50%,-50%)", background: "radial-gradient(circle, rgba(124,110,247,0.07) 0%, transparent 70%)", transition: "left 0.4s ease, top 0.4s ease" }} />
    </>
  );
}
