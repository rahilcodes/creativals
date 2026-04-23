import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CaseStudyCard from './CaseStudyCard';
import { HERO_CASE_STUDIES } from '../data/clientData';

// Top 3 for homepage
const TOP3 = HERO_CASE_STUDIES.slice(0, 3);

const CaseStudies = () => (
  <section style={{ background: '#060411', position: 'relative', overflow: 'hidden', padding: '5rem 0' }}>
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(34,197,94,.05) 1px,transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none' }} />

    <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.28rem .9rem', background: 'rgba(245,158,11,.1)', border: '1px solid rgba(245,158,11,.25)', borderRadius: '99px', marginBottom: '1rem' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F59E0B', boxShadow: '0 0 8px rgba(245,158,11,.8)' }} />
          <span style={{ fontSize: '.72rem', fontWeight: 800, color: '#FCD34D', letterSpacing: '.07em', textTransform: 'uppercase' }}>Real Results · Real Businesses</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}
          style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.6rem)', letterSpacing: '-.04em', lineHeight: 1.1, margin: '0 0 .75rem' }}>
          They were stuck.<br />
          <span style={{ background: 'linear-gradient(135deg,#22C55E,#10B981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>We fixed that.</span>
        </motion.h2>
        <p style={{ color: '#64748B', fontSize: '.92rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
          Not hypotheticals. Real numbers from real Indian businesses — and 7 countries — that trusted our systems.
        </p>
      </div>

      {/* 3 hero cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {TOP3.map((study, i) => (
          <CaseStudyCard key={study.id} study={study} index={i} />
        ))}
      </div>

      {/* See all button */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <motion.a href="/results" whileHover={{ scale: 1.03 }} whileTap={{ scale: .97 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', padding: '.9rem 2rem', background: 'rgba(245,158,11,.1)', border: '1px solid rgba(245,158,11,.25)', color: '#FCD34D', fontWeight: 700, fontSize: '.88rem', borderRadius: 14, textDecoration: 'none' }}>
          See all 160+ client results <ArrowRight size={15} />
        </motion.a>
      </div>
    </div>

    <style>{`
      @media(max-width:900px){ div[style*="repeat(3, 1fr)"]{grid-template-columns:1fr!important;} }
    `}</style>
  </section>
);

export default CaseStudies;
