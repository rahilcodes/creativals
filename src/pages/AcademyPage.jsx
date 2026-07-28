import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const WA_MSG = 'Hi! I want to join the waitlist for the Creativals Growth Academy.';

const MODULES = [
  {
    n: 'M1',
    title: 'Audience Calculus',
    tilt: 'tilt-l',
    desc: 'How to bypass iOS14 tracking, implement Server-Side Tagging, and find your most profitable cost-per-acquisition across Meta and Google.',
  },
  {
    n: 'M2',
    title: 'Conversion Architecture',
    tilt: 'tilt-r',
    desc: 'The psychological layout blocks that convert traffic at 20%+. How to build landing pages that make the "Yes" inevitable.',
  },
  {
    n: 'M3',
    title: 'Backend Automations',
    tilt: 'tilt-l',
    desc: 'Building zero-delay lead routing via n8n. Setting up WhatsApp API flows to automatically nurture leads for 30 days without human intervention.',
  },
];

const AcademyPage = () => {
  useSEO({
    title: 'Digital Marketing Training in Hyderabad | Creativals Academy',
    description: 'Creativals Academy in Hyderabad: practical, execution-focused training in digital marketing, SEO, and growth from working practitioners.',
    keywords: 'digital marketing course hyderabad, seo training hyderabad, performance marketing course hyderabad',
  });

  return (
    <>
      {/* 1. HERO — indigo */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 })}>
              <span className="cx-dot" />
              The Growth Academy
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 30 }}>
              Learn the math<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>behind the millions.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 0 38px', maxWidth: 560, fontSize: 18, lineHeight: 1.6, color: 'rgba(244,242,236,.85)' }}>
              An invite-only incubator teaching founders and media buyers the exact Traffic, Conversion, and Automation
              systems we use to scale Indian enterprises.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
              Join the Waitlist →
            </a>
          </Reveal>
        </div>
      </section>

      {/* 2. CURRICULUM — cream */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The curriculum" /></Reveal>
          <div style={{ marginBottom: 60 }}>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                The 8-week<br />
                <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>curriculum.</span>
              </h2>
            </Reveal>
          </div>
          <div className="cx-grid3">
            {MODULES.map((m, i) => (
              <Reveal key={m.n} delay={i * 120}>
                <div className={`cx-card ${m.tilt}`} style={{ height: '100%', boxSizing: 'border-box' }}>
                  <div style={{ fontWeight: 900, fontSize: 56, fontStretch: '120%', lineHeight: 1, color: '#4F46E5', marginBottom: 20 }}>{m.n}</div>
                  <div style={mono({ fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(23,21,26,.5)', marginBottom: 8 })}>
                    Module {i + 1}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 22, margin: '0 0 12px', letterSpacing: '-0.01em' }}>{m.title}</div>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(23,21,26,.68)' }}>{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COHORT — yellow */}
      <section style={{ background: '#FFD84D', color: '#17151A', borderTop: '4px solid #17151A', borderBottom: '4px solid #17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="The cohort" yellow /></Reveal>
          <div className="cx-grid2" style={{ alignItems: 'end' }}>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 0 }}>
                Only 50 operators<br />
                <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>per cohort.</span>
              </h2>
            </Reveal>
            <div>
              <Reveal delay={100}>
                <div style={mono({ fontSize: 12, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', background: '#17151A', color: '#FFD84D', borderRadius: 999, padding: '9px 16px', display: 'inline-block', marginBottom: 18 })}>
                  Cohort starting Q4 2026
                </div>
              </Reveal>
              <Reveal delay={160}>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'rgba(23,21,26,.75)', maxWidth: 460 }}>
                  Invite-only, execution-focused, and capped small on purpose. Every operator ships real campaigns —
                  not certificates.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA — ink */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section" style={{ textAlign: 'center' }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 26 })}>
              <span className="cx-dot" />
              Cohort starting Q4 2026 · 50 seats
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 22 }}>
              Join the<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>waitlist.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 auto 36px', maxWidth: 460, fontSize: 17, lineHeight: 1.6, color: 'rgba(244,242,236,.75)' }}>
              Only 50 operators accepted per cohort.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
              Get Early Access →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default AcademyPage;
