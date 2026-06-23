"use client";
import { config } from "@/lib/config";

export default function Contact() {
  const { agent } = config;
  const { contact, social } = agent;
  const socialLinks = [
    { label: "Instagram", href: social.instagram },
    { label: "YouTube", href: social.youtube },
    { label: "Facebook", href: social.facebook },
    { label: "Twitter", href: social.twitter },
  ];

  return (
    <section id="contact" className="contact">
      <div className="two-col-grid contact-inner">
        {/* Left: form */}
        <div>
          <div className="contact-label">GET IN TOUCH</div>
          <h2 className="contact-heading">
            Ready to buy with
            <br />
            confidence?
          </h2>

          <form className="contact-form">
            {["Full Name", "Email Address", "Phone Number"].map((field) => (
              <div key={field}>
                <label className="contact-field-label">
                  {field.toUpperCase()}
                </label>
                <input
                  type="text"
                  placeholder={field}
                  className="contact-input"
                />
              </div>
            ))}
            <div>
              <label className="contact-field-label">MESSAGE</label>
              <textarea
                rows={4}
                placeholder="Tell me about what you're looking for..."
                className="contact-textarea"
              />
            </div>
            <button type="submit" className="contact-submit">
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right: contact info */}
        <div className="contact-right-pad">
          <div className="contact-info">
            <div className="contact-info-block">
              <div className="contact-info-label">PHONE</div>
              <div className="contact-info-value">{contact.phone}</div>
            </div>
            <div className="contact-info-block">
              <div className="contact-info-label">EMAIL</div>
              <div
                className="contact-info-value"
                style={{ wordBreak: "break-all" }}
              >
                {contact.email}
              </div>
            </div>
            <div className="contact-info-block">
              <div className="contact-info-label">OFFICE</div>
              <div className="contact-info-address">
                {contact.address.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < contact.address.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
            <div className="contact-info-block">
              <div className="contact-info-label">FOLLOW</div>
              <div className="contact-social-links">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} className="contact-social-link">
                    {s.label.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
