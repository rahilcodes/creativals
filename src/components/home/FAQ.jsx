import React from 'react';
import { Reveal, SecNum, WA_INDIA } from '../ui/primitives';

// Exported for the homepage FAQPage JSON-LD — schema must mirror the rendered block.
// eslint-disable-next-line react-refresh/only-export-components
export const HOME_FAQS = [
  {
    q: 'When will I actually start seeing leads?',
    a: "Speed depends on where you're starting from, but the sequence is always the same. Week one is setup: tracking, landing page, offer, and campaign build. Once your campaign launches, most clients see their first qualified enquiries within 7–14 days. From there the data compounds — we cut what doesn't convert, scale what does, and tighten the follow-up so enquiries turn into real conversations. A complete growth system takes about 30 days to fully optimise and scale. And you'll never wonder what's happening: you get reporting in plain language and a direct WhatsApp line to the team from day one.",
  },
  {
    q: 'How much ad budget do I need to start?',
    a: "There's no fixed minimum. We design the system around the budget you're comfortable with, then let performance decide when to scale. In practice, that means starting with enough spend for the platforms to gather real data, reading the numbers every week, and only increasing budget once cost-per-lead and lead quality prove out. What we don't do: burn your money 'testing creative' for months, or demand a big commitment before showing results. Most clients start small and grow spend as returns come in. Tell us your range on WhatsApp and we'll tell you honestly what it can and can't achieve.",
  },
  {
    q: 'Do I need an existing website?',
    a: "No. A high-converting landing page is part of the system we build — copy, design, tracking, and WhatsApp integration included. If you already have a website, we audit it first: sometimes it only needs conversion fixes, sometimes it's smarter to run campaigns to a dedicated landing page while your main site stays as-is. The audit tells you which route makes sense before you spend anything on ads. Either way, you're never blocked waiting on a web project before marketing can start, and everything we build for you remains yours.",
  },
  {
    q: 'Am I locked into a long contract?',
    a: "Never. Every engagement is month-to-month — you can stop at the end of any month, with no exit fees and no awkward clauses buried in page nine. We structure it this way on purpose: retention should be earned by results, not enforced by paperwork. It also keeps us sharp — every single month, the system has to justify itself with leads, bookings, or sales you can actually see. You stay because it works. That pressure is the point.",
  },
  {
    q: "What if the campaign doesn't generate results?",
    a: "We back every engagement with a performance guarantee: if the system doesn't deliver the agreed lead flow, we keep working for free until it does — or refund our fee. Before launch, we agree together on what success looks like, so there's no moving of goalposts later. And because performance is watched weekly, problems get caught and fixed early instead of discovered at the end of the month. The guarantee exists because the system is built on things we control — targeting, creative, landing page, and follow-up — and we'd rather carry that risk than ask you to.",
  },
  {
    q: 'Who will actually run my campaigns?',
    a: "A dedicated senior team: a strategist who owns the plan, a media buyer who manages spend daily, and a designer who produces the creative — with a direct WhatsApp group connecting you to all of them. There's no account-manager relay where questions take three days to bounce through, and no juniors learning on your budget. The people in the room when your campaign is planned are the same people you talk to. Fewer handoffs means faster changes, clearer accountability, and answers straight from the person doing the work.",
  },
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
        {HOME_FAQS.map((f, i) => (
          <Reveal key={f.q} delay={i * 60}>
            <details className="cx-faq" open={i === 0}>
              <summary>
                <h3>{f.q}</h3>
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
