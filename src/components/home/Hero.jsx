import React from 'react';
import { Link } from 'react-router-dom';
import { Marquee, SpinBadge, WA_INDIA } from '../ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const Hero = () => {
  return (
    <section id="top" style={{ background: '#4F46E5', color: '#F4F2EC', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 72px)' }}>
      <div className="cx-wrap" style={{ width: '100%', boxSizing: 'border-box', position: 'relative', paddingTop: 30, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, opacity: .95, animation: 'cxRise .7s both' })}>
          <span className="cx-dot" />
          Trusted by 160+ growing brands across 7 countries
        </div>

        <div className="cx-hide-md" style={{ position: 'absolute', top: 44, right: 70, zIndex: 3 }}>
          <SpinBadge text="FREE AUDIT · 3 SLOTS LEFT ·" size={116} />
        </div>

        <h1 className="cx-display cx-h1" style={{ margin: '16px 0 0' }}>
          <span style={{ display: 'block', animation: 'cxRise .7s .1s both' }}>More</span>
          <span style={{ display: 'block', color: '#FFD84D', fontStyle: 'italic', animation: 'cxRise .7s .25s both' }}>customers.</span>
          <span style={{ display: 'block', animation: 'cxRise .7s .4s both' }}>
            Less{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              guessing.
              <svg viewBox="0 0 300 22" style={{ position: 'absolute', left: 0, bottom: -12, width: '100%' }} preserveAspectRatio="none" aria-hidden="true">
                <path d="M4,14 C 70,4 220,20 296,8" fill="none" stroke="#FFD84D" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </span>
          </span>
        </h1>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 32, paddingBottom: 40, animation: 'cxRise .7s .55s both', flexWrap: 'wrap', gap: 24 }}>
          <p style={{ margin: 0, maxWidth: 460, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,242,236,.92)', textWrap: 'pretty' }}>
            We don't run ads. We build growth systems — ads, pages, CRM, and 24/7 WhatsApp follow-up — that turn
            strangers into revenue. <strong>Guaranteed, or your money back.</strong>
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-ink">Get Free Audit →</a>
            <Link to="/results" className="cx-btn cx-btn-lg cx-btn-outline-cream">See our work</Link>
          </div>
        </div>
      </div>

      {/* stats marquee */}
      <div style={{ background: '#17151A', color: '#F4F2EC' }}>
        <Marquee speed={22} segStyle={{ fontWeight: 900, fontStretch: '120%', textTransform: 'uppercase', fontSize: 24, letterSpacing: '-0.01em', padding: '18px 34px 18px 0' }}>
          <span>500+ leads/month</span><span style={{ color: '#FFD84D' }}>✺</span>
          <span>3.5x avg ROAS</span><span style={{ color: '#FFD84D' }}>✺</span>
          <span>160+ brands grown</span><span style={{ color: '#FFD84D' }}>✺</span>
          <span>500M+ views created</span><span style={{ color: '#FFD84D' }}>✺</span>
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
