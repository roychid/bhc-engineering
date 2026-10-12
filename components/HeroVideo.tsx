'use client';
import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

/**
 * Background video with a visible pause/play control (WCAG 2.2.2).
 * Autoplays only on wider screens without reduced motion; otherwise the poster stays and nothing downloads
 * (preload="none") until the visitor presses play. If the video fails, the poster remains and the control hides.
 */
export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  const play = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => setPlaying(false));
  };

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wide = window.matchMedia('(min-width: 768px)').matches;
    if (!reduce && wide) play();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) play(); else v.pause();
  };

  return <>
    <video ref={ref} className="hero-video" muted loop playsInline preload="none" poster={poster} aria-hidden="true"
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setFailed(true)}>
      <source src={src} type="video/mp4" onError={() => setFailed(true)} />
    </video>
    {!failed && <button type="button" className="hero-toggle" onClick={toggle} aria-label={playing ? 'Pause background video' : 'Play background video'}>
      {playing ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
    </button>}
  </>;
}
