'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '../lib/content';

const isCurrent = (href: string, path: string) => (href === '/' ? path === '/' : path.startsWith(href.slice(0, -1)));

/**
 * Site header. The mobile menu behaves like a modal disclosure (pattern from Radix Dialog):
 * Escape closes it, focus moves in on open and back to the toggle on close, and the rest
 * of the page is made inert while it is open. It is `hidden` (removed from the a11y tree) when closed.
 */
export function Header() {
  const path = usePathname();
  const home = path === '/';
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  useEffect(() => {
    if (!open) return;
    const outside = [document.getElementById('main'), document.querySelector<HTMLElement>('body > footer')];
    outside.forEach((el) => { if (el) el.inert = true; });
    document.body.style.overflow = 'hidden';
    menu.current?.querySelector<HTMLElement>('a')?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); button.current?.focus(); } };
    const desktop = window.matchMedia('(min-width: 981px)');
    const onResize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      outside.forEach((el) => { if (el) el.inert = false; });
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  const cls = `nav${!home || solid || open ? ' solid' : ''}`;
  return <header className={cls}>
    <Link href="/" className="brand"><span className="brand-mark">BHC</span><small>Engineering &amp; Design</small></Link>
    <nav className="nav-links" aria-label="Main">{nav.map(([l, h]) => <Link key={h} href={h} aria-current={isCurrent(h, path) ? 'page' : undefined}>{l}</Link>)}</nav>
    <Link className="btn btn-accent nav-cta" href="/contact/">Get in touch</Link>
    <button ref={button} type="button" className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">
      {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
    </button>
    <nav ref={menu} id="mobile-menu" className="mobile-menu" aria-label="Mobile" hidden={!open}>
      {nav.map(([l, h]) => <Link key={h} href={h} onClick={() => setOpen(false)} aria-current={isCurrent(h, path) ? 'page' : undefined}>{l}</Link>)}
      <Link className="btn btn-accent mobile-cta" href="/contact/" onClick={() => setOpen(false)}>Get in touch</Link>
    </nav>
  </header>;
}
