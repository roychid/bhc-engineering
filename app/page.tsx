import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { facts, services, sectors, approach, digital } from '../lib/content';
import { ContactCTA } from '../components/Parts';

export default function Home() {
  return <>
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="/media/hero-home.jpg"><source src="/media/bhc-hero.mp4" type="video/mp4" /></video>
      <div className="hero-overlay" />
      <div className="wrap hero-content">
        <h1>Architecture and engineering, delivered.</h1>
        <p className="hero-lede">Architectural design, engineering design, consultancy and EPC project delivery for residential, commercial and industrial clients across South Africa.</p>
        <div className="hero-bottom"><Link className="btn-solid" href="/services/">Our services</Link><Link className="btn-outline" href="/contact/">Get in touch</Link></div>
      </div>
    </section>

    <section className="facts wrap">{facts.map((f) => <div key={f.label}><strong>{f.n}</strong><span>{f.label}</span></div>)}</section>

    <section className="intro wrap">
      <h2>We design what gets built.</h2>
      <div>
        <p>BHC Engineering &amp; Design is a Johannesburg practice that brings architecture and engineering into one team. Our aim is simple: take a good idea from concept to completed building with clarity at every stage.</p>
        <p>Because the people who design the building also resolve how it is engineered and procured, fewer problems reach site.</p>
        <Link href="/about/" className="line-link">About the practice <ArrowRight size={16} /></Link>
      </div>
    </section>

    <section className="block wrap">
      <div className="block-head"><h2>What we do</h2><Link href="/services/" className="line-link">All services <ArrowRight size={16} /></Link></div>
      <div className="service-grid">{services.map((s) => <article key={s.title}><h3>{s.title}</h3><p>{s.text}</p><ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul></article>)}</div>
    </section>

    <section className="block wrap">
      <div className="block-head"><h2>Sectors we serve</h2></div>
      <div className="sector-grid">{sectors.map((s) => <article key={s.name} className="sector"><div style={{ backgroundImage: `url(/media/${s.img}.jpg)`, backgroundPosition: s.pos }} /><h3>{s.name}</h3><p>{s.text}</p></article>)}</div>
    </section>

    <section className="dark-block"><div className="wrap">
      <div className="block-head"><h2>How we work</h2></div>
      <ol className="steps">{approach.map(([t, d], i) => <li key={t}><span>{i + 1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </div></section>

    <section className="epc wrap">
      <h2>Design is only the beginning.</h2>
      <p>Under EPC delivery we take responsibility for engineering, procurement and construction of medium-sized projects, and can bring financing where the project structure calls for it.</p>
      <div className="epc-line"><span>Engineering</span><span>Procurement</span><span>Construction</span><span>Financing*</span></div>
      <small>*Subject to project structure, mandate and financing requirements.</small>
    </section>

    <section className="block wrap">
      <div className="block-head"><h2>Digital delivery</h2></div>
      <p className="lede-dark">We use technology to keep information accurate and visible, not as an end in itself.</p>
      <div className="digital-grid">{digital.map(([t, d]) => <div key={t}><h3>{t}</h3><p>{d}</p></div>)}</div>
    </section>

    <ContactCTA />
  </>;
}
