import React from 'react';
import { Link } from 'react-router-dom';
import { Marquee, WA_INDIA, WA_USA } from './ui/primitives';
import { ORG, FULL_ADDRESS, MAPS_DIRECTIONS_URL } from '../config/organization';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const WORDMARK_ROT = [-6, 5, -4, 6, -5, 4, -6, 5, -4, 6];

const Footer = () => {
  return (
    <footer style={{ background: '#17151A', color: '#F4F2EC', position: 'relative', overflow: 'hidden' }}>
      {/* reverse marquee band */}
      <div style={{ background: '#FFD84D', color: '#17151A', borderBottom: '4px solid #17151A' }}>
        <Marquee speed={20} reverse segStyle={{ gap: 30, paddingRight: 30, fontWeight: 900, fontStretch: '122%', textTransform: 'uppercase', fontSize: 19, padding: '14px 30px 14px 0' }}>
          <span>Stop scrolling. Start scaling.</span><span>→</span>
          <span>Your competitors already called us.</span><span>→</span>
          <span>Okay, not all of them. Yet.</span><span>→</span>
        </Marquee>
      </div>

      <div className="cx-wrap" style={{ paddingTop: 74 }}>
        {/* top row: statement + offices */}
        <div className="cx-foot-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 50, paddingBottom: 56, flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 460px', minWidth: 0 }}>
            <div style={{ fontWeight: 900, fontStretch: '122%', textTransform: 'uppercase', fontSize: 'clamp(30px,3.4vw,44px)', lineHeight: .95, letterSpacing: '-0.02em', marginBottom: 18, maxWidth: 780 }}>
              Let's make your<br />competitors <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>nervous.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-btn cx-btn-yellow" style={{ padding: '16px 26px', fontSize: 13 }}>WhatsApp us →</a>
              <span style={mono({ fontSize: 11.5, letterSpacing: '.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8, opacity: .7 })}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#3DDC84', animation: 'cxBlink 1.3s infinite' }} />
                Systems online · leads flowing
              </span>
            </div>
          </div>
          <div className="cx-foot-offices" style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end', flex: 'none' }}>
            <div style={mono({ fontSize: 10.5, letterSpacing: '.16em', textTransform: 'uppercase', opacity: .5 })}>6 offices, always awake</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['IN', 'US', 'CA', 'AE', 'MY', 'AU'].map((cc) => (
                <span key={cc} className="cx-office-pill" style={mono({ fontSize: 11, fontWeight: 600, border: '1px solid rgba(244,242,236,.3)', borderRadius: 999, padding: '6px 12px' })}>{cc}</span>
              ))}
            </div>
            <div style={mono({ fontSize: 10.5, letterSpacing: '.1em', opacity: .4 })}>HYD · FLORIDA · VANCOUVER · DUBAI · KL · SYDNEY</div>
          </div>
        </div>

        {/* link columns */}
        <div
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px 56px',
            paddingBottom: 56, paddingTop: 52,
            borderTop: '1px solid rgba(244,242,236,.15)', borderBottom: '1px solid rgba(244,242,236,.15)',
          }}
        >
          <div>
            <div style={mono({ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', opacity: .5, marginBottom: 20 })}>The honest pitch</div>
            <p style={{ margin: '0 0 22px', fontSize: 15, lineHeight: 1.6, color: 'rgba(244,242,236,.65)', maxWidth: 300 }}>
              We build systems that scale businesses — not just run ads. Strategy, tech, and creative, unified.
              Yes, we built this website too. <span style={{ color: '#FFD84D' }}>Notice how you're still reading?</span>
            </p>
            <div style={mono({ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: '#FFD84D' })}>160+ clients · 6 countries</div>
          </div>
          <div>
            <div style={mono({ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', opacity: .5, marginBottom: 20 })}>Services</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
              <Link to="/services/paid-social-ads" className="cx-flink">Paid Social Ads</Link>
              <Link to="/services/google-ads-ppc" className="cx-flink">Google Ads &amp; PPC</Link>
              <Link to="/services/custom-websites" className="cx-flink">Custom Websites</Link>
              <Link to="/services/brand-identity" className="cx-flink">Brand Identity</Link>
              <Link to="/services/ai-chatbots" className="cx-flink">AI Chatbots</Link>
              <Link to="/services" className="cx-flink" style={{ color: '#FFD84D' }}>All 30 services →</Link>
            </div>
          </div>
          <div>
            <div style={mono({ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', opacity: .5, marginBottom: 20 })}>Company</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
              <Link to="/about-us" className="cx-flink">About Us</Link>
              <Link to="/case-studies" className="cx-flink">Case Studies</Link>
              <Link to="/industries" className="cx-flink">Industries</Link>
              <Link to="/pricing" className="cx-flink">Pricing</Link>
              <Link to="/join-us" className="cx-flink">Careers</Link>
            </div>
          </div>
          <div>
            <div style={mono({ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', opacity: .5, marginBottom: 20 })}>Get in touch</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 15 }}>
              <div>
                <div style={mono({ fontSize: 11, opacity: .5, marginBottom: 4 })}>WHATSAPP INDIA</div>
                <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-flink" style={{ fontWeight: 700 }}>+91 799 700 1700</a>
              </div>
              <div>
                <div style={mono({ fontSize: 11, opacity: .5, marginBottom: 4 })}>WHATSAPP USA</div>
                <a href={WA_USA} target="_blank" rel="noreferrer" className="cx-flink" style={{ fontWeight: 700 }}>+1 628 628 4743</a>
              </div>
              <div>
                <div style={mono({ fontSize: 11, opacity: .5, marginBottom: 4 })}>EMAIL</div>
                <a href="mailto:hello@creativals.com" className="cx-flink" style={{ fontWeight: 700 }}>hello@creativals.com</a>
              </div>
              <div>
                <div style={mono({ fontSize: 11, opacity: .5, marginBottom: 4 })}>HQ — HYDERABAD</div>
                {/* Visible NAP (audit item 8) — address text comes from the central
                    org config only, never inline. */}
                <address style={{ fontStyle: 'normal', fontSize: 13.5, lineHeight: 1.55, color: 'rgba(244,242,236,.65)', maxWidth: 280 }}>
                  {ORG.name}, {FULL_ADDRESS}
                </address>
                <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer" className="cx-flink" style={mono({ fontSize: 11, letterSpacing: '.08em', color: '#FFD84D' })}>
                  GET DIRECTIONS →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* giant playable wordmark */}
        <div className="cx-wordmark" aria-hidden="true">
          {'CREATIVALS'.split('').map((ch, i) => (
            <span key={i} style={{ '--r': `${WORDMARK_ROT[i]}deg` }}>{ch}</span>
          ))}
          <span style={{ color: '#FFD84D', '--r': '0deg' }}>.</span>
        </div>
        <div style={mono({ textAlign: 'center', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .4, paddingBottom: 28 })}>
          ← Pet the letters. They like it.
        </div>

        {/* bottom bar */}
        <div className="cx-foot-bottom" style={mono({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(244,242,236,.15)', fontSize: 12, letterSpacing: '.08em', color: 'rgba(244,242,236,.5)', flexWrap: 'wrap', gap: 12 })}>
          <span>© 2026 CREATIVALS — MADE WITH ☕ AND A MONEY-BACK GUARANTEE</span>
          <div style={{ display: 'flex', gap: 26 }}>
            <Link to="/contact" className="cx-flink" style={{ color: 'rgba(244,242,236,.5)' }}>SUPPORT</Link>
            <a href="#top" className="cx-flink" style={{ color: 'rgba(244,242,236,.5)' }} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>BACK TO TOP ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
