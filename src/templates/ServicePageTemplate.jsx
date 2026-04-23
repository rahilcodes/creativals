import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertTriangle, Zap, Shield, ChevronRight, Target } from 'lucide-react';
import { getRelatedServices } from '../data/allServices';

const SectionWrap = ({ children, id, bg }) => (
  <section id={id} style={{ padding: '5rem 2rem', background: bg || 'transparent', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>{children}</div>
  </section>
);

const ServicePageTemplate = ({ service }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const related = getRelatedServices(service.relatedServices || []);
  const waMsg = encodeURIComponent(`Hi! I'm interested in ${service.title} for my business.`);

  return (
    <div className="dark-page" style={{ background: '#080B14', color: 'white', paddingTop: '80px' }}>

      {/* 1. HERO — Pain + Outcome */}
      <SectionWrap bg="transparent">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '2rem 0 0' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '2rem', fontSize: '0.85rem', color: '#A78BFA', marginBottom: '2rem' }}>
            <Zap size={14} /> {service.category}
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em', whiteSpace: 'pre-line' }}>
            {service.heroHeadline}
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            {service.heroSub}
          </p>
          <a href={`https://wa.me/917997001700?text=${waMsg}`} target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: '#22C55E', color: 'white', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
            Get Free Audit <ArrowRight size={18} />
          </a>
        </div>
      </SectionWrap>

      {/* 2. INSTANT PROOF — Metrics */}
      <SectionWrap>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
          {service.metrics.map(m => (
            <div key={m.label} style={{ textAlign: 'center', padding: '2rem 1rem', background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: '1rem' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#A78BFA', lineHeight: 1 }}>{m.value}</div>
              <div style={{ color: '#6B7280', fontSize: '0.85rem', marginTop: '0.5rem' }}>{m.label}</div>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 3. WHY MOST BUSINESSES FAIL */}
      <SectionWrap>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', textAlign: 'center' }}>Why most businesses fail at this</h2>
        <p style={{ color: '#6B7280', textAlign: 'center', marginBottom: '3rem', fontSize: '1rem' }}>If any of these sound familiar, you're losing money right now.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {service.failReasons.map(f => (
            <div key={f.title} style={{ padding: '1.75rem', background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <AlertTriangle size={18} color="#EF4444" />
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>{f.title}</span>
              </div>
              <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 4. OUR SYSTEM APPROACH */}
      <SectionWrap bg="rgba(124,58,237,0.04)">
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', textAlign: 'center' }}>We don't sell a service. We build a system.</h2>
        <p style={{ color: '#9CA3AF', textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.7 }}>{service.systemApproach}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', background: 'rgba(124,58,237,0.07)', borderRadius: '1rem', padding: '1.5rem 2rem', border: '1px solid rgba(124,58,237,0.15)' }}>
          {['Traffic', '→', 'Conversion', '→', 'Closing'].map((s, i) => (
            <span key={i} style={{ color: s === '→' ? '#6B7280' : '#E2D9FF', fontWeight: s === '→' ? 400 : 700, fontSize: '1.1rem' }}>{s}</span>
          ))}
        </div>
      </SectionWrap>

      {/* 5. HOW IT WORKS — Steps */}
      <SectionWrap>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '3rem', textAlign: 'center' }}>How we build this for you</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {service.systemSteps.map((step, i) => (
            <div key={step.step} style={{ display: 'flex', gap: '2rem', paddingBottom: i < service.systemSteps.length - 1 ? '2.5rem' : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: '44px', height: '44px', background: '#7C3AED', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 900, color: 'white' }}>{i + 1}</div>
                {i < service.systemSteps.length - 1 && <div style={{ width: '2px', flex: 1, background: 'rgba(124,58,237,0.25)', marginTop: '8px' }} />}
              </div>
              <div style={{ paddingTop: '0.5rem' }}>
                <h3 style={{ fontWeight: 800, marginBottom: '0.5rem', fontSize: '1.15rem' }}>{step.step}</h3>
                <p style={{ color: '#9CA3AF', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 6. INDUSTRY USE CASES */}
      <SectionWrap bg="rgba(255,255,255,0.02)">
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '3rem', textAlign: 'center' }}>Industry proof</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {service.industries.map(ind => (
            <div key={ind.name} style={{ padding: '1.75rem', background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)', borderRadius: '1rem' }}>
              <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{ind.name}</h3>
              <div style={{ color: '#22C55E', fontWeight: 800, fontSize: '1.3rem' }}>{ind.result}</div>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 7. RESULTS — Case Studies */}
      <SectionWrap>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '3rem', textAlign: 'center' }}>Real results</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {service.caseStudies.map(cs => (
            <div key={cs.client} style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.25rem' }}>
              <h3 style={{ fontWeight: 800, marginBottom: '1rem' }}>{cs.client}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <span style={{ color: '#EF4444', fontWeight: 700 }}>{cs.before}</span>
                <ArrowRight size={16} color="#6B7280" />
                <span style={{ color: '#22C55E', fontWeight: 900, fontSize: '1.2rem' }}>{cs.after}</span>
              </div>
              <span style={{ padding: '0.3rem 0.75rem', background: 'rgba(124,58,237,0.12)', color: '#A78BFA', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 600 }}>{cs.system}</span>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 8. WHAT YOU GET — Outcomes */}
      <SectionWrap bg="rgba(34,197,94,0.03)">
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '3rem', textAlign: 'center' }}>What you get</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
          {service.outcomes.map(o => (
            <div key={o} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: '0.75rem', border: '1px solid rgba(255,255,255,0.06)' }}>
              <CheckCircle size={18} color="#22C55E" style={{ flexShrink: 0 }} />
              <span style={{ color: '#D1D5DB', fontSize: '0.95rem' }}>{o}</span>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 9. WHY THIS WORKS — Mechanism */}
      <SectionWrap>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>Why this works</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem', background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.15)', borderRadius: '1.25rem' }}>
          <p style={{ color: '#D1D5DB', lineHeight: 1.8, fontSize: '1.05rem', margin: 0 }}>{service.mechanism}</p>
        </div>
      </SectionWrap>

      {/* 10. PRICING + GUARANTEE */}
      <SectionWrap bg="rgba(34,197,94,0.03)">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <Shield size={40} color="#22C55E" style={{ marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>100% Money-Back Guarantee</h2>
          <p style={{ color: '#9CA3AF', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Pricing depends on your scope and goals. We customize every engagement. Start with a free audit — we'll show you the roadmap and exact investment before you commit.
          </p>
          <p style={{ color: '#22C55E', fontWeight: 700 }}>If we don't hit the agreed KPIs in the first month, you get your money back. No questions.</p>
        </div>
      </SectionWrap>

      {/* 11. FAQ */}
      <SectionWrap>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '3rem', textAlign: 'center' }}>Frequently asked questions</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {service.faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', background: 'none', border: 'none', color: 'white', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                {faq.q}
                <span style={{ fontSize: '1.5rem', color: '#7C3AED', marginLeft: '1rem', flexShrink: 0, lineHeight: 1 }}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p style={{ color: '#9CA3AF', marginTop: '1rem', lineHeight: 1.7, fontSize: '0.95rem' }}>{faq.a}</p>}
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* INTERNAL LINKS — Related Services */}
      {related.length > 0 && (
        <SectionWrap bg="rgba(255,255,255,0.02)">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Related systems</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {related.map(r => (
              <Link key={r.slug} to={`/services/${r.slug}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '0.875rem', textDecoration: 'none', color: 'white', fontWeight: 600, transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#7C3AED50'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'none'; }}>
                {r.title} <ChevronRight size={16} color="#6B7280" />
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/services" style={{ color: '#A78BFA', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>View all 30+ services →</Link>
          </div>
        </SectionWrap>
      )}

      {/* 12. FINAL CTA */}
      <SectionWrap bg="rgba(124,58,237,0.06)">
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Ready to build your {service.title.toLowerCase()} system?</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '2rem', fontSize: '1.1rem' }}>Free audit. No commitment. Just clarity on exactly what to fix.</p>
          <a href={`https://wa.me/917997001700?text=${waMsg}`} target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1.1rem 2.5rem', background: '#22C55E', color: 'white', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem' }}>
            Get Free Audit on WhatsApp <ArrowRight size={18} />
          </a>
          <p style={{ color: '#6B7280', fontSize: '0.8rem', marginTop: '1rem' }}>Takes 30 seconds. No spam. Just real help.</p>
        </div>
      </SectionWrap>
    </div>
  );
};

export default ServicePageTemplate;
