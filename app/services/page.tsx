import { PageHead, ContactCTA, SectionHead } from '../../components/Parts';
import { services, approach, digital } from '../../lib/content';

export const metadata = { title: 'Services', description: 'Architectural design, engineering design, engineering consultancy and EPC / EPC+F delivery, and what you receive at each stage.' };

export default function Services() {
  return <>
    <PageHead eyebrow="Services" title="Four disciplines, one team" lede="One point of accountability from brief to handover." image="sector-commercial" />

    <section className="section" aria-labelledby="disciplines-h"><div className="wrap">
      <h2 id="disciplines-h" className="sr-only">Disciplines</h2>
      <div className="svc-list">{services.map((s, i) => <article key={s.slug} id={s.slug} aria-labelledby={`${s.slug}-h`}>
        <div><span className="idx">{String(i + 1).padStart(2, '0')}</span><h3 id={`${s.slug}-h`}>{s.title}</h3></div>
        <div><p>{s.text}</p><h4 className="list-label">What it covers</h4><ul className="ticks">{s.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
      </article>)}</div>
    </div></section>

    <section className="section surface-alt" id="process" aria-labelledby="process-h"><div className="wrap">
      <SectionHead eyebrow="Process" id="process-h" title="What you receive at each stage" lede="Six stages, one team throughout. Each stage ends with something you can review, decide on and hold us to." />
      <ol className="stages">{approach.map((s, i) => <li key={s.title}>
        <span className="idx">{String(i + 1).padStart(2, '0')}</span>
        <h3>{s.title}</h3>
        <p>{s.text}</p>
        <h4 className="list-label">You receive</h4>
        <ul className="ticks">{s.receive.map((r) => <li key={r}>{r}</li>)}</ul>
      </li>)}</ol>
    </div></section>

    <section className="section" aria-labelledby="digital-h"><div className="wrap">
      <SectionHead eyebrow="Information" id="digital-h" title="Digital delivery" lede="We use technology to keep information accurate and visible, not as an end in itself." />
      <div className="three-up">{digital.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>

    <ContactCTA />
  </>;
}
