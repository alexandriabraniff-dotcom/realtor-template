"use client";
import { config } from "@/lib/config";

export default function Services() {
  const { services } = config;

  return (
    <section id="services" className="services">
      <div className="services-inner">
        {/* Header */}
        <div className="services-header">
          <div>
            <div className="services-label">{services.label}</div>
            <h2 className="services-heading">
              {services.heading}{" "}
              <em style={{ fontStyle: "italic" }}>{services.headingEmphasis}</em>
            </h2>
          </div>
          <a href={services.enquireHref} className="services-enquire">
            ENQUIRE ABOUT ANY SERVICE →
          </a>
        </div>

        {/* Three columns */}
        <div className="three-col-grid services-grid">
          {services.items.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-card-top">
                <div className="service-card-number">{s.number}</div>
                <span className="service-card-icon">{s.icon}</span>
              </div>
              <div>
                <div className="service-card-subtitle">
                  {s.subtitle.toUpperCase()}
                </div>
                <h3 className="service-card-title">{s.title}</h3>
              </div>
              <p className="service-card-description">{s.description}</p>
              <div className="service-card-tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="service-card-tag">
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
