import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, Target, TrendingUp, BarChart3, IndianRupee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────
   ICON DATA
   x / y  = percent of the right-column container  (0-100)
   size   = px width/height of the icon image
   Positions ARE intentionally random-feeling, not on a strict grid.
───────────────────────────────────────────────────────────────── */
const ICONS = [
  // row 0 — y: 4-7%
  { id:'instagram',      img:'/logos/instagram.png',        label:'Instagram',        x:4,  y:4,  size:64, title:'Instagram Growth System',  content:'Leads via reels, funnels & DM automation.',       result:'+200% leads in 60 days' },
  { id:'facebook',       img:'/logos/facebook.png',         label:'Facebook',          x:28, y:3,  size:54, title:'Facebook Ad Machines',     content:'High-intent acquisition via precision targeting.', result:'3.5x average ROAS' },
  { id:'youtube',        img:'/logos/youtube.png',          label:'YouTube',           x:55, y:5,  size:58, title:'YouTube Authority',        content:'Content that builds trust & drives conversions.',  result:'Top 1% engagement' },
  { id:'google-biz',     img:'/logos/google-business.png',  label:'Google Business',   x:79, y:4,  size:50, title:'Google Business Profile',  content:'Dominate local Google presence & reviews.',        result:'Top 3 Map Pack' },
  // row 1 — y: 23-25%
  { id:'whatsapp',       img:'/logos/whatsapp.png',         label:'WhatsApp',          x:0,  y:24, size:66, title:'WhatsApp Funnels',         content:'Close deals with automated chat sequences.',       result:'90%+ open rates' },
  { id:'meta',           img:'/logos/meta ads.png',         label:'Meta Ads',           x:22, y:23, size:54, title:'Meta Scaling Systems',     content:'Aggressive growth across FB & Instagram.',         result:'Scale to $10k+/day' },
  { id:'googleads',      img:'/logos/google ads.png',       label:'Google Ads',         x:50, y:24, size:58, title:'Precision PPC',            content:"Stop wasting budget on non-converting clicks.",    result:'-40% CPA' },
  { id:'analytics',      img:'/logos/google analytics.png', label:'Analytics',          x:77, y:23, size:50, title:'Data Intelligence',        content:'Actionable tracking for every rupee spent.',       result:'Zero-waste budget' },
  // row 2 — y: 44-47%
  { id:'n8n',            img:'/logos/n8n.png',              label:'n8n',                x:10, y:45, size:68, title:'Automation Engine',        content:'Custom workflows connecting your entire stack.',   result:'Save hours & scale' },
  { id:'shopify',        img:'/logos/shopify.png',          label:'Shopify',            x:36, y:46, size:62, title:'E-commerce Scale',         content:'End-to-end store optimisation.',                   result:'+150% cart value' },
  { id:'zapier',         img:'/logos/zapier.png',           label:'Zapier',             x:62, y:45, size:50, title:'Integration Bridge',       content:'Glue apps together—no coding required.',          result:'Seamless data flow' },
  { id:'stripe',         img:'/logos/stripe.png',           label:'Stripe',             x:83, y:46, size:46, title:'Global Payments',          content:'Frictionless checkout world-wide.',                result:'99.9% success rate' },
  // row 3 — y: 64-66%
  { id:'notion',         img:'/logos/notion.png',           label:'Notion',             x:2,  y:64, size:50, title:'Ops Central',              content:'Documented, organised, always on mission.',        result:'100% team alignment' },
  { id:'telegram',       img:'/logos/telegram.png',         label:'Telegram',           x:22, y:65, size:54, title:'Telegram Community',       content:'Engage loyal fans in real-time channels.',         result:'High-intent groups' },
  { id:'discord',        img:'/logos/discord.png',          label:'Discord',            x:48, y:64, size:52, title:'Discord Ecosystem',        content:'Build long-term retention & brand loyalty.',       result:'Interactive community' },
  { id:'x',              img:'/logos/x.png',                label:'X (Twitter)',        x:72, y:65, size:48, title:'X Engagement',             content:'Viral loops to reach decision makers.',            result:'Founders & leaders' },
  { id:'mailchimp',      img:'/logos/mailchimp.png',        label:'Mailchimp',          x:88, y:64, size:44, title:'Email Retention',          content:'Lifecycle loops that bring customers back.',       result:'Regenerative LTV' },
  // row 4 — y: 82-83%
  { id:'gmail',          img:'/logos/gmail.png',            label:'Gmail',              x:6,  y:82, size:44, title:'Gmail Systems',            content:'Outbox infra for outbound at scale.',              result:'25%+ reply rates' },
  { id:'wordpress',      img:'/logos/wordpress.png',        label:'WordPress',          x:29, y:83, size:48, title:'Speed-Optimized Web',      content:'High-perf sites that convert traffic.',            result:'<2s load times' },
  { id:'google-maps',    img:'/logos/google-maps.png',      label:'Google Maps',        x:55, y:82, size:44, title:'Local Legend',             content:'Dominate local search & drive footfall.',          result:'Top 3 Map Pack' },
  { id:'linkedin',       img:'/logos/linkedin.png',         label:'LinkedIn',           x:78, y:83, size:42, title:'LinkedIn B2B Engine',      content:'Outreach for high-ticket B2B leads.',             result:'10x pipeline growth' },
];

/*
  ════════════════════════════════════════════
  AUTOMATION STORY — 6 chapters, each color-
  coded and sequenced to tell the funnel story.

  Index map:
    0=Instagram  1=Facebook   2=YouTube   3=GoogleBiz
    4=WhatsApp   5=Meta Ads   6=GoogleAds 7=Analytics
    8=n8n        9=Shopify   10=Zapier   11=Stripe
   12=Notion    13=Telegram  14=Discord  15=X
   16=Mailchimp 17=Gmail     18=WordPress 19=GoogleMaps 20=LinkedIn
  ════════════════════════════════════════════
*/
const STORY_CONNECTIONS = [
  // ── Ch.1 ATTRACT: orange-amber ─ social → ads ──────────────────
  { a:0,  b:5,  color:'#F97316', label:'ATTRACT',   w:0.55, delay:0.0  }, // Instagram → Meta Ads
  { a:1,  b:5,  color:'#F97316', label:'ATTRACT',   w:0.45, delay:0.3  }, // Facebook → Meta Ads
  { a:2,  b:6,  color:'#FBBF24', label:'ATTRACT',   w:0.50, delay:0.6  }, // YouTube → Google Ads
  { a:3,  b:19, color:'#F59E0B', label:'ATTRACT',   w:0.40, delay:0.9  }, // Google Business → Google Maps

  // ── Ch.2 CONVERT: violet-pink ─ ads → WhatsApp/Shopify ─────────
  { a:5,  b:4,  color:'#EC4899', label:'CONVERT',   w:0.65, delay:1.4  }, // Meta Ads → WhatsApp  ★ main funnel
  { a:6,  b:4,  color:'#A855F7', label:'CONVERT',   w:0.55, delay:1.7  }, // Google Ads → WhatsApp
  { a:5,  b:9,  color:'#EC4899', label:'CONVERT',   w:0.45, delay:2.0  }, // Meta Ads → Shopify
  { a:2,  b:9,  color:'#A855F7', label:'CONVERT',   w:0.35, delay:2.3  }, // YouTube → Shopify

  // ── Ch.3 AUTOMATE: green-teal ─ the engine ─────────────────────
  { a:4,  b:8,  color:'#10B981', label:'AUTOMATE',  w:0.70, delay:2.8  }, // WhatsApp → n8n       ★ core automation
  { a:12, b:8,  color:'#059669', label:'AUTOMATE',  w:0.45, delay:3.1  }, // Notion → n8n
  { a:8,  b:10, color:'#34D399', label:'AUTOMATE',  w:0.60, delay:3.4  }, // n8n → Zapier
  { a:8,  b:9,  color:'#10B981', label:'AUTOMATE',  w:0.50, delay:3.7  }, // n8n → Shopify
  { a:10, b:11, color:'#6EE7B7', label:'AUTOMATE',  w:0.50, delay:4.0  }, // Zapier → Stripe
  { a:10, b:16, color:'#34D399', label:'AUTOMATE',  w:0.45, delay:4.3  }, // Zapier → Mailchimp

  // ── Ch.4 ANALYSE: blue-cyan ─ feedback loops ───────────────────
  { a:7,  b:5,  color:'#38BDF8', label:'ANALYSE',   w:0.45, delay:5.0  }, // Analytics → Meta Ads (loop back)
  { a:7,  b:6,  color:'#0EA5E9', label:'ANALYSE',   w:0.40, delay:5.3  }, // Analytics → Google Ads (loop back)

  // ── Ch.5 NURTURE: purple ─ retention + community ───────────────
  { a:16, b:17, color:'#818CF8', label:'NURTURE',   w:0.50, delay:6.0  }, // Mailchimp → Gmail
  { a:4,  b:13, color:'#A78BFA', label:'NURTURE',   w:0.45, delay:6.3  }, // WhatsApp → Telegram
  { a:13, b:14, color:'#C4B5FD', label:'NURTURE',   w:0.40, delay:6.6  }, // Telegram → Discord
  { a:15, b:20, color:'#818CF8', label:'NURTURE',   w:0.35, delay:6.9  }, // X → LinkedIn

  // ── Ch.6 LOCAL: yellow-gold ─ local dominance ──────────────────
  { a:18, b:19, color:'#FCD34D', label:'LOCAL',     w:0.45, delay:7.5  }, // WordPress → Google Maps
  { a:3,  b:18, color:'#FBBF24', label:'LOCAL',     w:0.40, delay:7.8  }, // Google Business → WordPress
  { a:20, b:17, color:'#F59E0B', label:'LOCAL',     w:0.35, delay:8.1  }, // LinkedIn → Gmail
];

/* helper — midpoint for a "flowing dot" */
const mid = (a, b, t) => a + (b - a) * t;

/* ─── Pro Connection Lines Component ─── */
const ConnectionLines = () => {
  /* unique gradient IDs per connection */
  return (
    <svg
      style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:1 }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        {STORY_CONNECTIONS.map((c, i) => {
          const ia = ICONS[c.a], ib = ICONS[c.b];
          if (!ia || !ib) return null;
          const x1 = ia.x + ia.size * 0.05, y1 = ia.y + ia.size * 0.05;
          const x2 = ib.x + ib.size * 0.05, y2 = ib.y + ib.size * 0.05;
          /* gradient direction matches the line direction */
          return (
            <linearGradient key={i} id={`sg${i}`}
              x1={`${x1}%`} y1={`${y1}%`} x2={`${x2}%`} y2={`${y2}%`}
              gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor={c.color} stopOpacity="0"/>
              <stop offset="35%"  stopColor={c.color} stopOpacity="0.7"/>
              <stop offset="65%"  stopColor={c.color} stopOpacity="0.7"/>
              <stop offset="100%" stopColor={c.color} stopOpacity="0"/>
            </linearGradient>
          );
        })}
      </defs>

      {STORY_CONNECTIONS.map((c, i) => {
        const ia = ICONS[c.a], ib = ICONS[c.b];
        if (!ia || !ib) return null;
        /* centre of each icon (icon size is in px, but viewBox is 0-100, 
           so we use x/y percent directly — the icon centre is ~x + 2.5% offset) */
        const x1 = ia.x + 2.5, y1 = ia.y + 2.5;
        const x2 = ib.x + 2.5, y2 = ib.y + 2.5;

        /* Chapter pulse speed — ATTRACT fastest, LOCAL slowest */
        const chapterSpeed = {
          ATTRACT:  2.4,
          CONVERT:  2.8,
          AUTOMATE: 3.2,
          ANALYSE:  2.0,
          NURTURE:  3.6,
          LOCAL:    4.0,
        }[c.label] ?? 3.0;

        return (
          <g key={i}>
            {/* Base static dim line — always visible, very faint */}
            <line
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={c.color}
              strokeWidth={c.w * 0.3}
              strokeOpacity={0.1}
            />
            {/* Animated pulse line */}
            <motion.line
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={`url(#sg${i})`}
              strokeWidth={c.w}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1, 0],
                opacity:    [0, 1, 0.8, 0],
              }}
              transition={{
                duration: chapterSpeed,
                delay:    c.delay,
                repeat:   Infinity,
                repeatDelay: 9,          /* full story cycle = ~9 s pause then replay */
                ease:     'easeInOut',
              }}
            />
            {/* Travelling dot on primary lines (w >= 0.55) */}
            {c.w >= 0.55 && (
              <motion.circle
                r="0.8"
                fill={c.color}
                initial={{ opacity: 0 }}
                animate={{
                  cx: [x1, x2, x2],
                  cy: [y1, y2, y2],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: chapterSpeed,
                  delay:    c.delay + 0.15,
                  repeat:   Infinity,
                  repeatDelay: 9,
                  ease:     'easeInOut',
                }}
                style={{ filter:`drop-shadow(0 0 2px ${c.color})` }}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
};

/* ══════════════════════════════════════════════════
   COUNT CARD — animated metric bento card
══════════════════════════════════════════════════ */
const CountCard = ({ metric, index }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  // IntersectionObserver triggers count-up once
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !inView) setInView(true); },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView]);

  // Count-up animation
  React.useEffect(() => {
    if (!inView) return;
    const duration = 1800 + index * 200;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.round(ease * metric.val));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, metric.val, index]);

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="s2-card"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: `linear-gradient(145deg, ${metric.color}10 0%, white 60%)`,
        border: `1.5px solid ${hovered ? metric.color : metric.color + '40'}`,
        boxShadow: hovered
          ? `0 8px 32px ${metric.color}30, 0 2px 8px rgba(0,0,0,.06)`
          : `0 2px 12px ${metric.color}15, 0 1px 4px rgba(0,0,0,.04)`,
        transition: 'transform .25s, box-shadow .25s, border-color .25s',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Colored top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: `linear-gradient(90deg, ${metric.color}, ${metric.color}88)`,
        borderRadius: '1.1rem 1.1rem 0 0',
      }}/>

      {/* Decorative corner circle */}
      <div style={{
        position:'absolute', top:'-20px', right:'-20px',
        width:'80px', height:'80px', borderRadius:'50%',
        background:`radial-gradient(circle, ${metric.color}20 0%, transparent 70%)`,
        pointerEvents:'none',
      }}/>

      {/* Icon + LIVE badge row */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'.25rem', position:'relative', zIndex:1 }}>
        <div style={{
          width:'32px', height:'32px', borderRadius:'10px',
          background: `linear-gradient(135deg, ${metric.color}25, ${metric.color}10)`,
          border:`1.5px solid ${metric.color}50`,
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow: `0 2px 8px ${metric.color}20`,
        }}>
          <metric.Icon size={15} color={metric.color} strokeWidth={2.2}/>
        </div>
        <span style={{
          fontSize:'.62rem', fontWeight:800, color: '#ffffff',
          textTransform:'uppercase', letterSpacing:'.08em',
          background: metric.color, padding:'.22rem .6rem',
          borderRadius:'99px',
          boxShadow: `0 2px 8px ${metric.color}40`,
        }}>LIVE</span>
      </div>

      {/* Animated number */}
      <div style={{ display:'flex', alignItems:'baseline', gap:'.05rem', margin:'.15rem 0 .05rem', position:'relative', zIndex:1 }}>
        {metric.prefix && (
          <span style={{ fontSize:'1.15rem', fontWeight:900, color: '#111111', letterSpacing:'-.02em' }}>{metric.prefix}</span>
        )}
        <span style={{ fontSize:'clamp(1.7rem,2.4vw,2.2rem)', fontWeight:900, color: '#111111', letterSpacing:'-.05em', lineHeight:1 }}>
          {count}
        </span>
        <span style={{ fontSize:'1.25rem', fontWeight:900, color: '#111111', letterSpacing:'-.04em' }}>{metric.suffix}</span>
      </div>

      {/* Label */}
      <p style={{ fontSize:'.73rem', fontWeight:800, color:'#1A1040', margin:'0 0 .2rem', letterSpacing:'.005em', lineHeight:1.3, position:'relative', zIndex:1 }}>
        {metric.label}
      </p>

      {/* Story line */}
      <p style={{ fontSize:'.67rem', color:'#6B7280', margin:'0 0 .55rem', lineHeight:1.4, overflow:'hidden', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', position:'relative', zIndex:1 }}>
        {metric.story}
      </p>

      {/* Progress bar */}
      <div style={{ position:'relative', height:'3px', background:`${metric.color}18`, borderRadius:'99px', overflow:'hidden', position:'relative', zIndex:1 }}>
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: inView ? `${metric.bar}%` : '0%' }}
          transition={{ delay: index * 0.15 + 0.3, duration: 1.2, ease: 'easeOut' }}
          style={{
            position:'absolute', left:0, top:0, height:'100%',
            background:`linear-gradient(90deg, ${metric.color}99, ${metric.color})`,
            borderRadius:'99px',
          }}
        />
      </div>
      <span style={{ fontSize:'.6rem', color: metric.color, fontWeight:700, position:'relative', zIndex:1 }}>
        {metric.bar}% above industry avg.
      </span>
    </motion.div>
  );
};


const Hero = () => {
  const [formData, setFormData]   = useState({ name:'', email:'', phone:'', business:'' });
  const [submitted, setSubmitted] = useState(false);
  const [tip, setTip]             = useState({ v:false, item:null, x:0, y:0, pl:'top' });
  const ttRef = useRef(null);

  const showTip = (e, item) => {
    const r = e.currentTarget.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const tw = 264, pad = 14, vw = window.innerWidth;
    const pl = r.top < 220 ? 'bottom' : 'top';
    const y  = pl === 'top' ? r.top - 12 : r.bottom + 12;
    const x  = Math.max(pad, Math.min(cx - tw / 2, vw - pad - tw));
    if (ttRef.current) clearTimeout(ttRef.current);
    ttRef.current = setTimeout(() => setTip({ v:true, item, x, y, pl }), 140);
  };
  const hideTip = () => {
    if (ttRef.current) clearTimeout(ttRef.current);
    ttRef.current = setTimeout(() => setTip(p => ({ ...p, v:false })), 120);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi! Free Brand Audit please.%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ABusiness: ${formData.business}`;
    window.open(`https://wa.me/917997001700?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* ══════ SCREEN 1: HERO ══════ */}
      <section className="hero-section-mob" style={{
        display:'flex',
        position:'relative', overflow:'hidden',
        background:'linear-gradient(140deg,#050411 0%,#0A0818 65%,#060C18 100%)',
      }}>
        <style>{`
          .hg { display:grid; grid-template-columns:42% 58%; width:100%; max-width:1400px; margin:0 auto; padding:0 2rem; position:relative; z-index:2; align-items:center; }
          .hl { display:flex; flex-direction:column; gap:1.3rem; padding:2rem 3rem 2rem 0; }
          .hr { position:relative; height:calc(100vh - 140px); min-height:460px; max-height:680px; }
          .icon-abs { position:absolute; cursor:pointer; }
          .icon-abs img { width:100%; height:100%; object-fit:cover; border-radius:14px; transition:box-shadow .2s; }
          .icon-lbl { position:absolute; bottom:-17px; left:50%; transform:translateX(-50%); font-size:.57rem; font-weight:700; white-space:nowrap; letter-spacing:.04em; color:#4B5563; transition:color .2s; pointer-events:none; }
          .hero-section-mob { min-height:100vh; align-items:center; padding-top:80px; }
          @media(max-width:900px){ .hg{grid-template-columns:1fr;} .hr{display:none;} .hl{padding:2rem 0;} .hero-section-mob{min-height:unset!important; align-items:flex-start!important; padding-top:100px!important; padding-bottom:3rem!important;} }
          @media(max-width:640px){ .hl{gap:.9rem; padding:1.5rem 0;} .hero-ctas{flex-direction:column!important; align-items:flex-start!important; gap:1.25rem!important;} .hero-ctas a:first-child{width:auto!important;} .hero-stats{gap:1.25rem; flex-wrap:wrap; justify-content:flex-start!important;} }
          @media(max-width:480px){ .h1{font-size:clamp(2.2rem,9vw,2.6rem)!important; line-height:1.05!important;} .hg{padding:0 1.25rem;} }
        `}</style>

        {/* Grid lines */}
        <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(124,58,237,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.03) 1px,transparent 1px)', backgroundSize:'72px 72px', pointerEvents:'none' }} />

        {/* Orbs */}
        <motion.div animate={{ scale:[1,1.1,1], opacity:[0.15,0.28,0.15] }} transition={{ duration:9, repeat:Infinity, ease:'easeInOut' }}
          style={{ position:'absolute', right:'-4%', top:'50%', transform:'translateY(-50%)', width:'820px', height:'820px', borderRadius:'50%', background:'radial-gradient(circle,rgba(124,58,237,0.3) 0%,rgba(168,85,247,0.08) 40%,transparent 68%)', pointerEvents:'none', zIndex:0 }} />
        <motion.div animate={{ scale:[1,1.18,1], opacity:[0.06,0.13,0.06] }} transition={{ duration:14, repeat:Infinity, ease:'easeInOut', delay:4 }}
          style={{ position:'absolute', right:'20%', top:'10%', width:'340px', height:'340px', borderRadius:'50%', background:'radial-gradient(circle,rgba(59,130,246,0.2) 0%,transparent 70%)', pointerEvents:'none', zIndex:0 }} />

        <div className="hg">

          {/* ── LEFT ── */}
          <div className="hl">
            {/* Badge */}
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:.5 }}
              style={{ display:'flex', alignItems:'center', gap:'.65rem', alignSelf:'flex-start', background:'rgba(124,58,237,0.08)', border:'1px solid rgba(124,58,237,0.22)', borderRadius:'99px', padding:'.4rem 1rem .4rem .4rem' }}>
              <div style={{ display:'flex' }}>
                {['#7C3AED','#EC4899','#10B981','#3B82F6'].map((c,i)=>(
                  <div key={i} style={{ width:'22px', height:'22px', borderRadius:'50%', background:c, border:'2px solid #0A0818', marginLeft: i ? '-6px' : 0 }}/>
                ))}
              </div>
              <span style={{ fontSize:'.76rem', fontWeight:700, color:'#C4B5FD', letterSpacing:'.03em' }}>Trusted by 120+ growing brands</span>
              <div style={{ width:'5px', height:'5px', borderRadius:'50%', background:'#22C55E', boxShadow:'0 0 7px rgba(34,197,94,.8)' }}/>
            </motion.div>

            {/* Headline */}
            <motion.h1 className="h1" initial={{ opacity:0, y:26 }} animate={{ opacity:1, y:0 }} transition={{ duration:.65, delay:.1 }}
              style={{ margin:0, fontSize:'clamp(2.4rem,3.8vw,4rem)', fontWeight:900, lineHeight:1.07, letterSpacing:'-.04em' }}>
              <span style={{ color:'white' }}>Not getting</span><br/>
              <span style={{ background:'linear-gradient(135deg,#A855F7 0%,#EC4899 50%,#F97316 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>enough customers?</span><br/>
              <span style={{ color:'white' }}>We fix that.</span>
            </motion.h1>

            {/* Body */}
            <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:.5, delay:.2 }}
              style={{ margin:0, fontSize:'1rem', color:'#94A3B8', lineHeight:1.65, maxWidth:'400px' }}>
              Your team isn't failing because of skill gaps — they're running a{' '}
              <strong style={{ color:'white' }}>2018 playbook</strong>. We replace it with a system that closes.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:.5, delay:.3 }}
              className="hero-ctas" style={{ display:'flex', gap:'1rem', flexWrap:'wrap', alignItems:'center' }}>
              <motion.a href="https://wa.me/917997001700?text=Hi%21%20I%20want%20a%20free%20growth%20audit." target="_blank" rel="noreferrer"
                whileHover={{ scale:1.04, boxShadow:'0 0 45px -5px rgba(124,58,237,.65)' }} whileTap={{ scale:.97 }}
                style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.85rem 1.7rem', background:'linear-gradient(135deg,#7C3AED,#A855F7)', color:'white', borderRadius:'99px', fontWeight:800, fontSize:'.95rem', textDecoration:'none', boxShadow:'0 0 30px -8px rgba(124,58,237,.5)' }}>
                Get Free Audit <ArrowRight size={16}/>
              </motion.a>
              <a href="#services" style={{ display:'inline-flex', alignItems:'center', gap:'.4rem', color:'#9CA3AF', fontWeight:600, fontSize:'.88rem', textDecoration:'none' }}
                onMouseEnter={e=>e.currentTarget.style.color='white'} onMouseLeave={e=>e.currentTarget.style.color='#9CA3AF'}>
                See our work <ArrowRight size={14}/>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.5 }}
              className="hero-stats" style={{ display:'flex', gap:'2rem', flexWrap:'wrap' }}>
              {[['500+','Leads/month'],['3.5x','Avg. ROAS'],['120+','Brands grown']].map(([v,l])=>(
                <div key={l}>
                  <div style={{ fontSize:'1.5rem', fontWeight:900, color:'white', letterSpacing:'-.03em', lineHeight:1 }}>{v}</div>
                  <div style={{ fontSize:'.72rem', color:'#6B7280', fontWeight:600, marginTop:'2px' }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: icon cloud ── */}
          <div className="hr">
            {/* Rings */}
            <motion.div animate={{ scale:[1,1.06,1], opacity:[.22,.48,.22] }} transition={{ duration:4.5, repeat:Infinity, ease:'easeInOut' }}
              style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'160px', height:'160px', border:'1px solid rgba(124,58,237,.4)', borderRadius:'50%', pointerEvents:'none', zIndex:1 }}/>
            <motion.div animate={{ scale:[1,1.1,1], opacity:[.08,.22,.08] }} transition={{ duration:7, repeat:Infinity, ease:'easeInOut', delay:2 }}
              style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'320px', height:'320px', border:'1px solid rgba(124,58,237,.12)', borderRadius:'50%', pointerEvents:'none', zIndex:1 }}/>

            {/* Connection lines (viewport-relative via the % viewBox) */}
            <ConnectionLines/>

            {/* Icons */}
            {ICONS.map((icon, i) => {
              const isH = tip.v && tip.item?.id === icon.id;
              return (
                <motion.div
                  key={icon.id}
                  className="icon-abs"
                  style={{ left:`${icon.x}%`, top:`${icon.y}%`, width:`${icon.size}px`, height:`${icon.size}px`, zIndex: isH ? 20 : 3 }}
                  initial={{ opacity:0, scale:.4 }}
                  animate={{ opacity:1, scale:1, y:[0, -(6 + (i%5)*2), 0] }}
                  transition={{
                    opacity: { delay: i*.04, duration:.4 },
                    scale:   { delay: i*.04, duration:.4 },
                    y:       { delay: i*.1, duration: 3.8 + (i%5)*.5, repeat:Infinity, ease:'easeInOut' }
                  }}
                  onMouseEnter={e => showTip(e, icon)}
                  onMouseLeave={hideTip}
                  whileHover={{ scale:1.22, zIndex:20 }}
                >
                  <img src={icon.img} alt={icon.label}
                    style={{ boxShadow: isH ? '0 0 28px rgba(124,58,237,.7),0 10px 28px rgba(0,0,0,.5)' : '0 8px 22px rgba(0,0,0,.45),0 0 0 1px rgba(255,255,255,.06)' }}
                  />
                  <span className="icon-lbl" style={{ color: isH ? '#A78BFA' : '#4B5563' }}>{icon.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Scroll arrow */}
        <motion.div animate={{ y:[0,8,0] }} transition={{ duration:2.2, repeat:Infinity }}
          onClick={() => window.scrollBy({ top:window.innerHeight, behavior:'smooth' })}
          style={{ position:'absolute', bottom:'1.5rem', left:'50%', transform:'translateX(-50%)', color:'#4B5563', cursor:'pointer', zIndex:3 }}>
          <ChevronDown size={26}/>
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {tip.v && tip.item && (
            <motion.div initial={{ opacity:0, scale:.88 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:.88 }}
              transition={{ duration:.17 }}
              onMouseEnter={() => { if (ttRef.current) clearTimeout(ttRef.current); }}
              onMouseLeave={hideTip}
              style={{ position:'fixed', top: tip.pl==='top'?'auto':tip.y, bottom: tip.pl==='top'?window.innerHeight-tip.y:'auto', left:tip.x,
                width:'262px', background:'rgba(6,4,18,.97)', backdropFilter:'blur(24px)', borderRadius:'18px', padding:'18px 20px',
                border:'1px solid rgba(124,58,237,.22)', boxShadow:'0 30px 60px -12px rgba(0,0,0,.85)', zIndex:9999 }}>
              <h4 style={{ fontSize:'.9rem', fontWeight:900, color:'#fff', margin:'0 0 5px', letterSpacing:'-.02em' }}>{tip.item.title}</h4>
              <p style={{ fontSize:'.77rem', color:'#94a3b8', margin:0, lineHeight:1.55, fontWeight:500 }}>{tip.item.content}</p>
              <div style={{ marginTop:'9px', paddingTop:'9px', borderTop:'1px solid rgba(255,255,255,.07)', display:'flex', alignItems:'center', gap:'7px' }}>
                <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 7px rgba(34,197,94,.6)', flexShrink:0 }}/>
                <span style={{ fontSize:'.68rem', fontWeight:900, color:'#22c55e', textTransform:'uppercase', letterSpacing:'.08em' }}>{tip.item.result}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ══════════════════════════════════════════════════
          SCREEN 2 — Premium Form + Bento Metrics
      ══════════════════════════════════════════════════ */}
      <section style={{
        minHeight:'100vh', display:'flex', alignItems:'center',
        background:'linear-gradient(160deg, #EDE8FF 0%, #F5F3FF 50%, #EEF2FF 100%)', position:'relative', overflow:'hidden',
      }}>
        <style>{`
          /* ── Screen-2 styles ── */
          .s2-grid { display:grid; grid-template-columns:1fr 1.15fr; gap:4rem; width:100%; max-width:1280px; margin:0 auto; padding:2.5rem 2rem; align-items:center; position:relative; z-index:2; }
          .s2-form-card { background:#ffffff; border:1px solid rgba(124,58,237,.18); border-radius:1.5rem; padding:1.75rem; box-shadow:0 4px 32px rgba(124,58,237,.1); }
          .s2-input { width:100%; box-sizing:border-box; padding:.9rem 1.1rem; background:#f8f7ff; border:1px solid rgba(124,58,237,.15); color:#1A1040; border-radius:.75rem; font-size:.92rem; outline:none; transition:border-color .2s, box-shadow .2s; font-family:inherit; }
          .s2-input:focus { border-color:rgba(124,58,237,.6); box-shadow:0 0 0 3px rgba(124,58,237,.1); }
          .s2-input::placeholder { color:#9CA3AF; }
          .s2-bento { display:grid; grid-template-columns:1fr 1fr; grid-template-rows:auto auto; gap:0.75rem; }
          .s2-card { border-radius:1.1rem; padding:1.1rem; padding-top:1.25rem; border:1.5px solid rgba(0,0,0,.08); display:flex; flex-direction:column; gap:.3rem; cursor:default; transition:transform .25s, box-shadow .25s, border-color .25s; }
          .s2-card:hover { transform:translateY(-4px); }
          @media(max-width:860px){ .s2-grid{grid-template-columns:1fr; gap:2rem; padding:2rem 1.25rem;} .s2-grid>*:last-child{order:-1;} }
          @media(max-width:540px){ .s2-form-row{flex-direction:column!important;} .s2-bento{grid-template-columns:1fr 1fr;} .s2-form-card{padding:1.25rem;} }
          @media(max-width:400px){ .s2-bento{grid-template-columns:1fr;} }
        `}</style>

        {/* ── Background atmosphere ── */}
        {/* Dot grid */}
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(124,58,237,.12) 1px, transparent 1px)', backgroundSize:'32px 32px', opacity:.4, pointerEvents:'none' }}/>
        {/* Left orb — purple */}
        <motion.div animate={{ scale:[1,1.12,1], opacity:[.12,.22,.12] }} transition={{ duration:10, repeat:Infinity, ease:'easeInOut' }}
          style={{ position:'absolute', left:'-8%', top:'30%', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle,rgba(124,58,237,.35) 0%,transparent 65%)', pointerEvents:'none' }}/>
        {/* Right orb — green */}
        <motion.div animate={{ scale:[1,1.15,1], opacity:[.08,.16,.08] }} transition={{ duration:13, repeat:Infinity, ease:'easeInOut', delay:3 }}
          style={{ position:'absolute', right:'-5%', bottom:'10%', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle,rgba(34,197,94,.25) 0%,transparent 65%)', pointerEvents:'none' }}/>

        <div className="s2-grid">

          {/* ━━━━━━━━━━ LEFT — Form ━━━━━━━━━━ */}
          <motion.div initial={{ opacity:0, x:-32 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:.65 }}>

            {/* Pain-first headline */}
            <div style={{ marginBottom:'1.25rem' }}>
              {/* Urgency tag */}
              <motion.div
                animate={{ opacity:[.8,1,.8] }} transition={{ duration:2.5, repeat:Infinity }}
                style={{ display:'inline-flex', alignItems:'center', gap:'.5rem', padding:'.28rem .8rem', background:'rgba(239,68,68,.1)', border:'1px solid rgba(239,68,68,.3)', borderRadius:'99px', marginBottom:'.85rem' }}>
                <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#EF4444', boxShadow:'0 0 8px rgba(239,68,68,.8)' }}/>
                <span style={{ fontSize:'.72rem', fontWeight:800, color:'#DC2626', letterSpacing:'.06em', textTransform:'uppercase' }}>3 audit slots open this week</span>
              </motion.div>

              <h2 style={{ color:'#1A1040', margin:'0 0 .5rem', fontWeight:900, fontSize:'clamp(1.6rem,2.4vw,2.2rem)', letterSpacing:'-.04em', lineHeight:1.1 }}>
                Your competitors are scaling.<br/>
                <span style={{ background:'linear-gradient(135deg,#A855F7,#EC4899)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>You're still guessing.</span>
              </h2>
              <p style={{ color:'#4B5563', fontSize:'.88rem', lineHeight:1.55, margin:0, maxWidth:'400px' }}>
                Get the exact growth system that took <strong style={{ color:'#7C3AED' }}>120+ brands</strong> from invisible to inevitable — completely free.
              </p>
            </div>

            {/* Glassmorphic form card */}
            <div className="s2-form-card">
              {submitted ? (
                <motion.div initial={{ opacity:0, scale:.9 }} animate={{ opacity:1, scale:1 }}
                  style={{ padding:'2rem', background:'rgba(34,197,94,.06)', border:'1px solid rgba(34,197,94,.15)', borderRadius:'1.25rem', textAlign:'center' }}>
                  <CheckCircle size={48} color="#22C55E" style={{ margin:'0 auto 1rem', display:'block' }}/>
                  <h3 style={{ color:'#1A1040', fontSize:'1.4rem', margin:'0 0 .5rem', fontWeight:800 }}>You're in the system!</h3>
                  <p style={{ color:'#4B5563', fontSize:'.9rem', margin:0 }}>Check WhatsApp — your audit starts within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'.65rem' }}>
                  <div className="s2-form-row" style={{ display:'flex', gap:'.75rem' }}>
                    <input className="s2-input" type="text" placeholder="Your full name" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} required/>
                    <input className="s2-input" type="email" placeholder="Work email" value={formData.email} onChange={e=>setFormData({...formData,email:e.target.value})} required/>
                  </div>
                  <div className="s2-form-row" style={{ display:'flex', gap:'.75rem' }}>
                    <input className="s2-input" type="tel" placeholder="Phone / WhatsApp" value={formData.phone} onChange={e=>setFormData({...formData,phone:e.target.value})} required/>
                    <input className="s2-input" type="text" placeholder="Business name" value={formData.business} onChange={e=>setFormData({...formData,business:e.target.value})} required/>
                  </div>

                  {/* Social proof above CTA */}
                  <div style={{ display:'flex', alignItems:'center', gap:'.75rem', padding:'.6rem 0' }}>
                    <div style={{ display:'flex' }}>
                      {['#7C3AED','#EC4899','#10B981','#3B82F6','#F97316'].map((c,i)=>(
                        <div key={i} style={{ width:'26px', height:'26px', borderRadius:'50%', background:c, border:'2px solid #04030F', marginLeft: i?'-7px':0 }}/>
                      ))}
                    </div>
                    <div>
                      <div style={{ display:'flex', gap:'2px', marginBottom:'2px' }}>
                        {[1,2,3,4,5].map(s=><span key={s} style={{ color:'#FBBF24', fontSize:'.75rem' }}>★</span>)}
                      </div>
                      <span style={{ fontSize:'.72rem', color:'#4B5563', fontWeight:600 }}>120+ brands trust Creativals</span>
                    </div>
                  </div>

                  {/* CTA button */}
                  <motion.button type="submit"
                    whileHover={{ scale:1.02, boxShadow:'0 0 50px -8px rgba(124,58,237,.7)' }}
                    whileTap={{ scale:.97 }}
                    animate={{ boxShadow:['0 0 20px -8px rgba(124,58,237,.4)','0 0 35px -5px rgba(124,58,237,.6)','0 0 20px -8px rgba(124,58,237,.4)'] }}
                    transition={{ duration:2.5, repeat:Infinity, ease:'easeInOut' }}
                    style={{ padding:'1.1rem', background:'linear-gradient(135deg,#7C3AED,#A855F7)', color:'white', fontWeight:800, borderRadius:'.85rem', border:'none', cursor:'pointer', display:'flex', justifyContent:'center', alignItems:'center', gap:'.6rem', fontSize:'1rem', letterSpacing:'-.01em' }}>
                    {/* WhatsApp icon inline */}
                    <svg width="18" height="18" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="rgba(255,255,255,0.15)"/><path d="M24 8C15.2 8 8 15.2 8 24c0 2.8.7 5.4 2 7.7L8 40l8.5-2A15.9 15.9 0 0024 40c8.8 0 16-7.2 16-16S32.8 8 24 8z" fill="white"/><path d="M32 28.2c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.2 1.3-1.4 1.6-.3.3-.5.3-.9.1-2.6-1.3-4.3-2.3-6-5.2-.4-.8.4-.7 1.2-2.4.1-.3.1-.6 0-.8-.1-.2-1-2.5-1.4-3.4-.4-.8-.7-.7-1-.7h-.9c-.3 0-.7.1-1 .4-1.4 1.5-1.4 3.5.1 5.6C20.1 25 22.2 29 27 30.6c1.5.5 2.6.5 3.6.3 1-.2 2.4-1 2.8-2 .4-.9.4-1.7.3-1.9z" fill="#22C55E"/></svg>
                    Get My Free Audit on WhatsApp <ArrowRight size={17}/>
                  </motion.button>

                  {/* Risk reversal */}
                  <p style={{ textAlign:'center', fontSize:'.72rem', color:'#6B7280', margin:0, lineHeight:1.5 }}>
                    Free &nbsp;·&nbsp; No commitment &nbsp;·&nbsp; Response within 2 hours &nbsp;·&nbsp; Takes 2 minutes
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* ━━━━━━━━━━ RIGHT — Bento Metric Cards ━━━━━━━━━━ */}
          <div className="s2-bento">
            {[
              {
                val: 500, suffix:'+', label:'Leads Generated Monthly',
                story:'What we deliver for every brand we take on — consistently.',
                color:'#A855F7', glow:'rgba(168,85,247,.2)', bg:'rgba(168,85,247,.06)',
                border:'rgba(168,85,247,.18)', Icon: Target, bar: 72,
              },
              {
                val: 120, suffix:'+', label:'Brands Grown',
                story:'Teams that trusted the system. All still scaling with us.',
                color:'#22C55E', glow:'rgba(34,197,94,.2)', bg:'rgba(34,197,94,.05)',
                border:'rgba(34,197,94,.15)', Icon: TrendingUp, bar: 88,
              },
              {
                val: 300, suffix:'%', label:'Average ROAS in 6 Months',
                story:'Every ₹1 spent returns ₹3+ within the first 6 months.',
                color:'#38BDF8', glow:'rgba(56,189,248,.2)', bg:'rgba(56,189,248,.05)',
                border:'rgba(56,189,248,.15)', Icon: BarChart3, bar: 94,
              },
              {
                val: 4, prefix:'₹', suffix:'k', label:'Avg. Cost Per 100 Leads',
                story:'Industry average: ₹28k. Our system delivers at ₹4k.',
                color:'#F97316', glow:'rgba(249,115,22,.2)', bg:'rgba(249,115,22,.05)',
                border:'rgba(249,115,22,.15)', Icon: IndianRupee, bar: 55,
              },
            ].map((m, i) => (
              <CountCard key={m.label} metric={m} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
