"use client";
import { config } from "@/lib/config";

export default function Hero() {
  const { agent, hero, listings } = config;
  const activeListings = listings.items.filter((l) => l.status === "Active");

  return (
    <section id="hero" className="hero-grid">
      {/* Left: Agent portrait */}
      <div className="hero-portrait">
        <img src={agent.photo} alt={agent.name} referrerPolicy="no-referrer" />
        <div className="hero-portrait-overlay" />
        <div className="hero-portrait-corner" />
        {/* Team badge */}
        <div className="hero-team-badge">
          <div className="hero-team-badge-primary">{agent.brokerage.split("|")[0].trim()}</div>
          <div className="hero-team-badge-secondary">
            {agent.brokerage.split("|").slice(1).join("|").trim()}
          </div>
        </div>
      </div>

      {/* Right: Content panel */}
      <div className="hero-content-panel">
        <div className="hero-edge-line" />

        <div className="hero-name">{agent.name}</div>

        <p className="hero-tagline">
          {agent.tagline} {agent.subheadline}
        </p>

        <div className="hero-cta-row">
          <a href={hero.cta.primary.href} className="hero-cta-primary">
            {hero.cta.primary.label}
          </a>
          <a href={hero.cta.secondary.href} className="hero-cta-secondary">
            {hero.cta.secondary.label}
          </a>
        </div>

        {/* Mini listings scroll */}
        <div className="hero-mini-listings">
          <div className="hero-mini-listings-label">RECENT LISTINGS</div>
          <div className="hero-mini-listings-scroll">
            {activeListings.map((listing, i) => (
              <a key={i} href="/listings" className="hero-mini-card">
                <div className="hero-mini-card-img-wrap">
                  <img
                    src={listing.image}
                    alt={listing.label}
                    referrerPolicy="no-referrer"
                  />
                  <div className="hero-mini-card-img-overlay" />
                  <div className="hero-mini-card-img-info">
                    <div className="hero-mini-card-label">{listing.label}</div>
                    <div className="hero-mini-card-price">{listing.price}</div>
                  </div>
                </div>
                <div className="hero-mini-card-details">
                  <div className="hero-mini-card-address">{listing.address}</div>
                  <div className="hero-mini-card-stats">
                    {[
                      { val: listing.beds, label: "BD" },
                      { val: listing.baths, label: "BA" },
                      { val: listing.sqft, label: "SF" },
                    ].map((d) => (
                      <div key={d.label}>
                        <div className="hero-mini-card-stat-val">{d.val}</div>
                        <div className="hero-mini-card-stat-lbl">{d.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
