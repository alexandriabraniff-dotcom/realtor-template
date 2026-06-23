"use client";
import { config } from "@/lib/config";

export default function Footer() {
  const { agent, footer, designer } = config;

  return (
    <footer className="footer">
      <div className="footer-inner-wrap">
        <div className="footer-inner" style={{ marginBottom: 48 }}>
          <div>
            <div className="footer-logo-name">{agent.name.toUpperCase()}</div>
            <div className="footer-logo-sub">
              {agent.title} | {agent.brokerage}
            </div>
            <p className="footer-tagline">{footer.tagline}</p>
          </div>

          <div className="footer-cols">
            {footer.columns.map((col) => (
              <div key={col.heading}>
                <div className="footer-col-heading">
                  {col.heading.toUpperCase()}
                </div>
                {col.links.map((link) => (
                  <div key={link.label} className="footer-col-link-wrap">
                    <a href={link.href} className="footer-col-link">
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} {agent.name}. All rights reserved.{" "}
            {footer.legal}
          </div>
          <div className="footer-credit">
            Website designed by {designer.name}
          </div>
        </div>
      </div>
    </footer>
  );
}
