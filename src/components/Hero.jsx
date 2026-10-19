import { PROFILE } from "../data/cv";
import { asset, useScrollProgress } from "../lib/hooks";
import Icon from "./Icon";

export default function Hero() {
  // 0 at rest, 1 once the hero has scrolled most of the way out
  const ref = useScrollProgress("--out", { start: 0, end: -0.85 });

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__aurora" aria-hidden="true">
        <span className="orb orb--a" />
        <span className="orb orb--b" />
        <span className="orb orb--c" />
      </div>

      <div className="hero__content container">
        <div className="hero__portrait intro" style={{ "--delay": "0ms" }}>
          <img src={asset(PROFILE.photo)} alt={`Portrait of ${PROFILE.name}`} width="400" height="400" fetchpriority="high" />
        </div>

        <p className="hero__badge intro" style={{ "--delay": "80ms" }}>
          <span className="live-dot" aria-hidden="true" />
          {PROFILE.current.role} at <strong>{PROFILE.current.company}</strong>
        </p>

        <h1 className="hero__name intro" style={{ "--delay": "160ms" }}>
          {PROFILE.name}
        </h1>

        <p className="hero__tagline intro" style={{ "--delay": "240ms" }}>
          <span className="gradient-text">Flutter apps. API gateways.</span>
          <br />
          Engineered end&nbsp;to&nbsp;end.
        </p>

        <ul className="hero__titles intro" style={{ "--delay": "320ms" }} aria-label="Roles">
          {PROFILE.titles.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="hero__ctas intro" style={{ "--delay": "400ms" }}>
          <a className="btn btn--primary btn--lg" href="#projects">
            View my work
          </a>
          <a className="btn btn--ghost btn--lg" href={asset(PROFILE.cv)} download>
            <Icon name="download" size={18} /> Download CV
          </a>
        </div>

        <p className="hero__meta intro" style={{ "--delay": "480ms" }}>
          <Icon name="pin" size={16} /> {PROFILE.location}
        </p>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to About">
        <span />
      </a>
    </section>
  );
}
