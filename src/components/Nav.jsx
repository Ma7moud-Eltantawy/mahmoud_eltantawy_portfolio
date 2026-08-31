import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE } from "../data/site";

function applyTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  try { localStorage.setItem("theme", mode); } catch (e) { /* noop */ }
}

const LINKS = [
  { id: "work", label: "WORK" },
  { id: "about", label: "ABOUT" },
  { id: "stack", label: "SKILLS" },
  { id: "certificate", label: "CREDENTIALS" },
  { id: "journey", label: "JOURNEY" },
  { id: "contact", label: "CONTACT" },
];

export default function Nav({ caseActive, caseNum, introPlay, onBack, onNext }) {
  const [mode, setMode] = useState(
    () => document.documentElement.getAttribute("data-theme") || "light"
  );
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const clockRef = useRef(null);
  const progressRef = useRef(null);

  /* live clock */
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const p = (n) => String(n).padStart(2, "0");
      if (clockRef.current) {
        clockRef.current.textContent = `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* scroll state + reading progress */
  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let st;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && progressRef.current) {
      st = gsap.fromTo(progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1, ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.4 },
        });
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      st && st.scrollTrigger && st.scrollTrigger.kill();
    };
  }, []);

  /* section spy */
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-38% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  /* entrance */
  useLayoutEffect(() => {
    if (introPlay) return;
    return;
  }, [introPlay]);

  useEffect(() => {
    if (!introPlay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(".nav__logo, .nav__links li, .nav__right > *", {
      autoAlpha: 0, y: -10, duration: 0.7, stagger: 0.055, ease: "expo.out", clearProps: "all",
    });
  }, [introPlay]);

  const toggleTheme = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    applyTheme(next);
  };

  return (
    <header className={"nav" + (scrolled ? " is-scrolled" : "")} id="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__logo" data-cursor="link">
          MAHMOUD&nbsp;EL-TANTAWY<span className="nav__sq" aria-hidden="true"></span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <button
            className="nav__back" data-cursor="link"
            hidden={!caseActive} onClick={onBack}
          >
            {"\u2190"}&nbsp;BACK
          </button>
          <span className="nav__case-label mono" hidden={!caseActive}>
            PROJECT&nbsp;<b className="accent">{String(caseNum).padStart(2, "0")}</b>
          </span>
          <ul id="navMenu" hidden={caseActive}>
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={"#" + l.id}
                  data-cursor="link"
                  className={active === l.id ? "is-active" : ""}
                  aria-current={active === l.id ? "true" : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="nav__next mono" data-cursor="link"
            hidden={!caseActive} onClick={onNext}
          >
            NEXT PROJECT&nbsp;{"\u2192"}
          </button>
        </nav>

        <div className="nav__right">
          <button
            className="nav__theme" data-cursor="link"
            onClick={toggleTheme}
            aria-pressed={mode === "dark"}
            aria-label="Toggle dark / light theme"
            title="Toggle theme"
          >
            <span className="nav__theme-track"><span className="nav__theme-thumb"></span></span>
          </button>
          <p className="nav__clock mono" aria-hidden="true" hidden={caseActive}>
            <span className="nav__clock-dot" aria-hidden="true"></span>
            <b ref={clockRef}>00:00:00</b>&nbsp;LOCAL
          </p>
        </div>
      </div>
      <span className="nav__progress" aria-hidden="true"><span ref={progressRef}></span></span>
    </header>
  );
}
