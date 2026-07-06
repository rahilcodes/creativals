import React, { useEffect, useState } from 'react';
import { Reveal, SpinBadge, WA_INDIA } from '../ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const STEPS = [
  { n: '1', title: 'You WhatsApp us', body: 'Send a quick message. We reply within 30 minutes during business hours to schedule a time.' },
  { n: '2', title: 'We audit your brand', body: 'We silently review your ads, website, and competitors to find the exact revenue leaks.' },
  { n: '3', title: 'You get the blueprint', body: 'A custom 30-day growth plan. Hire us to build it — or keep the plan for free.' },
];

const FinalCTA = () => {
  const [slots, setSlots] = useState(3);

  useEffect(() => {
    const t = setTimeout(() => setSlots(2), 16000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="contact" style={{ background: '#4F46E5', color: '#F4F2EC', position: 'relative', overflow: 'hidden' }}>
      <div className="cx-wrap" style={{ paddingTop: 110, paddingBottom: 96, position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap' }}>
          <div>
            <Reveal>
              <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 34 })}>
                <span className="cx-dot" />
                Now accepting clients · Only <span style={{ color: '#FFD84D', fontWeight: 600 }}>{slots}</span> audit slots left this month
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2-xl" style={{ margin: 0 }}>
                Ready to stop<br />
                <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>guessing?</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p style={{ margin: '30px 0 0', maxWidth: 480, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,242,236,.85)', textWrap: 'pretty' }}>
                Every day you wait, you lose money to the business down the street. One free call. No tricky
                contracts. Just a clear plan to scale.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 38, flexWrap: 'wrap' }}>
                <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-btn cx-btn-yellow" style={{ padding: '21px 34px', fontSize: 14 }}>
                  Claim Free Brand Audit →
                </a>
                <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .75 })}>100% FREE · 30-MIN CALL</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={100} className="cx-hide-md">
            <SpinBadge text="FREE AUDIT · NO CONTRACTS · FREE AUDIT · " size={150} inset={45} style={{ marginTop: 20 }} />
          </Reveal>
        </div>

        {/* steps */}
        <div className="cx-grid3" style={{ gap: 24, marginTop: 76 }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div style={{ border: '1px solid rgba(244,242,236,.35)', borderRadius: 16, padding: '28px 26px', background: 'rgba(23,21,26,.15)', height: '100%', boxSizing: 'border-box' }}>
                <div style={{ fontWeight: 900, fontSize: 38, fontStretch: '120%', color: '#FFD84D', marginBottom: 12 }}>{s.n}</div>
                <div style={{ fontWeight: 800, fontSize: 19, marginBottom: 8 }}>{s.title}</div>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'rgba(244,242,236,.75)' }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
