import Link from 'next/link';
import { company, nav, registrations } from '../lib/content';

export { Header } from './Header';

export function Footer() {
  return <footer className="footer">
    {registrations.length > 0 && <ul className="wrap reg-strip">
      {registrations.map((r) => <li key={r.body + r.detail}><strong>{r.body}</strong> {r.detail}</li>)}
    </ul>}
    <div className="wrap footer-grid">
      <div className="footer-brand"><span className="brand-mark">BHC</span><small>Engineering &amp; Design</small>
        <Link className="btn btn-accent" href="/contact/">Discuss a project</Link>
      </div>
      <nav aria-label="Footer"><h2 className="footer-h">Explore</h2>{nav.map(([l, h]) => <Link key={h} href={h}>{l}</Link>)}</nav>
      <div><h2 className="footer-h">Contact</h2>
        <a href={`mailto:${company.email}`}>{company.email}</a>
        {company.phone && <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>}
        <address>{company.address.map((a) => <span key={a}>{a}</span>)}</address>
      </div>
    </div>
    <div className="wrap footer-bottom"><span>© {company.founded} {company.legal}</span><span className="mono">Reg. {company.reg}</span></div>
  </footer>;
}
