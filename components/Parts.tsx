import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionSketch } from './Drawings';

type Responsive = { name: string; alt?: string };

/** <picture> for images in /media/opt (1200w and 2400w, AVIF then WebP). Decorative unless alt is given. */
export function ResponsiveImage({ name, alt = '', className, priority }: Responsive & { className?: string; priority?: boolean }) {
  const set = (ext: string) => `/media/opt/${name}-1200.${ext} 1200w, /media/opt/${name}-2400.${ext} 2400w`;
  return <picture className={className}>
    <source type="image/avif" srcSet={set('avif')} sizes="100vw" />
    <source type="image/webp" srcSet={set('webp')} sizes="100vw" />
    <img src={`/media/opt/${name}-1200.webp`} alt={alt} decoding="async" loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} />
  </picture>;
}

/** Page header: photo variant (light overlay, safe text zone on the left) or line-drawing variant. */
export function PageHead({ eyebrow, title, lede, image }: { eyebrow: string; title: string; lede: string; image?: string }) {
  return <section className={`page-head${image ? ' has-image' : ' is-drawing'}`}>
    {image ? <><ResponsiveImage name={image} className="page-head-media" priority /><div className="page-head-shade" /></> : <SectionSketch className="page-head-sketch" />}
    <div className="wrap page-head-inner">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{lede}</p>
    </div>
  </section>;
}

export function SectionHead({ eyebrow, title, id, lede, link }: { eyebrow: string; title: string; id: string; lede?: string; link?: [string, string] }) {
  return <div className="section-head">
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
    {link && <Link href={link[1]} className="line-link">{link[0]} <ArrowRight size={16} aria-hidden="true" /></Link>}
  </div>;
}

export function ContactCTA() {
  return <section className="cta-band" aria-labelledby="cta-h"><div className="wrap cta-inner">
    <div>
      <p className="eyebrow">Next step</p>
      <h2 id="cta-h">Have a project in mind?</h2>
      <p>Tell us about the site, the brief and where you are in the process.</p>
    </div>
    <Link className="btn btn-primary" href="/contact/">Get in touch <ArrowRight size={16} aria-hidden="true" /></Link>
  </div></section>;
}
