import React from 'react';
import { Reveal, SecNum, WA_INDIA } from '../ui/primitives';

const ROWS = [
  ['What they focus on', 'Traffic & clicks', 'Leads & revenue'],
  ['How you feel after paying', 'Anxious. Checking the bank daily.', 'Calm. Leads arriving predictably.'],
  ['Communication', 'Monthly PDF. Then silence.', 'WhatsApp group. Immediate replies.'],
  ["When results don't come", 'They blame the algorithm.', 'Money-back guarantee. No excuses.'],
  ['What they actually build', 'Ads copied from competitors.', 'Ads + page + CRM + follow-up. A system.'],
  ['Contract terms', 'Locked in 6–12 months.', 'Month-to-month. Leave anytime.'],
];

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const Difference = () => (
  <section id="difference" style={{ background: '#4F46E5', color: '#F4F2EC' }}>
    <div className="cx-wrap cx-section">
      <Reveal><SecNum n="05" label="The difference" dark /></Reveal>
      <Reveal delay={60}>
        <h2 className="cx-display cx-h2" style={{ marginBottom: 60, lineHeight: .92, maxWidth: 980 }}>
          Most agencies take your money.<br />
          <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>We take responsibility.</span>
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <div style={{ borderRadius: 18, overflow: 'hidden', border: '2px solid #17151A' }}>
          <div className="cx-cmp-row cx-cmp-head" style={mono({ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', background: '#17151A', color: '#F4F2EC', borderTop: 'none' })}>
            <div style={{ padding: '18px 26px', opacity: .6 }}>The difference</div>
            <div style={{ padding: '18px 26px', opacity: .6 }}>Typical agency</div>
            <div style={{ padding: '18px 26px', background: '#FFD84D', color: '#17151A', fontWeight: 600 }}>Creativals system</div>
          </div>
          {ROWS.map(([label, them, us]) => (
            <div key={label} className="cx-cmp-row">
              <div className="cx-cmp-t" style={{ fontWeight: 800 }}>{label}</div>
              <div className="cx-cmp-c" data-col="Typical agency" style={{ color: 'rgba(23,21,26,.55)' }}>{them}</div>
              <div className="cx-cmp-c" data-col="Creativals system" style={{ fontWeight: 600, background: '#FFF8E0' }}>{us}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div style={{ marginTop: 30, background: '#FFD84D', color: '#17151A', border: '2px solid #17151A', borderRadius: 18, padding: '36px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, position: 'relative', overflow: 'hidden', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ fontWeight: 900, fontStretch: '120%', textTransform: 'uppercase', fontSize: 30, letterSpacing: '-0.01em', marginBottom: 8 }}>
              Results — or your money back.
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, maxWidth: 700, color: 'rgba(23,21,26,.8)' }}>
              If the system we build doesn't generate the agreed lead flow, we work for free until it does — or refund
              our fee. No jargon. No algorithm excuses. Simple.
            </p>
          </div>
          <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-btn cx-btn-ink" style={{ whiteSpace: 'nowrap', color: '#FFD84D' }}>Claim free audit →</a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Difference;
