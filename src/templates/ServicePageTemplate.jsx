import React from 'react';
import { Link } from 'react-router-dom';
import { getRelatedServices } from '../data/allServices';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const ServicePageTemplate = ({ service }) => {
  const related = getRelatedServices(service.relatedServices || []);
  const wa = waLink(`Hi! I'm interested in ${service.title} for my business.`);
  const [headLine1, ...headRest] = service.heroHeadline.split('\n');

  return (
    <div>
      {/* ── HERO — indigo ─────────────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11.5, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', background: '#FFD84D', color: '#17151A', borderRadius: 999, padding: '8px 16px', marginBottom: 30 })}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#17151A' }} />{service.category}
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 28 }}>
              {headLine1}
              {headRest.length > 0 && (
                <>
                  <br />
                  <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>{headRest.join(' ')}</span>
                </>
              )}
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 620, marginBottom: 38 }}>{service.heroSub}</p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <a href={wa} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">Get Free Audit →</a>
              <span style={mono({ fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', opacity: .7 })}>Free audit · No commitment</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 01 FAIL REASONS — cream ───────────────────────────── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The diagnosis" /></Reveal>
          <div style={{ marginBottom: 56 }}>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                Why most businesses<br />
                <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>fail at this.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="cx-lead" style={{ maxWidth: 620 }}>
                If any of these sound familiar, you're losing money right now.
              </p>
            </Reveal>
          </div>
          <div className="cx-grid3">
            {service.failReasons.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className={`cx-card ${i % 2 === 0 ? 'tilt-l' : 'tilt-r'}`} style={{ height: '100%', boxSizing: 'border-box' }}>
                  <div style={mono({ display: 'inline-block', fontSize: 10.5, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', background: '#FF5F57', color: '#FFFFFF', borderRadius: 999, padding: '5px 12px', marginBottom: 22 })}>
                    Failure 0{i + 1}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 21, letterSpacing: '-0.01em', marginBottom: 12 }}>{f.title}</div>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(23,21,26,.68)' }}>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 METRICS + INDUSTRY PROOF — yellow ──────────────── */}
      <section style={{ background: '#FFD84D', color: '#17151A', borderTop: '4px solid #17151A', borderBottom: '4px solid #17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="The numbers" yellow /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 56 }}>
              Proof,<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>not promises.</span>
            </h2>
          </Reveal>
          <div className="cx-grid3" style={{ marginBottom: 64 }}>
            {service.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 100}>
                <div style={{ borderTop: '3px solid #17151A', paddingTop: 22 }}>
                  <div style={{ fontWeight: 900, fontSize: 'clamp(52px,6vw,84px)', fontStretch: '122%', lineHeight: .95, letterSpacing: '-0.02em' }}>{m.value}</div>
                  <div style={mono({ fontSize: 12, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', marginTop: 14, opacity: .75 })}>{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className={service.caseStudies.length > 0 ? 'cx-grid2' : undefined} style={{ gap: 26 }}>
            <Reveal>
              <div style={{ border: '2px solid #17151A', borderRadius: 18, padding: '28px 26px', background: '#FFF8E0', height: '100%', boxSizing: 'border-box' }}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 20, opacity: .7 })}>Industry proof</div>
                {service.industries.map((ind, i) => (
                  <div key={ind.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, padding: '13px 0', borderTop: i > 0 ? '1px solid rgba(23,21,26,.18)' : 'none' }}>
                    <span style={{ fontWeight: 800, fontSize: 16 }}>{ind.name}</span>
                    <span style={mono({ fontSize: 12.5, fontWeight: 600, color: '#4F46E5', textAlign: 'right' })}>{ind.result}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            {/* Case-study card renders only with verified entries (CLAUDE.md content policy) */}
            {service.caseStudies.length > 0 && (
              <Reveal delay={100}>
                <div style={{ background: '#17151A', color: '#F4F2EC', borderRadius: 18, padding: '28px 26px', height: '100%', boxSizing: 'border-box' }}>
                  <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', marginBottom: 20, color: '#FFD84D' })}>Real results</div>
                  {service.caseStudies.map((cs, i) => (
                    <div key={cs.client} style={{ padding: '14px 0', borderTop: i > 0 ? '1px solid rgba(244,242,236,.2)' : 'none' }}>
                      <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 8 }}>{cs.client}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
                        <span style={mono({ fontSize: 12, opacity: .6, textDecoration: 'line-through' })}>{cs.before}</span>
                        <span aria-hidden="true" style={{ color: '#FFD84D', fontWeight: 900 }}>→</span>
                        <span style={mono({ fontSize: 13.5, fontWeight: 600, color: '#FFD84D' })}>{cs.after}</span>
                      </div>
                      <span style={mono({ display: 'inline-block', fontSize: 10.5, letterSpacing: '.08em', textTransform: 'uppercase', border: '1px solid rgba(244,242,236,.35)', borderRadius: 999, padding: '5px 11px', opacity: .85 })}>{cs.system}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ── 03 SYSTEM STEPS — ink ─────────────────────────────── */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="03" label="The method" dark /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 18 }}>
              We don't sell a service.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>We build a system.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="cx-lead cx-lead-light" style={{ margin: '0 0 56px', maxWidth: 620 }}>{service.systemApproach}</p>
          </Reveal>
          <div>
            {service.systemSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 70} className="cx-sysrow">
                <div style={{ fontWeight: 900, fontSize: 46, fontStretch: '120%', color: '#FFD84D' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontWeight: 800, fontSize: 24, letterSpacing: '-0.01em' }}>{s.step}</div>
                <div className="cx-sysdesc" style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(244,242,236,.65)' }}>{s.desc}</div>
                <div className="cx-systag" style={mono({ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', border: '1px solid rgba(244,242,236,.35)', borderRadius: 999, padding: '8px 14px', whiteSpace: 'nowrap' })}>
                  Step {i + 1}/{service.systemSteps.length}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ marginTop: 52, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <a href={wa} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-cream">Build this for my business →</a>
              <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .55 })}>FREE AUDIT · NO COMMITMENT · REPLY IN 2 HRS</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 04 OUTCOMES + MECHANISM — cream ───────────────────── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="04" label="What you get" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 56 }}>
              Deliverables,<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>and why they work.</span>
            </h2>
          </Reveal>
          <div className="cx-grid2">
            <Reveal>
              <div className="cx-card" style={{ height: '100%', boxSizing: 'border-box' }}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 22 })}>What you get</div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {service.outcomes.map((o, i) => (
                    <li key={o} style={{ display: 'flex', gap: 14, alignItems: 'baseline', padding: '12px 0', borderTop: i > 0 ? '1px solid rgba(23,21,26,.12)' : 'none', fontSize: 15.5, fontWeight: 600, lineHeight: 1.5 }}>
                      <span aria-hidden="true" style={mono({ fontSize: 12, color: '#4F46E5', fontWeight: 600 })}>0{i + 1}</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="cx-card-indigo" style={{ height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#FFD84D', marginBottom: 22 })}>Why this works</div>
                <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.7, color: 'rgba(244,242,236,.9)', flex: 1 }}>{service.mechanism}</p>
                <div style={{ marginTop: 28, borderTop: '1px solid rgba(244,242,236,.25)', paddingTop: 20 }}>
                  <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>100% money-back guarantee</div>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(244,242,236,.75)' }}>
                    If we don't hit the agreed KPIs in the first month, you get your money back. No questions.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 05 FAQ — cream ────────────────────────────────────── */}
      <section style={{ background: '#F4F2EC', color: '#17151A', borderTop: '1px solid rgba(23,21,26,.12)' }}>
        <div className="cx-wrap cx-section">
          <div className="cx-grid-faq">
            <div>
              <Reveal><SecNum n="05" label="Questions" /></Reveal>
              <Reveal delay={60}>
                <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                  Asked,<br />
                  <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>answered.</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="cx-lead" style={{ maxWidth: 420 }}>
                  Everything founders usually ask before we start. Anything else — ask us on WhatsApp.
                </p>
              </Reveal>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {service.faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 60}>
                  <details className="cx-faq">
                    <summary>{faq.q}<span className="plus">+</span></summary>
                    <p>{faq.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 RELATED SYSTEMS — cream ────────────────────────── */}
      {related.length > 0 && (
        <section style={{ background: '#F4F2EC', color: '#17151A', borderTop: '1px solid rgba(23,21,26,.12)' }}>
          <div className="cx-wrap cx-section">
            <Reveal><SecNum n="06" label="Related systems" /></Reveal>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2" style={{ marginBottom: 48 }}>
                Plugs into<br />
                <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>these systems.</span>
              </h2>
            </Reveal>
            <div className="cx-grid3" style={{ gap: 18 }}>
              {related.map((r, i) => (
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

      {/* ── FINAL CTA — indigo ────────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 22 }}>
              Ready to build your<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>{service.title.toLowerCase()} system?</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 540, margin: '0 auto 36px' }}>
              Free audit. No commitment. Just clarity on exactly what to fix.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
              <a href={wa} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">Get Free Audit on WhatsApp →</a>
              <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .7, textTransform: 'uppercase' })}>Takes 30 seconds · No spam · Just real help</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
