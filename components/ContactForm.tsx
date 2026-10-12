'use client';
import { useState } from 'react';
import { company } from '../lib/content';

// Behaviour unchanged by design (owner deferred form changes): builds a mailto: link with the details.
export function ContactForm() {
  const [f, setF] = useState({ name: '', email: '', phone: '', type: 'Residential', message: '' });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone}\nProject type: ${f.type}\n\n${f.message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('Enquiry from ' + f.name)}&body=${encodeURIComponent(body)}`;
  };
  return <form className="form" onSubmit={submit} aria-labelledby="enquiry-h">
    <h2 id="enquiry-h" className="form-title">Project enquiry</h2>
    <p className="form-hint">Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required. Sending opens your email app with these details filled in.</p>
    <label><span>Name <Req /></span><input required value={f.name} onChange={set('name')} autoComplete="name" /></label>
    <label><span>Email <Req /></span><input required type="email" value={f.email} onChange={set('email')} autoComplete="email" /></label>
    <label><span>Phone</span><input type="tel" value={f.phone} onChange={set('phone')} autoComplete="tel" /></label>
    <label><span>Project type</span><select value={f.type} onChange={set('type')}>{['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Development', 'Other'].map((t) => <option key={t}>{t}</option>)}</select></label>
    <label className="full"><span>How can we help? <Req /></span><textarea required rows={6} value={f.message} onChange={set('message')} /></label>
    <button className="btn btn-primary" type="submit">Send enquiry</button>
  </form>;
}

const Req = () => <span className="req" aria-hidden="true">*</span>;
