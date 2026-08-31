import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TOUCH } from "../lib/env";

export default function Cursor() {
  const rootRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    if (TOUCH) return;
    const cursor = rootRef.current;
    const label = labelRef.current;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.32, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.32, ease: "power3" });

    const onMove = (e) => {
      cursor.style.opacity = "1";
      xTo(e.clientX); yTo(e.clientY);
    };
    const onLeave = () => { cursor.style.opacity = "0"; };
    const onOver = (e) => {
      const t = e.target.closest("[data-cursor]");
      cursor.classList.remove("has-label", "is-link");
      if (!t) return;
      if (t.dataset.cursor === "view") {
        label.textContent = "EXPLORE";
        cursor.classList.add("has-label");
      } else {
        cursor.classList.add("is-link");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
    };
  }, []);

  return (
    <div className="cursor" ref={rootRef} aria-hidden="true">
      <span className="cursor__dot"></span>
      <span className="cursor__label mono" ref={labelRef}>EXPLORE</span>
    </div>
  );
}
