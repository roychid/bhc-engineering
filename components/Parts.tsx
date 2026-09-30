'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { company, portfolio } from '../lib/content';

export function PageHead({ title, lede, img = 'hero-home' }: { title: string; lede: string; img?: string }) {
  return <section className="page-head" style={{ backgroundImage: `url(/media/${img}.jpg)` }}>
    <div className="page-head-shade" /><div className="wrap"><h1>{title}</h1><p>{lede}</p></div>
  </section>;
}

export function ContactCTA() {
  return <section className="cta-band"><div className="wrap cta-inner">
    <h2>Have a project in mind?</h2>
    <Link className="btn-solid dark" href="/contact/">Get in touch <ArrowRight size={16} /></Link>
  </div></section>;
}

export function ContactForm() {
  const [f, setF] = useState({ name: '', email: '', phone: '', type: 'Residential', message: '' });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nProject type: ${f.type}\n\n${f.message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('Enquiry from ' + f.name)}&body=${encodeURIComponent(body)}`;
  };
  return <form className="form" onSubmit={submit}>
    <label>Name<input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
    <label>Email<input required type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
    <label>Phone<input value={f.phone} onChange={set('phone')} autoComplete="tel" /></label>
    <label>Project type<select value={f.type} onChange={set('type')}>{['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Development', 'Other'].map((t) => <option key={t}>{t}</option>)}</select></label>
    <label className="full">How can we help?<textarea required rows={6} value={f.message} onChange={set('message')} /></label>
    <button className="btn-solid dark" type="submit">Send enquiry</button>
  </form>;
}

export function ProjectGrid() {
  const types = ['All', ...Array.from(new Set(portfolio.map((p) => p.type)))];
  const [t, setT] = useState('All');
  return <>
    <div className="filters" role="group" aria-label="Filter projects">{types.map((x) => <button key={x} className={t === x ? 'on' : ''} aria-pressed={t === x} onClick={() => setT(x)}>{x}</button>)}</div>
    <div className="project-grid">{portfolio.filter((p) => t === 'All' || p.type === t).map((p) => <article key={p.title} className="project"><div style={{ backgroundImage: `url(/media/${p.image}.jpg)` }} role="img" aria-label={p.title} /><h3>{p.title}</h3><p>{p.type}, {p.location}</p></article>)}</div>
    <p className="note">Concept imagery shown pending final project photography.</p>
  </>;
}