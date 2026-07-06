import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const ROLES = [
  { title: 'Media Buyer', team: 'Marketing', mode: 'Remote / Hybrid', type: 'Full-time', desc: 'Run paid campaigns on Meta & Google. Own ROAS. Think in data.' },
  { title: 'Graphic Designer', team: 'Creative', mode: 'Remote', type: 'Full-time', desc: 'Design that converts. Ads, social assets, landing pages, brand systems.' },
  { title: 'Video Editor', team: 'Creative', mode: 'Remote', type: 'Full-time / Freelance', desc: 'Short-form content that stops scrolls. Reels, ads, brand videos.' },
  { title: 'Web Developer', team: 'Tech', mode: 'Remote / Hybrid', type: 'Full-time', desc: 'WordPress, React, or both. Landing pages to full platforms.' },
  { title: 'SEO Executive', team: 'Marketing', mode: 'Remote', type: 'Full-time', desc: 'Technical SEO, content strategy, local ranking. No vanity rankings.' },
  { title: 'Client Success Manager', team: 'Operations', mode: 'Hybrid', type: 'Full-time', desc: 'Own client relationships. Translate strategy into satisfaction.' },
  { title: 'Automation / AI Ops', team: 'Tech', mode: 'Remote', type: 'Full-time', desc: 'Build intelligent workflows. Zapier, Make, n8n, AI tools.' },
];

const CULTURE = [
  { n: '01', title: 'Real Exposure', desc: 'You\'ll work directly on campaigns for real businesses across hotels, education, F&B, real estate, and more — not internal mock projects.' },
  { n: '02', title: 'Direct Founder Access', desc: 'No corporate ladder. You learn directly from the people who built the systems. Fast feedback, direct mentorship.' },
  { n: '03', title: 'Growth-Based Progression', desc: 'We promote on output, not tenure. If you deliver results, you grow. It\'s that simple.' },
  { n: '04', title: 'Diverse Projects', desc: 'No two months are the same. Different industries, different challenges, different growth goals.' },
  { n: '05', title: 'AI-Forward Culture', desc: 'We build with AI tools, not against them. You\'ll learn how to be 10x more effective using modern tooling.' },
  { n: '06', title: 'Ownership Culture', desc: 'You own your work end-to-end. No hand-holding, no micromanagement. Freedom with full accountability.' },
];

const TRAITS = [
  'Ownership mindset — you treat it like your own',
  'Fast learner — you adapt faster than you hesitate',
  'Reliable executor — deadlines are sacred',
  'Problem solver — you bring solutions, not problems',
  'Honest communicator — transparent, even when it\'s hard',
  'Hungry to grow — you\'re never satisfied with average',
  'AI-comfortable — you use tools, not excuses',
];

const NOT_FOR_YOU = [
  'You need someone to tell you what to do every day',
  'You\'re looking for a 9–5 that stays at 5',
  'You prioritize job title over actual impact',
  'You think social media means posting pretty pictures',
];

const PARTNERS = [
  { type: 'Freelancers', desc: 'Specialist talent we engage per project. Designers, developers, editors.' },
  { type: 'White-Label Collaborators', desc: 'Agencies that want to extend capacity with our execution team.' },
  { type: 'Sales Partners', desc: 'Earn referral commissions by connecting us with businesses that need growth.' },
  { type: 'Specialist Consultants', desc: 'Niche experts — legal, finance, specific industry knowledge — we bring in when needed.' },
];

const JoinUsPage = () => {
  useSEO({
    title: 'Digital Marketing Jobs in Hyderabad | Careers at Creativals',
    description: 'We are hiring top talent in Hyderabad. If you are obsessed with execution and growth, explore our open digital marketing, SEO, and developer roles.',
    keywords: 'digital marketing jobs hyderabad, seo jobs hyderabad, web developer jobs hyderabad, creativals careers',
  });

  return (
    <div>
      {/* ── HERO — indigo ── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap" style={{ paddingTop: 96, paddingBottom: 90 }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 })}>
              <span className="cx-dot" />
              We're hiring · Remote-first · India-based operations
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 30 }}>
              Don't join an agency.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>Join the movement.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 0 38px', maxWidth: 560, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,242,236,.85)', textWrap: 'pretty' }}>
              We're building India's most execution-focused growth team. If you're the kind of person who moves fast,
              thinks clearly, and takes full ownership — we want you.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href={waLink('Hi! I want to explore joining the Creativals team.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
                Reach Out on WhatsApp →
              </a>
              <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .7 })}>PERFORMANCE-LED PROGRESSION</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 01 OPEN ROLES — cream ── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="Open positions" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
              Who we're looking for<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>right now.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="cx-lead" style={{ maxWidth: 560, marginBottom: 48 }}>
              Pick a role, tap apply, and tell us why you're the one. Every application lands directly with the
              founders — no ATS black hole.
            </p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <div className="cx-card" style={{ padding: '26px 30px', display: 'flex', alignItems: 'center', gap: '18px 28px', flexWrap: 'wrap', boxSizing: 'border-box' }}>
                  <div style={{ flex: '1 1 230px', minWidth: 200 }}>
                    <div style={mono({ fontSize: 10.5, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 7 })}>{r.team}</div>
                    <div style={{ fontWeight: 900, fontSize: 22, letterSpacing: '-0.01em', lineHeight: 1.1 }}>{r.title}</div>
                  </div>
                  <p style={{ flex: '2 1 300px', margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'rgba(23,21,26,.68)' }}>{r.desc}</p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', flex: 'none' }}>
                    <span className="cx-tag cx-tag-ink">{r.type}</span>
                    <span className="cx-tag cx-tag-indigo">{r.mode}</span>
                  </div>
                  <a
                    href={waLink(`Hi! I want to apply for the ${r.title} position at Creativals.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="cx-btn cx-btn-sm cx-btn-ink"
                    style={{ flex: 'none' }}
                  >
                    Apply →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 CULTURE — ink ── */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="Life at Creativals" dark /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
              Why people love<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>working here.</span>
            </h2>
          </Reveal>

          <div className="cx-grid3" style={{ gap: '44px 30px', margin: '54px 0 72px' }}>
            {CULTURE.map((c, i) => (
              <Reveal key={c.n} delay={i * 70}>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 44, fontStretch: '120%', lineHeight: 1, color: '#FFD84D', marginBottom: 14 }}>{c.n}</div>
                  <div style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.01em', marginBottom: 10 }}>{c.title}</div>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'rgba(244,242,236,.65)' }}>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* is this you */}
          <div className="cx-grid2" style={{ alignItems: 'start' }}>
            <Reveal delay={80}>
              <div style={{ borderTop: '2px solid #3DDC84', paddingTop: 24 }}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#3DDC84', marginBottom: 20 })}>
                  This is you
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                  {TRAITS.map((t) => (
                    <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, lineHeight: 1.55, color: 'rgba(244,242,236,.8)' }}>
                      <span style={{ color: '#3DDC84', fontWeight: 900, flex: 'none' }}>✓</span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div style={{ borderTop: '2px solid #FF5F57', paddingTop: 24 }}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#FF5F57', marginBottom: 20 })}>
                  This is not you
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                  {NOT_FOR_YOU.map((t) => (
                    <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, lineHeight: 1.55, color: 'rgba(244,242,236,.7)' }}>
                      <span style={mono({ color: '#FF5F57', fontWeight: 600, flex: 'none' })}>✗</span>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 03 PARTNERS + CTA — yellow band ── */}
      <section style={{ background: '#FFD84D', color: '#17151A', borderTop: '4px solid #17151A', borderBottom: '4px solid #17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="03" label="Not looking for a job?" yellow /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
              No open role?<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Pitch us anyway.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="cx-lead" style={{ maxWidth: 560, marginBottom: 48, color: 'rgba(23,21,26,.75)' }}>
              We collaborate with freelancers, white-label partners, sales partners, and specialist consultants. If you
              can execute, there's a seat at the table.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 22, marginBottom: 48 }}>
            {PARTNERS.map((p, i) => (
              <Reveal key={p.type} delay={i * 90}>
                <div className={`cx-card ${i % 2 ? 'tilt-r' : 'tilt-l'}`} style={{ height: '100%', boxSizing: 'border-box', padding: '28px 26px' }}>
                  <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.01em', marginBottom: 10 }}>{p.type}</div>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(23,21,26,.68)' }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <a href={waLink('Hi! I want to explore a partnership with Creativals.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-ink">
                No open role? Pitch us anyway →
              </a>
              <span style={mono({ fontSize: 12, letterSpacing: '.08em', color: 'rgba(23,21,26,.6)' })}>STRAIGHT TO THE FOUNDERS · REPLY IN 2 HRS</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage;
