import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Shield, CheckCircle } from 'lucide-react';

const FinalCTA = () => (
  <section style={{ background:'linear-gradient(160deg, #F3EEFF 0%, #EEF2FF 100%)', position:'relative', overflow:'hidden', padding:'clamp(4rem,8vw,6rem) 0' }}>
    <style>{`
      .cta-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6rem;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 clamp(1.25rem,5vw,2rem);
        align-items: center;
        position: relative;
        z-index: 1;
      }
      .cta-stepper-card {
        padding: 2.5rem;
        background: #ffffff;
        border-radius: 24px;
        border: 1.5px solid rgba(124,58,237,.15);
        box-shadow: 0 8px 48px rgba(124,58,237,.1);
      }
      .cta-primary-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: .75rem;
        background: linear-gradient(135deg, #7C3AED, #A855F7);
        color: #ffffff;
        padding: 1.2rem 2rem;
        border-radius: 16px;
        font-weight: 900;
        font-size: 1.05rem;
        text-decoration: none;
        box-shadow: 0 8px 28px -6px rgba(124,58,237,.45);
        width: 100%;
        max-width: 420px;
      }
      .cta-step-row { display: flex; gap: 1.25rem; align-items: flex-start; }
      .cta-step-num {
        width: 42px; height: 42px; min-width: 42px;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: 1rem; font-weight: 900;
        flex-shrink: 0;
      }
      @media (max-width: 960px) {
        .cta-grid { grid-template-columns: 1fr; gap: 3rem; }
      }
      @media (max-width: 540px) {
        .cta-stepper-card { padding: 1.5rem; border-radius: 18px; }
        .cta-primary-btn { max-width: 100%; font-size: .95rem; padding: 1.1rem 1.5rem; }
        .cta-step-num { width: 36px; height: 36px; min-width: 36px; font-size: .9rem; }
        .cta-step-row { gap: 1rem; }
      }
    `}</style>

    {/* Soft orb */}
    <div style={{ position:'absolute', top:'50%', left:'0%', transform:'translate(-30%, -50%)', width:'700px', height:'700px', borderRadius:'50%', background:'radial-gradient(circle,rgba(124,58,237,.08) 0%,transparent 60%)', pointerEvents:'none' }}/>

    <div className="cta-grid">

      {/* Left: Text & Button */}
      <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:.6 }}>
        <div style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.28rem .9rem', background:'rgba(124,58,237,.1)', border:'1px solid rgba(124,58,237,.2)', borderRadius:'99px', marginBottom:'1.25rem' }}>
          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#7C3AED' }}/>
          <span style={{ fontSize:'.72rem', fontWeight:800, color:'#7C3AED', letterSpacing:'.07em', textTransform:'uppercase' }}>Your Turn</span>
        </div>

        <h2 style={{ color:'#1A1040', fontWeight:900, fontSize:'clamp(2.1rem,4vw,3.8rem)', letterSpacing:'-.04em', lineHeight:1.1, margin:'0 0 1.25rem' }}>
          Ready to stop guessing?{' '}
          <span style={{ background:'linear-gradient(135deg,#22C55E,#10B981)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Start closing.</span>
        </h2>

        <p style={{ color:'#4B5563', fontSize:'clamp(.95rem,2vw,1.1rem)', lineHeight:1.6, margin:'0 0 2rem', maxWidth:'480px' }}>
          Every day you wait, you lose money to the business down the street. Let's fix that today. One free call. No tricky contracts. Just a clear plan to scale.
        </p>

        <div style={{ display:'flex', flexDirection:'column', gap:'1.1rem', alignItems:'flex-start' }}>
          <motion.a
            href="https://wa.me/917997001700?text=Hi!%20I%20want%20to%20claim%20my%20Free%20Brand%20Audit."
            target="_blank" rel="noreferrer"
            whileHover={{ scale:1.02, boxShadow:'0 16px 40px -8px rgba(124,58,237,.5)' }} whileTap={{ scale:0.98 }}
            className="cta-primary-btn"
          >
            <MessageCircle size={20} color="#ffffff" fill="#ffffff"/>
            Claim Free Brand Audit
            <ArrowRight size={20} color="#ffffff"/>
          </motion.a>

          {/* Micro trust row */}
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', flexWrap:'wrap' }}>
            <span style={{ display:'flex', alignItems:'center', gap:'.4rem', color:'#6B7280', fontSize:'.82rem', fontWeight:600 }}>
              <Shield size={13} color="#7C3AED"/> 100% Free Audit
            </span>
            <span style={{ display:'flex', alignItems:'center', gap:'.4rem', color:'#6B7280', fontSize:'.82rem', fontWeight:600 }}>
              <CheckCircle size={13} color="#16A34A"/> 30-Min Call
            </span>
            <span style={{ display:'flex', alignItems:'center', gap:'.4rem', color:'#DC2626', fontSize:'.82rem', fontWeight:700 }}>
              <span style={{ display:'inline-block', width:'6px', height:'6px', borderRadius:'50%', background:'#EF4444' }}/>
              Only 3 spots left this month
            </span>
          </div>
        </div>
      </motion.div>

      {/* Right: Stepper Card */}
      <motion.div
        initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:.2, duration:.6 }}
        className="cta-stepper-card"
      >
        <h3 style={{ color:'#1A1040', fontSize:'clamp(1rem,2vw,1.25rem)', fontWeight:800, margin:'0 0 2rem', letterSpacing:'-.02em' }}>
          Here is exactly what happens next:
        </h3>

        <div style={{ display:'flex', flexDirection:'column', gap:'1.75rem' }}>
          {[
            { num:'1', title:'You WhatsApp Us', color:'#0369A1', bg:'#E0F2FE', border:'#BAE6FD', desc:'Send a quick message. We will reply within 30 minutes during business hours to schedule a time.' },
            { num:'2', title:'We Audit Your Brand', color:'#6D28D9', bg:'#EDE9FE', border:'#C4B5FD', desc:'We silently review your current ads, website, and competitors to find the exact revenue leaks.' },
            { num:'3', title:'You Get The Blueprint', color:'#15803D', bg:'#DCFCE7', border:'#BBF7D0', desc:'We present a custom 30-day growth plan. You can hire us to build it, or keep the plan for free.' },
          ].map((step, i) => (
            <div key={i} className="cta-step-row">
              <div className="cta-step-num" style={{ background:step.bg, border:`1.5px solid ${step.border}`, color:step.color }}>
                {step.num}
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <h4 style={{ color:'#1A1040', fontSize:'clamp(.95rem,1.5vw,1.05rem)', fontWeight:800, margin:'0 0 .3rem', lineHeight:1.3 }}>{step.title}</h4>
                <p style={{ margin:0, color:'#6B7280', fontSize:'.88rem', lineHeight:1.6 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default FinalCTA;
