import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const WA_MSG = 'Hi! I want to learn more about the internal tools you build for clients.';

const PRODUCTS = [
  {
    n: '01',
    name: 'OmniTrack Pixel',
    status: 'Live',
    live: true,
    tilt: 'tilt-l',
    desc: 'Our proprietary tracking script that bypasses iOS14 restrictions using Server-Side Tagging to recover 30%+ of "lost" ad attribution data.',
  },
  {
    n: '02',
    name: 'LeadVelocity CRM',
    status: 'Live',
    live: true,
    tilt: 'tilt-r',
    desc: 'A pre-configured GoHighLevel snapshot customized for Indian sales teams. Features built-in WhatsApp API and predictive lead scoring.',
  },
  {
    n: '03',
    name: 'CreativeBrain UI',
    status: 'Internal',
    live: false,
    tilt: 'tilt-l',
    desc: 'An internal library of 500+ high-converting landing page blocks tested in live campaigns across 22+ industries. We deploy winning layouts in minutes.',
  },
];

const ProductsPage = () => {
  useSEO({
    title: 'Our Internal Products & Tools | Creativals',
    description: 'We build proprietary software and internal tools to give our clients an unfair advantage. Explore our ecosystem of products.',
  });

  return (
    <>
      {/* 1. HERO — indigo */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 })}>
              <span className="cx-dot" />
              Technology &amp; Engineering
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 30 }}>
              We don't just<br />use software.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>We build it.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 0 38px', maxWidth: 560, fontSize: 18, lineHeight: 1.6, color: 'rgba(244,242,236,.85)' }}>
              To guarantee scale, you need an unfair advantage. We engineer proprietary internal tools, tracking scripts,
              and automation architectures that ordinary marketing agencies can't touch.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
              Get Technical Audit →
            </a>
          </Reveal>
        </div>
      </section>

      {/* 2. PRODUCT STACK — cream */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The product stack" /></Reveal>
          <div style={{ marginBottom: 60 }}>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                Proprietary tools.<br />
                <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Client-side firepower.</span>
              </h2>
            </Reveal>
          </div>
          <div className="cx-grid3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <div className={`cx-card ${p.tilt}`} style={{ height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <div style={{ fontWeight: 900, fontSize: 56, fontStretch: '120%', lineHeight: 1, color: '#4F46E5' }}>{p.n}</div>
                    {p.live ? (
                      <span style={mono({ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 7 })}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3DDC84', flex: 'none' }} />
                        Live
                      </span>
                    ) : (
                      <span className="cx-tag cx-tag-indigo">Internal</span>
                    )}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 22, margin: '0 0 12px', letterSpacing: '-0.01em' }}>{p.name}</div>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(23,21,26,.68)' }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATEMENT — ink */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="The unfair advantage" dark /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 28 }}>
              Ordinary agencies<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>can't touch this.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 620, color: 'rgba(244,242,236,.75)' }}>
              500+ landing blocks. Live-campaign testing behind every layout. 30%+ of "lost" attribution recovered.
              This is the stack working behind every Creativals engagement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. FINAL CTA — indigo */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section" style={{ textAlign: 'center' }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 26 })}>
              <span className="cx-dot" />
              Free technical audit
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 22 }}>
              Deploy our tech stack<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>in your business.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 auto 36px', maxWidth: 520, fontSize: 17, lineHeight: 1.6, color: 'rgba(244,242,236,.85)' }}>
              Get a free technical audit to see how our engineering can drop your acquisition costs.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
              Get Technical Audit →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
