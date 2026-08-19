import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const AHMED_PILLARS = [
  {
    num: '01',
    title: 'Paid Media & Performance Scaling',
    desc: 'Managing and scaling high-budget Meta, Google Ads, and PPC campaigns with rigorous testing frameworks and strict ROAS targets.',
  },
  {
    num: '02',
    title: 'Search Engine Dominance',
    desc: 'Engineering comprehensive technical and local SEO strategies that capture high-intent commercial keywords and drive compounding organic traffic.',
  },
  {
    num: '03',
    title: 'Revenue Analytics & Attribution',
    desc: 'Connecting marketing data directly to CRM closed deals. Eliminating vanity metrics and focusing entirely on Cost Per Acquisition (CPA) and ROI.',
  },
  {
    num: '04',
    title: 'Omnichannel Funnel Optimization',
    desc: 'Designing seamless prospect journeys from initial ad impression to landing page conversion, automated email/SMS sequences, and sales handoff.',
  },
];

const AHMED_METRICS = [
  { value: '500M+', label: 'Organic & Ad Views Generated' },
  { value: '3.5x', label: 'Average Client ROAS' },
  { value: '80+', label: 'Active Funnels Managed' },
  { value: '#1', label: 'Local Search Positions Held' },
];

const AHMED_LAWS = [
  { title: 'Ad Spend is a Question', desc: 'Every rupee of ad spend asks if an offer converts. Data provides the definitive answer.' },
  { title: 'No Blind Guesses', desc: 'Campaign optimizations are driven strictly by multivariate testing and conversion data.' },
  { title: 'Intent Beats Volume', desc: '100 highly qualified leads beat 1,000 junk contacts every single time.' },
  { title: 'Continuous Iteration', desc: 'Winning creatives degrade over time. Continuous creative & audience testing is mandatory.' },
];

const AhmedProfilePage = () => {
  useSEO({
    title: 'Syed Ahmed | Head of Marketing & Growth at Creativals',
    description: 'Meet Syed Ahmed, Head of Marketing & Growth at Creativals. Scaling performance ads, SEO rankings, and revenue acquisition engines for 160+ brands.',
    keywords: 'Syed Ahmed, Ahmed Creativals, Head of Marketing Creativals, growth marketer hyderabad, performance ads expert, SEO specialist hyderabad',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Syed Ahmed',
      jobTitle: 'Head of Marketing & Growth',
      worksFor: {
        '@type': 'Organization',
        name: 'Creativals',
        url: 'https://creativals.com',
      },
      url: 'https://creativals.com/syed-ahmed',
      image: 'https://creativals.com/ahmed.webp',
      sameAs: [
        'https://in.linkedin.com/in/syed-ahmed-creativals',
      ],
      description: 'Head of Marketing & Growth at Creativals. Leading performance advertising, search engine optimization, analytics, and conversion funnels.',
    },
  });

  return (
    <div>
      {/* ── HERO SECTION ── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap" style={{ paddingTop: 96, paddingBottom: 90 }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 })}>
              <span className="cx-dot" />
              Inside Creativals · Executive Profile · @ahmed
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <Reveal delay={60}>
                <h1 className="cx-display cx-h1" style={{ marginBottom: 16 }}>
                  Syed Ahmed
                </h1>
              </Reveal>
              <Reveal delay={100}>
                <div style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 700, color: '#FFD84D', marginBottom: 24, fontStyle: 'italic' }}>
                  Head of Marketing & Growth · Media Strategist
                </div>
              </Reveal>
              <Reveal delay={140}>
                <p style={{ margin: '0 0 32px', fontSize: 18, lineHeight: 1.6, color: 'rgba(244,242,236,.88)', maxWidth: 540 }}>
                  Spearheading growth strategy, paid acquisition, and SEO at Creativals. Ahmed transforms ad budgets into high-yield, predictable customer acquisition engines.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                  <a
                    href="https://in.linkedin.com/in/syed-ahmed-creativals"
                    target="_blank"
                    rel="noreferrer"
                    className="cx-btn cx-btn-lg cx-btn-yellow"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                  >
                    LinkedIn Profile ↗
                  </a>
                  <a
                    href={waLink('Hi Ahmed! I read your profile on Creativals and want to consult on marketing and paid ads.')}
                    target="_blank"
                    rel="noreferrer"
                    className="cx-btn cx-btn-lg"
                    style={{ background: 'rgba(244,242,236,.12)', color: '#F4F2EC', border: '1px solid rgba(244,242,236,.25)' }}
                  >
                    Growth Audit with Ahmed →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Profile Avatar Card */}
            <Reveal delay={120}>
              <div
                className="cx-card tilt-l"
                style={{
                  padding: 24,
                  background: '#17151A',
                  color: '#F4F2EC',
                  border: '3px solid #17151A',
                  borderRadius: 24,
                  boxShadow: '8px 8px 0px rgba(255,216,77,.85)',
                  maxWidth: 380,
                  margin: '0 auto',
                }}
              >
                <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: 16, overflow: 'hidden', border: '2px solid rgba(244,242,236,.2)', marginBottom: 20 }}>
                  <img
                    src="/ahmed.webp"
                    alt="Syed Ahmed"
                    width="380"
                    height="380"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={mono({ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FFD84D', marginBottom: 8 })}>
                  MARKETING MANTRA
                </div>
                <p style={{ margin: 0, fontSize: 17, fontWeight: 700, lineHeight: 1.4, fontStyle: 'italic' }}>
                  "Every rupee of ad spend is a question. We find the answer."
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 18 }}>
                  <span className="cx-tag cx-tag-indigo">SEO</span>
                  <span className="cx-tag cx-tag-indigo">Paid Ads</span>
                  <span className="cx-tag cx-tag-indigo">Analytics</span>
                  <span className="cx-tag cx-tag-indigo">Growth Execution</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 — MARKETING APPROACH ── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The Growth Engine" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 28 }}>
              Data-backed marketing.<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>No vanity metrics.</span>
            </h2>
          </Reveal>

          <div className="cx-grid2" style={{ alignItems: 'start', marginBottom: 56 }}>
            <Reveal delay={120}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p className="cx-lead" style={{ fontSize: 19, fontWeight: 600, color: '#17151A' }}>
                  Syed Ahmed manages performance marketing campaigns and SEO operations across 160+ brands in India, North America, the Middle East, and Asia-Pacific.
                </p>
                <p className="cx-lead">
                  While most marketing heads report on clicks, likes, and impressions, Ahmed focuses on the metrics that pay your payroll: qualified leads, customer acquisition cost (CAC), return on ad spend (ROAS), and recurring revenue.
                </p>
                <p className="cx-lead">
                  By pairing rigorous search keyword strategy with rapid creative iteration on Meta and Google Ads, Ahmed ensures campaigns scale profitably without diminishing returns.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="cx-card tilt-r" style={{ boxSizing: 'border-box', padding: 32 }}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 18 })}>
                  Growth Specialties
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: 15, color: 'rgba(23,21,26,.8)' }}>
                    <span style={{ color: '#3DDC84', fontWeight: 900 }}>✓</span>
                    <span><strong>Meta & Google Paid Ads:</strong> Scaling daily ad spend profitably with intent audience targeting.</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 15, color: 'rgba(23,21,26,.8)' }}>
                    <span style={{ color: '#3DDC84', fontWeight: 900 }}>✓</span>
                    <span><strong>Commercial Keyword SEO:</strong> Dominating search results for high-value buying queries.</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 15, color: 'rgba(23,21,26,.8)' }}>
                    <span style={{ color: '#3DDC84', fontWeight: 900 }}>✓</span>
                    <span><strong>Conversion Rate Optimization:</strong> Testing landing page headlines, hooks, and CTAs for maximum conversion.</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 15, color: 'rgba(23,21,26,.8)' }}>
                    <span style={{ color: '#3DDC84', fontWeight: 900 }}>✓</span>
                    <span><strong>Attribution & Analytics:</strong> Tracking lead origin to closed deal in CRM for transparent reporting.</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — MARKETING PILLARS (YELLOW) ── */}
      <section style={{ background: '#FFD84D', color: '#17151A', borderTop: '4px solid #17151A', borderBottom: '4px solid #17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="Growth Pillars" yellow /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 40 }}>
              Methodologies Ahmed uses to<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>scale brand revenue.</span>
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {AHMED_PILLARS.map((p, idx) => (
              <Reveal key={p.num} delay={idx * 80}>
                <div className="cx-card" style={{ height: '100%', boxSizing: 'border-box', padding: 28 }}>
                  <div style={{ fontWeight: 900, fontSize: 32, color: '#4F46E5', marginBottom: 12 }}>{p.num}</div>
                  <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 10 }}>{p.title}</div>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'rgba(23,21,26,.75)' }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — METRICS & LAWS (DARK) ── */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="03" label="Growth Track Record" yellow /></Reveal>

          {/* Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '36px 28px', margin: '40px 0 72px' }}>
            {AHMED_METRICS.map((m, idx) => (
              <Reveal key={m.label} delay={idx * 70}>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 'clamp(40px, 4.5vw, 60px)', color: '#FFD84D', lineHeight: 1 }}>
                    {m.value}
                  </div>
                  <div style={mono({ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', marginTop: 10, color: 'rgba(244,242,236,.6)' })}>
                    {m.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={60}>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(244,242,236,.55)', marginBottom: 20 })}>
              Ahmed's Growth Principles
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {AHMED_LAWS.map((law, idx) => (
              <Reveal key={law.title} delay={idx * 60}>
                <div
                  className="cx-sysrow"
                  style={{ gridTemplateColumns: '220px 1fr', gap: 24, padding: '20px 24px', background: 'rgba(244,242,236,.04)', border: '1px solid rgba(244,242,236,.1)', borderRadius: 16 }}
                >
                  <div style={{ fontWeight: 800, fontSize: 18, color: '#FFD84D' }}>{law.title}</div>
                  <div style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(244,242,236,.75)' }}>{law.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — CONTACT / CTA ── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 })}>
              <span className="cx-dot" />
              Connect with Ahmed
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 28 }}>
              Ready to scale your ad<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>ROAS and organic search?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ margin: '0 0 36px', maxWidth: 500, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,242,236,.88)' }}>
              Get in touch with Ahmed for a direct audit of your marketing campaigns and organic search strategy.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a
                href="https://in.linkedin.com/in/syed-ahmed-creativals"
                target="_blank"
                rel="noreferrer"
                className="cx-btn cx-btn-lg cx-btn-yellow"
              >
                LinkedIn Profile ↗
              </a>
              <a
                href={waLink('Hi Ahmed! I read your profile on Creativals and want to audit our marketing ad spend.')}
                target="_blank"
                rel="noreferrer"
                className="cx-btn cx-btn-lg"
                style={{ background: 'rgba(244,242,236,.12)', color: '#F4F2EC', border: '1px solid rgba(244,242,236,.25)' }}
              >
                WhatsApp Marketing Audit →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default AhmedProfilePage;
