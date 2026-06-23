"use client";
import { config } from "@/lib/config";

export default function FeaturedListings() {
  const { listings } = config;
  const [featured, ...rest] = listings.items;

  return (
    <section id="listings" className="listings-section">
      <div className="listings-inner">
        {/* Header */}
        <div className="listings-header">
          <div>
            <div className="listings-label">{listings.featuredLabel}</div>
            <h2 className="listings-heading">
              {listings.featuredHeading.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </div>
          <a href="/listings" className="listings-all-link">
            ALL LISTINGS →
          </a>
        </div>

        {/* Editorial grid: large card left + 2 stacked right */}
        <div className="listings-grid listings-editorial">
          {/* Featured large card */}
          <div className="listing-featured">
            <img
              src={featured.image}
              alt={featured.label}
              referrerPolicy="no-referrer"
            />
            <div className="listing-featured-overlay" />
            <div className="listing-featured-badge">FEATURED</div>
            <div className="listing-featured-info">
              <div className="listing-info-label">{featured.label}</div>
              <div className="listing-info-price">{featured.price}</div>
              <div className="listing-info-address">{featured.address}</div>
              <div className="listing-info-stats">
                {[
                  { val: featured.beds, label: "BED" },
                  { val: featured.baths, label: "BATH" },
                  { val: featured.sqft, label: "SQFT" },
                ].map((d) => (
                  <div
                    key={d.label}
                    style={{ display: "flex", alignItems: "baseline", gap: 5 }}
                  >
                    <span className="listing-stat-val">{d.val}</span>
                    <span className="listing-stat-lbl">{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Two stacked cards */}
          <div className="listings-stack" style={{ gap: 3 }}>
            {rest.slice(0, 2).map((listing, i) => (
              <div key={i} className="listing-stack-item">
                <img
                  src={listing.image}
                  alt={listing.label}
                  referrerPolicy="no-referrer"
                />
                <div className="listing-stack-overlay" />
                {listing.status === "Sold" && (
                  <div className="listing-stack-sold">SOLD</div>
                )}
                <div className="listing-stack-info">
                  <div className="listing-info-label">{listing.label}</div>
                  <div className="listing-stack-price">{listing.price}</div>
                  <div className="listing-stack-sub">
                    {listing.neighbourhood} · {listing.beds}bd / {listing.baths}ba
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
