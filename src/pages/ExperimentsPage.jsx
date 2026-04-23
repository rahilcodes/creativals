import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, TestTubeDiagonal, FlaskConical, Beaker } from 'lucide-react';

const ExperimentsPage = () => {
  useSEO({
    title: 'Growth Experiments | Internal Testing | Creativals',
    description: 'We don\'t guess. We test. Read about our active marketing experiments, A/B testing methodologies, and conversion insights.',
  });

  const waMsg = encodeURIComponent('Hi! I want to run a conversion experiment on my landing pages.');

  return (
    <div className="dark-page" style={{ background: '#080B14', color: 'white', paddingTop: '80px', minHeight: '100vh' }}>
      
      {/* 1. HERO */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.3)', borderRadius: '2rem', fontSize: '0.85rem', color: '#FB923C', marginBottom: '2rem' }}>
          <TestTubeDiagonal size={14} /> The Innovation Hub
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          We don't guess.<br />We experiment.
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#9CA3AF', lineHeight: 1.7 }}>
          Marketing without mathematical testing is just gambling. Explore the live experiments our growth engineers are running across thousands of dollars of daily ad spend.
        </p>
      </section>

      {/* 2. RECENT EXPERIMENTS LOG */}
      <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div style={{ padding: '2.5rem', background: '#111827', border: '1px solid #1F2937', borderRadius: '1.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', background: 'rgba(249,115,22,0.1)', color: '#FB923C', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <FlaskConical size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '0.3rem 0.75rem', background: '#374151', color: '#D1D5DB', borderRadius: '1rem', textTransform: 'uppercase' }}>Completed</span>
                <span style={{ color: '#9CA3AF', fontSize: '0.85rem', fontWeight: 600 }}>March 2026</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>Video Length vs Booked Meetings</h3>
              <p style={{ color: '#D1D5DB', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                <strong>Hypothesis:</strong> Shorter TikTok-style VSLs (Video Sales Letters) will outperform deep 10-minute long-form VSLs for high-ticket B2B Enterprise offers.
              </p>
              <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', padding: '1.5rem', borderRadius: '1rem' }}>
                <h4 style={{ color: '#4ADE80', fontWeight: 800, marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase' }}>The Result</h4>
                <p style={{ color: 'white', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>Hypothesis Invalidated. The 10-minute deep-dive VSL booked 3x more meetings than the 60-second "punchy" version because high-ticket buyers required intense logical justification before talking to sales.</p>
              </div>
            </div>
          </div>

          <div style={{ padding: '2.5rem', background: '#111827', border: '1px solid #1F2937', borderRadius: '1.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ width: '48px', height: '48px', background: 'rgba(249,115,22,0.1)', color: '#FB923C', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Beaker size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '0.3rem 0.75rem', background: 'rgba(249,115,22,0.1)', color: '#FB923C', borderRadius: '1rem', textTransform: 'uppercase' }}>Ongoing</span>
                <span style={{ color: '#9CA3AF', fontSize: '0.85rem', fontWeight: 600 }}>April 2026</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>WhatsApp API vs Email Nurture</h3>
              <p style={{ color: '#D1D5DB', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                <strong>Hypothesis:</strong> Shifting the primary lead nurture sequence from an ActiveCampaign Email Flow to an automated n8n WhatsApp Flow will increase demo show-up rates by 40%. Data is currently collecting across 1,200 leads.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CTA */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Let's test an angle for you.</h2>
          <a href={`https://wa.me/917997001700?text=${waMsg}`} target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', background: '#F97316', color: 'white', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem', transition: 'all 0.2s' }}>
            Request an Audit <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default ExperimentsPage;
