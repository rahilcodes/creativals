import React from 'react';
import { Link } from 'react-router-dom';
import { getRelatedServices } from '../data/allServices';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const IndustryPageTemplate = ({ industry }) => {
  const waMsg = `Hi! I run a business in the ${industry.title} industry. I want a free growth audit.`;
  const [headLine1, headLine2] = industry.heroHeadline.split('\n');
  // Topical per-industry service set (audit: cross-links were one fixed
  // 5-service list sitewide) — curated slugs live in industries.js.
  const relatedServices = getRelatedServices(industry.relatedServices || []);

  return (
    <div>
      {/* ── HERO (indigo) ──────────────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap" style={{ paddingTop: 140, paddingBottom: 96 }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 34 })}>
              <span className="cx-dot" />
              Industry growth system · {industry.title}
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ maxWidth: 1050 }}>
              {headLine1}<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>{headLine2}</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 620, marginTop: 30 }}>{industry.heroSub}</p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 38, flexWrap: 'wrap' }}>
              <a href={waLink(waMsg)} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
                Get my free audit →
              </a>
              <Link to="/contact" className="cx-btn cx-btn-lg cx-btn-outline-cream">Talk to us</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 01 · PAIN POINTS (cream) ───────────────────────────── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The problem" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24, maxWidth: 980 }}>
              Why most {industry.title.toLowerCase()} businesses<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>leave money on the table.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead" style={{ maxWidth: 680, marginBottom: 56 }}>{industry.industryProblem}</p>
          </Reveal>

          <div className="cx-grid3" style={{ gap: 22 }}>
            {industry.painPoints.map((p, i) => (
              <Reveal key={p} delay={(i % 3) * 60}>
                <div className="cx-card" style={{ height: '100%', boxSizing: 'border-box', padding: '30px 28px' }}>
                  <div style={mono({ fontSize: 12, fontWeight: 600, letterSpacing: '.12em', color: '#FF5F57', marginBottom: 14 })}>
                    ✕ LEAK {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 16.5, lineHeight: 1.45 }}>{p}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 · STATS BAND (yellow) ───────────────────────────── */}
      <section style={{ background: '#FFD84D', color: '#17151A', borderTop: '4px solid #17151A', borderBottom: '4px solid #17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="The numbers" yellow /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 56 }}>
              What the system<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>actually produces.</span>
            </h2>
          </Reveal>

          <div className="cx-grid3" style={{ gap: 22, marginBottom: 56 }}>
            {industry.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 80}>
                <div style={{ borderTop: '4px solid #17151A', paddingTop: 22 }}>
                  <div style={{ fontWeight: 900, fontStretch: '122%', fontSize: 'clamp(52px,6vw,84px)', lineHeight: .9, letterSpacing: '-0.03em' }}>{m.value}</div>
                  <div style={mono({ fontSize: 12, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', marginTop: 14, opacity: .7 })}>{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Case studies render only with verified entries (CLAUDE.md content policy) */}
          {industry.caseStudies.length > 0 && (
          <div className="cx-grid2" style={{ gap: 22 }}>
            {industry.caseStudies.map((cs, i) => (
              <Reveal key={cs.client} delay={i * 80}>
                <div className="cx-card-ink" style={{ height: '100%', boxSizing: 'border-box' }}>
                  <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FFD84D', marginBottom: 14 })}>Case study</div>
                  <div style={{ fontWeight: 800, fontSize: 21, marginBottom: 18 }}>{cs.client}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 18 }}>
                    <span style={mono({ fontSize: 12.5, padding: '6px 12px', borderRadius: 999, border: '1px solid rgba(244,242,236,.35)', color: 'rgba(244,242,236,.7)' })}>{cs.before}</span>
                    <span style={{ fontWeight: 900 }}>→</span>
                    <span style={mono({ fontSize: 12.5, fontWeight: 600, padding: '6px 12px', borderRadius: 999, background: '#FFD84D', color: '#17151A' })}>{cs.after}</span>
                  </div>
                  <div style={mono({ fontSize: 11.5, letterSpacing: '.06em', opacity: .6 })}>SYSTEM: {cs.system.toUpperCase()}</div>
                </div>
              </Reveal>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* ── 03 · THE SYSTEM (ink) ──────────────────────────────── */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="03" label="How we fix it" dark /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
              The system<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>we deploy.</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 680, marginBottom: 56 }}>{industry.systemApproach}</p>
          </Reveal>

          <Reveal delay={180}>
            <div>
              {industry.systemSteps.map((step, i) => (
                <div
                  key={step}
                  style={{
                    display: 'flex', alignItems: 'baseline', gap: 'clamp(20px,4vw,48px)',
                    padding: '26px 0',
                    borderTop: '1px solid rgba(244,242,236,.25)',
                    borderBottom: i === industry.systemSteps.length - 1 ? '1px solid rgba(244,242,236,.25)' : 'none',
                  }}
                >
                  <span style={mono({ fontSize: 13, fontWeight: 600, color: '#FFD84D', flex: 'none' })}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontWeight: 900, fontStretch: '118%', textTransform: 'uppercase', fontSize: 'clamp(22px,3.2vw,40px)', letterSpacing: '-0.02em' }}>{step}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="cx-grid3" style={{ gap: 22, marginTop: 64 }}>
            {industry.useCases.map((uc, i) => (
              <Reveal key={uc.title} delay={i * 80}>
                <div style={{ border: '1px solid rgba(244,242,236,.35)', borderRadius: 16, padding: '28px 26px', height: '100%', boxSizing: 'border-box' }}>
                  <div style={{ fontWeight: 900, fontSize: 34, fontStretch: '120%', color: '#FFD84D', marginBottom: 12 }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>{uc.title}</div>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: 'rgba(244,242,236,.75)' }}>{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ marginTop: 64, border: '1px solid rgba(244,242,236,.35)', borderRadius: 18, padding: 'clamp(28px,4vw,44px)' }}>
              <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#FFD84D', marginBottom: 16 })}>Why it works</div>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: 'rgba(244,242,236,.85)', maxWidth: 880 }}>{industry.mechanism}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 04 · FAQ (cream) ───────────────────────────────────── */}
      {industry.faqs && industry.faqs.length > 0 && (
        <section style={{ background: '#F4F2EC', color: '#17151A' }}>
          <div className="cx-wrap cx-section">
            <div className="cx-grid-faq">
              <div>
                <Reveal><SecNum n="04" label="Questions" /></Reveal>
                <Reveal delay={60}>
                  <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                    Things {industry.title.toLowerCase()}<br />
                    <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>owners ask us.</span>
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={120}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {industry.faqs.map((f) => (
                    <details key={f.q} className="cx-faq">
                      <summary><h3>{f.q}</h3><span className="plus">+</span></summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ── 05 · SYSTEMS FOR THIS INDUSTRY (cream) ─────────────── */}
      {relatedServices.length > 0 && (
        <section style={{ background: '#F4F2EC', color: '#17151A', borderTop: '1px solid rgba(23,21,26,.12)' }}>
          <div className="cx-wrap cx-section">
            <Reveal><SecNum n="05" label="Systems for this industry" /></Reveal>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2" style={{ marginBottom: 48 }}>
                What we deploy for<br />
                <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>{industry.title.toLowerCase()}.</span>
              </h2>
            </Reveal>
            <div className="cx-grid2" style={{ gap: 18 }}>
              {relatedServices.map((r, i) => (
                <Reveal key={r.slug} delay={i * 80}>
                  <Link
                    to={`/services/${r.slug}`}
                    className="cx-card-invert"
                    style={{ padding: '22px 24px', height: '100%', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}
                  >
                    <span style={{ fontWeight: 800, fontSize: 16.5, letterSpacing: '-0.01em' }}>{r.title}</span>
                    <span aria-hidden="true" style={{ fontWeight: 900, fontSize: 18, flex: 'none' }}>→</span>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
                <Link to="/services" className="cx-btn cx-btn-outline-ink">View all 30+ services →</Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── 06 · FINAL CTA (indigo) ────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="06" label="Free · No commitment" dark /></Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <Reveal delay={60}>
                <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                  Ready to grow your<br />
                  <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>{industry.title.toLowerCase()} business?</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="cx-lead cx-lead-light" style={{ maxWidth: 520 }}>
                  One conversation. We'll audit your current setup and tell you exactly where the growth opportunity
                  is — at zero cost.
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <a href={waLink(waMsg)} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
                  Chat on WhatsApp — it's free →
                </a>
                <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .75 })}>NO COMMITMENT · NO PITCH · JUST REAL HELP</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPageTemplate;
