import React from 'react';
import { motion } from 'framer-motion';
import { Target, MonitorSmartphone, Database, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const STEPS = [
  { num:'01', Icon:Target,           color:'#7C3AED', bg:'#F5F0FF', border:'rgba(124,58,237,.25)', title:'Targeted Ads',         text:'Meta & Google ads targeting your exact customer — by location, intent, and behaviour. No guesswork.' },
  { num:'02', Icon:MonitorSmartphone, color:'#0369A1', bg:'#EFF6FF', border:'rgba(3,105,161,.25)',   title:'High-Converting Page', text:'A focused landing page built to turn clicks into enquiries. Not a generic homepage. A closer.' },
  { num:'03', Icon:Database,          color:'#16A34A', bg:'#F0FDF4', border:'rgba(22,163,74,.25)',   title:'CRM & Lead Tracker',   text:'Every lead is captured, tagged, and tracked automatically. Nothing falls through the cracks.' },
  { num:'04', Icon:Zap,               color:'#C2410C', bg:'#FFF7ED', border:'rgba(194,65,12,.25)',   title:'24/7 Automation',      text:'Auto-follow-up on WhatsApp & email. Your leads get nurtured around the clock — even while you sleep.' },
  { num:'05', Icon:TrendingUp,        color:'#BE185D', bg:'#FDF2F8', border:'rgba(190,24,93,.25)',   title:'Revenue Conversion',   text:'You receive warm, ready-to-buy leads — not just traffic metrics that look good in a PDF.' },
];

const Method = () => (
  <section style={{ background:'#F8F6FF', position:'relative', overflow:'hidden', padding:'5rem 0' }}>
    <style>{`
      .mth-steps { display:grid; grid-template-columns:repeat(5,1fr); gap:1rem; max-width:1200px; margin:0 auto; padding:0 2rem; }
      .mth-card { border-radius:16px; padding:1.5rem 1.2rem; border:1.5px solid #E5E7EB; background:#ffffff; display:flex; flex-direction:column; gap:.75rem; position:relative; overflow:hidden; transition:transform .25s, box-shadow .25s, border-color .25s; cursor:default; }
      .mth-card:hover { transform:translateY(-6px); }
      .mth-connector { position:absolute; top:2rem; right:-50%; width:100%; height:1px; background:linear-gradient(90deg,rgba(0,0,0,.08),transparent); pointer-events:none; }
      @media(max-width:1024px){ .mth-steps{grid-template-columns:repeat(3,1fr);} }
      @media(max-width:768px){ .mth-steps{grid-template-columns:1fr 1fr;} }
      @media(max-width:540px){ .mth-steps{grid-template-columns:1fr;} }
    `}</style>

    {/* Soft dot grid */}
    <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(124,58,237,.05) 1px,transparent 1px)', backgroundSize:'36px 36px', pointerEvents:'none' }}/>

    <div style={{ position:'relative', zIndex:1 }}>
      {/* Heading */}
      <div style={{ textAlign:'center', marginBottom:'3rem', padding:'0 2rem' }}>
        <motion.div initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.28rem .9rem', background:'rgba(124,58,237,.08)', border:'1px solid rgba(124,58,237,.2)', borderRadius:'99px', marginBottom:'1rem' }}>
          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#7C3AED' }}/>
          <span style={{ fontSize:'.72rem', fontWeight:800, color:'#7C3AED', letterSpacing:'.07em', textTransform:'uppercase' }}>Our Method</span>
        </motion.div>
        <motion.h2 initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.1 }}
          style={{ color:'#1A1040', fontWeight:900, fontSize:'clamp(1.8rem,3vw,2.6rem)', letterSpacing:'-.04em', lineHeight:1.1, margin:'0 0 .75rem' }}>
          Most agencies run ads.<br/>
          <span style={{ background:'linear-gradient(135deg,#7C3AED,#0369A1)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>We build systems.</span>
        </motion.h2>
        <p style={{ color:'#6B7280', fontSize:'.92rem', maxWidth:'500px', margin:'0 auto', lineHeight:1.6 }}>
          A system keeps working even when you're asleep. Here's the full architecture we deploy for every client:
        </p>
      </div>

      {/* Step cards */}
      <div className="mth-steps">
        {STEPS.map((s, i) => (
          <motion.div key={s.num} className="mth-card"
            initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ delay:i*.1, duration:.5 }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow=`0 12px 40px -10px ${s.color}33`; e.currentTarget.style.borderColor=`${s.color}40`; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow='none'; e.currentTarget.style.borderColor='#E5E7EB'; }}
          >
            {/* Connector line */}
            {i < STEPS.length - 1 && <div className="mth-connector"/>}

            {/* Number watermark */}
            <div style={{ position:'absolute', top:'-8px', right:'12px', fontSize:'3rem', fontWeight:900, color:s.color, opacity:.05, letterSpacing:'-3px', lineHeight:1, userSelect:'none' }}>{s.num}</div>

            {/* Icon — solid tinted background with brand color icon */}
            <div style={{ width:'44px', height:'44px', borderRadius:'12px', background:s.bg, border:`2px solid ${s.border}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <s.Icon size={20} color={s.color} strokeWidth={2}/>
            </div>

            {/* Step number label */}
            <div style={{ fontSize:'.62rem', fontWeight:800, color:s.color, letterSpacing:'.08em', textTransform:'uppercase' }}>Step {s.num}</div>

            <h3 style={{ color:'#1A1040', fontWeight:800, fontSize:'.92rem', margin:0, lineHeight:1.3, letterSpacing:'-.02em' }}>{s.title}</h3>
            <p style={{ color:'#6B7280', fontSize:'.78rem', lineHeight:1.55, margin:0 }}>{s.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA strip */}
      <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.4 }}
        style={{ textAlign:'center', marginTop:'2.5rem' }}>
        <a href="https://wa.me/917997001700?text=Hi!%20I%20want%20a%20free%20growth%20audit."
          target="_blank" rel="noreferrer"
          style={{ display:'inline-flex', alignItems:'center', gap:'.55rem', padding:'.85rem 1.75rem', background:'linear-gradient(135deg,#7C3AED,#A855F7)', color:'#ffffff', borderRadius:'12px', fontWeight:700, fontSize:'.88rem', textDecoration:'none', boxShadow:'0 6px 24px -4px rgba(124,58,237,.4)' }}>
          Get this exact system built for my business <ArrowRight size={14} color="#ffffff"/>
        </a>
      </motion.div>
    </div>
  </section>
);

export default Method;
