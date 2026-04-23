import React from 'react';
import { motion } from 'framer-motion';
import { Target, AlertTriangle, UserX, ArrowRight } from 'lucide-react';

const PAINS = [
  {
    Icon: Target,
    color: '#EF4444',
    glow: 'rgba(239,68,68,.2)',
    title: 'Spent on Ads, Zero Leads',
    desc: 'You ran ads. Got clicks. Zero enquiries. The moment the ad budget stopped — the results vanished too. Just burned cash.',
    stat: '₹0 ROI',
  },
  {
    Icon: AlertTriangle,
    color: '#F97316',
    glow: 'rgba(249,115,22,.2)',
    title: 'Agency Gave Reports, Not Results',
    desc: 'Weekly PDFs with fancy graphs — but no actual leads, bookings, or revenue to show for the fees you paid.',
    stat: '0 real results',
  },
  {
    Icon: UserX,
    color: '#A855F7',
    glow: 'rgba(168,85,247,.2)',
    title: 'WhatsApp Leads Ghost You',
    desc: 'Someone enquired, you replied within minutes, they disappeared. No follow-up system exists to automatically close them.',
    stat: '70% ghost rate',
  },
];

const Problem = () => (
  <section style={{ background:'#04030F', position:'relative', overflow:'hidden', padding:'5rem 0' }}>
    <style>{`
      .prob-grid { display:grid; grid-template-columns:1fr 1.4fr; gap:5rem; max-width:1200px; margin:0 auto; padding:0 2rem; align-items:center; }
      .prob-card { display:flex; align-items:flex-start; gap:1.1rem; padding:1.4rem; border-radius:16px; border:1px solid rgba(255,255,255,.05); background:rgba(255,255,255,.02); transition:transform .25s, box-shadow .25s; }
      .prob-card:hover { transform:translateX(6px); }
      @media(max-width:820px){ .prob-grid{grid-template-columns:1fr; gap:3rem;} }
    `}</style>

    {/* Dot grid */}
    <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(239,68,68,.08) 1px,transparent 1px)', backgroundSize:'32px 32px', pointerEvents:'none' }}/>
    {/* Red orb */}
    <motion.div animate={{ scale:[1,1.12,1], opacity:[.08,.16,.08] }} transition={{ duration:10, repeat:Infinity }}
      style={{ position:'absolute', right:'-5%', top:'20%', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle,rgba(239,68,68,.25) 0%,transparent 65%)', pointerEvents:'none' }}/>

    <div className="prob-grid" style={{ position:'relative', zIndex:1 }}>
      {/* Left — Emotional hook */}
      <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:.6 }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.28rem .9rem', background:'rgba(239,68,68,.1)', border:'1px solid rgba(239,68,68,.3)', borderRadius:'99px', marginBottom:'1.25rem' }}>
          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#EF4444', boxShadow:'0 0 8px rgba(239,68,68,.8)' }}/>
          <span style={{ fontSize:'.72rem', fontWeight:800, color:'#FCA5A5', letterSpacing:'.07em', textTransform:'uppercase' }}>The Real Problem</span>
        </div>
        <h2 style={{ color:'white', fontWeight:900, fontSize:'clamp(2rem,3.2vw,3rem)', letterSpacing:'-.04em', lineHeight:1.1, margin:'0 0 1rem' }}>
          Your ads aren't the problem.<br/>
          <span style={{ color:'#EF4444' }}>The system around them is.</span>
        </h2>
        <p style={{ color:'#64748B', fontSize:'.95rem', lineHeight:1.65, margin:'0 0 2rem', maxWidth:'380px' }}>
          Traffic is useless if it doesn't convert. If you recognise any of these three symptoms, you're actively bleeding revenue while your competitors scale.
        </p>
        <motion.a
          href="https://wa.me/917997001700?text=Hi!%20I%20want%20a%20free%20growth%20audit."
          target="_blank" rel="noreferrer"
          whileHover={{ scale:1.04 }} whileTap={{ scale:.97 }}
          style={{ display:'inline-flex', alignItems:'center', gap:'.55rem', padding:'.85rem 1.6rem', background:'rgba(239,68,68,.12)', border:'1px solid rgba(239,68,68,.35)', color:'#FCA5A5', borderRadius:'12px', fontWeight:700, fontSize:'.88rem', textDecoration:'none' }}>
          Fix My System <ArrowRight size={15}/>
        </motion.a>
      </motion.div>

      {/* Right — Pain cards */}
      <div style={{ display:'flex', flexDirection:'column', gap:'.85rem' }}>
        {PAINS.map((p, i) => (
          <motion.div key={p.title} className="prob-card"
            initial={{ opacity:0, x:28 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*.12, duration:.5 }}
            style={{ boxShadow:`0 0 0 0 ${p.glow}`, border:`1px solid ${p.color}18` }}>
            <div style={{ width:'42px', height:'42px', borderRadius:'12px', background:`${p.color}15`, border:`1px solid ${p.color}30`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <p.Icon size={20} color={p.color} strokeWidth={2}/>
            </div>
            <div style={{ flex:1 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'.5rem', marginBottom:'.35rem' }}>
                <h3 style={{ color:'white', fontWeight:800, fontSize:'.95rem', margin:0, lineHeight:1.3 }}>{p.title}</h3>
                <span style={{ fontSize:'.65rem', fontWeight:800, color:p.color, background:`${p.color}15`, padding:'.2rem .55rem', borderRadius:'99px', border:`1px solid ${p.color}30`, flexShrink:0, whiteSpace:'nowrap' }}>{p.stat}</span>
              </div>
              <p style={{ color:'#6B7280', fontSize:'.82rem', lineHeight:1.55, margin:0 }}>{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
