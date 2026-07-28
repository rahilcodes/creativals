import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const RESOURCES = [
  {
    n: 'XLS',
    title: 'The True-ROAS Calculator',
    type: 'Google Sheet',
    tilt: 'tilt-l',
    desc: 'Input your product margins, ad spend, and agency fees to find out your true break-even ROAS required to survive.',
  },
  {
    n: 'FIG',
    title: 'Figma SaaS Wireframes',
    type: 'Figma File',
    tilt: 'tilt-r',
    desc: '12 high-converting landing page structures mapped out in low-fidelity. Swap the text and hand to your developer.',
  },
  {
    n: 'PDF',
    title: 'Cold Email Copy Swipes',
    type: 'PDF Document',
    tilt: 'tilt-l',
    desc: 'The exact 4-step sequence we use to get 40% open rates and 8% reply rates in Indian B2B outreach.',
  },
];

const ResourcesPage = () => {
  useSEO({
    title: 'Digital Marketing Resources & Playbooks | Creativals',
    description: 'Access premium digital marketing resources, SEO playbooks, and growth blueprints from Hyderabad\'s top execution agency.',
    keywords: 'digital marketing resources hyderabad, free seo playbooks, growth marketing guides',
  });

  return (
    <>
      {/* 1. HERO — indigo */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 })}>
              <span className="cx-dot" />
              The resource vault
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 30 }}>
              Raw assets<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>for revenue.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: 0, maxWidth: 560, fontSize: 18, lineHeight: 1.6, color: 'rgba(244,242,236,.85)' }}>
              Download the operational templates, financial modeling sheets, and Figma architectures we use daily.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. RESOURCE CARDS — cream */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The downloads" /></Reveal>
          <div style={{ marginBottom: 60 }}>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                Templates we<br />
                <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>actually use.</span>
              </h2>
            </Reveal>
          </div>
          <div className="cx-grid3">
            {RESOURCES.map((r, i) => (
              <Reveal key={r.n} delay={i * 120}>
                <div className={`cx-card ${r.tilt}`} style={{ height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <div style={mono({ fontWeight: 600, fontSize: 30, letterSpacing: '.06em', lineHeight: 1, color: '#4F46E5' })}>.{r.n}</div>
                    <span className="cx-tag cx-tag-ink">{r.type}</span>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 22, margin: '0 0 12px', letterSpacing: '-0.01em' }}>{r.title}</div>
                  <p style={{ margin: '0 0 28px', fontSize: 15, lineHeight: 1.6, color: 'rgba(23,21,26,.68)', flex: 1 }}>{r.desc}</p>
                  <a
                    href={waLink(`Hi! I want access to the ${r.title} (${r.type}).`)}
                    target="_blank"
                    rel="noreferrer"
                    className="cx-btn cx-btn-sm cx-btn-outline-ink"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    Access Resource →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATEMENT — yellow */}
      <section style={{ background: '#FFD84D', color: '#17151A', borderTop: '4px solid #17151A', borderBottom: '4px solid #17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="No fluff policy" yellow /></Reveal>
          <div className="cx-grid2" style={{ alignItems: 'end' }}>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 0 }}>
                Used daily.<br />
                <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Not lead magnets.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: 'rgba(23,21,26,.75)', maxWidth: 460 }}>
                These are the same sheets, wireframes, and swipes open on our own screens every morning — handed over
                as-is, no watered-down "free version".
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA — ink */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section" style={{ textAlign: 'center' }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 26 })}>
              <span className="cx-dot" />
              Free growth audit
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 22 }}>
              Want the system,<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>not just the templates?</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 auto 36px', maxWidth: 480, fontSize: 17, lineHeight: 1.6, color: 'rgba(244,242,236,.75)' }}>
              Templates get you started. We build the full revenue engine around them.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a href={waLink('Hi! I downloaded your resources and want a free growth audit.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
              Get Free Audit →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ResourcesPage;
