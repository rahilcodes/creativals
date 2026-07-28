import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal, SecNum } from '../ui/primitives';

const INDUSTRIES = [
  { slug: 'schools-colleges', title: 'Schools & Education', badge: '10X ENQUIRY VOLUME', body: 'Stop relying on word of mouth. Direct-admission funnels that pack classrooms and create waitlists.' },
  { slug: 'real-estate', title: 'Real Estate & Builders', badge: '60% LOWER CPL', body: 'No more junk leads. High-intent Google Ads that capture active buyers in your exact locality.' },
  { slug: 'hotels-resorts', title: 'Hotels & Resorts', badge: '280% DIRECT BOOKINGS', body: 'Bypass OTA commissions. Direct bookings and reliable occupancy, every single weekend.' },
  { slug: 'restaurants', title: 'Restaurants & Cafes', badge: 'FOOTFALL & ORDERS', body: 'Less Zomato dependency, more direct orders. Hyper-local campaigns that pack tables every weekend.' },
  { slug: 'healthcare', title: 'Hospitals & Clinics', badge: '2X PATIENT FOOTFALL', body: 'Build trust before the first visit. Automated booking plus dominance in local Google searches.' },
  { slug: 'b2b-enterprise', title: 'B2B & Service Firms', badge: 'HIGH-TICKET CLOSURES', body: 'Target exact decision-makers with intent-based ads that deliver qualified sales calls.' },
  { slug: 'ecommerce-brands', title: 'E-commerce Brands', badge: '300% AVERAGE ROAS', body: 'Stop burning budget on "boost post". Precision Shopping funnels engineered to scale ROAS.' },
  { slug: 'fitness', title: 'Fitness & Wellness', badge: 'MEMBERS & RETENTION', body: 'New members every month, old members who stay. Local growth systems for gyms and studios.' },
];

const IndustriesGrid = () => (
  <section id="industries" style={{ background: '#F4F2EC', color: '#17151A' }}>
    <div className="cx-wrap cx-section">
      <Reveal><SecNum n="06" label="Who we help" /></Reveal>
      <div style={{ marginBottom: 60 }}>
        <Reveal delay={60}>
          <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
            Built precisely for<br />
            <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Indian businesses.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="cx-lead" style={{ maxWidth: 620 }}>
            Battle-tested across 8 high-competition domestic industries. We know exactly what works in each.
          </p>
        </Reveal>
      </div>
      <div className="cx-grid3" style={{ gap: 22 }}>
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.slug} delay={(i % 3) * 60}>
            <Link to={`/industries/${ind.slug}`} className="cx-card-invert" style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%', boxSizing: 'border-box' }}>
              <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em', marginBottom: 12 }}>{ind.title}</div>
              <p style={{ margin: '0 0 20px', fontSize: 14.5, lineHeight: 1.6, opacity: .75 }}>{ind.body}</p>
              <div className="cx-badge">{ind.badge}</div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesGrid;
