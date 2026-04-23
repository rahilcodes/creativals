import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, MessageCircle, Search, Target, Hammer, Rocket, TrendingUp, X, CheckCircle, Zap } from 'lucide-react';

const WA = 'https://wa.me/917997001700';
const fin = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const STEPS = [
  {
    n: '01', label: 'Diagnose', Icon: Search, color: '#7C3AED', glow: 'rgba(124,58,237,0.5)',
    headline: 'We find the leak before we add more water.',
    desc: 'Most businesses don\'t need more traffic. They need to stop bleeding. Before we do anything, we do a full audit of your business — website, ads, brand, competitors, and conversion chain.',
    timeline: 'Day 1',
    bullets: ['Business model deep-dive', 'Website & funnel audit', 'Current ad performance review', 'Competitor intelligence scan', 'Growth bottleneck identification'],
  },
  {
    n: '02', label: 'Position', Icon: Target, color: '#38BDF8', glow: 'rgba(56,189,248,0.5)',
    headline: 'Clarity is a competitive advantage.',
    desc: 'We define exactly who you\'re talking to, what makes you different, and why someone should choose you over anyone else. This positioning layer is what most agencies completely skip.',
    timeline: 'Week 1',
    bullets: ['Ideal customer definition', 'Unique value proposition', 'Offer refinement & packaging', 'Messaging hierarchy', 'Execution roadmap build'],
  },
  {
    n: '03', label: 'Build', Icon: Hammer, color: '#F97316', glow: 'rgba(249,115,22,0.5)',
    headline: 'Infrastructure before campaigns.',
    desc: 'We build the assets, systems, and infrastructure that campaigns actually need to convert — landing pages, automations, CRM flows, creative suites, and tracking setup. Most agencies skip this.',
    timeline: 'Weeks 1–3',
    bullets: ['Landing pages & funnels', 'Ad creative production', 'CRM & automation setup', 'Tracking & pixel implementation', 'Offer packaging & pricing pages'],
  },
  {
    n: '04', label: 'Launch', Icon: Rocket, color: '#22C55E', glow: 'rgba(34,197,94,0.5)',
    headline: 'Calculated ignition. Not random posting.',
    desc: 'Every launch is structured around clear objectives, measurable benchmarks, and test frameworks. We don\'t guess — we run controlled experiments from day one and read the data daily.',
    timeline: 'Month 1',
    bullets: ['Campaign launch across channels', 'Creative A/B testing', 'Funnel entry optimization', 'Lead quality monitoring', 'Daily performance tracking'],
  },
  {
    n: '05', label: 'Optimize', Icon: TrendingUp, color: '#A855F7', glow: 'rgba(168,85,247,0.5)',
    headline: 'We never stop improving.',
    desc: 'The real work starts after launch. Weekly optimization, monthly reviews, quarterly strategy resets. We compound your results over time — turning good campaigns into growth machines.',
    timeline: 'Ongoing',
    bullets: ['Weekly creative refresh', 'CPL & ROAS improvement', 'Funnel conversion increase', 'Expansion into new channels', 'Quarterly strategic reset'],
  },
];

const WONT_DO = [
  'Vanity metrics with no business value',
  '"1000 leads guaranteed" promises',
  'Random posting without a documented strategy',
  'Overcharging for cookie-cutter deliverables',
  'Poor response times and delayed execution',
  'Monthly PDF reports instead of actual results',
  'Trend-chasing with zero ROI accountability',
];

const TOOLS = [
  { cat: 'Marketing', items: ['Meta Ads Manager', 'Google Ads', 'Google Analytics 4', 'Search Console'] },
  { cat: 'Creative', items: ['Figma', 'Adobe Suite', 'Canva Pro', 'CapCut Pro'] },
  { cat: 'Operations', items: ['Zoho Ecosystem', 'Google Workspace', 'WhatsApp Business API'] },
  { cat: 'Web & Dev', items: ['WordPress', 'Elementor Pro', 'React / Next.js', 'Vite'] },
];

const TIMELINE = [
  { period: '7–14 days', milestone: 'Quick wins visible', desc: 'Early data signals, first leads or traffic uptick.', color: '#22C55E' },
  { period: '30 days',   milestone: 'Measurable momentum', desc: 'Campaigns stabilized, funnel optimized, lead quality improving.', color: '#38BDF8' },
  { period: '60–90 days', milestone: 'Strong growth patterns', desc: 'Consistent lead volume, ROAS improving, audience compounding.', color: '#7C3AED' },
  { period: '3–6 months', milestone: 'Market leadership', desc: 'Brand authority building, category dominance, scaling budget.', color: '#A855F7' },
];

const ApproachPage = () => {
  const [active, setActive] = useState(0);

  useSEO({
    title: 'Growth Marketing Strategy & Execution Hyderabad | Creativals',
    description: 'Discover the Creativals Growth Engine™. Our 5-step digital marketing framework ensures predictable lead generation and revenue growth for Hyderabad businesses.',
    keywords: 'marketing strategy hyderabad, growth marketing framework, lead generation process, performance marketing hyderabad',
  });

  return (
    <div className="dark-page" style={{ background: '#050812', color: 'white', paddingTop: 80, minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{ padding: '6rem 2rem 5rem', textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
        <motion.div {...fin}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 99, fontSize: '0.8rem', color: '#A78BFA', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            <Zap size={12} /> Proprietary System
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem,6vw,5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
            The Creativals<br />
            <span style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7,#38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Growth Engine™</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.75, maxWidth: 600, margin: '0 auto 1.5rem' }}>
            A 5-step framework built to turn business chaos into predictable, compounding growth. Not a checklist — a system.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>
            Most agencies ask <em style={{ color: '#94A3B8', margin: '0 0.3rem' }}>"What service do you want?"</em> — We ask →
            <span style={{ color: '#A855F7', fontWeight: 800 }}>"Where is your business leaking growth?"</span>
          </div>
        </motion.div>
      </section>

      {/* ── 5 STEP INTERACTIVE ── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem 6rem' }}>
        {/* Tab bar */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {STEPS.map((s, i) => (
            <button key={s.n} onClick={() => setActive(i)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem', borderRadius: 12, border: `1px solid ${active === i ? s.color : 'rgba(255,255,255,0.08)'}`, background: active === i ? `${s.color}15` : 'rgba(255,255,255,0.02)', color: active === i ? s.color : '#64748B', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s', boxShadow: active === i ? `0 0 20px -6px ${s.glow}` : 'none' }}>
              <span style={{ fontWeight: 900, fontSize: '0.75rem', opacity: 0.7 }}>{s.n}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Active step detail */}
        <AnimatePresence mode="wait">
          {STEPS.map((s, i) => active === i && (
            <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${s.color}18`, border: `1px solid ${s.color}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 30px -8px ${s.glow}` }}>
                    <s.Icon size={22} color={s.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: s.color, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Step {s.n} · {s.timeline}</div>
                    <div style={{ fontWeight: 900, fontSize: '1.1rem', color: '#F1F5F9' }}>{s.label}</div>
                  </div>
                </div>
                <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem', lineHeight: 1.2 }}>{s.headline}</h2>
                <p style={{ color: '#94A3B8', lineHeight: 1.8, fontSize: '1rem' }}>{s.desc}</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, padding: '2rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>What happens during {s.label}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {s.bullets.map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle size={16} color={s.color} style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* ── RESULTS TIMELINE ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '6rem 2rem', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <motion.div {...fin} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Typical Timeline</div>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 0.75rem' }}>When do you see results?</h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Depends on your offer, budget, and market — but here's what typically happens:</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {TIMELINE.map((t, i) => (
              <motion.div key={t.period} {...fin} transition={{ delay: i * 0.1 }}
                style={{ padding: '2rem 1.5rem', background: 'rgba(255,255,255,0.02)', border: `1px solid ${t.color}25`, borderRadius: 20, borderTop: `3px solid ${t.color}` }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: t.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{t.period}</div>
                <div style={{ fontWeight: 900, fontSize: '1rem', color: '#F1F5F9', marginBottom: '0.5rem', lineHeight: 1.3 }}>{t.milestone}</div>
                <div style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.5 }}>{t.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE REFUSE ── */}
      <section style={{ padding: '6rem 2rem', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div {...fin}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Our Hard Nos</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem', lineHeight: 1.2 }}>
              What we deliberately refuse to do.
            </h2>
            <p style={{ color: '#64748B', lineHeight: 1.7 }}>Most agencies do this. We don't. These boundaries are what keep our quality — and your results — consistent.</p>
          </motion.div>
          <motion.div {...fin} transition={{ delay: 0.1 }} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {WONT_DO.map(w => (
              <div key={w} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)', borderRadius: 12 }}>
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <X size={11} color="#EF4444" />
                </div>
                <span style={{ fontSize: '0.88rem', color: '#CBD5E1' }}>{w}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '6rem 2rem', background: 'rgba(255,255,255,0.01)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <motion.div {...fin} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Our Stack</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 0.5rem' }}>Professional-grade tools. Measurable outcomes.</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {TOOLS.map((group, i) => (
              <motion.div key={group.cat} {...fin} transition={{ delay: i * 0.08 }}
                style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 18 }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>{group.cat}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {group.items.map(item => (
                    <div key={item} style={{ fontSize: '0.88rem', color: '#94A3B8', fontWeight: 500 }}>· {item}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 2rem 7rem', textAlign: 'center' }}>
        <motion.div {...fin} style={{ maxWidth: 700, margin: '0 auto', padding: '4rem 2rem', background: 'linear-gradient(180deg,rgba(124,58,237,0.1),transparent)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 28 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem' }}>Ready to run the<br />Growth Engine™ for your business?</h2>
          <p style={{ color: '#64748B', marginBottom: '2.5rem', fontSize: '1rem' }}>Start with a free audit. We'll tell you exactly where your biggest growth opportunity is.</p>
          <motion.a href={`${WA}?text=Hi! I want to run the Creativals Growth Engine for my business.`} target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(135deg,#7C3AED,#A855F7)', color: 'white', borderRadius: 14, fontWeight: 900, fontSize: '1.05rem', textDecoration: 'none', boxShadow: '0 0 50px -12px rgba(124,58,237,0.6)' }}>
            <MessageCircle size={20} /> Start My Free Audit <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </section>

    </div>
  );
};

export default ApproachPage;
