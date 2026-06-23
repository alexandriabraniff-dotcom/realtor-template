import { config } from "@/lib/config";

export default function Neighborhoods() {
  const { neighborhoods } = config;

  return (
    <section id="neighbourhoods" className="two-col-grid neighborhoods">
      {/* Left: dark text panel */}
      <div className="neighborhoods-panel">
        <div className="neighborhoods-label">{neighborhoods.label}</div>
        <h2 className="neighborhoods-heading">
          {neighborhoods.heading}
          <br />
          <em style={{ fontStyle: "italic" }}>{neighborhoods.headingEmphasis}</em>
        </h2>

        <div>
          {neighborhoods.items.map((hood, i) => (
            <div key={i} className="neighborhoods-list-item">
              <div className="neighborhoods-list-name">{hood.name}</div>
              <div className="neighborhoods-list-desc">{hood.description}</div>
            </div>
          ))}
        </div>

        <a href={neighborhoods.ctaHref} className="neighborhoods-cta">
          {neighborhoods.ctaLabel}
        </a>
      </div>

      {/* Right: photo */}
      <div className="neighborhoods-image-col">
        <img
          src={neighborhoods.backgroundImage}
          alt="City skyline"
          referrerPolicy="no-referrer"
        />
        <div className="neighborhoods-image-overlay" />
        <div className="neighborhoods-quote">
          <div className="neighborhoods-quote-text">
            &ldquo;{neighborhoods.quote.text}&rdquo;
          </div>
          <div className="neighborhoods-quote-attribution">
            {neighborhoods.quote.attribution}
          </div>
        </div>
      </div>
    </section>
  );
}
