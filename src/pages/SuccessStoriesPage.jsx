import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const STORIES = [
  {
    client: 'The 100-Crore D2C Pivot',
    category: 'E-commerce Transformation',
    excerpt: 'How an offline retail brand transitioned to 100% online sales during the pandemic and scaled to 100CR ARR.',
    timeline: [
      { month: 'Month 1', action: 'Complete Shopify architecture redesign and Facebook pixel restructuring.' },
      { month: 'Month 3', action: 'Hit initial ROAS of 2.2x. Began aggressive creative testing for scale.' },
      { month: 'Month 6', action: 'Scaled ad spend to ₹10L/day while maintaining 3.5x ROAS. Launched retention email flows.' },
      { month: 'Year 1', action: 'Crossed 100CR ARR marker. 40% of revenue now driven by automated CRM flows.' },
    ],
    wins: ['Zero to 100CR ARR', '40% Retention Revenue', '3.5x Sustained ROAS'],
  },
  {
    client: 'The B2B SaaS Monopolization',
    category: 'Enterprise Sales Pipeline',
    excerpt: 'Taking a bootstrapped SaaS company from 2 inbound demos a month to a multi-million dollar acquisition offer.',
    timeline: [
      { month: 'Month 1', action: 'Built "The Ultimate Compliance Guide" whitepaper and launched LinkedIn ABM.' },
      { month: 'Month 2', action: 'Generated 1,200 targeted VP-level leads. Nurture sequence activated.' },
      { month: 'Month 4', action: 'Sales team overwhelmed. Hired 4 new SDRs to handle the 50+ inbound demo requests/mo.' },
      { month: 'Month 8', action: 'Company acquired by US private equity firm based on pipeline velocity.' },
    ],
    wins: ['50+ Consults/mo', 'Acquisition Exit', 'Zero Cold Calls'],
  },
];

const SuccessStoriesPage = () => {
  useSEO({
    title: 'Success Stories | Transformations & Timelines | Creativals',
    description: 'Read the narrative timelines of how Indian businesses evolved from stagnant sales to market dominance through our growth systems.',
  });

  return (
    <div>
      {/* ── HERO — indigo ──────────────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 30 })}>
              <span className="cx-dot" /> Narrative transformations
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 28 }}>
              The anatomy of<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>market dominance.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 620, color: 'rgba(244,242,236,.75)' }}>
              Growth doesn't happen overnight. It happens systematically, month-by-month. Here are the
              timelines of our most aggressive client transformations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── STORY SECTIONS — cream ─────────────────────────────── */}
      {STORIES.map((story, i) => (
        <section key={story.client} style={{ background: i % 2 === 0 ? '#F4F2EC' : '#FFFFFF', color: '#17151A', borderTop: i > 0 ? '2px solid #17151A' : 'none' }}>
          <div className="cx-wrap cx-section">
            <Reveal><SecNum n={String(i + 1).padStart(2, '0')} label={story.category} /></Reveal>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2" style={{ marginBottom: 30 }}>{story.client}</h2>
            </Reveal>

            {/* big pull quote */}
            <Reveal delay={120}>
              <blockquote style={{ margin: '0 0 54px', padding: '6px 0 6px 28px', borderLeft: '6px solid #4F46E5', maxWidth: 760 }}>
                <p style={{ margin: 0, fontSize: 'clamp(20px,2.4vw,29px)', lineHeight: 1.4, fontWeight: 700, fontStyle: 'italic', letterSpacing: '-0.01em' }}>
                  "{story.excerpt}"
                </p>
              </blockquote>
            </Reveal>

            {/* growth timeline */}
            <Reveal delay={160}>
              <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 18 })}>Growth timeline</div>
            </Reveal>
            <div style={{ border: '2px solid #17151A', borderRadius: 18, background: i % 2 === 0 ? '#FFFFFF' : '#F4F2EC', overflow: 'hidden', marginBottom: 44 }}>
              {story.timeline.map((point, j) => (
                <Reveal key={point.month} delay={j * 90}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'minmax(96px, 140px) 1fr', gap: 24, alignItems: 'start', padding: '24px clamp(20px,3vw,34px)', borderTop: j > 0 ? '1px solid rgba(23,21,26,.15)' : 'none' }}>
                    <div style={mono({ fontSize: 12, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', background: '#17151A', color: '#FFD84D', borderRadius: 999, padding: '7px 12px', textAlign: 'center' })}>
                      {point.month}
                    </div>
                    <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: 'rgba(23,21,26,.75)', paddingTop: 4 }}>{point.action}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* key outcomes */}
            <Reveal>
              <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 18 })}>Key outcomes</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {story.wins.map((win) => (
                  <span key={win} className="cx-badge">{win}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      {/* ── FINAL CTA — ink ────────────────────────────────────── */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
              Map out your<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>growth timeline.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 520, margin: '0 auto 40px', color: 'rgba(244,242,236,.75)' }}>
              Let's build a systematic, month-by-month roadmap for your revenue expansion.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <a href={waLink('Hi! I want to map out a growth timeline for my business.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-yellow cx-btn-lg">
              Book your free audit →
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesPage;
