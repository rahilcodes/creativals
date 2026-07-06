import React, { useState } from 'react';
import { X, ArrowRight, MessageCircle, Calendar } from 'lucide-react';

const WA_MSG = encodeURIComponent('Hi! I want a free Growth Audit for my business.');
const ACTIONS = [
  { id: 'wa-in', Icon: MessageCircle, label: 'WhatsApp India', sub: '+91 799 700 1700', href: `https://wa.me/917997001700?text=${WA_MSG}` },
  { id: 'wa-us', Icon: MessageCircle, label: 'WhatsApp USA', sub: '+1 628 628 4743', href: `https://wa.me/16286284743?text=${WA_MSG}` },
  { id: 'book', Icon: Calendar, label: 'Book a Strategy Call', sub: '30-min free · No pressure', href: 'https://calendly.com/smmcreativals/30min' },
];

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const ContactDock = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.6rem' }}>
      {open && (
        <div style={{ width: 268, background: '#17151A', color: '#F4F2EC', border: '2px solid #17151A', borderRadius: 18, overflow: 'hidden', boxShadow: '8px 8px 0 #FFD84D' }}>
          <div style={{ padding: '0.9rem 1rem', borderBottom: '1px solid rgba(244,242,236,.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Talk to Creativals</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.2rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3DDC84', display: 'inline-block' }} />
                <span style={mono({ fontSize: '0.58rem', letterSpacing: '.08em', textTransform: 'uppercase', opacity: .55 })}>Online · Fast responses</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" style={{ background: 'rgba(244,242,236,.08)', border: 'none', borderRadius: '50%', width: 26, height: 26, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F4F2EC', padding: 0 }}>
              <X size={13} />
            </button>
          </div>
          <div style={{ padding: '0.5rem' }}>
            {ACTIONS.map(({ id, Icon, label, sub, href }) => (
              <a key={id} href={href} target="_blank" rel="noreferrer" className="cx-dock-item"
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.65rem 0.7rem', borderRadius: 10, textDecoration: 'none', color: '#F4F2EC', marginBottom: '0.2rem', transition: 'background .15s' }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: '#FFD84D', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#17151A', flexShrink: 0 }}>
                  <Icon size={15} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, lineHeight: 1.2 }}>{label}</div>
                  <div style={mono({ fontSize: '0.58rem', opacity: .5, marginTop: '0.1rem' })}>{sub}</div>
                </div>
                <ArrowRight size={12} color="#FFD84D" style={{ flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Contact Creativals"
        style={{
          width: 56, height: 56, padding: 0, borderRadius: '50%',
          background: open ? '#17151A' : '#FFD84D',
          color: open ? '#F4F2EC' : '#17151A',
          border: '2px solid #17151A',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '4px 4px 0 rgba(23,21,26,.35)',
          transition: 'transform .15s, background .2s, color .2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        {open ? <X size={20} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
};

export default ContactDock;
