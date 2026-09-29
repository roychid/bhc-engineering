import { PageHead, ContactForm } from '../../components/Parts';
import { company } from '../../lib/content';

export const metadata = { title: 'Contact | BHC Engineering & Design' };

export default function Contact() {
  return <>
    <PageHead title="Get in touch" lede="Tell us about the project and we will come back to you." img="sector-residential" />
    <section className="wrap contact-grid">
      <ContactForm />
      <aside>
        <h3>Head office</h3>
        {company.address.map((a) => <p key={a}>{a}</p>)}
        <h3>Email</h3>
        <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
      </aside>
    </section>
  </>;
}
