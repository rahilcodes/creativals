import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const RAHIL_PILLARS = [
  {
    num: '01',
    title: 'Ruthless Execution Strategy',
    desc: 'Eliminating agency fluff and focus-less campaigns. Rahil designs clear, revenue-driven execution frameworks that guarantee accountability from day one.',
  },
  {
    num: '02',
    title: 'Revenue Stewardship',
    desc: 'Treating client budgets as our own bank account. Ensuring every dollar of ad spend and web engineering directly contributes to bottom-line profitability.',
  },
  {
    num: '03',
    title: 'Strategic Partnerships',
    desc: 'Building long-term, high-trust relationships with business founders across India, US, UAE, and 6+ global markets.',
  },
  {
    num: '04',
    title: 'Total Market Dominance',
    desc: 'Moving past simple retainers to help companies dominate their category through category-defining branding, systems, and distribution.',
  },
];

const RAHIL_METRICS = [
  { value: '2019', label: 'Year Founded' },
  { value: '160+', label: 'Clients Scaled' },
  { value: '7', label: 'Countries Covered' },
  { value: '92%', label: 'Client Retention Rate' },
];

const RAHIL_LAWS = [
  { title: 'Execution Over Excuses', desc: 'We get things done, properly and on time. Always.' },
  { title: 'Results Over Vanity', desc: 'Revenue. Leads. Bookings. Growth. Not impressions or vanity reports.' },
  { title: 'Long-Term Thinking', desc: 'Building sustainable, compounding execution systems rather than short-term hacks.' },
  { title: 'Trust by Default', desc: 'Honest, direct communication with clients even when it is uncomfortable.' },
];

const RahilProfilePage = () => {
  useSEO({
    title: 'Mohammed Rahil Azeez | Founder & CEO at Creativals',
    description: 'Meet Mohammed Rahil Azeez, Founder & CEO at Creativals. Building execution-focused growth engines, strategic client systems, and business scaling.',
    keywords: 'Mohammed Rahil Azeez, Rahil Azeez, Founder Creativals, CEO Creativals, digital marketing hyderabad, growth agency leader',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Mohammed Rahil Azeez',
      alternateName: 'Rahil Azeez',
      jobTitle: 'Founder & CEO',
      worksFor: {
        '@type': 'Organization',
        name: 'Creativals',
        url: 'https://creativals.com',
      },
      url: 'https://creativals.com/mohammed-rahil-azeez',
      image: 'https://creativals.com/rahil.webp',
      sameAs: [
        'https://in.linkedin.com/in/mohammed-rahil-azeez',
      ],
      description: 'Founder & CEO of Creativals. Leading execution-driven digital marketing, brand strategy, and growth systems for 160+ companies globally.',
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
              Inside Creativals · Executive Profile · @rahil
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'center' }}>
            <div>
              <Reveal delay={60}>
                <h1 className="cx-display cx-h1" style={{ marginBottom: 16 }}>
                  Mohammed Rahil Azeez
                </h1>
              </Reveal>
              <Reveal delay={100}>
                <div style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 700, color: '#FFD84D', marginBottom: 24, fontStyle: 'italic' }}>
                  Founder & CEO · Visionary Lead
                </div>
              </Reveal>
              <Reveal delay={140}>
                <p style={{ margin: '0 0 32px', fontSize: 18, lineHeight: 1.6, color: 'rgba(244,242,236,.88)', maxWidth: 540 }}>
                  Founded Creativals in 2019 out of frustration with vanity-obsessed agencies. Rahil leads Creativals with a relentless obsession with measurable revenue growth and zero excuses.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                  <a
                    href="https://in.linkedin.com/in/mohammed-rahil-azeez"
                    target="_blank"
                    rel="noreferrer"
                    className="cx-btn cx-btn-lg cx-btn-yellow"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                  >
                    LinkedIn Profile ↗
                  </a>
                  <a
                    href={waLink('Hi Rahil! I read your profile on Creativals and want to discuss scaling our business.')}
                    target="_blank"
                    rel="noreferrer"
                    className="cx-btn cx-btn-lg"
                    style={{ background: 'rgba(244,242,236,.12)', color: '#F4F2EC', border: '1px solid rgba(244,242,236,.25)' }}
                  >
                    Talk to Rahil →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Profile Avatar Card */}
            <Reveal delay={120}>
              <div
                className="cx-card tilt-r"
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
                    src="/rahil.webp"
                    alt="Mohammed Rahil Azeez"
                    width="380"
                    height="380"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={mono({ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FFD84D', marginBottom: 8 })}>
                  FOUNDER MANTRA
                </div>
                <p style={{ margin: 0, fontSize: 17, fontWeight: 700, lineHeight: 1.4, fontStyle: 'italic' }}>
                  "Execution is the only strategy that matters."
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 18 }}>
                  <span className="cx-tag cx-tag-indigo">Clients</span>
                  <span className="cx-tag cx-tag-indigo">Finance</span>
                  <span className="cx-tag cx-tag-indigo">Growth</span>
                  <span className="cx-tag cx-tag-indigo">Strategy</span>
                  <span className="cx-tag cx-tag-indigo">Partnerships</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 — STORY & NOTE ── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The Origin Story" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 28 }}>
              Built on blood.<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Driven by total dominance.</span>
            </h2>
          </Reveal>

          <div className="cx-grid2" style={{ alignItems: 'start', marginBottom: 56 }}>
            <Reveal delay={120}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p className="cx-lead" style={{ fontSize: 19, fontWeight: 600, color: '#17151A' }}>
                  Rahil founded Creativals in 2019 with a clear vision: not to run another agency, but to build a company that creates measurable business growth through systems, execution, and modern technology.
                </p>
                <p className="cx-lead">
                  "When I founded Creativals, I looked at an industry full of excuses and decided to build an execution machine that leaves no room for failure. But you don't build an empire with strangers who clock out at 5 PM. You need absolute trust, relentless execution, and loyalty money cannot buy."
                </p>
                <p className="cx-lead">
                  Under Rahil's leadership, Creativals expanded from a lean team in Hyderabad to a global execution partner operating across India, US, Canada, UAE, Malaysia, and Australia.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="cx-card tilt-l" style={{ boxSizing: 'border-box', padding: 32 }}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 18 })}>
                  A Note From Rahil
                </div>
                <p style={{ margin: '0 0 16px', fontWeight: 900, fontSize: 20, lineHeight: 1.3, textTransform: 'uppercase' }}>
                  Most agencies want your retainer. We want your total market dominance.
                </p>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'rgba(23,21,26,.75)' }}>
                  When you partner with Creativals, you aren't getting handed off to a junior account manager. You bring dedicated founders into your war room who treat your revenue like our own bank account.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — LEADERSHIP PILLARS (YELLOW) ── */}
      <section style={{ background: '#FFD84D', color: '#17151A', borderTop: '4px solid #17151A', borderBottom: '4px solid #17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="Leadership Pillars" yellow /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 40 }}>
              How Rahil leads<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Creativals & client growth.</span>
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {RAHIL_PILLARS.map((p, idx) => (
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
          <Reveal><SecNum n="03" label="Track Record & Laws" yellow /></Reveal>

          {/* Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '36px 28px', margin: '40px 0 72px' }}>
            {RAHIL_METRICS.map((m, idx) => (
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
              Founder Principles
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {RAHIL_LAWS.map((law, idx) => (
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
              Connect with Rahil
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 28 }}>
              Ready to build a real<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>growth engine?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ margin: '0 0 36px', maxWidth: 500, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,242,236,.88)' }}>
              Talk directly with Rahil or connect on LinkedIn to discuss your company's growth strategy.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a
                href="https://in.linkedin.com/in/mohammed-rahil-azeez"
                target="_blank"
                rel="noreferrer"
                className="cx-btn cx-btn-lg cx-btn-yellow"
              >
                LinkedIn Profile ↗
              </a>
              <a
                href={waLink('Hi Rahil! I read your profile on Creativals and want to discuss scaling our business.')}
                target="_blank"
                rel="noreferrer"
                className="cx-btn cx-btn-lg"
                style={{ background: 'rgba(244,242,236,.12)', color: '#F4F2EC', border: '1px solid rgba(244,242,236,.25)' }}
              >
                WhatsApp Founder Strategy →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default RahilProfilePage;
