import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, Zap, Shield, ChevronRight } from 'lucide-react';
import { getRelatedServices } from '../data/allServices';

const SectionWrap = ({ children, id, bg, border = true }) => (
  <section id={id} style={{ padding: '5.5rem 2rem', background: bg || 'transparent', borderTop: border ? '1px solid rgba(124,58,237,0.08)' : 'none' }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>{children}</div>
  </section>
);

const ServicePageTemplate = ({ service }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const related = getRelatedServices(service.relatedServices || []);
  const waMsg = encodeURIComponent(`Hi! I'm interested in ${service.title} for my business.`);

  return (
    <div className="light-page" style={{ background: 'var(--lt-bg)', color: 'var(--lt-text)', paddingTop: '80px', minHeight: '100vh' }}>

      {/* 1. HERO — Pain + Outcome */}
      <SectionWrap bg="transparent" border={false}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '2rem 0 0' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: '2rem', fontSize: '0.85rem', color: '#7C3AED', fontWeight: 700, marginBottom: '2rem' }}>
            <Zap size={14} /> {service.category}
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em', whiteSpace: 'pre-line', color: 'var(--lt-text)' }}>
            {service.heroHeadline}
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#4B5563', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            {service.heroSub}
          </p>
          <a href={`https://wa.me/917997001700?text=${waMsg}`} target="_blank" rel="noreferrer"
            className="text-white"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1.1rem 2.25rem', background: 'linear-gradient(135deg,#22C55E,#16A34A)', borderRadius: '0.75rem', fontWeight: 800, textDecoration: 'none', fontSize: '1.05rem', boxShadow: '0 4px 14px rgba(34,197,94,0.35)' }}>
            Get Free Audit <ArrowRight size={18} />
          </a>
        </div>
      </SectionWrap>

      {/* 2. INSTANT PROOF — Metrics */}
      <SectionWrap bg="rgba(124,58,237,0.02)">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
          {service.metrics.map(m => (
            <div key={m.label} style={{ textAlign: 'center', padding: '2rem 1rem', background: '#ffffff', border: '1px solid rgba(124,58,237,0.1)', borderRadius: '1rem', boxShadow: '0 4px 16px rgba(124,58,237,0.04)' }}>
              <div style={{ fontSize: '2.75rem', fontWeight: 900, color: '#7C3AED', lineHeight: 1 }}>{m.value}</div>
              <div style={{ color: '#4B5563', fontSize: '0.88rem', marginTop: '0.65rem', fontWeight: 600 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 3. WHY MOST BUSINESSES FAIL */}
      <SectionWrap>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '0.75rem', textAlign: 'center', color: 'var(--lt-text)' }}>Why most businesses fail at this</h2>
        <p style={{ color: '#4B5563', textAlign: 'center', marginBottom: '3.5rem', fontSize: '1.05rem' }}>If any of these sound familiar, you're losing money right now.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {service.failReasons.map(f => (
            <div key={f.title} style={{ padding: '1.75rem', background: '#FFF5F5', border: '1px solid rgba(239,68,68,0.12)', borderRadius: '1rem', boxShadow: '0 4px 12px rgba(239,68,68,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <AlertTriangle size={18} color="#EF4444" />
                <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#B91C1C' }}>{f.title}</span>
              </div>
              <p style={{ color: '#4B5563', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 4. OUR SYSTEM APPROACH */}
      <SectionWrap bg="rgba(124,58,237,0.03)">
        <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '0.75rem', textAlign: 'center', color: 'var(--lt-text)' }}>We don't sell a service. We build a system.</h2>
        <p style={{ color: '#4B5563', textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.7, fontSize: '1.05rem' }}>{service.systemApproach}</p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', background: '#F5F0FF', borderRadius: '1rem', padding: '1.5rem 2.5rem', border: '1px solid rgba(124,58,237,0.18)', maxWidth: '600px', margin: '0 auto', boxShadow: '0 4px 16px rgba(124,58,237,0.04)' }}>
          {['Traffic', '→', 'Conversion', '→', 'Closing'].map((s, i) => (
            <span key={i} style={{ color: s === '→' ? '#94A3B8' : '#7C3AED', fontWeight: s === '→' ? 400 : 800, fontSize: '1.15rem' }}>{s}</span>
          ))}
        </div>
      </SectionWrap>

      {/* 5. HOW IT WORKS — Steps */}
      <SectionWrap>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '3.5rem', textAlign: 'center', color: 'var(--lt-text)' }}>How we build this for you</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '720px', margin: '0 auto' }}>
          {service.systemSteps.map((step, i) => (
            <div key={step.step} style={{ display: 'flex', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: '44px', height: '44px', background: '#7C3AED', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem', fontWeight: 900, boxShadow: '0 4px 10px rgba(124,58,237,0.3)' }} className="text-white">{i + 1}</div>
                {i < service.systemSteps.length - 1 && <div style={{ width: '3px', flex: 1, background: '#E9E3FF', marginTop: '8px', marginBottom: '8px' }} />}
              </div>
              <div style={{ paddingTop: '0.4rem', paddingBottom: i < service.systemSteps.length - 1 ? '2.5rem' : 0 }}>
                <h3 style={{ fontWeight: 800, marginBottom: '0.5rem', fontSize: '1.25rem', color: '#1A1040' }}>{step.step}</h3>
                <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 6. INDUSTRY USE CASES */}
      <SectionWrap bg="#ffffff">
        <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '3.5rem', textAlign: 'center', color: 'var(--lt-text)' }}>Industry proof</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {service.industries.map(ind => (
            <div key={ind.name} style={{ padding: '1.75rem', background: '#F5F0FF', border: '1px solid rgba(124,58,237,0.12)', borderRadius: '1rem', boxShadow: '0 4px 16px rgba(124,58,237,0.03)' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '0.65rem', color: '#1A1040', fontSize: '1.15rem' }}>{ind.name}</h3>
              <div style={{ color: '#22C55E', fontWeight: 900, fontSize: '1.4rem' }}>{ind.result}</div>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 7. RESULTS — Case Studies */}
      <SectionWrap>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '3.5rem', textAlign: 'center', color: 'var(--lt-text)' }}>Real results</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {service.caseStudies.map(cs => (
            <div key={cs.client} style={{ padding: '2.25rem 2rem', background: '#ffffff', border: '1px solid rgba(124,58,237,0.1)', borderRadius: '1.25rem', boxShadow: '0 4px 20px rgba(124,58,237,0.05)' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '1.25rem', color: '#1A1040', fontSize: '1.3rem' }}>{cs.client}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ padding: '0.4rem 0.8rem', background: '#FEF2F2', border: '1px solid #FEE2E2', borderRadius: '0.5rem', color: '#EF4444', fontSize: '0.85rem', fontWeight: 700 }}>
                  Before: {cs.before}
                </div>
                <ArrowRight size={16} color="#94A3B8" />
                <div style={{ padding: '0.4rem 0.8rem', background: '#F0FDF4', border: '1px solid #DCFCE7', borderRadius: '0.5rem', color: '#15803D', fontSize: '0.95rem', fontWeight: 800 }}>
                  After: {cs.after}
                </div>
              </div>
              <span style={{ padding: '0.35rem 0.85rem', background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)', color: '#7C3AED', borderRadius: '0.5rem', fontSize: '0.78rem', fontWeight: 700 }}>{cs.system}</span>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 8. WHAT YOU GET — Outcomes */}
      <SectionWrap bg="rgba(34,197,94,0.04)">
        <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '3.5rem', textAlign: 'center', color: 'var(--lt-text)' }}>What you get</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
          {service.outcomes.map(o => (
            <div key={o} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem', background: '#ffffff', borderRadius: '0.75rem', border: '1px solid rgba(124,58,237,0.1)', boxShadow: '0 4px 12px rgba(124,58,237,0.04)' }}>
              <CheckCircle size={18} color="#22C55E" style={{ flexShrink: 0 }} />
              <span style={{ color: '#334155', fontSize: '0.95rem', fontWeight: 500 }}>{o}</span>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 9. WHY THIS WORKS — Mechanism */}
      <SectionWrap>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '1.5rem', textAlign: 'center', color: 'var(--lt-text)' }}>Why this works</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem', background: '#F5F0FF', border: '1px solid rgba(124,58,237,0.18)', borderRadius: '1.25rem', boxShadow: '0 4px 16px rgba(124,58,237,0.03)' }}>
          <p style={{ color: '#334155', lineHeight: 1.8, fontSize: '1.05rem', margin: 0, fontWeight: 500 }}>{service.mechanism}</p>
        </div>
      </SectionWrap>

      {/* 10. PRICING + GUARANTEE */}
      <SectionWrap bg="rgba(34,197,94,0.04)">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <Shield size={44} color="#15803D" style={{ marginBottom: '1.25rem' }} />
          <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--lt-text)' }}>100% Money-Back Guarantee</h2>
          <p style={{ color: '#4B5563', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            Pricing depends on your scope and goals. We customize every engagement. Start with a free audit — we'll show you the roadmap and exact investment before you commit.
          </p>
          <p style={{ color: '#15803D', fontWeight: 800, fontSize: '1.1rem' }}>If we don't hit the agreed KPIs in the first month, you get your money back. No questions.</p>
        </div>
      </SectionWrap>

      {/* 11. FAQ */}
      <SectionWrap>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 900, marginBottom: '3.5rem', textAlign: 'center', color: 'var(--lt-text)' }}>Frequently asked questions</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {service.faqs.map((faq, i) => (
            <div key={i} style={{ background: '#ffffff', border: `1px solid ${openFaq === i ? '#7C3AED' : 'rgba(124,58,237,0.1)'}`, borderRadius: '1rem', padding: '1.25rem 1.5rem', marginBottom: '1rem', boxShadow: '0 4px 12px rgba(124,58,237,0.03)', cursor: 'pointer', transition: 'all 0.2s' }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', color: '#1A1040', fontWeight: 700, fontSize: '1.05rem', textAlign: 'left' }}>
                {faq.q}
                <span style={{ fontSize: '1.5rem', color: '#7C3AED', marginLeft: '1rem', flexShrink: 0, lineHeight: 1, fontWeight: 500 }}>{openFaq === i ? '−' : '+'}</span>
              </div>
              {openFaq === i && <p style={{ color: '#4B5563', marginTop: '0.75rem', lineHeight: 1.7, fontSize: '0.95rem', borderTop: '1px solid rgba(124,58,237,0.08)', paddingTop: '0.75rem', marginBottom: 0 }}>{faq.a}</p>}
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* INTERNAL LINKS — Related Services */}
      {related.length > 0 && (
        <SectionWrap bg="#ffffff">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '2.5rem', textAlign: 'center', color: 'var(--lt-text)' }}>Related systems</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {related.map(r => (
              <Link key={r.slug} to={`/services/${r.slug}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: '#ffffff', border: '1px solid rgba(124,58,237,0.1)', borderRadius: '0.875rem', textDecoration: 'none', color: '#1A1040', fontWeight: 600, transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(124,58,237,0.04)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#7C3AED50'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.background = '#F5F0FF'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(124,58,237,0.1)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = '#ffffff'; }}>
                {r.title} <ChevronRight size={16} color="#7C3AED" />
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" style={{ color: '#7C3AED', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem' }}>View all 30+ services →</Link>
          </div>
        </SectionWrap>
      )}

      {/* 12. FINAL CTA */}
      <SectionWrap bg="rgba(124,58,237,0.06)">
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', color: 'var(--lt-text)' }}>Ready to build your {service.title.toLowerCase()} system?</h2>
          <p style={{ color: '#4B5563', marginBottom: '2rem', fontSize: '1.1rem' }}>Free audit. No commitment. Just clarity on exactly what to fix.</p>
          <a href={`https://wa.me/917997001700?text=${waMsg}`} target="_blank" rel="noreferrer"
            className="text-white"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1.1rem 2.5rem', background: '#22C55E', borderRadius: '0.75rem', fontWeight: 800, textDecoration: 'none', fontSize: '1.05rem', boxShadow: '0 4px 14px rgba(34,197,94,0.35)' }}>
            Get Free Audit on WhatsApp <ArrowRight size={18} />
          </a>
          <p style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '1.25rem' }}>Takes 30 seconds. No spam. Just real help.</p>
        </div>
      </SectionWrap>
    </div>
  );
};

export default ServicePageTemplate;
