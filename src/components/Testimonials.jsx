import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Ramesh Kumar', role: 'Principal', firm: 'Sunrise Academy',
    ava: 'RK', color: '#A855F7', glow: 'rgba(168,85,247,.2)',
    result: '10x enquiries in 3 weeks',
    text: 'In 21 days, we went from 12 enquiries a month to over 140. Before Creativals, I was seriously considering cutting staff. Now we have a waitlist. This system is not a joke.',
  },
  {
    name: 'Priya Sharma', role: 'Owner', firm: 'The Palm Resort Goa',
    ava: 'PS', color: '#22C55E', glow: 'rgba(34,197,94,.2)',
    result: 'Bookings tripled. No OTAs.',
    text: 'We stopped paying Swiggy/MakeMyTrip. We stopped relying on walk-ins. The WhatsApp bot alone saves my team 3 hours every single day. I only wish I had found them sooner.',
  },
  {
    name: 'Arjun Mehra', role: 'Founder', firm: 'StyleCraft Mumbai',
    ava: 'AM', color: '#38BDF8', glow: 'rgba(56,189,248,.2)',
    result: '112 leads from ₹4,000 spend',
    text: 'I was skeptical. Everyone promises leads, nobody delivers. But ₹4,000 in, I had 112 paying customer enquiries. I\'ve not looked back. These guys genuinely know what they are doing.',
  },
];

const Testimonials = () => (
  <section style={{ background:'#F8FAFC', position:'relative', overflow:'hidden', padding:'5rem 0' }}>
    <style>{`
      .test-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2rem; max-width:1200px; margin:0 auto; padding:0 2rem; }
      .test-card { border-radius:20px; padding:2rem; border:1px solid rgba(0,0,0,0.08); background:#FFFFFF; display:flex; flex-direction:column; position:relative; overflow:hidden; transition:transform .3s; box-shadow: 0 2px 12px rgba(0,0,0,0.05); }
      .test-card:hover { transform:translateY(-8px); }
      @media(max-width:960px){ .test-grid{grid-template-columns:1fr 1fr;} }
      @media(max-width:640px){ .test-grid{grid-template-columns:1fr;} }
    `}</style>
    
    <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(168,85,247,.05) 1px,transparent 1px)', backgroundSize:'36px 36px', pointerEvents:'none' }}/>

    <div style={{ position:'relative', zIndex:1 }}>
      {/* Header */}
      <div style={{ textAlign:'center', marginBottom:'4rem', padding:'0 2rem' }}>
        <motion.div initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.28rem .9rem', background:'rgba(168,85,247,.1)', border:'1px solid rgba(168,85,247,.25)', borderRadius:'99px', marginBottom:'1rem' }}>
          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#A855F7', boxShadow:'0 0 8px rgba(168,85,247,.8)' }}/>
          <span style={{ fontSize:'.72rem', fontWeight:800, color:'#7C3AED', letterSpacing:'.07em', textTransform:'uppercase' }}>Client Love</span>
        </motion.div>
        <motion.h2 initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.1 }}
          style={{ color:'#0F172A', fontWeight:900, fontSize:'clamp(1.8rem,3vw,2.6rem)', letterSpacing:'-.04em', lineHeight:1.1, margin:'0 0 .75rem' }}>
          Don't just take our word for it.<br/>
          <span style={{ background:'linear-gradient(135deg,#A855F7,#EC4899)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Take theirs.</span>
        </motion.h2>
      </div>

      <div className="test-grid">
        {REVIEWS.map((r, i) => (
          <motion.div key={r.name} className="test-card"
            initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*.15, duration:.5 }}
            style={{ boxShadow:`0 0 0 0 transparent` }}
            onMouseEnter={e => e.currentTarget.style.boxShadow=`0 15px 50px -15px ${r.glow}, inset 0 20px 40px -20px ${r.glow}`}
            onMouseLeave={e => e.currentTarget.style.boxShadow='none'}
          >
            <div style={{ position:'absolute', top:'1.5rem', right:'1.5rem', opacity:.08, pointerEvents:'none' }}>
              <Quote size={80} color={r.color}/>
            </div>

            {/* Stars */}
            <div style={{ display:'flex', gap:'.2rem', marginBottom:'1.5rem' }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#FACC15" color="#FACC15"/>)}
            </div>

            {/* Micro Result */}
            <div style={{ display:'inline-block', padding:'.3rem .85rem', background:`${r.color}15`, border:`1px solid ${r.color}33`, color:r.color, borderRadius:'99px', fontSize:'.75rem', fontWeight:800, letterSpacing:'.02em', width:'fit-content', marginBottom:'1.25rem' }}>
              {r.result}
            </div>

            <p style={{ color:'#475569', fontSize:'.95rem', lineHeight:1.65, margin:'0 0 2rem', fontWeight:500, position:'relative', zIndex:1, flex:1 }}>
              "{r.text}"
            </p>

            {/* Author */}
            <div style={{ display:'flex', alignItems:'center', gap:'1rem', paddingTop:'1.5rem', borderTop:'1px solid rgba(0,0,0,0.08)' }}>
              <div style={{ width:'42px', height:'42px', borderRadius:'12px', background:`linear-gradient(135deg, ${r.color}, ${r.color}99)`, display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontSize:'.95rem', fontWeight:800, flexShrink:0, boxShadow:`0 4px 15px ${r.glow}` }}>
                {r.ava}
              </div>
              <div>
                <div style={{ fontWeight:800, color:'#0F172A', fontSize:'.95rem', lineHeight:1.2, margin:'0 0 .15rem' }}>{r.name}</div>
                <div style={{ color:r.color, fontSize:'.75rem', fontWeight:700, textTransform:'uppercase', letterSpacing:'.05em' }}>{r.role} <span style={{ color:'#4B5563', padding:'0 .2rem' }}>·</span> {r.firm}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
