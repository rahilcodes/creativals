import React, { useState } from 'react';
import { Reveal, SecNum } from '../ui/primitives';

const INDS = [
  { key: 'hotels', label: 'Hotels & Resorts', waste: 0.42 },
  { key: 'realestate', label: 'Real Estate', waste: 0.5 },
  { key: 'education', label: 'Education', waste: 0.38 },
  { key: 'healthcare', label: 'Healthcare', waste: 0.35 },
  { key: 'ecom', label: 'E-commerce', waste: 0.45 },
  { key: 'b2b', label: 'B2B Services', waste: 0.4 },
];

const fmt = (n) => (n >= 100000 ? '₹' + (n / 100000).toFixed(1).replace(/\.0$/, '') + 'L' : '₹' + Math.round(n / 1000) + 'K');
const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const LeakCalculator = () => {
  const [ind, setInd] = useState('hotels');
  const [spend, setSpend] = useState(80000);

  const cur = INDS.find((i) => i.key === ind) || INDS[0];
  const waste = Math.round(spend * cur.waste);
  const lostRev = Math.round(waste * 3.5);
  const lostLeads = Math.max(4, Math.round(waste / 450));

  const waMsg = encodeURIComponent(
    `Hi Creativals! I'm in ${cur.label} spending about ₹${spend.toLocaleString('en-IN')}/month on marketing. Your calculator says I could be leaking ${fmt(waste)}/month. I want my free audit.`
  );

  return (
    <section style={{ background: '#FFD84D', color: '#17151A', borderTop: '4px solid #17151A', borderBottom: '4px solid #17151A' }}>
      <div className="cx-wrap" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <Reveal><SecNum n="02" label="The damage" yellow /></Reveal>
        <Reveal delay={60}>
          <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
            What is "doing nothing"<br />
            <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>costing you every month?</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="cx-lead" style={{ margin: '0 0 54px', maxWidth: 620, color: 'rgba(23,21,26,.75)' }}>
            Pick your industry, set your monthly marketing spend — and watch the leak, live. Numbers based on
            averages across 160+ client audits.
          </p>
        </Reveal>

        <div className="cx-grid-calc" style={{ alignItems: 'start' }}>
          <Reveal>
            <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 16 })}>Your industry</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 44 }}>
              {INDS.map((i) => (
                <button
                  key={i.key}
                  onClick={() => setInd(i.key)}
                  style={mono({
                    fontSize: 12, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase',
                    padding: '11px 18px', borderRadius: 999, border: '2px solid #17151A',
                    background: i.key === ind ? '#17151A' : 'transparent',
                    color: i.key === ind ? '#FFD84D' : '#17151A',
                    cursor: 'pointer', transition: 'background .15s,color .15s',
                  })}
                >
                  {i.label}
                </button>
              ))}
            </div>
            <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 12 })}>Your monthly marketing spend</div>
            <div style={{ fontWeight: 900, fontStretch: '120%', fontSize: 'clamp(38px,4vw,56px)', lineHeight: 1, marginBottom: 18 }}>
              ₹{spend.toLocaleString('en-IN')}<span style={{ fontSize: 22, opacity: .5 }}> /mo</span>
            </div>
            <input
              type="range" min="10000" max="500000" step="5000" value={spend}
              onChange={(e) => setSpend(parseInt(e.target.value, 10) || 10000)}
              aria-label="Monthly marketing spend"
              style={{ width: '100%', accentColor: '#17151A', height: 6, cursor: 'pointer' }}
            />
            <div style={mono({ display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '.08em', opacity: .55, marginTop: 8 })}>
              <span>₹10K</span><span>₹5L</span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div style={{ background: '#17151A', color: '#F4F2EC', borderRadius: 18, padding: '34px 32px' }}>
              <div style={mono({ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FFD84D', marginBottom: 26 })}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF5F57', animation: 'cxBlink 1.1s infinite' }} />
                Your estimated monthly leak
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '14px 0', borderBottom: '1px solid rgba(244,242,236,.15)' }}>
                <span style={{ fontSize: 15, color: 'rgba(244,242,236,.75)' }}>Wasted ad spend</span>
                <span style={{ fontWeight: 900, fontSize: 34, fontStretch: '118%', color: '#FF5F57' }}>{fmt(waste)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '14px 0', borderBottom: '1px solid rgba(244,242,236,.15)' }}>
                <span style={{ fontSize: 15, color: 'rgba(244,242,236,.75)' }}>Unrealised revenue</span>
                <span style={{ fontWeight: 900, fontSize: 34, fontStretch: '118%', color: '#FFD84D' }}>{fmt(lostRev)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '14px 0 22px' }}>
                <span style={{ fontSize: 15, color: 'rgba(244,242,236,.75)' }}>Leads lost to no follow-up</span>
                <span style={{ fontWeight: 900, fontSize: 34, fontStretch: '118%' }}>{lostLeads} leads</span>
              </div>
              <a href={`https://wa.me/917997001700?text=${waMsg}`} target="_blank" rel="noreferrer" className="cx-btn cx-btn-yellow" style={{ display: 'block', padding: '18px 22px' }}>
                Plug the leak — Free audit →
              </a>
              <div style={mono({ textAlign: 'center', fontSize: 10.5, letterSpacing: '.08em', opacity: .5, marginTop: 14 })}>
                OPENS WHATSAPP WITH YOUR NUMBERS PRE-FILLED
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default LeakCalculator;
