import { SKILLS } from "../data/cv";
import Reveal, { SectionHeader } from "./Reveal";
import Icon from "./Icon";

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="Skills"
          title="The toolbox."
          lead="From the Flutter widget tree to the gateway in front of your microservices."
        />
        <div className="bento">
          {SKILLS.map((s, i) => (
            <Reveal key={s.key} className={`skill card skill--${s.key} ${s.wide ? "skill--wide" : ""}`} delay={(i % 4) * 70}>
              <div className="skill__head">
                <span className="skill__icon">
                  <Icon name={s.icon} size={22} />
                </span>
                <span className="skill__count">{s.items.length}</span>
              </div>
              <h3 className="skill__title">{s.title}</h3>
              <ul className="chips">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
