import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQS = [
  {
    q: "When will I actually start seeing leads?",
    a: "Our systems are built for speed. Once your campaign launches, most clients start seeing qualified enquiries within 7 to 14 days. A complete growth system architecture takes about 30 days to fully optimize and scale."
  },
  {
    q: "How much ad budget do I need to start?",
    a: "We recommend starting with a minimum ad budget of ₹5,000 to ₹10,000 per month paid directly to Meta/Google. Our management/build fee is entirely separate and 100% transparent. No hidden charges whatsoever."
  },
  {
    q: "Do I need an existing website for you to work with?",
    a: "No. If you don't have a website, we build high-converting, mobile-first landing pages natively for your campaigns. You do not need any prior assets to start getting leads."
  },
  {
    q: "Am I locked into a 6-month or 12-month contract?",
    a: "Absolutely not. We hate long agency lock-ins. We operate strictly on month-to-month agreements because we believe our real-world results should be the only reason you stay with us."
  },
  {
    q: "How does the communication process work?",
    a: "Primarily via a dedicated WhatsApp group. We know Indian business owners don't have time to check bloated email chains or complex agency portals. Fast, direct, and immediate replies."
  },
  {
    q: "What if the campaign doesn't generate any results?",
    a: "We back our work with a 30-day performance guarantee. If we build your system and it fails to generate the agreed-upon lead flow, we work for free until it does, or refund our fee."
  },
  {
    q: "Do you work with startups and new businesses?",
    a: "Yes, but only if you have a proven offer and the internal capacity to handle a sudden influx of new lead flow. We build systems that scale quickly."
  },
  {
    q: "Who will actually be running my campaigns?",
    a: "Your campaigns are built, managed, and optimized by our senior growth architects. We do not outsource your business to junior account managers or offshore talent."
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section style={{ background:'#02010A', position:'relative', overflow:'hidden', padding:'6rem 0 4rem' }}>
      <style>{`
        .faq-grid { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; max-width:1100px; margin:0 auto; padding:0 2rem; align-items:start; }
        .faq-card { border-radius:16px; border:1px solid rgba(255,255,255,.05); background:rgba(255,255,255,.02); overflow:hidden; transition:all .3s; }
        .faq-btn { width:100%; display:flex; justify-content:space-between; alignItems:center; padding:1.25rem 1.5rem; background:transparent; border:none; cursor:pointer; text-align:left; font-family:inherit; }
        @media(max-width:820px){ .faq-grid{grid-template-columns:1fr;} }
      `}</style>
      
      {/* Background atmos */}
      <div style={{ position:'absolute', top:'-20%', left:'-10%', width:'800px', height:'800px', borderRadius:'50%', background:'radial-gradient(circle,rgba(168,85,247,.1) 0%,transparent 70%)', pointerEvents:'none' }}/>

      <div style={{ position:'relative', zIndex:1 }}>
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:'4rem', padding:'0 2rem' }}>
          <motion.div initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.28rem .9rem', background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)', borderRadius:'99px', marginBottom:'1rem' }}>
            <span style={{ fontSize:'.72rem', fontWeight:800, color:'#94A3B8', letterSpacing:'.07em', textTransform:'uppercase' }}>Clear Answers</span>
          </motion.div>
          <motion.h2 initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.1 }}
            style={{ color:'white', fontWeight:900, fontSize:'clamp(1.8rem,3vw,2.6rem)', letterSpacing:'-.04em', lineHeight:1.1, margin:'0 0 .75rem' }}>
            Common <span style={{ background:'linear-gradient(135deg,#A855F7,#38BDF8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Questions</span>
          </motion.h2>
          <p style={{ color:'#64748B', fontSize:'.95rem', maxWidth:'500px', margin:'0 auto', lineHeight:1.6 }}>
            Everything you need to know before we start working together. Straightforward answers, no agency fluff.
          </p>
        </div>

        <div className="faq-grid">
          {/* Column 1 */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            {FAQS.slice(0,4).map((f, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={i} className="faq-card" style={{ borderColor: isOpen ? 'rgba(168,85,247,.4)' : 'rgba(255,255,255,.06)', boxShadow: isOpen ? '0 10px 30px -10px rgba(168,85,247,.15)' : 'none' }}>
                  <button className="faq-btn" onClick={() => setOpenIdx(isOpen ? -1 : i)}>
                    <span style={{ color: isOpen ? 'white' : '#E2E8F0', fontWeight:800, fontSize:'.95rem', transition:'color .2s', paddingRight:'1rem' }}>{f.q}</span>
                    <ChevronDown size={18} color={isOpen ? '#A855F7' : '#64748B'} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform .3s', flexShrink:0 }}/>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:.3, ease:'easeInOut' }}>
                        <div style={{ padding:'0 1.5rem 1.25rem', color:'#94A3B8', fontSize:'.9rem', lineHeight:1.6 }}>{f.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            {FAQS.slice(4,8).map((f, i) => {
              const actualIdx = i + 4;
              const isOpen = openIdx === actualIdx;
              return (
                <div key={actualIdx} className="faq-card" style={{ borderColor: isOpen ? 'rgba(168,85,247,.4)' : 'rgba(255,255,255,.06)', boxShadow: isOpen ? '0 10px 30px -10px rgba(168,85,247,.15)' : 'none' }}>
                  <button className="faq-btn" onClick={() => setOpenIdx(isOpen ? -1 : actualIdx)}>
                    <span style={{ color: isOpen ? 'white' : '#E2E8F0', fontWeight:800, fontSize:'.95rem', transition:'color .2s', paddingRight:'1rem' }}>{f.q}</span>
                    <ChevronDown size={18} color={isOpen ? '#A855F7' : '#64748B'} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform .3s', flexShrink:0 }}/>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height:0, opacity:0 }} animate={{ height:'auto', opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:.3, ease:'easeInOut' }}>
                        <div style={{ padding:'0 1.5rem 1.25rem', color:'#94A3B8', fontSize:'.9rem', lineHeight:1.6 }}>{f.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.div initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:.3 }}
          style={{ textAlign:'center', marginTop:'3rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'.5rem' }}>
          <span style={{ color:'#64748B', fontSize:'.85rem' }}>Still have a question?</span>
          <a href="https://wa.me/917997001700" target="_blank" rel="noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:'.4rem', color:'#A855F7', fontSize:'.9rem', fontWeight:700, textDecoration:'none' }}>
            <MessageCircle size={14}/> Ask us on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
