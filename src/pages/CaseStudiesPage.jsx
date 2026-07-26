import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const CASES = [
  {
    client: 'Glampinn Valley',
    industry: 'Luxury Hospitality',
    tag: 'Hotels',
    headline: 'A resort that became a movement.',
    challenge: 'Beautiful property with zero digital presence and minimal advance bookings. Revenue was entirely dependent on walk-ins and word-of-mouth.',
    what_we_did: ['Full brand identity & website build', 'Instagram & Meta paid campaigns', 'High-end photography & video production', 'Influencer campaign management', 'Online booking funnel optimization'],
    result: '30M+ views and 30K followers in a year. Became one of Hyderabad\'s most talked-about luxury experiences.',
    metrics: [
      { v: '30M+', l: 'Total Views' },
      { v: '30K', l: 'Followers Gained' },
      { v: '3x', l: 'Booking Rate' },
    ],
  },
  {
    client: 'Hotel Sky International',
    industry: 'Business Hotels',
    tag: 'Hotels',
    headline: 'Monthly revenue grew 92% in 6 months.',
    challenge: 'Revenue flat for 8+ months. Heavy dependence on OTAs eating into margins. No direct booking channel.',
    what_we_did: ['Google Ads targeting business travellers', 'Direct booking website with no-OTA offers', 'WhatsApp lead nurture automation', 'Google Business Profile optimization', 'Review acquisition strategy'],
    result: '92% revenue growth in under 6 months. Significant shift from OTA to direct bookings.',
    metrics: [
      { v: '92%', l: 'Revenue Growth' },
      { v: 'Direct', l: 'Booking Channel Built' },
      { v: '6 Months', l: 'To Result' },
    ],
  },
  {
    client: 'Pista House',
    industry: 'Restaurant Chain',
    tag: 'Food',
    headline: '200% growth in online order volume.',
    challenge: 'Iconic brand with massive offline reputation but very limited online ordering presence. Competitors were winning digital customers despite inferior product.',
    what_we_did: ['Social media growth strategy', 'Paid social campaigns targeting food lovers', 'Zomato & Swiggy ad optimization', 'Festive campaign production', 'Video content for Reels & Shorts'],
    result: '200% increase in online orders. Social media became a top traffic driver.',
    metrics: [
      { v: '200%', l: 'Order Volume Growth' },
      { v: '5M+', l: 'Campaign Reach' },
      { v: 'City-Wide', l: 'Festive Dominance' },
    ],
  },
  {
    client: 'MRA Motors',
    industry: 'Automobile',
    tag: 'Auto',
    headline: '50 million views. 500+ leads every month.',
    challenge: 'Dealership with great inventory but poor brand positioning. No social media strategy. Leads were inconsistent and low quality.',
    what_we_did: ['Short-form video content strategy', 'Car review & test drive content', 'Meta paid ads for qualified buyers', 'Instagram & YouTube channel growth', 'Lead funnel & CRM setup'],
    result: '50M+ views generated. 500+ monthly qualified leads. Built into one of Hyderabad\'s most-followed auto pages.',
    metrics: [
      { v: '50M+', l: 'Total Views' },
      { v: '500+', l: 'Monthly Leads' },
      { v: '50K+', l: 'Social Followers' },
    ],
  },
  {
    client: 'Aakash Institute',
    industry: 'Education',
    tag: 'Education',
    headline: '200+ new admissions in a single season.',
    challenge: 'Admissions season with underperforming walk-ins. Parents not being reached through digital. High competition from national brands.',
    what_we_did: ['Geo-targeted parent campaigns on Meta & Google', 'Landing pages for each course category', 'WhatsApp follow-up automation', 'Competitive positioning campaigns', 'Parent testimonial video production'],
    result: '200+ qualified admissions in a single year. Digital became primary lead source for the first time.',
    metrics: [
      { v: '200+', l: 'New Admissions' },
      { v: '65%', l: 'Lead-to-Visit Rate' },
      { v: '#1', l: 'Local Parent Recall' },
    ],
  },
  {
    client: 'GMR Group of Institutions',
    industry: 'Education Group',
    tag: 'Education',
    headline: '3-year ongoing partner. Complete digital ecosystem.',
    challenge: 'Prestigious institution group with fragmented digital presence across 4+ institutions. No unified brand voice. Ineffective individual campaigns per institution.',
    what_we_did: ['Unified brand system across all institutions', 'Individual campaign strategies per campus', 'Complete website management', 'Social media across 5+ accounts', 'Ongoing creative & marketing support'],
    result: 'Became full digital partner managing GMR University, Medical College, Engineering College, and 5 schools — 3-year ongoing relationship.',
    metrics: [
      { v: '4+', l: 'Institutions Managed' },
      { v: '3 Years', l: 'Ongoing Partnership' },
      { v: '#1', l: 'in Hyderabad Education' },
    ],
  },
];

const TAGS = ['All', 'Hotels', 'Food', 'Education', 'Auto'];

const KEY_NUMBERS = [
  { v: '160+', l: 'Businesses Scaled' },
  { v: '50M+', l: 'Combined Views' },
  { v: '22+', l: 'Industries' },
  { v: '7', l: 'Countries' },
];

const THEMES = {
  indigo: { bg: '#4F46E5', fg: '#F4F2EC', accent: '#FFD84D', body: 'rgba(244,242,236,.8)', dim: 'rgba(244,242,236,.65)', line: 'rgba(244,242,236,.3)', blockBg: 'rgba(23,21,26,.22)', border: 'none' },
  ink: { bg: '#17151A', fg: '#F4F2EC', accent: '#FFD84D', body: 'rgba(244,242,236,.8)', dim: 'rgba(244,242,236,.65)', line: 'rgba(244,242,236,.3)', blockBg: 'rgba(244,242,236,.06)', border: 'none' },
  white: { bg: '#FFFFFF', fg: '#17151A', accent: '#4F46E5', body: 'rgba(23,21,26,.72)', dim: 'rgba(23,21,26,.55)', line: 'rgba(23,21,26,.25)', blockBg: '#F4F2EC', border: '2px solid #17151A' },
};

function CaseCard({ cs, theme, index }) {
  const t = THEMES[theme];
  return (
    <Reveal delay={80}>
      <article style={{ background: t.bg, color: t.fg, border: t.border, borderRadius: 18, padding: 'clamp(28px, 4vw, 48px)', boxSizing: 'border-box' }}>
        {/* meta row */}
        <div style={mono({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: t.dim, marginBottom: 26 })}>
          <span>Case file {String(index + 1).padStart(2, '0')} · {cs.industry}</span>
          <span className={theme === 'white' ? 'cx-tag cx-tag-indigo' : 'cx-tag cx-tag-yellow'}>{cs.tag}</span>
        </div>

        <h3 className="cx-display" style={{ fontSize: 'clamp(26px,3vw,40px)', marginBottom: 10 }}>{cs.client}</h3>
        <p style={{ margin: '0 0 34px', fontSize: 19, fontWeight: 700, letterSpacing: '-0.01em', color: t.accent }}>{cs.headline}</p>

        {/* big stat numbers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 24, borderTop: `1px solid ${t.line}`, borderBottom: `1px solid ${t.line}`, padding: '28px 0', marginBottom: 34 }}>
          {cs.metrics.map((m) => (
            <div key={m.l}>
              <div style={{ fontWeight: 900, fontStretch: '120%', fontSize: 'clamp(30px,3.2vw,46px)', lineHeight: 1, color: t.accent }}>{m.v}</div>
              <div style={mono({ fontSize: 10.5, letterSpacing: '.12em', textTransform: 'uppercase', color: t.dim, marginTop: 8 })}>{m.l}</div>
            </div>
          ))}
        </div>

        {/* before / after blocks */}
        <div className="cx-grid2" style={{ gap: 22, marginBottom: 30 }}>
          <div style={{ background: t.blockBg, borderRadius: 14, padding: '24px 24px' }}>
            <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#FF5F57', marginBottom: 12 })}>Before · The challenge</div>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: t.body }}>{cs.challenge}</p>
          </div>
          <div style={{ background: t.blockBg, borderRadius: 14, padding: '24px 24px' }}>
            <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#3DDC84', marginBottom: 12 })}>After · The result</div>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, fontWeight: 600, color: t.fg }}>{cs.result}</p>
          </div>
        </div>

        {/* what we did */}
        <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: t.dim, marginBottom: 14 })}>What we did</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
          {cs.what_we_did.map((w) => (
            <span key={w} style={mono({ fontSize: 11, letterSpacing: '.05em', textTransform: 'uppercase', border: `1px solid ${t.line}`, borderRadius: 999, padding: '7px 13px' })}>{w}</span>
          ))}
        </div>

        <a
          href={waLink(`Hi! I want similar results for my business like you did for ${cs.client}.`)}
          target="_blank" rel="noreferrer"
          className={theme === 'white' ? 'cx-btn cx-btn-outline-ink' : 'cx-btn cx-btn-yellow'}
          style={{ padding: '15px 26px' }}
        >
          Get similar results →
        </a>
      </article>
    </Reveal>
  );
}

const CaseStudiesPage = () => {
  const [activeTag, setActiveTag] = useState('All');

  useSEO({
    title: 'Marketing Case Studies & Results in Hyderabad | Creativals',
    description: 'View our proven marketing results. See how Creativals helps Hyderabad businesses and global brands achieve 300%+ ROI with predictable growth engines.',
    keywords: 'marketing case studies, marketing results hyderabad, best marketing agency in hyderabad case studies',
  });

  const filtered = activeTag === 'All' ? CASES : CASES.filter((c) => c.tag === activeTag);
  const themeCycle = ['indigo', 'white', 'ink'];

  return (
    <div>
      {/* ── HERO — indigo ──────────────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 30 })}>
              <span className="cx-dot" /> Real numbers · Real businesses
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 28 }}>
              Proof, not promises.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>Results that speak.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 620, color: 'rgba(244,242,236,.75)', marginBottom: 54 }}>
              We don't hide behind vague claims. These are the real businesses, real challenges, and real
              numbers from our work. No exaggeration. No borrowed credibility.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 26, borderTop: '1px solid rgba(244,242,236,.3)', paddingTop: 40 }}>
              {KEY_NUMBERS.map((s) => (
                <div key={s.l}>
                  <div style={{ fontWeight: 900, fontStretch: '120%', fontSize: 'clamp(34px,4vw,52px)', lineHeight: 1, color: '#FFD84D' }}>{s.v}</div>
                  <div style={mono({ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .75, marginTop: 10 })}>{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 01 · CASE FILES — cream ────────────────────────────── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The case files" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
              They were stuck.<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Here's the full story.</span>
            </h2>
          </Reveal>

          {/* filter pills */}
          <Reveal delay={120}>
            <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', margin: '30px 0 16px' })}>Filter by industry</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 48 }}>
              {TAGS.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTag(t)}
                  style={mono({
                    fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase',
                    padding: '11px 18px', borderRadius: 999, border: '2px solid #17151A',
                    background: activeTag === t ? '#17151A' : 'transparent',
                    color: activeTag === t ? '#FFD84D' : '#17151A',
                    cursor: 'pointer', transition: 'background .15s,color .15s',
                  })}
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 34 }}>
            {filtered.map((cs, i) => (
              <CaseCard key={cs.client} cs={cs} theme={themeCycle[i % 3]} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 · FINAL CTA — ink ───────────────────────────────── */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section" style={{ textAlign: 'center' }}>
          <Reveal><div style={{ display: 'flex', justifyContent: 'center' }}><SecNum n="02" label="Your turn" dark /></div></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
              Want to be our next<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>case study?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 520, margin: '0 auto 40px', color: 'rgba(244,242,236,.75)' }}>
              We only take on clients we're confident we can grow. Start with a free audit.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <a href={waLink('Hi! I want to explore growing my business with Creativals.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-yellow cx-btn-lg">
              Start my free audit →
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
