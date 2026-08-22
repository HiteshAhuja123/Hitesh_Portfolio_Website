"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");

    const move = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
      if (ring) {
        ring.style.left = e.clientX + "px";
        ring.style.top = e.clientY + "px";
        ring.style.opacity = "1";
      }
    };

    const grow = () => {
      if (cursor) { cursor.style.width = "6px"; cursor.style.height = "6px"; }
      if (ring) { ring.style.width = "44px"; ring.style.height = "44px"; }
    };
    const shrink = () => {
      if (cursor) { cursor.style.width = "8px"; cursor.style.height = "8px"; }
      if (ring) { ring.style.width = "30px"; ring.style.height = "30px"; }
    };
    const hide = () => { if (ring) ring.style.opacity = "0"; };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    const interactive = document.querySelectorAll("a, button");
    interactive.forEach(el => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", hide);
      interactive.forEach(el => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursor-ring" />
    </>
  );
}
