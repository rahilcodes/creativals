import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, CheckCircle, Shield, Clock, Star } from 'lucide-react';

const TIERS = [
  {
    name: 'Starter System',
    price: '₹25,000',
    period: '/month',
    desc: 'For businesses just starting to build their digital presence.',
    badge: '',
    color: '#6B7280',
    features: [
      '1 Core Marketing Channel',
      'Landing Page Setup',
      'WhatsApp Follow-up System',
      'Monthly Performance Report',
      'Dedicated Account Manager',
    ],
    cta: 'Start with Starter',
    whatsapp: 'Hi! I\'m interested in the Starter System plan.',
  },
  {
    name: 'Growth Engine',
    price: '₹55,000',
    period: '/month',
    desc: 'For businesses ready to scale leads and close more deals.',
    badge: 'Most Popular',
    color: '#7C3AED',
    features: [
      '3 Marketing Channels (Ads + SEO + Social)',
      'High-Converting Landing Page',
      'Full WhatsApp + CRM System',
      'Email/WhatsApp Nurture Flows',
      'Weekly Performance Reports',
      'A/B Testing & Optimisation',
      'Priority Support',
    ],
    cta: 'Get Growth Engine',
    whatsapp: 'Hi! I\'m interested in the Growth Engine plan.',
  },
  {
    name: 'Full Stack System',
    price: 'Custom',
    period: '',
    desc: 'For businesses that want the complete growth infrastructure.',
    badge: 'Best for Scaling',
    color: '#22C55E',
    features: [
      'All Marketing Channels',
      'Custom Website or App',
      'Full Automation + CRM Build',
      'AI Chatbot Integration',
      'Dedicated Growth Team',
      'Bi-weekly Strategy Calls',
      'Quarterly Business Review',
      '100% Money-Back Guarantee',
    ],
    cta: 'Get Custom Proposal',
    whatsapp: 'Hi! I want to discuss the Full Stack System custom plan.',
  },
];

const FAQS = [
  { q: 'What is included in the free audit?', a: 'We review your current ads, website, follow-up system, and competitor positioning. You get a clear breakdown of what\'s leaking money and a roadmap to fix it — completely free, no obligation.' },
  { q: 'Do you work on a contract?', a: 'We work month-to-month after an initial 3-month onboarding period. This keeps us accountable to deliver results — not lock you into a long-term contract with no performance pressure.' },
  { q: 'What if I don\'t see results?', a: 'We offer a 100% money-back guarantee on our first month if we don\'t hit the agreed KPIs. We stand behind our systems.' },
  { q: 'Is pricing negotiable?', a: 'Every plan is structured on scope. Tell us your budget and your goal — we\'ll see if we can build a system that fits. We prefer a smaller scope that delivers real ROI over a full package that underperforms.' },
  { q: 'What industries do you work with?', a: 'Hotels, restaurants, schools, clinics, e-commerce, real estate, fitness, and professional services. We specialize in systems for businesses that sell high-intent products or services with a real sales process.' },
];

const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useSEO({
    title: 'Digital Marketing Packages & Pricing Hyderabad | Creativals',
    description: 'Transparent digital marketing pricing for Hyderabad businesses. No hidden fees, no long-term traps. Get a massive ROI with our growth packages.',
    keywords: 'digital marketing packages hyderabad, seo pricing hyderabad, marketing agency cost hyderabad',
  });

  return (
    <div className="dark-page" style={{ background: '#080B14', minHeight: '100vh', paddingTop: '80px', color: 'white' }}>
      {/* Hero */}
      <section style={{ padding: '6rem 2rem 3rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '2rem', fontSize: '0.85rem', color: '#22C55E', marginBottom: '2rem' }}>
          <Shield size={14} /> 100% Money-Back Guarantee
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          Pay for results.<br />
          <span style={{ color: '#22C55E' }}>Not for promises.</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#9CA3AF', lineHeight: 1.7 }}>
          No hidden fees. No 12-month lockdowns. Every plan starts with a free audit so you know exactly what you're investing in.
        </p>
      </section>

      {/* Trust Badges */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '4rem', padding: '0 2rem' }}>
        {[
          { icon: Shield, text: 'Money-Back Guarantee' },
          { icon: Clock, text: 'Month-to-Month After 3 Months' },
          { icon: Star, text: 'Free Audit Included' },
        ].map(({ icon: Icon, text }) => (
          <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9CA3AF', fontSize: '0.9rem' }}>
            <Icon size={16} color="#22C55E" /> {text}
          </div>
        ))}
      </div>

      {/* Pricing Tiers */}
      <section style={{ maxWidth: '1100px', margin: '0 auto 5rem', padding: '0 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              style={{
                background: tier.badge === 'Most Popular' ? 'rgba(124,58,237,0.08)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${tier.badge === 'Most Popular' ? '#7C3AED50' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '1.5rem',
                padding: '2.5rem',
                position: 'relative',
              }}
            >
              {tier.badge && (
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', padding: '0.3rem 1rem', background: tier.color, color: 'white', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                  {tier.badge}
                </div>
              )}
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>{tier.name}</h3>
              <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{tier.desc}</p>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 900, color: 'white' }}>{tier.price}</span>
                <span style={{ color: '#6B7280', fontSize: '1rem' }}>{tier.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {tier.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#D1D5DB', fontSize: '0.95rem' }}>
                    <CheckCircle size={16} color="#22C55E" style={{ flexShrink: 0 }} /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/917997001700?text=${encodeURIComponent(tier.whatsapp)}`}
                target="_blank" rel="noreferrer"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', background: tier.color, color: 'white', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', width: '100%' }}
              >
                {tier.cta} <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Block */}
      <section style={{ maxWidth: '800px', margin: '0 auto 5rem', padding: '3rem 2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,0.07)' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Our Pricing Philosophy</h2>
        <p style={{ color: '#9CA3AF', lineHeight: 1.8, fontSize: '1.05rem' }}>
          We don't believe in locking businesses into 12-month retainers with no accountability. Our contracts are performance-driven. We earn your business every month. If we underperform, you get your money back. That's the commitment.
        </p>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: '700px', margin: '0 auto 5rem', padding: '0 2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Pricing Questions</h2>
        {FAQS.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', background: 'none', border: 'none', color: 'white', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', textAlign: 'left', padding: 0 }}
            >
              {faq.q}
              <span style={{ fontSize: '1.5rem', color: '#7C3AED', marginLeft: '1rem', flexShrink: 0, lineHeight: 1 }}>{openFaq === i ? '−' : '+'}</span>
            </button>
            {openFaq === i && (
              <p style={{ color: '#9CA3AF', marginTop: '1rem', lineHeight: 1.7, fontSize: '0.95rem' }}>{faq.a}</p>
            )}
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '5rem 2rem', background: 'rgba(124,58,237,0.05)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Not sure which plan is right?</h2>
        <p style={{ color: '#9CA3AF', marginBottom: '2rem', fontSize: '1.1rem' }}>Get a free audit. We'll recommend the exact system your business needs.</p>
        <a
          href="https://wa.me/917997001700?text=Hi! I want to discuss pricing and get a free audit."
          target="_blank" rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', background: '#22C55E', color: 'white', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none' }}
        >
          Get Free Audit <ArrowRight size={18} />
        </a>
      </section>
    </div>
  );
};

export default PricingPage;
