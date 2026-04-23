import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, MessageCircle, Zap, Shield, TrendingUp, Eye, Clock, Heart, CheckCircle, X } from 'lucide-react';

const WA = 'https://wa.me/917997001700';
const TEAM = [
  {
    name: 'Mohammed Rahil Azeez',
    role: 'Founder & CEO',
    handle: '@rahil',
    owns: ['Clients', 'Finance', 'Growth', 'Strategy', 'Partnerships'],
    color: '#7C3AED',
    glow: 'rgba(124,58,237,0.4)',
    avatar: '/rahil.png',
    quote: '"Execution is the only strategy that matters."',
  },
  {
    name: 'Raiyan Azeez',
    role: 'Head of Tech & Systems',
    handle: '@raiyan',
    owns: ['Development', 'Automation', 'Systems', 'AI Ops'],
    color: '#38BDF8',
    glow: 'rgba(56,189,248,0.4)',
    avatar: '/raiyan.png',
    quote: '"If it can be automated, it should be."',
  },
  {
    name: 'Syed Ahmed',
    role: 'Head of Marketing & Growth',
    handle: '@ahmed',
    owns: ['SEO', 'Paid Ads', 'Analytics', 'Growth Execution'],
    color: '#22C55E',
    glow: 'rgba(34,197,94,0.4)',
    avatar: '/ahmed.png',
    quote: '"Every rupee of ad spend is a question. We find the answer."',
  },
  {
    name: 'Farhan Azeez',
    role: 'Creative Director',
    handle: '@farhan',
    owns: ['Branding', 'Design', 'Video', 'Visual Identity'],
    color: '#EC4899',
    glow: 'rgba(236,72,153,0.4)',
    avatar: '/farhan.png',
    quote: '"Design is not decoration. It\'s direction."',
  },
];

const VALUES = [
  { icon: Zap,       title: 'Execution Over Excuses',  desc: 'We get things done, properly and on time. Always.', color: '#7C3AED' },
  { icon: Eye,       title: 'Clarity Over Complexity', desc: 'Simple systems beat complicated noise. Every time.',  color: '#38BDF8' },
  { icon: TrendingUp,title: 'Results Over Vanity',     desc: 'Revenue. Leads. Bookings. Growth. Not impressions.', color: '#22C55E' },
  { icon: Clock,     title: 'Long-Term Thinking',      desc: 'We build sustainable systems, not short-term hacks.', color: '#F59E0B' },
  { icon: Heart,     title: 'Ownership Mindset',       desc: 'Every team member thinks like a founder, not an employee.', color: '#EC4899' },
  { icon: Shield,    title: 'Trust by Default',        desc: 'Honest communication even when it\'s uncomfortable.',  color: '#A855F7' },
];

const STATS = [
  { v: '2019',   l: 'Founded' },
  { v: '160+',   l: 'Clients Scaled' },
  { v: '7',      l: 'Countries' },
  { v: '₹1B+',   l: 'Revenue Generated' },
  { v: '92%',    l: 'Retention Rate' },
  { v: '6+',     l: 'Years Running' },
];

const AGENCY_SINS = [
  'Vanity metrics that don\'t pay your bills',
  'Fake "1000 leads guaranteed" promises',
  'Random posting without a strategy',
  'Overcharging for cookie-cutter work',
  'Zero communication after payment',
  'Monthly reports instead of monthly results',
];

const fin = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const AboutPage = () => {
  useSEO({
    title: 'Top Digital Marketing Company in Hyderabad | About Creativals',
    description: 'Meet the team behind Creativals. We are a Hyderabad-based execution powerhouse that has scaled 160+ brands globally. We build growth engines, not just campaigns.',
    keywords: 'about creativals, digital marketing agency hyderabad, best digital marketing company hyderabad, founder rahil, growth agency india',
  });

  return (
    <div className="dark-page" style={{ background: '#050812', color: 'white', paddingTop: 80, minHeight: '100vh' }}>
      <style>{`
        .about-origin-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; max-width: 1100px; margin: 0 auto; padding: 6rem 2rem; }
        .about-mission-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; max-width: 1100px; margin: 0 auto; }
        .rahil-profile-col { width: 220px; flex-shrink: 0; display: flex; flex-direction: column; }
        .rahil-avatar { width: 140px; height: 140px; border-radius: 24px; overflow: hidden; margin-bottom: 1.5rem; }
        .team-avatar { width: 100px; height: 100px; border-radius: 20px; overflow: hidden; margin-bottom: 1.5rem; }
        @media (max-width: 900px) {
          .about-origin-grid { grid-template-columns: 1fr; gap: 3rem; padding: 4rem 2rem; }
          .about-mission-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .rahil-profile-col { width: 100%; }
          .rahil-avatar { width: 100%; height: auto; aspect-ratio: 1/1; max-width: 100%; }
          .team-avatar { width: 100%; height: auto; aspect-ratio: 1/1; max-width: 100%; border-radius: 24px; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
        <motion.div {...fin}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.3)', borderRadius: 99, fontSize: '0.8rem', color: '#A78BFA', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#A78BFA', display: 'inline-block' }} />
            Est. 2019 · Hyderabad, India
          </div>
          <h1 style={{ fontSize: 'clamp(2.8rem,6vw,5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
            We don't run campaigns.<br />
            <span style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>We build growth engines.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#94A3B8', lineHeight: 1.75, maxWidth: 640, margin: '0 auto 2.5rem' }}>
            Creativals was born from one frustration — watching businesses bleed money on agencies that measured success in posts and impressions, not revenue. We exist to change that.
          </p>
          <motion.a href={`${WA}?text=Hi! I want to know more about Creativals.`} target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2.25rem', background: 'linear-gradient(135deg,#7C3AED,#A855F7)', color: 'white', borderRadius: 14, fontWeight: 800, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 0 40px -10px rgba(124,58,237,0.7)' }}>
            <MessageCircle size={18} /> Talk to the Team <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '2.5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem' }}>
          {STATS.map(({ v, l }) => (
            <motion.div key={l} {...fin} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(2rem,4vw,2.75rem)', fontWeight: 900, letterSpacing: '-0.04em', background: 'linear-gradient(135deg,#fff,#94A3B8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{v}</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.09em', marginTop: '0.25rem' }}>{l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ORIGIN STORY ── */}
      <section className="about-origin-grid">
        <motion.div {...fin}>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>The Origin Story</div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Built from frustration.<br />Driven by results.
          </h2>
          <p style={{ color: '#94A3B8', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.25rem' }}>
            Rahil founded Creativals in 2019 with a clear vision — not to run another agency, but to build a company that creates <em>measurable business growth</em> through systems, execution, and modern technology.
          </p>
          <p style={{ color: '#94A3B8', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.25rem' }}>
            The turning point was watching business after business waste money on agencies obsessed with vanity metrics, slow execution, and zero accountability. They got reports. They needed results.
          </p>
          <p style={{ color: '#94A3B8', lineHeight: 1.8, fontSize: '1rem' }}>
            Creativals started lean — websites, branding, and marketing — built on referrals and reputation. Over six years, it evolved into a full-scale execution partner for businesses across India and beyond.
          </p>
        </motion.div>

        {/* Agency sins card */}
        <motion.div {...fin} transition={{ delay: 0.15 }} style={{ background: 'linear-gradient(145deg,rgba(239,68,68,0.05),rgba(239,68,68,0.02))', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 24, padding: '2.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.25rem' }}>What we were built to fix</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {AGENCY_SINS.map(s => (
              <div key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <X size={10} color="#EF4444" />
                </div>
                <span style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.5 }}>{s}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', padding: '1rem 1.25rem', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12 }}>
            <div style={{ fontSize: '0.8rem', color: '#4ADE80', fontWeight: 700 }}>✓ Creativals is the antidote to all of the above.</div>
          </div>
        </motion.div>
      </section>

      {/* ── CORE VALUES ── */}
      <section style={{ padding: '4rem 2rem 6rem', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <motion.div {...fin} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>How We Operate</div>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 1rem' }}>The 6 Laws of Creativals</h2>
            <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: 500, margin: '0 auto' }}>These aren't values on a wall. They're the operating principles every decision is made against.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {VALUES.map((v, i) => (
              <motion.div key={v.title} {...fin} transition={{ delay: i * 0.07 }}
                style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${v.color}15`, border: `1px solid ${v.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <v.icon size={20} color={v.color} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.4rem', color: '#F1F5F9' }}>{v.title}</div>
                  <div style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.6 }}>{v.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
        <motion.div {...fin} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>The People</div>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 1rem' }}>Small team. Massive output.</h2>
          <p style={{ color: '#64748B', fontSize: '1rem', maxWidth: 500, margin: '0 auto' }}>
            We're deliberately lean. Fewer people, deeper ownership, faster execution.
          </p>
        </motion.div>

        {/* Big Card for Rahil */}
        {(() => {
          const rahil = TEAM[0];
          return (
            <motion.div {...fin}
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 28, overflow: 'hidden', position: 'relative', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 4, background: `linear-gradient(90deg,${rahil.color},transparent)` }} />
              <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem)', display: 'flex', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                
                {/* Left Profile Section */}
                <div className="rahil-profile-col">
                  <div className="rahil-avatar" style={{ border: `2px solid ${rahil.color}40`, boxShadow: `0 0 32px -8px ${rahil.glow}` }}>
                    <img src={rahil.avatar} alt={rahil.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: rahil.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{rahil.role}</div>
                  <div style={{ fontWeight: 900, fontSize: '1.8rem', color: '#F1F5F9', marginBottom: '1.25rem', lineHeight: 1.1 }}>{rahil.name}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {rahil.owns.map(o => (
                      <span key={o} style={{ fontSize: '0.72rem', fontWeight: 700, padding: '0.35rem 0.8rem', background: `${rahil.color}15`, border: `1px solid ${rahil.color}30`, borderRadius: 99, color: rahil.color }}>
                        {o}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Message Section */}
                <div style={{ flex: 1, minWidth: 300, position: 'relative' }}>
                  <div style={{ position: 'absolute', top: -30, left: -20, fontSize: '7rem', color: 'rgba(124,58,237,0.08)', fontWeight: 900, lineHeight: 1, pointerEvents: 'none', fontFamily: 'serif' }}>"</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '1rem', color: '#94A3B8', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>
                    <p style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800, color: '#F1F5F9', letterSpacing: '-0.02em', lineHeight: 1.4 }}>
                      Most agencies are built on buzzwords. We built ours on blood.
                    </p>
                    <p style={{ margin: 0 }}>
                      When I founded Creativals, I looked at an industry full of excuses and decided to build an execution machine that leaves no room for failure. But you don't build an empire with strangers who clock out at 5 PM. You need absolute trust, relentless execution, and a level of loyalty money simply cannot buy.
                    </p>
                    <p style={{ margin: 0 }}>
                      That's why I didn't hire a corporate board. I built this company with my three brothers: <strong style={{ color: '#E2E8F0', fontWeight: 700 }}>Raiyan, Ahmed, and Farhan.</strong>
                    </p>
                    <p style={{ margin: 0 }}>
                      We are not just colleagues. We are a single, unstoppable unit. We don't have office politics or departments that point fingers at each other; we have a shared, ruthless obsession with winning. The speed and synchronicity of four brothers fighting for the same vision cannot be matched by any traditional agency.
                    </p>
                    <p style={{ margin: 0 }}>
                      When you partner with us, you aren't getting handed off to a junior account manager. You are bringing four brothers into your war room who treat your revenue like our own bank account. Every system we build, every ad we scale, and every brand we transform carries our family name.
                    </p>
                    <p style={{ margin: 0, fontWeight: 800, color: rahil.color, fontSize: '1.15rem', marginTop: '0.5rem' }}>
                      Other agencies want your retainer. We want your total market dominance.
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })()}

        {/* 3 Cards for the rest */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {TEAM.slice(1).map((member, i) => (
            <motion.div key={member.name} {...fin} transition={{ delay: i * 0.1 }}
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 24, overflow: 'hidden', position: 'relative' }}>
              <div style={{ height: 4, background: `linear-gradient(90deg,${member.color},transparent)` }} />
              <div style={{ padding: '2rem' }}>
                <div className="team-avatar" style={{ border: `2px solid ${member.color}40`, boxShadow: `0 0 24px -6px ${member.glow}` }}>
                  <img src={member.avatar} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: member.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>{member.role}</div>
                <div style={{ fontWeight: 900, fontSize: '1.15rem', color: '#F1F5F9', marginBottom: '1rem', lineHeight: 1.2 }}>{member.name}</div>
                <p style={{ fontSize: '0.85rem', color: '#94A3B8', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '1.5rem' }}>{member.quote}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {member.owns.map(o => (
                    <span key={o} style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.3rem 0.7rem', background: `${member.color}12`, border: `1px solid ${member.color}25`, borderRadius: 99, color: member.color }}>
                      {o}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section style={{ padding: '4rem 2rem 6rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="about-mission-grid">
          <motion.div {...fin} style={{ padding: '3rem', background: 'rgba(124,58,237,0.06)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 24 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Our Mission</div>
            <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#E2E8F0', lineHeight: 1.65 }}>
              "To help Indian and global businesses grow through reliable execution systems, smart marketing, strong branding, and technology-enabled operations."
            </p>
            <div style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#64748B', fontStyle: 'italic' }}>Businesses deserve partners who care about results, not reports.</div>
          </motion.div>

          <motion.div {...fin} transition={{ delay: 0.1 }} style={{ padding: '3rem', background: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: 24 }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#22C55E', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>The 5-Year Vision</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Leading Execution Partner for agencies & businesses',
                'Highly systemized company with recurring revenue',
                'Trusted growth brand in India & selected global markets',
                'AI-powered business tools & products',
                'Talent-building ecosystem through Creativals Academy',
              ].map(v => (
                <div key={v} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle size={15} color="#22C55E" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.9rem', color: '#CBD5E1', lineHeight: 1.5 }}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 2rem 7rem', textAlign: 'center' }}>
        <motion.div {...fin} style={{ maxWidth: 700, margin: '0 auto', padding: '4rem 2rem', background: 'linear-gradient(180deg,rgba(124,58,237,0.1),transparent)', border: '1px solid rgba(124,58,237,0.2)', borderRadius: 28 }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem' }}>Ready to stop guessing<br />and start growing?</h2>
          <p style={{ color: '#64748B', fontSize: '1rem', marginBottom: '2.5rem' }}>Talk to the team. No pitch. Just a real conversation about your business.</p>
          <motion.a href={`${WA}?text=Hi! I read your About page and want to explore working together.`} target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1.1rem 2.5rem', background: 'linear-gradient(135deg,#22C55E,#16A34A)', color: '#000', borderRadius: 14, fontWeight: 900, fontSize: '1.05rem', textDecoration: 'none', boxShadow: '0 0 50px -12px rgba(34,197,94,0.6)' }}>
            <MessageCircle size={20} /> Chat with Us on WhatsApp <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutPage;
