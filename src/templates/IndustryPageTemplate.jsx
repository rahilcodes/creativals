import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle, X, MessageCircle, ChevronDown,
  Zap, TrendingUp, Shield, Star, Target, Eye, BarChart3, Phone
} from 'lucide-react';
import { getRelatedServices } from '../data/allServices';

const WA = 'https://wa.me/917997001700';
const fin = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

/* ─── reusable label ───────────────────────────────────────────── */
const Label = ({ children, color = '#7C3AED' }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.3rem 0.9rem', background: `${color}15`, border: `1px solid ${color}35`, borderRadius: 99, fontSize: '0.72rem', fontWeight: 800, color, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '1.25rem' }}>
    {children}
  </div>
);

/* ─── FAQ accordion ─────────────────────────────────────────────── */
const FAQ = ({ faqs = [], color }) => {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {faqs.map((f, i) => (
        <div key={i} onClick={() => setOpen(open === i ? null : i)}
          style={{ background: '#ffffff', border: `1px solid ${open === i ? color : 'rgba(124,58,237,0.1)'}`, borderRadius: 16, overflow: 'hidden', cursor: 'pointer', transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(124,58,237,0.03)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', gap: '1rem' }}>
            <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#1A1040', lineHeight: 1.4 }}>{f.q}</span>
            <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0 }}>
              <ChevronDown size={18} color={color} />
            </motion.div>
          </div>
          <AnimatePresence>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                style={{ overflow: 'hidden' }}>
                <div style={{ padding: '0 1.5rem 1.25rem', color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.75, borderTop: '1px solid rgba(124,58,237,0.08)', paddingTop: '0.75rem' }}>{f.a}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

/* ──────────────────────────────────────────────────────────────── */
const IndustryPageTemplate = ({ industry }) => {
  const related = getRelatedServices(industry.relatedServices || []);
  const waMsg = encodeURIComponent(`Hi! I run a business in the ${industry.title} industry. I want a free growth audit.`);
  const color = industry.accentColor || '#7C3AED';

  return (
    <div className="light-page" style={{ background: 'var(--lt-bg)', color: 'var(--lt-text)', paddingTop: 80, minHeight: '100vh' }}>

      {/* ─────────── 1. HERO ─────────── */}
      <section style={{ padding: '5rem 2rem 4rem', textAlign: 'center', maxWidth: 840, margin: '0 auto' }}>
        <motion.div {...fin}>
          <Label color={color}><Zap size={11} /> Industry Growth System · {industry.title}</Label>
          <h1 style={{ fontSize: 'clamp(2.6rem,6vw,4.8rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '1.25rem', whiteSpace: 'pre-line', color: 'var(--lt-text)' }}>
            {industry.heroHeadline}
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#4B5563', lineHeight: 1.75, maxWidth: 640, margin: '0 auto 2.5rem' }}>
            {industry.heroSub}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a href={`${WA}?text=${waMsg}`} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="text-white"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1.1rem 2.25rem', background: 'linear-gradient(135deg,#22C55E,#16A34A)', borderRadius: 14, fontWeight: 900, fontSize: '1.05rem', textDecoration: 'none', boxShadow: '0 4px 14px rgba(34,197,94,0.35)' }}>
              <MessageCircle size={18} /> Get My Free Audit <ArrowRight size={16} />
            </motion.a>
            <motion.a href={`tel:+917997001700`}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1.1rem 2rem', background: '#ffffff', border: '1px solid rgba(124,58,237,0.15)', color: '#7C3AED', borderRadius: 14, fontWeight: 700, fontSize: '1.05rem', textDecoration: 'none', boxShadow: '0 4px 12px rgba(124,58,237,0.03)' }}>
              <Phone size={16} /> Call Us
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* ─────────── 2. METRICS STRIP ─────────── */}
      <section style={{ background: '#ffffff', borderTop: '1px solid rgba(124,58,237,0.1)', borderBottom: '1px solid rgba(124,58,237,0.1)', padding: '2rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
          {industry.metrics.map(m => (
            <motion.div key={m.label} {...fin} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(2rem,4vw,2.75rem)', fontWeight: 900, letterSpacing: '-0.04em', color, lineHeight: 1 }}>{m.value}</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#4B5563', textTransform: 'uppercase', letterSpacing: '0.09em', marginTop: '0.5rem' }}>{m.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────── 3. THE REAL PROBLEM ─────────── */}
      <section style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div {...fin}>
          <Label color="#EF4444">The Industry Problem</Label>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.75rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem', color: 'var(--lt-text)' }}>
            Why most {industry.title.toLowerCase()} businesses are{' '}
            <span style={{ color: '#EF4444' }}>leaving money on the table.</span>
          </h2>
          <p style={{ color: '#4B5563', lineHeight: 1.85, fontSize: '1rem' }}>{industry.industryProblem}</p>
        </motion.div>
        <motion.div {...fin} transition={{ delay: 0.15 }} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {(industry.painPoints || [
            'Spending on ads with zero proven ROI',
            'No system to nurture leads who don\'t convert instantly',
            'Over-relying on a single channel that can disappear overnight',
            'No tracking — no idea what\'s actually working',
            'Competitors capturing customers you should have won',
          ]).map(p => (
            <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.85rem 1.1rem', background: '#FFF5F5', border: '1px solid rgba(239,68,68,0.12)', borderRadius: 12, boxShadow: '0 4px 12px rgba(239,68,68,0.02)' }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                <X size={10} color="#EF4444" />
              </div>
              <span style={{ color: '#4B5563', fontSize: '0.92rem', lineHeight: 1.5 }}>{p}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ─────────── 4. OUR SYSTEM ─────────── */}
      <section style={{ padding: '5rem 2rem 6rem', background: 'rgba(124,58,237,0.02)', borderTop: '1px solid rgba(124,58,237,0.08)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div {...fin} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <Label color={color}><Target size={11} /> How We Fix It</Label>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 1rem', color: 'var(--lt-text)' }}>The Creativals {industry.title} System</h2>
            <p style={{ color: '#4B5563', fontSize: '1.05rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>{industry.systemApproach}</p>
          </motion.div>

          {/* Flow steps */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'stretch', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}>
            {(industry.systemSteps || ['Audit & Diagnose', 'Build Assets', 'Launch Campaigns', 'Convert & Close', 'Scale & Optimize']).map((step, i, arr) => (
              <React.Fragment key={step}>
                <motion.div {...fin} transition={{ delay: i * 0.1 }}
                  style={{ padding: '1.5rem', background: '#ffffff', border: `1px solid ${i === 0 ? color : 'rgba(124,58,237,0.1)'}`, borderRadius: 16, textAlign: 'center', minWidth: 150, flex: '1 1 180px', maxWidth: '240px', boxShadow: '0 4px 16px rgba(124,58,237,0.04)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: i === 0 ? color : `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '0.85rem', fontWeight: 900, border: i === 0 ? 'none' : `1px solid ${color}40`, boxShadow: i === 0 ? `0 4px 10px ${color}35` : 'none', ...(i !== 0 ? { color } : {}) }} className={i === 0 ? "text-white" : ""}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1A1040', lineHeight: 1.3 }}>{step}</div>
                </motion.div>
                {i < arr.length - 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', padding: '0 0.25rem' }} className="step-arrow-container">
                    <ArrowRight size={18} color={color} style={{ opacity: 0.6 }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Use cases grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {industry.useCases.map((uc, i) => (
              <motion.div key={uc.title} {...fin} transition={{ delay: i * 0.08 }}
                style={{ padding: '2rem', background: '#ffffff', border: '1px solid rgba(124,58,237,0.1)', borderRadius: 20, boxShadow: '0 4px 16px rgba(124,58,237,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: `${color}15`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle size={15} color={color} />
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.1rem', margin: 0, color: '#1A1040' }}>{uc.title}</h3>
                </div>
                <p style={{ color: '#4B5563', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 5. REAL CASE STUDIES ─────────── */}
      <section style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(124,58,237,0.08)', background: '#ffffff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div {...fin} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Label color="#22C55E"><TrendingUp size={11} /> Real Proof</Label>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: 0, color: 'var(--lt-text)' }}>Results we've delivered in this industry.</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {industry.caseStudies.map((cs, i) => (
              <motion.div key={cs.client} {...fin} transition={{ delay: i * 0.1 }}
                style={{ padding: '2rem', background: '#ffffff', border: '1px solid rgba(124,58,237,0.1)', borderRadius: 20, position: 'relative', overflow: 'hidden', boxShadow: '0 4px 20px rgba(124,58,237,0.05)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${color},transparent)` }} />
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: color, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '0.5rem' }}>Case Study</div>
                <div style={{ fontWeight: 900, fontSize: '1.2rem', color: '#1A1040', marginBottom: '1.5rem' }}>{cs.client}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ padding: '0.4rem 0.8rem', background: '#FEF2F2', border: '1px solid #FEE2E2', borderRadius: 8, color: '#EF4444', fontWeight: 700, fontSize: '0.85rem' }}>{cs.before}</div>
                  <ArrowRight size={14} color="#94A3B8" />
                  <div style={{ padding: '0.4rem 0.8rem', background: '#F0FDF4', border: '1px solid #DCFCE7', borderRadius: 8, color: '#15803D', fontWeight: 800, fontSize: '0.95rem' }}>{cs.after}</div>
                </div>
                <div style={{ padding: '0.35rem 0.85rem', background: `${color}08`, border: `1px solid ${color}20`, borderRadius: 8, display: 'inline-block', fontSize: '0.78rem', fontWeight: 700, color }}>
                  System: {cs.system}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── 6. THE MECHANISM ─────────── */}
      <section style={{ padding: '5rem 2rem', background: 'rgba(124,58,237,0.02)', borderTop: '1px solid rgba(124,58,237,0.08)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div {...fin}>
            <Label color={color}><Eye size={11} /> Why It Works</Label>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1.25rem', color: 'var(--lt-text)' }}>The mechanism behind the results.</h2>
            <p style={{ color: '#4B5563', lineHeight: 1.85, fontSize: '1rem' }}>{industry.mechanism}</p>
          </motion.div>
          <motion.div {...fin} transition={{ delay: 0.15 }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: Zap,      label: 'Speed',     desc: 'Fast launch, fast iteration, fast results.' },
              { icon: Shield,   label: 'Precision',  desc: 'Every rupee of ad spend is traceable and accountable.' },
              { icon: TrendingUp,label: 'Compounding',desc: 'Systems that improve every month, not just month one.' },
              { icon: Star,     label: 'Ownership',  desc: 'You own the data, the audience, and the results.' },
            ].map(p => (
              <div key={p.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem 1.25rem', background: '#ffffff', border: '1px solid rgba(124,58,237,0.1)', borderRadius: 14, boxShadow: '0 4px 12px rgba(124,58,237,0.03)' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}15`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <p.icon size={16} color={color} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#1A1040', marginBottom: '0.25rem' }}>{p.label}</div>
                  <div style={{ fontSize: '0.85rem', color: '#4B5563', lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────── 7. RELATED SERVICES ─────────── */}
      {related.length > 0 && (
        <section style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(124,58,237,0.08)', background: '#ffffff' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <motion.div {...fin} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <Label color={color}><BarChart3 size={11} /> Services We Deploy</Label>
              <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: 0, color: 'var(--lt-text)' }}>Exactly what we use for {industry.title}.</h2>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {related.map((r, i) => (
                <motion.div key={r.slug} {...fin} transition={{ delay: i * 0.06 }}>
                  <Link to={`/services/${r.slug}`}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1rem 1.5rem', background: '#ffffff', border: `1px solid rgba(124,58,237,0.1)`, borderRadius: 14, textDecoration: 'none', color: '#1A1040', fontWeight: 600, fontSize: '0.95rem', transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(124,58,237,0.04)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = color + '50'; e.currentTarget.style.color = '#1A1040'; e.currentTarget.style.background = `${color}08`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.1)'; e.currentTarget.style.color = '#1A1040'; e.currentTarget.style.background = '#ffffff'; }}>
                    {r.title}
                    <ArrowRight size={14} color={color} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────── 8. FAQ ─────────── */}
      {industry.faqs && industry.faqs.length > 0 && (
        <section style={{ padding: '5rem 2rem', background: 'rgba(124,58,237,0.02)', borderTop: '1px solid rgba(124,58,237,0.08)' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <motion.div {...fin} style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <Label color={color}>Questions Answered</Label>
              <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: 0, color: 'var(--lt-text)' }}>Things {industry.title} owners usually ask us.</h2>
            </motion.div>
            <FAQ faqs={industry.faqs} color={color} />
          </div>
        </section>
      )}

      {/* ─────────── 9. TRUST BAR ─────────── */}
      <section style={{ borderTop: '1px solid rgba(124,58,237,0.08)', padding: '2.5rem 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem' }}>
          {['160+ Clients Scaled', '7 Countries', '₹1B+ Revenue Generated', '6 Years Experience', '92% Client Retention'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#4B5563', fontWeight: 800 }}>
              <CheckCircle size={15} color="#22C55E" /> {t}
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── 10. FINAL CTA ─────────── */}
      <section style={{ padding: '5rem 2rem 7rem', textAlign: 'center' }}>
        <motion.div {...fin} style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 2rem', background: 'rgba(124,58,237,0.05)', border: '1px solid rgba(124,58,237,0.18)', borderRadius: 28, boxShadow: '0 4px 20px rgba(124,58,237,0.03)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Free · No Commitment</div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.75rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem', color: 'var(--lt-text)' }}>
            Ready to grow your<br />{industry.title.toLowerCase()} business?
          </h2>
          <p style={{ color: '#4B5563', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            One conversation. We'll audit your current setup and tell you exactly where the growth opportunity is — at zero cost.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a href={`${WA}?text=${waMsg}`} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="text-white"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(135deg,#22C55E,#16A34A)', borderRadius: 14, fontWeight: 900, fontSize: '1.05rem', textDecoration: 'none', boxShadow: '0 4px 14px rgba(34,197,94,0.35)' }}>
              <MessageCircle size={20} /> Chat on WhatsApp — It's Free <ArrowRight size={16} />
            </motion.a>
          </div>
          <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: '#64748B' }}>No commitment. No pitch. Just real help.</div>
        </motion.div>
      </section>

    </div>
  );
};

export default IndustryPageTemplate;
