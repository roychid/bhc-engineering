import { PageHead, ContactCTA } from '../../components/Parts';
import { values, services, leaders } from '../../lib/content';

export const metadata = { title: 'About | BHC Engineering & Design' };

export default function About() {
  return <>
    <PageHead title="About the practice" lede="An architecture and engineering practice built around one idea: design should be buildable." />
    <section className="prose wrap">
      <div><h2>Who we are</h2></div>
      <div>
        <p>BHC Engineering &amp; Design (Pty) Ltd is a registered South African private company based in Johannesburg, founded in 2026. We provide architectural design, engineering design, engineering consultancy and EPC project delivery.</p>
        <p>We set the practice up to close a gap we saw often: architects and engineers working in separate stages, with the client left to reconcile the difference. At BHC the disciplines work together from the first sketch, so the design that is approved is the design that can be built.</p>
      </div>
    </section>
    <section className="prose wrap">
      <div><h2>Mission and vision</h2></div>
      <div className="mv">
        <div><h3>Mission</h3><p>To move good ideas from concept to completed buildings with clarity, by joining architectural and engineering thinking in one accountable team.</p></div>
        <div><h3>Vision</h3><p>To be a trusted name in integrated design and delivery in South Africa and the region.</p></div>
      </div>
    </section>
    <section className="prose wrap">
      <div><h2>How the disciplines fit together</h2></div>
      <div className="fit">{services.map((s) => <div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}</div>
    </section>
    <section className="dark-block"><div className="wrap">
      <div className="block-head"><h2>What we stand for</h2></div>
      <div className="values">{values.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
    </div></section>
    {leaders.length > 0 && <section className="block wrap"><div className="block-head"><h2>Leadership</h2></div>
      <div className="leaders">{leaders.map((l) => <div key={l.name}><h3>{l.name}</h3><span>{l.role}</span><p>{l.bio}</p></div>)}</div></section>}
    <ContactCTA />
  </>;
}
