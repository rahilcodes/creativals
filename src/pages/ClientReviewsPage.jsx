import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Star, Quote, HeartHandshake } from 'lucide-react';

const ClientReviewsPage = () => {
  useSEO({
    title: 'Client Testimonials & Marketing Reviews Hyderabad | Creativals',
    description: 'Read reviews and success stories from Hyderabad businesses that have scaled with Creativals digital marketing systems.',
    keywords: 'marketing agency reviews hyderabad, creativals reviews, client testimonials digital marketing',
  });

  const waMsg = encodeURIComponent('Hi! I saw your client reviews and want to achieve similar results.');

  const reviews = [
    {
      name: 'Rohan Deshmukh',
      role: 'Founder, Cloud Kitchen Chain',
      text: 'Every other agency sold us "social media aesthetics". Creativals came in and built a WhatsApp ordering funnel that bypassed Swiggy entirely. We increased our profit margins by 28% within 60 days.',
      stars: 5
    },
    {
      name: 'Dr. Anjali Verma',
      role: 'Director, Advanced Aesthetics',
      text: 'Our Google Ads were bleeding money before they took over. They restructured our landing pages to focus entirely on trust and doctor credentials. We went from $150 CPA to $45 CPA for high-ticket laser procedures.',
      stars: 5
    },
    {
      name: 'Priyank Shah',
      role: 'CEO, Enterprise ERP SaaS',
      text: 'The best B2B growth team in India, period. They don\'t just run LinkedIn ads; they completely rewrote our outbound messaging and built an automated educational funnel that generates 5-6 highly qualified VP-level calls every week on autopilot.',
      stars: 5
    },
    {
      name: 'Nisha Gupta',
      role: 'CMO, Sustainable Fashion Co.',
      text: 'Their creative testing methodology is brutal and effective. They tested 50+ video variations in month one, found the winning formula, and scaled our Shopify store from 15L to 80L per month profitably. Absolute beasts.',
      stars: 5
    }
  ];

  return (
    <div className="dark-page" style={{ background: '#080B14', color: 'white', paddingTop: '80px', minHeight: '100vh' }}>
      
      {/* 1. HERO */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '2rem', fontSize: '0.85rem', color: '#4ADE80', marginBottom: '2rem' }}>
          <HeartHandshake size={14} /> Unedited Client Feedback
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          Don't trust us.<br />Trust our clients.
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#9CA3AF', lineHeight: 1.7 }}>
          When you replace generic marketing with mathematical growth systems, the results speak for themselves. Here's what owners and founders have to say.
        </p>
      </section>

      {/* 2. REVIEWS GRID */}
      <section style={{ padding: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {reviews.map((review, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.5rem', padding: '2.5rem', position: 'relative' }}>
              <Quote size={40} color="rgba(255,255,255,0.05)" style={{ position: 'absolute', top: '2rem', right: '2rem' }} />
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} size={18} color="#EAB308" fill="#EAB308" />
                ))}
              </div>
              <p style={{ color: '#D1D5DB', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', fontStyle: 'italic' }}>
                "{review.text}"
              </p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'white' }}>{review.name}</div>
                <div style={{ color: '#6B7280', fontSize: '0.9rem', fontWeight: 500, marginTop: '0.25rem' }}>{review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TRUST STATS */}
      <section style={{ padding: '4rem 2rem', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)', marginTop: '4rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', letterSpacing: '-0.03em' }}>45+</div>
            <div style={{ color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>Active Growth Systems</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', letterSpacing: '-0.03em' }}>₹120Cr</div>
            <div style={{ color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>Client Revenue Managed</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', letterSpacing: '-0.03em' }}>92%</div>
            <div style={{ color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>6-Month Retention Rate</div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Stop reading. Start scaling.</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Get a free pipeline audit and discover exactly how we would engineer your growth.</p>
          <a href={`https://wa.me/917997001700?text=${waMsg}`} target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', background: '#22C55E', color: 'white', borderRadius: '0.75rem', fontWeight: 700, textDecoration: 'none', fontSize: '1.05rem', transition: 'all 0.2s', boxShadow: '0 10px 25px -5px rgba(34,197,94,0.3)' }}>
            Book Your Free Audit <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default ClientReviewsPage;
