import { PageHead, ContactCTA } from '../../components/Parts';
import { services, sectors, approach } from '../../lib/content';

export const metadata = { title: 'Services | BHC Engineering & Design' };

export default function Services() {
  return <>
    <PageHead title="Services" lede="Four disciplines, one team, one point of accountability from brief to handover." img="sector-commercial" />
    <section className="wrap svc-list">{services.map((s) => <article key={s.title}><h2>{s.title}</h2><div><p>{s.text}</p><ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul></div></article>)}</section>
    <section className="dark-block"><div className="wrap">
      <div className="block-head"><h2>Sectors</h2></div>
      <div className="sector-text">{sectors.map((s) => <div key={s.name}><h3>{s.name}</h3><p>{s.text}</p></div>)}</div>
    </div></section>
    <section className="block wrap"><div className="block-head"><h2>Our approach</h2></div>
      <ol className="steps light">{approach.map(([t, d], i) => <li key={t}><span>{i + 1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol></section>
    <ContactCTA />
  </>;
}
