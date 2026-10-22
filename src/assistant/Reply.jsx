import {
  CERTIFICATIONS,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECT_FILTERS,
  PROJECTS,
  SKILLS,
  SPECIALIZATION,
  STATS,
  SUMMARY,
} from "../data/cv";
import { asset } from "../lib/hooks";
import Icon from "../components/Icon";
import { OTHER } from "./engine.js";
import { STRINGS } from "./i18n.js";

/* Contextual UI ("GenUI") for assistant replies: each reply key maps to
   one small, purposeful block. Plain answers render as text only. */

const LEAD = SUMMARY.slice(0, SUMMARY.indexOf(". ") + 1);
const byId = Object.fromEntries(PROJECTS.map((p) => [p.id, p]));
const groupOf = Object.fromEntries(SKILLS.map((g) => [g.key, g]));
const handle = (url) => url.replace(/\/+$/, "").split("/").pop();

const whatsappLink = (text) =>
  `https://wa.me/${PROFILE.phone.replace(/\D/g, "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

const groupTitle = (key, t) => t.skillGroups?.[key] || groupOf[key]?.title || key;
const categoryLabel = (key, t) => t.categories?.[key] || PROJECT_FILTERS.find((f) => f.key === key)?.label || key;

/* — Blocks — */

function ProfileBlock({ t }) {
  const stats = [STATS[0], STATS[1], STATS[2]];
  return (
    <div className="a-card a-profile">
      <div className="a-profile__head">
        <img src={asset(PROFILE.photo)} alt="" width="48" height="48" />
        <div>
          <p className="a-profile__name">{t.profile.name}</p>
          <p className="a-muted">{t.profile.role}</p>
        </div>
      </div>
      <p className="a-profile__summary" dir="auto">{t.profile.summary || LEAD}</p>
      <dl className="a-stats">
        {stats.map((s, i) => (
          <div key={s.label}>
            <dt>{t.profile.stats[i]}</dt>
            <dd>
              {s.prefix}
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="a-meta">
        <Icon name="pin" size={14} /> {t.profile.location}
      </p>
    </div>
  );
}

function ExperienceBlock({ t }) {
  return (
    <ol className="a-card a-list">
      {EXPERIENCE.map((job) => (
        <li key={job.company} className="a-job">
          <div className="a-job__top">
            <p className="a-strong" dir="auto">{job.role}</p>
            {job.current ? <span className="pill pill--live">{t.ui.now}</span> : null}
          </div>
          <p className="a-muted">
            {job.company} · {t.place(job.location)}
          </p>
          <p className="a-meta">
            {t.date(job.start)} – {job.end === "Present" ? t.ui.present : t.date(job.end)}
          </p>
        </li>
      ))}
    </ol>
  );
}

function SkillsBlock({ t, keys }) {
  const groups = keys ? SKILLS.filter((g) => keys.includes(g.key)) : SKILLS;
  const LIMIT = keys ? 12 : 5;
  return (
    <div className="a-skills">
      {groups.map((g) => (
        <div key={g.key} className={`a-card a-skill skill--${g.key}`}>
          <p className="a-skill__title">
            <span className="skill__icon a-skill__icon">
              <Icon name={g.icon} size={16} />
            </span>
            {groupTitle(g.key, t)}
          </p>
          <ul className="chips a-chips">
            {g.items.slice(0, LIMIT).map((it) => (
              <li key={it}>{it}</li>
            ))}
            {g.items.length > LIMIT ? <li className="a-chips__more">{t.ui.more(g.items.length - LIMIT)}</li> : null}
          </ul>
        </div>
      ))}
    </div>
  );
}

const STORES = {
  play: { icon: "play", label: "Google Play" },
  appstore: { icon: "apple", label: "App Store" },
  github: { icon: "github", label: "GitHub" },
};

function StoreLink({ link }) {
  const store = STORES[link.kind] || STORES.github;
  return (
    <a className="store-link store-link--compact" href={link.url} target="_blank" rel="noopener noreferrer">
      <Icon name={store.icon} size={14} />
      <span>{link.app && link.label ? `${link.app} · ${store.label}` : store.label}</span>
    </a>
  );
}

/* cards keep one button per store; the detail view lists every app's links */
const firstPerStore = (links = []) => links.filter((l, i) => links.findIndex((x) => x.kind === l.kind) === i);
const multiApp = (links = []) => new Set(links.map((l) => l.app).filter(Boolean)).size > 1;

function StoreLinks({ links = [], all = false }) {
  if (!links.length) return null;
  const list = all ? links : firstPerStore(links);
  const named = all && multiApp(links);
  return (
    <div className="a-stores">
      {list.map((l) => (
        <StoreLink key={l.url} link={named ? { ...l, label: true } : l} />
      ))}
    </div>
  );
}

function ProjectsBlock({ ids }) {
  const list = ids.map((id) => byId[id]).filter(Boolean);
  return (
    <ul className="a-projects" aria-label="Projects">
      {list.map((p) => (
        <li key={p.id} className="a-project">
          <img src={asset(p.image)} alt="" loading="lazy" decoding="async" />
          <div className="a-project__body">
            <p className="a-strong">{p.title}</p>
            <p className="a-muted" dir="auto">{p.subtitle}</p>
            <ul className="chips a-chips">
              {p.tech.slice(0, 3).map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="a-project__foot">
              <StoreLinks links={p.links} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function ProjectDetail({ id, other, t }) {
  const p = id ? byId[id] : OTHER[other];
  if (!p) return null;
  const bullets = p.bullets || [p.desc];
  return (
    <article className="a-card a-detail">
      {p.image ? <img className="a-detail__media" src={asset(p.image)} alt="" loading="lazy" /> : null}
      <div className="a-detail__body">
        <p className="a-eyebrow">
          {p.category ? categoryLabel(p.category, t) : null}
          {p.status ? <span className="pill">{p.status}</span> : null}
        </p>
        <p className="a-detail__title">{p.title}</p>
        {p.subtitle ? <p className="a-muted" dir="auto">{p.subtitle}</p> : null}
        <ul className="a-bullets" dir="auto">
          {bullets.slice(0, 3).map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        {p.tech ? (
          <ul className="chips a-chips">
            {p.tech.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        ) : null}
        <div className="a-project__foot">
          <StoreLinks links={p.links} all />
        </div>
      </div>
    </article>
  );
}

const CHANNELS = {
  whatsapp: (t) => ({ icon: "whatsapp", href: whatsappLink(t.whatsappText), value: PROFILE.phone, ltr: true, external: true }),
  email: () => ({ icon: "mail", href: `mailto:${PROFILE.email}`, value: PROFILE.email, ltr: true }),
  linkedin: () => ({ icon: "linkedin", href: PROFILE.linkedin, value: handle(PROFILE.linkedin), ltr: true, external: true }),
  github: () => ({ icon: "github", href: PROFILE.github, value: handle(PROFILE.github), ltr: true, external: true }),
  phone: () => ({ icon: "call", href: PROFILE.phoneHref, value: PROFILE.phone, ltr: true }),
};

function ContactBlock({ t, only }) {
  return (
    <ul className="a-contact">
      {only.map((key) => {
        const c = CHANNELS[key](t);
        return (
          <li key={key}>
            <a className={`a-channel a-channel--${key}`} href={c.href} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              <span className="a-channel__icon">
                <Icon name={c.icon} size={18} />
              </span>
              <span className="a-channel__text">
                <span className="a-strong">{t.channels[key]}</span>
                <bdi className="a-muted" dir={c.ltr ? "ltr" : "auto"}>{c.value}</bdi>
              </span>
              <Icon name={c.external ? "arrowUpRight" : "chevronRight"} size={16} className="a-channel__go" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/* issuer logo when there is one, coloured initials otherwise */
function CertMark({ logo, issuer, fallback, tone }) {
  if (logo) {
    return (
      <span className="cert__mark cert__mark--logo a-cert__mark">
        <img src={asset(logo)} alt={issuer} width="34" height="34" loading="lazy" />
      </span>
    );
  }
  return (
    <span className={`cert__mark tone-${tone} a-cert__mark`} aria-hidden="true">
      {fallback}
    </span>
  );
}

function CertsBlock({ t }) {
  return (
    <div className="a-card a-list">
      <a className="a-cert a-cert--spec" href={SPECIALIZATION.url} target="_blank" rel="noopener noreferrer">
        <CertMark logo={SPECIALIZATION.logo} issuer={SPECIALIZATION.issuer} fallback={<Icon name="award" size={18} />} tone="blue" />
        <span className="a-cert__text">
          <span className="a-strong" dir="auto">{SPECIALIZATION.title}</span>
          <span className="a-muted">
            {SPECIALIZATION.issuer} · {t.date(SPECIALIZATION.date)}
          </span>
        </span>
        <Icon name="arrowUpRight" size={14} className="a-channel__go" />
      </a>
      {CERTIFICATIONS.map((c) => {
        const body = (
          <>
            <CertMark logo={c.logo} issuer={c.issuer} fallback={c.mark} tone={c.tone} />
            <span className="a-cert__text">
              <span className="a-strong" dir="auto">{c.title}</span>
              <span className="a-muted">
                {c.issuer}
                {c.date ? ` · ${t.date(c.date)}` : ""}
              </span>
            </span>
            {c.url ? <Icon name="arrowUpRight" size={14} className="a-channel__go" /> : null}
          </>
        );
        return c.url ? (
          <a key={c.title} className="a-cert" href={c.url} target="_blank" rel="noopener noreferrer" aria-label={`${t.ui.verify}: ${c.title}`}>
            {body}
          </a>
        ) : (
          <div key={c.title} className="a-cert">{body}</div>
        );
      })}
    </div>
  );
}

function EducationBlock({ t }) {
  const e = t.education || EDUCATION;
  return (
    <div className="a-card a-profile">
      <div className="a-profile__head">
        <span className="skill__icon">
          <Icon name="cap" size={20} />
        </span>
        <div>
          <p className="a-strong">{e.degree}</p>
          <p className="a-muted">{e.school}</p>
        </div>
      </div>
      <p className="a-meta">
        <span className="pill pill--accent">
          {t.ui.grade}: {e.grade}
        </span>
        <span>{EDUCATION.years}</span>
        <span>{e.location}</span>
      </p>
    </div>
  );
}

function CvBlock({ t }) {
  return (
    <a className="btn btn--primary btn--sm a-cv" href={asset(PROFILE.cv)} download>
      <Icon name="download" size={16} /> {t.ui.download}
    </a>
  );
}

function SectionLinks({ sections, t, onNavigate }) {
  if (!sections.length) return null;
  return (
    <p className="a-links">
      {sections.map((id) => (
        <a key={id} href={`#${id}`} onClick={(e) => onNavigate(e, id)}>
          {t.ui.goTo(t.sections[id])}
          <Icon name="chevronRight" size={14} stroke={2.2} className="a-flip" />
        </a>
      ))}
    </p>
  );
}

const BLOCKS = {
  about: (d, t) => <ProfileBlock t={t} />,
  experience: (d, t) => <ExperienceBlock t={t} />,
  skills: (d, t) => <SkillsBlock t={t} />,
  skill: (d, t) => (d.ids.length ? <ProjectsBlock ids={d.ids.slice(0, 4)} /> : d.group ? <SkillsBlock t={t} keys={[d.group]} /> : null),
  projects: (d) => <ProjectsBlock ids={d.ids} />,
  project: (d, t) => <ProjectDetail id={d.id} other={d.other} t={t} />,
  contact: (d, t) => <ContactBlock t={t} only={["whatsapp", "email", "linkedin", "github", "phone"]} />,
  hire: (d, t) => <ContactBlock t={t} only={["whatsapp", "linkedin", "email", "github"]} />,
  whatsapp: (d, t) => <ContactBlock t={t} only={["whatsapp"]} />,
  linkedin: (d, t) => <ContactBlock t={t} only={["linkedin"]} />,
  github: (d, t) => <ContactBlock t={t} only={["github"]} />,
  cv: (d, t) => <CvBlock t={t} />,
  certs: (d, t) => <CertsBlock t={t} />,
  education: (d, t) => <EducationBlock t={t} />,
  location: (d, t) => <ContactBlock t={t} only={["whatsapp", "linkedin"]} />,
  fallback: (d, t) => <ContactBlock t={t} only={["whatsapp", "email", "linkedin"]} />,
};

/* Resolve the labels a reply's text needs in the current language. */
function textData(reply, t) {
  const d = reply.data || {};
  if (reply.key === "skill") return { ...d, group: d.group ? groupTitle(d.group, t) : null };
  if (reply.key === "projects") return { ...d, category: d.category ? categoryLabel(d.category, t) : null };
  if (reply.key === "project") return { title: d.id ? byId[d.id]?.title : d.other };
  return d;
}

export default function Reply({ reply, lang, onNavigate }) {
  const t = STRINGS[lang];
  const say = t.replies[reply.key] || t.replies.fallback;
  const block = BLOCKS[reply.key]?.(reply.data || {}, t);
  return (
    <div className="a-turn">
      <p className="a-bubble a-bubble--bot">{say(textData(reply, t))}</p>
      {block ? <div className="a-block">{block}</div> : null}
      <SectionLinks sections={reply.sections || []} t={t} onNavigate={onNavigate} />
    </div>
  );
}

export function Suggestions({ keys, lang, onPick, label }) {
  const t = STRINGS[lang];
  if (!keys.length) return null;
  return (
    <div className="a-suggest" role="group" aria-label={label || t.ui.starters}>
      {keys.map((k) => (
        <button key={k} type="button" onClick={() => onPick(t.questions[k])}>
          {t.questions[k]}
        </button>
      ))}
    </div>
  );
}
