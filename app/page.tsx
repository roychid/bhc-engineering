import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { company, services, commitments, registrations, leaders, caseStudies } from '../lib/content';
import { ContactCTA, SectionHead } from '../components/Parts';
import { HeroVideo } from '../components/HeroVideo';
import { DisciplinesDiagram } from '../components/Drawings';
import { DrawOnScroll } from '../components/DrawOnScroll';
import { CaseStudyCard } from '../components/CaseStudyCard';

export default function Home() {
  return <>
    <section className="hero" aria-labelledby="hero-h">
      <HeroVideo src="/media/bhc-hero.mp4" poster="/media/opt/hero-home-1600.webp" />
      <div className="hero-overlay" />
      <div className="wrap hero-content">
        <p className="eyebrow eyebrow-inverse">Architecture · Engineering · EPC+F — Johannesburg</p>
        <h1 id="hero-h">The team that designs it also engineers it.</h1>
        <p className="hero-lede">Architectural design, engineering design, consultancy and EPC project delivery for residential, commercial and industrial clients across South Africa, with one point of accountability from brief to handover.</p>
        <div className="hero-actions">
          <Link className="btn btn-accent" href="/contact/">Discuss your project <ArrowRight size={16} aria-hidden="true" /></Link>
          <Link className="btn btn-ghost" href="/services/#process">How we work</Link>
        </div>
        <div className="dim" aria-hidden="true"><span>Brief</span><span className="dim-label">One team</span><span>Handover</span></div>
      </div>
    </section>

    <section className="section" aria-labelledby="proof-h">
      <div className="wrap">
        <SectionHead eyebrow="01 — Accountability" id="proof-h" title="What you can hold us to" lede="Because the people who design the building also resolve how it is engineered and procured, fewer problems reach site. These are the commitments behind that." />
        <ol className="commitments">{commitments.map(([t, d], i) => <li key={t}><span className="idx">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
        <h3 className="tb-title">Company details</h3>
        <dl className="title-block">
          <div><dt>Company</dt><dd>{company.legal}</dd></div>
          <div><dt>Registration no.</dt><dd className="mono">{company.reg}</dd></div>
          <div><dt>Head office</dt><dd>Fairways, Johannesburg</dd></div>
          <div><dt>Disciplines</dt><dd>{services.length}, under one roof</dd></div>
          {registrations.length > 0 && <div className="tb-wide"><dt>Registrations</dt><dd>{registrations.map((r) => r.body).join(' · ')}</dd></div>}
          {leaders.length > 0 && <div className="tb-wide"><dt>Leadership</dt><dd><Link href="/about/#leadership" className="line-link">Meet the team</Link></dd></div>}
        </dl>
      </div>
    </section>

    {caseStudies.length > 0 && <section className="section" aria-labelledby="work-h"><div className="wrap">
      <SectionHead eyebrow="Delivered" id="work-h" title="Recent projects" link={['All projects', '/projects/#delivered']} />
      <div className="case-grid">{caseStudies.slice(0, 3).map((c) => <CaseStudyCard key={c.title} study={c} />)}</div>
    </div></section>}

    <section className="section surface-alt" aria-labelledby="services-h">
      <div className="wrap">
        <SectionHead eyebrow="02 — Services" id="services-h" title="Four disciplines, one team" link={['All services', '/services/']} />
        <ul className="service-rows">{services.map((s, i) => <li key={s.slug}>
          <span className="idx">{String(i + 1).padStart(2, '0')}</span>
          <h3><Link href={`/services/#${s.slug}`}>{s.title}</Link></h3>
          <p>{s.text}</p>
          <ArrowRight className="row-arrow" size={20} aria-hidden="true" />
        </li>)}</ul>
      </div>
    </section>

    <section className="section surface-inverse grid-bg" aria-labelledby="combine-h">
      <div className="wrap">
        <SectionHead eyebrow="03 — How it fits together" id="combine-h" title="Disciplines that work together, not in sequence" lede="Architects and engineers often work in separate stages, leaving the client to reconcile the difference. At BHC the disciplines work together from the first sketch." />
        <figure className="combine">
          <DrawOnScroll className="combine-drawing"><DisciplinesDiagram /></DrawOnScroll>
          <figcaption>
            <ol className="legend">{services.map((s, i) => <li key={s.slug}><span className="idx">{String(i + 1).padStart(2, '0')}</span>{s.title}</li>)}</ol>
            <p>Each discipline brings its own expertise from the first sketch. By documentation they are one coordinated set, so the design that is approved is the design that can be built.</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <section className="section" aria-labelledby="epc-h">
      <div className="wrap epc">
        <div>
          <p className="eyebrow">04 — Delivery</p>
          <h2 id="epc-h">Design is only the beginning.</h2>
          <p className="lede">Under EPC delivery we take responsibility for engineering, procurement and construction of medium-sized projects, and can bring financing where the project structure calls for it.</p>
          <Link href="/services/#epc" className="line-link">EPC and EPC+F delivery <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div>
          <ol className="epc-chain">{[['E', 'Engineering'], ['P', 'Procurement'], ['C', 'Construction'], ['F', 'Financing*']].map(([k, l]) => <li key={k}><span className="epc-key" aria-hidden="true">{k}</span>{l}</li>)}</ol>
          <p className="footnote">*Subject to project structure, mandate and financing requirements.</p>
        </div>
      </div>
    </section>

    <ContactCTA />
  </>;
}
