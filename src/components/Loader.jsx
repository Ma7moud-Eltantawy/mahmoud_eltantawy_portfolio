import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SITE } from "../data/site";
import { REDUCED, pad } from "../lib/env";

export default function Loader({ onDone }) {
  const rootRef = useRef(null);
  const countRef = useRef(null);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useLayoutEffect(() => {
    const loader = rootRef.current;

    const finish = () => {
      document.body.classList.remove("is-locked");
      doneRef.current();
    };

    if (REDUCED) {
      finish();
      return;
    }

    document.body.classList.add("is-locked");

    const letters = loader.querySelectorAll(".loader__name span");
    const count = { v: 0 };

    try {
      gsap.timeline({
        defaults: { ease: "expo.out" },
        onComplete: finish,
      })
        .to(letters, { opacity: 1, y: 0, duration: 0.85, stagger: 0.045 }, 0.05)
        .fromTo(".loader__rule span", { scaleX: 0 },
          { scaleX: 1, duration: 1.05, ease: "power3.inOut" }, 0.15)
        .to(count, {
          v: 100, duration: 1, ease: "power2.inOut",
          onUpdate() {
            if (countRef.current) countRef.current.textContent = pad(Math.round(count.v));
          },
        }, 0.15)
        .fromTo(".loader__roles", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.55 }, 0.42)
        .to(".loader__inner, .loader__count",
          { opacity: 0, y: -24, duration: 0.4, ease: "power2.in" }, "+=0.22")
        .to(loader, { yPercent: -100, duration: 0.72, ease: "power4.inOut" }, "-=0.08");
    } catch (e) {
      console.error('[Loader] error:', e);
      finish();
    }
  }, []);

  return (
    <div className="loader" ref={rootRef} aria-hidden="true">
      <div className="loader__inner">
        <p className="loader__name" id="loaderName">
          {SITE.name.split("").map((ch, i) => (
            <span key={i}>{ch === " " ? "\u00A0" : ch}</span>
          ))}
        </p>
        <div className="loader__rule"><span></span></div>
        <p className="loader__roles mono">SOFTWARE ENGINEER{"\u00A0\u00A0"}/{"\u00A0\u00A0"}SYSTEM DESIGN ARCHITECT</p>
      </div>
      <p className="loader__count mono" ref={countRef}>00</p>
    </div>
  );
}
