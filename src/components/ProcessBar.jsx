import React from 'react';
import { ArrowRight, Megaphone, LayoutTemplate, Database, MessageCircle, BadgeDollarSign } from 'lucide-react';

const ProcessBar = () => (
  <section className="process-bar" style={{ padding: '4rem 0 2rem', background: '#fff', position: 'relative' }}>
    <div className="glow-orb purple" style={{ width: '300px', height: '300px', top: '0', left: '-5%' }}></div>
    
    <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
      <div className="process-track" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', overflowX: 'auto', padding: '1rem 0 2rem' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', flex: 1, textAlign: 'center' }}>
          <div className="animate-float" style={{ background: '#F3E8FF', color: '#7C3AED', padding: '1.25rem', borderRadius: '50%', boxShadow: '0 10px 25px -5px rgba(124,58,237,0.15)' }}>
            <Megaphone size={28} />
          </div>
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#374151', whiteSpace: 'nowrap' }}>Ads (Bring People)</span>
        </div>
        <ArrowRight color="#d1d5db" size={20} style={{ flexShrink: 0, opacity: 0.5 }} />
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', flex: 1, textAlign: 'center' }}>
          <div className="animate-float-delayed" style={{ background: '#F3E8FF', color: '#7C3AED', padding: '1.25rem', borderRadius: '50%', boxShadow: '0 10px 25px -5px rgba(124,58,237,0.15)' }}>
            <LayoutTemplate size={28} />
          </div>
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#374151', whiteSpace: 'nowrap' }}>Website (Convert)</span>
        </div>
        <ArrowRight color="#d1d5db" size={20} style={{ flexShrink: 0, opacity: 0.5 }} />
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', flex: 1, textAlign: 'center' }}>
          <div className="animate-float" style={{ background: '#F3E8FF', color: '#7C3AED', padding: '1.25rem', borderRadius: '50%', boxShadow: '0 10px 25px -5px rgba(124,58,237,0.15)' }}>
            <MessageCircle size={28} />
          </div>
          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#374151', whiteSpace: 'nowrap' }}>WhatsApp (Close)</span>
        </div>

      </div>
    </div>
  </section>
);

export default ProcessBar;
