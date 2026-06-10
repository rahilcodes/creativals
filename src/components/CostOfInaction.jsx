import React from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, Clock, Users, Flame } from 'lucide-react';

const COSTS = [
  {
    Icon: IndianRupee, title: 'Bleeding Ad Spend',
    desc: 'Boosting posts without a direct-response funnel wastes 80% of your budget. You are paying Meta to show your ads to people who will never buy.',
    cost: '₹15,000+ / mo',
  },
  {
    Icon: Clock, title: 'Wasted Founder Time',
    desc: 'You spend hours manually replying to "Price?" on WhatsApp instead of letting an automated follow-up system filter the junk for you.',
    cost: '40+ hrs / mo',
  },
  {
    Icon: Users, title: 'Leaked Competitor Sales',
    desc: 'Every person who searches for your service and finds your competitor instead because their SEO is better is a permanent lost client.',
    cost: '15+ clients / mo',
  },
  {
    Icon: Flame, title: 'Stagnant Pipeline',
    desc: 'Relying purely on referrals means you have zero control over your revenue pipeline. You cannot scale a business relying on hope.',
    cost: 'Peace of mind',
  },
];

const CostOfInaction = () => (
  <section style={{ background:'#0A0304', position:'relative', overflow:'hidden', padding:'5rem 0' }}>
    <style>{`
      .coi-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:1.5rem; max-width:1000px; margin:0 auto; padding:0 2rem; }
      .coi-card { border-radius:20px; padding:2rem; border:1px solid rgba(239,68,68,.1); background:rgba(239,68,68,.02); display:flex; flex-direction:column; position:relative; overflow:hidden; transition:all .3s; }
      .coi-card:hover { transform:translateY(-6px); background:rgba(239,68,68,.04); border-color:rgba(239,68,68,.25); box-shadow:0 15px 40px -15px rgba(239,68,68,.15), inset 0 0 30px -15px rgba(239,68,68,.2); }
      @media(max-width:768px){ .coi-grid{grid-template-columns:1fr;} }
    `}</style>
    
    <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(239,68,68,.06) 1px,transparent 1px)', backgroundSize:'36px 36px', pointerEvents:'none' }}/>
    <motion.div animate={{ scale:[1,1.1,1], opacity:[.05,.12,.05] }} transition={{ duration:8, repeat:Infinity }}
      style={{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', width:'800px', height:'800px', borderRadius:'50%', background:'radial-gradient(circle,rgba(239,68,68,.4) 0%,transparent 60%)', pointerEvents:'none' }}/>

    <div style={{ position:'relative', zIndex:1 }}>
      {/* Header */}
      <div style={{ textAlign:'center', marginBottom:'4rem', padding:'0 2rem' }}>
        <motion.div initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.28rem .9rem', background:'rgba(239,68,68,.1)', border:'1px solid rgba(239,68,68,.25)', borderRadius:'99px', marginBottom:'1rem' }}>
          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#EF4444', boxShadow:'0 0 8px rgba(239,68,68,.8)' }}/>
          <span style={{ fontSize:'.72rem', fontWeight:800, color:'#DC2626', letterSpacing:'.07em', textTransform:'uppercase' }}>The Hidden Cost</span>
        </motion.div>
        <motion.h2 initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.1 }}
          style={{ color:'#1A1040', fontWeight:900, fontSize:'clamp(1.8rem,3vw,2.6rem)', letterSpacing:'-.04em', lineHeight:1.1, margin:'0 0 .75rem' }}>
          What is it costing you to<br/>
          <span style={{ color:'#DC2626' }}>stay exactly where you are?</span>
        </motion.h2>
        <p style={{ color:'#9CA3AF', fontSize:'.92rem', maxWidth:'600px', margin:'0 auto', lineHeight:1.6 }}>
          Doing nothing is never free. Every month you delay fixing your marketing, you are actively losing revenue, time, and market share to the competition.
        </p>
      </div>

      <div className="coi-grid">
        {COSTS.map((c, i) => (
          <motion.div key={c.title} className="coi-card"
            initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*.1, duration:.5 }}>
            <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1rem' }}>
              <div style={{ width:'48px', height:'48px', borderRadius:'12px', background:'rgba(239,68,68,.1)', border:'1px solid rgba(239,68,68,.2)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <c.Icon size={24} color="#EF4444" strokeWidth={2}/>
              </div>
              <h3 style={{ color:'#1A1040', fontWeight:800, fontSize:'1.1rem', margin:0, lineHeight:1.2, letterSpacing:'-.02em' }}>{c.title}</h3>
            </div>
            <p style={{ color:'#94A3B8', fontSize:'.9rem', lineHeight:1.6, margin:0, flex:1, marginBottom:'2rem' }}>
              {c.desc}
            </p>
            <div style={{ background:'rgba(239,68,68,.08)', border:'1px dashed rgba(239,68,68,.3)', padding:'.85rem 1.25rem', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <span style={{ color:'#B91C1C', fontSize:'.75rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'.05em' }}>Estimated Loss:</span>
              <span style={{ color:'#EF4444', fontSize:'.95rem', fontWeight:900 }}>{c.cost}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CostOfInaction;
