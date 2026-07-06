import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { WA_INDIA } from './ui/primitives';

/* ─── data ──────────────────────────────────────────────────── */

const SERVICE_COLS = [
  {
    head: 'Marketing & Growth',
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
    head: 'Development & Systems',
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
    head: 'Branding & Creative',
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

const RESULTS_LINKS = [
  { to: '/case-studies', title: 'Case Studies', desc: '8 elite transformations' },
  { to: '/results#client-wall', title: 'Client Proof Wall', desc: 'Browse all 160+ clients' },
  { to: '/results', title: 'Revenue Generated', desc: '₹100 Crore+ combined revenue' },
  { to: '/results', title: 'Global Reach', desc: '7 countries · 3 continents' },
  { to: '/client-reviews', title: 'Client Reviews', desc: 'Unedited feedback from founders' },
];

const CITIES = [
  ['Hyderabad', 'IN'], ['Florida', 'US'], ['Vancouver', 'CA'],
  ['Dubai', 'AE'], ['Kuala Lumpur', 'MY'], ['Sydney', 'AU'],
];

const ABOUT_COLS = [
  {
    head: 'Who we are', sub: 'The force behind the results.',
    items: [
      { to: '/about-us', title: 'About Us', desc: 'Our story and mission' },
      { to: '/approach', title: 'Approach', desc: 'How we think and work' },
      { to: '/case-studies', title: 'Case Studies', desc: 'Proof of performance' },
      { to: '/join-us', title: 'Join Us', desc: 'Join the movement' },
    ],
  },
  {
    head: 'What we build', sub: 'Built in-house for scale.', quote: '"Used by our clients before it\'s public"',
    items: [
      { to: '/products', title: 'Our Products', desc: 'In-house SaaS & tools' },
      { to: '/automations', title: 'Automations', desc: 'Infrastructure that scales' },
      { to: '/experiments', title: 'Experiments', desc: 'What we\'re testing now' },
    ],
  },
  {
    head: 'What we teach', sub: 'Playbooks behind our results.', quote: '"Everything we use to scale clients"',
    items: [
      { to: '/academy', title: 'Academy', desc: 'Structured learning' },
      { to: '/playbooks', title: 'Playbooks', desc: 'Proven frameworks' },
      { to: '/resources', title: 'Resources', desc: 'Guides and templates' },
    ],
  },
];

const INDUSTRY_PICKS = [
  { to: '/industries/hotels-resorts', title: 'Hotels & Resorts', desc: 'Get more direct bookings. Reduce OTA dependency.', tag: ['HIGH ROI', 'yellow'] },
  { to: '/industries/schools-colleges', title: 'Schools & Colleges', desc: 'Get more mass enrollments.', tag: ['MOST POPULAR', 'yellow'] },
  { to: '/industries/ecommerce-brands', title: 'E-commerce Brands', desc: 'Boost your product sales.' },
  { to: '/industries/healthcare', title: 'Healthcare', desc: 'Get more patients.' },
  { to: '/industries/restaurants', title: 'Restaurants', desc: 'Fill your tables daily.', tag: ['FAST GROWTH', 'indigo'] },
  { to: '/industries/b2b-enterprise', title: 'B2B Enterprise', desc: 'Dialed sales meetings.' },
];

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

/* ─── component ─────────────────────────────────────────────── */

const Navbar = () => {
  const [menu, setMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobSub, setMobSub] = useState(null);
  const [prevPath, setPrevPath] = useState(null);
  const closeT = useRef(null);
  const location = useLocation();

  const open = (name) => { clearTimeout(closeT.current); setMenu(name); };
  const closeSoon = () => { clearTimeout(closeT.current); closeT.current = setTimeout(() => setMenu(null), 220); };
  const closeNow = () => { clearTimeout(closeT.current); setMenu(null); };

  // close any open panel when the route changes (state-adjust-during-render pattern)
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    if (menu !== null) setMenu(null);
    if (mobileOpen) setMobileOpen(false);
    if (mobSub !== null) setMobSub(null);
  }

  const isActive = (path) => (path === '/' ? location.pathname === '/' : location.pathname.startsWith(path));

  const navLink = (label, to, dropdown) => (
    <Link
      to={to}
      className={`cx-navlink${isActive(to) ? ' active' : ''}`}
      onMouseEnter={dropdown ? () => open(dropdown) : closeNow}
      aria-expanded={dropdown ? menu === dropdown : undefined}
      aria-haspopup={dropdown ? 'menu' : undefined}
    >
      {label} {dropdown && <span className="chev">▼</span>}
    </Link>
  );

  return (
    <header className="cx-header" onMouseLeave={closeSoon}>
      <div className="cx-nav-inner">
        <Link to="/" className="cx-logo" onMouseEnter={closeNow}>
          Creativals<span style={{ color: '#FFD84D' }}>.</span>
        </Link>

        <nav className="cx-navlinks" aria-label="Main">
          {navLink('Home', '/')}
          {navLink('Services', '/services', 'services')}
          {navLink('Results', '/results', 'results')}
          {navLink('Industries', '/industries', 'industries')}
          {navLink('Pricing', '/pricing')}
          {navLink('About', '/about-us', 'about')}
          {navLink('Contact', '/contact')}
        </nav>

        <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-btn cx-btn-sm cx-btn-yellow cx-nav-cta-desktop" onMouseEnter={closeNow}>
          Get Free Audit →
        </a>

        <button className="cx-burger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ═══ SERVICES MEGA PANEL ═══ */}
      {menu === 'services' && (
        <div className="cx-mega cx-hide-md" onMouseEnter={() => open('services')} role="menu">
          <div className="cx-mega-pad">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #17151A', paddingBottom: 16, marginBottom: 26 }}>
              <span style={mono({ fontSize: 12, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase' })}>Growth systems &amp; infrastructure</span>
              <span style={mono({ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8, opacity: .6 })}>
                <span className="cx-dot" style={{ width: 7, height: 7, background: '#4F46E5' }} />30 services · one system
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 290px', gap: 38 }}>
              {SERVICE_COLS.map((col) => (
                <div key={col.head}>
                  <div className="cx-mega-colhead">{col.head}</div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {col.items.map((s) => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="cx-mega-item">
                        <span>{s.title}</span>
                        {s.tag && <span className={`cx-tag cx-tag-${s.tag[1]}`}>{s.tag[0]}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ background: '#17151A', color: '#F4F2EC', borderRadius: 16, padding: '24px 22px' }}>
                  <div style={mono({ fontSize: 10, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#FFD84D', marginBottom: 12 })}>Featured</div>
                  <div style={{ fontWeight: 800, fontSize: 21, letterSpacing: '-0.01em', marginBottom: 8 }}>Paid Social Ads</div>
                  <p style={{ margin: '0 0 16px', fontSize: 13.5, lineHeight: 1.55, color: 'rgba(244,242,236,.72)' }}>Scale revenue aggressively with AI-targeted Facebook &amp; Instagram campaigns.</p>
                  <div style={mono({ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 10.5, fontWeight: 600, letterSpacing: '.08em', background: 'rgba(255,216,77,.14)', color: '#FFD84D', borderRadius: 999, padding: '7px 12px' })}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFD84D' }} />AVG 3.2X ROAS IN 90 DAYS
                  </div>
                </div>
                <div style={{ background: '#4F46E5', color: '#F4F2EC', borderRadius: 16, padding: '24px 22px' }}>
                  <div style={{ fontWeight: 800, fontSize: 19, letterSpacing: '-0.01em', marginBottom: 6 }}>Free consultation</div>
                  <p style={{ margin: '0 0 16px', fontSize: 13.5, lineHeight: 1.5, color: 'rgba(244,242,236,.85)' }}>Let's build your roadmap.</p>
                  <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-btn cx-btn-sm cx-btn-yellow" style={{ display: 'block' }}>Get Free Audit →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ RESULTS MEGA PANEL ═══ */}
      {menu === 'results' && (
        <div className="cx-mega cx-hide-md" onMouseEnter={() => open('results')} role="menu">
          <div className="cx-mega-pad">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr .85fr', gap: 38 }}>
              <div>
                <div className="cx-mega-colhead" style={{ marginBottom: 16 }}>Proof of performance</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {RESULTS_LINKS.map((l) => (
                    <Link key={l.title} to={l.to} className="cx-mega-block">
                      <span className="bt">{l.title}</span>
                      <span className="bd">{l.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div style={{ background: '#4F46E5', color: '#F4F2EC', borderRadius: 16, padding: 26, display: 'flex', flexDirection: 'column' }}>
                <div style={mono({ display: 'flex', alignItems: 'center', gap: 8, fontSize: 10.5, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FFD84D', marginBottom: 18 })}>
                  <span className="cx-dot" style={{ width: 7, height: 7 }} />Live result
                </div>
                <div style={{ fontWeight: 900, fontSize: 54, fontStretch: '120%', lineHeight: 1, color: '#FFD84D' }}>₹50 Crore</div>
                <div style={mono({ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', opacity: .8, margin: '10px 0 14px' })}>Revenue generated — Glampinn Valley</div>
                <p style={{ margin: '0 0 20px', fontSize: 14.5, lineHeight: 1.55, color: 'rgba(244,242,236,.85)', flex: 1 }}>A resort that became a movement. Zero digital presence → ₹50 Cr empire in 12 months.</p>
                <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-btn cx-btn-sm cx-btn-ink" style={{ display: 'block' }}>Get Free Audit →</a>
              </div>
              <div>
                <div className="cx-mega-colhead" style={{ marginBottom: 16 }}>Global reach</div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {CITIES.map(([city, cc], i) => (
                    <div key={cc} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: i < CITIES.length - 1 ? '1px solid rgba(23,21,26,.12)' : 'none', fontSize: 14.5, fontWeight: 600 }}>
                      <span>{city}</span>
                      <span style={mono({ fontSize: 11, background: '#17151A', color: '#F4F2EC', borderRadius: 999, padding: '3px 9px' })}>{cc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="cx-hide-sm" style={mono({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #17151A', marginTop: 26, paddingTop: 18, fontSize: 12, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' })}>
              <span>160+ clients</span><span style={{ color: '#4F46E5' }}>✺</span><span>₹100 Cr+ revenue</span><span style={{ color: '#4F46E5' }}>✺</span><span>7 countries</span><span style={{ color: '#4F46E5' }}>✺</span><span>22+ industries</span>
            </div>
          </div>
        </div>
      )}

      {/* ═══ INDUSTRIES MEGA PANEL ═══ */}
      {menu === 'industries' && (
        <div className="cx-mega cx-hide-md" onMouseEnter={() => open('industries')} role="menu">
          <div className="cx-mega-pad">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '2px solid #17151A', paddingBottom: 16, marginBottom: 26 }}>
              <span style={mono({ fontSize: 12, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase' })}>Choose your business type</span>
              <span style={{ fontSize: 13.5, opacity: .6 }}>Select your sector to see your direct growth roadmap.</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '330px 1fr 1fr', gap: 30 }}>
              <Link
                to="/industries/hotels-resorts"
                style={{ background: '#17151A', color: '#F4F2EC', borderRadius: 16, padding: '28px 26px', textDecoration: 'none', display: 'flex', flexDirection: 'column', transition: 'transform .15s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ marginBottom: 22 }}>
                  <span style={mono({ fontSize: 10, fontWeight: 600, letterSpacing: '.14em', textTransform: 'uppercase', background: '#FFD84D', color: '#17151A', borderRadius: 999, padding: '5px 11px' })}>High ROI</span>
                </div>
                <div style={{ fontWeight: 900, fontStretch: '118%', textTransform: 'uppercase', fontSize: 28, letterSpacing: '-0.01em', marginBottom: 10 }}>Hotels &amp; Resorts</div>
                <p style={{ margin: '0 0 20px', fontSize: 14, lineHeight: 1.55, color: 'rgba(244,242,236,.72)', flex: 1 }}>Get more direct bookings. Reduce OTA dependency.</p>
                <div style={{ border: '1px solid rgba(244,242,236,.25)', borderRadius: 12, padding: '16px 18px' }}>
                  <div style={{ fontWeight: 900, fontSize: 32, fontStretch: '120%', color: '#FFD84D' }}>+180%</div>
                  <div style={mono({ fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', opacity: .65, marginTop: 4 })}>Direct booking growth</div>
                </div>
              </Link>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className="cx-mega-colhead" style={{ marginBottom: 0 }}>Best for your business</div>
                <Link to="/industries/schools-colleges" className="cx-ind-pick">
                  <span><span style={{ display: 'block', fontWeight: 800, fontSize: 16 }}>Schools &amp; Colleges</span><span style={{ display: 'block', fontSize: 12.5, opacity: .65, marginTop: 2 }}>Get more mass enrollments.</span></span>
                  <span className="cx-tag cx-tag-yellow" style={{ padding: '4px 9px' }}>MOST POPULAR</span>
                </Link>
                <Link to="/industries/ecommerce-brands" className="cx-ind-pick">
                  <span><span style={{ display: 'block', fontWeight: 800, fontSize: 16 }}>E-commerce Brands</span><span style={{ display: 'block', fontSize: 12.5, opacity: .65, marginTop: 2 }}>Boost your product sales.</span></span>
                </Link>
                <Link to="/industries/healthcare" className="cx-ind-pick">
                  <span><span style={{ display: 'block', fontWeight: 800, fontSize: 16 }}>Healthcare</span><span style={{ display: 'block', fontSize: 12.5, opacity: .65, marginTop: 2 }}>Get more patients.</span></span>
                </Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, paddingTop: 29 }}>
                <Link to="/industries/restaurants" className="cx-ind-pick">
                  <span><span style={{ display: 'block', fontWeight: 800, fontSize: 16 }}>Restaurants</span><span style={{ display: 'block', fontSize: 12.5, opacity: .65, marginTop: 2 }}>Fill your tables daily.</span></span>
                  <span className="cx-tag cx-tag-indigo" style={{ padding: '4px 9px' }}>FAST GROWTH</span>
                </Link>
                <Link to="/industries/b2b-enterprise" className="cx-ind-pick">
                  <span><span style={{ display: 'block', fontWeight: 800, fontSize: 16 }}>B2B Enterprise</span><span style={{ display: 'block', fontSize: 12.5, opacity: .65, marginTop: 2 }}>Dialed sales meetings.</span></span>
                </Link>
                <Link
                  to="/industries"
                  style={{ background: '#4F46E5', color: '#F4F2EC', border: '2px solid #4F46E5', borderRadius: 14, padding: '18px 20px', textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 14, transition: 'transform .15s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
                >
                  <span>
                    <span style={mono({ display: 'block', fontSize: 10.5, letterSpacing: '.1em', textTransform: 'uppercase', opacity: .8 })}>Not listed above?</span>
                    <span style={{ display: 'block', fontWeight: 800, fontSize: 16, marginTop: 3 }}>View all industries</span>
                  </span>
                  <span style={{ fontWeight: 900, fontSize: 20 }}>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ ABOUT MEGA PANEL ═══ */}
      {menu === 'about' && (
        <div className="cx-mega cx-hide-md" onMouseEnter={() => open('about')} role="menu">
          <div className="cx-mega-pad">
            <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr 1fr 1fr', gap: 38 }}>
              <div style={{ background: '#17151A', color: '#F4F2EC', borderRadius: 16, padding: '28px 26px', display: 'flex', flexDirection: 'column' }}>
                <div style={mono({ fontSize: 10, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#FFD84D', marginBottom: 14 })}>World-class systems</div>
                <div style={{ fontWeight: 900, fontStretch: '118%', textTransform: 'uppercase', fontSize: 27, letterSpacing: '-0.01em', marginBottom: 12 }}>Inside Creativals</div>
                <p style={{ margin: '0 0 20px', fontSize: 14, lineHeight: 1.55, color: 'rgba(244,242,236,.72)', flex: 1 }}>We don't just run marketing. We build systems, products, and playbooks that scale businesses.</p>
                <div style={{ border: '1px solid rgba(244,242,236,.25)', borderRadius: 12, padding: '14px 16px', fontSize: 13, lineHeight: 1.4, marginBottom: 18 }}>
                  Trusted by <strong style={{ color: '#FFD84D' }}>120+ growing brands</strong> across industries.
                </div>
                <Link to="/about-us" style={{ fontWeight: 800, fontSize: 15, color: '#F4F2EC', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
                  Explore our story <span style={{ fontWeight: 900 }}>→</span>
                </Link>
              </div>
              {ABOUT_COLS.map((col) => (
                <div key={col.head}>
                  <div className="cx-mega-colhead" style={{ marginBottom: 6 }}>{col.head}</div>
                  <div style={{ fontSize: 12.5, opacity: .6, marginBottom: 16 }}>{col.sub}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {col.items.map((l) => (
                      <Link key={l.title} to={l.to} className="cx-mega-block" style={{ padding: '9px 12px' }}>
                        <span className="bt" style={{ fontSize: 15 }}>{l.title}</span>
                        <span className="bd">{l.desc}</span>
                      </Link>
                    ))}
                  </div>
                  {col.quote && <div style={{ fontSize: 12.5, fontStyle: 'italic', opacity: .55, marginTop: 16 }}>{col.quote}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ═══ MOBILE MENU ═══ */}
      {mobileOpen && (
        <div className="cx-mobile-menu">
          <div style={{ padding: '10px 20px 26px' }}>
            <Link to="/" className="cx-mob-link">Home</Link>

            {/* Services accordion */}
            <button className="cx-mob-link cx-mob-acc" aria-expanded={mobSub === 'services'} onClick={() => setMobSub(mobSub === 'services' ? null : 'services')}>
              Services <span className={`cx-mob-chev${mobSub === 'services' ? ' open' : ''}`}>▾</span>
            </button>
            {mobSub === 'services' && (
              <div className="cx-mob-panel">
                {SERVICE_COLS.map((col) => (
                  <div key={col.head} style={{ marginBottom: 18 }}>
                    <div className="cx-mega-colhead" style={{ marginBottom: 8 }}>{col.head}</div>
                    {col.items.map((s) => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="cx-mob-sublink">
                        <span>{s.title}</span>
                        {s.tag && <span className={`cx-tag cx-tag-${s.tag[1]}`}>{s.tag[0]}</span>}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link to="/services" className="cx-mob-sublink" style={{ fontWeight: 800, color: '#4F46E5' }}>All 30 services →</Link>
              </div>
            )}

            {/* Results accordion */}
            <button className="cx-mob-link cx-mob-acc" aria-expanded={mobSub === 'results'} onClick={() => setMobSub(mobSub === 'results' ? null : 'results')}>
              Results <span className={`cx-mob-chev${mobSub === 'results' ? ' open' : ''}`}>▾</span>
            </button>
            {mobSub === 'results' && (
              <div className="cx-mob-panel">
                <div className="cx-mega-colhead" style={{ marginBottom: 8 }}>Proof of performance</div>
                {RESULTS_LINKS.map((l) => (
                  <Link key={l.title} to={l.to} className="cx-mob-sublink" style={{ display: 'block' }}>
                    <span style={{ display: 'block', fontWeight: 800 }}>{l.title}</span>
                    <span style={{ display: 'block', fontSize: 12.5, opacity: .6, marginTop: 2 }}>{l.desc}</span>
                  </Link>
                ))}
              </div>
            )}

            {/* Industries accordion */}
            <button className="cx-mob-link cx-mob-acc" aria-expanded={mobSub === 'industries'} onClick={() => setMobSub(mobSub === 'industries' ? null : 'industries')}>
              Industries <span className={`cx-mob-chev${mobSub === 'industries' ? ' open' : ''}`}>▾</span>
            </button>
            {mobSub === 'industries' && (
              <div className="cx-mob-panel">
                <div className="cx-mega-colhead" style={{ marginBottom: 8 }}>Choose your business type</div>
                {INDUSTRY_PICKS.map((l) => (
                  <Link key={l.title} to={l.to} className="cx-mob-sublink">
                    <span>
                      <span style={{ display: 'block', fontWeight: 800 }}>{l.title}</span>
                      <span style={{ display: 'block', fontSize: 12.5, opacity: .6, marginTop: 2 }}>{l.desc}</span>
                    </span>
                    {l.tag && <span className={`cx-tag cx-tag-${l.tag[1]}`}>{l.tag[0]}</span>}
                  </Link>
                ))}
                <Link to="/industries" className="cx-mob-sublink" style={{ fontWeight: 800, color: '#4F46E5' }}>View all industries →</Link>
              </div>
            )}

            <Link to="/pricing" className="cx-mob-link">Pricing</Link>

            {/* About accordion */}
            <button className="cx-mob-link cx-mob-acc" aria-expanded={mobSub === 'about'} onClick={() => setMobSub(mobSub === 'about' ? null : 'about')}>
              About <span className={`cx-mob-chev${mobSub === 'about' ? ' open' : ''}`}>▾</span>
            </button>
            {mobSub === 'about' && (
              <div className="cx-mob-panel">
                {ABOUT_COLS.map((col) => (
                  <div key={col.head} style={{ marginBottom: 18 }}>
                    <div className="cx-mega-colhead" style={{ marginBottom: 8 }}>{col.head}</div>
                    {col.items.map((l) => (
                      <Link key={l.title} to={l.to} className="cx-mob-sublink" style={{ display: 'block' }}>
                        <span style={{ display: 'block', fontWeight: 800 }}>{l.title}</span>
                        <span style={{ display: 'block', fontSize: 12.5, opacity: .6, marginTop: 2 }}>{l.desc}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <Link to="/contact" className="cx-mob-link">Contact</Link>

            <a href={WA_INDIA} target="_blank" rel="noreferrer" className="cx-btn cx-btn-yellow" style={{ display: 'block', marginTop: 18, border: '2px solid #17151A' }}>
              Get Free Audit →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
