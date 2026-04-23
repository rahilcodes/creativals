import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, MessageCircle, Mail, Phone, Clock, Zap, Globe, TrendingUp, Monitor, Share2, BarChart2, CheckCircle, Shield, Star } from 'lucide-react';

const WA = 'https://wa.me/917997001700';
const GOALS = [
  { icon: TrendingUp, label: 'Get More Leads',    color: '#22C55E', msg: 'Hi! I want to get more leads for my business.' },
  { icon: Monitor,    label: 'Build My Website',  color: '#7C3AED', msg: 'Hi! I want to build a premium website.' },
  { icon: BarChart2,  label: 'Run Paid Ads',      color: '#F97316', msg: 'Hi! I want to run Google/Meta ads for my business.' },
  { icon: Share2,     label: 'Social Media',      color: '#EC4899', msg: 'Hi! I want to grow my social media presence.' },
  { icon: Globe,      label: 'Scale Globally',    color: '#38BDF8', msg: 'Hi! I want to scale my business internationally.' },
  { icon: Zap,        label: 'Something Else',    color: '#F59E0B', msg: 'Hi! I want to discuss growing my business.' },
];

const PROOF = [
  { initials: 'SK', name: 'Suresh K.', biz: 'Hotel Sky Intl.', result: '₹2Cr revenue in 6 months', color: '#22C55E' },
  { initials: 'MR', name: 'Mohammed R.', biz: 'MRA Motors', result: '50M views, 500+ leads/mo', color: '#38BDF8' },
  { initials: 'PH', name: 'Pista House', biz: 'Restaurant Chain', result: '200% order growth', color: '#F97316' },
  { initials: 'AK', name: 'Aakash Inst.', biz: 'Education', result: '200+ new admissions', color: '#A855F7' },
  { initials: 'GL', name: 'Glampinn', biz: 'Luxury Stays', result: '₹50Cr revenue generated', color: '#EC4899' },
  { initials: 'GG', name: 'GMR Group', biz: 'Education Group', result: '3-Year Ongoing Partner', color: '#EAB308' },
];

const STEPS = [
  { n: '01', title: 'You message us', sub: 'WhatsApp or form — takes 60 seconds', color: '#7C3AED' },
  { n: '02', title: 'We review your business', sub: 'Website, ads, competitors — same day', color: '#A855F7' },
  { n: '03', title: 'You get a custom plan', sub: 'Free, specific, no strings attached', color: '#22C55E' },
];

const ContactPage = () => {
  const [goal, setGoal] = useState(null);
  const [form, setForm] = useState({ name: '', business: '', phone: '', msg: '' });
  const [isOnline, setIsOnline] = useState(false);
  const [spotsLeft] = useState(3);
  const [chatStep, setChatStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  useSEO({
    title: 'Contact the Best Marketing Agency in Hyderabad | Creativals',
    description: 'Ready to dominate your market? Contact Creativals, Hyderabad\'s premier digital marketing agency, for a free growth audit and strategy session.',
    keywords: 'contact creativals, marketing agency in hyderabad contact, hire digital marketer hyderabad',
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Creativals",
      "url": "https://creativals.com/contact",
      "telephone": "+917997001700",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      }
    }
  });

  useEffect(() => {
    const h = new Date().getHours();
    setIsOnline(h >= 10 && h < 19);
  }, []);

  useEffect(() => {
    if (goal) setForm(f => ({ ...f, msg: goal.msg }));
  }, [goal]);

  useEffect(() => {
    const t = setInterval(() => setChatStep(s => (s + 1) % 4), 1800);
    return () => clearInterval(t);
  }, []);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const txt = `${form.msg}%0AName: ${form.name}%0ABusiness: ${form.business}%0APhone: ${form.phone}`;
    window.open(`${WA}?text=${txt}`, '_blank');
  };

  const chatLines = [
    { side: 'them', text: 'Hi! I want more leads for my hotel.', delay: 0 },
    { side: 'us',   text: '👋 Got it! Can you share your website?', delay: 1 },
    { side: 'them', text: 'www.hotelsky.com', delay: 2 },
    { side: 'us',   text: '✅ Audit ready — sending in 20 mins!', delay: 3 },
  ];

  return (
    <div className="dark-page" style={{ background: '#050812', minHeight: '100vh', color: 'white', paddingTop: 80 }}>
      <style>{`
        .contact-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; max-width: 1200px; margin: 0 auto; padding: 5rem 2rem 3rem; }
        .contact-goal-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 3rem; }
        .contact-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
        @media(max-width: 900px) {
          .contact-hero-grid { grid-template-columns: 1fr; gap: 3rem; padding: 3rem 2rem; }
          .contact-form-grid { grid-template-columns: 1fr; gap: 3rem; }
          .contact-goal-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width: 540px) {
          .contact-goal-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── SCARCITY BANNER ── */}
      <div style={{ background: 'linear-gradient(90deg,#7C3AED,#A855F7,#EC4899)', padding: '0.6rem 1rem', textAlign: 'center', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em' }}>
        <motion.span animate={{ opacity: [1, 0.6, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
          ⚡ ONLY {spotsLeft} FREE AUDIT SLOTS LEFT THIS MONTH
        </motion.span>
        {' · '}Average response today: <span style={{ color: '#86EFAC' }}>{isOnline ? '12 minutes' : '10am IST tomorrow'}</span>
      </div>

      {/* ── HERO ── */}
      <section className="contact-hero-grid">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.3rem 0.9rem', background: isOnline ? 'rgba(34,197,94,0.12)' : 'rgba(100,116,139,0.12)', border: `1px solid ${isOnline ? 'rgba(34,197,94,0.3)' : 'rgba(100,116,139,0.3)'}`, borderRadius: 99, marginBottom: '1.5rem' }}>
            <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} style={{ width: 7, height: 7, borderRadius: '50%', background: isOnline ? '#22C55E' : '#64748B' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: isOnline ? '#86EFAC' : '#94A3B8' }}>
              {isOnline ? 'Pavan is online — avg. reply 12 mins' : 'Will respond at 10am IST tomorrow'}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem,4.5vw,4rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', margin: '0 0 1.25rem' }}>
            Let's build your<br />
            <span style={{ background: 'linear-gradient(135deg,#7C3AED,#A855F7,#EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>growth system.</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 2rem', maxWidth: 480 }}>
            Start with a free, no-obligation audit. We'll analyse your setup and hand you a specific roadmap — within the hour.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[{ v: '160+', l: 'Clients' }, { v: '7', l: 'Countries' }, { v: '₹1B+', l: 'Revenue' }].map(({ v, l }) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#A855F7' }}>{v}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Animated WhatsApp chat mockup */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          style={{ background: 'linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, overflow: 'hidden' }}>
          <div style={{ background: '#1B2B1F', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#22C55E,#16A34A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 900 }}>C</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Creativals</div>
              <div style={{ fontSize: '0.72rem', color: '#22C55E' }}>● Online</div>
            </div>
          </div>
          <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', minHeight: 200 }}>
            <AnimatePresence>
              {chatLines.slice(0, chatStep + 1).map((line, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', justifyContent: line.side === 'us' ? 'flex-end' : 'flex-start' }}>
                  <div style={{ maxWidth: '75%', padding: '0.6rem 0.9rem', borderRadius: line.side === 'us' ? '16px 16px 4px 16px' : '16px 16px 16px 4px', background: line.side === 'us' ? '#25D366' : 'rgba(255,255,255,0.08)', fontSize: '0.82rem', color: line.side === 'us' ? '#000' : '#E2E8F0', fontWeight: 500 }}>
                    {line.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {chatStep >= chatLines.length - 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', gap: '4px', padding: '0.5rem 0.9rem', background: 'rgba(255,255,255,0.05)', borderRadius: 12, width: 'fit-content' }}>
                {[0, 1, 2].map(i => (
                  <motion.div key={i} animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                    style={{ width: 6, height: 6, borderRadius: '50%', background: '#64748B' }} />
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* ── PRIMARY CTA ── */}
      <section style={{ padding: '0 2rem 4rem', textAlign: 'center' }}>
        <motion.a href={`${WA}?text=Hi! I want a free Growth Audit.`} target="_blank" rel="noreferrer"
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.9rem', padding: '1.2rem 2.75rem', background: 'linear-gradient(135deg,#22C55E,#16A34A)', color: '#000', fontWeight: 900, fontSize: '1.15rem', borderRadius: 16, textDecoration: 'none', boxShadow: '0 0 60px -10px rgba(34,197,94,0.6)', marginBottom: '1rem' }}>
          <MessageCircle size={22} />
          Chat on WhatsApp — It's Free
          <ArrowRight size={18} />
        </motion.a>
        <div style={{ color: '#64748B', fontSize: '0.82rem' }}>No commitment. No spam. Just a real audit from a real expert.</div>
      </section>

      {/* ── SOCIAL PROOF STRIP ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem 2rem', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {PROOF.map((p) => (
            <div key={p.name} style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.25rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: `${p.color}22`, border: `2px solid ${p.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 900, color: p.color, flexShrink: 0 }}>{p.initials}</div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>{p.biz}</div>
                <div style={{ fontSize: '0.72rem', color: p.color, fontWeight: 700 }}>{p.result}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GOAL SELECTOR ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 2rem 3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 900, letterSpacing: '-0.03em', margin: '0 0 0.5rem' }}>What's your main goal?</h2>
          <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Pick one — we'll tailor everything to your exact need.</p>
        </div>
        <div className="contact-goal-grid">
          {GOALS.map((g) => {
            const selected = goal?.label === g.label;
            return (
              <motion.button key={g.label} whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }} onClick={() => setGoal(g)}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem', padding: '1.5rem 1rem', borderRadius: 16, background: selected ? `${g.color}15` : 'rgba(255,255,255,0.03)', border: `1px solid ${selected ? g.color : 'rgba(255,255,255,0.07)'}`, cursor: 'pointer', transition: 'all 0.2s', boxShadow: selected ? `0 0 30px -8px ${g.color}60` : 'none' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${g.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <g.icon size={20} color={g.color} />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: selected ? g.color : '#E2E8F0' }}>{g.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* ── FORM ── */}
        <div className="contact-form-grid">
          {/* What Happens Next */}
          <div>
            <h3 style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: '1.5rem', color: '#E2E8F0' }}>What happens after you message us?</h3>
            {STEPS.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: `${s.color}20`, border: `1px solid ${s.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 900, color: s.color, flexShrink: 0 }}>{s.n}</div>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem', marginBottom: '0.2rem' }}>{s.title}</div>
                  <div style={{ color: '#64748B', fontSize: '0.82rem' }}>{s.sub}</div>
                </div>
              </motion.div>
            ))}
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { icon: Mail,    text: 'hello@creativals.com', href: 'mailto:hello@creativals.com' },
                { icon: Phone,   text: '+91 7997001700', href: 'tel:+917997001700' },
                { icon: Clock,   text: 'Mon–Sat · 10am–7pm IST', href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: '#94A3B8' }}>
                  <Icon size={14} color="#7C3AED" />
                  {href ? <a href={href} style={{ color: '#94A3B8', textDecoration: 'none' }}>{text}</a> : text}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleWhatsApp} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <AnimatePresence>
              {goal && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  style={{ padding: '0.6rem 1rem', background: `${goal.color}12`, border: `1px solid ${goal.color}30`, borderRadius: 10, fontSize: '0.8rem', color: goal.color, fontWeight: 700 }}>
                  Goal selected: {goal.label} ✓
                </motion.div>
              )}
            </AnimatePresence>
            {[
              { key: 'name',     placeholder: 'Your full name',           type: 'text' },
              { key: 'business', placeholder: 'Business name & industry', type: 'text' },
              { key: 'phone',    placeholder: 'WhatsApp number',          type: 'tel'  },
            ].map(({ key, placeholder, type }) => (
              <input key={key} type={type} placeholder={placeholder} value={form[key]} required
                onChange={e => setForm({ ...form, [key]: e.target.value })}
                style={{ padding: '0.95rem 1.1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: 'white', fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.2s' }}
                onFocus={e => { e.target.style.borderColor = '#7C3AED'; }}
                onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              />
            ))}
            <textarea placeholder="Anything else you want us to know? (optional)" value={form.msg} rows={3}
              onChange={e => setForm({ ...form, msg: e.target.value })}
              style={{ padding: '0.95rem 1.1rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, color: 'white', fontSize: '0.95rem', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s' }}
              onFocus={e => { e.target.style.borderColor = '#7C3AED'; }}
              onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            />
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              style={{ padding: '1.1rem', background: 'linear-gradient(135deg,#22C55E,#16A34A)', color: '#000', borderRadius: 12, fontWeight: 900, border: 'none', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', boxShadow: '0 8px 30px -8px rgba(34,197,94,0.5)' }}>
              <MessageCircle size={18} /> Send via WhatsApp <ArrowRight size={16} />
            </motion.button>
            <p style={{ color: '#475569', fontSize: '0.76rem', textAlign: 'center', margin: 0 }}>No spam. No unsolicited calls. Just real help.</p>
          </form>
        </div>
      </section>

      {/* ── GUARANTEE STRIP ── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(124,58,237,0.05)', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
            <Shield size={26} color="#A855F7" />
          </div>
          <h2 style={{ fontWeight: 900, fontSize: 'clamp(1.4rem,2.5vw,2rem)', letterSpacing: '-0.03em', margin: '0 0 0.75rem' }}>Our 100% Free Audit Guarantee</h2>
          <p style={{ color: '#94A3B8', lineHeight: 1.7, fontSize: '0.95rem', margin: '0 0 2rem' }}>
            Not happy with the audit? We'll throw in a full competitor analysis — completely free, no questions asked. Our job is to give you value before you spend a single rupee.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['Free audit, no credit card', 'Reply in 30 mins or less', 'Zero pressure, zero spam'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>
                <CheckCircle size={14} color="#22C55E" /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MINI FAQ ── */}
      <section style={{ maxWidth: 680, margin: '0 auto', padding: '4rem 2rem 5rem' }}>
        <h2 style={{ fontWeight: 900, fontSize: '1.6rem', textAlign: 'center', marginBottom: '2rem' }}>Quick Answers</h2>
        {[
          { q: 'How quickly will you respond?', a: 'WhatsApp messages are replied to within 30 minutes during business hours (10am–7pm IST, Mon–Sat). Outside hours, we\'ll respond first thing the next morning.' },
          { q: 'What happens in the free audit?', a: 'We review your website, ads, lead pipeline, and top competitors. Within 24 hours of chatting, you receive a specific written action plan — no fluff, no upsells.' },
          { q: 'Do you work with businesses outside India?', a: 'Yes! We actively serve clients in the UAE, USA, Malaysia, Canada, Australia, and Guyana. Time zones are no barrier.' },
          { q: 'Can I start with just one service?', a: 'Absolutely. Many clients begin with a single service — like Google Ads or a landing page — then scale to the full system once they see results.' },
        ].map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
            <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', background: 'none', border: 'none', color: 'white', fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer', textAlign: 'left', padding: 0, gap: '1rem' }}>
              {faq.q}
              <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} transition={{ duration: 0.2 }}
                style={{ fontSize: '1.4rem', color: '#7C3AED', flexShrink: 0, lineHeight: 1 }}>+</motion.span>
            </button>
            <AnimatePresence>
              {openFaq === i && (
                <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  style={{ color: '#94A3B8', marginTop: '0.75rem', lineHeight: 1.7, fontSize: '0.9rem', overflow: 'hidden' }}>
                  {faq.a}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Star ratings */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem', padding: '2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.3rem', marginBottom: '0.5rem' }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={18} color="#F59E0B" fill="#F59E0B" />)}
          </div>
          <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.25rem' }}>Trusted by 160+ businesses in 7 countries</div>
          <div style={{ color: '#64748B', fontSize: '0.82rem' }}>₹1,000,000,000+ in combined client revenue generated</div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
