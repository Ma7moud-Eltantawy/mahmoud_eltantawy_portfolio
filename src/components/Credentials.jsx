import { CERTIFICATIONS, EDUCATION, PROFILE, SPECIALIZATION } from "../data/cv";
import Reveal, { SectionHeader } from "./Reveal";
import Icon from "./Icon";

function Verify({ url, label = "Verify" }) {
  if (!url) return <span className="cert__plain">Certificate of completion</span>;
  return (
    <a className="link-more" href={url} target="_blank" rel="noopener noreferrer">
      {label} <Icon name="arrowUpRight" size={14} stroke={2} />
    </a>
  );
}

export default function Credentials() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <SectionHeader
          eyebrow="Certifications & Education"
          title="Always learning."
          lead="A university specialization in the software development lifecycle, plus focused courses in Flutter, APIs, and project management."
        />

        <Reveal className="spec">
          <div className="spec__intro">
            <span className="spec__badge">
              <Icon name="award" size={28} />
            </span>
            <p className="eyebrow eyebrow--onDark">
              {SPECIALIZATION.issuer} · {SPECIALIZATION.platform}
            </p>
            <h3 className="spec__title">{SPECIALIZATION.title}</h3>
            <p className="spec__date">Completed {SPECIALIZATION.date}</p>
            <a className="btn btn--light btn--sm" href={SPECIALIZATION.url} target="_blank" rel="noopener noreferrer">
              View specialization <Icon name="arrowUpRight" size={14} stroke={2} />
            </a>
          </div>
          <ol className="spec__courses">
            {SPECIALIZATION.courses.map((c, i) => (
              <li key={c.title}>
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                  <span className="spec__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="spec__course">{c.title}</span>
                  <Icon name="chevronRight" size={16} stroke={2} />
                </a>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="certs">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} className="cert card" delay={(i % 3) * 70}>
              <span className={`cert__mark tone-${c.tone}`} aria-hidden="true">{c.mark}</span>
              <h4 className="cert__title">{c.title}</h4>
              <p className="cert__issuer">
                {c.issuer}
                {c.date ? <> · {c.date}</> : null}
              </p>
              <Verify url={c.url} />
            </Reveal>
          ))}
        </div>

        <div className="edu">
          <Reveal className="edu__card card">
            <span className="skill__icon"><Icon name="cap" size={22} /></span>
            <p className="eyebrow">Education · {EDUCATION.years}</p>
            <h3 className="edu__title">{EDUCATION.degree}</h3>
            <p className="edu__school">{EDUCATION.school}</p>
            <p className="edu__meta">
              <span className="pill pill--accent">Grade: {EDUCATION.grade}</span>
              <span><Icon name="pin" size={14} /> {EDUCATION.location}</span>
            </p>
          </Reveal>
          <Reveal className="edu__card card" delay={90}>
            <span className="skill__icon"><Icon name="globe" size={22} /></span>
            <p className="eyebrow">Languages</p>
            <ul className="langs">
              {PROFILE.languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
