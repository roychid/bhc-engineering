'use client';

import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowRight, Menu, X } from 'lucide-react';
import { projectTypes, process, services, software } from '../lib/content';

const projectImages = ['sector-residential', 'sector-commercial', 'sector-industrial', 'hero-home', 'sector-commercial'];

function VideoHero() {
  return (
    <section className="hero" id="top">
      <video className="hero-video" autoPlay muted loop playsInline poster="/media/hero-home.jpg">
        <source src="/media/bhc-hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="hero-grid" />
      <div className="hero-content wrap">
        <div className="eyebrow light">BHC ENGINEERING & DESIGN / 2026</div>
        <h1>FROM<br /><span>CONCEPT</span><br />TO CONSTRUCTION.</h1>
        <div className="hero-bottom">
          <p>Architecture. Engineering. Consultancy. Project delivery.</p>
          <a className="round-cta" href="#start" aria-label="Start a project"><ArrowDownRight size={28} /></a>
        </div>
      </div>
      <div className="hero-code">01 / 07<br /><span>ENGINEERED REALITY</span></div>
    </section>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const links = [['01', 'Capabilities', '#capabilities'], ['02', 'Projects', '#projects'], ['03', 'Process', '#process'], ['04', 'Technology', '#technology'], ['05', 'Digital', '#digital'], ['06', 'About', '#about']];
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
      <a href="#top" className="brand" onClick={() => setOpen(false)}><span>BHC</span><small>ENGINEERING & DESIGN</small></a>
      <nav className="nav-links" aria-label="Main">{links.map(([n, label, href]) => <a key={n} href={href}>{label}</a>)}</nav>
      <a className="nav-cta" href="#start">Start a project <ArrowRight size={16} /></a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </header>
    <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
      {links.map(([n, label, href]) => <a key={n} href={href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}><i>{n}</i>{label}</a>)}
      <a className="mobile-cta" href="#start" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Start a project <ArrowRight size={18} /></a>
    </div>
  </>;
}

function ProjectFlow() {
  const [active, setActive] = useState(0);
  return <section className="flow section-dark" id="projects">
    <div className="wrap">
      <div className="section-head"><span>02 / PROJECTS</span><h2>WHAT ARE<br /><em>YOU BUILDING?</em></h2></div>
      <div className="flow-grid">
        <div className="flow-list">{projectTypes.map((type, i) => <button key={type} className={active === i ? 'active' : ''} onClick={() => setActive(i)}><span>0{i + 1}</span>{type}<ArrowRight size={20} /></button>)}</div>
        <div className="project-visual"><div className={`visual-card visual-${active + 1}`} style={{ backgroundImage: `url(/media/${projectImages[active]}.jpg)` }}><div className="wireframe"><span>PROJECT / {projectTypes[active].toUpperCase()}</span><strong>DESIGN<br />ENGINEERING<br />DELIVERY</strong></div></div><div className="visual-caption">BHC / CONCEPT VISUALISATION<br /><span>Concept imagery.</span></div></div>
      </div>
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
  if (step === 3) return <section className="start section-blue" id="start"><div className="wrap start-inner"><div className="eyebrow">07 / START A PROJECT</div><h2>LET’S MOVE<br /><em>IT FORWARD.</em></h2><p className="start-copy">Your brief is ready. This static-site flow can hand off to email, WhatsApp or a third-party form service without requiring a BHC backend.</p><a className="big-button" href={`mailto:projects@bhcengineering.co.za?subject=BHC Project Enquiry&body=Project type: ${type}%0AService: ${need}%0AStage: ${stage}%0ADetails: ${encodeURIComponent(details)}`} >SEND PROJECT BRIEF <ArrowRight /></a><button className="text-button" onClick={() => setStep(0)}>START AGAIN</button></div></section>;
  return <section className="start section-blue" id="start"><div className="wrap start-inner"><div className="eyebrow">07 / START A PROJECT</div><div className="start-top"><h2>BRING US<br /><em>THE BRIEF.</em></h2><div className="step-count">0{step + 1} / 03</div></div><p className="start-copy">A short project journey instead of a generic contact form.</p><div className="choices">{step < 3 ? options.map((x) => <button key={x} className={(step === 0 ? type : step === 1 ? need : stage) === x ? 'chosen' : ''} onClick={() => { if (step === 0) setType(x); if (step === 1) setNeed(x); if (step === 2) setStage(x); setStep(step + 1); }}>{x}<ArrowRight /></button>) : null}</div></div></section>;
}

export default function Site() {
  useEffect(() => { document.documentElement.style.scrollBehavior = 'smooth'; }, []);
  return <main><Nav /><VideoHero />
    <section className="statement wrap"><div className="eyebrow">BHC / THE IDEA</div><h2>WE DESIGN<br /><em>WHAT GETS BUILT.</em></h2><p>Architecture and engineering brought together around one simple objective: move a good idea from concept toward reality with clarity.</p></section>
    <section className="services wrap" id="capabilities"><div className="section-head"><span>01 / CAPABILITIES</span><h2>ONE TEAM.<br /><em>FOUR CAPABILITIES.</em></h2></div><div className="service-grid">{services.map(({ n, title, text }) => <article className="service" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><ArrowDownRight /></article>)}</div></section>
    <section className="reveal wrap"><div className="reveal-image" style={{ backgroundImage: 'url(/media/hero-home.jpg)' }}><div className="drawing-lines" /><div className="reveal-label">ARCHITECTURE → ENGINEERING → DELIVERY</div></div><div className="reveal-copy"><div className="eyebrow">THE ENGINEERING LAYER</div><h2>MAKE THE<br /><em>VISION BUILDABLE.</em></h2><p>Good design is not only what looks right. It is what can be resolved, documented, procured and built.</p><a href="#process" className="line-link">EXPLORE THE PROCESS <ArrowRight /></a></div></section>
    <ProjectFlow />
    <section className="process wrap" id="process"><div className="section-head"><span>03 / PROCESS</span><h2>FROM BRIEF<br /><em>TO BUILD.</em></h2></div><div className="process-list">{process.map(([n, title, text]) => <div className="process-row" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><ArrowRight /></div>)}</div></section>
    <section className="epc section-light"><div className="wrap epc-inner"><div className="eyebrow">04 / DELIVERY</div><h2>DESIGN IS<br /><em>ONLY THE BEGINNING.</em></h2><div className="epc-line"><span>ENGINEERING</span><span>PROCUREMENT</span><span>CONSTRUCTION</span><span>FINANCING*</span></div><p>*EPC+F capability presented subject to project structure, mandate and financing requirements.</p></div></section>
    <section className="technology section-dark" id="technology"><div className="wrap"><div className="section-head"><span>05 / TECHNOLOGY</span><h2>ENGINEERING<br /><em>WITH A DIGITAL EDGE.</em></h2></div><div className="tech-grid"><div className="tech-orb">BHC<br />DIGITAL</div><div className="tech-copy"><p>Our digital direction connects design thinking with structured project information — from drawings and revisions to communication and delivery visibility.</p><div className="tech-tags"><span>3D / BIM</span><span>DOCUMENT CONTROL</span><span>PROJECT DATA</span><span>DIGITAL WORKFLOWS</span></div></div></div></div></section>
    <section className="software wrap" id="digital"><div className="section-head"><span>06 / BHC DIGITAL</span><h2>SOFTWARE<br /><em>WE WANT TO BUILD.</em></h2></div><div className="software-grid">{software.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p><div className="software-bar"><i style={{ width: `${55 + i * 12}%` }} /></div></article>)}</div></section>
    <section className="about section-blue" id="about"><div className="wrap about-grid"><div><div className="eyebrow">06 / ABOUT BHC</div><h2>ENGINEERING<br /><em>WITH INTENT.</em></h2></div><div><p className="large">BHC Engineering & Design is a South African private company providing architectural design, engineering design, engineering consultancy and project delivery solutions.</p><div className="beliefs"><span>GOOD DESIGN SHOULD BE BUILDABLE.</span><span>ENGINEERING SHOULD ENABLE AMBITION.</span><span>PROJECTS SHOULD MOVE WITH CLARITY.</span></div></div></div></section>
    <StartProject />
    <footer><div className="wrap footer-grid"><div className="footer-brand">BHC<small>ENGINEERING & DESIGN</small></div><div><span>CAPABILITIES</span><a href="#capabilities">Architecture</a><a href="#capabilities">Engineering</a><a href="#capabilities">Consultancy</a><a href="#start">EPC / EPC+F</a></div><div><span>EXPLORE</span><a href="#projects">Projects</a><a href="#process">Process</a><a href="#technology">Technology</a><a href="#digital">Digital</a></div><div><span>START</span><a href="#start">Start a project →</a><a href="mailto:projects@bhcengineering.co.za">Email BHC</a></div></div><div className="wrap footer-bottom"><span>© 2026 BHC ENGINEERING & DESIGN (PTY) LTD</span><span>PRIVATE COMPANY / SOUTH AFRICA</span></div></footer>
  </main>;
}
