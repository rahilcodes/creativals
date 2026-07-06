import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const WA_MSG = 'Hi! I want to run a conversion experiment on my landing pages.';

const ExperimentsPage = () => {
  useSEO({
    title: 'Growth Experiments | Internal Testing | Creativals',
    description: 'We don\'t guess. We test. Read about our active marketing experiments, A/B testing methodologies, and conversion insights.',
  });

  return (
    <>
      {/* 1. HERO — indigo */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 })}>
              <span className="cx-dot" />
              Live · The Innovation Hub
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 30 }}>
              We don't guess.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>We experiment.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 0 38px', maxWidth: 560, fontSize: 18, lineHeight: 1.6, color: 'rgba(244,242,236,.85)' }}>
              Marketing without mathematical testing is just gambling. Explore the live experiments our growth
              engineers are running across thousands of dollars of daily ad spend.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
              Request an Audit →
            </a>
          </Reveal>
        </div>
      </section>

      {/* 2. EXPERIMENT LOG — cream */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The experiment log" /></Reveal>
          <div style={{ marginBottom: 60 }}>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                Hypothesis. Test.<br />
                <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Verdict.</span>
              </h2>
            </Reveal>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 26, maxWidth: 900 }}>
            {/* Experiment 01 — completed */}
            <Reveal>
              <div className="cx-card tilt-l" style={{ boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 22 }}>
                  <span style={{ fontWeight: 900, fontSize: 44, fontStretch: '120%', lineHeight: 1, color: '#4F46E5' }}>01</span>
                  <span className="cx-tag cx-tag-ink">Completed</span>
                  <span style={mono({ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(23,21,26,.55)' })}>March 2026</span>
                </div>
                <div style={{ fontWeight: 800, fontSize: 26, marginBottom: 14, letterSpacing: '-0.01em' }}>Video Length vs Booked Meetings</div>
                <p style={{ margin: '0 0 24px', fontSize: 15.5, lineHeight: 1.65, color: 'rgba(23,21,26,.7)', maxWidth: 680 }}>
                  <strong>Hypothesis:</strong> Shorter TikTok-style VSLs (Video Sales Letters) will outperform deep
                  10-minute long-form VSLs for high-ticket B2B Enterprise offers.
                </p>
                <div style={{ background: '#FFF8E0', border: '2px solid #17151A', borderRadius: 14, padding: '22px 26px', maxWidth: 680 }}>
                  <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 10 })}>The Result</div>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
                    Hypothesis Invalidated. The 10-minute deep-dive VSL booked 3x more meetings than the 60-second
                    "punchy" version because high-ticket buyers required intense logical justification before talking to sales.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Experiment 02 — ongoing */}
            <Reveal delay={120}>
              <div className="cx-card tilt-r" style={{ boxSizing: 'border-box' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 22 }}>
                  <span style={{ fontWeight: 900, fontSize: 44, fontStretch: '120%', lineHeight: 1, color: '#4F46E5' }}>02</span>
                  <span style={mono({ fontSize: 10, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: 7 })}>
                    <span className="cx-dot" style={{ background: '#3DDC84' }} />
                    Ongoing
                  </span>
                  <span style={mono({ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(23,21,26,.55)' })}>April 2026</span>
                </div>
                <div style={{ fontWeight: 800, fontSize: 26, marginBottom: 14, letterSpacing: '-0.01em' }}>WhatsApp API vs Email Nurture</div>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: 'rgba(23,21,26,.7)', maxWidth: 680 }}>
                  <strong>Hypothesis:</strong> Shifting the primary lead nurture sequence from an ActiveCampaign Email
                  Flow to an automated n8n WhatsApp Flow will increase demo show-up rates by 40%. Data is currently
                  collecting across 1,200 leads.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. LIVE COUNT — ink */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="Currently in the lab" dark /></Reveal>
          <div className="cx-grid2" style={{ alignItems: 'end' }}>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 0 }}>
                1,200 leads<br />
                <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>under test.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="cx-lead cx-lead-light" style={{ maxWidth: 480, color: 'rgba(244,242,236,.75)' }}>
                Every insight above was bought with real ad spend — then rolled straight into client accounts.
                Your campaigns inherit the winners, not the guesses.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA — indigo */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section" style={{ textAlign: 'center' }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 26 })}>
              <span className="cx-dot" />
              Your hypothesis next
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 36 }}>
              Let's test an angle<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>for you.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
              Request an Audit →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default ExperimentsPage;
