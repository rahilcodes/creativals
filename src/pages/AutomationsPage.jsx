import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const WA_MSG = 'Hi! I want to automate my sales backend and lead routing.';

const ROUTING_STEPS = [
  'Lead is instantly pushed to your CRM',
  'Sales rep gets an immediate Slack/WhatsApp ping',
  'Lead receives an automated, personalized welcome email',
];

const AutomationsPage = () => {
  useSEO({
    title: 'Business Automations | n8n & WhatsApp Flows | Creativals',
    description: 'We replace human error with code. Explore our backend automation architectures that handle lead routing, WhatsApp nurturing, and CRM sync.',
  });

  return (
    <>
      {/* 1. HERO — indigo */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 })}>
              <span className="cx-dot" />
              Backend Architecture
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 30 }}>
              Stop relying on humans<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>for robotic tasks.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 0 38px', maxWidth: 560, fontSize: 18, lineHeight: 1.6, color: 'rgba(244,242,236,.85)' }}>
              If your sales team is manually entering leads into a spreadsheet, you are losing money. We build
              aggressive n8n and Zapier automations to eliminate friction.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
              Audit My Workflows →
            </a>
          </Reveal>
        </div>
      </section>

      {/* 2. FLOW TYPE 01 — cream */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="Flow Type 01" /></Reveal>
          <div className="cx-grid2" style={{ alignItems: 'start' }}>
            <div>
              <Reveal delay={60}>
                <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                  Zero-delay<br />
                  <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>lead routing.</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="cx-lead" style={{ maxWidth: 520 }}>
                  A lead submits a Facebook Lead Form. Within 3 seconds:
                </p>
              </Reveal>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {ROUTING_STEPS.map((step, i) => (
                <Reveal key={step} delay={i * 120}>
                  <div className="cx-card" style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 22 }}>
                    <span style={mono({ fontSize: 13, fontWeight: 600, background: '#FFD84D', color: '#17151A', borderRadius: 999, padding: '7px 12px', flex: 'none' })}>
                      0{i + 1}
                    </span>
                    <span style={{ fontWeight: 700, fontSize: 16.5, letterSpacing: '-0.01em' }}>{step}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLOW TYPE 02 — ink */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="Flow Type 02" dark /></Reveal>
          <div className="cx-grid2" style={{ alignItems: 'end' }}>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2" style={{ marginBottom: 0 }}>
                WhatsApp API<br />
                <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>nurturing.</span>
              </h2>
            </Reveal>
            <div>
              <Reveal delay={100}>
                <div style={{ fontWeight: 900, fontSize: 76, fontStretch: '120%', lineHeight: 1, color: '#FFD84D', marginBottom: 18 }}>90%+</div>
              </Reveal>
              <Reveal delay={160}>
                <p className="cx-lead cx-lead-light" style={{ maxWidth: 520, color: 'rgba(244,242,236,.75)' }}>
                  Email open rates are dying. We integrate official WhatsApp Cloud APIs to send automated 5-day
                  educational nurture sequences directly into your lead's inbox, enjoying 90%+ open rates.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA — indigo */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section" style={{ textAlign: 'center' }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 26 })}>
              <span className="cx-dot" />
              Free workflow audit
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 36 }}>
              Stop leaking<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>leads.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
              Audit My Workflows →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default AutomationsPage;
