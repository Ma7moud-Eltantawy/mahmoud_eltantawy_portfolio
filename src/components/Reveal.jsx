import { useInView } from "../lib/hooks";

/* Fades and lifts its children into place the first time they scroll into view. */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ ...style, "--delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function SectionHeader({ eyebrow, title, lead, align = "left" }) {
  return (
    <header className={`section-head section-head--${align}`}>
      {eyebrow ? <Reveal as="p" className="eyebrow">{eyebrow}</Reveal> : null}
      <Reveal as="h2" className="section-title" delay={60}>{title}</Reveal>
      {lead ? <Reveal as="p" className="section-lead" delay={120}>{lead}</Reveal> : null}
    </header>
  );
}
