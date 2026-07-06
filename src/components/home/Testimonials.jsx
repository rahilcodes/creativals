import React from 'react';
import { Reveal, SecNum } from '../ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const REVIEWS = [
  {
    stat: '10x enquiries in 3 weeks', initials: 'RK', name: 'Ramesh Kumar', role: 'Principal · Sunrise Academy',
    quote: '"In 21 days, we went from 12 enquiries a month to over 140. Before Creativals, I was seriously considering cutting staff. Now we have a waitlist. This system is not a joke."',
  },
  {
    stat: 'Bookings tripled. No OTAs.', initials: 'PS', name: 'Priya Sharma', role: 'Owner · The Palm Resort Goa',
    quote: '"We stopped paying Swiggy/MakeMyTrip. We stopped relying on walk-ins. The WhatsApp bot alone saves my team 3 hours every single day. I only wish I had found them sooner."',
  },
  {
    stat: '112 leads from ₹4,000', initials: 'AM', name: 'Arjun Mehra', role: 'Founder · StyleCraft Mumbai',
    quote: '"I was skeptical. Everyone promises leads, nobody delivers. But ₹4,000 in, I had 112 paying customer enquiries. I\'ve not looked back. These guys genuinely know what they are doing."',
  },
];

const Testimonials = () => (
  <section style={{ background: '#17151A', color: '#F4F2EC' }}>
    <div className="cx-wrap cx-section">
      <Reveal><SecNum n="07" label="Word of mouth" dark /></Reveal>
      <Reveal delay={60}>
        <h2 className="cx-display cx-h2" style={{ marginBottom: 60, lineHeight: .92 }}>
          Don't take our word for it.<br />
          <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>Take theirs.</span>
        </h2>
      </Reveal>
      <div className="cx-grid3">
        {REVIEWS.map((r, i) => (
          <Reveal key={r.initials} delay={i * 120}>
            <div className="cx-review-card" style={{ background: 'rgba(244,242,236,.05)', border: '1px solid rgba(244,242,236,.2)', borderRadius: 18, padding: '34px 30px', display: 'flex', flexDirection: 'column', gap: 22, height: '100%', boxSizing: 'border-box', transition: 'transform .2s, border-color .2s' }}>
              <div style={mono({ display: 'inline-flex', alignSelf: 'flex-start', fontSize: 11, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', background: '#FFD84D', color: '#17151A', borderRadius: 999, padding: '6px 13px' })}>
                {r.stat}
              </div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, fontWeight: 500, flex: 1 }}>{r.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, borderTop: '1px solid rgba(244,242,236,.15)', paddingTop: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14, flex: 'none' }}>
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
);

export default Testimonials;
