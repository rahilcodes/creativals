import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const SERVICE_COLORS = {
  'Web Development': { text: '#0369A1', bg: '#E0F2FE', border: '#BAE6FD' },
  'Marketing':       { text: '#6D28D9', bg: '#EDE9FE', border: '#C4B5FD' },
  'Graphic Design':  { text: '#C2410C', bg: '#FFF7ED', border: '#FDBA74' },
};

const CaseStudyCard = ({ study, index = 0, size = 'normal' }) => {
  const isLarge = size === 'large';

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.55 }}
      whileHover={{ y: -6 }}
      style={{
        borderRadius: 20,
        border: `1.5px solid ${study.color}30`,
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform .3s, box-shadow .3s',
        height: '100%',
        boxShadow: `0 4px 24px ${study.color}12, 0 1px 4px rgba(0,0,0,.05)`,
      }}
    >
      {/* Bold colored top bar */}
      <div style={{
        height: 4,
        background: `linear-gradient(90deg, ${study.color}, ${study.color}66)`,
      }} />

      {/* Header — gradient tint bg */}
      <div style={{
        padding: isLarge ? '1.75rem 2rem 1.25rem' : '1.5rem 1.75rem 1rem',
        background: `linear-gradient(160deg, ${study.color}10 0%, #ffffff 100%)`,
        borderBottom: `1px solid ${study.color}18`,
      }}>
        {/* Category + Country */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.85rem', flexWrap: 'wrap', gap: '.5rem' }}>
          <span style={{
            fontSize: '.65rem', fontWeight: 800, color: study.color,
            textTransform: 'uppercase', letterSpacing: '.08em',
            background: `${study.color}15`, padding: '.22rem .75rem',
            borderRadius: '99px', border: `1px solid ${study.color}35`,
          }}>
            {study.category}
          </span>
          <span style={{ fontSize: '.72rem', color: '#6B7280', fontWeight: 600 }}>{study.country}</span>
        </div>

        {/* Client Name */}
        <h3 style={{
          color: '#111111', fontWeight: 900,
          fontSize: isLarge ? '1.55rem' : '1.2rem',
          letterSpacing: '-.03em', lineHeight: 1.15, margin: '0 0 .6rem',
        }}>
          {study.name}
        </h3>

        {/* Headline quote */}
        <p style={{
          color: study.color, fontSize: isLarge ? '.92rem' : '.84rem',
          lineHeight: 1.55, margin: 0, fontStyle: 'italic', fontWeight: 600,
          opacity: 0.85,
        }}>
          "{study.headline}"
        </p>
      </div>

      {/* Stats row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${study.stat3 ? 3 : 2}, 1fr)`,
        borderBottom: `1px solid ${study.color}15`,
        background: `${study.color}06`,
      }}>
        {[study.stat1, study.stat2, study.stat3].filter(Boolean).map((stat, i, arr) => (
          <div key={i} style={{
            padding: '.9rem .6rem',
            textAlign: 'center',
            borderRight: i < arr.length - 1 ? `1px solid ${study.color}18` : 'none',
          }}>
            <div style={{
              fontSize: isLarge ? '1.55rem' : '1.25rem',
              fontWeight: 900, color: study.color,
              lineHeight: 1, marginBottom: '.2rem',
            }}>{stat.v}</div>
            <div style={{
              fontSize: '.58rem', fontWeight: 800, color: '#6B7280',
              textTransform: 'uppercase', letterSpacing: '.06em', lineHeight: 1.3,
            }}>{stat.l}</div>
          </div>
        ))}
      </div>

      {/* Before / After */}
      <div style={{ padding: '1.1rem 1.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
        {/* BEFORE */}
        <div style={{
          display: 'flex', gap: '.75rem', alignItems: 'flex-start',
          background: '#FEF2F2', borderRadius: 10, padding: '.65rem .85rem',
          border: '1px solid #FECACA',
        }}>
          <span style={{
            fontSize: '.58rem', fontWeight: 900, color: '#DC2626',
            textTransform: 'uppercase', letterSpacing: '.08em',
            flexShrink: 0, marginTop: '.15rem',
            background: '#FEE2E2', padding: '.15rem .45rem',
            borderRadius: '4px', border: '1px solid #FECACA',
          }}>Before</span>
          <p style={{ color: '#6B7280', fontSize: '.8rem', lineHeight: 1.5, margin: 0 }}>{study.before}</p>
        </div>

        {/* AFTER */}
        <div style={{
          display: 'flex', gap: '.75rem', alignItems: 'flex-start',
          background: '#F0FDF4', borderRadius: 10, padding: '.65rem .85rem',
          border: '1px solid #BBF7D0',
        }}>
          <span style={{
            fontSize: '.58rem', fontWeight: 900, color: '#16A34A',
            textTransform: 'uppercase', letterSpacing: '.08em',
            flexShrink: 0, marginTop: '.15rem',
            background: '#DCFCE7', padding: '.15rem .45rem',
            borderRadius: '4px', border: '1px solid #BBF7D0',
          }}>After</span>
          <p style={{ color: '#374151', fontSize: '.8rem', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>{study.after}</p>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: '.85rem 1.75rem',
        borderTop: `1px solid ${study.color}12`,
        background: `${study.color}04`,
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '.5rem',
      }}>
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {study.services.map(s => {
            const sc = SERVICE_COLORS[s] || { text: '#6B7280', bg: '#F3F4F6', border: '#E5E7EB' };
            return (
              <span key={s} style={{
                fontSize: '.58rem', fontWeight: 800,
                color: sc.text, background: sc.bg,
                padding: '.2rem .55rem', borderRadius: '6px',
                border: `1px solid ${sc.border}`,
                textTransform: 'uppercase', letterSpacing: '.05em',
              }}>{s}</span>
            );
          })}
        </div>
        <span style={{
          fontSize: '.68rem', fontWeight: 700, color: '#6B7280',
          display: 'flex', alignItems: 'center', gap: '.3rem',
        }}>
          <Clock size={11} color="#9CA3AF" /> {study.timeline}
        </span>
      </div>

      {/* Always-visible CTA button */}
      <div style={{ padding: '0 1.75rem 1.25rem' }}>
        <motion.a
          href={`https://wa.me/917997001700?text=Hi!%20I%20saw%20${encodeURIComponent(study.name)}'s%20case%20study%20and%20want%20similar%20results.`}
          target="_blank" rel="noreferrer"
          whileHover={{ scale: 1.02 }} whileTap={{ scale: .97 }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.45rem',
            padding: '.7rem 1.2rem',
            background: `linear-gradient(135deg, ${study.color}, ${study.color}cc)`,
            color: '#ffffff', fontWeight: 800, fontSize: '.8rem',
            borderRadius: 12, textDecoration: 'none',
            boxShadow: `0 4px 16px ${study.color}30`,
            letterSpacing: '.01em',
          }}
        >
          Get these results <ArrowRight size={13} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
