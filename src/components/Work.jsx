import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SITE } from "../data/site";
import { REDUCED, pad } from "../lib/env";

function ProjectCard({ project, index, total, onOpen }) {
  const figRef = useRef(null);
  const imgUrl = `${import.meta.env.BASE_URL}imgs/${project.image}`;

  return (
    <article className="project" data-index={index} data-id={project.id}>
      <div className="project__meta-row">
        <span className="project__num mono">
          <b>{pad(index + 1)}</b>&nbsp;/&nbsp;{pad(total)}
        </span>
        <span className="mono">
          {project.category}
          {project.year ? `\u00A0\u00A0·\u00A0\u00A0${project.year}` : ""}
        </span>
      </div>

      <figure className="project__visual" ref={figRef}>
        <img
          src={imgUrl}
          alt={project.title}
          className="project__image"
        />
        <span className="project__role-tag">{project.teamNote || "Engineering Project"}</span>
      </figure>

      <button
        className="project__open"
        data-cursor="view"
        aria-label={`Open case study: ${project.title}`}
        onClick={(e) => onOpen(index, e.currentTarget)}
      ></button>

      <figcaption className="project__caption">
        <h3 className="project__name">{project.title}</h3>
        <ul className="project__tags mono">
          {project.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
        <p className="project__outcome">{project.about[0]}</p>
      </figcaption>
    </article>
  );
}

export default function Work({ onOpenCase }) {
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const currentRef = useRef(null);

  // desktop: pin the section and scroll the track horizontally
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (REDUCED) {
      document.body.classList.add("no-pin");
      return;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 861px)", () => {
      const getDistance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: "#workPinWrap",
          start: "top top",
          end: () => "+=" + getDistance(),
          pin: true,
          scrub: 0.9,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate(self) {
            if (fillRef.current) {
              fillRef.current.style.transform = `scaleX(${self.progress})`;
            }
            const idx = Math.min(
              SITE.projects.length - 1,
              Math.floor(self.progress * SITE.projects.length)
            );
            const label = pad(idx + 1);
            if (currentRef.current && currentRef.current.textContent !== label) {
              currentRef.current.textContent = label;
            }
          },
        },
      });
    });

    return () => mm.revert();
  }, []);

  const total = SITE.projects.length;

  return (
    <section className="work" id="work" aria-label="Selected systems and architecture">
      <div className="work__pin-wrap" id="workPinWrap">
        <header className="work__head">
          <h2 className="sec-title">
            <span className="line-mask"><span className="line">FEATURED</span></span>
            <span className="line-mask">
              <span className="line line--indent accent-word">
                SYSTEMS<sup className="mono sec-title__count">({pad(total)})</sup>
              </span>
            </span>
          </h2>
          <p className="mono work__hint">
            SCROLL HORIZONTALLY{"\u00A0\u00A0"}{"\u2192"}{"\u00A0\u00A0"}
            <span className="accent">CLICK A CARD TO INSPECT ARCHITECTURAL CASE STUDY</span>
          </p>
        </header>

        <div className="work__viewport">
          <div className="work__track" id="workTrack" ref={trackRef}>
            {SITE.projects.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                total={total}
                onOpen={onOpenCase}
              />
            ))}
          </div>

          <footer className="work__progress" aria-hidden="true">
            <span className="mono" ref={currentRef}>01</span>
            <div className="work__bar"><span ref={fillRef}></span></div>
            <span className="mono">{pad(total)}</span>
          </footer>
        </div>
      </div>
    </section>
  );
}
