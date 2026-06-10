import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ShoppingBag, CalendarCheck, ArrowRight, CheckCircle } from 'lucide-react';

const FUNNELS = [
  {
    Icon: Filter, color:'#A855F7', glow:'rgba(168,85,247,.2)', bg:'rgba(168,85,247,.06)', border:'rgba(168,85,247,.2)',
    title:'Lead Generation Funnel', bestFor:'B2B · Services · Real Estate',
    desc:'Captures high-intent prospects and nurtures them until they are ready to buy.',
    steps:['Meta / Google Ad','Value-Driven Landing Page','Data Capture (Form / WhatsApp)','Automated Nurturing Sequence','Sales Call & Close'],
    result:'500+ leads/month avg.',
  },
  {
    Icon: ShoppingBag, color:'#38BDF8', glow:'rgba(56,189,248,.2)', bg:'rgba(56,189,248,.06)', border:'rgba(56,189,248,.2)',
    title:'Direct Sales Funnel', bestFor:'E-commerce · D2C Brands',
    desc:'Turns cold traffic into paying customers fast. Optimised for immediate conversions.',
    steps:['High-Hook Video Ad','Optimised Product Page','Friction-free Checkout','1-Click Post-Purchase Upsell','Retention Email Flow'],
    result:'300% avg. ROAS',
  },
  {
    Icon: CalendarCheck, color:'#22C55E', glow:'rgba(34,197,94,.2)', bg:'rgba(34,197,94,.06)', border:'rgba(34,197,94,.2)',
    title:'Appointment Funnel', bestFor:'Clinics · Salons · Consultants',
    desc:'Fills your calendar with qualified prospects — while minimising no-shows.',
    steps:['Geo-Targeted Local Ad','Direct Booking Page','Pre-Qualification Survey','Auto SMS / WhatsApp Reminders','In-Person / Zoom Arrival'],
    result:'60% more direct bookings',
  },
];

const Funnels = () => {
  const [active, setActive] = useState(0);
  const f = FUNNELS[active];

  return (
    <section style={{ background:'#ffffff', position:'relative', overflow:'hidden', padding:'5rem 0' }}>
      <style>{`
        .fn-grid { display:grid; grid-template-columns:1fr 1.3fr; gap:3rem; max-width:1200px; margin:0 auto; padding:0 2rem; align-items:stretch; }
        .fn-tab { width:100%; text-align:left; border:none; cursor:pointer; border-radius:14px; padding:1.1rem 1.3rem; display:flex; align-items:center; gap:1rem; font-family:inherit; transition:all .22s; }
        .fn-step { display:flex; align-items:center; gap:.75rem; color:#374151; font-size:.82rem; font-weight:600; }
        @media(max-width:860px){ .fn-grid{grid-template-columns:1fr;} }
      `}</style>

      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(124,58,237,.04) 1px,transparent 1px)', backgroundSize:'32px 32px', pointerEvents:'none' }}/>
      <motion.div animate={{ scale:[1,1.1,1], opacity:[.06,.12,.06] }} transition={{ duration:11, repeat:Infinity }}
        style={{ position:'absolute', left:'-8%', bottom:'10%', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle,rgba(124,58,237,.15) 0%,transparent 65%)', pointerEvents:'none' }}/>

      <div style={{ position:'relative', zIndex:1 }}>
        {/* Heading */}
        <div style={{ textAlign:'center', marginBottom:'3rem', padding:'0 2rem' }}>
          <motion.div initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.28rem .9rem', background:'rgba(124,58,237,.08)', border:'1px solid rgba(124,58,237,.2)', borderRadius:'99px', marginBottom:'1rem' }}>
            <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#A855F7' }}/>
            <span style={{ fontSize:'.72rem', fontWeight:800, color:'#7C3AED', letterSpacing:'.07em', textTransform:'uppercase' }}>Education & Strategy</span>
          </motion.div>
          <motion.h2 initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.1 }}
            style={{ color:'#1A1040', fontWeight:900, fontSize:'clamp(1.8rem,3vw,2.6rem)', letterSpacing:'-.04em', lineHeight:1.1, margin:'0 0 .75rem' }}>
            Know exactly which funnel
            <br/><span style={{ background:'linear-gradient(135deg,#A855F7,#38BDF8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>your business actually needs.</span>
          </motion.h2>
          <p style={{ color:'#6B7280', fontSize:'.92rem', maxWidth:'520px', margin:'0 auto', lineHeight:1.6 }}>
            Using a lead funnel for a D2C brand — or a sales funnel for a consulting firm — will burn your ad spend. Here's exactly what we build and why.
          </p>
        </div>

        <div className="fn-grid">
          {/* Tabs */}
          <div style={{ display:'flex', flexDirection:'column', gap:'.65rem' }}>
            {FUNNELS.map((fn, i) => {
              const isA = active === i;
              return (
                <motion.button key={fn.title} className="fn-tab" onClick={() => setActive(i)}
                  whileHover={{ x:4 }}
              style={{ background: isA ? `linear-gradient(135deg, ${fn.color}12, ${fn.color}06)` : '#ffffff', border:`1.5px solid ${isA ? fn.color + '40' : 'rgba(0,0,0,.08)'}`,
                boxShadow: isA ? `0 4px 20px ${fn.glow}` : '0 1px 4px rgba(0,0,0,.05)' }}>
                  <div style={{ width:'36px', height:'36px', borderRadius:'10px', background: isA ? `${fn.color}18` : '#F3F4F6', border:`1.5px solid ${isA ? fn.color + '35' : '#E5E7EB'}`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transition:'all .22s' }}>
                    <fn.Icon size={16} color={isA ? fn.color : '#9CA3AF'} strokeWidth={2}/>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:'.88rem', fontWeight: isA ? 800 : 600, color: isA ? '#1A1040' : '#6B7280', lineHeight:1.3, transition:'color .22s' }}>{fn.title}</div>
                    <div style={{ fontSize:'.68rem', color: isA ? fn.color : '#9CA3AF', fontWeight:600, marginTop:'2px', transition:'color .22s' }}>{fn.bestFor}</div>
                  </div>
                  {isA && <ArrowRight size={14} color={fn.color}/>}
                </motion.button>
              );
            })}
            {/* Result badge */}
            <div style={{ padding:'.85rem 1.1rem', background:'#F0FDF4', border:'1.5px solid #BBF7D0', borderRadius:'12px', marginTop:'.25rem' }}>
              <div style={{ fontSize:'.72rem', color:'#16A34A', fontWeight:700, marginBottom:'.2rem' }}>
                Avg. result with this system:
              </div>
              <div style={{ fontSize:'.95rem', color:'#15803D', fontWeight:900 }}>{f.result}</div>
            </div>
          </div>

          {/* Dynamic card */}
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity:0, y:18, scale:.97 }} animate={{ opacity:1, y:0, scale:1 }} exit={{ opacity:0, y:-14, scale:.97 }}
              transition={{ duration:.28, ease:'easeOut' }}
              style={{ background:'#ffffff', border:`1.5px solid ${f.color}30`, borderRadius:'20px', padding:'2rem', position:'relative', overflow:'hidden', boxShadow:`0 6px 32px ${f.color}15` }}>
              <div style={{ position:'absolute', top:'-30px', right:'-30px', width:'160px', height:'160px', borderRadius:'50%', background:`radial-gradient(circle, ${f.glow} 0%, transparent 70%)`, pointerEvents:'none' }}/>

              {/* Badge + Title */}
              <div style={{ display:'inline-flex', alignItems:'center', gap:'.45rem', padding:'.25rem .7rem', background:`${f.color}18`, border:`1px solid ${f.border}`, borderRadius:'99px', marginBottom:'.85rem' }}>
                <f.Icon size={11} color={f.color}/>
                <span style={{ fontSize:'.62rem', fontWeight:800, color:f.color, letterSpacing:'.07em', textTransform:'uppercase' }}>Funnel Architecture</span>
              </div>
              <h3 style={{ color:'#1A1040', fontWeight:900, fontSize:'1.3rem', letterSpacing:'-.03em', lineHeight:1.15, margin:'0 0 .6rem' }}>{f.title}</h3>
              <p style={{ color:'#6B7280', fontSize:'.85rem', lineHeight:1.6, margin:'0 0 1.25rem' }}>{f.desc}</p>

              {/* Steps */}
              <div style={{ display:'flex', flexDirection:'column', gap:'.55rem', marginBottom:'1.5rem' }}>
                {f.steps.map((step, si) => (
                  <div key={step} className="fn-step">
                    <div style={{ width:'22px', height:'22px', borderRadius:'50%', background:`${f.color}15`, border:`1.5px solid ${f.color}40`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                      <span style={{ fontSize:'.6rem', fontWeight:900, color:f.color }}>{si+1}</span>
                    </div>
                    <CheckCircle size={13} color={f.color} style={{ flexShrink:0 }}/>
                    <span style={{ color:'#374151', fontWeight:600 }}>{step}</span>
                  </div>
                ))}
              </div>

              <motion.a href={`https://wa.me/917997001700?text=Hi!%20I%20need%20a%20${encodeURIComponent(f.title)}%20for%20my%20business.`}
                target="_blank" rel="noreferrer"
                whileHover={{ scale:1.02 }} whileTap={{ scale:.97 }}
                style={{ display:'inline-flex', alignItems:'center', gap:'.55rem', padding:'.85rem 1.5rem', background:`linear-gradient(135deg,${f.color},${f.color}bb)`, color:'white', fontWeight:700, fontSize:'.85rem', borderRadius:'12px', textDecoration:'none', boxShadow:`0 8px 24px -6px ${f.glow}` }}>
                Build my {f.title} <ArrowRight size={14}/>
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Funnels;
