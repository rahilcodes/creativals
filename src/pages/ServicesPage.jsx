import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Zap, Globe, Palette, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  {
    icon: Zap,
    color: '#7C3AED',
    label: 'Marketing & Growth',
    sub: 'Paid Ads · SEO · WhatsApp · Email · Lead Gen',
    services: [
      { name: 'Paid Social Ads', slug: 'paid-social-ads' },
      { name: 'Google Ads & PPC', slug: 'google-ads-ppc' },
      { name: 'Search Engine Optimization', slug: 'search-engine-optimization' },
      { name: 'Local Maps & GBP', slug: 'local-maps-gbp' },
      { name: 'Social Media Management', slug: 'social-media-management' },
      { name: 'Email Marketing', slug: 'email-marketing' },
      { name: 'WhatsApp & SMS Marketing', slug: 'whatsapp-sms-marketing' },
      { name: 'Lead Generation Funnels', slug: 'lead-generation-funnels' },
      { name: 'Conversion Optimization', slug: 'conversion-optimization' },
      { name: 'Influencer Partnerships', slug: 'influencer-partnerships' },
    ],
  },
  {
    icon: Globe,
    color: '#2563EB',
    label: 'Development & Systems',
    sub: 'Websites · Apps · Automations · CRM · AI',
    services: [
      { name: 'Custom Websites', slug: 'custom-websites' },
      { name: 'High-Converting Landing Pages', slug: 'landing-pages' },
      { name: 'E-commerce Stores', slug: 'ecommerce-stores' },
      { name: 'Mobile Applications', slug: 'mobile-applications' },
      { name: 'Web Applications', slug: 'web-applications' },
      { name: 'CRM Management', slug: 'crm-management' },
      { name: 'Workflow Automations', slug: 'workflow-automations' },
      { name: 'API Integrations', slug: 'api-integrations' },
      { name: 'AI Chatbots', slug: 'ai-chatbots' },
      { name: 'Hosting & Server Ops', slug: 'hosting-server-ops' },
    ],
  },
  {
    icon: Palette,
    color: '#DB2777',
    label: 'Branding & Creative',
    sub: 'Identity · Video · Content · Design · Copy',
    services: [
      { name: 'Brand Identity', slug: 'brand-identity' },
      { name: 'Logo Design & Animation', slug: 'logo-design' },
      { name: 'Direct Response Video', slug: 'direct-response-video' },
      { name: 'Short-Form Content', slug: 'short-form-content' },
      { name: 'Social Media Graphics', slug: 'social-media-graphics' },
      { name: 'UI/UX Interface Design', slug: 'ui-ux-design' },
      { name: 'Copywriting & Scripts', slug: 'copywriting-scripts' },
      { name: 'Photography', slug: 'photography' },
      { name: 'Pitch Decks', slug: 'pitch-decks' },
      { name: 'Print & Packaging', slug: 'print-packaging' },
    ],
  },
];

const ServicesPage = () => {
  useSEO({
    title: 'Digital Marketing & SEO Services in Hyderabad | Creativals',
    description: 'From local SEO to paid ads and web development, explore the premium digital marketing services we offer to scale Hyderabad businesses profitably.',
    keywords: 'digital marketing services hyderabad, seo services hyderabad, paid ads hyderabad, web development company hyderabad',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Creativals"
      },
      "areaServed": "Hyderabad",
      "serviceType": "Digital Marketing, SEO, Web Development, Branding"
    }
  });

  return (
    <div className="dark-page" style={{ background: '#080B14', minHeight: '100vh', paddingTop: '80px', color: 'white' }}>
      {/* Hero */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '2rem', fontSize: '0.85rem', color: '#A78BFA', marginBottom: '2rem' }}>
          <Zap size={14} /> 30+ Systems. One Team.
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          We don't offer services.<br />
          <span style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>We build growth systems.</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          Every capability below is designed to work as part of a connected system — not as a standalone campaign. Traffic. Conversion. Closing. That's the loop.
        </p>
        <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: '#7C3AED', color: 'white', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', transition: 'background 0.2s' }}>
          Get a Free System Audit <ArrowRight size={18} />
        </Link>
      </section>

      {/* System Loop Banner */}
      <section style={{ maxWidth: '900px', margin: '0 auto 5rem', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', background: 'rgba(124,58,237,0.07)', border: '1px solid rgba(124,58,237,0.15)', borderRadius: '1rem', padding: '1.5rem 2rem', flexWrap: 'wrap' }}>
          {['Traffic (Ads + SEO)', '→', 'Conversion (Website + Funnel)', '→', 'Closing (WhatsApp + CRM)'].map((s, i) => (
            <span key={i} style={{ color: s === '→' ? '#6B7280' : '#E2D9FF', fontWeight: s === '→' ? 400 : 700, fontSize: '1rem' }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Categories */}
      {CATEGORIES.map((cat) => {
        const Icon = cat.icon;
        return (
          <section key={cat.label} style={{ maxWidth: '1200px', margin: '0 auto 5rem', padding: '0 2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ width: '44px', height: '44px', background: `${cat.color}20`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${cat.color}40` }}>
                <Icon size={22} color={cat.color} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>{cat.label}</h2>
                <p style={{ color: '#6B7280', margin: 0, fontSize: '0.9rem' }}>{cat.sub}</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {cat.services.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '1.25rem 1.5rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '0.875rem',
                    textDecoration: 'none',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${cat.color}15`; e.currentTarget.style.borderColor = `${cat.color}50`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'none'; }}
                >
                  {svc.name}
                  <ChevronRight size={16} color="#6B7280" />
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      {/* Final CTA */}
      <section style={{ textAlign: 'center', padding: '5rem 2rem', background: 'rgba(124,58,237,0.05)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Not sure which system you need?</h2>
        <p style={{ color: '#9CA3AF', marginBottom: '2rem', fontSize: '1.1rem' }}>Tell us your goal. We'll map the exact system in 30 minutes — free.</p>
        <a
          href="https://wa.me/917997001700?text=Hi! I'd like a free system audit for my business."
          target="_blank" rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: '#22C55E', color: 'white', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}
        >
          Book Free Audit on WhatsApp <ArrowRight size={18} />
        </a>
      </section>
    </div>
  );
};

export default ServicesPage;
