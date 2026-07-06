/* eslint-disable react-refresh/only-export-components -- shared constants are intentionally colocated */
import React, { useEffect, useRef, useState } from 'react';

export const WA_INDIA = 'https://wa.me/917997001700';
export const WA_USA = 'https://wa.me/16286284743';

export const waLink = (msg) => `${WA_INDIA}?text=${encodeURIComponent(msg)}`;

/* Scroll-reveal wrapper — replicates the design's data-reveal behaviour.
   delay is in ms and staggers the entrance. */
export function Reveal({ delay = 0, as: Tag = 'div', className = '', style, children, ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`cx-reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ '--d': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* Infinite ticker marquee. Renders the segment twice for a seamless loop. */
export function Marquee({ children, speed = 22, reverse = false, style, segStyle }) {
  return (
    <div className="cx-marquee" style={style} aria-hidden="true">
      <div className={`cx-marquee-track${reverse ? ' rev' : ''}`} style={{ '--speed': `${speed}s` }}>
        <div className="cx-marquee-seg" style={segStyle}>{children}</div>
        <div className="cx-marquee-seg" style={segStyle}>{children}</div>
      </div>
    </div>
  );
}

/* Spinning circular text badge with a center action. */
export function SpinBadge({ text, size = 116, href = WA_INDIA, inset = 35, style }) {
  const r = size * 0.457;
  const c = size / 2 + 3;
  return (
    <div style={{ position: 'relative', width: size, height: size, flex: 'none', ...style }}>
      <div style={{ position: 'absolute', inset: 0, animation: 'cxSpin 14s linear infinite' }}>
        <svg viewBox={`0 0 ${size + 6} ${size + 6}`} width={size} height={size}>
          <defs>
            <path id={`cx-circ-${size}`} d={`M${c},${c} m-${r},0 a${r},${r} 0 1,1 ${r * 2},0 a${r},${r} 0 1,1 -${r * 2},0`} />
          </defs>
          <text style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 13, letterSpacing: '.22em', fill: '#F4F2EC' }}>
            <textPath href={`#cx-circ-${size}`}>{text}</textPath>
          </text>
        </svg>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Get a free audit on WhatsApp"
        style={{
          position: 'absolute', inset, borderRadius: '50%', background: '#FFD84D', color: '#17151A',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900,
          fontSize: size > 130 ? 24 : 20, textDecoration: 'none', transition: 'transform .15s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.12)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        →
      </a>
    </div>
  );
}

/* Yellow scroll progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      el.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div ref={ref} style={{ position: 'fixed', top: 0, left: 0, height: 4, width: 0, background: '#FFD84D', zIndex: 99 }} />;
}

/* Numbered section chip: [01] label — colors adapt to section background. */
export function SecNum({ n, label, dark = false, yellow = false }) {
  const chip = yellow
    ? { background: '#17151A', color: '#FFD84D' }
    : dark
      ? { background: '#FFD84D', color: '#17151A' }
      : { background: '#17151A', color: '#F4F2EC' };
  return (
    <div className="cx-secnum">
      <span className="n" style={chip}>{n}</span>
      <span className="t">{label}</span>
    </div>
  );
}
