import { useState } from "react";
import { NAV, PROFILE } from "../data/cv";
import { asset } from "../lib/hooks";
import Reveal from "./Reveal";
import Icon from "./Icon";

const CHANNELS = [
  { icon: "call", label: "Phone", value: PROFILE.phone, href: PROFILE.phoneHref },
  { icon: "linkedin", label: "LinkedIn", value: "mahmoud-eltantawy", href: PROFILE.linkedin, external: true },
  { icon: "github", label: "GitHub", value: "ma7moud-eltantawy", href: PROFILE.github, external: true },
  { icon: "pin", label: "Location", value: "Al Khobar, Saudi Arabia" },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact__aurora" aria-hidden="true" />
      <div className="container contact__inner">
        <Reveal as="p" className="eyebrow eyebrow--onDark">Contact</Reveal>
        <Reveal as="h2" className="contact__title" delay={60}>
          Let's build something
          <br />
          <span className="gradient-text gradient-text--dark">great together.</span>
        </Reveal>
        <Reveal as="p" className="contact__lead" delay={120}>
          Open to Software Engineering, Flutter, and API Gateway roles. The fastest way to reach me is email.
        </Reveal>

        <Reveal className="contact__email" delay={180}>
          <a className="btn btn--primary btn--lg" href={`mailto:${PROFILE.email}`}>
            <Icon name="mail" size={18} /> {PROFILE.email}
          </a>
          <button type="button" className="btn btn--glass btn--lg" onClick={copy} aria-live="polite">
            <Icon name={copied ? "tick" : "copy"} size={18} /> {copied ? "Copied" : "Copy email"}
          </button>
        </Reveal>

        <div className="channels">
          {CHANNELS.map((c, i) => {
            const body = (
              <>
                <span className="channel__icon"><Icon name={c.icon} size={20} /></span>
                <span className="channel__label">{c.label}</span>
                <span className="channel__value">{c.value}</span>
              </>
            );
            return (
              <Reveal key={c.label} delay={220 + i * 60} className="channel-wrap">
                {c.href ? (
                  <a className="channel" href={c.href} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {body}
                  </a>
                ) : (
                  <div className="channel">{body}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__links" aria-label="Footer">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
          <a href={asset(PROFILE.cv)} download>Résumé (PDF)</a>
        </nav>
        <div className="footer__bottom">
          <p>Copyright © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <p>{PROFILE.location}</p>
        </div>
      </div>
    </footer>
  );
}
