import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Star, Clock, Trophy } from 'lucide-react';

const SuccessStoriesPage = () => {
  useSEO({
    title: 'Success Stories | Transformations & Timelines | Creativals',
    description: 'Read the narrative timelines of how Indian businesses evolved from stagnant sales to market dominance through our growth systems.',
  });

  const waMsg = encodeURIComponent('Hi! I want to map out a growth timeline for my business.');

  const stories = [
    {
      client: 'The 100-Crore D2C Pivot',
      category: 'E-commerce Transformation',
      excerpt: 'How an offline retail brand transitioned to 100% online sales during the pandemic and scaled to 100CR ARR.',
      timeline: [
        { month: 'Month 1', action: 'Complete Shopify architecture redesign and Facebook pixel restructuring.' },
        { month: 'Month 3', action: 'Hit initial ROAS of 2.2x. Began aggressive creative testing for scale.' },
        { month: 'Month 6', action: 'Scaled ad spend to ₹10L/day while maintaining 3.5x ROAS. Launched retention email flows.' },
        { month: 'Year 1', action: 'Crossed 100CR ARR marker. 40% of revenue now driven by automated CRM flows.' }
      ],
      wins: ['Zero to 100CR ARR', '40% Retention Revenue', '3.5x Sustained ROAS']
    },
    {
      client: 'The B2B SaaS Monopolization',
      category: 'Enterprise Sales Pipeline',
      excerpt: 'Taking a bootstrapped SaaS company from 2 inbound demos a month to a multi-million dollar acquisition offer.',
      timeline: [
        { month: 'Month 1', action: 'Built "The Ultimate Compliance Guide" whitepaper and launched LinkedIn ABM.' },
        { month: 'Month 2', action: 'Generated 1,200 targeted VP-level leads. Nurture sequence activated.' },
        { month: 'Month 4', action: 'Sales team overwhelmed. Hired 4 new SDRs to handle the 50+ inbound demo requests/mo.' },
        { month: 'Month 8', action: 'Company acquired by US private equity firm based on pipeline velocity.' }
      ],
      wins: ['50+ Consults/mo', 'Acquisition Exit', 'Zero Cold Calls']
    }
  ];

  return (
    <div className="dark-page" style={{ background: '#080B14', color: 'white', paddingTop: '80px', minHeight: '100vh' }}>
      
      {/* 1. HERO */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(234,179,8,0.12)', border: '1px solid rgba(234,179,8,0.3)', borderRadius: '2rem', fontSize: '0.85rem', color: '#FDE047', marginBottom: '2rem' }}>
          <Star size={14} /> Narrative Transformations
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          The anatomy of<br />market dominance.
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#9CA3AF', lineHeight: 1.7 }}>
          Growth doesn't happen overnight. It happens systematically, month-by-month. Here are the timelines of our most aggressive client transformations.
        </p>
      </section>

      {/* 2. STORY CARDS & TIMELINE */}
      <section style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {stories.map((story, i) => (
            <div key={i} style={{ padding: '3rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1.5rem' }}>
              
              <div style={{ marginBottom: '3rem' }}>
                <div style={{ color: '#EAB308', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>{story.category}</div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, margin: '0 0 1rem', color: 'white' }}>{story.client}</h2>
                <p style={{ color: '#D1D5DB', fontSize: '1.15rem', lineHeight: 1.6, margin: 0, maxWidth: '700px' }}>{story.excerpt}</p>
              </div>

              {/* TIMELINE */}
              <div style={{ background: '#0B0F19', padding: '2.5rem', borderRadius: '1.25rem', border: '1px solid #1F2937', marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Clock size={20} color="#EAB308" /> Growth Timeline
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {story.timeline.map((point, j) => (
                    <div key={j} style={{ display: 'flex', gap: '1.5rem' }}>
                      <div style={{ color: '#EAB308', fontWeight: 900, fontSize: '0.9rem', textTransform: 'uppercase', minWidth: '80px', paddingTop: '0.2rem' }}>
                        {point.month}
                      </div>
                      <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', width: '2px' }} />
                      <div style={{ color: '#9CA3AF', lineHeight: 1.6, fontSize: '1.05rem' }}>
                        {point.action}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WINS */}
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Trophy size={20} color="#22C55E" /> Key Outcomes
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  {story.wins.map((win, k) => (
                    <span key={k} style={{ padding: '0.75rem 1.25rem', background: 'rgba(34,197,94,0.1)', color: '#4ADE80', borderRadius: '0.75rem', fontWeight: 700, fontSize: '0.95rem', border: '1px solid rgba(34,197,94,0.2)' }}>
                      {win}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(234,179,8,0.08) 0%, transparent 100%)', padding: '4rem 2rem', borderRadius: '2rem', border: '1px solid rgba(234,179,8,0.2)' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Map out your growth timeline.</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Let's build a systematic, month-by-month roadmap for your revenue expansion.</p>
          <a href={`https://wa.me/917997001700?text=${waMsg}`} target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', background: '#EAB308', color: '#111827', borderRadius: '0.75rem', fontWeight: 800, textDecoration: 'none', fontSize: '1.05rem', transition: 'all 0.2s' }}>
            Book Your Free Audit <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default SuccessStoriesPage;
