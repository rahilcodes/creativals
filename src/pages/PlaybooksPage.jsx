import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, BookOpen, Key, Link2 } from 'lucide-react';

const PlaybooksPage = () => {
  useSEO({
    title: 'Growth Playbooks & Frameworks | Creativals',
    description: 'Steal our exact step-by-step systems. Deep tactical breakdowns of how we scale B2B, Healthcare, and D2C brands.',
  });

  const waMsg = encodeURIComponent('Hi! I want to download the B2B SaaS Lead Generation Playbook.');

  const playbooks = [
    {
      title: 'The B2B Cold Outreach Architecture',
      subtitle: 'For Enterprise SaaS',
      desc: 'How we build high-volume LinkedIn & Email sequences bypassing spam filters, generating 5+ VP-level meetings weekly.',
      readTime: '12 min read',
    },
    {
      title: 'The Hospitality Direct Booking Funnel',
      subtitle: 'For Hotels & Resorts',
      desc: 'The exact Meta Ad structure and landing page framework we use to steal bookings back from MakeMyTrip and Agoda.',
      readTime: '15 min read',
    },
    {
      title: 'The Real Estate WhatsApp Closing Rig',
      subtitle: 'For Property Developers',
      desc: 'How to stop cold calling internet leads and use API-triggered WhatsApp sequences to qualify property buyers on autopilot.',
      readTime: '10 min read',
    }
  ];

  return (
    <div className="dark-page" style={{ background: '#080B14', color: 'white', paddingTop: '80px', minHeight: '100vh' }}>
      
      {/* 1. HERO */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '2rem', fontSize: '0.85rem', color: '#F87171', marginBottom: '2rem' }}>
          <BookOpen size={14} /> Open-Source Growth
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          Steal our frameworks.
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#9CA3AF', lineHeight: 1.7 }}>
          We don't believe in hoarding secrets. Here are the exact execution playbooks we use internally to build multi-million dollar revenue engines.
        </p>
      </section>

      {/* 2. PLAYBOOKS GRID */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {playbooks.map((book, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', padding: '3rem', background: '#111827', border: '1px solid #1F2937', borderRadius: '1.5rem', alignItems: 'center', transition: 'all 0.2s', cursor: 'pointer' }} className="hover:border-red-500">
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '0.4rem 0.8rem', background: 'rgba(239,68,68,0.1)', color: '#F87171', borderRadius: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {book.subtitle}
                  </span>
                  <span style={{ color: '#6B7280', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Key size={14} /> {book.readTime}
                  </span>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', color: 'white', letterSpacing: '-0.02em' }}>{book.title}</h3>
                <p style={{ color: '#9CA3AF', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, maxWidth: '600px' }}>{book.desc}</p>
              </div>
              <div style={{ width: '50px', height: '50px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Link2 size={24} color="#9CA3AF" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Want us to deploy this for you?</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Why read the manual when the architects can build it for you?</p>
          <a href={`https://wa.me/917997001700?text=${waMsg}`} target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', background: '#EF4444', color: 'white', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem', transition: 'all 0.2s' }}>
            Book a Strategy Call <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default PlaybooksPage;
