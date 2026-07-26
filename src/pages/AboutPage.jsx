import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const TEAM = [
  {
    name: 'Mohammed Rahil Azeez',
    role: 'Founder & CEO',
    handle: '@rahil',
    owns: ['Clients', 'Finance', 'Growth', 'Strategy', 'Partnerships'],
    avatar: '/rahil.png',
    quote: '"Execution is the only strategy that matters."',
  },
  {
    name: 'Raiyan Azeez',
    role: 'Head of Tech & Systems',
    handle: '@raiyan',
    owns: ['Development', 'Automation', 'Systems', 'AI Ops'],
    avatar: '/raiyan.png',
    quote: '"If it can be automated, it should be."',
  },
  {
    name: 'Syed Ahmed',
    role: 'Head of Marketing & Growth',
    handle: '@ahmed',
    owns: ['SEO', 'Paid Ads', 'Analytics', 'Growth Execution'],
    avatar: '/ahmed.png',
    quote: '"Every rupee of ad spend is a question. We find the answer."',
  },
  {
    name: 'Farhan Azeez',
    role: 'Creative Director',
    handle: '@farhan',
    owns: ['Branding', 'Design', 'Video', 'Visual Identity'],
    avatar: '/farhan.png',
    quote: '"Design is not decoration. It\'s direction."',
  },
];

const VALUES = [
  { n: '01', title: 'Execution Over Excuses', desc: 'We get things done, properly and on time. Always.' },
  { n: '02', title: 'Clarity Over Complexity', desc: 'Simple systems beat complicated noise. Every time.' },
  { n: '03', title: 'Results Over Vanity', desc: 'Revenue. Leads. Bookings. Growth. Not impressions.' },
  { n: '04', title: 'Long-Term Thinking', desc: 'We build sustainable systems, not short-term hacks.' },
  { n: '05', title: 'Ownership Mindset', desc: 'Every team member thinks like a founder, not an employee.' },
  { n: '06', title: 'Trust by Default', desc: 'Honest communication even when it\'s uncomfortable.' },
];

const STATS = [
  { v: '2019', l: 'Founded' },
  { v: '160+', l: 'Clients Scaled' },
  { v: '7', l: 'Countries' },
  { v: '500M+', l: 'Views Created' },
  { v: '92%', l: 'Retention Rate' },
  { v: '6+', l: 'Years Running' },
];

const AGENCY_SINS = [
  'Vanity metrics that don\'t pay your bills',
  'Fake "1000 leads guaranteed" promises',
  'Random posting without a strategy',
  'Overcharging for cookie-cutter work',
  'Zero communication after payment',
  'Monthly reports instead of monthly results',
];

const VISION = [
  'Leading Execution Partner for agencies & businesses',
  'Highly systemized company with recurring revenue',
  'Trusted growth brand in India & selected global markets',
  'AI-powered business tools & products',
  'Talent-building ecosystem through Creativals Academy',
];

const LETTER = [
  'When I founded Creativals, I looked at an industry full of excuses and decided to build an execution machine that leaves no room for failure. But you don\'t build an empire with strangers who clock out at 5 PM. You need absolute trust, relentless execution, and a level of loyalty money simply cannot buy.',
  'That\'s why I didn\'t hire a corporate board. I built this company with my three brothers: Raiyan, Ahmed, and Farhan.',
  'We are not just colleagues. We are a single, unstoppable unit. We don\'t have office politics or departments that point fingers at each other; we have a shared, ruthless obsession with winning. The speed and synchronicity of four brothers fighting for the same vision cannot be matched by any traditional agency.',
  'When you partner with us, you aren\'t getting handed off to a junior account manager. You are bringing four brothers into your war room who treat your revenue like our own bank account. Every system we build, every ad we scale, and every brand we transform carries our family name.',
];

const AboutPage = () => {
  useSEO({
    title: 'Top Digital Marketing Company in Hyderabad | About Creativals',
    description: 'Meet the team behind Creativals. We are a Hyderabad-based execution powerhouse that has scaled 160+ brands globally. We build growth engines, not just campaigns.',
    keywords: 'about creativals, digital marketing agency hyderabad, best digital marketing company hyderabad, founder rahil, growth agency india',
  });

  return (
    <div>
      {/* ── HERO — indigo ── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap" style={{ paddingTop: 96, paddingBottom: 90 }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 })}>
              <span className="cx-dot" />
              Inside Creativals · Est. 2019 · Hyderabad, India
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 30 }}>
              We don't run campaigns.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>We build growth engines.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 0 38px', maxWidth: 560, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,242,236,.85)', textWrap: 'pretty' }}>
              Creativals was born from one frustration — watching businesses bleed money on agencies that measured
              success in posts and impressions, not revenue. We exist to change that.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href={waLink('Hi! I want to know more about Creativals.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
                Talk to the Team →
              </a>
              <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .7 })}>NO PITCH · JUST A REAL CONVERSATION</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 01 STORY & MISSION — cream ── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="The origin story" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 28 }}>
              Built from frustration.<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Driven by results.</span>
            </h2>
          </Reveal>
          <div className="cx-grid2" style={{ alignItems: 'start', marginBottom: 56 }}>
            <Reveal delay={120}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <p className="cx-lead" style={{ fontSize: 19, fontWeight: 600, color: '#17151A' }}>
                  Rahil founded Creativals in 2019 with a clear vision — not to run another agency, but to build a
                  company that creates <em>measurable business growth</em> through systems, execution, and modern technology.
                </p>
                <p className="cx-lead">
                  The turning point was watching business after business waste money on agencies obsessed with vanity
                  metrics, slow execution, and zero accountability. They got reports. They needed results.
                </p>
                <p className="cx-lead">
                  Creativals started lean — websites, branding, and marketing — built on referrals and reputation. Over
                  six years, it evolved into a full-scale execution partner for businesses across India and beyond.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="cx-card tilt-r" style={{ boxSizing: 'border-box' }}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FF5F57', marginBottom: 22 })}>
                  What we were built to fix
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {AGENCY_SINS.map((s) => (
                    <div key={s} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, lineHeight: 1.5, color: 'rgba(23,21,26,.75)' }}>
                      <span style={mono({ color: '#FF5F57', fontWeight: 600, flex: 'none' })}>✗</span>
                      {s}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 26, paddingTop: 20, borderTop: '2px solid #17151A', fontWeight: 800, fontSize: 15 }}>
                  <span style={{ color: '#3DDC84' }}>✓</span> Creativals is the antidote to all of the above.
                </div>
              </div>
            </Reveal>
          </div>

          {/* mission + vision */}
          <div className="cx-grid2" style={{ alignItems: 'stretch' }}>
            <Reveal delay={80}>
              <div className="cx-card-indigo" style={{ height: '100%', boxSizing: 'border-box' }}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FFD84D', marginBottom: 18 })}>
                  Our mission
                </div>
                <p style={{ margin: 0, fontSize: 21, fontWeight: 700, lineHeight: 1.5, letterSpacing: '-0.01em' }}>
                  "To help Indian and global businesses grow through reliable execution systems, smart marketing,
                  strong branding, and technology-enabled operations."
                </p>
                <p style={{ margin: '20px 0 0', fontSize: 14.5, fontStyle: 'italic', color: 'rgba(244,242,236,.75)' }}>
                  Businesses deserve partners who care about results, not reports.
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="cx-card" style={{ height: '100%', boxSizing: 'border-box' }}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 18 })}>
                  The 5-year vision
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                  {VISION.map((v) => (
                    <div key={v} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, lineHeight: 1.55, color: 'rgba(23,21,26,.75)' }}>
                      <span style={{ color: '#3DDC84', fontWeight: 900, flex: 'none' }}>✓</span>
                      {v}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 02 THE BROTHERS — yellow band ── */}
      <section style={{ background: '#FFD84D', color: '#17151A', borderTop: '4px solid #17151A', borderBottom: '4px solid #17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="The people" yellow /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
              Small team.<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Massive output.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="cx-lead" style={{ maxWidth: 560, marginBottom: 54, color: 'rgba(23,21,26,.75)' }}>
              We're deliberately lean. Fewer people, deeper ownership, faster execution. Four brothers — Rahil, Raiyan,
              Ahmed, and Farhan — one shared obsession with winning.
            </p>
          </Reveal>

          {/* founder's note */}
          <Reveal delay={160}>
            <div className="cx-card" style={{ marginBottom: 28, boxSizing: 'border-box', padding: 'clamp(30px, 4vw, 48px)' }}>
              <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 20 })}>
                A note from the founder — {TEAM[0].handle}
              </div>
              <p style={{ margin: '0 0 22px', fontWeight: 900, fontSize: 'clamp(22px, 2.6vw, 30px)', lineHeight: 1.25, letterSpacing: '-0.02em', textTransform: 'uppercase', fontStretch: '115%' }}>
                Most agencies are built on buzzwords. We built ours on blood.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 860 }}>
                {LETTER.map((p) => (
                  <p key={p.slice(0, 24)} style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: 'rgba(23,21,26,.72)' }}>{p}</p>
                ))}
              </div>
              <p style={{ margin: '24px 0 0', fontWeight: 800, fontSize: 17, color: '#4F46E5' }}>
                Other agencies want your retainer. We want your total market dominance.
              </p>
            </div>
          </Reveal>

          {/* 4 founder cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 22 }}>
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 90}>
                <div className={`cx-card ${i % 2 ? 'tilt-r' : 'tilt-l'}`} style={{ height: '100%', boxSizing: 'border-box', padding: '30px 26px' }}>
                  <div style={{ width: 96, height: 96, borderRadius: 16, overflow: 'hidden', border: '2px solid #17151A', marginBottom: 20 }}>
                    <img src={m.avatar} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <div style={mono({ fontSize: 10.5, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 8 })}>
                    {m.role} · {m.handle}
                  </div>
                  <div style={{ fontWeight: 900, fontSize: 19, lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: 12 }}>{m.name}</div>
                  <p style={{ margin: '0 0 18px', fontSize: 13.5, fontStyle: 'italic', lineHeight: 1.6, color: 'rgba(23,21,26,.65)' }}>{m.quote}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {m.owns.map((o) => (
                      <span key={o} className="cx-tag cx-tag-indigo">{o}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 NUMBERS & LAWS — ink ── */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="03" label="Numbers & laws" dark /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
              Receipts first.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>Rules second.</span>
            </h2>
          </Reveal>

          {/* big stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '36px 28px', margin: '54px 0 72px' }}>
            {STATS.map(({ v, l }, i) => (
              <Reveal key={l} delay={i * 70}>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 'clamp(40px, 4.6vw, 64px)', fontStretch: '122%', lineHeight: 1, letterSpacing: '-0.02em', color: '#FFD84D' }}>{v}</div>
                  <div style={mono({ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', marginTop: 10, color: 'rgba(244,242,236,.6)' })}>{l}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* the 6 laws */}
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(244,242,236,.55)', marginBottom: 6 })}>
              How we operate — the 6 laws of Creativals
            </div>
          </Reveal>
          <div>
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i * 60} className="cx-sysrow" style={{ gridTemplateColumns: '90px 1fr 1.4fr' }}>
                <div style={{ fontWeight: 900, fontSize: 40, fontStretch: '120%', color: '#FFD84D' }}>{v.n}</div>
                <div style={{ fontWeight: 800, fontSize: 22, letterSpacing: '-0.01em' }}>{v.title}</div>
                <div className="cx-sysdesc" style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(244,242,236,.65)' }}>{v.desc}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA — indigo ── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 30 })}>
              <span className="cx-dot" />
              Talk to the team
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 28 }}>
              Ready to stop guessing<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>and start growing?</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 0 36px', maxWidth: 480, fontSize: 18, lineHeight: 1.55, color: 'rgba(244,242,236,.85)' }}>
              Talk to the team. No pitch. Just a real conversation about your business.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href={waLink('Hi! I read your About page and want to explore working together.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
                Chat with Us on WhatsApp →
              </a>
              <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .75 })}>REPLY IN 2 HRS · NO COMMITMENT</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
