import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHead, ContactCTA, SectionHead } from '../../components/Parts';
import { SectorDrawing } from '../../components/Drawings';
import { CaseStudyCard } from '../../components/CaseStudyCard';
import { sectors, caseStudies } from '../../lib/content';

export const metadata = { title: 'Capabilities', description: 'The project types BHC Engineering & Design is set up to design, engineer and deliver.' };

export default function Projects() {
  return <>
    <PageHead eyebrow="Capabilities" title="Project types we design, engineer and deliver" lede="From private homes to supporting infrastructure, the same integrated team carries each project from brief to handover." />

    <section className="section" aria-labelledby="types-h"><div className="wrap">
      <SectionHead eyebrow="Sectors" id="types-h" title="Project types" />
      <ul className="types">{sectors.map((s) => <li key={s.name} className="type">
        <SectorDrawing kind={s.drawing} />
        <h3>{s.name}</h3>
        <p>{s.text}</p>
      </li>)}</ul>
    </div></section>

    <section className="section surface-alt" id="delivered" aria-labelledby="delivered-h"><div className="wrap">
      <SectionHead eyebrow="Case studies" id="delivered-h" title="Delivered projects" />
      {caseStudies.length > 0
        ? <div className="case-grid">{caseStudies.map((c) => <CaseStudyCard key={c.title} study={c} />)}</div>
        : <div className="empty">
            <p>Case studies will be published here once projects are complete and approved by clients. Each will set out the brief, our role, the disciplines involved and the result.</p>
            <Link href="/contact/" className="line-link">Discuss your project <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>}
    </div></section>

    <ContactCTA />
  </>;
}
