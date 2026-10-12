import { PageHead, ContactCTA, SectionHead } from '../../components/Parts';
import { values, leaders, registrations } from '../../lib/content';

export const metadata = { title: 'About', description: 'BHC Engineering & Design is a Johannesburg architecture and engineering practice built around one idea: design should be buildable.' };

export default function About() {
  return <>
    <PageHead eyebrow="About" title="About the practice" lede="An architecture and engineering practice built around one idea: design should be buildable." image="development" />

    <section className="section" aria-labelledby="who-h"><div className="wrap prose">
      <h2 id="who-h">Who we are</h2>
      <div>
        <p>BHC Engineering &amp; Design (Pty) Ltd is a registered South African private company based in Johannesburg, founded in 2026. We provide architectural design, engineering design, engineering consultancy and EPC project delivery.</p>
        <p>We set the practice up to close a gap we saw often: architects and engineers working in separate stages, with the client left to reconcile the difference. At BHC the disciplines work together from the first sketch, so the design that is approved is the design that can be built.</p>
      </div>
    </div></section>

    <section className="section surface-alt" aria-labelledby="mv-h"><div className="wrap prose">
      <h2 id="mv-h">Mission and vision</h2>
      <div className="mv">
        <div><p className="eyebrow">Mission</p><p className="statement">To move good ideas from concept to completed buildings with clarity, by joining architectural and engineering thinking in one accountable team.</p></div>
        <div><p className="eyebrow">Vision</p><p className="statement">To be a trusted name in integrated design and delivery in South Africa and the region.</p></div>
      </div>
    </div></section>

    <section className="section surface-inverse grid-bg" aria-labelledby="values-h"><div className="wrap">
      <SectionHead eyebrow="Values" id="values-h" title="What we stand for" />
      <ol className="values">{values.map(([t, d], i) => <li key={t}><span className="idx">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </div></section>

    {leaders.length > 0 && <section className="section" id="leadership" aria-labelledby="leaders-h"><div className="wrap">
      <SectionHead eyebrow="People" id="leaders-h" title="Leadership" />
      <div className="three-up">{leaders.map((l) => <div key={l.name} className="leader">
        <h3>{l.name}</h3><p className="eyebrow">{l.role}</p><p>{l.bio}</p>{l.registration && <p className="mono">{l.registration}</p>}
      </div>)}</div>
    </div></section>}

    {registrations.length > 0 && <section className="section" aria-labelledby="reg-h"><div className="wrap">
      <SectionHead eyebrow="Credentials" id="reg-h" title="Registrations" />
      <dl className="title-block">{registrations.map((r) => <div key={r.body + r.detail}><dt>{r.body}</dt><dd>{r.detail}</dd></div>)}</dl>
    </div></section>}

    <ContactCTA />
  </>;
}
