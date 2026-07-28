import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, WA_INDIA } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

/* Same slug/title mapping as the Navbar services mega-menu */
const SERVICE_COLS = [
  {
    n: '01',
    head: 'Marketing & Growth',
    sub: 'Paid Ads · SEO · WhatsApp · Email · Lead Gen',
    items: [
      { slug: 'paid-social-ads', title: 'Paid Social Ads', tag: ['POPULAR', 'yellow'] },
      { slug: 'google-ads-ppc', title: 'Google Ads & PPC' },
      { slug: 'search-engine-optimization', title: 'Search Engine Optimization' },
      { slug: 'local-maps-gbp', title: 'Local Maps & GBP', tag: ['HIGH ROI', 'indigo'] },
      { slug: 'social-media-management', title: 'Social Media Management' },
      { slug: 'email-marketing', title: 'Email Marketing' },
      { slug: 'whatsapp-sms-marketing', title: 'WhatsApp & SMS' },
      { slug: 'lead-generation-funnels', title: 'Lead Generation Funnels', tag: ['MOST USED', 'ink'] },
      { slug: 'conversion-optimization', title: 'Conversion Optimization' },
      { slug: 'influencer-partnerships', title: 'Influencer Partnerships' },
    ],
  },
  {
    n: '02',
    head: 'Development & Systems',
    sub: 'Websites · Apps · Automations · CRM · AI',
    items: [
      { slug: 'custom-websites', title: 'Custom Websites', tag: ['POPULAR', 'yellow'] },
      { slug: 'landing-pages', title: 'High-Converting Landings' },
      { slug: 'ecommerce-stores', title: 'E-commerce Stores' },
      { slug: 'mobile-applications', title: 'Mobile Applications' },
      { slug: 'web-applications', title: 'Web Applications', tag: ['HIGH ROI', 'indigo'] },
      { slug: 'crm-management', title: 'CRM Management' },
      { slug: 'workflow-automations', title: 'Workflow Automations', tag: ['MOST USED', 'ink'] },
      { slug: 'api-integrations', title: 'API Integrations' },
      { slug: 'ai-chatbots', title: 'AI Chatbots' },
      { slug: 'hosting-server-ops', title: 'Hosting & Server Ops' },
    ],
  },
  {
    n: '03',
    head: 'Branding & Creative',
    sub: 'Identity · Video · Content · Design · Copy',
    items: [
      { slug: 'brand-identity', title: 'Brand Identity', tag: ['POPULAR', 'yellow'] },
      { slug: 'logo-design', title: 'Logo Design & Animation' },
      { slug: 'direct-response-video', title: 'Direct Response Video' },
      { slug: 'short-form-content', title: 'Short-Form Content', tag: ['HIGH ROI', 'indigo'] },
      { slug: 'social-media-graphics', title: 'Social Media Graphics' },
      { slug: 'ui-ux-design', title: 'UI / UX Interface Design' },
      { slug: 'copywriting-scripts', title: 'Copywriting & Scripts', tag: ['MOST USED', 'ink'] },
      { slug: 'photography', title: 'Photography' },
      { slug: 'pitch-decks', title: 'Pitch Decks' },
      { slug: 'print-packaging', title: 'Print & Packaging' },
    ],
  },
];

const ServicesPage = () => {
  useSEO({
    title: 'Digital Marketing Services in Hyderabad | Creativals',
    description: 'From local SEO to paid ads and web development, explore the premium digital marketing services we offer to scale Hyderabad businesses profitably.',
    keywords: 'digital marketing services hyderabad, seo services hyderabad, paid ads hyderabad, web development company hyderabad',
    // No inline schema — Service schema belongs to the individual service
    // pages (built from src/config/schema.js); this listing page carries
    // BreadcrumbList via PageLayout.
  });

  return (
    <div>
      {/* ── HERO — indigo ─────────────────────────────────────── */}
      <section style={{ background: '#4F46E5', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 11.5, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', background: '#FFD84D', color: '#17151A', borderRadius: 999, padding: '8px 16px', marginBottom: 30 })}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#17151A' }} />30+ Systems. One Team.
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 28 }}>
              We don't offer services.<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>We build growth systems.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 640, marginBottom: 38 }}>
              Every capability below is designed to work as part of a connected system — not as a standalone
              campaign. Traffic. Conversion. Closing. That's the loop.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">Get a Free System Audit →</a>
              <span style={mono({ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', opacity: .75 })}>
                Traffic → Conversion → Closing
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ALL 30 SYSTEMS — cream ────────────────────────────── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          {SERVICE_COLS.map((col, ci) => (
            <div key={col.head} style={{ marginBottom: ci < SERVICE_COLS.length - 1 ? 72 : 0 }}>
              <Reveal><SecNum n={col.n} label={col.head} /></Reveal>
              <Reveal delay={60}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, flexWrap: 'wrap', marginBottom: 30 }}>
                  <h2 className="cx-display" style={{ fontSize: 'clamp(26px,3vw,40px)' }}>{col.head}</h2>
                  <span className="cx-mega-colhead" style={{ marginBottom: 0 }}>{col.sub}</span>
                </div>
              </Reveal>
              <div className="cx-grid3" style={{ gap: 18 }}>
                {col.items.map((s, i) => (
                  <Reveal key={s.slug} delay={(i % 3) * 60}>
                    <Link
                      to={`/services/${s.slug}`}
                      className="cx-card-invert"
                      style={{ padding: '22px 24px', height: '100%', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', fontWeight: 800, fontSize: 16.5, letterSpacing: '-0.01em' }}>
                        {s.title}
                        {s.tag && <span className={`cx-tag cx-tag-${s.tag[1]}`}>{s.tag[0]}</span>}
                      </span>
                      <span aria-hidden="true" style={{ fontWeight: 900, fontSize: 18, flex: 'none' }}>→</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA — ink ───────────────────────────────────── */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="cx-display cx-h2" style={{ marginBottom: 22 }}>
              Not sure which<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>system you need?</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="cx-lead cx-lead-light" style={{ maxWidth: 560, margin: '0 auto 36px' }}>
              Tell us your goal. We'll map the exact system in 30 minutes — free.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
              <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">Book Free Audit on WhatsApp →</a>
              <span style={mono({ fontSize: 12, letterSpacing: '.08em', opacity: .55, textTransform: 'uppercase' })}>Free audit · No commitment · Reply in 2 hrs</span>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
