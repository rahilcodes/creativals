import React from 'react';
import { Reveal, SecNum, WA_INDIA } from '../ui/primitives';

const FAQS = [
  { q: 'When will I actually start seeing leads?', a: 'Our systems are built for speed. Once your campaign launches, most clients see qualified enquiries within 7–14 days. A complete growth system takes about 30 days to fully optimise and scale.' },
  { q: 'How much ad budget do I need to start?', a: "There's no fixed minimum — we design the system around your budget and scale spend only when the numbers prove it. Most clients start small and grow spend as returns come in." },
  { q: 'Do I need an existing website?', a: "No. We build the high-converting landing page as part of the system. If you have a website, we'll audit it; if not, we'll build what's needed to close." },
  { q: 'Am I locked into a long contract?', a: 'Never. Everything is month-to-month. You stay because the system works — not because a contract forces you to.' },
  { q: "What if the campaign doesn't generate results?", a: "We back every engagement with a performance guarantee: if the system doesn't deliver the agreed lead flow, we work for free until it does — or refund our fee." },
  { q: 'Who will actually run my campaigns?', a: 'A dedicated senior team — strategist, media buyer, and designer — with a direct WhatsApp group to you. No account-manager relay, no juniors learning on your budget.' },
];

const FAQ = () => (
  <section id="faq" style={{ background: '#F4F2EC', color: '#17151A' }}>
    <div className="cx-wrap cx-section cx-grid-faq">
      <div>
        <Reveal><SecNum n="08" label="Clear answers" /></Reveal>
        <Reveal delay={60}>
          <h2 className="cx-display cx-h2" style={{ marginBottom: 22, lineHeight: .92 }}>
            No agency<br />
            <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>fluff.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="cx-lead" style={{ margin: '0 0 36px', maxWidth: 380 }}>
            Everything you need to know before we start working together. Straight answers only.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-btn cx-btn-ink" style={{ padding: '18px 30px' }}>Ask us on WhatsApp →</a>
        </Reveal>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <details className="cx-faq" open={i === 0}>
              <summary>
                {f.q}
                <span className="plus">+</span>
              </summary>
              <p>{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
