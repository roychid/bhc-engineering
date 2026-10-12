// Inline line drawings. Decorative (aria-hidden); meaning is always carried by adjacent text.
// Paths with className="draw" and pathLength={1} can be animated by <DrawOnScroll>.
import type { Drawing } from '../lib/content';

type SvgProps = { className?: string };

const Ground = () => <><path d="M8 104H192" className="dw-strong" /><path d="M14 110l-6 6M34 110l-6 6M54 110l-6 6M74 110l-6 6M94 110l-6 6M114 110l-6 6M134 110l-6 6M154 110l-6 6M174 110l-6 6M194 110l-6 6" className="dw-faint" /></>;

const sectorPaths: Record<Drawing, React.ReactNode> = {
  residential: <>
    <Ground />
    <path className="draw" pathLength={1} d="M52 104V56H148V104M40 58L100 26L160 58" />
    <path className="dw-faint" d="M52 80H148M66 66h20v10H66zM114 66h20v10h-20zM90 86h20v18H90zM66 88h16v10H66zM118 88h16v10h-16z" />
  </>,
  commercial: <>
    <Ground />
    <path className="draw" pathLength={1} d="M60 104V14H120V104M120 104V58H168V104" />
    <path className="dw-faint" d="M60 26H120M60 38H120M60 50H120M60 62H120M60 74H120M60 86H120M80 14V104M100 14V104M120 72H168M120 86H168M144 58V104" />
  </>,
  industrial: <>
    <Ground />
    <path className="draw" pathLength={1} d="M24 104V54L100 38L176 54V104" />
    <path className="dw-faint" d="M24 54H176M62 46V104M100 38V104M138 46V104M36 72h20v32H36zM70 72h24v32H70zM144 80h20v24h-20z" />
  </>,
  infrastructure: <>
    <path className="dw-strong" d="M8 50H72L84 98H116L128 50H192" />
    <path className="dw-faint" d="M16 58l-8 8M32 58l-8 8M48 58l-8 8M64 58l-8 8M144 58l-8 8M160 58l-8 8M176 58l-8 8M192 58l-8 8M84 98l-8 8M100 98l-8 8M116 98l-8 8" />
    <path className="draw" pathLength={1} d="M100 74a12 12 0 1 1 0 24a12 12 0 1 1 0-24M30 50V30M30 30h26" />
    <path className="dw-faint" d="M72 50L84 98M128 50L116 98" />
  </>,
  development: <>
    <path className="dw-faint" strokeDasharray="4 4" d="M16 12H184V108H16Z" />
    <path className="draw" pathLength={1} d="M16 60H184M100 12V108" />
    <path className="dw-faint" d="M28 22h28v28H28zM64 22h28v28H64zM108 22h28v28h-28zM144 22h28v28h-28zM28 70h28v28H28zM64 70h28v28H64zM108 70h64v28h-64z" />
  </>,
};

export function SectorDrawing({ kind, className }: SvgProps & { kind: Drawing }) {
  return <svg className={`drawing ${className ?? ''}`} viewBox="0 0 200 120" aria-hidden="true" focusable="false">{sectorPaths[kind]}</svg>;
}

const stages = ['Define', 'Design', 'Document', 'Procure', 'Build', 'Hand over'];
const lanes = [110, 170, 230, 290];

/** Four discipline lines that merge into one line of accountability. Wide and tall variants. */
export function DisciplinesDiagram() {
  return <>
    <svg className="diagram diagram-wide" viewBox="0 0 1000 380" aria-hidden="true" focusable="false">
      {stages.map((s, i) => <g key={s}><path className="dw-faint" strokeDasharray="3 6" d={`M${100 + i * 160} 48V350`} /><text x={100 + i * 160} y="32" textAnchor="middle" className="dg-label">{`0${i + 1} ${s}`}</text></g>)}
      {lanes.map((y, i) => <g key={y}>
        <text x="20" y={y - 12} className="dg-label">{`0${i + 1}`}</text>
        <path className="draw dg-lane" pathLength={1} style={{ '--d': `${i * 120}ms` } as React.CSSProperties} d={`M20 ${y}H200C320 ${y} 320 200 420 200`} />
      </g>)}
      <path className="draw dg-merge" pathLength={1} style={{ '--d': '500ms' } as React.CSSProperties} d="M420 200H962" />
      <path className="dg-merge" d="M950 190L966 200L950 210" />
      <text x="440" y="186" className="dg-label dg-strong">ONE TEAM · ONE POINT OF ACCOUNTABILITY</text>
    </svg>
    <svg className="diagram diagram-tall" viewBox="0 0 360 600" aria-hidden="true" focusable="false">
      {stages.map((s, i) => <g key={s}><path className="dw-faint" strokeDasharray="3 6" d={`M24 ${60 + i * 96}H336`} /><text x="336" y={52 + i * 96} textAnchor="end" className="dg-label">{`0${i + 1} ${s}`}</text></g>)}
      {[60, 120, 180, 240].map((x, i) => <g key={x}>
        <text x={x} y="34" textAnchor="middle" className="dg-label">{`0${i + 1}`}</text>
        <path className="draw dg-lane" pathLength={1} style={{ '--d': `${i * 120}ms` } as React.CSSProperties} d={`M${x} 44V110C${x} 190 150 190 150 250`} />
      </g>)}
      <path className="draw dg-merge" pathLength={1} style={{ '--d': '500ms' } as React.CSSProperties} d="M150 250V578" />
      <path className="dg-merge" d="M140 566L150 582L160 566" />
    </svg>
  </>;
}

/** Building section sketch for drawing-style page headers. */
export function SectionSketch({ className }: SvgProps) {
  return <svg className={`sketch ${className ?? ''}`} viewBox="0 0 480 320" aria-hidden="true" focusable="false">
    <path className="dw-faint" d="M0 270H480" />
    <path className="dw-faint" d="M10 278l-8 8M40 278l-8 8M70 278l-8 8M100 278l-8 8M130 278l-8 8M160 278l-8 8M190 278l-8 8M220 278l-8 8M250 278l-8 8M280 278l-8 8M310 278l-8 8M340 278l-8 8M370 278l-8 8M400 278l-8 8M430 278l-8 8M460 278l-8 8" />
    <path className="dw-strong" d="M110 270V60H370V270M96 60H384M110 130H370M110 200H370" />
    <path className="dw-faint" d="M150 60V270M240 60V270M330 60V270M100 270v22h40v-22M230 270v22h20v-22M320 270v22h40v-22" />
    <path className="dw-accent" d="M420 60V270M414 66l12-12M414 136l12-12M414 206l12-12M414 276l12-12M410 60h20M410 130h20M410 200h20M410 270h20" />
    <text x="436" y="64" className="dg-label">+9.000</text><text x="436" y="134" className="dg-label">+6.000</text>
    <text x="436" y="204" className="dg-label">+3.000</text><text x="436" y="274" className="dg-label">±0.000</text>
  </svg>;
}
