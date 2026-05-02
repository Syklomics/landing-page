"use client";

import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nav = navRef.current;
      if (!nav) return;
      nav.classList.toggle("scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav id="nav" ref={navRef}>
      <a href="#" className="nav-logo">
        <svg width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="40" cy="40" rx="32" ry="20" fill="url(#navG)" />
          <ellipse cx="40" cy="40" rx="14" ry="7" fill="rgba(30,5,12,0.55)" />
          <ellipse cx="40" cy="40" rx="34" ry="22" fill="none" stroke="rgba(92,26,46,0.2)" strokeWidth="1" />
          <defs>
            <radialGradient id="navG" cx="38%" cy="36%" r="62%" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C46F84" />
              <stop offset="55%" stopColor="#7B2D42" />
              <stop offset="100%" stopColor="#5C1A2E" />
            </radialGradient>
          </defs>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <div className="nav-wordmark">
            <span className="nw-light">Sy</span>
            <span className="nw-bold">k</span>
            <span className="nw-light">lo</span>
            <span className="nw-semi">mics</span>
          </div>
          <div
            style={{
              fontFamily: "var(--ff-body)",
              fontSize: 8,
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--muted)",
              lineHeight: 1,
            }}
          >
            Biotechnology
          </div>
        </div>
      </a>

      <ul className={open ? "nav-links open" : "nav-links"} id="navLinks">
        <li><a href="#platform" onClick={() => setOpen(false)}>Platform</a></li>
        <li><a href="#science" onClick={() => setOpen(false)}>Science</a></li>
        <li><a href="#differentiation" onClick={() => setOpen(false)}>Edge</a></li>
        <li><a href="#team" onClick={() => setOpen(false)}>Founders</a></li>
        <li><a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Get in Touch</a></li>
      </ul>

      <button
        className="nav-toggle"
        id="navToggle"
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
