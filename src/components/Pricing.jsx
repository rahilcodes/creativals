import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Start Growing',
    emoji: '🚀',
    price: '₹25,000',
    period: '/month',
    tag: null,
    tagline: 'Perfect for businesses that want steady, reliable customers',
    includes: [
      'Social media videos & posts',
      'One face-to-face call a month',
      'Clear results dashboard',
      'Leads sent straight to your WhatsApp',
      '30-day money-back promise',
    ],
    cta: 'Start Getting Customers',
    ctaColor: '#7C3AED',
    ctaBg: 'rgba(124,58,237,0.12)',
    highlight: false,
  },
  {
    name: 'Local Dominance',
    emoji: '⚡',
    price: '₹55,000',
    period: '/month',
    tag: '🔥 Most Popular',
    tagline: 'For businesses that want to be the biggest name in town',
    includes: [
      'Everything in Start Growing',
      'Paid Google & Facebook Ads',
      'Automatic 5-Star Review System',
      'We meet with you every 2 weeks',
      'Live numbers on your phone',
      '45-day money-back promise',
    ],
    cta: 'Grow Faster Now',
    ctaColor: '#fff',
    ctaBg: 'linear-gradient(135deg,#7C3AED,#A855F7)',
    highlight: true,
  },
  {
    name: 'The Full Machine',
    emoji: '👑',
    price: 'Custom',
    period: '',
    tag: 'Everything Included',
    tagline: 'We do absolutely everything. You just focus on serving customers',
    includes: [
      'All 5 of our growth systems',
      'A dedicated manager for your team',
      'Weekly reports to the owner',
      'In-person planning day with our experts',
      'You only pay if you win pricing rules',
      '100% money-back guarantee',
    ],
    cta: 'Ask For A Free Audit First',
    ctaColor: '#111827',
    ctaBg: 'rgba(0,0,0,0.06)',
    highlight: false,
  },
];

const Pricing = () => (
  <section className="pricing-section">
    <div className="section-container">
      <div className="section-label">Straightforward Pricing</div>
      <h2 className="section-heading">
        Pay for customers.
        <br />
        <span className="text-gradient-purple">Not promises.</span>
      </h2>
      <p className="section-sub">
        Every plan starts with a <strong>Free Business Audit</strong>. We look at your business first before 
        we ever ask for money. No hidden fees. No surprises.
      </p>

      <div className="pricing-grid">
        {plans.map((p, i) => (
          <div key={i} className={`pricing-card ${p.highlight ? 'pricing-card--highlight' : ''}`}>
            {p.tag && (
              <div className="pricing-tag">{p.tag}</div>
            )}
            <div className="pricing-emoji">{p.emoji}</div>
            <div className="pricing-name">{p.name}</div>
            <div className="pricing-price-row">
              <span className="pricing-price">{p.price}</span>
              <span className="pricing-period">{p.period}</span>
            </div>
            <p className="pricing-tagline">{p.tagline}</p>

            <ul className="pricing-list">
              {p.includes.map((item, j) => (
                <li key={j}>
                  <Check size={15} className="pricing-check" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/917997001700?text=Hi! I'm interested in the ${p.name} plan. Can I get a Free Audit?`}
              target="_blank"
              rel="noreferrer"
              className="pricing-cta"
              style={{
                background: p.ctaBg,
                color: p.ctaColor,
                border: p.highlight ? 'none' : '1.5px solid rgba(124,58,237,0.25)',
              }}
            >
              {p.cta} <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>

      <div className="pricing-guarantee">
        <Star size={18} fill="#FBBF24" color="#FBBF24" />
        <p>
          <strong>Our Golden Rule:</strong> If we don't make you more money in the first 45 days, 
          you get a full refund. No questions asked. No long contracts keeping you trapped.
        </p>
      </div>
    </div>
  </section>
);

export default Pricing;
