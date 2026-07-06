import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, WA_INDIA, WA_USA, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const STEPS = [
  { n: '1', title: 'You message us', body: 'WhatsApp or the form — takes 60 seconds. We reply within 30 minutes during business hours.' },
  { n: '2', title: 'We review your business', body: 'Website, ads, follow-up system, competitors — audited the same day.' },
  { n: '3', title: 'You get a custom plan', body: 'Free, specific, no strings attached. Hire us to build it — or keep the plan.' },
];

const CONTACTS = [
  { label: 'WhatsApp India', value: '+91 79970 01700', href: WA_INDIA },
  { label: 'WhatsApp USA', value: '+1 628 628 4743', href: WA_USA },
  { label: 'Email', value: 'hello@creativals.com', href: 'mailto:hello@creativals.com' },
  { label: 'Book a 30-min call', value: 'calendly.com/smmcreativals', href: 'https://calendly.com/smmcreativals/30min' },
];

const OFFICES = ['HYDERABAD', 'FLORIDA', 'VANCOUVER', 'DUBAI', 'KUALA LUMPUR', 'SYDNEY'];

const PHONE_RE = /^\+?[0-9][0-9\s-]{7,14}$/;

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', business: '', phone: '', msg: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [isOnline] = useState(() => {
    const h = new Date().getHours();
    return h >= 10 && h < 19;
  });

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

  const setField = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Your name is required.';
    if (!form.business.trim()) er.business = 'Your business name is required.';
    if (!form.phone.trim()) er.phone = 'Your WhatsApp number is required.';
    else if (!PHONE_RE.test(form.phone.trim())) er.phone = 'Enter a valid phone number (digits only, e.g. +91 79970 01700).';
    setErrors(er);
    if (Object.keys(er).length > 0) {
      setSent(false);
      return;
    }
    const msg = [
      'Hi Creativals! I want a free growth audit.',
      `Name: ${form.name.trim()}`,
      `Business: ${form.business.trim()}`,
      `WhatsApp: ${form.phone.trim()}`,
      form.msg.trim() ? `Message: ${form.msg.trim()}` : null,
    ].filter(Boolean).join('\n');
    window.open(waLink(msg), '_blank', 'noopener');
    setSent(true);
  };

  const errStyle = mono({ display: 'block', fontSize: 11, letterSpacing: '.06em', color: '#FF5F57', marginTop: 7 });

  return (
    <div>
      {/* ── HERO (indigo) ──────────────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap" style={{ paddingTop: 140, paddingBottom: 96 }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 34 })}>
              <span className="cx-dot" style={{ background: isOnline ? '#3DDC84' : '#FFD84D' }} />
              {isOnline ? 'Online now — avg. reply 12 mins' : 'We reply first thing at 10am IST'}
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1">
              Let's build your<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>growth system.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 620, marginTop: 30 }}>
              Start with a free, no-obligation audit. We'll analyse your setup and hand you a specific roadmap —
              within the hour.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', gap: 'clamp(24px,4vw,48px)', marginTop: 40, flexWrap: 'wrap' }}>
              {[{ v: '160+', l: 'Clients' }, { v: '7', l: 'Countries' }, { v: '₹1B+', l: 'Revenue generated' }].map(({ v, l }) => (
                <div key={l}>
                  <div style={{ fontWeight: 900, fontStretch: '122%', fontSize: 'clamp(34px,4vw,52px)', lineHeight: 1, color: '#FFD84D' }}>{v}</div>
                  <div style={mono({ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .7, marginTop: 8 })}>{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 01 · FORM + NEXT STEPS (cream) ─────────────────────── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="01" label="Start the conversation" /></Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 60 }}>
              One message.<br />
              <span style={{ color: '#4F46E5', fontStyle: 'italic' }}>Zero pressure.</span>
            </h2>
          </Reveal>

          <div className="cx-grid2" style={{ alignItems: 'start' }}>
            {/* LEFT — the form */}
            <Reveal>
              <form onSubmit={handleSubmit} noValidate className="cx-card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div>
                  <label className="cx-label" htmlFor="ct-name">Your full name *</label>
                  <input id="ct-name" className="cx-input" type="text" value={form.name} onChange={setField('name')} placeholder="e.g. Suresh Kumar" aria-invalid={!!errors.name} />
                  {errors.name && <span style={errStyle}>{errors.name}</span>}
                </div>
                <div>
                  <label className="cx-label" htmlFor="ct-business">Business name & industry *</label>
                  <input id="ct-business" className="cx-input" type="text" value={form.business} onChange={setField('business')} placeholder="e.g. Hotel Sky International — Hospitality" aria-invalid={!!errors.business} />
                  {errors.business && <span style={errStyle}>{errors.business}</span>}
                </div>
                <div>
                  <label className="cx-label" htmlFor="ct-phone">WhatsApp number *</label>
                  <input id="ct-phone" className="cx-input" type="tel" value={form.phone} onChange={setField('phone')} placeholder="+91 79970 01700" aria-invalid={!!errors.phone} />
                  {errors.phone && <span style={errStyle}>{errors.phone}</span>}
                </div>
                <div>
                  <label className="cx-label" htmlFor="ct-msg">What do you want to grow? (optional)</label>
                  <textarea id="ct-msg" className="cx-input" rows={4} value={form.msg} onChange={setField('msg')} placeholder="Leads, bookings, orders, admissions…" style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="cx-btn cx-btn-lg cx-btn-yellow" style={{ width: '100%' }}>
                  Send via WhatsApp →
                </button>
                {sent && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#17151A', color: '#F4F2EC', borderRadius: 12, padding: '14px 18px' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3DDC84', flex: 'none' }} />
                    <span style={mono({ fontSize: 11.5, letterSpacing: '.06em' })}>
                      WHATSAPP OPENED WITH YOUR DETAILS PRE-FILLED — JUST HIT SEND.
                    </span>
                  </div>
                )}
                <p style={mono({ margin: 0, fontSize: 10.5, letterSpacing: '.08em', textAlign: 'center', opacity: .5 })}>
                  NO SPAM. NO UNSOLICITED CALLS. JUST REAL HELP.
                </p>
              </form>
            </Reveal>

            {/* RIGHT — what happens next + direct contact */}
            <div>
              <Reveal delay={80}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 20 })}>
                  What happens next
                </div>
              </Reveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 44 }}>
                {STEPS.map((s, i) => (
                  <Reveal key={s.n} delay={120 + i * 80}>
                    <div style={{ border: '2px solid #17151A', borderRadius: 16, padding: '24px 24px', background: '#FFFFFF', display: 'flex', gap: 22, alignItems: 'flex-start' }}>
                      <div style={{ fontWeight: 900, fontSize: 38, fontStretch: '120%', color: '#4F46E5', lineHeight: 1, flex: 'none' }}>{s.n}</div>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>{s.title}</div>
                        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, opacity: .7 }}>{s.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={120}>
                <div style={mono({ fontSize: 11, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#4F46E5', marginBottom: 20 })}>
                  Prefer to reach out directly?
                </div>
              </Reveal>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {CONTACTS.map((c, i) => (
                  <Reveal key={c.label} delay={160 + i * 60}>
                    <a
                      href={c.href}
                      target={c.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noreferrer"
                      className="cx-card"
                      style={{ display: 'block', textDecoration: 'none', color: 'inherit', padding: '22px 22px', height: '100%', boxSizing: 'border-box' }}
                    >
                      <div style={mono({ fontSize: 10.5, letterSpacing: '.14em', textTransform: 'uppercase', opacity: .5, marginBottom: 8 })}>{c.label}</div>
                      <div style={{ fontWeight: 800, fontSize: 15.5, wordBreak: 'break-word' }}>{c.value}</div>
                    </a>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={200}>
                <div style={mono({ fontSize: 11, letterSpacing: '.1em', opacity: .5, marginTop: 18 })}>
                  MON–SAT · 10AM–7PM IST
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 · OFFICES (ink) ─────────────────────────────────── */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="Where we are" dark /></Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
            <Reveal delay={60}>
              <h2 className="cx-display cx-h2">
                6 offices.<br />
                <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>Always awake.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', maxWidth: 620 }}>
                {OFFICES.map((city) => (
                  <span key={city} className="cx-office-pill" style={mono({ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', border: '1px solid rgba(244,242,236,.3)', borderRadius: 999, padding: '10px 18px' })}>
                    {city}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 03 · FINAL CTA (indigo) ────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="03" label="Free · No commitment" dark /></Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
            <div>
              <Reveal delay={60}>
                <h2 className="cx-display cx-h2" style={{ marginBottom: 24 }}>
                  Fastest way?<br />
                  <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>Just WhatsApp us.</span>
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="cx-lead cx-lead-light" style={{ maxWidth: 520 }}>
                  No forms, no waiting. Send one message and get a real audit from a real expert.
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <a href={waLink('Hi! I want a free Growth Audit.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
                  Chat on WhatsApp — it's free →
                </a>
                <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .75 })}>REPLY IN 30 MINS OR LESS</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
