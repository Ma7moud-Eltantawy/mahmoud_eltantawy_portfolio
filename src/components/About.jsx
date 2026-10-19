import { useEffect, useState } from "react";
import { PILLARS, STATS, SUMMARY } from "../data/cv";
import { REDUCED, useInView, useScrollProgress } from "../lib/hooks";
import Reveal from "./Reveal";
import Icon from "./Icon";

// the first sentence becomes the statement; the remainder reads as body copy
const cut = SUMMARY.indexOf(". ") + 1;
const LEAD = SUMMARY.slice(0, cut);
const REST = SUMMARY.slice(cut + 1);

function Counter({ value, prefix = "", suffix = "" }) {
  const [ref, inView] = useInView({ threshold: 0.6 });
  const [n, setN] = useState(REDUCED ? value : 0);

  useEffect(() => {
    if (!inView || REDUCED) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / 1400);
      setN(Math.round(value * (1 - Math.pow(1 - k, 4))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="stat__value">
      {prefix}
      {n}
      <span className="stat__suffix">{suffix}</span>
    </span>
  );
}

/* Apple-style statement: words light up as the paragraph scrolls through the viewport. */
function ScrollStatement({ text }) {
  const ref = useScrollProgress("--p", { start: 0.85, end: 0.2 });
  const words = text.split(" ");
  return (
    <p ref={ref} className="statement" style={{ "--n": words.length }}>
      {words.map((w, i) => (
        <span key={i} style={{ "--i": i }}>
          {w}{" "}
        </span>
      ))}
    </p>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="p" className="eyebrow">About</Reveal>
        <ScrollStatement text={LEAD} />
        <Reveal as="p" className="summary-rest">{REST}</Reveal>

        <div className="stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} className="stat card" delay={i * 80}>
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              <span className="stat__label">{s.label}</span>
            </Reveal>
          ))}
        </div>

        <div className="pillars">
          {PILLARS.map((p, i) => (
            <Reveal key={p.key} className={`pillar pillar--${p.key}`} delay={i * 100}>
              <div className="pillar__glow" aria-hidden="true" />
              <span className="pillar__icon">
                <Icon name={p.key === "mobile" ? "phone" : "gateway"} size={26} />
              </span>
              <p className="pillar__eyebrow">{p.eyebrow}</p>
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__body">{p.body}</p>
              <ul className="chips chips--dark">
                {p.chips.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
