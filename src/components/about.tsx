import { config } from "@/lib/config";

export default function About() {
  const { about, credentials } = config.agent;

  return (
    <section id="about" className="about">
      <div className="two-col-grid about-grid">
        {/* Image placeholder */}
        <div className="about-photo-col">
          <div className="about-photo-placeholder">
            <div className="about-photo-icon">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="3" width="18" height="18" rx="1" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            AGENT PHOTO
          </div>
          <div className="about-photo-corner-tl" />
          <div className="about-photo-corner-br" />
        </div>

        {/* Text */}
        <div>
          <div className="about-label">{about.label}</div>
          <h2
            className="about-heading"
            dangerouslySetInnerHTML={{ __html: about.heading }}
          />
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about-body">
              {p}
            </p>
          ))}

          <div className="about-disciplines">
            {about.disciplines.map((item) => (
              <div key={item.label} className="about-discipline">
                <div className="about-discipline-icon">{item.icon}</div>
                <div className="about-discipline-label">
                  {item.label.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Credentials strip */}
      <div className="three-col-grid about-credentials">
        {credentials.map((c, i) => (
          <div key={i} className="credential-item">
            <div className="credential-value">{c.value}</div>
            <div className="credential-label">{c.label.toUpperCase()}</div>
            <p className="credential-detail">{c.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
