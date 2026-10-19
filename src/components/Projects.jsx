import { useEffect, useRef, useState } from "react";
import { OTHER_PROJECTS, PROJECTS, PROJECT_FILTERS } from "../data/cv";
import { asset } from "../lib/hooks";
import Reveal, { SectionHeader } from "./Reveal";
import Icon from "./Icon";

const CATEGORY_LABEL = Object.fromEntries(PROJECT_FILTERS.map((f) => [f.key, f.label]));

function StoreLink({ link, compact = false }) {
  if (!link) return null;
  const play = link.kind === "play";
  return (
    <a
      className={`store-link ${compact ? "store-link--compact" : ""}`}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      <Icon name={play ? "play" : "github"} size={compact ? 14 : 16} />
      <span>{play ? "Google Play" : "GitHub"}</span>
    </a>
  );
}

function ProjectSheet({ project, onClose }) {
  const closeRef = useRef(null);
  const [leaving, setLeaving] = useState(false);

  const close = () => setLeaving(true);

  // let the exit animation finish before unmounting
  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(onClose, 260);
    return () => clearTimeout(t);
  }, [leaving, onClose]);

  useEffect(() => {
    const prev = document.activeElement;
    closeRef.current?.focus();
    document.body.classList.add("menu-open");
    const onKey = (e) => e.key === "Escape" && setLeaving(true);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("menu-open");
      prev?.focus?.({ preventScroll: true });
    };
  }, []);

  return (
    <div className={`modal ${leaving ? "is-leaving" : ""}`} onClick={close}>
      <div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button ref={closeRef} type="button" className="modal__close icon-btn" onClick={close} aria-label="Close">
          <Icon name="close" size={18} />
        </button>
        <div className="modal__media">
          <img src={asset(project.image)} alt={`${project.title} preview`} />
        </div>
        <div className="modal__body">
          <p className="eyebrow">
            {CATEGORY_LABEL[project.category]}
            {project.status ? ` · ${project.status}` : ""}
          </p>
          <h3 id="sheet-title" className="modal__title">{project.title}</h3>
          <p className="modal__subtitle">{project.subtitle}</p>
          {project.role ? (
            <p className="modal__role">
              <Icon name="briefcase" size={16} /> Role: {project.role}
            </p>
          ) : null}
          <ul className="job__bullets">
            {project.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="modal__label">Technologies</p>
          <ul className="chips">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {project.link ? (
            <div className="modal__actions">
              <StoreLink link={project.link} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState(null);
  const visible = PROJECTS.filter((p) => filter === "all" || p.category === filter);
  const open = PROJECTS.find((p) => p.id === openId);
  const activeIndex = PROJECT_FILTERS.findIndex((f) => f.key === filter);

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title="Work that's out in the world."
          lead="Production apps on Google Play, gateway platforms, and QA programs, each built with the same care."
        />

        <Reveal className="segmented" role="tablist" aria-label="Filter projects" style={{ "--idx": activeIndex, "--count": PROJECT_FILTERS.length }}>
          <span className="segmented__thumb" aria-hidden="true" />
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              role="tab"
              aria-selected={filter === f.key}
              className={filter === f.key ? "is-active" : ""}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="projects" key={filter}>
          {visible.map((p, i) => (
            <Reveal key={p.id} className="project card" delay={(i % 2) * 90}>
              <button type="button" className="project__hit" onClick={() => setOpenId(p.id)} aria-label={`Learn more about ${p.title}`} />
              <div className="project__media">
                <img src={asset(p.image)} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="project__body">
                <p className="project__cat">
                  {CATEGORY_LABEL[p.category]}
                  {p.status ? <span className="pill">{p.status}</span> : null}
                </p>
                <h3 className="project__title">{p.title}</h3>
                <p className="project__subtitle">{p.subtitle}</p>
                <p className="project__desc">{p.bullets[0]}</p>
                <ul className="chips">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project__foot">
                  <span className="link-more">
                    Learn more <Icon name="chevronRight" size={14} stroke={2.2} />
                  </span>
                  <StoreLink link={p.link} compact />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="subhead">More projects</Reveal>
        <div className="minis">
          {OTHER_PROJECTS.map((p, i) => (
            <Reveal key={p.title} className="mini card" delay={i * 80}>
              <div className="mini__top">
                <h4>{p.title}</h4>
                {p.status ? <span className="pill">{p.status}</span> : null}
              </div>
              <p>{p.desc}</p>
              {p.link ? <StoreLink link={p.link} compact /> : null}
            </Reveal>
          ))}
        </div>
      </div>

      {open ? <ProjectSheet project={open} onClose={() => setOpenId(null)} /> : null}
    </section>
  );
}
