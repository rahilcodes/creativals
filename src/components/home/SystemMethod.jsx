import React, { useEffect, useRef } from 'react';
import { Reveal, SecNum, WA_INDIA } from '../ui/primitives';

const STEPS = [
  { n: '01', title: 'Targeted ads', tag: 'Attract', body: 'Meta & Google campaigns aimed at your exact customer — by location, intent, and behaviour. No guesswork, no boosting posts.' },
  { n: '02', title: 'A page built to close', tag: 'Convert', body: 'Not a generic homepage — a focused landing page engineered to turn clicks into enquiries. A closer, not a brochure.' },
  { n: '03', title: 'CRM & lead tracking', tag: 'Capture', body: 'Every lead captured, tagged, and tracked automatically. Nothing falls through the cracks. Ever.' },
  { n: '04', title: '24/7 automation', tag: 'Nurture', body: 'Auto follow-up on WhatsApp & email. Your leads get nurtured around the clock — even the ones who enquire at 2 AM.' },
  { n: '05', title: 'Revenue, not reports', tag: 'Close ₹', close: true, body: 'You receive warm, ready-to-buy leads — not traffic metrics that only look good in a PDF.' },
];

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

/* Scroll-driven rail: a yellow line fills as the section crosses the viewport;
   step numbers light up as the "lead" travels past them. */
const SystemMethod = () => {
  const wrapRef = useRef(null);
  const fillRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const wrap = wrapRef.current;
        const fill = fillRef.current;
        if (!wrap || !fill) return;
        const r = wrap.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const p = Math.max(0, Math.min(1, (vh * 0.72 - r.top) / r.height));
        fill.style.height = p * 100 + '%';
        rowRefs.current.forEach((el, i) => {
          if (!el) return;
          const on = p * 5 >= i + 0.45;
          el.style.color = on ? '#FFD84D' : 'rgba(244,242,236,.28)';
          el.style.textShadow = on ? '0 0 28px rgba(255,216,77,.5)' : 'none';
        });
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="system" style={{ background: '#17151A', color: '#F4F2EC' }}>
      <div className="cx-wrap cx-section">
        <Reveal><SecNum n="03" label="The method" dark /></Reveal>
        <Reveal delay={60}>
          <h2 className="cx-display cx-h2" style={{ marginBottom: 16, lineHeight: .92 }}>
            Most agencies run ads.<br />
            <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>We build machines.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="cx-lead cx-lead-light" style={{ margin: '0 0 64px', maxWidth: 560, color: 'rgba(244,242,236,.7)' }}>
            A machine keeps working while you sleep. Here is the exact architecture we deploy for every client —
            five parts, one outcome. Watch the lead travel as you scroll.
          </p>
        </Reveal>

        <div ref={wrapRef} style={{ display: 'flex', flexDirection: 'column', position: 'relative', paddingLeft: 36 }}>
          <div style={{ position: 'absolute', left: 10, top: 0, bottom: 0, width: 2, background: 'rgba(244,242,236,.14)' }} />
          <div ref={fillRef} style={{ position: 'absolute', left: 10, top: 0, height: '0%', width: 2, background: '#FFD84D', transition: 'height .25s linear' }}>
            <div style={{ position: 'absolute', bottom: -6, left: -5, width: 12, height: 12, borderRadius: '50%', background: '#FFD84D', boxShadow: '0 0 18px rgba(255,216,77,.9)' }} />
          </div>

          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 70} className="cx-sysrow">
              <div ref={(el) => { rowRefs.current[i] = el; }} style={{ fontWeight: 900, fontSize: 46, fontStretch: '120%', color: 'rgba(244,242,236,.28)', transition: 'color .3s,text-shadow .3s' }}>
                {s.n}
              </div>
              <div style={{ fontWeight: 800, fontSize: 25, letterSpacing: '-0.01em' }}>{s.title}</div>
              <div className="cx-sysdesc" style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(244,242,236,.65)' }}>{s.body}</div>
              <div
                className="cx-systag"
                style={mono(
                  s.close
                    ? { fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', background: '#FFD84D', color: '#17151A', borderRadius: 999, padding: '9px 15px', whiteSpace: 'nowrap' }
                    : { fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', border: '1px solid rgba(244,242,236,.35)', borderRadius: 999, padding: '8px 14px', whiteSpace: 'nowrap' }
                )}
              >
                {s.tag}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ marginTop: 52, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-cream">Build this for my business →</a>
            <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .55 })}>FREE AUDIT · NO COMMITMENT · REPLY IN 2 HRS</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SystemMethod;
