import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { ArrowDownToLine, File, Layout, Calculator } from 'lucide-react';

const ResourcesPage = () => {
  useSEO({
    title: 'Digital Marketing Resources & Playbooks | Creativals Hyderabad',
    description: 'Access premium digital marketing resources, SEO playbooks, and growth blueprints from Hyderabad\'s top execution agency.',
    keywords: 'digital marketing resources hyderabad, free seo playbooks, growth marketing guides',
  });

  const resources = [
    {
      title: 'The True-ROAS Calculator',
      type: 'Google Sheet',
      icon: Calculator,
      desc: 'Input your product margins, ad spend, and agency fees to find out your true break-even ROAS required to survive.',
      color: '#10B981'
    },
    {
      title: 'Figma SaaS Wireframes',
      type: 'Figma File',
      icon: Layout,
      desc: '12 high-converting landing page structures mapped out in low-fidelity. Swap the text and hand to your developer.',
      color: '#F43F5E'
    },
    {
      title: 'Cold Email Copy Swipes',
      type: 'PDF Document',
      icon: File,
      desc: 'The exact 4-step sequence we use to get 40% open rates and 8% reply rates in Indian B2B outreach.',
      color: '#3B82F6'
    }
  ];

  return (
    <div className="dark-page" style={{ background: '#080B14', color: 'white', paddingTop: '80px', minHeight: '100vh' }}>
      
      {/* 1. HERO */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          Raw assets for revenue.
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#9CA3AF', lineHeight: 1.7 }}>
          Download the operational templates, financial modeling sheets, and Figma architectures we use daily.
        </p>
      </section>

      {/* 2. RESOURCE CARDS */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {resources.map((res, i) => (
            <div key={i} style={{ padding: '2.5rem', background: '#111827', border: '1px solid #1F2937', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ width: '48px', height: '48px', background: `${res.color}15`, color: res.color, borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <res.icon size={24} />
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '0.3rem 0.75rem', background: 'rgba(255,255,255,0.05)', color: '#9CA3AF', borderRadius: '1rem', textTransform: 'uppercase' }}>
                  {res.type}
                </span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>{res.title}</h3>
              <p style={{ color: '#9CA3AF', lineHeight: 1.6, flex: 1, marginBottom: '2rem' }}>{res.desc}</p>
              
              <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '0.75rem', fontWeight: 700, transition: 'all 0.2s', cursor: 'pointer' }} className="hover:bg-white/10">
                <ArrowDownToLine size={18} /> Access Resource
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ResourcesPage;
