import React from 'react';

const FairPricing = () => (
  <section className="fair-pricing-section" style={{ padding: '6rem 0', background: '#fff', textAlign: 'center' }}>
    <div className="section-container">
      <div className="section-label">Honest Pricing</div>
      <h2 className="section-heading">How much does it cost?</h2>
      <p className="section-sub" style={{ margin: '0 auto 2rem', color: '#374151' }}>
        Pricing depends entirely on your business, your goals, and what you actually need.
      </p>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '2rem', borderRadius: '1rem' }}>
        <p className="text-body-lg" style={{ margin: 0, fontWeight: 600, color: '#166534' }}>
          We decide together after your free audit.<br/>
          <strong>Most of our clients earn much more than they spend with us.</strong>
        </p>
      </div>
    </div>
  </section>
);

export default FairPricing;
