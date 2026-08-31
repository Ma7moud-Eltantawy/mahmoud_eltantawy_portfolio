import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REDUCED } from "./env";

export function initCounters(root) {
  if (!root) return [];
  const cleanups = [];

  root.querySelectorAll("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const pad2 = el.dataset.pad === "true";

    if (REDUCED) {
      el.textContent = pad2 ? String(target).padStart(2, "0") : String(target);
      return;
    }

    el.textContent = pad2 ? "00" : "0";
    const obj = { v: 0 };
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          v: target,
          duration: 1.6,
          ease: "power3.out",
          onUpdate() {
            const n = Math.round(obj.v);
            el.textContent = pad2 ? String(n).padStart(2, "0") : String(n);
          },
        }),
    });
    cleanups.push(() => st.kill());
  });

  return cleanups;
}
