'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { company, nav, registrations } from '../lib/content';

export function Header() {
  const path = usePathname();
  const home = path === '/';
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);
  const cls = `nav${!home || solid || open ? ' solid' : ''}`;
  return <>
    <header className={cls}>
      <Link href="/" className="brand"><span>BHC</span><small>Engineering &amp; Design</small></Link>
      <nav className="nav-links" aria-label="Main">{nav.map(([l, h]) => <Link key={h} href={h} aria-current={(h === '/' ? path === '/' : path.startsWith(h.slice(0, -1))) ? 'page' : undefined}>{l}</Link>)}</nav>
      <Link className="nav-cta" href="/contact/">Get in touch</Link>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    </header>
    <div className={`mobile-menu${open ? ' open' : ''}`}>
      {nav.map(([l, h]) => <Link key={h} href={h} tabIndex={open ? 0 : -1}>{l}</Link>)}
      <Link className="mobile-cta" href="/contact/" tabIndex={open ? 0 : -1}>Get in touch</Link>
    </div>
  </>;
}

export function Footer() {
  return <footer>
    {registrations.length > 0 && <div className="wrap reg-strip">{registrations.map((r) => <span key={r}>{r}</span>)}</div>}
    <div className="wrap footer-grid">
      <div className="footer-brand">BHC<small>Engineering &amp; Design</small></div>
      <div><h4>Explore</h4>{nav.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}</div>
      <div><h4>Contact</h4><a href={`mailto:${company.email}`}>{company.email}</a>{company.address.map((a) => <span key={a}>{a}</span>)}</div>
    </div>
    <div className="wrap footer-bottom"><span>© 2026 {company.legal}</span><span>Reg. {company.reg}</span></div>
  </footer>;
}
