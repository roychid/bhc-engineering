'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { projectTypes, process, services, sectors, software, credentials, stats, presence, certifications, partners, portfolio } from '../lib/content';

function VideoHero() {
  return (
    <section className="hero" id="top">
      <video className="hero-video" autoPlay muted loop playsInline poster="/media/hero-home.jpg">
        <source src="/media/bhc-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-content wrap">
        <h1>Architecture and engineering, delivered.</h1>
        <p className="hero-lede">Architectural design, engineering design, consultancy and EPC project delivery for commercial, industrial and residential clients across South Africa.</p>
        <div className="hero-bottom">
          <a className="btn-solid" href="#start">Start a project</a>
          <a className="btn-outline" href="#projects">View projects</a>
        </div>
        <div className="hero-credentials">{credentials.map((c) => <span key={c}>{c}</span>)}</div>
      </div>
    </section>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const links = [['Capabilities', '#capabilities'], ['Sectors', '#sectors'], ['Projects', '#projects'], ['Process', '#process'], ['Presence', '#presence'], ['Technology', '#technology'], ['About', '#about']];
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);
  return <>
    <header className={`nav${solid || open ? ' solid' : ''}`}>
      <a href="#top" className="brand" onClick={() => setOpen(false)}><span>BHC</span><small>Engineering & Design</small></a>
      <nav className="nav-links" aria-label="Main">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <a className="nav-cta" href="#start">Start a project <ArrowRight size={16} /></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </header>
    <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>{label}</a>)}
      <a className="mobile-cta" href="#start" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Start a project <ArrowRight size={18} /></a>
    </div>
  </>;
}

function Stats() {
  return <section className="stats wrap">{stats.map((s) => <div key={s.label} className="stat"><strong>{s.n}</strong><span>{s.label}</span></div>)}</section>;
}

function Presence() {
  return <section className="presence section-dark" id="presence">
    <div className="wrap presence-grid">
      <div><h2>Where we're based.</h2><p className="large">{presence.note}</p></div>
      <div className="presence-card">
        <span className="presence-tag">{presence.hq.label}</span>
        <h3>{presence.hq.city}, {presence.hq.country}</h3>
        <p>{presence.hq.address}</p>
        <div className="presence-regions">{presence.regions.map((r) => <span key={r}>{r}</span>)}</div>
      </div>
    </div>
  </section>;
}

function Credentials() {
  const hasCerts = certifications.length > 0;
  const hasPartners = partners.length > 0;
  if (!hasCerts && !hasPartners) return null;
  return <section className="credentials-section wrap">
    <h2>Registered and accountable.</h2>
    {hasCerts && <div className="cert-grid">{certifications.map((c) => <div key={c.name} className="cert-tile"><strong>{c.name}</strong><span>{c.body}</span></div>)}</div>}
    {hasPartners && <div className="partner-row">{partners.map((p) => <span key={p}>{p}</span>)}</div>}
  </section>;
}

function Portfolio() {
  const [active, setActive] = useState(0);
  return <section className="flow section-dark" id="projects">
    <div className="wrap">
      <h2>Recent work.</h2>
      <div className="portfolio-grid">
        {portfolio.map((p, i) => (
          <button key={p.title} className={`portfolio-card${active === i ? ' active' : ''}`} onClick={() => setActive(i)} style={{ backgroundImage: `url(/media/${p.image}.jpg)` }}>
            <span className="portfolio-tag">{p.type}</span>
            <div className="portfolio-meta"><strong>{p.title}</strong><span>{p.location}</span></div>
          </button>
        ))}
      </div>
      <p className="portfolio-note">Concept imagery shown pending final project photography.</p>
      <div className="flow-list">{projectTypes.map((type, i) => <span key={type} className={active % projectTypes.length === i ? 'active' : ''}>{type}</span>)}</div>
    </div>
  </section>;
}

function StartProject() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState('');
  const [need, setNeed] = useState('');
  const [stage, setStage] = useState('');
  const [details, setDetails] = useState('');
  const options = step === 0 ? projectTypes : step === 1 ? ['Architecture', 'Engineering', 'Consultancy', 'EPC', 'EPC+F'] : ['Concept', 'Planning', 'Design', 'Tender', 'Construction'];
  if (step === 3) return <section className="start section-dark" id="start"><div className="wrap start-inner"><h2>Let's move it forward.</h2><p className="start-copy">Your brief is ready. This static-site flow can hand off to email, WhatsApp or a third-party form service without requiring a BHC backend.</p><a className="big-button" href={`mailto:projects@bhcengineering.co.za?subject=BHC Project Enquiry&body=Project type: ${type}%0AService: ${need}%0AStage: ${stage}%0ADetails: ${encodeURIComponent(details)}`} >Send project brief <ArrowRight /></a><button className="text-button" onClick={() => setStep(0)}>Start again</button></div></section>;
  return <section className="start section-dark" id="start"><div className="wrap start-inner"><h2>Start a project.</h2><p className="start-copy">A short project journey instead of a generic contact form.</p><div className="choices">{step < 3 ? options.map((x) => <button key={x} className={(step === 0 ? type : step === 1 ? need : stage) === x ? 'chosen' : ''} onClick={() => { if (step === 0) setType(x); if (step === 1) setNeed(x); if (step === 2) setStage(x); setStep(step + 1); }}>{x}<ArrowRight /></button>) : null}</div></div></section>;
}

export default function Site() {
  useEffect(() => { document.documentElement.style.scrollBehavior = 'smooth'; }, []);
  return <main><Nav /><VideoHero />
    <Stats />
    <section className="statement wrap"><h2>We design what gets built.</h2><p>Architecture and engineering brought together around one simple objective: move a good idea from concept toward reality with clarity.</p></section>
    <section className="services wrap" id="capabilities"><h2>What we do.</h2><div className="service-grid">{services.map(({ n, title, text, points }) => <article className="service" key={n}><h3>{title}</h3><p>{text}</p><ul>{points.map((pt) => <li key={pt}>{pt}</li>)}</ul></article>)}</div></section>
    <section className="sectors wrap" id="sectors"><h2>Where we work.</h2><div className="sector-grid">{sectors.map((s) => <div className="sector" key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></section>
    <section className="reveal wrap"><div className="reveal-image" style={{ backgroundImage: 'url(/media/hero-home.jpg)' }}><div className="drawing-lines" /></div><div className="reveal-copy"><h2>Good design has to be buildable.</h2><p>Good design is not only what looks right. It is what can be resolved, documented, procured and built.</p><a href="#process" className="line-link">See how we work <ArrowRight /></a></div></section>
    <Portfolio />
    <section className="process wrap" id="process"><h2>How we work.</h2><div className="process-list">{process.map(([n, title, text]) => <div className="process-row" key={n}><h3>{title}</h3><p>{text}</p><ArrowRight /></div>)}</div></section>
    <section className="epc section-light"><div className="wrap epc-inner"><h2>Design is only the beginning.</h2><div className="epc-line"><span>Engineering</span><span>Procurement</span><span>Construction</span><span>Financing*</span></div><p>*EPC+F capability presented subject to project structure, mandate and financing requirements.</p></div></section>
    <Presence />
    <section className="technology section-dark" id="technology"><div className="wrap"><h2>Engineering with a digital edge.</h2><div className="tech-grid"><div className="tech-mark">BHC<br />Digital</div><div className="tech-copy"><p>Our digital direction connects design thinking with structured project information — from drawings and revisions to communication and delivery visibility.</p><div className="tech-tags"><span>3D / BIM</span><span>Document control</span><span>Project data</span><span>Digital workflows</span></div></div></div></div></section>
    <section className="software wrap" id="digital"><h2>Software we want to build.</h2><div className="software-grid">{software.map(([title, text], i) => <article key={title}><h3>{title}</h3><p>{text}</p><div className="software-bar"><i style={{ width: `${55 + i * 12}%` }} /></div></article>)}</div></section>
    <Credentials />
    <section className="about section-dark" id="about"><div className="wrap about-grid"><div><h2>About BHC.</h2></div><div><p className="large">BHC Engineering & Design is a South African private company providing architectural design, engineering design, engineering consultancy and project delivery solutions.</p><div className="beliefs"><span>Good design should be buildable.</span><span>Engineering should enable ambition.</span><span>Projects should move with clarity.</span></div></div></div></section>
    <StartProject />
    <footer><div className="wrap footer-grid"><div className="footer-brand">BHC<small>Engineering & Design</small></div><div><span>Capabilities</span><a href="#capabilities">Architecture</a><a href="#capabilities">Engineering</a><a href="#capabilities">Consultancy</a><a href="#start">EPC / EPC+F</a></div><div><span>Explore</span><a href="#projects">Projects</a><a href="#process">Process</a><a href="#presence">Presence</a><a href="#digital">Digital</a></div><div><span>Start</span><a href="#start">Start a project →</a><a href="mailto:projects@bhcengineering.co.za">Email BHC</a></div></div><div className="wrap footer-bottom"><span>© 2026 BHC Engineering and Design (Pty) Ltd — Reg 2026/647641/07</span><span>Private company / South Africa</span></div></footer>
  </main>;
}
