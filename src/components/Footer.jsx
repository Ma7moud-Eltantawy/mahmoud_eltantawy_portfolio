import { SITE } from "../data/site";
import Icon from "./Icons";

export default function Footer() {
  const links = [];
  if (SITE.github) links.push({ label: "GITHUB", href: SITE.github });
  if (SITE.linkedin) links.push({ label: "LINKEDIN", href: SITE.linkedin });
  if (SITE.cv) links.push({ label: "RESUME / CV", href: SITE.cv });

  return (
    <footer className="footer">
      <div className="footer__brand">
        <p className="footer__brand-name">{SITE.name}</p>
        <p className="mono footer__note">
          {SITE.role} — BUILT FROM SCRATCH, © {new Date().getFullYear()}
        </p>
      </div>

      <ul className="footer__links mono">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noopener" data-cursor="link">{l.label}</a>
          </li>
        ))}
      </ul>

      <a href="#top" className="mono footer__top" data-cursor="link">BACK TO TOP&nbsp;&nbsp;<Icon name="arrowUpRight" /></a>
    </footer>
  );
}