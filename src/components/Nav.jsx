import { useEffect, useState } from "react";
import { NAV, PROFILE } from "../data/cv";
import { asset, useScrollSpy, useTheme } from "../lib/hooks";
import Icon from "./Icon";

const IDS = NAV.map((n) => n.id);

export default function Nav() {
  const active = useScrollSpy(IDS);
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="nav__bar container">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)} aria-label={`${PROFILE.name}, back to top`}>
          <span className="nav__mono" aria-hidden="true">ME</span>
          <span className="nav__name">{PROFILE.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? "is-active" : ""}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light appearance" : "Switch to dark appearance"}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} size={18} />
          </button>
          <a className="btn btn--primary btn--sm nav__cv" href={asset(PROFILE.cv)} download>
            Résumé
          </a>
          <button
            type="button"
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="sheet-menu" aria-hidden={!open} inert={!open}>
        <nav className="container" aria-label="Mobile">
          {NAV.map((n, i) => (
            <a key={n.id} href={`#${n.id}`} style={{ "--i": i }} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a className="sheet-menu__cv" href={asset(PROFILE.cv)} download style={{ "--i": NAV.length }}>
            <Icon name="download" size={18} /> Download Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
