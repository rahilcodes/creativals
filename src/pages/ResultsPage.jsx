import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Globe, Building2, GraduationCap, UtensilsCrossed, Home, Code2, Car } from 'lucide-react';
import TrustNumbers from '../components/TrustNumbers';
import CaseStudyCard from '../components/CaseStudyCard';
import ClientProofWall from '../components/ClientProofWall';
import { HERO_CASE_STUDIES } from '../data/clientData';

// Geography data for the reach section
const GEO_NODES = [
  { region: 'Hyderabad, India', flag: '🇮🇳', count: '100+', desc: 'Our home market — dominant across hotels, education, F&B, and real estate.', color: '#A855F7' },
  { region: 'USA (Florida, New York, California, Virginia)', flag: '🇺🇸', count: '25+', desc: 'Realtors, restaurants, marine, retail, non-profits, and tech startups.', color: '#38BDF8' },
  { region: 'Malaysia (KL, Kuala Lumpur)', flag: '🇲🇾', count: '3', desc: 'BPL Baseball League, My Expat visa firm, Embun Teratai confinement centre.', color: '#22C55E' },
  { region: 'Canada (Vancouver)', flag: '🇨🇦', count: '3', desc: 'Quick Cell Repair, PhoneEra, Amazing Bins — full digital transformations.', color: '#F97316' },
  { region: 'Australia (Sydney/Melbourne)', flag: '🇦🇺', count: '1', desc: 'Deccan Biryani House — Indian restaurant ranked top online in Australia.', color: '#F59E0B' },
  { region: 'UAE (Dubai)', flag: '🇦🇪', count: '2', desc: 'Al-Haya and Khalijeb — SaaS and service brands in the Gulf region.', color: '#EC4899' },
  { region: 'Guyana (Georgetown)', flag: '🇬🇾', count: '2', desc: "Casa Nuvo Investments (Guyana's #1 realty) and Medi Care Pharmacy.", color: '#8B5CF6' },
];

// Category dominance breakdown
const CATEGORIES = [
  { Icon: Building2,       color: '#22C55E', label: 'Hotels & Hospitality', count: '24+', desc: 'From city hotels to luxury resorts and farmhouses' },
  { Icon: GraduationCap,  color: '#A855F7', label: 'Education',             count: '29+', desc: 'Schools, colleges, universities, and edtech platforms' },
  { Icon: UtensilsCrossed,color: '#F97316', label: 'Food & Restaurants',    count: '20+', desc: 'Cafes, cloud kitchens, fine dining, and grocery chains' },
  { Icon: Home,           color: '#F59E0B', label: 'Real Estate',           count: '7+',  desc: 'Realtors, builders, rental platforms across 3 countries' },
  { Icon: Code2,          color: '#38BDF8', label: 'Tech & SaaS',           count: '15+', desc: 'CRMs, AI chatbots, AR/VR companies, and platforms' },
  { Icon: Car,            color: '#EF4444', label: 'Automobile',            count: '4+',  desc: 'From Mahindra Motors to regional car dealerships' },
];

const ResultsPage = () => {
  useSEO({
    title: 'Results & Case Studies | Creativals — ₹100 Crore in Revenue Generated',
    description: '160+ clients. 7 countries. ₹100+ Crore in combined revenue generated. See real results from real businesses — hotels, schools, restaurants, real estate, tech startups, and more.',
    keywords: 'digital marketing results, case studies india, client portfolio, revenue generated, marketing results hyderabad',
  });

  return (
    <div style={{ background: '#02010A', minHeight: '100vh', color: 'white' }}>
      <style>{`
        .results-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 1.5rem; }
        .results-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 1.5rem; }
        .results-grid-3-last { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        @media(max-width: 1024px) {
          .results-grid-3, .results-grid-3-last { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width: 768px) {
          .results-grid-3, .results-grid-2, .results-grid-3-last { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '8rem 2rem 5rem', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(168,85,247,.07) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        <motion.div animate={{ scale: [1, 1.08, 1], opacity: [.08, .18, .08] }} transition={{ duration: 10, repeat: Infinity }}
          style={{ position: 'absolute', left: '50%', top: '30%', transform: 'translate(-50%, -50%)', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle,rgba(168,85,247,.3) 0%,transparent 60%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 900, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.3rem 1rem', background: 'rgba(245,158,11,.1)', border: '1px solid rgba(245,158,11,.25)', borderRadius: '99px', marginBottom: '1.5rem' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 8px rgba(245,158,11,.8)' }} />
            <span style={{ fontSize: '.72rem', fontWeight: 800, color: '#B45309', letterSpacing: '.07em', textTransform: 'uppercase' }}>Proven Results · Real Businesses</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}
            style={{ fontWeight: 900, fontSize: 'clamp(2.5rem,5vw,4.5rem)', letterSpacing: '-.05em', lineHeight: 1.05, margin: '0 0 1.5rem', color: 'white' }}>
            160+ Businesses.<br />
            <span style={{ background: 'linear-gradient(135deg,#F59E0B,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>7 Countries.</span><br />
            One system that works.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}
            style={{ color: '#94A3B8', fontSize: 'clamp(.95rem,1.5vw,1.15rem)', lineHeight: 1.65, maxWidth: 620, margin: '0 auto 2.5rem' }}>
            From a local furniture store in Hyderabad to Florida's top realtor — we've built growth systems that generated over <strong style={{ color: 'white' }}>₹100 Crore in combined client revenue</strong>.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#case-studies"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', padding: '.95rem 2rem', background: 'linear-gradient(135deg,#A855F7,#8B5CF6)', color: 'white', fontWeight: 800, fontSize: '.95rem', borderRadius: 14, textDecoration: 'none', boxShadow: '0 10px 30px -10px rgba(168,85,247,.5)' }}>
              See Case Studies <ArrowRight size={16} />
            </a>
            <a href="#client-wall"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', padding: '.95rem 2rem', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.12)', color: 'white', fontWeight: 700, fontSize: '.95rem', borderRadius: 14, textDecoration: 'none' }}>
              Browse All 160+ Clients
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST NUMBERS ──────────────────────────────────────────────── */}
      <div id="revenue-generated" style={{ padding: '0 2rem 4rem' }}>
        <TrustNumbers />
      </div>

      {/* ── CATEGORY DOMINANCE ─────────────────────────────────────────── */}
      <section style={{ padding: '4rem 2rem', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.5rem,2.5vw,2rem)', letterSpacing: '-.03em', margin: '0 0 .5rem' }}>
              We don't serve every industry. We <span style={{ color: '#A855F7' }}>dominate</span> ours.
            </h2>
            <p style={{ color: '#64748B', fontSize: '.9rem' }}>22+ verticals. Here's where we're the deepest.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {CATEGORIES.map((cat, i) => (
              <motion.div key={cat.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ padding: '1.5rem', borderRadius: 16, border: `1px solid ${cat.color}18`, background: `linear-gradient(145deg,${cat.color}08,rgba(255,255,255,.01))`, display: 'flex', gap: '1rem', alignItems: 'flex-start', transition: 'transform .25s, box-shadow .25s', cursor: 'default' }}
                whileHover={{ y: -4, boxShadow: `0 10px 30px -10px ${cat.color}33` }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: `${cat.color}18`, border: `1px solid ${cat.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <cat.Icon size={20} color={cat.color} strokeWidth={2} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '.5rem', marginBottom: '.25rem' }}>
                    <h3 style={{ color: 'white', fontWeight: 800, fontSize: '.95rem', margin: 0 }}>{cat.label}</h3>
                    <span style={{ color: cat.color, fontWeight: 900, fontSize: '.88rem' }}>{cat.count}</span>
                  </div>
                  <p style={{ color: '#64748B', fontSize: '.82rem', margin: 0, lineHeight: 1.5 }}>{cat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO CASE STUDIES ──────────────────────────────────────────── */}
      <section id="case-studies" style={{ padding: '5rem 2rem', background: '#04030F', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.28rem .9rem', background: 'rgba(245,158,11,.1)', border: '1px solid rgba(245,158,11,.25)', borderRadius: '99px', marginBottom: '1rem' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 8px rgba(245,158,11,.8)' }} />
              <span style={{ fontSize: '.72rem', fontWeight: 800, color: '#B45309', letterSpacing: '.07em', textTransform: 'uppercase' }}>Elite Case Studies</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}
              style={{ color: '#1A1040', fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', letterSpacing: '-.04em', lineHeight: 1.1, margin: '0 0 .75rem' }}>
              Our most jaw-dropping transformations.
            </motion.h2>
            <p style={{ color: '#64748B', fontSize: '.92rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
              Not testimonials. Not hypotheticals. Specific numbers from specific businesses who trusted our systems.
            </p>
          </div>

          {/* Featured 3 (large) */}
          <div className="results-grid-3">
            {HERO_CASE_STUDIES.slice(0, 3).map((s, i) => (
              <CaseStudyCard key={s.id} study={s} index={i} size="large" />
            ))}
          </div>

          {/* Next 5 (normal, 2+3 grid) */}
          <div className="results-grid-2">
            {HERO_CASE_STUDIES.slice(3, 5).map((s, i) => (
              <CaseStudyCard key={s.id} study={s} index={i} />
            ))}
          </div>
          <div className="results-grid-3-last">
            {HERO_CASE_STUDIES.slice(5, 8).map((s, i) => (
              <CaseStudyCard key={s.id} study={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GEOGRAPHIC REACH ───────────────────────────────────────────── */}
      <section id="geographic-reach" style={{ padding: '5rem 2rem', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.28rem .9rem', background: 'rgba(56,189,248,.1)', border: '1px solid rgba(56,189,248,.25)', borderRadius: '99px', marginBottom: '1rem' }}>
              <Globe size={12} color="#38BDF8" />
              <span style={{ fontSize: '.72rem', fontWeight: 800, color: '#7DD3FC', letterSpacing: '.07em', textTransform: 'uppercase' }}>Global Reach</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}
              style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', letterSpacing: '-.04em', lineHeight: 1.1, margin: '0 0 .75rem' }}>
              From Hyderabad to Houston.<br />
              <span style={{ color: '#38BDF8' }}>Our systems work everywhere.</span>
            </motion.h2>
            <p style={{ color: '#64748B', fontSize: '.92rem', maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
              7 countries. 3 continents. We're not a Hyderabad agency. We're a global growth partner that happens to be headquartered here.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {GEO_NODES.map((node, i) => (
              <motion.div key={node.region}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ padding: '1.75rem', borderRadius: 18, border: `1px solid ${node.color}22`, background: `linear-gradient(145deg, ${node.color}08, rgba(255,255,255,.01))`, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '2rem' }}>{node.flag}</span>
                  <div>
                    <div style={{ color: 'white', fontWeight: 800, fontSize: '.95rem', lineHeight: 1.2 }}>{node.region}</div>
                    <div style={{ color: node.color, fontWeight: 900, fontSize: '1.1rem' }}>{node.count} clients</div>
                  </div>
                </div>
                <p style={{ color: '#64748B', fontSize: '.85rem', lineHeight: 1.55, margin: 0 }}>{node.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT PROOF WALL ──────────────────────────────────────────── */}
      <section id="client-wall" style={{ background: '#04030F', borderTop: '1px solid rgba(255,255,255,.05)' }}>
        <ClientProofWall />
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,197,94,.12) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(2rem,4vw,3.2rem)', letterSpacing: '-.04em', lineHeight: 1.1, margin: '0 0 1rem' }}>
            Ready to be the next<br />
            <span style={{ color: '#22C55E' }}>success story?</span>
          </motion.h2>
          <p style={{ color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6, margin: '0 0 2.5rem', maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
            We built systems for 160+ businesses across 7 countries. We know exactly what will work for yours — and we'll tell you for free.
          </p>
          <motion.a
            href="https://wa.me/917997001700?text=Hi!%20I%20saw%20your%20results%20page%20and%20want%20a%20free%20growth%20audit."
            target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.03, boxShadow: '0 15px 40px -10px rgba(34,197,94,.5)' }} whileTap={{ scale: .97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.75rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(135deg,#22C55E,#16A34A)', color: '#ffffff', fontWeight: 900, fontSize: '1.1rem', borderRadius: 16, textDecoration: 'none', boxShadow: '0 10px 30px -10px rgba(34,197,94,.4)' }}>
            Get My Free Growth Audit
            <ArrowRight size={20} color="#ffffff" />
          </motion.a>
          <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ color: '#64748B', fontSize: '.82rem', fontWeight: 600 }}>✓ 100% Free · No obligation</span>
            <span style={{ color: '#64748B', fontSize: '.82rem', fontWeight: 600 }}>✓ Reply in 30 mins</span>
            <span style={{ color: '#FCA5A5', fontSize: '.82rem', fontWeight: 700 }}>● Only 3 spots left this month</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ResultsPage;
