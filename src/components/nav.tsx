"use client";
import { useState } from "react";
import { config } from "@/lib/config";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { agent, nav, designer } = config;

  return (
    <nav className="nav">
      {/* DESIGNER CREDIT BANNER — remove after client payment */}
      <div className="designer-banner">
        Website designed by {designer.name} — {designer.email}
      </div>

      <div className="nav-inner">
        {/* Logo */}
        <a href="/" className="nav-logo">
          <div className="nav-logo-name">{agent.name.toUpperCase()}</div>
          <div className="nav-logo-sub">
            {agent.title} | {agent.location}
          </div>
        </a>

        {/* Desktop links */}
        <div className="nav-desktop-links nav-links-center">
          {nav.links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label.toUpperCase()}
            </a>
          ))}
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
