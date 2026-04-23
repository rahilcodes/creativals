import React from 'react';
import { Target, MonitorPlay, TrendingUp } from 'lucide-react';

const outcomes = [
  {
    icon: (
      <div style={{ position: 'relative', width: '40px', height: '40px' }}>
        <div className="animate-float" style={{ position: 'absolute', bottom: 0, left: 0, width: '28px', height: '28px', background: 'rgba(124,58,237,0.2)', borderRadius: '8px', transform: 'rotate(-10deg) scale(0.9)', zIndex: 1 }} />
        <div className="animate-float-delayed" style={{ position: 'absolute', top: 0, right: 0, width: '28px', height: '28px', background: '#7C3AED', borderRadius: '8px', zIndex: 2, boxShadow: '0 8px 15px rgba(124,58,237,0.3)' }} />
      </div>
    ),
    title: 'We bring you leads',
    desc: 'No more wasting money on clicks. We run hyper-targeted Meta & Google ads that get people to call, message, and buy from you.',
    color: '#7C3AED', /* Purple */
  },
  {
    icon: (
      <div style={{ position: 'relative', width: '40px', height: '40px' }}>
        <div style={{ position: 'absolute', bottom: '4px', left: '2px', width: '36px', height: '28px', border: '2px solid rgba(124,58,237,0.4)', borderRadius: '6px' }} />
        <div className="animate-float" style={{ position: 'absolute', top: 0, right: '-4px', width: '14px', height: '14px', background: '#9333EA', borderRadius: '50%', boxShadow: '0 0 12px rgba(147,51,234,0.6)' }} />
      </div>
    ),
    title: 'We make your website convert',
    desc: 'Most websites are just digital brochures. We build fast, high-converting landing pages designed to turn visitors into paying customers.',
    color: '#9333EA', /* Violet */
  },
  {
    icon: (
      <div style={{ position: 'relative', width: '40px', height: '40px', display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
        <div style={{ width: '8px', height: '14px', background: 'rgba(124,58,237,0.2)', borderRadius: '4px' }} />
        <div style={{ width: '8px', height: '24px', background: 'rgba(124,58,237,0.5)', borderRadius: '4px' }} />
        <div className="animate-float" style={{ width: '8px', height: '36px', background: '#C084FC', borderRadius: '4px', boxShadow: '0 -4px 12px rgba(192,132,252,0.5)' }} />
      </div>
    ),
    title: 'We build your online presence',
    desc: 'We make sure you show up first on Google Maps and build a reputation so strong that your competitors become irrelevant.',
    color: '#C084FC', /* Light Purple */
  },
];

const ServicesGrid = () => (
  <section className="services-grid-section" style={{ padding: '6rem 0', background: '#f9fafb' }}>
    <div className="section-container">
      <div className="section-label">What We Handle</div>
      <h2 className="section-heading">
        We handle exactly what you need <span className="text-gradient-purple">without confusing you.</span>
      </h2>
      <p className="section-sub">
        No marketing jargon. No vanity metrics. Just three core outcomes that actually grow your business.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginTop: '4rem' }}>
        {outcomes.map((out, idx) => (
          <div key={idx} className="premium-card" style={{ padding: '3rem 2.5rem' }}>
            <div style={{ color: out.color, marginBottom: '1.5rem', background: `${out.color}15`, display: 'inline-flex', padding: '1rem', borderRadius: '1rem' }}>
              {out.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>{out.title}</h3>
            <p style={{ color: '#4B5563', lineHeight: 1.6, fontSize: '1.05rem', margin: 0 }}>{out.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
