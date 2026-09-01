import { useEffect, useRef, useState } from "react";
import { SITE } from "../data/site";
import "./contact.css";

export default function Contact() {
  const [type, setType] = useState(SITE.contact.types[0].key);
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus("PLEASE FILL IN ALL REQUIRED FIELDS.");
      form.reportValidity();
      return;
    }
    const fd = new FormData(form);
    const typeLabel = (SITE.contact.types.find((t) => t.key === fd.get("projectType")) || {}).label || "";
    const subject = encodeURIComponent(`Engineering Inquiry — ${fd.get("name")} · ${typeLabel}`);
    const body = encodeURIComponent(`Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\nCompany: ${fd.get("company") || "N/A"}\nTopic: ${typeLabel}\n\nMessage:\n${fd.get("message")}`);
    window.location.href = `mailto:${SITE.contact.email}?subject=${subject}&body=${body}`;
    setStatus("OPENING YOUR MAIL CLIENT DIRECTLY TO MAHMOUD...");
  };

  return (
    <section className="contact-classic" id="contact" aria-label="Contact">
      
      {/* Wave transition banner */}
      <div className="contact-wave">
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path 
            fill="var(--coal, #090d12)" 
            d="M0,0 L0,300 C250,200 450,400 720,300 C990,200 1190,400 1440,300 L1440,0 Z">
          </path>
        </svg>
      </div>

      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <p className="mono contact-label">CONTACT&nbsp;&nbsp;<span className="accent">/05</span></p>
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-subtitle">{SITE.contact.sub}</p>
        </div>

        {/* Floating Card */}
        <div className="contact-card">
          <div className="card-header">
            <p>Direct inquiry to <strong>{SITE.contact.email}</strong> or reach out via WhatsApp/Phone at <strong>{SITE.contact.phone}</strong>.</p>
          </div>

          <form className="classic-form" ref={formRef} noValidate onSubmit={onSubmit}>
            
            <div className="form-grid">
              <div className="input-group">
                <label>Full name <span className="req">*</span></label>
                <input type="text" name="name" required placeholder="Type your name" />
              </div>

              <div className="input-group">
                <label>Email address <span className="req">*</span></label>
                <input type="email" name="email" required placeholder="Type your email" />
              </div>

              <div className="input-group">
                <label>Company / Team</label>
                <input type="text" name="company" placeholder="Company or organization (optional)" />
              </div>

              <div className="input-group">
                <label>Topic / Domain <span className="req">*</span></label>
                <div className="select-wrapper-classic">
                  <select name="projectType" value={type} onChange={(e) => setType(e.target.value)}>
                    {SITE.contact.types.map((t) => (
                      <option key={t.key} value={t.key}>{t.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="input-group message-group">
              <label>Message <span className="req">*</span></label>
              <textarea name="message" rows="4" required placeholder="Describe your software engineering, system architecture, or consulting project..."></textarea>
            </div>

            <div className="form-action">
              <button type="submit" className="submit-btn">Send Message</button>
              {status && <p className="mono status-msg">{status}</p>}
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
