import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, ArrowRight } from 'lucide-react';

const ROWS = [
  { label: 'What they actually focus on', typ: 'Traffic & Clicks', cre: 'Leads & Revenue' },
  { label: 'How you feel after paying', typ: 'Anxious. Checking bank daily.', cre: 'Calm. Leads arriving predictably.' },
  { label: 'Communication speed', typ: 'Monthly PDF report. Silence.', cre: 'WhatsApp group. Immediate replies.' },
  { label: 'When results don\'t come', typ: 'They blame the algorithm.', cre: '100% money-back guarantee. No excuses.' },
  { label: 'What they actually build', typ: 'Generic ads copied from competitors.', cre: 'A full system: Ads + Page + CRM + Follow-up.' },
  { label: 'Contract terms', typ: 'Locked into 6–12 month contracts.', cre: 'Month-to-month. Leave anytime.' },
];

const Comparison = () => (
  <section style={{ background:'#02010A', position:'relative', overflow:'hidden', padding:'5rem 0' }}>
    <style>{`
      .cmp-table { width:100%; max-width:960px; margin:0 auto; border-radius:18px; overflow:hidden; border:1px solid rgba(255,255,255,.06); box-shadow:0 0 80px -20px rgba(124,58,237,.15); }
      .cmp-row { display:grid; grid-template-columns:1.2fr 1.3fr 1.3fr; border-bottom:1px solid rgba(255,255,255,.04); }
      .cmp-row:last-child { border-bottom:none; }
      .cmp-cell { padding:1.25rem 1.5rem; display:flex; align-items:flex-start; gap:.75rem; font-size:.9rem; line-height:1.5; }
      .cmp-cell-label { color:#94A3B8; font-weight:600; padding-top:1.4rem; }
      .cmp-cell-typ { color:#64748B; background:rgba(255,255,255,.01); border-left:1px solid rgba(255,255,255,.04); padding-top:1.4rem; }
      .cmp-cell-cre { color:white; font-weight:600; background:rgba(34,197,94,.03); border-left:1px solid rgba(34,197,94,.1); padding-top:1.4rem; position:relative; }
      @media(max-width:768px){ 
        .cmp-row { display:flex; flex-direction:column; padding:1.5rem; gap:.5rem; border-bottom:1px solid rgba(255,255,255,.08); }
        .cmp-cell { padding:0; border:none!important; background:transparent!important; }
        .cmp-cell-label { font-size:.75rem; text-transform:uppercase; letter-spacing:.05em; color:#4B5563; padding:0; margin-bottom:.5rem; }
        .cmp-cell-typ { padding:0; color:#94A3B8; margin-bottom:.5rem; }
        .cmp-cell-cre { padding:0; }
        .cmp-hdr { display:none!important; }
        .cmp-guarantee { flex-direction:column; align-items:flex-start!important; gap:1.5rem!important; padding:1.5rem!important; }
      }
    `}</style>

    {/* Background elements */}
    <div style={{ position:'absolute', top:'-20%', left:'10%', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle,rgba(34,197,94,.15) 0%,transparent 70%)', pointerEvents:'none' }}/>

    <div style={{ position:'relative', zIndex:1, padding:'0 2rem' }}>
      {/* Heading */}
      <div style={{ textAlign:'center', marginBottom:'4rem' }}>
        <motion.div initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.28rem .9rem', background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)', borderRadius:'99px', marginBottom:'1rem' }}>
          <span style={{ fontSize:'.72rem', fontWeight:800, color:'#94A3B8', letterSpacing:'.07em', textTransform:'uppercase' }}>The Honest Comparison</span>
        </motion.div>
        <motion.h2 initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.1 }}
          style={{ color:'white', fontWeight:900, fontSize:'clamp(1.8rem,3vw,2.6rem)', letterSpacing:'-.04em', lineHeight:1.1, margin:'0 0 .75rem' }}>
          Most agencies take your money.<br/>
          <span style={{ color:'#22C55E' }}>We take responsibility.</span>
        </motion.h2>
        <p style={{ color:'#64748B', fontSize:'.92rem', maxWidth:'500px', margin:'0 auto', lineHeight:1.6 }}>
          We don't just promise results — we guarantee them. Here is exactly why 120+ brands fired their old agency and hired us.
        </p>
      </div>

      {/* Comparison Table */}
      <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.2, duration:.5 }} className="cmp-table">
        {/* Header */}
        <div className="cmp-row cmp-hdr" style={{ background:'#0F172A', borderBottom:'1px solid rgba(255,255,255,.08)' }}>
          <div className="cmp-cell" style={{ color:'#94A3B8', fontWeight:700, fontSize:'.8rem', textTransform:'uppercase', letterSpacing:'.05em' }}>The Difference</div>
          <div className="cmp-cell" style={{ borderLeft:'1px solid rgba(255,255,255,.04)', display:'flex', alignItems:'center', gap:'.5rem' }}>
            <div style={{ width:'24px', height:'24px', borderRadius:'6px', background:'rgba(239,68,68,.15)', display:'flex', alignItems:'center', justifyContent:'center' }}><X size={14} color="#EF4444"/></div>
            <span style={{ color:'#94A3B8', fontWeight:700, fontSize:'.95rem' }}>Typical Agency</span>
          </div>
          <div className="cmp-cell" style={{ borderLeft:'1px solid rgba(34,197,94,.1)', background:'rgba(34,197,94,.05)', display:'flex', alignItems:'center', gap:'.5rem', position:'relative', overflow:'hidden' }}>
            <div style={{ position:'absolute', top:0, left:0, width:'100%', height:'2px', background:'linear-gradient(90deg, #22C55E, #10B981)' }}/>
            <div style={{ width:'24px', height:'24px', borderRadius:'6px', background:'rgba(34,197,94,.2)', display:'flex', alignItems:'center', justifyContent:'center' }}><Check size={14} color="#4ADE80" strokeWidth={3}/></div>
            <span style={{ color:'white', fontWeight:800, fontSize:'1.05rem', letterSpacing:'-.02em' }}>Creativals System</span>
          </div>
        </div>

        {/* Rows */}
        {ROWS.map((r, i) => (
          <div key={i} className="cmp-row" style={{ background: i%2===0 ? 'rgba(255,255,255,.02)' : 'transparent' }}>
            <div className="cmp-cell cmp-cell-label">{r.label}</div>
            <div className="cmp-cell cmp-cell-typ">
              <X size={16} color="#EF4444" style={{ flexShrink:0, marginTop:'3px', opacity:.6 }}/>
              {r.typ}
            </div>
            <div className="cmp-cell cmp-cell-cre">
              <Check size={16} color="#22C55E" style={{ flexShrink:0, marginTop:'3px' }} strokeWidth={2.5}/>
              {r.cre}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Guarantee Box under table */}
      <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.4 }}
        className="cmp-guarantee"
        style={{ maxWidth:'800px', margin:'3rem auto 0', padding:'2rem', borderRadius:'20px', background:'linear-gradient(135deg, rgba(34,197,94,.08) 0%, rgba(34,197,94,.01) 100%)', border:'1px solid rgba(34,197,94,.2)', display:'flex', alignItems:'center', gap:'2rem', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', right:'-20px', bottom:'-20px', opacity:.05, pointerEvents:'none' }}><Shield size={160} color="#22C55E"/></div>
        
        <div style={{ flex:1, position:'relative', zIndex:1 }}>
          <div style={{ display:'flex', alignItems:'center', gap:'.75rem', marginBottom:'.75rem' }}>
            <Shield size={24} color="#4ADE80"/>
            <h3 style={{ color:'white', fontWeight:800, fontSize:'1.3rem', margin:0, letterSpacing:'-.02em' }}>Results or your money back.</h3>
          </div>
          <p style={{ color:'#94A3B8', fontSize:'.9rem', lineHeight:1.6, margin:0 }}>
            We back every engagement with a strict performance guarantee. No marketing jargon. No algorithm excuses. If we build your system and it doesn't generate the agreed lead flow, we work for free until it does — or refund our fee. Simple.
          </p>
        </div>

        <div style={{ flexShrink:0, position:'relative', zIndex:1 }}>
          <a href="https://wa.me/917997001700?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20guarantee."
            target="_blank" rel="noreferrer"
            style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.85rem 1.5rem', background:'#22C55E', color:'#02010A', fontWeight:800, fontSize:'.9rem', borderRadius:'12px', textDecoration:'none', boxShadow:'0 8px 20px -6px rgba(34,197,94,.6)' }}>
            Claim Free Audit <ArrowRight size={14}/>
          </a>
        </div>
      </motion.div>

    </div>
  </section>
);

export default Comparison;
