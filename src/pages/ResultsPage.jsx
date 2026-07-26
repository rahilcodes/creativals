import React, { useMemo, useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, Marquee, SecNum, waLink } from '../components/ui/primitives';
import { ALL_CLIENTS, INDUSTRIES, COUNTRIES, COUNTRY_FLAGS } from '../data/clientData';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const HERO_STATS = [
  { v: '160+', l: 'Clients served' },
  { v: '500M+', l: 'Views created' },
  { v: '7', l: 'Countries' },
  { v: '22+', l: 'Industries' },
];

const WINS = ALL_CLIENTS.filter((c) => c.badge).map((c) => `${c.name} — ${c.badge.text}`);

const pillStyle = (active) => mono({
  fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase',
  padding: '11px 18px', borderRadius: 999, border: '2px solid #17151A',
  background: active ? '#17151A' : 'transparent',
  color: active ? '#FFD84D' : '#17151A',
  cursor: 'pointer', transition: 'background .15s,color .15s',
});

const ResultsPage = () => {
  useSEO({
    title: 'Client Results & Portfolio | 160+ Businesses | Creativals',
    description: '160+ clients across 7 countries and 22+ industries. See real results from real businesses — hotels, schools, restaurants, real estate, tech startups, and more.',
    keywords: 'digital marketing results, case studies india, client portfolio, marketing results hyderabad',
  });

  const [industry, setIndustry] = useState('All');
  const [country, setCountry] = useState('All');

  const filtered = useMemo(
    () => ALL_CLIENTS.filter(
      (c) => (industry === 'All' || c.industry === industry) && (country === 'All' || c.country === country)
    ),
    [industry, country]
  );

  return (
    <div>
      {/* ── 01 · HERO — indigo ─────────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 30 })}>
              <span className="cx-dot" /> Proven results · Real businesses
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 28, maxWidth: 1050 }}>
              160+ businesses.<br />
              7 countries.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>One system that works.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 620, color: 'rgba(244,242,236,.75)', marginBottom: 54 }}>
              From a local furniture store in Hyderabad to Florida's top realtor — we've built growth systems
              for <strong style={{ color: '#FFD84D' }}>160+ businesses across 22+ industries</strong>.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div id="revenue-generated" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 26, borderTop: '1px solid rgba(244,242,236,.3)', paddingTop: 40, marginBottom: 48 }}>
              {HERO_STATS.map((s) => (
                <div key={s.l}>
                  <div style={{ fontWeight: 900, fontStretch: '120%', fontSize: 'clamp(38px,4.4vw,58px)', lineHeight: 1, color: '#FFD84D' }}>{s.v}</div>
                  <div style={mono({ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .75, marginTop: 10 })}>{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#client-wall" className="cx-btn cx-btn-yellow cx-btn-lg">Browse all 160+ clients →</a>
              <a href={waLink('Hi! I saw your results page and want a free growth audit.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-outline-cream cx-btn-lg">Get my free audit</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MARQUEE — yellow ticker of client wins ─────────────── */}
      <section style={{ background: '#FFD84D', color: '#17151A', borderTop: '4px solid #17151A', borderBottom: '4px solid #17151A', padding: '18px 0' }}>
        <Marquee speed={60} segStyle={mono({ fontSize: 13, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' })}>
          {WINS.map((w) => (
            <React.Fragment key={w}>
              <span>{w}</span>
              <span aria-hidden="true">✦</span>
            </React.Fragment>
          ))}
        </Marquee>
      </section>

      {/* ── 01 · CLIENT PROOF WALL — cream ─────────────────────── */}
      <section id="client-wall" style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The client wall" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
              Every client.<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Every result.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead" style={{ maxWidth: 620, marginBottom: 44 }}>
              We don't serve every industry — we dominate ours. 22+ verticals, 7 countries, 3 continents.
              Filter the wall and see for yourself.
            </p>
          </Reveal>

          {/* industry filter */}
          <Reveal>
            <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 16 })}>Filter by industry</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 34 }}>
              {INDUSTRIES.map((i) => (
                <button key={i} onClick={() => setIndustry(i)} style={pillStyle(industry === i)}>{i}</button>
              ))}
            </div>
          </Reveal>

          {/* country filter */}
          <Reveal delay={60}>
            <div id="geographic-reach" style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 16 })}>Filter by country</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
              {COUNTRIES.map((c) => (
                <button key={c} onClick={() => setCountry(c)} style={pillStyle(country === c)}>
                  {c !== 'All' && <span style={{ marginRight: 6 }}>{COUNTRY_FLAGS[c]}</span>}{c}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .6, marginBottom: 26 })}>
              Showing {filtered.length} of {ALL_CLIENTS.length} clients
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 18 }}>
            {filtered.map((c, i) => (
              <Reveal key={`${c.name}-${c.industry}`} delay={(i % 6) * 60}>
                <div className="cx-card" style={{ padding: '26px 24px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={mono({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', opacity: .6 })}>
                    <span>{c.industry}</span>
                    <span style={{ flex: 'none' }}>{COUNTRY_FLAGS[c.country]} {c.country}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                    <div style={{ fontWeight: 800, fontSize: 17.5, letterSpacing: '-0.01em' }}>{c.name}</div>
                    {c.badge && <span className="cx-tag cx-tag-yellow">{c.badge.text}</span>}
                  </div>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'rgba(23,21,26,.7)', flex: 1 }}>{c.result}</p>
                  {c.services.length > 0 && (
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {c.services.map((s) => (
                        <span key={s} style={mono({ fontSize: 10, letterSpacing: '.06em', textTransform: 'uppercase', border: '1px solid rgba(23,21,26,.35)', borderRadius: 999, padding: '4px 10px' })}>{s}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 · FINAL CTA — indigo ────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
              Ready to be the next<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>success story?</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 520, margin: '0 auto 40px', color: 'rgba(244,242,236,.75)' }}>
              We built systems for 160+ businesses across 7 countries. We know exactly what will work
              for yours — and we'll tell you for free.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <a href={waLink('Hi! I saw your results page and want a free growth audit.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-yellow cx-btn-lg">
              Get my free growth audit →
            </a>
          </Reveal>
          <Reveal delay={200}>
            <div style={mono({ marginTop: 26, display: 'flex', gap: 26, justifyContent: 'center', flexWrap: 'wrap', fontSize: 11.5, letterSpacing: '.1em', textTransform: 'uppercase', opacity: .8 })}>
              <span>✓ 100% free · No obligation</span>
              <span>✓ Reply in 30 mins</span>
              <span style={{ color: '#FFD84D' }}>● Only 3 spots left this month</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ResultsPage;
