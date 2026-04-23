import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AGGREGATE_STATS } from '../data/clientData';

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const StatBox = ({ stat, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(stat.value, 2200, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{ textAlign: 'center', padding: '1.5rem 1rem', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
      {/* Glow dot */}
      <div style={{ width: 8, height: 8, borderRadius: '50%', background: stat.color, boxShadow: `0 0 12px ${stat.color}`, margin: '0 auto 0.75rem', animation: 'pulse 2s infinite', flexShrink: 0 }} />
      <div style={{ fontSize: 'clamp(1.4rem, 2.4vw, 2.2rem)', fontWeight: 900, color: 'white', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.5rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
        {stat.prefix || ''}{count}{stat.suffix}
      </div>
      <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.07em', lineHeight: 1.4, minHeight: '2.8em', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
        {stat.label}
      </div>
    </motion.div>
  );
};

const TrustNumbers = ({ compact = false }) => (
  <section style={{
    background: compact ? 'transparent' : '#02010A',
    position: 'relative',
    overflow: 'hidden',
    padding: compact ? '0' : '4rem 2rem',
  }}>
    {!compact && (
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(168,85,247,.06) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
    )}
    <div style={{
      maxWidth: compact ? '100%' : '1100px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: `repeat(${AGGREGATE_STATS.length}, 1fr)`,
      gap: '0',
      background: compact ? 'transparent' : 'rgba(255,255,255,.02)',
      border: compact ? 'none' : '1px solid rgba(255,255,255,.06)',
      borderRadius: compact ? '0' : '20px',
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
    }}>
      {AGGREGATE_STATS.map((stat, i) => (
        <div key={stat.label} style={{ borderRight: i < AGGREGATE_STATS.length - 1 ? '1px solid rgba(255,255,255,.05)' : 'none' }}>
          <StatBox stat={stat} index={i} />
        </div>
      ))}
    </div>
    <style>{`
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }
      @media(max-width:768px){
        div[style*="repeat(${AGGREGATE_STATS.length}, 1fr)"] {
          grid-template-columns: repeat(3,1fr)!important;
        }
      }
      @media(max-width:480px){
        div[style*="repeat(${AGGREGATE_STATS.length}, 1fr)"] {
          grid-template-columns: repeat(2,1fr)!important;
        }
      }
    `}</style>
  </section>
);

export default TrustNumbers;
