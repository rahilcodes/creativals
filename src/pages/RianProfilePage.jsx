import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const TECH_PILLARS = [
  {
    num: '01',
    title: 'Custom Web Architecture',
    desc: 'Zero-template, high-performance web applications built on React, Next.js, and Vite for instant load times and maximal conversions.',
  },
  {
    num: '02',
    title: 'AI Ops & Intelligent Agents',
    desc: 'Deploying conversational AI chatbots and automated support engines trained on proprietary business data to capture leads 24/7.',
  },
  {
    num: '03',
    title: 'Workflow & CRM Automation',
    desc: 'Eliminating repetitive manual labor by stitching together CRMs, messaging channels, and payment gateways into seamless automated pipelines.',
  },
  {
    num: '04',
    title: 'Cloud Systems & Infrastructure',
    desc: 'Hardened cloud servers with automated backups, edge caching, and 99.9% uptime guarantees engineered for heavy ad traffic spikes.',
  },
];

const IMPACT_METRICS = [
  { value: '160+', label: 'Client Platforms Scaled' },
  { value: '99.9%', label: 'Infrastructure Uptime' },
  { value: '60%', label: 'Average Time Saved on Ops' },
  { value: '0%', label: 'Templates Used' },
];

const TECH_LAWS = [
  { title: 'Speed is a Feature', desc: 'Every 100ms delay costs revenue. We build systems optimized for instantaneous response.' },
  { title: 'Automate What You Repeat', desc: 'If a task happens more than twice a week, code should handle it — not a human.' },
  { title: 'Architecture Over Aesthetics', desc: 'Stunning visuals are useless if the backend breaks under traffic. We build solid foundations first.' },
  { title: 'Data Integrity Always', desc: 'Clean tracking, reliable attribution, and centralized data pipelines guide every decision.' },
];

const RianProfilePage = () => {
  useSEO({
    title: 'Mohammed Rian Azeez | Head of Tech at Creativals',
    description: 'Meet Mohammed Rian Azeez, Head of Tech & Systems at Creativals. Engineering automated growth engines, custom web architectures, and AI ops.',
    keywords: 'Mohammed Rian Azeez, Rian Azeez, Head of Tech Creativals, Creativals tech, AI automation hyderabad, custom web development',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Mohammed Rian Azeez',
      alternateName: 'Rian Azeez',
      jobTitle: 'Head of Tech & Systems',
      worksFor: {
        '@type': 'Organization',
        name: 'Creativals',
        url: 'https://creativals.com',
      },
      url: 'https://creativals.com/mohammed-rian-azeez',
      image: 'https://creativals.com/rian.webp',
      sameAs: [
        'https://in.linkedin.com/in/mohammed-rian-azeez',
      ],
      description: 'Head of Tech & Systems at Creativals. Architecting automated business growth engines, custom web platforms, AI chatbots, and high-uptime cloud infrastructure.',
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
              Inside Creativals · Executive Profile · @rian
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <Reveal delay={60}>
                <h1 className="cx-display cx-h1" style={{ marginBottom: 16 }}>
                  Mohammed Rian Azeez
                </h1>
              </Reveal>
              <Reveal delay={100}>
                <div style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: 700, color: '#FFD84D', marginBottom: 24, fontStyle: 'italic' }}>
                  Head of Tech & Systems · Co-Founder
                </div>
              </Reveal>
              <Reveal delay={140}>
                <p style={{ margin: '0 0 32px', fontSize: 18, lineHeight: 1.6, color: 'rgba(244,242,236,.88)', maxWidth: 540 }}>
                  Architecting the technical backbone of Creativals. Rian transforms complex business operations into high-speed, automated execution systems that scale revenue effortlessly.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                  <a
                    href="https://in.linkedin.com/in/mohammed-rian-azeez"
                    target="_blank"
                    rel="noreferrer"
                    className="cx-btn cx-btn-lg cx-btn-yellow"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                  >
                    LinkedIn Profile ↗
                  </a>
                  <a
                    href={waLink('Hi Rian! I read your profile on Creativals and want to discuss a tech project.')}
                    target="_blank"
                    rel="noreferrer"
                    className="cx-btn cx-btn-lg"
                    style={{ background: 'rgba(244,242,236,.12)', color: '#F4F2EC', border: '1px solid rgba(244,242,236,.25)' }}
                  >
                    Contact Rian →
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
                    src="/rian.webp"
                    alt="Mohammed Rian Azeez"
                    width="380"
                    height="380"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={mono({ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FFD84D', marginBottom: 8 })}>
                  CORE PHILOSOPHY
                </div>
                <p style={{ margin: 0, fontSize: 17, fontWeight: 700, lineHeight: 1.4, fontStyle: 'italic' }}>
                  "If it can be automated, it should be."
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 18 }}>
                  <span className="cx-tag cx-tag-indigo">Development</span>
                  <span className="cx-tag cx-tag-indigo">Automation</span>
                  <span className="cx-tag cx-tag-indigo">Systems</span>
                  <span className="cx-tag cx-tag-indigo">AI Ops</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 — MINDSET & STORY ── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The Engineer's Mindset" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 28 }}>
              Engineering execution.<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Eliminating friction.</span>
            </h2>
          </Reveal>

          <div className="cx-grid2" style={{ alignItems: 'start', marginBottom: 56 }}>
            <Reveal delay={120}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p className="cx-lead" style={{ fontSize: 19, fontWeight: 600, color: '#17151A' }}>
                  As Head of Tech & Systems at Creativals, Mohammed Rian Azeez leads the architecture of custom websites, automated marketing funnels, AI chatbots, and enterprise CRM integrations.
                </p>
                <p className="cx-lead">
                  While traditional agencies rely on slow manual processes and fragmented tools, Rian built Creativals' proprietary engineering stack. Every system is built to minimize human error, automate lead routing, and ensure maximum conversion rates.
                </p>
                <p className="cx-lead">
                  From scaling web platforms that handle heavy ad surges to deploying conversational AI that pre-qualifies prospects 24/7, Rian ensures our clients' technical infrastructure functions as a revenue engine.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="cx-card tilt-l" style={{ boxSizing: 'border-box' }}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 20 })}>
                  Key Leadership Focus
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'flex', gap: 12, fontSize: 15, color: 'rgba(23,21,26,.8)' }}>
                    <span style={{ color: '#3DDC84', fontWeight: 900 }}>✓</span>
                    <span><strong>Custom Web Development:</strong> React, Next.js, and lightweight headless architecture.</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 15, color: 'rgba(23,21,26,.8)' }}>
                    <span style={{ color: '#3DDC84', fontWeight: 900 }}>✓</span>
                    <span><strong>Workflow Automation:</strong> End-to-end CRM, messaging, and database syncing.</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 15, color: 'rgba(23,21,26,.8)' }}>
                    <span style={{ color: '#3DDC84', fontWeight: 900 }}>✓</span>
                    <span><strong>AI Support Agents:</strong> Intelligent lead qualification and automated WhatsApp closing.</span>
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 15, color: 'rgba(23,21,26,.8)' }}>
                    <span style={{ color: '#3DDC84', fontWeight: 900 }}>✓</span>
                    <span><strong>DevOps & Infrastructure:</strong> 99.9% uptime managed cloud hosting and security monitoring.</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — CORE PILLARS (YELLOW) ── */}
      <section style={{ background: '#FFD84D', color: '#17151A', borderTop: '4px solid #17151A', borderBottom: '4px solid #17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="Capabilities" yellow /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 40 }}>
              Systems Rian builds for<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Creativals & global brands.</span>
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {TECH_PILLARS.map((p, idx) => (
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
          <Reveal><SecNum n="03" label="Performance & Laws" yellow /></Reveal>

          {/* Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '36px 28px', margin: '40px 0 72px' }}>
            {IMPACT_METRICS.map((m, idx) => (
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
              Engineering Laws Followed By Rian
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {TECH_LAWS.map((law, idx) => (
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
              Connect with Rian
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 28 }}>
              Need custom tech<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>or automated systems?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ margin: '0 0 36px', maxWidth: 500, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,242,236,.88)' }}>
              Connect with Rian on LinkedIn or start a conversation with the Creativals engineering team.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a
                href="https://in.linkedin.com/in/mohammed-rian-azeez"
                target="_blank"
                rel="noreferrer"
                className="cx-btn cx-btn-lg cx-btn-yellow"
              >
                LinkedIn Profile ↗
              </a>
              <a
                href={waLink('Hi Rian! I read your profile on Creativals and want to consult on website and automation tech.')}
                target="_blank"
                rel="noreferrer"
                className="cx-btn cx-btn-lg"
                style={{ background: 'rgba(244,242,236,.12)', color: '#F4F2EC', border: '1px solid rgba(244,242,236,.25)' }}
              >
                WhatsApp Tech Consult →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default RianProfilePage;
