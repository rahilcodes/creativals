import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Building, BookOpen, ShoppingCart, Utensils, Heart, Briefcase, Home, Dumbbell } from 'lucide-react';

const INDUSTRIES = [
  {
    icon: Building,
    name: 'Hotels & Resorts',
    tagline: 'Drive direct bookings. Reduce OTA dependency.',
    problem: 'Losing 30-40% revenue to OTAs every month.',
    result: '+180% direct bookings',
    services: ['Google Ads', 'Booking Funnel', 'WhatsApp CRM'],
    color: '#7C3AED',
    slug: 'hotels-resorts',
  },
  {
    icon: BookOpen,
    name: 'Education & Coaching',
    tagline: 'Fill seats. Reduce cost per admission.',
    problem: 'Leads going cold because of zero follow-up system.',
    result: '4x more enrolments',
    services: ['Meta Lead Ads', 'WhatsApp Automation', 'Nurture Sequences'],
    color: '#2563EB',
    slug: 'education',
  },
  {
    icon: ShoppingCart,
    name: 'E-Commerce',
    tagline: 'Fix ROAS. Increase repeat buyers.',
    problem: 'Spending on ads with 1.2x ROAS and no retention.',
    result: '3.5x average ROAS',
    services: ['Meta Ads', 'Email Flows', 'Abandoned Cart WhatsApp'],
    color: '#DB2777',
    slug: 'ecommerce',
  },
  {
    icon: Utensils,
    name: 'Restaurants & Cafes',
    tagline: 'Pack more tables. Build repeat customers.',
    problem: 'No online presence. Zero loyalty system.',
    result: '60% more walk-ins',
    services: ['Google Maps', 'Instagram Ads', 'WhatsApp Loyalty'],
    color: '#F59E0B',
    slug: 'restaurants',
  },
  {
    icon: Heart,
    name: 'Healthcare & Clinics',
    tagline: 'Fill your appointment calendar every week.',
    problem: 'Generic ads reaching the wrong audience.',
    result: '2.8x appointment bookings',
    services: ['Google Ads', 'Local SEO', 'Appointment Funnel'],
    color: '#10B981',
    slug: 'healthcare',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    tagline: 'Generate qualified leads. Not tyre-kickers.',
    problem: 'Getting leads that never convert to clients.',
    result: '5x more qualified leads',
    services: ['LinkedIn Ads', 'SEO Content', 'Lead Qualification Funnel'],
    color: '#6366F1',
    slug: 'professional-services',
  },
  {
    icon: Home,
    name: 'Real Estate',
    tagline: 'More site visits. More closings.',
    problem: 'High cost per lead with low-intent buyers.',
    result: '3x site visit bookings',
    services: ['Meta Ads', 'WhatsApp Bot', 'Virtual Tour Funnel'],
    color: '#EF4444',
    slug: 'real-estate',
  },
  {
    icon: Dumbbell,
    name: 'Fitness & Wellness',
    tagline: 'Fill memberships. Reduce churn.',
    problem: 'High member dropout and no referral system.',
    result: '70% membership growth',
    services: ['Instagram Ads', 'Referral System', 'WhatsApp Retention'],
    color: '#F97316',
    slug: 'fitness',
  },
];

const IndustriesPage = () => {
  useSEO({
    title: 'Industry-Specific Marketing in Hyderabad | Creativals',
    description: 'We build custom growth systems for Hotels, Real Estate, Healthcare, and Education in Hyderabad. See how we dominate your specific industry.',
    keywords: 'industry marketing hyderabad, b2b marketing hyderabad, real estate marketing hyderabad, hotel marketing hyderabad',
  });

  return (
    <div className="dark-page" style={{ background: '#080B14', minHeight: '100vh', paddingTop: '80px', color: 'white' }}>
      {/* Hero */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: '2rem', fontSize: '0.85rem', color: '#A78BFA', marginBottom: '2rem' }}>
          8 Industries. 120+ Brands Grown.
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          Generic marketing fails.<br />
          <span style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>We speak your industry.</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#9CA3AF', lineHeight: 1.7 }}>
          Every industry has a different customer journey, a different sales cycle, and a different way people decide to buy. We've built systems for all of it.
        </p>
      </section>

      {/* Industries Grid */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 5rem', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.name}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderRadius: '1.25rem',
                  padding: '2rem',
                  transition: 'all 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${ind.color}50`; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 20px 40px -10px ${ind.color}20`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{ width: '44px', height: '44px', background: `${ind.color}20`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${ind.color}40`, flexShrink: 0 }}>
                    <Icon size={20} color={ind.color} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, margin: 0 }}>{ind.name}</h3>
                    <p style={{ color: '#6B7280', margin: 0, fontSize: '0.85rem' }}>{ind.tagline}</p>
                  </div>
                </div>
                <p style={{ color: '#9CA3AF', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                  <strong style={{ color: '#E5E7EB' }}>Common problem: </strong>{ind.problem}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {ind.services.map(s => (
                    <span key={s} style={{ padding: '0.3rem 0.7rem', background: `${ind.color}15`, color: ind.color, borderRadius: '1rem', fontSize: '0.78rem', fontWeight: 600, border: `1px solid ${ind.color}30` }}>{s}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ color: '#22C55E', fontWeight: 800, fontSize: '0.95rem' }}>{ind.result}</span>
                  <a
                    href={`https://wa.me/917997001700?text=Hi! I run a business in the ${ind.name} industry and want a free audit.`}
                    target="_blank" rel="noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: ind.color, fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}
                  >
                    Get audit <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '5rem 2rem', background: 'rgba(124,58,237,0.05)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Your industry isn't listed?</h2>
        <p style={{ color: '#9CA3AF', marginBottom: '2rem', fontSize: '1.1rem' }}>Tell us what you do. If there's growth to be had, we'll find it.</p>
        <a
          href="https://wa.me/917997001700?text=Hi! I want to discuss growth for my business."
          target="_blank" rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: '#7C3AED', color: 'white', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none' }}
        >
          Let's Talk <ArrowRight size={18} />
        </a>
      </section>
    </div>
  );
};

export default IndustriesPage;
