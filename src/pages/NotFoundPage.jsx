import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { WA_INDIA } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const NotFoundPage = () => {
  useSEO({ title: 'Page Not Found | Creativals', description: 'This page does not exist. Explore Creativals growth systems instead.' });

  return (
    <section style={{ background: '#4F46E5', color: '#F4F2EC', minHeight: 'calc(100vh - 72px)', display: 'flex', alignItems: 'center' }}>
      <div className="cx-wrap cx-section" style={{ width: '100%' }}>
        <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 })}>
          <span className="cx-dot" />
          Error 404 · Page not found
        </div>
        <h1 className="cx-display cx-h1" style={{ marginBottom: 30 }}>
          This page<br />
          <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>ghosted you.</span>
        </h1>
        <p style={{ margin: '0 0 38px', maxWidth: 480, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,242,236,.85)' }}>
          Unlike your leads, we can fix this in one click. The page you're looking for moved, was renamed, or never
          existed.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <Link to="/" className="cx-btn cx-btn-lg cx-btn-ink">Back to home →</Link>
          <Link to="/services" className="cx-btn cx-btn-lg cx-btn-outline-cream">Browse services</Link>
          <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">Get Free Audit</a>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
