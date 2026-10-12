// All site copy and data. Sections marked "renders only when populated" stay hidden while
// their array is empty, so never add placeholder or invented entries.

export const company = {
  name: 'BHC Engineering & Design',
  legal: 'BHC Engineering and Design (Pty) Ltd',
  reg: '2026/647641/07',
  founded: '2026',
  email: 'projects@bhcengineering.co.za',
  // Add the confirmed enquiry phone number, e.g. '+27 11 000 0000'. Hidden while empty.
  phone: '',
  address: ['417 Headingley, Jacobs Avenue', 'cnr Corlett Drive, Fairways', 'Johannesburg, Gauteng, 2196'],
};

// The /projects/ route is labelled "Capabilities" until delivered case studies are added.
export const nav: [string, string][] = [['Home', '/'], ['About', '/about/'], ['Services', '/services/'], ['Capabilities', '/projects/'], ['Contact', '/contact/']];

export type Service = { slug: string; title: string; text: string; points: string[] };

export const services: Service[] = [
  { slug: 'architecture', title: 'Architectural Design', text: 'Concepts, drawings and design thinking shaped around buildability, function and ambition.', points: ['Concept and schematic design', 'Design development and documentation', 'Regulatory submissions'] },
  { slug: 'engineering', title: 'Engineering Design', text: 'Integrated engineering design and technical documentation for projects that need to move from idea to execution.', points: ['Coordinated technical drawings', 'Specifications and schedules', 'Design review and resolution'] },
  { slug: 'consultancy', title: 'Engineering Consultancy', text: 'Technical insight that helps clients make clearer decisions across planning, design and delivery.', points: ['Feasibility and technical advice', 'Options and risk assessment', 'Independent project review'] },
  { slug: 'epc', title: 'EPC / EPC+F Delivery', text: 'Medium-sized project delivery from engineering and procurement through construction, with financing capability where required.', points: ['Engineering, procurement, construction', 'Single contract responsibility', 'Financing subject to project structure'] },
];

export type Drawing = 'residential' | 'commercial' | 'industrial' | 'infrastructure' | 'development';
export type Sector = { name: string; text: string; drawing: Drawing };

export const sectors: Sector[] = [
  { name: 'Residential', text: 'Private homes, cluster housing and multi-unit developments designed for the way people live.', drawing: 'residential' },
  { name: 'Commercial', text: 'Offices, retail and mixed-use buildings that work hard for their owners and occupants.', drawing: 'commercial' },
  { name: 'Industrial', text: 'Warehousing, logistics and light-industrial facilities planned around throughput and cost.', drawing: 'industrial' },
  { name: 'Infrastructure', text: 'Site works, services and supporting infrastructure that projects depend on.', drawing: 'infrastructure' },
  { name: 'Development', text: 'Technical support for developers from feasibility and layout through to delivery.', drawing: 'development' },
];

// Delivery stages and what the client receives at each one (describes the process, not past work).
export type Stage = { title: string; text: string; receive: string[] };

export const approach: Stage[] = [
  { title: 'Listen and define', text: 'We start with the brief, the site and the constraints, and agree what the project has to achieve.', receive: ['An agreed brief and project objectives', 'Known site constraints, written down', 'A defined scope for the next stage'] },
  { title: 'Design', text: 'Architectural and engineering solutions are developed together, so problems surface early, on paper.', receive: ['Design options to review and decide on', 'Architecture and engineering resolved together', 'Issues raised early, with recommendations'] },
  { title: 'Document', text: 'Coordinated drawings and specifications that a contractor can price and build without guessing.', receive: ['A coordinated drawing set', 'Specifications and schedules', 'Regulatory submission documents'] },
  { title: 'Procure', text: 'Support with tendering, contractor evaluation and appointment, or direct procurement under EPC.', receive: ['Tender documentation', 'Contractor evaluation and a recommendation', 'Or a single EPC contract'] },
  { title: 'Build', text: 'Site support and contract administration to keep the building true to the design, on programme and budget.', receive: ['Site support from the design team', 'Contract administration', 'Design queries resolved by the people who drew it'] },
  { title: 'Hand over', text: 'Completion, records and close-out, with the team still reachable afterwards.', receive: ['Completion and close-out records', 'Project documentation in one place', 'A team that is still reachable'] },
];

// Commitments shown in the Home "proof" section. Each restates an existing promise in plain terms.
export const commitments: [string, string][] = [
  ['One point of accountability', 'One team is answerable from first sketch to handover, so you are never left to reconcile the architect and the engineer.'],
  ['Drawings a contractor can price', 'Coordinated drawings and specifications that a contractor can price and build without guessing.'],
  ['Decisions on the record', 'Decisions, approvals and milestones kept in one place you can see.'],
  ['Honest advice', 'Plain scope, plain communication, and a straight answer, including when the answer is no.'],
];

export const digital: [string, string][] = [
  ['Coordinated 3D models', 'Architecture and engineering worked in one model so clashes are found before site.'],
  ['Controlled documents', 'Every drawing, revision and submission tracked, so everyone builds from the current set.'],
  ['Clear project records', 'Decisions, approvals and milestones kept in one place the client can see.'],
];

export const values: [string, string][] = [
  ['Buildable first', 'A design is only finished when it can be documented, procured and built.'],
  ['Engineering enables ambition', 'Technical rigour should widen what a client can do, not narrow it.'],
  ['Clarity', 'Plain scope, plain communication, no surprises on cost or programme.'],
  ['Accountability', 'One team answerable from first sketch to handover.'],
  ['Integrity', 'Honest advice, including when the answer is no.'],
];

// ---------------------------------------------------------------------------
// OWNER TO SUPPLY. Each section below renders only when its array has entries.
// ---------------------------------------------------------------------------

export type Leader = { name: string; role: string; bio: string; registration?: string };
// Approved leadership profiles. Example shape (do not publish until approved):
// { name: 'Full name', role: 'Director, Engineering', bio: 'Two or three factual sentences.', registration: 'ECSA Pr Eng 20XXXXXX' }
export const leaders: Leader[] = [];

export type Registration = { body: string; detail: string };
// Verified professional and industry registrations, e.g.
// { body: 'CIDB', detail: 'Grade and class of works, registration number' }
// { body: 'SACAP', detail: 'Category and registration number of the registered person' }
export const registrations: Registration[] = [];

export type CaseStudy = {
  title: string;
  sector: Sector['name'];
  location: string;
  year: string;
  role: string; // what BHC did, e.g. 'Architecture and engineering design'
  scope: string[];
  summary: string;
  image?: { src: string; alt: string }; // real project photography only, e.g. '/media/projects/name-1200.webp'
};
// Client-approved, delivered projects only. Clearly label any team experience gained before BHC.
export const caseStudies: CaseStudy[] = [];
