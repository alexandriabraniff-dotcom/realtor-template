"use client";
import { useState, useEffect } from "react";
import { config } from "@/lib/config";

export default function StickyNav({
  alwaysVisible = false,
}: {
  alwaysVisible?: boolean;
}) {
  const [visible, setVisible] = useState(alwaysVisible);
  const [open, setOpen] = useState(false);
  const { agent, nav } = config;

  useEffect(() => {
    if (alwaysVisible) return;
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysVisible]);

  return (
    <nav
      className="sticky-nav"
      style={{ transform: visible ? "translateY(0)" : "translateY(-110%)" }}
    >
      <div className="sticky-nav-inner">
        {/* Logo */}
        <a href="/" className="nav-logo">
          <div className="sticky-nav-logo-name">
            {agent.name.toUpperCase()}
          </div>
          <div className="sticky-nav-logo-sub">
            {agent.title} | {agent.location}
          </div>
        </a>

        {/* Desktop links + CTA */}
        <div className="nav-desktop-links sticky-nav-right">
          {nav.links.map((l) => (
            <a key={l.label} href={l.href} className="sticky-nav-link">
              {l.label.toUpperCase()}
            </a>
          ))}
          <a href="/#contact" className="sticky-nav-cta">
            GET IN TOUCH
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="nav-hamburger-line"
            style={{
              transform: open
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <span
            className="nav-hamburger-line"
            style={{ opacity: open ? 0 : 1 }}
          />
          <span
            className="nav-hamburger-line"
            style={{
              transform: open
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="nav-mobile-dropdown">
          {nav.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav-mobile-link"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="nav-mobile-cta"
          >
            GET IN TOUCH
          </a>
        </div>
      )}
    </nav>
  );
}
