import { EXPERIENCE } from "../data/cv";
import { useScrollProgress } from "../lib/hooks";
import Reveal, { SectionHeader } from "./Reveal";
import Icon from "./Icon";

export default function Experience() {
  const railRef = useScrollProgress("--rail", { line: 0.55 });

  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've shipped."
          lead="Three teams across Saudi Arabia and Egypt, from fintech and POS to enterprise ERP and API gateways."
        />

        <ol className="timeline" ref={railRef}>
          {EXPERIENCE.map((job, i) => (
            <li key={job.company} className={`timeline__item ${job.current ? "is-current" : ""}`}>
              <span className="timeline__dot" aria-hidden="true" />
              <Reveal className="timeline__when" delay={40}>
                <span className="timeline__dates">
                  {job.start} – {job.end}
                </span>
                <span className="timeline__where">
                  <Icon name="pin" size={14} /> {job.location}
                </span>
              </Reveal>

              <Reveal className="job card" delay={100 + i * 20}>
                <div className="job__head">
                  <div>
                    <h3 className="job__role">{job.role}</h3>
                    <p className="job__company">
                      {job.companyUrl ? (
                        <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">
                          {job.company} <Icon name="arrowUpRight" size={14} />
                        </a>
                      ) : (
                        job.company
                      )}
                    </p>
                  </div>
                  {job.current ? <span className="pill pill--live">Now</span> : null}
                </div>
                <ul className="job__bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <ul className="chips">
                  {job.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
