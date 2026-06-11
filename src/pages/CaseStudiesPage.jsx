import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, MessageCircle, TrendingUp, Hotel, GraduationCap, UtensilsCrossed, Car, Leaf, BookOpen, Filter } from 'lucide-react';

const WA = 'https://wa.me/917997001700';
const fin = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const CASES = [
  {
    client: 'Glampinn Valley',
    industry: 'Luxury Hospitality',
    tag: 'Hotels',
    color: '#F59E0B',
    glow: 'rgba(245,158,11,0.4)',
    initials: 'GV',
    headline: 'A resort that became a movement.',
    challenge: 'Beautiful property with zero digital presence and minimal advance bookings. Revenue was entirely dependent on walk-ins and word-of-mouth.',
    what_we_did: ['Full brand identity & website build', 'Instagram & Meta paid campaigns', 'High-end photography & video production', 'Influencer campaign management', 'Online booking funnel optimization'],
    result: '₹50 Crore+ revenue generated. Became one of Hyderabad\'s most talked-about luxury experiences.',
    metrics: [
      { v: '₹50Cr+', l: 'Revenue Generated' },
      { v: '3x', l: 'Booking Rate' },
      { v: '#1', l: 'Hyderabad Luxury Stays' },
    ],
  },
  {
    client: 'Hotel Sky International',
    industry: 'Business Hotels',
    tag: 'Hotels',
    color: '#22C55E',
    glow: 'rgba(34,197,94,0.4)',
    initials: 'HS',
    headline: 'Monthly revenue doubled in 6 months.',
    challenge: 'Revenue stuck at ₹13 Lakh/month for 8+ months. Heavy dependence on OTAs eating into margins. No direct booking channel.',
    what_we_did: ['Google Ads targeting business travellers', 'Direct booking website with no-OTA offers', 'WhatsApp lead nurture automation', 'Google Business Profile optimization', 'Review acquisition strategy'],
    result: '₹13L → ₹25L/month in under 6 months. Significant shift from OTA to direct bookings.',
    metrics: [
      { v: '₹13L→₹25L', l: 'Monthly Revenue' },
      { v: '92%', l: 'Direct Booking Growth' },
      { v: '6 Months', l: 'To Double Revenue' },
    ],
  },
  {
    client: 'Pista House',
    industry: 'Restaurant Chain',
    tag: 'Food',
    color: '#F97316',
    glow: 'rgba(249,115,22,0.4)',
    initials: 'PH',
    headline: '200% growth in online order volume.',
    challenge: 'Iconic brand with massive offline reputation but very limited online ordering presence. Competitors were winning digital customers despite inferior product.',
    what_we_did: ['Social media growth strategy', 'Paid social campaigns targeting food lovers', 'Zomato & Swiggy ad optimization', 'Festive campaign production', 'Video content for Reels & Shorts'],
    result: '200% increase in online orders. Social media became a top traffic driver.',
    metrics: [
      { v: '200%', l: 'Order Volume Growth' },
      { v: '5M+', l: 'Campaign Reach' },
      { v: '₹X Cr', l: 'Festive Revenue' },
    ],
  },
  {
    client: 'MRA Motors',
    industry: 'Automobile',
    tag: 'Auto',
    color: '#38BDF8',
    glow: 'rgba(56,189,248,0.4)',
    initials: 'MR',
    headline: '50 million views. 500+ leads every month.',
    challenge: 'Dealership with great inventory but poor brand positioning. No social media strategy. Leads were inconsistent and low quality.',
    what_we_did: ['Short-form video content strategy', 'Car review & test drive content', 'Meta paid ads for qualified buyers', 'Instagram & YouTube channel growth', 'Lead funnel & CRM setup'],
    result: '50M+ views generated. 500+ monthly qualified leads. Built into one of Hyderabad\'s most-followed auto pages.',
    metrics: [
      { v: '50M+', l: 'Total Views' },
      { v: '500+', l: 'Monthly Leads' },
      { v: '50K+', l: 'Social Followers' },
    ],
  },
  {
    client: 'Aakash Institute',
    industry: 'Education',
    tag: 'Education',
    color: '#A855F7',
    glow: 'rgba(168,85,247,0.4)',
    initials: 'AK',
    headline: '200+ new admissions in a single season.',
    challenge: 'Admissions season with underperforming walk-ins. Parents not being reached through digital. High competition from national brands.',
    what_we_did: ['Geo-targeted parent campaigns on Meta & Google', 'Landing pages for each course category', 'WhatsApp follow-up automation', 'Competitive positioning campaigns', 'Parent testimonial video production'],
    result: '200+ qualified admissions in a single year. Digital became primary lead source for the first time.',
    metrics: [
      { v: '200+', l: 'New Admissions' },
      { v: '65%', l: 'Lead-to-Visit Rate' },
      { v: '#1', l: 'Local Parent Recall' },
    ],
  },
  {
    client: 'GMR Group of Institutions',
    industry: 'Education Group',
    tag: 'Education',
    color: '#EAB308',
    glow: 'rgba(234,179,8,0.4)',
    initials: 'GG',
    headline: '3-year ongoing partner. Complete digital ecosystem.',
    challenge: 'Prestigious institution group with fragmented digital presence across 4+ institutions. No unified brand voice. Ineffective individual campaigns per institution.',
    what_we_did: ['Unified brand system across all institutions', 'Individual campaign strategies per campus', 'Complete website management', 'Social media across 5+ accounts', 'Ongoing creative & marketing support'],
    result: 'Became full digital partner managing GMR University, Medical College, Engineering College, and 5 schools — 3-year ongoing relationship.',
    metrics: [
      { v: '4+', l: 'Institutions Managed' },
      { v: '3 Years', l: 'Ongoing Partnership' },
      { v: '#1', l: 'in Hyderabad Education' },
    ],
  },
];

const TAGS = ['All', 'Hotels', 'Food', 'Education', 'Auto'];

const CaseStudiesPage = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [expanded, setExpanded] = useState(null);

  useSEO({
    title: 'Marketing Case Studies & Results in Hyderabad | Creativals',
    description: 'View our proven marketing results. See how Creativals helps Hyderabad businesses and global brands achieve 300%+ ROI with predictable growth engines.',
    keywords: 'marketing case studies, marketing results hyderabad, best marketing agency in hyderabad case studies',
  });

  const filtered = activeTag === 'All' ? CASES : CASES.filter(c => c.tag === activeTag);

  return (
    <div className="dark-page" style={{ background: '#F8FAFC', color: '#0F172A', paddingTop: 80, minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
        <motion.div {...fin}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: 99, fontSize: '0.8rem', color: '#7C3AED', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            <TrendingUp size={12} /> Real Numbers. Real Businesses.
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem,6vw,5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '1.25rem' }}>
            Proof, not promises.<br />
            <span style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7,#22C55E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Results that speak.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.75, maxWidth: 600, margin: '0 auto' }}>
            We don't hide behind vague claims. These are the real businesses, real challenges, and real numbers from our work. No exaggeration. No borrowed credibility.
          </p>
        </motion.div>
      </section>

      {/* ── KEY NUMBERS ── */}
      <section style={{ borderTop: '1px solid rgba(0,0,0,0.08)', borderBottom: '1px solid rgba(0,0,0,0.08)', padding: '2rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
          {[
            { v: '₹1B+', l: 'Client Revenue Generated' },
            { v: '160+', l: 'Businesses Scaled' },
            { v: '50M+', l: 'Combined Views' },
            { v: '7', l: 'Countries' },
          ].map(({ v, l }) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.04em', background: 'linear-gradient(135deg,#0F172A,#7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{v}</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.2rem' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FILTER ── */}
      <section style={{ padding: '3rem 2rem 0' }}>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {TAGS.map(t => (
            <button key={t} onClick={() => setActiveTag(t)}
              style={{ padding: '0.5rem 1.25rem', borderRadius: 99, border: `1px solid ${activeTag === t ? 'rgba(124,58,237,0.5)' : 'rgba(0,0,0,0.1)'}`, background: activeTag === t ? 'rgba(124,58,237,0.1)' : '#ffffff', color: activeTag === t ? '#7C3AED' : '#64748B', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}>
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* ── CASE STUDY CARDS ── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 2rem 6rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <AnimatePresence>
            {filtered.map((cs, i) => (
              <motion.div key={cs.client} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: i * 0.07 }}
                style={{ background: '#FFFFFF', border: `1px solid rgba(0,0,0,0.08)`, borderRadius: 24, overflow: 'hidden', borderLeft: `4px solid ${cs.color}`, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
                {/* Header */}
                <div style={{ padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', cursor: 'pointer' }}
                  onClick={() => setExpanded(expanded === i ? null : i)}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, background: `${cs.color}20`, border: `2px solid ${cs.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 900, color: cs.color, flexShrink: 0, boxShadow: `0 0 24px -6px ${cs.glow}` }}>
                      {cs.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 800, color: cs.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{cs.industry}</div>
                      <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#0F172A' }}>{cs.client}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    {cs.metrics.map(m => (
                      <div key={m.l} style={{ textAlign: 'center' }}>
                        <div style={{ fontWeight: 900, fontSize: '1.25rem', color: cs.color, letterSpacing: '-0.02em' }}>{m.v}</div>
                        <div style={{ fontSize: '0.68rem', color: '#475569', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{m.l}</div>
                      </div>
                    ))}
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s', transform: expanded === i ? 'rotate(45deg)' : 'none' }}>
                      <ArrowRight size={14} color="#64748B" />
                    </div>
                  </div>
                </div>

                {/* Expandable detail */}
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden', borderTop: `1px solid rgba(0,0,0,0.07)` }}>
                      <div style={{ padding: '2rem 2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
                        <div>
                          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '0.75rem' }}>The Challenge</div>
                          <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7 }}>{cs.challenge}</p>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '0.75rem' }}>What We Did</div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            {cs.what_we_did.map(w => (
                              <div key={w} style={{ fontSize: '0.85rem', color: '#475569' }}>· {w}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: cs.color, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '0.75rem' }}>The Result</div>
                          <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 600 }}>{cs.result}</p>
                          <a href={`${WA}?text=Hi! I want similar results for my business like you did for ${cs.client}.`} target="_blank" rel="noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem', padding: '0.65rem 1.25rem', background: `${cs.color}18`, border: `1px solid ${cs.color}50`, borderRadius: 10, color: cs.color, fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none' }}>
                            <MessageCircle size={14} /> Get Similar Results
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '3rem 2rem 7rem', textAlign: 'center' }}>
        <motion.div {...fin} style={{ maxWidth: 700, margin: '0 auto', padding: '4rem 2rem', background: 'linear-gradient(180deg,rgba(124,58,237,0.07),#F8FAFC)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 28 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem', color: '#0F172A' }}>Want to be our next<br />case study?</h2>
          <p style={{ color: '#64748B', marginBottom: '2.5rem', fontSize: '1rem' }}>We only take on clients we're confident we can grow. Start with a free audit.</p>
          <motion.a href={`${WA}?text=Hi! I want to explore growing my business with Creativals.`} target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(135deg,#22C55E,#16A34A)', color: '#000', borderRadius: 14, fontWeight: 900, fontSize: '1.05rem', textDecoration: 'none', boxShadow: '0 0 50px -12px rgba(34,197,94,0.6)' }}>
            <MessageCircle size={20} /> Start My Free Audit <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </section>

    </div>
  );
};

export default CaseStudiesPage;
