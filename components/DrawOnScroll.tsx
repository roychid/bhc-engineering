'use client';
import { useEffect, useRef, useState } from 'react';

type DrawState = 'static' | 'armed' | 'drawn';

/**
 * Draws child SVG paths marked `.draw` once, when scrolled into view.
 * Server HTML is fully drawn ('static'); it only arms when JS runs, motion is allowed
 * and the element starts below the fold, so no-JS and reduced-motion users see the final state.
 */
export function DrawOnScroll({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<DrawState>('static');

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setState('armed');
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setState('drawn'); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <div ref={ref} className={className} data-draw={state}>{children}</div>;
}
