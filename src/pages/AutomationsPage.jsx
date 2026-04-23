import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Bot, Workflow, MessageCircle, ShieldCheck } from 'lucide-react';

const AutomationsPage = () => {
  useSEO({
    title: 'Business Automations | n8n & WhatsApp Flows | Creativals',
    description: 'We replace human error with code. Explore our backend automation architectures that handle lead routing, WhatsApp nurturing, and CRM sync.',
  });

  const waMsg = encodeURIComponent('Hi! I want to automate my sales backend and lead routing.');

  return (
    <div className="dark-page" style={{ background: '#080B14', color: 'white', paddingTop: '80px', minHeight: '100vh' }}>
      
      {/* 1. HERO */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(236,72,153,0.12)', border: '1px solid rgba(236,72,153,0.3)', borderRadius: '2rem', fontSize: '0.85rem', color: '#F472B6', marginBottom: '2rem' }}>
          <Bot size={14} /> Backend Architecture
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          Stop relying on humans<br />for robotic tasks.
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#9CA3AF', lineHeight: 1.7 }}>
          If your sales team is manually entering leads into a spreadsheet, you are losing money. We build aggressive n8n and Zapier automations to eliminate friction.
        </p>
      </section>

      {/* 2. AUTOMATION FLOWS */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          
          <div style={{ padding: '3rem', background: '#111827', border: '1px solid #1F2937', borderRadius: '1.5rem', position: 'relative', overflow: 'hidden' }}>
            <Workflow size={120} color="rgba(255,255,255,0.02)" style={{ position: 'absolute', right: '-2rem', bottom: '-2rem' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ color: '#F472B6', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Flow Type 01</div>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>Zero-Delay Lead Routing</h3>
              <p style={{ color: '#D1D5DB', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '600px', marginBottom: '2rem' }}>
                A lead submits a Facebook Lead Form. Within 3 seconds: 
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '1rem 1.5rem', borderRadius: '0.75rem' }}>
                  <ShieldCheck size={20} color="#34D399" /> <span>Lead is instantly pushed to your CRM</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '1rem 1.5rem', borderRadius: '0.75rem' }}>
                  <ShieldCheck size={20} color="#34D399" /> <span>Sales rep gets an immediate Slack/WhatsApp ping</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '1rem 1.5rem', borderRadius: '0.75rem' }}>
                  <ShieldCheck size={20} color="#34D399" /> <span>Lead receives an automated, personalized welcome email</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ padding: '3rem', background: '#111827', border: '1px solid #1F2937', borderRadius: '1.5rem', position: 'relative', overflow: 'hidden' }}>
            <MessageCircle size={120} color="rgba(255,255,255,0.02)" style={{ position: 'absolute', right: '-2rem', bottom: '-2rem' }} />
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ color: '#F472B6', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>Flow Type 02</div>
              <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem', color: 'white' }}>WhatsApp API Nurturing</h3>
              <p style={{ color: '#D1D5DB', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '600px' }}>
                Email open rates are dying. We integrate official WhatsApp Cloud APIs to send automated 5-day educational nurture sequences directly into your lead's inbox, enjoying 90%+ open rates.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CTA */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Stop leaking leads.</h2>
          <a href={`https://wa.me/917997001700?text=${waMsg}`} target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', background: '#EC4899', color: 'white', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem', transition: 'all 0.2s' }}>
            Audit My Workflows <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default AutomationsPage;
