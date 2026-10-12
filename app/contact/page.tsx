import { PageHead } from '../../components/Parts';
import { ContactForm } from '../../components/ContactForm';
import { company } from '../../lib/content';

export const metadata = { title: 'Contact', description: 'Tell BHC Engineering & Design about your project.' };

export default function Contact() {
  return <>
    <PageHead eyebrow="Contact" title="Get in touch" lede="Tell us about the project and we will come back to you." />
    <section className="section" aria-label="Enquiry and contact details"><div className="wrap contact-grid">
      <ContactForm />
      <aside className="contact-aside">
        <h2>Head office</h2>
        <address>{company.address.map((a) => <span key={a}>{a}</span>)}</address>
        <h2>Email</h2>
        <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
        {company.phone && <><h2>Phone</h2><p><a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a></p></>}
        <h2>Useful to include</h2>
        <ul className="ticks">
          <li>Site location and size</li>
          <li>Project type and what it has to achieve</li>
          <li>Where you are now: idea, design, approvals or tender</li>
          <li>Any programme or budget constraints</li>
        </ul>
      </aside>
    </div></section>
  </>;
}
