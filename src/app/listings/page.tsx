import StickyNav from "@/components/sticky-nav";
import Footer from "@/components/footer";
import { config } from "@/lib/config";
import type { Listing } from "@/lib/config";

export const metadata = {
  title: `All Listings | ${config.agent.name} Real Estate`,
  description: config.listings.pageSubheadline,
};

export default function ListingsPage() {
  const { agent, listings } = config;
  const active = listings.items.filter((l) => l.status === "Active");
  const sold = listings.items.filter((l) => l.status === "Sold");

  return (
    <main>
      <StickyNav alwaysVisible />

      {/* Page header */}
      <div className="listings-header-grid listings-page-header">
        {/* Left: text */}
        <div className="listings-page-header-text">
          <div className="listings-page-eyebrow">
            {agent.name.toUpperCase()} — {agent.title}
          </div>
          <h1 className="listings-page-heading">
            Current &amp; Past
            <br />
            <em style={{ fontStyle: "italic" }}>Listings.</em>
          </h1>
          <p className="listings-page-subheadline">
            {listings.pageSubheadline}
          </p>
        </div>
        {/* Right: image */}
        <div className="listings-page-image">
          <img
            src={listings.pageHeaderImage}
            alt="Luxury property"
            referrerPolicy="no-referrer"
          />
          <div className="listings-page-image-overlay" />
        </div>
      </div>

      {/* Active listings */}
      <div className="listings-page-section listings-page-section--light">
        <div className="listings-page-section-inner">
          <div className="listings-page-section-label">
            ACTIVE LISTINGS ({active.length})
          </div>
          <div className="three-col-grid listings-page-grid">
            {active.map((listing, i) => (
              <ListingCard key={i} listing={listing} />
            ))}
          </div>
        </div>
      </div>

      {/* Sold listings */}
      <div className="listings-page-section listings-page-section--muted">
        <div className="listings-page-section-inner">
          <div className="listings-page-section-label">
            SOLD ({sold.length})
          </div>
          <div className="three-col-grid listings-page-grid">
            {sold.map((listing, i) => (
              <ListingCard key={i} listing={listing} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="listings-cta">
        <div className="two-col-grid listings-cta-inner">
          <div>
            <div className="listings-cta-eyebrow">
              WORK WITH {agent.name.toUpperCase().split(" ")[0]}
            </div>
            <h2 className="listings-cta-heading">
              Ready to find your
              <br />
              next property?
            </h2>
          </div>
          <div>
            <p className="listings-cta-body">
              Whether you&apos;re buying, investing, or exploring the market,{" "}
              {agent.name.split(" ")[0]} brings the expertise to guide every
              decision with clarity and confidence.
            </p>
            <a href="/#contact" className="listings-cta-btn">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="listing-card">
      <div className="listing-card-img-wrap">
        <img
          src={listing.image}
          alt={listing.label}
          referrerPolicy="no-referrer"
        />
        <div className="listing-card-img-overlay" />
        <span
          className={`listing-card-status ${
            listing.status === "Active"
              ? "listing-card-status--active"
              : "listing-card-status--sold"
          }`}
        >
          {listing.status.toUpperCase()}
        </span>
        <div className="listing-card-img-info">
          <div className="listing-card-label">{listing.label}</div>
          <div className="listing-card-price">{listing.price}</div>
        </div>
      </div>
      <div className="listing-card-body">
        <div className="listing-card-address">{listing.address}</div>
        <div className="listing-card-neighbourhood">{listing.neighbourhood}</div>
        <div className="listing-card-stats">
          {[
            { val: listing.beds, label: "Beds" },
            { val: listing.baths, label: "Baths" },
            { val: listing.sqft, label: "Sq Ft" },
          ].map((d) => (
            <div key={d.label}>
              <div className="listing-card-stat-val">{d.val}</div>
              <div className="listing-card-stat-lbl">
                {d.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
