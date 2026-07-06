import React from 'react';
import { Reveal, SecNum } from '../ui/primitives';

const CARDS = [
  {
    tag: 'Symptom A', big: '₹0', title: 'Spent on ads. Zero leads.', tilt: 'tilt-l',
    body: "You ran ads. Got clicks. Zero enquiries. The moment the budget stopped, so did everything else. That wasn't marketing — that was burning cash.",
  },
  {
    tag: 'Symptom B', big: 'PDF', title: 'Reports, not results.', tilt: 'tilt-r',
    body: 'Your agency sends weekly decks full of graphs — and no actual leads, bookings, or revenue to show for the fees you keep paying.',
  },
  {
    tag: 'Symptom C', big: '70%', title: 'Leads ghost you on WhatsApp.', tilt: 'tilt-l',
    body: 'Someone enquired. You replied in minutes. They vanished. No follow-up system exists to bring them back — so they buy elsewhere.',
  },
];

const Problem = () => (
  <section style={{ background: '#F4F2EC', color: '#17151A' }}>
    <div className="cx-wrap cx-section">
      <Reveal><SecNum n="01" label="The diagnosis" /></Reveal>
      <div style={{ marginBottom: 60 }}>
        <Reveal delay={60}>
          <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
            Your ads aren't the problem.<br />
            <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>The system around them is.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="cx-lead" style={{ maxWidth: 620 }}>
            Traffic without a system is just an expensive audience. If any of these three sound familiar, you're
            bleeding revenue while competitors scale.
          </p>
        </Reveal>
      </div>
      <div className="cx-grid3">
        {CARDS.map((c, i) => (
          <Reveal key={c.tag} delay={i * 120}>
            <div className={`cx-card ${c.tilt}`} style={{ height: '100%', boxSizing: 'border-box' }}>
              <div className="cx-badge" style={{ fontSize: 11, padding: '6px 12px', marginBottom: 24 }}>{c.tag}</div>
              <div style={{ fontWeight: 900, fontSize: 64, fontStretch: '120%', lineHeight: 1, color: '#4F46E5' }}>{c.big}</div>
              <div style={{ fontWeight: 800, fontSize: 22, margin: '16px 0 12px', letterSpacing: '-0.01em' }}>{c.title}</div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(23,21,26,.68)' }}>{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
