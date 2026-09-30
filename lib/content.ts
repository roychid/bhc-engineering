export const company = {
  name: 'BHC Engineering & Design',
  legal: 'BHC Engineering and Design (Pty) Ltd',
  reg: '2026/647641/07',
  email: 'projects@bhcengineering.co.za',
  address: ['417 Headingley, Jacobs Avenue', 'cnr Corlett Drive, Fairways', 'Johannesburg, Gauteng, 2196'],
};

export const nav: [string, string][] = [['Home', '/'], ['About', '/about/'], ['Services', '/services/'], ['Projects', '/projects/'], ['Contact', '/contact/']];

export const facts = [
  { n: '4', label: 'integrated disciplines under one roof' },
  { n: '5', label: 'sectors: residential to infrastructure' },
  { n: '1', label: 'point of accountability, brief to handover' },
  { n: 'EPC+F', label: 'delivery with financing where required' },
];

export const services = [
  { title: 'Architectural Design', text: 'Concepts, drawings and design thinking shaped around buildability, function and ambition.', points: ['Concept and schematic design', 'Design development and documentation', 'Regulatory submissions'] },
  { title: 'Engineering Design', text: 'Integrated engineering design and technical documentation for projects that need to move from idea to execution.', points: ['Coordinated technical drawings', 'Specifications and schedules', 'Design review and resolution'] },
  { title: 'Engineering Consultancy', text: 'Technical insight that helps clients make clearer decisions across planning, design and delivery.', points: ['Feasibility and technical advice', 'Options and risk assessment', 'Independent project review'] },
  { title: 'EPC / EPC+F Delivery', text: 'Medium-sized project delivery from engineering and procurement through construction, with financing capability where required.', points: ['Engineering, procurement, construction', 'Single contract responsibility', 'Financing subject to project structure'] },
];

export const sectors = [
  { name: 'Residential', text: 'Private homes, cluster housing and multi-unit developments designed for the way people live.', img: 'sector-residential', pos: 'center' },
  { name: 'Commercial', text: 'Offices, retail and mixed-use buildings that work hard for their owners and occupants.', img: 'sector-commercial', pos: 'center' },
  { name: 'Industrial', text: 'Warehousing, logistics and light-industrial facilities planned around throughput and cost.', img: 'sector-industrial', pos: 'center' },
  { name: 'Infrastructure', text: 'Site works, services and supporting infrastructure that projects depend on.', img: 'hero-home', pos: 'left center' },
  { name: 'Development', text: 'Technical support for developers from feasibility and layout through to delivery.', img: 'hero-home', pos: 'right center' },
];

export const approach = [
  ['Listen and define', 'We start with the brief, the site and the constraints, and agree what the project has to achieve.'],
  ['Design', 'Architectural and engineering solutions are developed together, so problems surface early, on paper.'],
  ['Document', 'Coordinated drawings and specifications that a contractor can price and build without guessing.'],
  ['Procure', 'Support with tendering, contractor evaluation and appointment, or direct procurement under EPC.'],
  ['Build', 'Site support and contract administration to keep the building true to the design, on programme and budget.'],
  ['Hand over', 'Completion, records and close-out, with the team still reachable afterwards.'],
];

export const digital = [
  ['Coordinated 3D models', 'Architecture and engineering worked in one model so clashes are found before site.'],
  ['Controlled documents', 'Every drawing, revision and submission tracked, so everyone builds from the current set.'],
  ['Clear project records', 'Decisions, approvals and milestones kept in one place the client can see.'],
];

export const values = [
  ['Buildable first', 'A design is only finished when it can be documented, procured and built.'],
  ['Engineering enables ambition', 'Technical rigour should widen what a client can do, not narrow it.'],
  ['Clarity', 'Plain scope, plain communication, no surprises on cost or programme.'],
  ['Accountability', 'One team answerable from first sketch to handover.'],
  ['Integrity', 'Honest advice, including when the answer is no.'],
];

export const portfolio = [
  { type: 'Commercial', title: 'Commercial Development', location: 'Gauteng, South Africa', image: 'sector-commercial' },
  { type: 'Industrial', title: 'Industrial and Logistics Facility', location: 'Southern Africa', image: 'sector-industrial' },
  { type: 'Residential', title: 'Residential Development', location: 'Gauteng, South Africa', image: 'sector-residential' },
  { type: 'Commercial', title: 'Corporate Headquarters Concept', location: 'Johannesburg, South Africa', image: 'hero-home' },
];

// Add approved leadership profiles here; the section only renders when populated.
export const leaders: { name: string; role: string; bio: string }[] = [];
// Add real registrations (ECSA, SACAP, CIDB...) here; the strip only renders when populated.
export const registrations: string[] = [];
