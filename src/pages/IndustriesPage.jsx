import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import industries from '../data/industries';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const IndustriesPage = () => {
  useSEO({
    title: 'Industry-Specific Marketing in Hyderabad | Creativals',
    description: 'We build custom growth systems for Hotels, Real Estate, Healthcare, and Education in Hyderabad. See how we dominate your specific industry.',
    keywords: 'industry marketing hyderabad, b2b marketing hyderabad, real estate marketing hyderabad, hotel marketing hyderabad',
  });

  return (
    <div>
      {/* ── 01 · HERO (indigo) ─────────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap" style={{ paddingTop: 140, paddingBottom: 96 }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 34 })}>
              <span className="cx-dot" />
              8 industries · 120+ brands grown
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ maxWidth: 1000 }}>
              Generic marketing fails.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>We speak your industry.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 620, marginTop: 30 }}>
              Every industry has a different customer journey, a different sales cycle, and a different way people
              decide to buy. We've built systems for all of it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 02 · INDUSTRIES GRID (cream) ───────────────────────── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="Pick your industry" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
              Battle-tested systems.<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Built for your market.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead" style={{ maxWidth: 620, marginBottom: 60 }}>
              Choose your industry to see the exact playbook — the problems we fix, the system we deploy, and the
              numbers it produces.
            </p>
          </Reveal>

          <div className="cx-grid3" style={{ gap: 22 }}>
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 3) * 60}>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="cx-card-invert"
                  style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', height: '100%', boxSizing: 'border-box' }}
                >
                  <div style={mono({ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .55, marginBottom: 14 })}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', marginBottom: 12 }}>{ind.title}</div>
                  <p style={{ margin: '0 0 22px', fontSize: 14.5, lineHeight: 1.6, opacity: .75, flex: 1 }}>{ind.heroSub}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                    <span className="cx-badge">{ind.metrics[0].value} {ind.metrics[0].label}</span>
                    <span style={{ fontWeight: 900, fontSize: 20 }}>→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 · FINAL CTA (ink) ───────────────────────────────── */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="Not listed?" dark /></Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <Reveal delay={60}>
                <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                  Your industry<br />
                  <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>isn't listed?</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="cx-lead cx-lead-light" style={{ maxWidth: 520 }}>
                  Tell us what you do. If there's growth to be had, we'll find it.
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <a
                  href={waLink("Hi! I want to discuss growth for my business.")}
                  target="_blank" rel="noreferrer"
                  className="cx-btn cx-btn-lg cx-btn-yellow"
                >
                  Let's talk →
                </a>
                <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .6 })}>FREE AUDIT · NO CONTRACTS</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
