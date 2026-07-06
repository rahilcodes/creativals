import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const TIERS = [
  {
    name: 'Starter System',
    price: '₹25,000',
    period: '/month',
    desc: 'For businesses just starting to build their digital presence.',
    badge: '',
    popular: false,
    features: [
      '1 Core Marketing Channel',
      'Landing Page Setup',
      'WhatsApp Follow-up System',
      'Monthly Performance Report',
      'Dedicated Account Manager',
    ],
    cta: 'Start with Starter',
    whatsapp: 'Hi! I\'m interested in the Starter System plan.',
  },
  {
    name: 'Growth Engine',
    price: '₹55,000',
    period: '/month',
    desc: 'For businesses ready to scale leads and close more deals.',
    badge: 'Most Popular',
    popular: true,
    features: [
      '3 Marketing Channels (Ads + SEO + Social)',
      'High-Converting Landing Page',
      'Full WhatsApp + CRM System',
      'Email/WhatsApp Nurture Flows',
      'Weekly Performance Reports',
      'A/B Testing & Optimisation',
      'Priority Support',
    ],
    cta: 'Get Growth Engine',
    whatsapp: 'Hi! I\'m interested in the Growth Engine plan.',
  },
  {
    name: 'Full Stack System',
    price: 'Custom',
    period: '',
    desc: 'For businesses that want the complete growth infrastructure.',
    badge: 'Best for Scaling',
    popular: false,
    features: [
      'All Marketing Channels',
      'Custom Website or App',
      'Full Automation + CRM Build',
      'AI Chatbot Integration',
      'Dedicated Growth Team',
      'Bi-weekly Strategy Calls',
      'Quarterly Business Review',
      '100% Money-Back Guarantee',
    ],
    cta: 'Get Custom Proposal',
    whatsapp: 'Hi! I want to discuss the Full Stack System custom plan.',
  },
];

/* comparison rows derived from the plan features: [feature, starter, growth, full stack] */
const CMP_ROWS = [
  ['Marketing channels', '1 core channel', '3 channels — Ads + SEO + Social', 'All channels'],
  ['Landing page / website', 'Landing page setup', 'High-converting landing page', 'Custom website or app'],
  ['WhatsApp & CRM', 'WhatsApp follow-up system', 'Full WhatsApp + CRM system', 'Full automation + CRM build + AI chatbot'],
  ['Nurture & optimisation', '—', 'Email/WhatsApp flows + A/B testing', 'Dedicated growth team on it daily'],
  ['Reporting', 'Monthly performance report', 'Weekly performance reports', 'Bi-weekly strategy calls + quarterly review'],
  ['Support', 'Dedicated account manager', 'Priority support', 'Dedicated growth team'],
  ['Guarantee', 'Free audit included', 'Free audit included', '100% money-back guarantee'],
];

const FAQS = [
  { q: 'What is included in the free audit?', a: 'We review your current ads, website, follow-up system, and competitor positioning. You get a clear breakdown of what\'s leaking money and a roadmap to fix it — completely free, no obligation.' },
  { q: 'Do you work on a contract?', a: 'We work month-to-month after an initial 3-month onboarding period. This keeps us accountable to deliver results — not lock you into a long-term contract with no performance pressure.' },
  { q: 'What are the contract terms?', a: 'No 12-month lockdowns, no hidden fees. After the initial 3-month onboarding, you\'re free to leave anytime with 30 days\' notice. We earn your business every single month.' },
  { q: 'What if I don\'t see results?', a: 'We offer a 100% money-back guarantee on our first month if we don\'t hit the agreed KPIs. We stand behind our systems.' },
  { q: 'Is pricing negotiable?', a: 'Every plan is structured on scope. Tell us your budget and your goal — we\'ll see if we can build a system that fits. We prefer a smaller scope that delivers real ROI over a full package that underperforms.' },
  { q: 'What industries do you work with?', a: 'Hotels, restaurants, schools, clinics, e-commerce, real estate, fitness, and professional services. We specialize in systems for businesses that sell high-intent products or services with a real sales process.' },
];

const PricingPage = () => {
  useSEO({
    title: 'Digital Marketing Packages & Pricing Hyderabad | Creativals',
    description: 'Transparent digital marketing pricing for Hyderabad businesses. No hidden fees, no long-term traps. Get a massive ROI with our growth packages.',
    keywords: 'digital marketing packages hyderabad, seo pricing hyderabad, marketing agency cost hyderabad',
  });

  return (
    <div>
      {/* ── HERO (indigo) ──────────────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap" style={{ paddingTop: 140, paddingBottom: 96 }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 34 })}>
              <span className="cx-dot" />
              100% money-back guarantee
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1">
              Pay for results.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>Not for promises.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 620, marginTop: 30 }}>
              No hidden fees. No 12-month lockdowns. Every plan starts with a free audit so you know exactly what
              you're investing in.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 38 }}>
              {['MONEY-BACK GUARANTEE', 'MONTH-TO-MONTH AFTER 3 MONTHS', 'FREE AUDIT INCLUDED'].map((t) => (
                <span key={t} style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.08em', border: '1px solid rgba(244,242,236,.4)', borderRadius: 999, padding: '8px 14px' })}>{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 01 · PRICING CARDS (cream) ─────────────────────────── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The plans" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 60 }}>
              Three systems.<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Zero traps.</span>
            </h2>
          </Reveal>

          <div className="cx-grid3" style={{ gap: 22, alignItems: 'stretch' }}>
            {TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <div
                  className={tier.popular ? 'cx-card-indigo' : 'cx-card'}
                  style={{ display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box', ...(tier.popular ? { border: '2px solid #17151A' } : {}) }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 18 }}>
                    <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .6 })}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    {tier.popular && <span className="cx-tag cx-tag-yellow">POPULAR</span>}
                    {!tier.popular && tier.badge && <span className="cx-tag cx-tag-indigo">{tier.badge.toUpperCase()}</span>}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', marginBottom: 8 }}>{tier.name}</div>
                  <p style={{ margin: '0 0 22px', fontSize: 14.5, lineHeight: 1.6, opacity: .75 }}>{tier.desc}</p>
                  <div style={{ marginBottom: 26 }}>
                    <span style={{ fontWeight: 900, fontStretch: '120%', fontSize: 46, letterSpacing: '-0.02em' }}>{tier.price}</span>
                    <span style={mono({ fontSize: 12, opacity: .6, marginLeft: 6 })}>{tier.period}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                    {tier.features.map((f) => (
                      <li key={f} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14.5, lineHeight: 1.5 }}>
                        <span style={mono({ fontSize: 13, fontWeight: 600, color: tier.popular ? '#FFD84D' : '#4F46E5', flex: 'none' })}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(tier.whatsapp)}
                    target="_blank" rel="noreferrer"
                    className={`cx-btn ${tier.popular ? 'cx-btn-yellow' : 'cx-btn-outline-ink'}`}
                    style={{ display: 'block' }}
                  >
                    {tier.cta} →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 · COMPARISON STRIP (ink) ────────────────────────── */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="Side by side" dark /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 56, maxWidth: 900 }}>
              Compare the plans.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>Feature by feature.</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div style={{ borderRadius: 18, overflow: 'hidden', border: '2px solid #F4F2EC' }}>
              <div className="cx-cmp-row" style={mono({ gridTemplateColumns: '1.1fr 1fr 1fr 1fr', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', background: '#17151A', color: '#F4F2EC', borderTop: 'none' })}>
                <div style={{ padding: '18px 26px', opacity: .6 }}>Feature</div>
                <div style={{ padding: '18px 26px', opacity: .6 }}>Starter System</div>
                <div style={{ padding: '18px 26px', background: '#FFD84D', color: '#17151A', fontWeight: 600 }}>Growth Engine</div>
                <div style={{ padding: '18px 26px', opacity: .6 }}>Full Stack System</div>
              </div>
              {CMP_ROWS.map(([label, starter, growth, full]) => (
                <div key={label} className="cx-cmp-row" style={{ gridTemplateColumns: '1.1fr 1fr 1fr 1fr' }}>
                  <div style={{ fontWeight: 800 }}>{label}</div>
                  <div style={{ color: 'rgba(23,21,26,.55)' }}>{starter}</div>
                  <div style={{ fontWeight: 600, background: '#FFF8E0' }}>{growth}</div>
                  <div style={{ color: 'rgba(23,21,26,.55)' }}>{full}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 03 · GUARANTEE BAND (yellow) ───────────────────────── */}
      <section style={{ background: '#FFD84D', color: '#17151A', borderTop: '4px solid #17151A', borderBottom: '4px solid #17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="03" label="The guarantee" yellow /></Reveal>
          <Reveal delay={60}>
            <div style={{ border: '4px solid #17151A', borderRadius: 18, padding: 'clamp(28px,4vw,44px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontWeight: 900, fontStretch: '120%', textTransform: 'uppercase', fontSize: 'clamp(24px,3vw,34px)', letterSpacing: '-0.01em', marginBottom: 10 }}>
                  Results — or your money back.
                </div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, maxWidth: 700, color: 'rgba(23,21,26,.8)' }}>
                  We don't believe in locking businesses into 12-month retainers with no accountability. Our contracts
                  are performance-driven. We earn your business every month. If we underperform, you get your money
                  back. That's the commitment.
                </p>
              </div>
              <a href={waLink('Hi! I want to discuss pricing and get a free audit.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-ink" style={{ whiteSpace: 'nowrap', color: '#FFD84D' }}>
                Claim free audit →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 04 · FAQ (cream) ───────────────────────────────────── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <div className="cx-grid-faq">
            <div>
              <Reveal><SecNum n="04" label="Pricing questions" /></Reveal>
              <Reveal delay={60}>
                <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                  Before you ask —<br />
                  <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>we answered.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {FAQS.map((f) => (
                  <details key={f.q} className="cx-faq">
                    <summary>{f.q}<span className="plus">+</span></summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 05 · FINAL CTA (indigo) ────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="05" label="Still deciding?" dark /></Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <Reveal delay={60}>
                <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                  Not sure which<br />
                  <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>plan is right?</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="cx-lead cx-lead-light" style={{ maxWidth: 520 }}>
                  Get a free audit. We'll recommend the exact system your business needs.
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <a href={waLink('Hi! I want to discuss pricing and get a free audit.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
                  Get free audit →
                </a>
                <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .75 })}>100% FREE · NO OBLIGATION</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
