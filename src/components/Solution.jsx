import React from 'react';
import { Zap, Target, BarChart3, Layers } from 'lucide-react';

const pillars = [
  {
    icon: <Target size={28} />,
    title: 'A Plan That Brings Customers',
    body: 'We build a step-by-step system that turns strangers into paying customers. We do not just run random ads.',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Clear Proof It Works',
    body: 'We show you exactly how many new customers you got and how much money they spent. No more guessing.',
  },
  {
    icon: <Zap size={28} />,
    title: 'Building Real Trust',
    body: 'We help you get more 5-star reviews so people pick you instead of the business down the street.',
  },
  {
    icon: <Layers size={28} />,
    title: 'We Do All The Work',
    body: 'Ads, websites, Google searches, and social media. One simple team doing it all so you can focus on running your business.',
  },
];

const Solution = () => (
  <section className="solution-section">
    <div className="section-container">
      <div className="section-label">Our Approach</div>
      <h2 className="section-heading">
        A system that brings you <span className="text-gradient-purple">more customers consistently.</span>
      </h2>
      <p className="section-sub">
        We handle your ads, website, and online presence together so you get consistent results. 
        One easy system for your business.
      </p>

      <div className="rva-badge">
        <span className="rva-badge-label">Our Growth Steps</span>
        <div className="rva-steps">
          {['Review', 'Plan', 'Build', 'Grow'].map((s, i) => (
            <div key={i} className="rva-step">
              <div className="rva-step-num">{i + 1}</div>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pillars-grid">
        {pillars.map((p, i) => (
          <div key={i} className="pillar-card">
            <div className="pillar-icon">{p.icon}</div>
            <h3 className="pillar-title">{p.title}</h3>
            <p className="pillar-body">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Solution;
