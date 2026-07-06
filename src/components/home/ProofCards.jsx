import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal, SecNum } from '../ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const CASES = [
  {
    theme: 'indigo',
    meta: ['Hospitality · India', '12 months'],
    front: { big: '₹50 Cr', plus: true, label: 'Revenue generated', name: 'Glampinn Valley', body: 'From a scenic resort with zero digital presence to a ₹50 Crore empire in one year. 30M+ views. 30K followers. End-to-end ecosystem.', pills: ['30M+ VIEWS', '30K FOLLOWERS'] },
    back: { big: '₹0', label: 'Online bookings, before', name: 'Completely invisible', body: 'A scenic resort with zero digital presence, no social strategy, and zero online bookings. Beautiful place — nobody knew it existed.', pills: ['NO WEBSITE', 'NO STRATEGY'] },
  },
  {
    theme: 'ink',
    meta: ['Furniture · India', '12 months'],
    front: { big: '₹30 Cr', plus: true, label: 'Revenue in 12 months', name: 'Teak Studio', body: 'Beautiful products, zero digital reach, everything riding on walk-ins. We built the funnel — qualified leads now convert to high-ticket sales.', pills: ['10X LEADS', '100% DIGITAL'] },
    back: { big: '0', label: 'Digital leads, before', name: 'Walk-ins only', body: 'A premium furniture studio with beautiful products but no digital reach — relying entirely on walk-ins and word-of-mouth to survive.', pills: ['NO REACH', 'WORD OF MOUTH'] },
  },
  {
    theme: 'white',
    meta: ['Hotels · Hyderabad', '6 months'],
    front: { big: '2x', label: 'Monthly revenue', name: 'Hotel Sky International', body: 'Stuck at ₹13L/month, hostage to OTA commissions. Direct booking campaigns + WhatsApp automation took it to ₹25L — without raising ad spend.', pills: ['₹13L → ₹25L', '+0% AD SPEND'] },
    back: { big: '₹13L', label: 'Stuck monthly revenue, before', name: 'OTA-hostage', body: 'A mid-range hotel flatlined at ₹13L/month. High OTA dependency, no direct booking system, zero brand identity online.', pills: ['OTA FEES', 'NO DIRECT'] },
  },
];

const THEMES = {
  indigo: { bg: '#4F46E5', fg: '#F4F2EC', big: '#FFD84D', bigDim: 'rgba(244,242,236,.45)', body: 'rgba(244,242,236,.8)', pill: 'rgba(244,242,236,.4)', border: 'none', btnFg: '#F4F2EC', btnBorder: 'rgba(244,242,236,.45)', hoverShadow: '0 22px 44px rgba(79,70,229,.4)' },
  ink: { bg: '#17151A', fg: '#F4F2EC', big: '#FFD84D', bigDim: 'rgba(244,242,236,.45)', body: 'rgba(244,242,236,.8)', pill: 'rgba(244,242,236,.4)', border: 'none', btnFg: '#F4F2EC', btnBorder: 'rgba(244,242,236,.45)', hoverShadow: '0 22px 44px rgba(23,21,26,.4)' },
  white: { bg: '#FFFFFF', fg: '#17151A', big: '#4F46E5', bigDim: 'rgba(23,21,26,.35)', body: 'rgba(23,21,26,.7)', pill: 'rgba(23,21,26,.4)', border: '2px solid #17151A', btnFg: '#17151A', btnBorder: 'rgba(23,21,26,.45)', hoverShadow: '8px 8px 0 #FFD84D' },
};

function CaseCard({ data, delay }) {
  const [flipped, setFlipped] = useState(false);
  const t = THEMES[data.theme];
  const face = flipped ? data.back : data.front;

  return (
    <Reveal delay={delay}>
      <div
        style={{
          background: t.bg, color: t.fg, border: t.border, borderRadius: 18, padding: '34px 30px',
          display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box',
          transition: 'transform .2s, box-shadow .2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = t.hoverShadow; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        <div style={mono({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', opacity: .85, marginBottom: 30 })}>
          <span>{data.meta[0]}</span><span>{data.meta[1]}</span>
        </div>
        <div style={{ flex: 1, minHeight: 290, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontWeight: 900, fontSize: 58, fontStretch: '120%', lineHeight: 1, color: flipped ? t.bigDim : t.big }}>
            {face.big}{face.plus && <span style={{ fontSize: 32 }}>+</span>}
          </div>
          <div style={mono({ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', opacity: .7, margin: '8px 0 22px' })}>{face.label}</div>
          <div style={{ fontWeight: 800, fontSize: 23, letterSpacing: '-0.01em', marginBottom: 12 }}>{face.name}</div>
          <p style={{ margin: '0 0 22px', fontSize: 14.5, lineHeight: 1.6, color: t.body, flex: 1 }}>{face.body}</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {face.pills.map((p) => (
              <span key={p} style={mono({ fontSize: 11, letterSpacing: '.06em', border: `1px solid ${t.pill}`, borderRadius: 999, padding: '6px 12px', opacity: flipped ? .7 : 1 })}>{p}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setFlipped(!flipped)}
          className="cx-flipbtn"
          style={mono({
            marginTop: 18, fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase',
            background: 'transparent', color: t.btnFg, border: `1px solid ${t.btnBorder}`, borderRadius: 999,
            padding: '11px 18px', cursor: 'pointer', transition: 'background .15s,color .15s',
          })}
        >
          {flipped ? 'See the after →' : '⟲ See their before'}
        </button>
      </div>
    </Reveal>
  );
}

const ProofCards = () => (
  <section id="proof" style={{ background: '#F4F2EC', color: '#17151A' }}>
    <div className="cx-wrap cx-section">
      <Reveal><SecNum n="04" label="The proof" /></Reveal>
      <div style={{ marginBottom: 60 }}>
        <Reveal delay={60}>
          <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
            They were stuck.<br />
            <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>We fixed that.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="cx-lead" style={{ maxWidth: 620 }}>
            Not hypotheticals. Real numbers from real businesses across India and 7 countries that trusted the system.
          </p>
        </Reveal>
      </div>
      <div className="cx-grid3">
        {CASES.map((c, i) => <CaseCard key={c.meta[0]} data={c} delay={i * 120} />)}
      </div>
      <Reveal>
        <div style={{ marginTop: 44, display: 'flex', justifyContent: 'center' }}>
          <Link to="/results" className="cx-btn cx-btn-outline-ink" style={{ padding: '17px 28px' }}>See all 160+ client results →</Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ProofCards;
