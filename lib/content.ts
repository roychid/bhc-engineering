export const services = [
  {
    n: '01', title: 'Architectural Design',
    text: 'From the first concept sketch to fully coordinated drawings, we develop the architectural response to a site and a brief, balancing form, function and buildability from day one.',
    points: ['Concept design and design development', 'Working drawings and technical documentation', 'Regulatory submissions and approvals'],
  },
  {
    n: '02', title: 'Engineering Design',
    text: 'Integrated engineering design that turns an architectural concept into something that can actually be built, structurally, mechanically and electrically resolved before it reaches site.',
    points: ['Structural, civil and MEP design', 'Coordinated technical drawings', 'Design resolved against real site conditions'],
  },
  {
    n: '03', title: 'Engineering Consultancy',
    text: 'Independent technical input for clients who need a clear answer before they commit, on feasibility, design direction, cost or risk.',
    points: ['Feasibility and technical due diligence', 'Design review and second opinions', 'Advisory support through planning and delivery'],
  },
  {
    n: '04', title: 'EPC / EPC+F',
    text: 'For medium sized projects, we take on engineering, procurement and construction as one accountable package, with financing structured in where a project needs it.',
    points: ['Engineering, procurement and construction', 'Single point of accountability to handover', 'EPC+F financing structured per project'],
  },
];

export const sectors = [
  { title: 'Commercial', text: 'Offices, retail and mixed use developments designed and engineered to perform for tenants, owners and investors alike.' },
  { title: 'Industrial', text: 'Warehousing, logistics and light industrial facilities engineered for real operational loads, not just a drawing that looks right.' },
  { title: 'Residential', text: 'Private homes and residential developments where architecture and engineering are resolved together from concept to construction.' },
  { title: 'Infrastructure', text: 'Civil and infrastructure work engineered to the standards South African projects are actually held to.' },
  { title: 'Development', text: 'Feasibility, planning and technical direction for clients assembling a project before a single drawing is issued.' },
];

export const projectTypes = sectors.map((s) => s.title);

export const process = [
  ['01', 'Discover', 'We start by listening, to the brief, the site and the constraints, but also to what the client is actually trying to achieve. The best technical solution starts with understanding the real problem.'],
  ['02', 'Define', 'Ambition gets turned into a clear technical direction and scope, tested against budget, site and regulatory reality before any design work is locked in.'],
  ['03', 'Design', 'The architectural and engineering solution is developed together, not in separate silos, so the design that looks right is also the design that can be built.'],
  ['04', 'Engineer', 'Structural, civil and technical detail is resolved to the point where the design can go to site with confidence, not guesswork.'],
  ['05', 'Deliver', 'We support procurement, construction and project execution through to handover, staying accountable for the outcome, not just the drawing set.'],
];

export const software = [
  ['BHC Project Flow', 'A future-ready client journey for briefs, project stages, documents and approvals.'],
  ['BHC Document Control', 'A structured digital layer for drawings, revisions, submissions and project records.'],
  ['BHC Project View', 'A clean project dashboard concept for milestones, communication and delivery visibility.'],
];

// Facts drawn from BHC's CIPC registration and SARS tax compliance status.
export const credentials = [
  'Registered Private Company — CIPC 2026/647641/07',
  'SARS Tax Compliant',
  'Head Office — Johannesburg, South Africa',
];

// Verifiable counts only. Replace with audited figures once available.
export const stats = [
  { n: '2026', label: 'Founded' },
  { n: '03', label: 'Directors' },
  { n: '04', label: 'Core Disciplines' },
  { n: '05', label: 'Sectors Served' },
];

export const presence = {
  hq: {
    label: 'Head Office',
    city: 'Johannesburg, Gauteng',
    country: 'South Africa',
    address: '417 Headingley, Jacobs Avenue cnr Corlett Drive, Fairways, Gauteng, 2196',
  },
  // TODO(client): confirm the countries/cities BHC actually operates in before publishing.
  regions: ['South Africa'],
  note: 'Regional delivery capability across Southern Africa, scoped per project.',
};

// TODO(client): replace with real registrations/memberships (e.g. ECSA, CIDB, SACAP, SAICE)
// and supply logo assets. Do not publish unverified claims.
export const certifications: { name: string; body: string }[] = [];

// TODO(client): supply real client / partner names and logo assets.
export const partners: string[] = [];

// Real project photography and case studies to replace the concept imagery below.
export const portfolio = [
  { type: 'Commercial', title: 'Commercial Development', location: 'Gauteng, South Africa', image: 'sector-commercial' },
  { type: 'Industrial', title: 'Industrial & Logistics Facility', location: 'Southern Africa', image: 'sector-industrial' },
  { type: 'Residential', title: 'Residential Development', location: 'Gauteng, South Africa', image: 'sector-residential' },
  { type: 'Commercial', title: 'Corporate Headquarters Concept', location: 'Johannesburg, South Africa', image: 'hero-home' },
];
