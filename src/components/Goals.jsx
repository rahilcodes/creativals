import React from 'react';

const goals = [
  { emoji: '🎯', title: 'Get More Leads', desc: 'Phone calls, form fills & WhatsApp enquiries every day' },
  { emoji: '📅', title: 'Increase Bookings', desc: 'Hotels, clinics, schools — fill your calendar' },
  { emoji: '💰', title: 'Boost Sales', desc: 'More ecommerce orders and repeat customers' },
  { emoji: '⭐', title: 'Build Reputation', desc: 'Reviews, rankings, social proof that converts' },
];

const Goals = () => (
  <section className="goals-section">
    <div className="section-container">
      <div className="section-label">What Do You Want?</div>
      <h2 className="section-heading">
        What Do You Want <span className="text-gradient-purple">to Grow?</span>
      </h2>
      <p className="section-sub">
        Pick your goal — we'll show you exactly how we make it happen.
      </p>

      <div className="goals-grid">
        {goals.map((g, i) => (
          <div key={i} className="goal-card">
            <span className="goal-emoji">{g.emoji}</span>
            <div className="goal-content">
              <h3 className="goal-title">{g.title}</h3>
              <p className="goal-desc">{g.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Goals;
