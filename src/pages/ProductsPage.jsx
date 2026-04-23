import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, CodeSquare, Blocks, Zap, LayoutTemplate } from 'lucide-react';

const ProductsPage = () => {
  useSEO({
    title: 'Our Internal Products & Tools | Creativals',
    description: 'We build proprietary software and internal tools to give our clients an unfair advantage. Explore our ecosystem of products.',
  });

  const waMsg = encodeURIComponent('Hi! I want to learn more about the internal tools you build for clients.');

  const products = [
    {
      name: 'OmniTrack Pixel',
      icon: CodeSquare,
      desc: 'Our proprietary tracking script that bypasses iOS14 restrictions using Server-Side Tagging to recover 30%+ of "lost" ad attribution data.',
      status: 'Live',
      color: '#3B82F6'
    },
    {
      name: 'LeadVelocity CRM',
      icon: Blocks,
      desc: 'A pre-configured GoHighLevel snapshot customized for Indian sales teams. Features built-in WhatsApp API and predictive lead scoring.',
      status: 'Live',
      color: '#10B981'
    },
    {
      name: 'CreativeBrain UI',
      icon: LayoutTemplate,
      desc: 'An internal library of 500+ high-converting landing page blocks tested across $5M+ in ad spend. We deploy winning layouts in minutes.',
      status: 'Internal',
      color: '#8B5CF6'
    }
  ];

  return (
    <div className="dark-page" style={{ background: '#080B14', color: 'white', paddingTop: '80px', minHeight: '100vh' }}>
      
      {/* 1. HERO */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '2rem', fontSize: '0.85rem', color: '#60A5FA', marginBottom: '2rem' }}>
          <CodeSquare size={14} /> Technology & Engineering
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          We don't just use software.<br />We build it.
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#9CA3AF', lineHeight: 1.7 }}>
          To guarantee scale, you need an unfair advantage. We engineer proprietary internal tools, tracking scripts, and automation architectures that ordinary marketing agencies can't touch.
        </p>
      </section>

      {/* 2. PRODUCT CARDS */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {products.map((prod, i) => (
            <div key={i} style={{ padding: '2.5rem', background: '#111827', border: '1px solid #1F2937', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ width: '50px', height: '50px', background: `${prod.color}20`, color: prod.color, borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <prod.icon size={26} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '0.3rem 0.75rem', background: prod.status === 'Live' ? 'rgba(16,185,129,0.1)' : 'rgba(139,92,246,0.1)', color: prod.status === 'Live' ? '#34D399' : '#A78BFA', borderRadius: '1rem', textTransform: 'uppercase' }}>
                  {prod.status}
                </span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>{prod.name}</h3>
              <p style={{ color: '#9CA3AF', lineHeight: 1.6, flex: 1 }}>{prod.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(180deg, rgba(59,130,246,0.08) 0%, transparent 100%)', padding: '4rem 2rem', borderRadius: '2rem', border: '1px solid rgba(59,130,246,0.2)' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Deploy our tech stack in your business.</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Get a free technical audit to see how our engineering can drop your acquisition costs.</p>
          <a href={`https://wa.me/917997001700?text=${waMsg}`} target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', background: '#3B82F6', color: 'white', borderRadius: '0.75rem', fontWeight: 800, textDecoration: 'none', fontSize: '1.05rem', transition: 'all 0.2s', boxShadow: '0 10px 25px -5px rgba(59,130,246,0.4)' }}>
            Get Technical Audit <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default ProductsPage;
