import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const REVIEWS = [
  {
    stat: '+28% margins in 60 days', initials: 'RD',
    name: 'Rohan Deshmukh', role: 'Founder, Cloud Kitchen Chain',
    text: 'Every other agency sold us "social media aesthetics". Creativals came in and built a WhatsApp ordering funnel that bypassed Swiggy entirely. We increased our profit margins by 28% within 60 days.',
    stars: 5,
  },
  {
    stat: '$150 → $45 CPA', initials: 'AV',
    name: 'Dr. Anjali Verma', role: 'Director, Advanced Aesthetics',
    text: 'Our Google Ads were bleeding money before they took over. They restructured our landing pages to focus entirely on trust and doctor credentials. We went from $150 CPA to $45 CPA for high-ticket laser procedures.',
    stars: 5,
  },
  {
    stat: '5-6 VP-level calls / week', initials: 'PS',
    name: 'Priyank Shah', role: 'CEO, Enterprise ERP SaaS',
    text: 'The best B2B growth team in India, period. They don\'t just run LinkedIn ads; they completely rewrote our outbound messaging and built an automated educational funnel that generates 5-6 highly qualified VP-level calls every week on autopilot.',
    stars: 5,
  },
  {
    stat: '₹15L → ₹80L / month', initials: 'NG',
    name: 'Nisha Gupta', role: 'CMO, Sustainable Fashion Co.',
    text: 'Their creative testing methodology is brutal and effective. They tested 50+ video variations in month one, found the winning formula, and scaled our Shopify store from 15L to 80L per month profitably. Absolute beasts.',
    stars: 5,
  },
];

const TRUST_STATS = [
  { v: '45+', l: 'Active Growth Systems' },
  { v: '₹120Cr', l: 'Client Revenue Managed' },
  { v: '92%', l: '6-Month Retention Rate' },
];

const ClientReviewsPage = () => {
  useSEO({
    title: 'Client Testimonials & Marketing Reviews Hyderabad | Creativals',
    description: 'Read reviews and success stories from Hyderabad businesses that have scaled with Creativals digital marketing systems.',
    keywords: 'marketing agency reviews hyderabad, creativals reviews, client testimonials digital marketing',
  });

  return (
    <div>
      {/* ── HERO — ink ─────────────────────────────────────────── */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 30 })}>
              <span className="cx-dot" /> Unedited client feedback
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 28 }}>
              Don't trust us.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>Trust our clients.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 620, color: 'rgba(244,242,236,.75)' }}>
              When you replace generic marketing with mathematical growth systems, the results speak
              for themselves. Here's what owners and founders have to say.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 01 · REVIEWS — cream grid ──────────────────────────── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The reviews" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 60 }}>
              In their own<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>words.</span>
            </h2>
          </Reveal>
          <div className="cx-grid2" style={{ gap: 26 }}>
            {REVIEWS.map((r, i) => (
              <Reveal key={r.initials} delay={i * 120}>
                <div className="cx-card" style={{ display: 'flex', flexDirection: 'column', gap: 22, height: '100%', boxSizing: 'border-box' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
                    <div style={mono({ display: 'inline-flex', fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', background: '#FFD84D', color: '#17151A', borderRadius: 999, padding: '6px 13px' })}>
                      {r.stat}
                    </div>
                    <div aria-label={`${r.stars} out of 5 stars`} style={{ color: '#4F46E5', fontSize: 15, letterSpacing: 2 }}>
                      {'★'.repeat(r.stars)}
                    </div>
                  </div>
                  <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, fontWeight: 500, flex: 1 }}>"{r.text}"</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, borderTop: '1px solid rgba(23,21,26,.15)', paddingTop: 20 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#4F46E5', color: '#F4F2EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, flex: 'none' }}>
                      {r.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14.5 }}>{r.name}</div>
                      <div style={mono({ fontSize: 11, opacity: .55 })}>{r.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 · TRUST STATS + CTA — indigo ────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="The track record" dark /></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 26, borderTop: '1px solid rgba(244,242,236,.3)', borderBottom: '1px solid rgba(244,242,236,.3)', padding: '40px 0', marginBottom: 60 }}>
            {TRUST_STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 100}>
                <div>
                  <div style={{ fontWeight: 900, fontStretch: '120%', fontSize: 'clamp(40px,4.6vw,62px)', lineHeight: 1, color: '#FFD84D' }}>{s.v}</div>
                  <div style={mono({ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .75, marginTop: 10 })}>{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Reveal>
              <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                Stop reading.<br />
                <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>Start scaling.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="cx-lead cx-lead-light" style={{ maxWidth: 520, margin: '0 auto 40px', color: 'rgba(244,242,236,.75)' }}>
                Get a free pipeline audit and discover exactly how we would engineer your growth.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <a href={waLink('Hi! I saw your client reviews and want to achieve similar results.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-yellow cx-btn-lg">
                Book your free audit →
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientReviewsPage;
