import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SITE } from "../data/site";
import { REDUCED, pad } from "../lib/env";

export default function CaseOverlay({
  index,
  closing,
  lastTrigger,
  expandRef,
  onCloseFinished,
  onNext,
  onBackRequest,
}) {
  const [displayIndex, setDisplayIndex] = useState(index);
  const [revealed, setRevealed] = useState(false);

  const overlayRef = useRef(null);
  const scrollerRef = useRef(null);
  const displayRef = useRef(index);
  const firstContentRef = useRef(true);
  const exitStartedRef = useRef(false);

  const project = SITE.projects[displayIndex];
  const total = SITE.projects.length;
  const next = SITE.projects[(displayIndex + 1) % total];
  const num = pad(displayIndex + 1);
  const imgDetailUrl = `${import.meta.env.BASE_URL}imgs/${project.imageDetail}`;

  const finishOpen = () => {
    setRevealed(true);
    if (scrollerRef.current) scrollerRef.current.focus({ preventScroll: true });
  };

  /* ---------- entrance: card → fullscreen expand transition ---------- */
  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    const expand = expandRef.current;

    if (REDUCED || !expand) {
      setRevealed(true);
      if (scrollerRef.current) scrollerRef.current.focus({ preventScroll: true });
      return;
    }

    const visual = document.querySelector(
      `.project[data-id="${project.id}"] .project__visual`
    );

    gsap.set(overlay, { autoAlpha: 1 });

    if (!visual) {
      setRevealed(true);
      if (scrollerRef.current) scrollerRef.current.focus({ preventScroll: true });
      return;
    }

    const r = visual.getBoundingClientRect();
    const ghost = document.createElement("div");
    const img = document.createElement("img");
    img.src = imgDetailUrl;
    img.alt = project.title;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    ghost.appendChild(img);
    Object.assign(ghost.style, {
      left: r.left + "px", top: r.top + "px",
      width: r.width + "px", height: r.height + "px",
    });
    expand.appendChild(ghost);
    expand.style.visibility = "visible";

    const tl = gsap.timeline({
      onComplete() { expand.style.visibility = "hidden"; ghost.remove(); },
    })
      .to(ghost, {
        left: 0, top: 0, width: window.innerWidth, height: window.innerHeight,
        duration: 0.9, ease: "expo.inOut",
      }, 0)
      .add(finishOpen, 0.62);

    return () => tl.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.imageDetail]);

  /* ---------- per-content init (runs on mount and on next-project swap) ---------- */
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollTop = 0;

    const isFirst = firstContentRef.current;
    firstContentRef.current = false;

    if (!REDUCED) {
      // slide the swapped content back in (next-project navigation only)
      if (!isFirst) {
        gsap.fromTo(scroller.querySelector(".case__inner"),
          { autoAlpha: 0, y: 48 },
          { autoAlpha: 1, y: 0, duration: 0.75, ease: "expo.out" });
      }
      gsap.fromTo(scroller.querySelectorAll("[data-c-hero]"),
        { autoAlpha: 0, y: 50 },
        { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.08, ease: "expo.out", delay: 0.1 });

      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            io.unobserve(e.target);
            gsap.fromTo(e.target, { autoAlpha: 0, y: 40 },
              { autoAlpha: 1, y: 0, duration: 1, ease: "expo.out" });
          }
        });
      }, { root: scroller, threshold: 0.1 });
      scroller.querySelectorAll("[data-c-reveal]").forEach((el) => io.observe(el));
      return () => io.disconnect();
    }
  }, [displayIndex]);

  /* ---------- next-project swap ---------- */
  useEffect(() => {
    if (index === displayRef.current) return;

    if (REDUCED || !scrollerRef.current) {
      displayRef.current = index;
      setDisplayIndex(index);
      return;
    }

    const inner = scrollerRef.current.querySelector(".case__inner");
    gsap.timeline()
      .to(inner, { autoAlpha: 0, y: -32, duration: 0.35, ease: "power2.in" })
      .add(() => {
        displayRef.current = index;
        setDisplayIndex(index);
      });
  }, [index]);

  /* ---------- exit: fade + reverse expand transition ---------- */
  useEffect(() => {
    if (!closing || exitStartedRef.current) return;
    exitStartedRef.current = true;

    const overlay = overlayRef.current;
    const expand = expandRef.current;

    const finish = () => onCloseFinished();

    if (REDUCED || !expand) { finish(); return; }

    gsap.to(overlay, { autoAlpha: 0, duration: 0.35, ease: "power2.in", onComplete: finish });

    const target = lastTrigger &&
      lastTrigger.closest(".project") &&
      lastTrigger.closest(".project").querySelector(".project__visual");

    if (target && project) {
      const r = target.getBoundingClientRect();
      const ghost = document.createElement("div");
      const img = document.createElement("img");
      img.src = imgDetailUrl;
      img.alt = project.title;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      ghost.appendChild(img);
      Object.assign(ghost.style, {
        left: "0px", top: "0px",
        width: window.innerWidth + "px", height: window.innerHeight + "px",
      });
      expand.appendChild(ghost);
      expand.style.visibility = "visible";
      gsap.to(ghost, {
        left: r.left, top: r.top, width: r.width, height: r.height,
        duration: 0.85, ease: "expo.inOut", delay: 0.05,
        onComplete() { expand.style.visibility = "hidden"; ghost.remove(); },
      });
    }
  }, [closing, project.imageDetail]);

  return (
    <div
      className={"case" + (revealed ? " is-open" : "")}
      id="caseOverlay"
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Project case study"
    >
      <article className="case__scroll" id="caseScroll" ref={scrollerRef} tabIndex="-1" data-lenis-prevent>
        <header className="case__head">
          <button className="case__close" id="caseClose" data-cursor="link" onClick={onBackRequest}>
            {"\u2190"}&nbsp;BACK
          </button>
          <span className="case__label mono">
            SYSTEM&nbsp;<b className="accent">{num}</b>/{pad(total)}{"\u00A0\u00A0"}—{"\u00A0\u00A0"}{project.title}
          </span>
          <button className="case__next-btn mono" id="caseNextTop" data-cursor="link" onClick={onNext}>
            NEXT&nbsp;{"\u2192"}
          </button>
        </header>

        <div className="case__inner">
          <section className="case__hero">
            <p className="case__num mono" data-c-hero>
              <b>{num}</b>{"\u00A0\u00A0"}—{"\u00A0\u00A0"}{project.category}
            </p>
            <h1 className="case__title" data-c-hero>{project.title}</h1>
            <div className="case__meta" data-c-hero>
              <div>
                <h3>ROLE & CONTEXT</h3>
                <p>{project.teamNote || "Engineering Project"}</p>
              </div>
              <div>
                <h3>YEAR</h3>
                <p>{project.year || "—"}</p>
              </div>
              <div>
                <h3>STACK</h3>
                <ul>
                  {project.stack.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </div>
            <a
              className="case__repo-btn btn btn--solid"
              href={project.repo}
              target="_blank"
              rel="noopener"
              data-c-hero
              data-cursor="link"
            >
              VIEW ON GITHUB{"\u00A0\u00A0"}{"\u2197"}
            </a>
          </section>

          <figure
            className="case__figure"
            data-c-hero
            aria-hidden="true"
          >
            <img
              src={imgDetailUrl}
              alt={project.title}
              className="case__image"
            />
          </figure>

          <section className="case-section" id="c-about" data-c-reveal>
            <span className="case-section__index mono">ARCHITECTURE&nbsp;/&nbsp;{project.category}</span>
            <div>
              {project.about.map((para, i) => (
                <p className="body" key={i} style={{ marginBottom: "1rem" }}>{para}</p>
              ))}
              <ul className="case__tags mono" style={{ marginTop: "1.5rem" }}>
                {project.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </section>

          <button
            className="next"
            id="caseNext"
            data-cursor="view"
            aria-label={`Open next project: ${next.title}`}
            onClick={onNext}
          >
            <p className="next__hint mono">NEXT SYSTEM CASE STUDY{"\u00A0\u00A0"}{"\u2192"}</p>
            <p className="next__title">{next.title}</p>
          </button>
        </div>
      </article>
    </div>
  );
}
