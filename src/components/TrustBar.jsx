import React from 'react';
import TrustNumbers from './TrustNumbers';

// TrustBar now wraps TrustNumbers with the overlapping glassmorphic visual
const TrustBar = () => (
  <section style={{ padding: '0 1rem', background: 'transparent', position: 'relative', zIndex: 10 }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{
        borderRadius: '1.5rem',
        border: '1px solid rgba(168,85,247,.15)',
        background: 'rgba(10,5,30,.85)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 25px 50px -12px rgba(124,58,237,.2), inset 0 1px 0 rgba(255,255,255,.06)',
        overflow: 'hidden',
      }}>
        <TrustNumbers compact />
      </div>
    </div>
  </section>
);

export default TrustBar;
