import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const STEPS = [
  {
    n: '01', label: 'Diagnose', timeline: 'Day 1',
    headline: 'We find the leak before we add more water.',
    desc: 'Most businesses don\'t need more traffic. They need to stop bleeding. Before we do anything, we do a full audit of your business — website, ads, brand, competitors, and conversion chain.',
    bullets: ['Business model deep-dive', 'Website & funnel audit', 'Current ad performance review', 'Competitor intelligence scan', 'Growth bottleneck identification'],
  },
  {
    n: '02', label: 'Position', timeline: 'Week 1',
    headline: 'Clarity is a competitive advantage.',
    desc: 'We define exactly who you\'re talking to, what makes you different, and why someone should choose you over anyone else. This positioning layer is what most agencies completely skip.',
    bullets: ['Ideal customer definition', 'Unique value proposition', 'Offer refinement & packaging', 'Messaging hierarchy', 'Execution roadmap build'],
  },
  {
    n: '03', label: 'Build', timeline: 'Weeks 1–3',
    headline: 'Infrastructure before campaigns.',
    desc: 'We build the assets, systems, and infrastructure that campaigns actually need to convert — landing pages, automations, CRM flows, creative suites, and tracking setup. Most agencies skip this.',
    bullets: ['Landing pages & funnels', 'Ad creative production', 'CRM & automation setup', 'Tracking & pixel implementation', 'Offer packaging & pricing pages'],
  },
  {
    n: '04', label: 'Launch', timeline: 'Month 1',
    headline: 'Calculated ignition. Not random posting.',
    desc: 'Every launch is structured around clear objectives, measurable benchmarks, and test frameworks. We don\'t guess — we run controlled experiments from day one and read the data daily.',
    bullets: ['Campaign launch across channels', 'Creative A/B testing', 'Funnel entry optimization', 'Lead quality monitoring', 'Daily performance tracking'],
  },
  {
    n: '05', label: 'Optimize', timeline: 'Ongoing', close: true,
    headline: 'We never stop improving.',
    desc: 'The real work starts after launch. Weekly optimization, monthly reviews, quarterly strategy resets. We compound your results over time — turning good campaigns into growth machines.',
    bullets: ['Weekly creative refresh', 'CPL & ROAS improvement', 'Funnel conversion increase', 'Expansion into new channels', 'Quarterly strategic reset'],
  },
];

const TIMELINE = [
  { period: '7–14 days', milestone: 'Quick wins visible', desc: 'Early data signals, first leads or traffic uptick.' },
  { period: '30 days', milestone: 'Measurable momentum', desc: 'Campaigns stabilized, funnel optimized, lead quality improving.' },
  { period: '60–90 days', milestone: 'Strong growth patterns', desc: 'Consistent lead volume, ROAS improving, audience compounding.' },
  { period: '3–6 months', milestone: 'Market leadership', desc: 'Brand authority building, category dominance, scaling budget.' },
];

const WONT_DO = [
  'Vanity metrics with no business value',
  '"1000 leads guaranteed" promises',
  'Random posting without a documented strategy',
  'Overcharging for cookie-cutter deliverables',
  'Poor response times and delayed execution',
  'Monthly PDF reports instead of actual results',
  'Trend-chasing with zero ROI accountability',
];

const TOOLS = [
  { cat: 'Marketing', items: ['Meta Ads Manager', 'Google Ads', 'Google Analytics 4', 'Search Console'] },
  { cat: 'Creative', items: ['Figma', 'Adobe Suite', 'Canva Pro', 'CapCut Pro'] },
  { cat: 'Operations', items: ['Zoho Ecosystem', 'Google Workspace', 'WhatsApp Business API'] },
  { cat: 'Web & Dev', items: ['WordPress', 'Elementor Pro', 'React / Next.js', 'Vite'] },
];

const ApproachPage = () => {
  useSEO({
    title: 'Growth Marketing Strategy & Execution | Creativals',
    description: 'The Creativals Growth Engine™ — a 5-step digital marketing framework for predictable lead generation and revenue growth for Hyderabad businesses.',
    keywords: 'marketing strategy hyderabad, growth marketing framework, lead generation process, performance marketing hyderabad',
  });

  return (
    <div>
      {/* ── HERO — indigo ── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap" style={{ paddingTop: 96, paddingBottom: 90 }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 })}>
              <span className="cx-dot" />
              Proprietary system · 5 steps · One outcome
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 30 }}>
              The Creativals<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>Growth Engine™</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 0 26px', maxWidth: 560, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,242,236,.85)', textWrap: 'pretty' }}>
              A 5-step framework built to turn business chaos into predictable, compounding growth. Not a checklist —
              a system.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p style={mono({ margin: 0, fontSize: 13, lineHeight: 1.8, letterSpacing: '.04em', color: 'rgba(244,242,236,.7)', maxWidth: 620 })}>
              Most agencies ask <em style={{ color: '#F4F2EC' }}>"What service do you want?"</em> — We ask{' '}
              <span style={{ color: '#FFD84D', fontWeight: 600 }}>"Where is your business leaking growth?"</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 01 THE 5 STEPS — ink ── */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The framework" dark /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 16 }}>
              Five steps.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>Zero guesswork.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="cx-lead cx-lead-light" style={{ margin: '0 0 56px', maxWidth: 560, color: 'rgba(244,242,236,.7)' }}>
              This is the exact sequence we run for every client. Each step earns the next — no campaigns before
              infrastructure, no scaling before signal.
            </p>
          </Reveal>

          <div>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 70} className="cx-sysrow">
                <div style={{ fontWeight: 900, fontSize: 46, fontStretch: '120%', color: '#FFD84D' }}>{s.n}</div>
                <div>
                  <div style={mono({ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(244,242,236,.5)', marginBottom: 8 })}>{s.label}</div>
                  <div style={{ fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em', lineHeight: 1.15 }}>{s.headline}</div>
                </div>
                <div className="cx-sysdesc">
                  <p style={{ margin: '0 0 12px', fontSize: 15, lineHeight: 1.55, color: 'rgba(244,242,236,.65)' }}>{s.desc}</p>
                  <div style={mono({ fontSize: 11, lineHeight: 1.9, letterSpacing: '.05em', textTransform: 'uppercase', color: 'rgba(244,242,236,.45)' })}>
                    {s.bullets.join(' · ')}
                  </div>
                </div>
                <div
                  className="cx-systag"
                  style={mono(
                    s.close
                      ? { fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', background: '#FFD84D', color: '#17151A', borderRadius: 999, padding: '9px 15px', whiteSpace: 'nowrap' }
                      : { fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', border: '1px solid rgba(244,242,236,.35)', borderRadius: 999, padding: '8px 14px', whiteSpace: 'nowrap' }
                  )}
                >
                  {s.timeline}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ marginTop: 52, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <a href={waLink('Hi! I want to run the Creativals Growth Engine for my business.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-cream">
                Run this for my business →
              </a>
              <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .55 })}>FREE AUDIT · NO COMMITMENT · REPLY IN 2 HRS</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 02 PRINCIPLES — cream ── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="Operating principles" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
              How it plays out.<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>And what we refuse.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="cx-lead" style={{ maxWidth: 600, marginBottom: 54 }}>
              Depends on your offer, budget, and market — but here's what typically happens, the boundaries that keep
              our quality consistent, and the stack we run it all on.
            </p>
          </Reveal>

          {/* results timeline */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 22, marginBottom: 56 }}>
            {TIMELINE.map((t, i) => (
              <Reveal key={t.period} delay={i * 90}>
                <div className={`cx-card ${i % 2 ? 'tilt-r' : 'tilt-l'}`} style={{ height: '100%', boxSizing: 'border-box', padding: '30px 26px' }}>
                  <div className="cx-badge" style={{ fontSize: 11, padding: '6px 12px', marginBottom: 20 }}>{t.period}</div>
                  <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.01em', marginBottom: 10 }}>{t.milestone}</div>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'rgba(23,21,26,.68)' }}>{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* hard nos + stack */}
          <div className="cx-grid2" style={{ alignItems: 'stretch' }}>
            <Reveal delay={80}>
              <div className="cx-card" style={{ height: '100%', boxSizing: 'border-box' }}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FF5F57', marginBottom: 10 })}>
                  Our hard nos
                </div>
                <div style={{ fontWeight: 800, fontSize: 21, letterSpacing: '-0.01em', marginBottom: 20 }}>
                  What we deliberately refuse to do.
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                  {WONT_DO.map((w) => (
                    <div key={w} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, lineHeight: 1.5, color: 'rgba(23,21,26,.72)' }}>
                      <span style={mono({ color: '#FF5F57', fontWeight: 600, flex: 'none' })}>✗</span>
                      {w}
                    </div>
                  ))}
                </div>
                <p style={{ margin: '22px 0 0', fontSize: 13.5, fontStyle: 'italic', color: 'rgba(23,21,26,.55)' }}>
                  Most agencies do this. We don't. These boundaries are what keep our quality — and your results — consistent.
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="cx-card" style={{ height: '100%', boxSizing: 'border-box' }}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 10 })}>
                  Our stack
                </div>
                <div style={{ fontWeight: 800, fontSize: 21, letterSpacing: '-0.01em', marginBottom: 24 }}>
                  Professional-grade tools. Measurable outcomes.
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 20px' }}>
                  {TOOLS.map((g) => (
                    <div key={g.cat}>
                      <div style={mono({ fontSize: 10.5, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 10 })}>{g.cat}</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {g.items.map((item) => (
                          <div key={item} style={{ fontSize: 14, color: 'rgba(23,21,26,.72)' }}>· {item}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — indigo ── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 })}>
              <span className="cx-dot" />
              Start with a free audit
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 28 }}>
              Ready to run the<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>growth engine™?</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 0 36px', maxWidth: 500, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,242,236,.85)' }}>
              Start with a free audit. We'll tell you exactly where your biggest growth opportunity is.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href={waLink('Hi! I want to run the Creativals Growth Engine for my business.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
                Start My Free Audit →
              </a>
              <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .75 })}>100% FREE · KEEP THE PLAN EITHER WAY</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ApproachPage;
