import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SERVICE_COLORS = {
  'Web Development': '#38BDF8',
  'Marketing':       '#A855F7',
  'Graphic Design':  '#F97316',
};

const CaseStudyCard = ({ study, index = 0, size = 'normal' }) => {
  const isLarge = size === 'large';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.12, duration: 0.55 }}
      style={{
        borderRadius: 20,
        border: `1px solid ${study.color}22`,
        background: `linear-gradient(145deg, ${study.color}08 0%, rgba(255,255,255,.01) 100%)`,
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', position: 'relative',
        transition: 'transform .3s, box-shadow .3s',
        height: '100%',
      }}
      whileHover={{ y: -6, boxShadow: `0 20px 60px -15px ${study.glow}` }}
    >
      {/* Gold bar at top for Tier 1 */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${study.color}, ${study.color}44)` }} />

      {/* Header section */}
      <div style={{ padding: isLarge ? '2rem 2rem 1.5rem' : '1.75rem 1.75rem 1.25rem' }}>
        {/* Country + Category row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '.5rem' }}>
          <span style={{ fontSize: '.7rem', fontWeight: 800, color: study.color, textTransform: 'uppercase', letterSpacing: '.07em', background: `${study.color}15`, padding: '.25rem .75rem', borderRadius: '99px', border: `1px solid ${study.color}33` }}>
            {study.category}
          </span>
          <span style={{ fontSize: '.8rem', color: '#4B5563', fontWeight: 600 }}>{study.country}</span>
        </div>

        {/* Client Name */}
        <h3 style={{ color: 'white', fontWeight: 900, fontSize: isLarge ? '1.6rem' : '1.2rem', letterSpacing: '-.03em', lineHeight: 1.15, margin: '0 0 .75rem' }}>
          {study.name}
        </h3>

        {/* Headline */}
        <p style={{ color: '#94A3B8', fontSize: isLarge ? '.95rem' : '.88rem', lineHeight: 1.6, margin: '0 0 1.25rem', fontStyle: 'italic' }}>
          "{study.headline}"
        </p>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${study.stat3 ? 3 : 2}, 1fr)`, borderTop: `1px solid rgba(255,255,255,.05)`, borderBottom: `1px solid rgba(255,255,255,.05)` }}>
        {[study.stat1, study.stat2, study.stat3].filter(Boolean).map((stat, i) => (
          <div key={i} style={{ padding: '1rem .75rem', textAlign: 'center', borderRight: i < (study.stat3 ? 2 : 1) ? '1px solid rgba(255,255,255,.05)' : 'none' }}>
            <div style={{ fontSize: isLarge ? '1.6rem' : '1.3rem', fontWeight: 900, color: study.color, lineHeight: 1, marginBottom: '.2rem' }}>{stat.v}</div>
            <div style={{ fontSize: '.62rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '.05em', lineHeight: 1.3 }}>{stat.l}</div>
          </div>
        ))}
      </div>

      {/* Before / After */}
      <div style={{ padding: '1.25rem 1.75rem', flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem' }}>
          <div style={{ display: 'flex', gap: '.75rem' }}>
            <span style={{ fontSize: '.6rem', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase', letterSpacing: '.06em', flexShrink: 0, marginTop: '.15rem' }}>Before</span>
            <p style={{ color: '#6B7280', fontSize: '.82rem', lineHeight: 1.5, margin: 0 }}>{study.before}</p>
          </div>
          <div style={{ display: 'flex', gap: '.75rem' }}>
            <span style={{ fontSize: '.6rem', fontWeight: 800, color: '#22C55E', textTransform: 'uppercase', letterSpacing: '.06em', flexShrink: 0, marginTop: '.15rem' }}>After</span>
            <p style={{ color: '#E2E8F0', fontSize: '.82rem', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>{study.after}</p>
          </div>
        </div>
      </div>

      {/* Footer: Services + Timeline + CTA */}
      <div style={{ padding: '1rem 1.75rem', borderTop: '1px solid rgba(255,255,255,.04)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.75rem', background: 'rgba(0,0,0,.15)' }}>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
          {study.services.map(s => (
            <span key={s} style={{ fontSize: '.6rem', fontWeight: 700, color: SERVICE_COLORS[s], background: `${SERVICE_COLORS[s]}12`, padding: '.2rem .5rem', borderRadius: '6px', border: `1px solid ${SERVICE_COLORS[s]}25`, textTransform: 'uppercase', letterSpacing: '.04em' }}>{s}</span>
          ))}
        </div>
        <span style={{ fontSize: '.72rem', fontWeight: 700, color: study.color }}>⏱ {study.timeline}</span>
      </div>

      {/* Hover CTA overlay */}
      <motion.a
        href={`https://wa.me/917997001700?text=Hi!%20I%20saw%20${encodeURIComponent(study.name)}'s%20case%20study%20and%20want%20similar%20results.`}
        target="_blank" rel="noreferrer"
        initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
        style={{ position: 'absolute', bottom: '4rem', right: '1.5rem', display: 'flex', alignItems: 'center', gap: '.4rem', padding: '.6rem 1rem', background: study.color, color: '#02010A', fontWeight: 800, fontSize: '.78rem', borderRadius: '10px', textDecoration: 'none', boxShadow: `0 8px 20px -6px ${study.glow}` }}>
        Get these results <ArrowRight size={12} />
      </motion.a>
    </motion.div>
  );
};

export default CaseStudyCard;
