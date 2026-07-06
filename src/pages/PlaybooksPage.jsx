import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const WA_MSG = 'Hi! I want to download the B2B SaaS Lead Generation Playbook.';

const PLAYBOOKS = [
  {
    n: '01',
    title: 'The B2B Cold Outreach Architecture',
    subtitle: 'For Enterprise SaaS',
    readTime: '12 min read',
    tilt: 'tilt-l',
    desc: 'How we build high-volume LinkedIn & Email sequences bypassing spam filters, generating 5+ VP-level meetings weekly.',
  },
  {
    n: '02',
    title: 'The Hospitality Direct Booking Funnel',
    subtitle: 'For Hotels & Resorts',
    readTime: '15 min read',
    tilt: 'tilt-r',
    desc: 'The exact Meta Ad structure and landing page framework we use to steal bookings back from MakeMyTrip and Agoda.',
  },
  {
    n: '03',
    title: 'The Real Estate WhatsApp Closing Rig',
    subtitle: 'For Property Developers',
    readTime: '10 min read',
    tilt: 'tilt-l',
    desc: 'How to stop cold calling internet leads and use API-triggered WhatsApp sequences to qualify property buyers on autopilot.',
  },
];

const PlaybooksPage = () => {
  useSEO({
    title: 'Growth Playbooks & Frameworks | Creativals',
    description: 'Steal our exact step-by-step systems. Deep tactical breakdowns of how we scale B2B, Healthcare, and D2C brands.',
  });

  return (
    <>
      {/* 1. HERO — indigo */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 })}>
              <span className="cx-dot" />
              Open-Source Growth
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 30 }}>
              Steal our<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>frameworks.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 0 38px', maxWidth: 560, fontSize: 18, lineHeight: 1.6, color: 'rgba(244,242,236,.85)' }}>
              We don't believe in hoarding secrets. Here are the exact execution playbooks we use internally to build
              multi-million dollar revenue engines.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
              Get the Playbooks →
            </a>
          </Reveal>
        </div>
      </section>

      {/* 2. PLAYBOOKS — cream */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The playbooks" /></Reveal>
          <div style={{ marginBottom: 60 }}>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                Step-by-step.<br />
                <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>No gatekeeping.</span>
              </h2>
            </Reveal>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 26, maxWidth: 980 }}>
            {PLAYBOOKS.map((b, i) => (
              <Reveal key={b.n} delay={i * 120}>
                <div className={`cx-card ${b.tilt}`} style={{ boxSizing: 'border-box', display: 'flex', gap: 34, alignItems: 'flex-start' }}>
                  <div className="cx-hide-sm" style={{ fontWeight: 900, fontSize: 64, fontStretch: '120%', lineHeight: 1, color: '#4F46E5', flex: 'none' }}>{b.n}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
                      <span className="cx-tag cx-tag-indigo">{b.subtitle}</span>
                      <span style={mono({ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(23,21,26,.55)' })}>{b.readTime}</span>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: 26, marginBottom: 12, letterSpacing: '-0.01em' }}>{b.title}</div>
                    <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'rgba(23,21,26,.68)', maxWidth: 640 }}>{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATEMENT — yellow */}
      <section style={{ background: '#FFD84D', color: '#17151A', borderTop: '4px solid #17151A', borderBottom: '4px solid #17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="The shortcut" yellow /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 0 }}>
              Why read the manual<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>when the architects can build it?</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* 4. FINAL CTA — ink */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section" style={{ textAlign: 'center' }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 26 })}>
              <span className="cx-dot" />
              Done-for-you deployment
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 22 }}>
              Want us to deploy<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>this for you?</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 auto 36px', maxWidth: 480, fontSize: 17, lineHeight: 1.6, color: 'rgba(244,242,236,.75)' }}>
              Why read the manual when the architects can build it for you?
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a href={waLink(WA_MSG)} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
              Book a Strategy Call →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default PlaybooksPage;
