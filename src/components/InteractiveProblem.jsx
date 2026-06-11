import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Target, Calendar, ShoppingBag, TrendingUp, Zap, Users, BarChart2, Star } from 'lucide-react';

const PROBLEMS = [
  {
    id: 'leads',
    Icon: Target,
    label: 'I need more high-quality leads',
    badge: 'Lead Engine',
    title: 'The Lead Engine Strategy',
    body: 'Stop paying for cheap, unqualified traffic. We build direct-response funnels that capture high-intent buyers who are actually ready to purchase today — tire-kickers filtered out automatically.',
    action: 'Build My Lead Engine',
    accent: '#7C3AED',
    accentLight: '#F5F0FF',
    accentBorder: 'rgba(124,58,237,.2)',
    glow: 'rgba(124,58,237,.15)',
    stats: [
      { Icon: Zap,      value: '3.5x',  label: 'Avg. Lead Quality' },
      { Icon: Users,    value: '500+',  label: 'Leads / Month' },
      { Icon: BarChart2,value: '-42%',  label: 'Cost Per Lead' },
    ],
  },
  {
    id: 'bookings',
    Icon: Calendar,
    label: 'I need to fill my calendar/hotel',
    badge: 'Booking Blueprint',
    title: 'The Direct-Booking Blueprint',
    body: 'OTA commissions (Swiggy / MakeMyTrip) are killing your margins. We deploy local-targeted Meta & Google ads + a high-converting landing page that drives commission-free bookings every single week.',
    action: 'Increase Direct Bookings',
    accent: '#16A34A',
    accentLight: '#F0FDF4',
    accentBorder: 'rgba(22,163,74,.2)',
    glow: 'rgba(22,163,74,.12)',
    stats: [
      { Icon: BarChart2, value: '60%',  label: 'More Direct Bookings' },
      { Icon: Zap,       value: '0%',   label: 'Commission Paid' },
      { Icon: Star,      value: '4.9',  label: 'Avg. Review Score' },
    ],
  },
  {
    id: 'ecommerce',
    Icon: ShoppingBag,
    label: 'I want higher e-commerce sales',
    badge: 'Scaling Infra',
    title: 'The E-commerce Scaling Machine',
    body: 'You\'re losing sales to cart abandonment and generic ads. We implement dynamic retargeting + automated WhatsApp follow-ups that recover lost revenue and instantly push your ROAS into profit.',
    action: 'Scale My Store Now',
    accent: '#0369A1',
    accentLight: '#EFF6FF',
    accentBorder: 'rgba(3,105,161,.2)',
    glow: 'rgba(3,105,161,.12)',
    stats: [
      { Icon: BarChart2, value: '300%', label: 'Avg. ROAS Growth' },
      { Icon: Zap,       value: '₹4k',  label: 'Per 100 Leads' },
      { Icon: Users,     value: '+150%', label: 'Cart Recovery' },
    ],
  },
  {
    id: 'seo',
    Icon: TrendingUp,
    label: 'My competitors rank higher',
    badge: 'Market Domination',
    title: 'The Market Domination System',
    body: 'Your business is better — but they look better online. We install an automated 5-star review capture system + dominate local SEO so you become the obvious #1 choice in your entire city.',
    action: 'Dominate My Market',
    accent: '#C2410C',
    accentLight: '#FFF7ED',
    accentBorder: 'rgba(194,65,12,.2)',
    glow: 'rgba(194,65,12,.12)',
    stats: [
      { Icon: Star,      value: '5',    label: 'Avg. Review Rating' },
      { Icon: TrendingUp,value: 'Top 3', label: 'Google Map Pack' },
      { Icon: BarChart2, value: '2x',   label: 'Organic Traffic' },
    ],
  },
];

const InteractiveProblem = () => {
  const [active, setActive] = useState(PROBLEMS[0]);

  return (
    <section style={{
      background: '#F8F6FF',
      position: 'relative',
      overflow: 'hidden',
      padding: '5rem 0',
    }}>
      <style>{`
        .ip-grid { display:grid; grid-template-columns:1fr 1.25fr; gap:3rem; max-width:1200px; margin:0 auto; padding:0 2rem; align-items:stretch; }
        .ip-tab { width:100%; text-align:left; border:none; cursor:pointer; border-radius:14px; padding:1.1rem 1.3rem; display:flex; align-items:center; gap:1rem; font-family:inherit; transition:all .22s; }
        .ip-stat { display:flex; flex-direction:column; align-items:center; gap:.2rem; flex:1; padding:.75rem .5rem; background:#ffffff; border-radius:12px; border:1px solid rgba(0,0,0,.07); }
        @media(max-width:860px){ .ip-grid{grid-template-columns:1fr;} }
      `}</style>

      {/* Soft background dots */}
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(124,58,237,.06) 1px, transparent 1px)', backgroundSize:'36px 36px', pointerEvents:'none' }}/>
      <motion.div animate={{ scale:[1,1.1,1], opacity:[.06,.12,.06] }} transition={{ duration:12, repeat:Infinity }}
        style={{ position:'absolute', left:'-10%', top:'20%', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle, rgba(124,58,237,.15) 0%, transparent 65%)', pointerEvents:'none' }}/>

      <div style={{ position:'relative', zIndex:1 }}>
        {/* Heading */}
        <div style={{ textAlign:'center', marginBottom:'3rem' }}>
          <motion.div initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.3rem .9rem', background:'rgba(124,58,237,.08)', border:'1px solid rgba(124,58,237,.2)', borderRadius:'99px', marginBottom:'1rem' }}>
            <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#7C3AED' }}/>
            <span style={{ fontSize:'.72rem', fontWeight:800, color:'#7C3AED', letterSpacing:'.07em', textTransform:'uppercase' }}>Strategy Matcher</span>
          </motion.div>
          <motion.h2 initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.1 }}
            style={{ color:'#1A1040', fontWeight:900, fontSize:'clamp(1.8rem,3vw,2.6rem)', letterSpacing:'-.04em', lineHeight:1.1, margin:'0 0 .8rem' }}>
            What's holding your business back?
          </motion.h2>
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:.2 }}
            style={{ color:'#6B7280', fontSize:'.95rem', maxWidth:'480px', margin:'0 auto', lineHeight:1.6 }}>
            Pick your biggest challenge — we'll show you the exact system we'd build for you.
          </motion.p>
        </div>

        <div className="ip-grid">
          {/* LEFT — Goal tabs */}
          <div style={{ display:'flex', flexDirection:'column', gap:'.65rem' }}>
            {PROBLEMS.map((p, i) => {
              const isActive = active.id === p.id;
              return (
                <motion.button
                  key={p.id}
                  className="ip-tab"
                  onClick={() => setActive(p)}
                  initial={{ opacity:0, x:-20 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  style={{
                    background: isActive ? p.accentLight : '#ffffff',
                    border: isActive ? `1.5px solid ${p.accent}50` : '1.5px solid #E5E7EB',
                    boxShadow: isActive ? `0 4px 20px ${p.glow}` : '0 1px 4px rgba(0,0,0,.05)',
                  }}
                >
                  {/* Icon box */}
                  <div style={{
                    width:'40px', height:'40px', borderRadius:'12px', flexShrink:0,
                    background: isActive ? `${p.accent}15` : '#F3F4F6',
                    border: `1.5px solid ${isActive ? p.accent + '35' : '#E5E7EB'}`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    transition:'all .22s',
                  }}>
                    <p.Icon size={18} color={isActive ? p.accent : '#6B7280'} strokeWidth={2}/>
                  </div>
                  <span style={{
                    flex:1,
                    fontSize:'.9rem',
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? '#1A1040' : '#4B5563',
                    lineHeight:1.35,
                    textAlign:'left',
                    transition:'color .22s',
                  }}>{p.label}</span>
                  <ArrowRight size={16} color={isActive ? p.accent : 'transparent'} style={{ flexShrink:0, transition:'color .22s' }}/>
                </motion.button>
              );
            })}

            {/* Trust strip */}
            <div style={{ marginTop:'.5rem', padding:'.85rem 1rem', background:'#F0FDF4', border:'1.5px solid #BBF7D0', borderRadius:'12px', display:'flex', alignItems:'center', gap:'.75rem' }}>
              <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#22C55E', flexShrink:0 }}/>
              <p style={{ color:'#374151', fontSize:'.75rem', margin:0, lineHeight:1.4 }}>
                <strong style={{ color:'#15803D' }}>120+ brands</strong> already use these exact systems to grow
              </p>
            </div>
          </div>

          {/* RIGHT — Dynamic strategy card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity:0, y:20, scale:.97 }}
              animate={{ opacity:1, y:0, scale:1 }}
              exit={{ opacity:0, y:-16, scale:.97 }}
              transition={{ duration:.32, ease:'easeOut' }}
              style={{
                background:'#ffffff',
                border:`1.5px solid ${active.accent}25`,
                borderRadius:'20px',
                padding:'2rem',
                position:'relative',
                overflow:'hidden',
                boxShadow:`0 8px 40px ${active.glow}, 0 2px 8px rgba(0,0,0,.06)`,
                display:'flex',
                flexDirection:'column',
                justifyContent:'space-between',
                gap:'1.5rem',
              }}
            >
              {/* Accent top bar */}
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'3px', background:`linear-gradient(90deg, ${active.accent}, ${active.accent}88)`, borderRadius:'20px 20px 0 0' }}/>

              {/* Orb */}
              <div style={{ position:'absolute', top:'-40px', right:'-40px', width:'200px', height:'200px', borderRadius:'50%', background:`radial-gradient(circle, ${active.glow} 0%, transparent 70%)`, pointerEvents:'none' }}/>

              <div style={{ position:'relative', zIndex:1 }}>
                {/* Badge */}
                <div style={{ display:'inline-flex', alignItems:'center', gap:'.45rem', padding:'.25rem .75rem', background:`${active.accent}12`, border:`1px solid ${active.accent}30`, borderRadius:'99px', marginBottom:'1rem' }}>
                  <active.Icon size={12} color={active.accent}/>
                  <span style={{ fontSize:'.65rem', fontWeight:800, color:active.accent, letterSpacing:'.07em', textTransform:'uppercase' }}>{active.badge}</span>
                </div>

                <h3 style={{ color:'#1A1040', fontWeight:900, fontSize:'clamp(1.3rem,2vw,1.7rem)', letterSpacing:'-.03em', lineHeight:1.15, margin:'0 0 .85rem' }}>
                  {active.title}
                </h3>
                <p style={{ color:'#4B5563', fontSize:'.88rem', lineHeight:1.65, margin:0 }}>
                  {active.body}
                </p>
              </div>

              {/* Stat row */}
              <div style={{ display:'flex', gap:'.65rem', position:'relative', zIndex:1 }}>
                {active.stats.map(({ Icon: SI, value, label }) => (
                  <div key={label} className="ip-stat">
                    <SI size={14} color={active.accent} strokeWidth={2}/>
                    <span style={{ fontSize:'1.1rem', fontWeight:900, color:active.accent, letterSpacing:'-.03em', lineHeight:1 }}>{value}</span>
                    <span style={{ fontSize:'.62rem', color:'#6B7280', fontWeight:600, textAlign:'center', lineHeight:1.3 }}>{label}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{ display:'flex', flexDirection:'column', gap:'.6rem', position:'relative', zIndex:1 }}>
                <motion.a
                  href={`https://wa.me/917997001700?text=Hi!%20I%20need%20help%20with%3A%20${encodeURIComponent(active.label)}`}
                  target="_blank" rel="noreferrer"
                  whileHover={{ scale:1.03, boxShadow:`0 16px 40px -8px ${active.glow}` }}
                  whileTap={{ scale:.97 }}
                  style={{
                    display:'inline-flex', alignItems:'center', justifyContent:'center', gap:'.6rem',
                    padding:'.95rem 1.75rem',
                    background:`linear-gradient(135deg, ${active.accent}, ${active.accent}cc)`,
                    color:'#ffffff', fontWeight:800, fontSize:'.92rem',
                    borderRadius:'12px', textDecoration:'none',
                    boxShadow:`0 8px 24px -6px ${active.glow}`,
                  }}
                >
                  {active.action} <ArrowRight size={15} color="#ffffff"/>
                </motion.a>
                <span style={{ fontSize:'.7rem', color:'#6B7280', textAlign:'center', fontWeight:500 }}>
                  Free &nbsp;·&nbsp; No commitment &nbsp;·&nbsp; Reply within 2 hrs
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProblem;
