import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Linkedin, Twitter, Youtube, Mail, MessageCircle, TrendingUp, Target, Globe, MapPin, Calendar, Sun, Zap, Moon, Phone } from 'lucide-react';

const WA_MSG = encodeURIComponent('Hi! I want a free Growth Audit for my business.');
const WA_IN  = `https://wa.me/917997001700?text=${WA_MSG}`;
const WA_US  = `https://wa.me/16286284743?text=${WA_MSG}`;
const CAL    = 'https://calendly.com/smmcreativals/30min';

const WIN_TICKER = [
  'Hotel Sky Intl. · Revenue 2x in 6 months',
  'MRA Motors · 50M Views Generated',
  'Glampinn Valley · ₹50 Crore Revenue',
  'Pista House · 200% Order Growth',
  'GMR Group · 3-Year Ongoing Partner',
  'Gopuppy · ₹15 Crore Revenue',
  'Teak Studio · ₹30 Crore Revenue',
  'Mahindra · 500+ Monthly Leads',
  'RL Tours · Top 3 in Hyderabad',
];

const GOALS = [
  { Icon: TrendingUp, label: 'More Revenue',  sub: 'Scale from X to 2X in 90 days',   color: '#22C55E', href: '/contact?goal=revenue' },
  { Icon: Target,     label: 'More Leads',    sub: 'Fill your sales pipeline fast',    color: '#7C3AED', href: '/contact?goal=leads'   },
  { Icon: Globe,      label: 'Go Global',     sub: 'Expand beyond Indian borders',     color: '#38BDF8', href: '/contact?goal=global'  },
];

const SOCIALS = [
  { Icon: Instagram, href: 'https://instagram.com/creativals',         color: '#E1306C' },
  { Icon: Linkedin,  href: 'https://linkedin.com/company/creativals',  color: '#0077B5' },
  { Icon: Twitter,   href: 'https://twitter.com/creativals',           color: '#1DA1F2' },
  { Icon: Youtube,   href: 'https://youtube.com/@creativals',          color: '#FF0000' },
];


const NAV_COLS = [
  { label: 'Services', links: [
    { text: 'Paid Social Ads',  href: '/services/paid-social-ads'  },
    { text: 'Google Ads & PPC', href: '/services/google-ads-ppc'   },
    { text: 'Custom Websites',  href: '/services/custom-websites'  },
    { text: 'Brand Identity',   href: '/services/brand-identity'   },
    { text: 'AI Chatbots',      href: '/services/ai-chatbots'      },
  ]},
  { label: 'Company', links: [
    { text: 'About Us',     href: '/about-us'  },
    { text: 'Our Approach', href: '/approach'  },
    { text: 'Playbooks',    href: '/playbooks' },
    { text: 'Academy',      href: '/academy'   },
    { text: 'Careers',      href: '/join-us'   },
  ]},
  { label: 'Results', links: [
    { text: 'Case Studies', href: '/case-studies'         },
    { text: 'Client Wall',  href: '/results#client-wall'  },
    { text: 'Reviews',      href: '/client-reviews'       },
    { text: 'Industries',   href: '/industries'           },
    { text: 'Pricing',      href: '/pricing'              },
  ]},
];

/* ── Particle Galaxy Canvas ────────────────────────────── */
function ParticleCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let af;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const pts = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      col: ['#7C3AED','#EC4899','#38BDF8','#F59E0B'][Math.floor(Math.random()*4)],
      op: Math.random() * 0.55 + 0.15,
    }));
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x = (p.x + p.vx + canvas.width)  % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = p.col; ctx.globalAlpha = p.op; ctx.fill();
      });
      ctx.globalAlpha = 1; af = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(af); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none' }} />;
}

/* ── Live Wins Ticker ──────────────────────────────────── */
function WinTicker() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let pos = 0, af;
    const tick = () => {
      pos -= 0.6;
      if (Math.abs(pos) >= el.scrollWidth / 2) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      af = requestAnimationFrame(tick);
    };
    tick(); return () => cancelAnimationFrame(af);
  }, []);
  return (
    <div style={{ overflow:'hidden', padding:'0.55rem 0', borderBottom:'1px solid rgba(255,255,255,0.05)', background:'rgba(255,255,255,0.012)' }}>
      <div ref={ref} style={{ display:'inline-flex', gap:'3rem', whiteSpace:'nowrap', willChange:'transform' }}>
        {[...WIN_TICKER,...WIN_TICKER].map((item,i) => (
          <span key={i} style={{ fontSize:'0.7rem', fontWeight:600, color:'#475569', display:'inline-flex', alignItems:'center', gap:'0.45rem' }}>
            <span style={{ width:4, height:4, borderRadius:'50%', background:'#7C3AED', display:'inline-block' }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Animated SVG Signature ────────────────────────────── */
function Signature() {
  return (
    <svg viewBox="0 0 320 48" style={{ width:220, height:36, display:'block', flexShrink:0 }}>
      <style>{`
        @keyframes drawLine { to { stroke-dashoffset: 0; } }
        .sp { stroke-dasharray:900; stroke-dashoffset:900; animation: drawLine 2.8s ease forwards 0.3s; }
      `}</style>
      <path className="sp" d="M8 36 C20 8,40 8,52 28 C64 48,72 42,84 32 C96 22,102 16,118 28 C134 40,140 18,156 22 C172 28,178 42,194 32 C210 22,218 12,238 26 C258 40,268 28,284 24 C300 18,310 34,318 30" fill="none" stroke="url(#sg)" strokeWidth="2" strokeLinecap="round"/>
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7C3AED"/>
          <stop offset="100%" stopColor="#EC4899"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════ */
const Footer = () => {
  const [hGoal, setHGoal] = useState(null);

  return (
    <footer style={{ background:'#060608', color:'white', fontFamily:'Inter,system-ui,sans-serif', borderTop:'1px solid rgba(124,58,237,0.15)', position:'relative', overflow:'hidden' }}>
      <style>{`
        .ftr-link { color:#6B7280; text-decoration:none; font-size:0.8rem; font-weight:500; transition:color 0.2s; display:block; }
        .ftr-link:hover { color:#E2E8F0; }
        .ftr-soc { width:32px; height:32px; border-radius:0.5rem; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); transition:all 0.2s; text-decoration:none; flex-shrink:0; }
        .ftr-soc:hover { background:rgba(255,255,255,0.1); transform:translateY(-2px); }
        .cc { display:flex; align-items:center; gap:0.55rem; border-radius:0.7rem; padding:0.55rem 0.7rem; text-decoration:none; transition:all 0.18s; }
        .cc:hover { transform:translateX(3px); }
        @keyframes ftrPulse { 0%,100%{opacity:.4} 50%{opacity:.8} }
      `}</style>

      {/* Galaxy background */}
      <div style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }}>
        <ParticleCanvas />
        <div style={{ position:'absolute', top:'-5%', left:'35%', width:'600px', height:'350px', borderRadius:'50%', background:'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', animation:'ftrPulse 6s ease-in-out infinite' }} />
        <div style={{ position:'absolute', bottom:'5%', right:'5%', width:'350px', height:'250px', borderRadius:'50%', background:'radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)' }} />
      </div>

      {/* ── ZONE 1: GALAXY HERO CTA ─────────────────────── */}
      <div style={{ position:'relative', zIndex:1, padding:'4rem clamp(1.5rem,6vw,6rem) 3rem', borderBottom:'1px solid rgba(255,255,255,0.05)', textAlign:'center' }}>
        <div style={{ fontSize:'0.68rem', fontWeight:800, color:'#7C3AED', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:'1rem', display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem' }}>
          <span style={{ width:7, height:7, borderRadius:'50%', background:'#22C55E', display:'inline-block', boxShadow:'0 0 10px #22C55E' }} />
          Now Accepting Clients · 6 Global Offices · Live Results
        </div>

        <div style={{ fontSize:'clamp(3.5rem,8vw,6.5rem)', fontWeight:900, letterSpacing:'-0.05em', lineHeight:1, marginBottom:'0.4rem' }}>
          <span style={{ background:'linear-gradient(135deg,#F59E0B 0%,#EC4899 50%,#7C3AED 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', filter:'drop-shadow(0 0 40px rgba(124,58,237,0.35))' }}>
            ₹1,000,000,000+
          </span>
        </div>
        <div style={{ fontSize:'clamp(0.95rem,2vw,1.3rem)', fontWeight:600, color:'#334155', letterSpacing:'-0.02em', marginBottom:'2.5rem' }}>
          Generated for our clients. And counting.
        </div>

        {/* 3-Goal cards */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.85rem', maxWidth:660, margin:'0 auto' }}>
          {GOALS.map(({ Icon, label, sub, color, href }) => (
            <Link key={label} to={href}
              onMouseEnter={() => setHGoal(label)} onMouseLeave={() => setHGoal(null)}
              style={{
                display:'flex', flexDirection:'column', alignItems:'center', gap:'0.65rem',
                padding:'1.25rem 0.85rem', borderRadius:'0.875rem', textDecoration:'none',
                border:`1px solid ${hGoal===label ? color+'40' : 'rgba(255,255,255,0.08)'}`,
                background: hGoal===label ? `${color}10` : 'rgba(255,255,255,0.025)',
                boxShadow: hGoal===label ? `0 8px 28px -8px ${color}50` : 'none',
                transition:'all 0.25s',
              }}>
              <div style={{ width:42, height:42, borderRadius:'0.65rem', background:`${color}18`, display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Icon size={20} color={color} />
              </div>
              <div>
                <div style={{ fontSize:'0.82rem', fontWeight:800, color:'#E2E8F0', marginBottom:'0.2rem' }}>{label}</div>
                <div style={{ fontSize:'0.62rem', color:'#64748B', fontWeight:500 }}>{sub}</div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:'0.3rem', fontSize:'0.68rem', fontWeight:700, color }}>
                Start <ArrowRight size={11} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── ZONE 2: LIVE WINS TICKER ─────────────────────── */}
      <div style={{ position:'relative', zIndex:1 }}><WinTicker /></div>

      {/* ── ZONE 3: MAIN GRID ───────────────────────────── */}
      <div style={{ position:'relative', zIndex:1, display:'grid', gridTemplateColumns:'1.2fr 2fr 1fr', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>

        {/* Brand */}
        <div style={{ padding:'clamp(1.5rem,2vw,1.5rem) clamp(1.5rem,3vw,3rem)', borderRight:'1px solid rgba(255,255,255,0.05)', display:'flex', flexDirection:'column', gap:'1.25rem' }}>
          <Link to="/" style={{ textDecoration:'none' }}>
            <img src="/logo.webp" alt="Creativals" style={{ height:34, width:'auto' }} />
          </Link>
          <p style={{ color:'#64748B', fontSize:'0.8rem', lineHeight:1.65, fontWeight:500, margin:0, maxWidth:220 }}>
            We build systems that scale businesses — not just run ads. Strategy, tech, and creative, unified.
          </p>
          <div style={{ display:'flex', gap:'0.4rem', flexWrap:'wrap' }}>
            {SOCIALS.map(({ Icon, href, color }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" className="ftr-soc">
                <Icon size={13} color={color} />
              </a>
            ))}
          </div>

          <div style={{ marginTop:'0.5rem', padding:'0.5rem 0.6rem', background:'rgba(124,58,237,0.06)', border:'1px solid rgba(124,58,237,0.12)', borderRadius:'0.6rem', width: 'fit-content' }}>
            <div style={{ fontSize:'0.55rem', color:'#A78BFA', fontWeight:800, textTransform:'uppercase', letterSpacing:'0.05em' }}>160+ Clients · 6 Countries</div>
            <div style={{ display:'flex', gap:'0.3rem', marginTop:'0.3rem' }}>
              {['IN','US','CA','AE','MY','AU'].map(c => (
                <span key={c} style={{ fontSize:'0.5rem', fontWeight:800, color:'#374151', background:'rgba(255,255,255,0.05)', padding:'0.1rem 0.3rem', borderRadius:'0.25rem', letterSpacing:'0.04em' }}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Nav */}
        <div style={{ padding:'clamp(1.5rem,2vw,1.5rem) clamp(1.5rem,3vw,3rem)', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'2rem', borderRight:'1px solid rgba(255,255,255,0.05)' }}>
          {NAV_COLS.map(col => (
            <div key={col.label}>
              <div style={{ fontSize:'0.58rem', fontWeight:900, textTransform:'uppercase', letterSpacing:'0.1em', color:'#374151', marginBottom:'1.1rem' }}>{col.label}</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.8rem' }}>
                {col.links.map(({ text, href }) => <Link key={text} to={href} className="ftr-link">{text}</Link>)}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div style={{ padding:'clamp(1.5rem,2vw,1.5rem) clamp(1rem,2vw,1.75rem)', display:'flex', flexDirection:'column', gap:'0.5rem' }}>
          <div style={{ fontSize:'0.57rem', fontWeight:900, textTransform:'uppercase', letterSpacing:'0.1em', color:'#374151', marginBottom:'0.4rem' }}>Get In Touch</div>
          <a href={WA_IN} target="_blank" rel="noreferrer" className="cc" style={{ background:'rgba(34,197,94,0.07)', border:'1px solid rgba(34,197,94,0.18)' }}>
            <div style={{ width:28, height:28, borderRadius:'0.45rem', background:'rgba(34,197,94,0.18)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <MessageCircle size={14} color="#22C55E"/>
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:'0.73rem', fontWeight:700, color:'#E2E8F0' }}>WhatsApp India</div>
              <div style={{ fontSize:'0.58rem', color:'#22C55E', fontWeight:600 }}>+91 799 700 1700</div>
            </div>
            <ArrowRight size={11} color="#22C55E" style={{ flexShrink:0, opacity:0.6 }}/>
          </a>
          <a href={WA_US} target="_blank" rel="noreferrer" className="cc" style={{ background:'rgba(56,189,248,0.06)', border:'1px solid rgba(56,189,248,0.15)' }}>
            <div style={{ width:28, height:28, borderRadius:'0.45rem', background:'rgba(56,189,248,0.15)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <Phone size={14} color="#38BDF8"/>
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:'0.73rem', fontWeight:700, color:'#E2E8F0' }}>WhatsApp USA</div>
              <div style={{ fontSize:'0.58rem', color:'#38BDF8', fontWeight:600 }}>+1 628 628 4743</div>
            </div>
            <ArrowRight size={11} color="#38BDF8" style={{ flexShrink:0, opacity:0.6 }}/>
          </a>
          <a href="mailto:hello@creativals.com" className="cc" style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ width:28, height:28, borderRadius:'0.45rem', background:'rgba(124,58,237,0.14)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <Mail size={14} color="#A78BFA"/>
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:'0.73rem', fontWeight:700, color:'#E2E8F0' }}>Email Us</div>
              <div style={{ fontSize:'0.58rem', color:'#64748B' }}>hello@creativals.com</div>
            </div>
            <ArrowRight size={11} color="#A78BFA" style={{ flexShrink:0, opacity:0.6 }}/>
          </a>
          <a href={CAL} target="_blank" rel="noreferrer" className="cc" style={{ background:'rgba(124,58,237,0.07)', border:'1px solid rgba(124,58,237,0.18)', marginTop:'0.15rem' }}>
            <div style={{ width:28, height:28, borderRadius:'0.45rem', background:'rgba(124,58,237,0.18)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
              <Calendar size={14} color="#A78BFA"/>
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ fontSize:'0.73rem', fontWeight:700, color:'#E2E8F0' }}>Book a Call</div>
              <div style={{ fontSize:'0.58rem', color:'#A78BFA' }}>30-min free session</div>
            </div>
            <ArrowRight size={11} color="#A78BFA" style={{ flexShrink:0, opacity:0.6 }}/>
          </a>
        </div>
      </div>

      {/* ── ZONE 4: FOOTER BAR ───────────────────────── */}
      <div style={{ position:'relative', zIndex:1, padding:'1rem clamp(1.5rem,6vw,6rem)', display:'flex', alignItems:'center', justifyContent:'center', gap:'1.5rem', flexWrap:'wrap' }}>
        <div style={{ display:'flex', gap:'1.25rem', alignItems:'center', flexWrap:'wrap' }}>
          <span style={{ fontSize:'0.7rem', color:'#1E293B', fontWeight:500 }}>© {new Date().getFullYear()} Creativals</span>
          {[['Privacy', '#'], ['Terms', '#'], ['Support', '/contact']].map(([l, h]) =>
            h.startsWith('/') ? <Link key={l} to={h} className="ftr-link" style={{ fontSize:'0.7rem' }}>{l}</Link>
            : <a key={l} href={h} className="ftr-link" style={{ fontSize:'0.7rem' }}>{l}</a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
