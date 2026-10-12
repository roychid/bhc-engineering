import type { CaseStudy } from '../lib/content';

/** Case-study card. Rendered only for entries in `caseStudies` (real, client-approved projects). */
export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return <article className="case">
    {study.image && <img className="case-img" src={study.image.src} alt={study.image.alt} loading="lazy" decoding="async" />}
    <p className="eyebrow">{study.sector} · {study.location} · {study.year}</p>
    <h3>{study.title}</h3>
    <p>{study.summary}</p>
    <dl className="case-meta">
      <div><dt>Our role</dt><dd>{study.role}</dd></div>
      <div><dt>Scope</dt><dd>{study.scope.join(', ')}</dd></div>
    </dl>
  </article>;
}
