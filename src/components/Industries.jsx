import React from 'react';
import { motion } from 'framer-motion';
import { Building2, UtensilsCrossed, Stethoscope, Briefcase, Home, ShoppingBag, ArrowRight } from 'lucide-react';

const INDS = [
  { icon: Building2, name: 'Schools & Education', metric: '10x Enquiry Volume', color: '#A855F7', glow: 'rgba(168,85,247,.2)', 
    desc: 'Stop relying solely on word of mouth. We build direct-admission funnels that pack your classrooms and create waitlists.' },
  { icon: Home, name: 'Real Estate & Builders', metric: '60% Lower CPL', color: '#38BDF8', glow: 'rgba(56,189,248,.2)',
    desc: 'Stop wasting budget on junk leads. We deploy high-intent Google Ads to capture active buyers in your exact locality.' },
  { icon: UtensilsCrossed, name: 'Hotels & Restaurants', metric: '280% Direct Bookings', color: '#22C55E', glow: 'rgba(34,197,94,.2)',
    desc: 'Bypass massive OTA commissions like Swiggy or MakeMyTrip. Get direct bookings and reliable footfall every weekend.' },
  { icon: Stethoscope, name: 'Hospitals & Clinics', metric: '2x Patient Footfall', color: '#F97316', glow: 'rgba(249,115,22,.2)',
    desc: 'Build unwavering trust before the patient even visits. We set up automated booking and dominate local Google searches.' },
  { icon: Briefcase, name: 'B2B & Service Firms', metric: 'High-Ticket Closures', color: '#EC4899', glow: 'rgba(236,72,153,.2)',
    desc: 'No more generic leads. We target exact decision-makers using intent-based ads to deliver highly qualified sales calls.' },
  { icon: ShoppingBag, name: 'E-commerce Brands', metric: '300% Average ROAS', color: '#8B5CF6', glow: 'rgba(139,92,246,.2)',
    desc: 'Stop burning budget on generic "boost post" ads. We deploy precision-targeted Shopping funnels to scale your ROAS.' },
];

const Industries = () => (
  <section style={{ background:'#04030F', position:'relative', overflow:'hidden', padding:'5rem 0' }}>
    <style>{`
      .ind-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; max-width:1200px; margin:0 auto; padding:0 2rem; }
      .ind-card { border-radius:20px; padding:2.5rem 2rem; border:1px solid rgba(255,255,255,.05); background:rgba(255,255,255,.02); display:flex; flex-direction:column; position:relative; overflow:hidden; transition:transform .3s; }
      .ind-card:hover { transform:translateY(-8px); }
      .mobile-only { display:none; }
      @media(max-width:960px){ .ind-grid{grid-template-columns:1fr 1fr;} }
      @media(max-width:640px){ .ind-grid{grid-template-columns:1fr;} .ind-card{padding:1.5rem;} .mobile-only{display:block;} }
    `}</style>
    
    <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(168,85,247,.05) 1px,transparent 1px)', backgroundSize:'36px 36px', pointerEvents:'none' }}/>

    <div style={{ position:'relative', zIndex:1 }}>
      {/* Header */}
      <div style={{ textAlign:'center', marginBottom:'4rem', padding:'0 2rem' }}>
        <motion.div initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.28rem .9rem', background:'rgba(168,85,247,.1)', border:'1px solid rgba(168,85,247,.25)', borderRadius:'99px', marginBottom:'1rem' }}>
          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#A855F7', boxShadow:'0 0 8px rgba(168,85,247,.8)' }}/>
          <span style={{ fontSize:'.72rem', fontWeight:800, color:'#C4B5FD', letterSpacing:'.07em', textTransform:'uppercase' }}>Who We Help</span>
        </motion.div>
        <motion.h2 initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.1 }}
          style={{ color:'white', fontWeight:900, fontSize:'clamp(1.8rem,3vw,2.6rem)', letterSpacing:'-.04em', lineHeight:1.1, margin:'0 0 .75rem' }}>
          Built precisely for <br className="mobile-only" />
          <span style={{ background:'linear-gradient(135deg,#A855F7,#EC4899)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Indian Businesses</span>
        </motion.h2>
        <p style={{ color:'#64748B', fontSize:'.92rem', maxWidth:'600px', margin:'0 auto', lineHeight:1.6 }}>
          Our growth architecture is battle-tested across 6 high-competition domestic industries. We know what works.
        </p>
      </div>

      <div className="ind-grid">
        {INDS.map((ind, i) => (
          <motion.div key={ind.name} className="ind-card"
            initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*.1, duration:.5 }}
            style={{ boxShadow:`0 0 0 0 transparent` }}
            onMouseEnter={e => e.currentTarget.style.boxShadow=`0 15px 50px -15px ${ind.glow}, inset 0 20px 40px -20px ${ind.glow}`}
            onMouseLeave={e => e.currentTarget.style.boxShadow='none'}
          >
            <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
              <div style={{ width:'48px', height:'48px', borderRadius:'14px', background:`${ind.color}15`, border:`1px solid ${ind.color}33`, display:'flex', alignItems:'center', justifyContent:'center', color:ind.color, flexShrink:0 }}>
                <ind.icon size={24} strokeWidth={2}/>
              </div>
              <h3 style={{ color:'white', fontWeight:800, fontSize:'1.1rem', margin:0, lineHeight:1.2, letterSpacing:'-.02em' }}>{ind.name}</h3>
            </div>
            
            <p style={{ color:'#94A3B8', fontSize:'.9rem', lineHeight:1.6, flex:1, margin:'0 0 2rem' }}>
              {ind.desc}
            </p>

            <div style={{ display:'inline-block', padding:'.4rem 1rem', background:`${ind.color}15`, border:`1px solid ${ind.color}40`, color:ind.color, borderRadius:'10px', fontSize:'.78rem', fontWeight:800, letterSpacing:'.03em', textTransform:'uppercase', alignSelf:'flex-start' }}>
               {ind.metric}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Explore button */}
      <div style={{ textAlign:'center', marginTop:'4rem' }}>
        <a href="/industries" style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', color:'#94A3B8', fontSize:'.85rem', fontWeight:600, textDecoration:'none', transition:'color .2s' }} onMouseEnter={e=>e.currentTarget.style.color='white'} onMouseLeave={e=>e.currentTarget.style.color='#94A3B8'}>
          Explore all industry capabilities <ArrowRight size={14}/>
        </a>
      </div>
    </div>
  </section>
);

export default Industries;
