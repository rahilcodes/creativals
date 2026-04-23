import React from 'react';
import { Check } from 'lucide-react';

const Offer = () => (
  <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#0a0a0a', padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
    {/* Ambient Glow */}
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(10,10,10,0) 70%)', zIndex: 0 }} />
    
    <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', background: '#111827', borderRadius: '1.5rem', padding: '4rem 3rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(239, 68, 68, 0.1)', color: '#FCA5A5', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          <span style={{ width: '8px', height: '8px', background: '#EF4444', borderRadius: '50%', boxShadow: '0 0 10px #EF4444' }} /> Limited Offer
        </div>
        
        <h2 style={{ color: 'white', fontSize: '3rem', fontWeight: 800, margin: '0 0 1rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Get Your Free Business <br className="mobile-hidden" />
          <span style={{ color: '#34D399' }}>Growth Plan</span>
        </h2>
        
        <p style={{ color: '#9CA3AF', fontSize: '1.15rem', lineHeight: 1.6, margin: '0 auto 3rem', maxWidth: '600px' }}>
          Tell us about your business. We'll audit your current marketing and give you a FREE, custom growth roadmap — no strings attached.
        </p>

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 auto 3rem', maxWidth: '450px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <li style={{ color: '#D1D5DB', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}><Check size={20} color="#10B981" style={{flexShrink: 0}} /> Free marketing audit (worth ₹5,000)</li>
          <li style={{ color: '#D1D5DB', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}><Check size={20} color="#10B981" style={{flexShrink: 0}} /> Custom growth strategy for your business</li>
          <li style={{ color: '#D1D5DB', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}><Check size={20} color="#10B981" style={{flexShrink: 0}} /> Competitor analysis included</li>
          <li style={{ color: '#D1D5DB', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}><Check size={20} color="#10B981" style={{flexShrink: 0}} /> No commitment. No pressure. No BS.</li>
        </ul>

        <a
          href="https://wa.me/917997001700?text=Hi! I want to claim my Free Business Growth Plan."
          target="_blank"
          rel="noreferrer"
          className="hover-up"
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#22C55E', color: 'white', padding: '1.25rem 3rem', borderRadius: '0.75rem', textDecoration: 'none', transition: 'all 0.2s', fontWeight: 800, fontSize: '1.15rem', boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)', width: '100%', maxWidth: '350px', marginBottom: '1rem' }}
        >
          Book My Free Growth Audit
        </a>
        
        <div style={{ color: '#10B981', fontWeight: 600, fontSize: '0.95rem', marginBottom: '3rem' }}>
          Takes less than 30 seconds. No spam. Just real help.
        </div>

        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left' }}>
          <h3 style={{ fontSize: '1.2rem', margin: '0 0 1rem', color: 'white', fontWeight: 700 }}>What happens next?</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#9CA3AF', fontSize: '0.95rem', lineHeight: 1.5 }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}><strong style={{ color: '#D1D5DB' }}>1.</strong> You send us a quick WhatsApp message.</div>
            <div style={{ display: 'flex', gap: '0.75rem' }}><strong style={{ color: '#D1D5DB' }}>2.</strong> We silently analyze your brand's current online footprint.</div>
            <div style={{ display: 'flex', gap: '0.75rem' }}><strong style={{ color: '#D1D5DB' }}>3.</strong> We deliver a 100% free, bespoke 30-day growth plan.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Offer;
