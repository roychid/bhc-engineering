export const services = [
  { n: '01', title: 'Architectural Design', text: 'Concepts, drawings and design thinking shaped around buildability, function and ambition.' },
  { n: '02', title: 'Engineering Design', text: 'Integrated engineering design and technical documentation for projects that need to move from idea to execution.' },
  { n: '03', title: 'Engineering Consultancy', text: 'Technical insight that helps clients make clearer decisions across planning, design and delivery.' },
  { n: '04', title: 'EPC / EPC+F', text: 'Medium-sized project delivery from engineering and procurement through construction, with financing capability where required.' },
];

export const projectTypes = ['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Development'];

export const process = [
  ['01', 'Discover', 'Understand the brief, site, constraints and opportunity.'],
  ['02', 'Define', 'Turn ambition into a clear technical direction and scope.'],
  ['03', 'Design', 'Develop the architectural and engineering solution.'],
  ['04', 'Engineer', 'Resolve the details that make the design buildable.'],
  ['05', 'Deliver', 'Support procurement, construction and project execution.'],
];

export const software = [
  ['BHC PROJECT FLOW', 'A future-ready client journey for briefs, project stages, documents and approvals.'],
  ['BHC DOCUMENT CONTROL', 'A structured digital layer for drawings, revisions, submissions and project records.'],
  ['BHC PROJECT VIEW', 'A clean project dashboard concept for milestones, communication and delivery visibility.'],
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
