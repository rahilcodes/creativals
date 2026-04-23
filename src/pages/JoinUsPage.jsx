import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, MessageCircle, Code, PenTool, BarChart2, Video, Globe, Users, Cpu, Briefcase, Zap, CheckCircle, X, TrendingUp, Star } from 'lucide-react';

const WA = 'https://wa.me/917997001700';
const fin = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const ROLES = [
  { title: 'Media Buyer', team: 'Marketing', mode: 'Remote / Hybrid', type: 'Full-time', icon: BarChart2, color: '#22C55E', desc: 'Run paid campaigns on Meta & Google. Own ROAS. Think in data.' },
  { title: 'Graphic Designer', team: 'Creative', mode: 'Remote', type: 'Full-time', icon: PenTool, color: '#EC4899', desc: 'Design that converts. Ads, social assets, landing pages, brand systems.' },
  { title: 'Video Editor', team: 'Creative', mode: 'Remote', type: 'Full-time / Freelance', icon: Video, color: '#F97316', desc: 'Short-form content that stops scrolls. Reels, ads, brand videos.' },
  { title: 'Web Developer', team: 'Tech', mode: 'Remote / Hybrid', type: 'Full-time', icon: Code, color: '#38BDF8', desc: 'WordPress, React, or both. Landing pages to full platforms.' },
  { title: 'SEO Executive', team: 'Marketing', mode: 'Remote', type: 'Full-time', icon: Globe, color: '#7C3AED', desc: 'Technical SEO, content strategy, local ranking. No vanity rankings.' },
  { title: 'Client Success Manager', team: 'Operations', mode: 'Hybrid', type: 'Full-time', icon: Users, color: '#F59E0B', desc: 'Own client relationships. Translate strategy into satisfaction.' },
  { title: 'Automation / AI Ops', team: 'Tech', mode: 'Remote', type: 'Full-time', icon: Cpu, color: '#A855F7', desc: 'Build intelligent workflows. Zapier, Make, n8n, AI tools.' },
];

const CULTURE = [
  { title: 'Real Exposure', desc: 'You\'ll work directly on campaigns for real businesses across hotels, education, F&B, real estate, and more — not internal mock projects.', icon: Briefcase, color: '#7C3AED' },
  { title: 'Direct Founder Access', desc: 'No corporate ladder. You learn directly from the people who built the systems. Fast feedback, direct mentorship.', icon: Zap, color: '#22C55E' },
  { title: 'Growth-Based Progression', desc: 'We promote on output, not tenure. If you deliver results, you grow. It\'s that simple.', icon: TrendingUp, color: '#38BDF8' },
  { title: 'Diverse Projects', desc: 'No two months are the same. Different industries, different challenges, different growth goals.', icon: Star, color: '#F59E0B' },
  { title: 'AI-Forward Culture', desc: 'We build with AI tools, not against them. You\'ll learn how to be 10x more effective using modern tooling.', icon: Cpu, color: '#EC4899' },
  { title: 'Ownership Culture', desc: 'You own your work end-to-end. No hand-holding, no micromanagement. Freedom with full accountability.', icon: CheckCircle, color: '#A855F7' },
];

const TRAITS = [
  'Ownership mindset — you treat it like your own',
  'Fast learner — you adapt faster than you hesitate',
  'Reliable executor — deadlines are sacred',
  'Problem solver — you bring solutions, not problems',
  'Honest communicator — transparent, even when it\'s hard',
  'Hungry to grow — you\'re never satisfied with average',
  'AI-comfortable — you use tools, not excuses',
];

const NOT_FOR_YOU = [
  'You need someone to tell you what to do every day',
  'You\'re looking for a 9–5 that stays at 5',
  'You prioritize job title over actual impact',
  'You think social media means posting pretty pictures',
];

const PARTNERS = [
  { type: 'Freelancers', desc: 'Specialist talent we engage per project. Designers, developers, editors.', color: '#7C3AED' },
  { type: 'White-Label Collaborators', desc: 'Agencies that want to extend capacity with our execution team.', color: '#38BDF8' },
  { type: 'Sales Partners', desc: 'Earn referral commissions by connecting us with businesses that need growth.', color: '#22C55E' },
  { type: 'Specialist Consultants', desc: 'Niche experts — legal, finance, specific industry knowledge — we bring in when needed.', color: '#F59E0B' },
];

const JoinUsPage = () => {
  const [activeRole, setActiveRole] = useState(null);

  useSEO({
    title: 'Digital Marketing Jobs in Hyderabad | Careers at Creativals',
    description: 'We are hiring top talent in Hyderabad. If you are obsessed with execution and growth, explore our open digital marketing, SEO, and developer roles.',
    keywords: 'digital marketing jobs hyderabad, seo jobs hyderabad, web developer jobs hyderabad, creativals careers',
  });

  return (
    <div className="dark-page" style={{ background: '#050812', color: 'white', paddingTop: 80, minHeight: '100vh' }}>

      {/* ── HERO ── */}
      <section style={{ padding: '6rem 2rem 5rem', textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
        <motion.div {...fin}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 99, fontSize: '0.8rem', color: '#4ADE80', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }} />
            We're Hiring
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem,6vw,5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
            Don't join an agency.<br />
            <span style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Join the movement.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.75, maxWidth: 600, margin: '0 auto 1rem' }}>
            We're building India's most execution-focused growth team. If you're the kind of person who moves fast, thinks clearly, and takes full ownership — we want you.
          </p>
          <div style={{ color: '#475569', fontSize: '0.85rem', marginBottom: '2.5rem' }}>Remote-first · India-based operations · Performance-led progression</div>
          <motion.a href={`${WA}?text=Hi! I want to explore joining the Creativals team.`} target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2.25rem', background: 'linear-gradient(135deg,#7C3AED,#A855F7)', color: 'white', borderRadius: 14, fontWeight: 800, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 0 40px -10px rgba(124,58,237,0.7)' }}>
            <MessageCircle size={18} /> Reach Out on WhatsApp <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div {...fin} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Open Positions</div>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 0.75rem' }}>Who we're looking for right now.</h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>Click any role to learn more, then reach out on WhatsApp.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {ROLES.map((role, i) => (
              <motion.div key={role.title} {...fin} transition={{ delay: i * 0.07 }}
                onClick={() => setActiveRole(activeRole === i ? null : i)}
                style={{ padding: '1.75rem', background: activeRole === i ? `${role.color}0d` : 'rgba(255,255,255,0.02)', border: `1px solid ${activeRole === i ? role.color + '40' : 'rgba(255,255,255,0.06)'}`, borderRadius: 20, cursor: 'pointer', transition: 'all 0.2s', boxShadow: activeRole === i ? `0 0 30px -8px ${role.color}40` : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${role.color}18`, border: `1px solid ${role.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <role.icon size={20} color={role.color} />
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', background: `${role.color}15`, border: `1px solid ${role.color}25`, borderRadius: 99, color: role.color }}>{role.type}</span>
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: role.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>{role.team}</div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#F1F5F9', marginBottom: '0.3rem' }}>{role.title}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '0.75rem' }}>{role.mode}</div>
                <AnimatePresence>
                  {activeRole === i && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                      <p style={{ color: '#94A3B8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{role.desc}</p>
                      <a href={`${WA}?text=Hi! I want to apply for the ${role.title} position at Creativals.`} target="_blank" rel="noreferrer"
                        onClick={e => e.stopPropagation()}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.25rem', background: role.color, color: role.color === '#F59E0B' ? '#000' : 'white', borderRadius: 10, fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>
                        <MessageCircle size={14} /> Apply via WhatsApp
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IS THIS YOU? ── */}
      <section style={{ padding: '6rem 2rem', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <motion.div {...fin}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#22C55E', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>This is you</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {TRAITS.map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle size={16} color="#22C55E" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.92rem', color: '#CBD5E1', lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...fin} transition={{ delay: 0.1 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>This is not you</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NOT_FOR_YOU.map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 1rem', background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)', borderRadius: 12 }}>
                  <X size={15} color="#EF4444" style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CULTURE ── */}
      <section style={{ padding: '6rem 2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div {...fin} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Life at Creativals</div>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 0.5rem' }}>Why people love working here.</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {CULTURE.map((c, i) => (
              <motion.div key={c.title} {...fin} transition={{ delay: i * 0.08 }}
                style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${c.color}15`, border: `1px solid ${c.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <c.icon size={20} color={c.color} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#F1F5F9', marginBottom: '0.4rem' }}>{c.title}</div>
                  <div style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.6 }}>{c.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section style={{ padding: '5rem 2rem 6rem', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <motion.div {...fin} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Not Looking for a Job?</div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 0.5rem' }}>Partner with us instead.</h2>
            <p style={{ color: '#64748B', fontSize: '0.95rem' }}>We collaborate with freelancers, white-label partners, sales partners, and specialist consultants.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {PARTNERS.map((p, i) => (
              <motion.div key={p.type} {...fin} transition={{ delay: i * 0.08 }}
                style={{ padding: '1.75rem', background: 'rgba(255,255,255,0.02)', border: `1px solid ${p.color}20`, borderRadius: 18, borderTop: `2px solid ${p.color}` }}>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#F1F5F9', marginBottom: '0.5rem' }}>{p.type}</div>
                <div style={{ fontSize: '0.82rem', color: '#64748B', lineHeight: 1.6 }}>{p.desc}</div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fin} style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href={`${WA}?text=Hi! I want to explore a partnership with Creativals.`} target="_blank" rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: '#94A3B8', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.2s' }}>
              <MessageCircle size={16} /> Discuss a Partnership <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default JoinUsPage;
