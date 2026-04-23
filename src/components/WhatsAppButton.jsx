import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, MessageCircle, Calendar, Sun, Zap, Moon, MapPin, HelpCircle, Check, Lock } from 'lucide-react';

const WA_MSG = encodeURIComponent('Hi! I want a free Growth Audit for my business.');
const WA_IN  = `https://wa.me/917997001700?text=${WA_MSG}`;
const WA_US  = `https://wa.me/16286284743?text=${WA_MSG}`;
const CAL    = 'https://calendly.com/smmcreativals/30min';

/* Time-aware greeting */
function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return { Icon: Sun, text: "Good morning! Let's build something.", sub: 'Our team is just getting started.' };
  if (h < 17) return { Icon: Zap, text: "We're at peak energy. Let's talk.", sub: 'Best time to start your growth.' };
  return       { Icon: Moon, text: 'Night owl? So are we.', sub: 'We reply even after hours.' };
}

const ACTIONS = [
  { id:'wa-in', Icon: MessageCircle, label:'WhatsApp India',       sub:'+91 799 700 1700',        color:'#22C55E', href: WA_IN },
  { id:'wa-us', Icon: MessageCircle, label:'WhatsApp USA',         sub:'+1 628 628 4743',         color:'#38BDF8', href: WA_US },
  { id:'book',  Icon: Calendar,      label:'Book a Strategy Call', sub:'30-min free · No pressure', color:'#A78BFA', href: CAL  },
];

/* Liquid blob morph keyframes */
const BLOB_KF = {
  animate: {
    borderRadius: [
      '60% 40% 30% 70% / 60% 30% 70% 40%',
      '30% 60% 70% 40% / 50% 60% 30% 60%',
      '50% 60% 30% 60% / 40% 30% 70% 50%',
      '40% 60% 70% 30% / 60% 40% 30% 70%',
      '60% 40% 30% 70% / 60% 30% 70% 40%',
    ],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
};

const ContactDock = () => {
  const [open, setOpen]         = useState(false);
  const [teaser, setTeaser]     = useState(false);
  const [show8Ball, set8Ball]   = useState(false);
  const [flipped, setFlipped]   = useState(false);
  const greeting = getGreeting();

  /* Show greeting teaser after 4s, Magic 8-ball after 9s */
  useEffect(() => {
    const t1 = setTimeout(() => setTeaser(true),  4000);
    const t2 = setTimeout(() => setTeaser(false),  8500);
    const t3 = setTimeout(() => set8Ball(true),   9500);
    const t4 = setTimeout(() => set8Ball(false),  16000);
    return () => [t1,t2,t3,t4].forEach(clearTimeout);
  }, []);

  return (
    <div style={{ position:'fixed', bottom:'1.5rem', right:'1.5rem', zIndex:9999, display:'flex', flexDirection:'column', alignItems:'flex-end', gap:'0.5rem' }}>

      {/* ── Greeting teaser bubble ──────────────────── */}
      <AnimatePresence>
        {teaser && !open && (
          <motion.div
            initial={{ opacity:0, y:8, scale:0.9 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:8, scale:0.9 }}
            style={{
              background:'#0F172A', borderRadius:'1rem 1rem 0.25rem 1rem',
              padding:'0.65rem 0.9rem', maxWidth:220,
              boxShadow:'0 8px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)',
            }}
          >
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', width:24, height:24, borderRadius:'50%', background:'rgba(255,255,255,0.1)', marginBottom:'0.4rem', color:'#F1F5F9' }}>
              <greeting.Icon size={14} />
            </div>
            <div style={{ fontSize:'0.78rem', fontWeight:700, color:'#E2E8F0', lineHeight:1.3 }}>{greeting.text}</div>
            <div style={{ fontSize:'0.62rem', color:'#64748B', marginTop:'0.2rem' }}>{greeting.sub}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Magic 8-Ball teaser ─────────────────────── */}
      <AnimatePresence>
        {show8Ball && !open && (
          <motion.div
            initial={{ opacity:0, scale:0.85, y:10 }}
            animate={{ opacity:1, scale:1, y:0 }}
            exit={{ opacity:0, scale:0.85 }}
            onClick={() => { setFlipped(true); setTimeout(() => { set8Ball(false); setOpen(true); }, 900); }}
            style={{
              background:'#0F172A', borderRadius:'1rem 1rem 0.25rem 1rem',
              padding:'0.75rem 1rem', maxWidth:230, cursor:'pointer',
              boxShadow:'0 8px 24px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.25)',
            }}
          >
            <div style={{ fontSize:'0.72rem', color:'#94A3B8', fontWeight:500, marginBottom:'0.3rem', fontStyle:'italic' }}>
              "Will Creativals help my business grow?"
            </div>
            <AnimatePresence mode="wait">
              {!flipped ? (
                <motion.div key="q" style={{ display:'flex', alignItems:'center', gap:'0.4rem' }}>
                  <div style={{ width:28, height:28, borderRadius:'50%', background:'linear-gradient(135deg,#1E1B4B,#4C1D95)', display:'flex', alignItems:'center', justifyContent:'center', color:'#A78BFA' }}>
                    <HelpCircle size={14} />
                  </div>
                  <span style={{ fontSize:'0.7rem', color:'#7C3AED', fontWeight:700 }}>Tap to find out →</span>
                </motion.div>
              ) : (
                <motion.div key="a" initial={{ rotateY:90 }} animate={{ rotateY:0 }} style={{ display:'flex', alignItems:'center', gap:'0.4rem' }}>
                  <div style={{ width:28, height:28, borderRadius:'50%', background:'linear-gradient(135deg,#14532D,#22C55E)', display:'flex', alignItems:'center', justifyContent:'center', color:'white' }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize:'0.75rem', fontWeight:800, color:'#22C55E' }}>Signs point to YES</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Expanded panel ──────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0, y:14, scale:0.92 }}
            animate={{ opacity:1, y:0, scale:1 }}
            exit={{ opacity:0, y:14, scale:0.92 }}
            transition={{ type:'spring', stiffness:360, damping:30 }}
            style={{
              width:258, background:'#0F172A', borderRadius:'1.125rem', overflow:'hidden',
              boxShadow:'0 20px 50px -8px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.07)',
              transformOrigin:'bottom right',
            }}
          >
            {/* Header */}
            <div style={{ padding:'0.8rem 0.9rem', borderBottom:'1px solid rgba(255,255,255,0.06)', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <div>
                <div style={{ fontWeight:800, fontSize:'0.85rem', color:'#F1F5F9' }}>Talk to Creativals</div>
                <div style={{ display:'flex', alignItems:'center', gap:'0.3rem', marginTop:'0.15rem' }}>
                  <span style={{ width:6, height:6, borderRadius:'50%', background:'#22C55E', display:'inline-block', boxShadow:'0 0 5px rgba(34,197,94,0.9)' }}/>
                  <span style={{ fontSize:'0.6rem', color:'#64748B', fontWeight:600 }}>Online · Fast responses</span>
                </div>
              </div>
              <button onClick={() => setOpen(false)} style={{ background:'rgba(255,255,255,0.06)', border:'none', borderRadius:'50%', width:26, height:26, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', color:'#64748B', padding:0 }}>
                <X size={13}/>
              </button>
            </div>

            {/* Actions */}
            <div style={{ padding:'0.5rem' }}>
              {ACTIONS.map(({ id, Icon, label, sub, color, href }) => (
                <motion.a key={id} href={href} target="_blank" rel="noreferrer"
                  whileHover={{ x:3, backgroundColor:`${color}12` }}
                  style={{ display:'flex', alignItems:'center', gap:'0.6rem', padding:'0.6rem 0.65rem', borderRadius:'0.6rem', textDecoration:'none', marginBottom:'0.22rem', transition:'background 0.15s' }}
                >
                  <div style={{ width:32, height:32, borderRadius:'0.5rem', background:`${color}18`, display:'flex', alignItems:'center', justifyContent:'center', color:color, flexShrink:0 }}>
                    <Icon size={14} />
                  </div>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:'0.78rem', fontWeight:700, color:'#E2E8F0', lineHeight:1.2 }}>{label}</div>
                    <div style={{ fontSize:'0.6rem', color:'#475569', marginTop:'0.1rem' }}>{sub}</div>
                  </div>
                  <ArrowRight size={12} color={color} style={{ flexShrink:0, opacity:0.7 }}/>
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <div style={{ padding:'0.4rem 0.9rem 0.65rem', textAlign:'center', borderTop:'1px solid rgba(255,255,255,0.04)' }}>
              <span style={{ display:'inline-flex', alignItems:'center', gap:'0.25rem', fontSize:'0.57rem', color:'#1E293B', fontWeight:600 }}>
                <Lock size={10} /> No spam · Your data is always safe
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Liquid Blob FAB ─────────────────────────── */}
      <motion.button
        onClick={() => { setOpen(o => !o); setTeaser(false); set8Ball(false); setFlipped(false); }}
        whileHover={{ scale:1.06 }}
        whileTap={{ scale:0.94 }}
        {...(!open ? BLOB_KF : {})}
        animate={open ? { borderRadius:'99px' } : {
          borderRadius: BLOB_KF.animate.borderRadius,
          boxShadow: [
            '0 0 0 0 rgba(124,58,237,0.5)',
            '0 0 0 10px rgba(124,58,237,0)',
            '0 0 0 0 rgba(124,58,237,0)',
          ],
        }}
        transition={open ? { duration:0.3 } : { duration:2.4, repeat:Infinity }}
        aria-label="Contact Creativals"
        style={{
          width:54, height:54, padding:0,
          background: open ? '#1E293B' : 'linear-gradient(135deg,#7C3AED,#EC4899)',
          border: open ? '1px solid rgba(255,255,255,0.1)' : 'none',
          cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
          color:'white', position:'relative',
          boxShadow: open ? '0 4px 16px rgba(0,0,0,0.4)' : '0 6px 24px -4px rgba(124,58,237,0.6)',
          transition:'background 0.25s, border 0.25s',
        }}
      >
        {open ? <X size={18}/> : <MessageCircle size={19}/>}

        {/* Online dot */}
        {!open && (
          <span style={{ position:'absolute', top:5, right:5, width:8, height:8, borderRadius:'50%', background:'#22C55E', border:'1.5px solid #060608', boxShadow:'0 0 6px rgba(34,197,94,0.9)' }}/>
        )}

        {/* Unread badge */}
        {!open && (
          <motion.div
            animate={{ scale:[1,1.25,1] }} transition={{ duration:1.8, repeat:Infinity }}
            style={{ position:'absolute', top:-3, right:-3, width:14, height:14, borderRadius:'50%', background:'#EF4444', border:'2px solid #060608', fontSize:'0.42rem', color:'white', fontWeight:900, display:'flex', alignItems:'center', justifyContent:'center' }}
          >1</motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default ContactDock;
