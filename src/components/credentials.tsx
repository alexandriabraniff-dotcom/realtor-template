export default function Credentials() {
  const credentials = [
    {
      stat: "17",
      unit: "Years",
      label: "Industry Experience",
      detail: "Spanning interior design, construction management, and residential development across Vancouver's most prestigious projects.",
    },
    {
      stat: "PMP",
      unit: "",
      label: "Project Management Professional",
      detail: "Globally recognised certification held by fewer than 1% of real estate agents — ensuring your project runs on time and on budget.",
    },
    {
      stat: "$5M",
      unit: "",
      label: "Liability Coverage",
      detail: "Full $5M coverage through My Project Team Management Corp. gives you peace of mind from purchase through to final renovation delivery.",
    },
  ];

  return (
    <section id="credentials" style={{
      background: "#F0F0F0",
      padding: "120px 10vw",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.22em", color: "#0A0A0A", fontWeight: 600, marginBottom: 20, fontFamily: "system-ui, sans-serif" }}>
          CREDENTIALS
        </div>
        <h2 style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontSize: "clamp(32px, 3.5vw, 52px)",
          fontWeight: 400,
          color: "#0A0A0A",
          margin: "0 0 64px 0",
          lineHeight: 1.15,
        }}>
          Built on expertise.<br />Backed by results.
        </h2>

        <div className="three-col-grid" style={{ gap: 32 }}>
          {credentials.map((c, i) => (
            <div key={i} style={{
              background: "#FFFFFF",
              padding: "48px 40px",
              borderTop: "2px solid #0A0A0A",
              position: "relative",
            }}>
              <div style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: 64,
                fontWeight: 300,
                color: "#0A0A0A",
                lineHeight: 1,
              }}>
                {c.stat}
                {c.unit && <span style={{ fontSize: 28, color: "#0A0A0A" }}>{c.unit}</span>}
              </div>
              <div style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                color: "#0A0A0A",
                fontWeight: 600,
                margin: "16px 0 12px",
                fontFamily: "system-ui, sans-serif",
              }}>
                {c.label.toUpperCase()}
              </div>
              <p style={{
                fontSize: 14,
                lineHeight: 1.75,
                color: "#4A4A4A",
                margin: 0,
                fontFamily: "system-ui, sans-serif",
              }}>
                {c.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
