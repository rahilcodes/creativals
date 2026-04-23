import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, Menu, X, ArrowRight,
  TrendingUp, Globe, MapPin, Share2, Mail, MessageCircle, Filter, Activity, Users, Star,
  Laptop, LayoutTemplate, ShoppingBag, Smartphone, Cloud, Database, Network, Code, Bot, Server,
  Fingerprint, Paintbrush, Video, PlayCircle, Image, PenTool, Type, Camera, Presentation, Package,
  LineChart, Trophy, MessageSquare, GraduationCap, Building, Stethoscope, UtensilsCrossed, Briefcase,
  FlaskConical, Cpu, Zap, BookOpen, Library, FileSearch, BarChart3, Target, Award, Clock,
  Building2, Home, Car, Wallet, BarChart2
} from 'lucide-react';
import { WorldMapGrid, OFFICES as WORLD_DOTS } from './WorldMapGrid';

const megaMenuServices = [
  // COLUMN 1: MARKETING & GROWTH
  { id: 'paid-social-ads', category: 'Marketing & Growth', title: 'Paid Social Ads', icon: TrendingUp, badge: 'Popular', desc: 'Scale revenue aggressively with AI-targeted Facebook & Instagram campaigns.', featureText: 'Average 3.2x ROAS in 90 Days' },
  { id: 'google-ads-ppc', category: 'Marketing & Growth', title: 'Google Ads & PPC', icon: Globe, desc: 'Capture high-intent search traffic the exact moment they need you.', featureText: 'Top 3 Search Positions Guaranteed' },
  { id: 'search-engine-optimization', category: 'Marketing & Growth', title: 'Search Engine Optimization', icon: MapPin, desc: 'Dominate your market with long-term organic compounding growth.', featureText: '100% Increase in Organic Traffic' },
  { id: 'local-maps-gbp', category: 'Marketing & Growth', title: 'Local Maps & GBP', icon: Filter, badge: 'High ROI', desc: 'Own your neighborhood. Drive hundreds of calls from local searches.', featureText: '#1 Local Map Pack Ranking' },
  { id: 'social-media-management', category: 'Marketing & Growth', title: 'Social Media Management', icon: Share2, desc: 'Turn followers into buyers with strategic, consistent social presence.', featureText: 'Daily Content & Engagement' },
  { id: 'email-marketing', category: 'Marketing & Growth', title: 'Email Marketing', icon: Mail, desc: 'Automate your follow-ups and extract absolute maximum LTV.', featureText: '40%+ Open Rates' },
  { id: 'whatsapp-sms-marketing', category: 'Marketing & Growth', title: 'WhatsApp & SMS', icon: MessageCircle, desc: 'The highest open-rate channels on earth. Direct to consumer instantly.', featureText: '98% Delivery Rate' },
  { id: 'lead-generation-funnels', category: 'Marketing & Growth', title: 'Lead Generation Funnels', icon: Activity, badge: 'Most Used', desc: 'High-converting machinery designed uniquely to capture raw leads.', featureText: '2x Conversion Rate Over Websites' },
  { id: 'conversion-optimization', category: 'Marketing & Growth', title: 'Conversion Optimization', icon: Star, desc: 'We mathematically test variants to squeeze more money from same traffic.', featureText: 'A/B Testing Implementation' },
  { id: 'influencer-partnerships', category: 'Marketing & Growth', title: 'Influencer Partnerships', icon: Users, desc: 'Leverage established trust via macro and micro influencer networks.', featureText: 'Trusted Authority Transfer' },

  // COLUMN 2: DEVELOPMENT & SYSTEMS
  { id: 'custom-websites', category: 'Development & Systems', title: 'Custom Websites', icon: Laptop, badge: 'Popular', desc: 'Lightning-fast, mobile-first websites engineered to sell, not just look pretty.', featureText: 'Sub-1.5s Load Speeds' },
  { id: 'landing-pages', category: 'Development & Systems', title: 'High-Converting Landings', icon: LayoutTemplate, desc: 'Single-purpose pages built with deep psychological conversion triggers.', featureText: 'Optimized for Paid Traffic' },
  { id: 'ecommerce-stores', category: 'Development & Systems', title: 'E-commerce Stores', icon: ShoppingBag, desc: 'Frictionless checkout experiences that make buying absolutely seamless.', featureText: 'Shopify / WooCommerce Expert' },
  { id: 'mobile-applications', category: 'Development & Systems', title: 'Mobile Applications', icon: Smartphone, desc: 'Native user experiences built cleanly for iOS and Android ecosystems.', featureText: 'Cross-Platform React Native' },
  { id: 'web-applications', category: 'Development & Systems', title: 'Web Applications', icon: Cloud, badge: 'High ROI', desc: 'Complex SaaS and portal infrastructure built for scale and security.', featureText: 'Next.js & Node.js Architecture' },
  { id: 'crm-management', category: 'Development & Systems', title: 'CRM Management', icon: Database, desc: 'Stop losing leads. We build hermetic systems so no prospect escapes.', featureText: 'HubSpot / GoHighLevel Masters' },
  { id: 'workflow-automations', category: 'Development & Systems', title: 'Workflow Automations', icon: Network, badge: 'Most Used', desc: 'Replace humans with intelligent scripts. Zapier, Make, and n8n.', featureText: 'Save 40+ Hours Weekly' },
  { id: 'api-integrations', category: 'Development & Systems', title: 'API Integrations', icon: Code, desc: 'Connecting your fractured software stack into a unified data organism.', featureText: 'Seamless Data Flow' },
  { id: 'ai-chatbots', category: 'Development & Systems', title: 'AI Chatbots', icon: Bot, desc: '24/7 intelligent sales reps trained exclusively on your data.', featureText: 'GPT-4 Powered Conversions' },
  { id: 'hosting-server-ops', category: 'Development & Systems', title: 'Hosting & Server Ops', icon: Server, desc: 'Military-grade uptime and security for your critical digital assets.', featureText: '99.99% Uptime Guarantee' },

  // COLUMN 3: BRANDING & CREATIVE
  { id: 'brand-identity', category: 'Branding & Creative', title: 'Brand Identity', icon: Fingerprint, badge: 'Popular', desc: 'Distill your value into a psychological hook that instantly commands trust.', featureText: 'Strategy & Visual Matrix' },
  { id: 'logo-design', category: 'Branding & Creative', title: 'Logo Design & Animation', icon: Paintbrush, desc: 'Timeless marks that sear your company into the minds of your market.', featureText: 'Vector & Motion Suites' },
  { id: 'direct-response-video', category: 'Branding & Creative', title: 'Direct Response Video', icon: Video, desc: 'Aggressive, high-hook video ads designed specifically to drain attention.', featureText: 'Scripting & Post-Production' },
  { id: 'short-form-content', category: 'Branding & Creative', title: 'Short-Form Content', icon: PlayCircle, badge: 'High ROI', desc: 'Viral engineering for TikTok, Reels, and Shorts algorithms natively.', featureText: 'Volume & Velocity focused' },
  { id: 'social-media-graphics', category: 'Branding & Creative', title: 'Social Media Graphics', icon: Image, desc: 'Premium static layouts that interrupt the infinite scroll immediately.', featureText: 'Carousels & Statics' },
  { id: 'ui-ux-design', category: 'Branding & Creative', title: 'UI / UX Interface Design', icon: PenTool, desc: 'We map out frictionless neural pathways for your software users.', featureText: 'Wireframes & High Fidelity' },
  { id: 'copywriting-scripts', category: 'Branding & Creative', title: 'Copywriting & Scripts', icon: Type, badge: 'Most Used', desc: 'Words that slice through the market noise and force the reader to act.', featureText: 'Direct Response Psychology' },
  { id: 'photography', category: 'Branding & Creative', title: 'Photography', icon: Camera, desc: 'High-end imagery that positions your product as the absolute premium tier.', featureText: 'Product & Lifestyle Shoots' },
  { id: 'pitch-decks', category: 'Branding & Creative', title: 'Pitch Decks', icon: Presentation, desc: 'Investor-ready presentations that command authority in the boardroom.', featureText: 'Capital & Sales Focused' },
  { id: 'print-packaging', category: 'Branding & Creative', title: 'Print & Packaging', icon: Package, desc: 'Tactile marketing materials that feel expensive in the hand.', featureText: 'Physical Brand Extensions' }
];

// â”€â”€â”€ Results Dropdown Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const ROTATING_CASES = [
  { client: 'Glampinn Valley', industry: 'Hotels', stat: '₹50 Crore', label: 'Revenue Generated', desc: 'A resort that became a movement.', color: '#F59E0B', bar: 95 },
  { client: 'MRA Motors',      industry: 'Automobile', stat: '50M Views', label: 'Total Reach', desc: '50K followers. 500+ monthly leads.', color: '#38BDF8', bar: 88 },
  { client: 'Hotel Sky Intl.', industry: 'Hospitality', stat: '₹13L→₹25L', label: 'Monthly Revenue', desc: 'Doubled in under 6 months.', color: '#22C55E', bar: 75 },
];

const INDUSTRY_FILTERS = [
  { key: 'All',         label: 'All',         color: '#7C3AED' },
  { key: 'Hotels',      label: 'Hotels',      color: '#22C55E' },
  { key: 'Education',   label: 'Education',   color: '#A855F7' },
  { key: 'Food',        label: 'Food',        color: '#F97316' },
  { key: 'Automobile',  label: 'Auto',        color: '#EF4444' },
  { key: 'Hospitality', label: 'Hospitality', color: '#38BDF8' },
];

const TICKER_ITEMS = [
  'Glampinn Valley ₹50 Cr Revenue',
  'MRA Motors 50M Views',
  'Hotel Sky 92% Growth',
  'Pista House 200% Orders',
  'GMR Group Ongoing Partner',
  'Gopuppy ₹15 Cr Revenue',
  'Teak Studio ₹30 Cr Revenue',
  'Mahindra 500+ Leads/mo',
  'RL Tours Top 3 in Hyderabad',
];



const NAV_LINKS = [
  { icon: LineChart,     title: 'Case Studies',      sub: '8 elite transformations',         href: '/case-studies' },
  { icon: Users,         title: 'Client Proof Wall', sub: 'Browse all 160+ clients',         href: '/results#client-wall' },
  { icon: Wallet,        title: 'Revenue Generated', sub: '₹100 Crore+ combined revenue',     href: '/results#revenue-generated' },
  { icon: Globe,         title: 'Global Reach',      sub: '7 countries · 3 continents',      href: '/results#geographic-reach' },
  { icon: MessageSquare, title: 'Client Reviews',    sub: 'Unedited feedback from founders', href: '/client-reviews' },
];

// â”€â”€â”€ ResultsDropdown Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const ResultsDropdown = ({ handleMouseLeave, activeDropdown, handleMouseEnter }) => {
  const [activeCase, setActiveCase] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [hoveredDot, setHoveredDot] = useState(null);
  const [tickerPos, setTickerPos] = useState(0);
  const tickerRef = useRef(null);
  const caseTimerRef = useRef(null);
  const rafRef = useRef(null);
  const isOpen = activeDropdown === 'results';

  // Auto-rotate case studies
  useEffect(() => {
    if (!isOpen) return;
    caseTimerRef.current = setInterval(() => {
      setActiveCase(prev => (prev + 1) % ROTATING_CASES.length);
    }, 3500);
    return () => clearInterval(caseTimerRef.current);
  }, [isOpen]);

  // Ticker animation
  useEffect(() => {
    if (!isOpen) return;
    let pos = 0;
    const speed = 0.5;
    const tick = () => {
      pos -= speed;
      if (tickerRef.current) {
        const total = tickerRef.current.scrollWidth / 2;
        if (Math.abs(pos) >= total) pos = 0;
        tickerRef.current.style.transform = `translateX(${pos}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isOpen]);

  const filteredCases = activeIndustry === 'All'
    ? ROTATING_CASES
    : ROTATING_CASES.filter(c => c.industry === activeIndustry);
  const displayCase = filteredCases[activeCase % (filteredCases.length || 1)] || ROTATING_CASES[0];

  return (
    <div className="nav-item-group" style={{ position: 'static' }}
      onMouseEnter={() => handleMouseEnter('results')} onMouseLeave={handleMouseLeave}>
      <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#374151', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', padding: 0 }}>
        Results <ChevronDown size={14} />
      </button>

      {/* Outer shell â€” NO overflow:hidden so border-radius clips properly */}
      <div style={{
        position: 'absolute', top: 'calc(100% + 14px)', left: '50%',
        transform: isOpen ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(14px)',
        width: 'min(1120px, calc(100vw - 40px))',
        zIndex: 999, background: '#ffffff', borderRadius: '1.25rem',
        boxShadow: '0 25px 60px -12px rgba(0,0,0,.18)', border: '1px solid #E5E7EB',
        opacity: isOpen ? 1 : 0, visibility: isOpen ? 'visible' : 'hidden',
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',  /* clips ticker at rounded corners */
      }}>

        {/* â”€â”€ TICKER â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div style={{ borderBottom: '1px solid #F3F4F6', padding: '0.45rem 1rem', overflow: 'hidden', background: '#F8F9FA', flexShrink: 0 }}>
          <div ref={tickerRef} style={{ display: 'inline-flex', gap: '2.5rem', whiteSpace: 'nowrap', willChange: 'transform' }}>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} style={{ fontSize: '0.7rem', fontWeight: 700, color: '#374151', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#7C3AED', display: 'inline-block', flexShrink: 0 }} />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* â”€â”€ BODY (fixed height, no overflow) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div style={{ display: 'flex', height: 380 }}>

          {/* LEFT: Nav Links + Industry Picker */}
          <div style={{ width: 280, padding: '1rem 0.85rem', borderRight: '1px solid #F3F4F6', display: 'flex', flexDirection: 'column', gap: '0.25rem', flexShrink: 0, overflow: 'hidden' }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem', paddingLeft: '0.5rem' }}>
              Proof of Performance
            </div>

            {NAV_LINKS.map(({ icon: Icon2, title, sub, href }) => (
              <Link key={title} to={href} onClick={handleMouseLeave}
                className="mega-card-hover"
                style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.5rem 0.5rem', borderRadius: '0.6rem', textDecoration: 'none', transition: 'background 0.18s' }}>
                <div style={{ width: 30, height: 30, borderRadius: '0.5rem', background: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon2 size={14} color="#7C3AED" />
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#111827', lineHeight: 1.2 }}>{title}</div>
                  <div style={{ fontSize: '0.64rem', fontWeight: 500, color: '#9CA3AF' }}>{sub}</div>
                </div>
              </Link>
            ))}

            {/* Industry Inline Picker */}
            <div style={{ marginTop: '0.5rem', paddingTop: '0.6rem', borderTop: '1px solid #F3F4F6' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem', paddingLeft: '0.25rem' }}>Filter by industry</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                {INDUSTRY_FILTERS.map(f => (
                  <button key={f.key} onClick={() => setActiveIndustry(f.key)}
                    style={{
                      padding: '0.2rem 0.55rem', borderRadius: '99px', cursor: 'pointer', fontFamily: 'inherit',
                      fontSize: '0.64rem', fontWeight: 700,
                      border: `1px solid ${activeIndustry === f.key ? f.color : '#E5E7EB'}`,
                      background: activeIndustry === f.key ? `${f.color}15` : 'transparent',
                      color: activeIndustry === f.key ? f.color : '#6B7280',
                      transition: 'all 0.15s',
                    }}>
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER: Rotating Case Study */}
          <div style={{ flex: 1, padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', minWidth: 0 }}>
            {/* Header row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
              <span style={{ fontSize: '0.64rem', fontWeight: 900, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                Live Result
              </span>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                {ROTATING_CASES.map((_, i) => (
                  <button key={i} onClick={() => setActiveCase(i)}
                    style={{ width: activeCase === i ? 16 : 6, height: 5, borderRadius: '99px', border: 'none', cursor: 'pointer', background: activeCase === i ? '#7C3AED' : '#E5E7EB', transition: 'all 0.3s', padding: 0 }} />
                ))}
              </div>
            </div>

            {/* Case card â€” fixed height, no flex:1 */}
            <div key={displayCase.client} style={{
              background: '#F9FAFB', borderRadius: '0.875rem',
              border: `1px solid ${displayCase.color}30`,
              padding: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.6rem' }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: displayCase.color, boxShadow: `0 0 7px ${displayCase.color}`, flexShrink: 0 }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#6B7280' }}>{displayCase.client}</span>
                <span style={{ fontSize: '0.56rem', fontWeight: 700, color: displayCase.color, background: `${displayCase.color}15`, padding: '0.1rem 0.4rem', borderRadius: '99px', border: `1px solid ${displayCase.color}25` }}>{displayCase.industry}</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.25rem' }}>
                {displayCase.stat}
              </div>
              <div style={{ fontSize: '0.64rem', fontWeight: 800, color: displayCase.color, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>{displayCase.label}</div>
              <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: '0 0 0.75rem', fontWeight: 500, lineHeight: 1.4 }}>{displayCase.desc}</p>
              <div style={{ height: 3, background: '#E5E7EB', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ width: `${displayCase.bar}%`, height: '100%', background: `linear-gradient(90deg, ${displayCase.color}, ${displayCase.color}99)`, transition: 'width 0.8s ease' }} />
              </div>
            </div>

            {/* CTA */}
            <Link to="/contact" onClick={handleMouseLeave}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#111827', color: 'white', textDecoration: 'none', padding: '0.65rem', borderRadius: '0.7rem', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0, marginTop: 'auto' }}>
              Get Free Audit <ArrowRight size={13} />
            </Link>
          </div>

          {/* RIGHT: World Map SVG (all-in-SVG, no absolute % div dots) */}
          <div style={{ width: 220, borderLeft: '1px solid #F3F4F6', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flexShrink: 0 }}>
            <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Global Reach</div>

            {/* Pure SVG map — no overflow issues */}
            <div style={{ position: 'relative', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid #F3F4F6', background: '#F8FAFC', flexShrink: 0, height: 110 }}>
              <WorldMapGrid />
            </div>

            {/* Country list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', overflowY: 'auto', flex: 1 }}>
              {WORLD_DOTS.map(dot => (
                <div key={dot.city} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: dot.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#374151' }}>{dot.city}</span>
                  </div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: dot.color }}>{dot.code}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* â”€â”€ TRUST STRIP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div style={{ borderTop: '1px solid #F3F4F6', display: 'flex', background: '#F8F9FA', flexShrink: 0 }}>
          {[
            { v: '160+',    l: 'Clients',   c: '#7C3AED' },
            { v: '₹100 Cr+',l: 'Revenue',   c: '#22C55E' },
            { v: '7',       l: 'Countries', c: '#38BDF8' },
            { v: '22+',     l: 'Industries',c: '#F97316' },
          ].map((s, i, arr) => (
            <div key={s.l} style={{ flex: 1, padding: '0.55rem', textAlign: 'center', borderRight: i < arr.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.03em' }}>{s.v}</div>
              <div style={{ fontSize: '0.58rem', fontWeight: 700, color: s.c, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.l}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const Navbar = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState(megaMenuServices[0]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = (menuName) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    // Add 150ms switch delay to prevent accidental sweeping triggers
    const delay = activeDropdown ? 150 : 50; 
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(menuName);
    }, delay);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    // Add 250ms close delay so you can safely move diagonal
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250); 
  };

  const getDropdownStyle = (menuName) => ({
    opacity: activeDropdown === menuName ? 1 : 0,
    visibility: activeDropdown === menuName ? 'visible' : 'hidden',
    pointerEvents: activeDropdown === menuName ? 'auto' : 'none',
    transform: activeDropdown === menuName ? 'translateX(-50%) translateY(10px)' : 'translateX(-50%) translateY(15px)',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
  });

  return (
    <div className="nav-wrapper" style={{ position: 'fixed', top: '1rem', left: 0, right: 0, zIndex: 9999, padding: '0 1.25rem' }}>
      <nav className="nav-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.65rem 1.5rem', maxWidth: '1120px', margin: '0 auto', background: '#ffffff', borderRadius: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)', position: 'relative' }}>
        
        {/* â”€â”€ Left: Logo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo.webp" alt="Creativals Logo" style={{ height: '40px', width: 'auto' }} />
        </a>

        {/* â”€â”€ Center/Right: Desktop Navigation â”€â”€â”€ */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="mobile-hidden">
          <a href="/" style={{ color: '#374151', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}>Home</a>

          {/* Mega Menu: Elite Services */}
          <div className="nav-item-group" style={{ position: 'static' }} onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
            <button style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#374151', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', padding: 0 }}>
              Services <ChevronDown size={14} />
            </button>
            <div className="nav-mega-menu" style={{ 
              position: 'absolute',
              top: 'calc(100% + 14px)',
              left: '50%',
              transform: activeDropdown === 'services' ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)',
              width: 'min(1120px, calc(100vw - 40px))', 
              maxHeight: '80vh', 
              overflow: 'hidden',
              padding: 0, 
              display: 'flex', 
              zIndex: 999,
              background: '#ffffff',
              borderRadius: '1.25rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
              border: '1px solid #E5E7EB',
              opacity: activeDropdown === 'services' ? 1 : 0,
              visibility: activeDropdown === 'services' ? 'visible' : 'hidden',
              pointerEvents: activeDropdown === 'services' ? 'auto' : 'none',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
              
              {/* Left Side: The 3 Columns */}
              <div style={{ flex: 1, padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', background: '#ffffff' }}>
                <div style={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F3F4F6', paddingBottom: '1rem', marginBottom: '-0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#6B7280', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Growth Systems & Infrastructure</span>
                </div>
                
                {['Marketing & Growth', 'Development & Systems', 'Branding & Creative'].map(category => (
                  <div key={category}>
                    <div className="mega-menu-header" style={{ marginBottom: '0.75rem', paddingLeft: 0, color: '#111827', fontSize: '0.8rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{category}</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                      {megaMenuServices.filter(s => s.category === category).map(service => (
                        <Link 
                          to={`/services/${service.id}`}
                          onClick={handleMouseLeave}
                          key={service.id}
                          onMouseEnter={() => setActiveService(service)}
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '0.35rem 0.5rem', borderRadius: '0.5rem', cursor: 'pointer',
                            background: activeService.id === service.id ? '#F9FAFB' : 'transparent',
                            transition: 'all 0.2s ease',
                            border: activeService.id === service.id ? '1px solid #F3F4F6' : '1px solid transparent',
                            textDecoration: 'none'
                          }}
                        >
                          <span style={{ color: activeService.id === service.id ? '#7C3AED' : '#4B5563', fontWeight: activeService.id === service.id ? 700 : 500, fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <service.icon size={14} style={{ opacity: activeService.id === service.id ? 1 : 0.6 }} />
                            {service.title}
                          </span>
                          {service.badge && (
                            <span style={{ fontSize: '0.55rem', background: service.badge === 'Popular' ? '#ECFDF5' : '#F3E8FF', color: service.badge === 'Popular' ? '#059669' : '#7C3AED', padding: '0.1rem 0.35rem', borderRadius: '99px', fontWeight: 800, textTransform: 'uppercase' }}>
                              {service.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side: The Interactive Preview Panel */}
              <div style={{ width: '300px', background: '#F9FAFB', borderLeft: '1px solid #F3F4F6', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                
                <div style={{ background: '#ffffff', padding: '1rem', borderRadius: '1rem', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.04)', border: '1px solid #F3F4F6', position: 'relative', zIndex: 2, marginBottom: '1.5rem' }} key={activeService.id}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', background: '#F3E8FF', color: '#7C3AED', borderRadius: '0.6rem', marginBottom: '0.75rem' }}>
                    <activeService.icon size={18} />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 900, color: '#111827', margin: '0 0 0.35rem', lineHeight: 1.2 }}>{activeService.title}</h3>
                  <p style={{ fontSize: '0.75rem', color: '#6B7280', margin: '0 0 0.75rem', lineHeight: 1.4, fontWeight: 500 }}>{activeService.desc}</p>
                  
                  <div style={{ background: '#F9FAFB', border: '1px solid #F3F4F6', borderRadius: '0.5rem', padding: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '6px', height: '6px', background: '#10B981', borderRadius: '50%' }}></div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#111827' }}>{activeService.featureText}</span>
                  </div>
                </div>

                <div style={{ marginTop: 'auto', background: '#111827', padding: '1rem', borderRadius: '1rem', position: 'relative', zIndex: 2 }}>
                  <h4 style={{ color: 'white', fontSize: '0.85rem', margin: '0 0 0.15rem', fontWeight: 900 }}>Free Consultation</h4>
                  <p style={{ color: '#9CA3AF', fontSize: '0.7rem', margin: '0 0 0.75rem', fontWeight: 500 }}>Let's build your roadmap.</p>
                  <Link to="/contact" onClick={handleMouseLeave} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#7C3AED', color: 'white', textDecoration: 'none', padding: '0.5rem', borderRadius: '0.5rem', fontSize: '0.8rem', fontWeight: 800 }}>
                    Get Free Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* â•â•â• Mega Menu: RESULTS (World-Class) â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
          <ResultsDropdown handleMouseLeave={handleMouseLeave} activeDropdown={activeDropdown} handleMouseEnter={handleMouseEnter} />

          <div className="nav-item-group" 
               style={{ position: 'static', display: 'flex', alignItems: 'center' }}
               onMouseEnter={() => handleMouseEnter('industries')} 
               onMouseLeave={handleMouseLeave}>
            
            <button className="nav-item" style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#374151', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', padding: '0.5rem 0' }}>
              Industries <ChevronDown size={14} />
            </button>

            <div className="dropdown" style={{ 
              position: 'absolute',
              top: 'calc(100% + 14px)',
              left: '50%',
              transform: activeDropdown === 'industries' ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)',
              width: 'min(1120px, calc(100vw - 40px))', 
              maxHeight: '85vh', 
              overflowY: 'hidden', 
              padding: '32px 40px', 
              zIndex: 999,
              background: '#ffffff',
              borderRadius: '24px',
              boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.12), 0 18px 36px -18px rgba(0, 0, 0, 0.08)',
              border: '1px solid #F3F4F6',
              opacity: activeDropdown === 'industries' ? 1 : 0,
              visibility: activeDropdown === 'industries' ? 'visible' : 'hidden',
              pointerEvents: activeDropdown === 'industries' ? 'auto' : 'none',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
              
              <div style={{ marginBottom: '20px', borderBottom: '1px solid #F3F4F6', paddingBottom: '12px' }}>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#111827', margin: '0 0 2px', letterSpacing: '-0.02em' }}>Choose your business type</h2>
                <p style={{ fontSize: '0.8rem', color: '#6B7280', margin: 0, fontWeight: 500 }}>Select your sector to see your direct growth roadmap.</p>
              </div>

              <div className="dropdown-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: '28px' }}>
                
                {/* Column 1: Featured Card (Hotels & Resorts) */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Link to="/industries/hotels-resorts" onClick={handleMouseLeave} className="mega-card-featured-hover" style={{ 
                    padding: '32px', 
                    background: 'linear-gradient(135deg, #1e293b, #334155)', 
                    borderRadius: '24px', 
                    textDecoration: 'none', 
                    color: 'white', 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '20px',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.3)'
                  }}>
                    <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
                      <div style={{ width: '52px', height: '52px', background: '#7C3AED', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(124,58,237,0.3)' }}>
                        <Building size={28} color="white" />
                      </div>
                      <span style={{ fontSize: '0.6rem', fontWeight: 600, background: 'rgba(255, 255, 255, 0.08)', color: 'white', padding: '4px 10px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid rgba(255, 255, 255, 0.1)' }}>High ROI</span>
                    </div>

                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '6px', letterSpacing: '-0.03em', color: '#ffffff' }}>Hotels & Resorts</h3>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.5, color: '#e2e8f0', fontWeight: 600, margin: '0 0 24px' }}>Get more direct bookings. Reduce OTA dependency.</p>
                      
                      <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '16px 20px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#ffffff' }}>+180%</span>
                          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#4ade80', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Direct Booking Growth</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Column 2 & 3: Unified Best for your business */}
                <div style={{ gridColumn: '2 / span 2', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: '4px' }}>Best for your business</div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    
                    {/* Items Section 1 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  
                  {/* Secondary: Schools */}
                  <Link to="/industries/schools-colleges" onClick={handleMouseLeave} className="mega-card-hover" style={{ 
                    padding: '16px', borderRadius: '18px', border: '1px solid #7C3AED25', background: '#F3E8FF40', textDecoration: 'none', display: 'flex', gap: '14px', alignItems: 'center', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    animation: `fadeInUp 0.3s ease forwards 0.1s`, opacity: 0
                  }}>
                    <div style={{ width: '44px', height: '44px', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #7C3AED20', boxShadow: '0 4px 12px rgba(124, 58, 237, 0.08)' }}>
                      <GraduationCap size={22} color="#7C3AED" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Schools & Colleges</h4>
                        <span style={{ fontSize: '0.55rem', fontWeight: 600, color: '#7C3AED', background: 'rgba(124, 58, 237, 0.08)', padding: '2px 8px', borderRadius: '6px', textTransform: 'uppercase', border: '1px solid rgba(124, 58, 237, 0.1)' }}>Most Popular</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, fontWeight: 600 }}>Get more mass enrollments.</p>
                    </div>
                  </Link>

                  {/* Normal: E-commerce */}
                  <Link to="/industries/ecommerce-brands" onClick={handleMouseLeave} className="mega-card-hover" style={{ 
                    padding: '16px', borderRadius: '18px', border: '1px solid #f1f5f9', textDecoration: 'none', display: 'flex', gap: '14px', alignItems: 'center', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    animation: `fadeInUp 0.3s ease forwards 0.2s`, opacity: 0
                  }}>
                    <div style={{ width: '44px', height: '44px', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
                      <ShoppingBag size={22} color="#7C3AED" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>E-commerce Brands</h4>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, fontWeight: 600 }}>Boost your product sales.</p>
                    </div>
                  </Link>

                  {/* Normal: Healthcare */}
                  <Link to="/industries/healthcare" onClick={handleMouseLeave} className="mega-card-hover" style={{ 
                    padding: '16px', borderRadius: '18px', border: '1px solid #f1f5f9', textDecoration: 'none', display: 'flex', gap: '14px', alignItems: 'center', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    animation: `fadeInUp 0.3s ease forwards 0.3s`, opacity: 0
                  }}>
                    <div style={{ width: '44px', height: '44px', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
                      <Stethoscope size={22} color="#7C3AED" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Healthcare</h4>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, fontWeight: 600 }}>Get more patients.</p>
                    </div>
                  </Link>
                    </div>

                    {/* Items Section 2 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  
                  {/* Normal: Restaurants */}
                  <Link to="/industries/restaurants" onClick={handleMouseLeave} className="mega-card-hover" style={{ 
                    padding: '16px', borderRadius: '18px', border: '1px solid #f1f5f9', textDecoration: 'none', display: 'flex', gap: '14px', alignItems: 'center', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    animation: `fadeInUp 0.3s ease forwards 0.4s`, opacity: 0
                  }}>
                    <div style={{ width: '44px', height: '44px', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
                      <UtensilsCrossed size={22} color="#7C3AED" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>Restaurants</h4>
                        <span style={{ fontSize: '0.55rem', fontWeight: 600, color: '#7C3AED', background: 'rgba(124, 58, 237, 0.08)', padding: '2px 8px', borderRadius: '6px', textTransform: 'uppercase', border: '1px solid rgba(124, 58, 237, 0.1)' }}>Fast Growth</span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, fontWeight: 600 }}>Fill your tables daily.</p>
                    </div>
                  </Link>

                  {/* Normal: B2B */}
                  <Link to="/industries/b2b-enterprise" onClick={handleMouseLeave} className="mega-card-hover" style={{ 
                    padding: '16px', borderRadius: '18px', border: '1px solid #f1f5f9', textDecoration: 'none', display: 'flex', gap: '14px', alignItems: 'center', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    animation: `fadeInUp 0.3s ease forwards 0.5s`, opacity: 0
                  }}>
                    <div style={{ width: '44px', height: '44px', background: '#f8fafc', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
                      <Briefcase size={22} color="#7C3AED" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>B2B Enterprise</h4>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0, fontWeight: 600 }}>Dialed sales meetings.</p>
                    </div>
                  </Link>

                  <div style={{ marginTop: 'auto', background: '#1e293b', padding: '20px', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 12px 24px -8px rgba(15, 23, 42, 0.2)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: 0, fontWeight: 600 }}>Not listed above?</p>
                    <Link to="/industries" onClick={handleMouseLeave} style={{ fontSize: '0.9rem', fontWeight: 900, color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'transform 0.2s' }} className="hover:translate-x-1">
                      View all industries <ArrowRight size={16} />
                    </Link>
                  </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          <Link to="/pricing" style={{ color: '#374151', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Pricing</Link>
          {/* Mega Menu: Elite About (STORYTELLING HUB) */}
          <div className="nav-item-group" 
               style={{ position: 'static', display: 'flex', alignItems: 'center' }}
               onMouseEnter={() => handleMouseEnter('about')} 
               onMouseLeave={handleMouseLeave}>
            
            <button className="nav-item" style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#374151', fontWeight: 600, fontSize: '0.95rem', cursor: 'pointer', padding: '0.5rem 0' }}>
              About <ChevronDown size={14} />
            </button>

            <div className="dropdown" style={{ 
              position: 'absolute',
              top: 'calc(100% + 14px)',
              left: '50%',
              transform: activeDropdown === 'about' ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)',
              width: 'min(1120px, calc(100vw - 40px))', 
              maxHeight: '85vh', 
              overflowY: 'hidden', 
              padding: '32px 40px', 
              zIndex: 999,
              background: '#ffffff',
              borderRadius: '24px',
              boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.12), 0 18px 36px -18px rgba(0, 0, 0, 0.08)',
              border: '1px solid #F3F4F6',
              opacity: activeDropdown === 'about' ? 1 : 0,
              visibility: activeDropdown === 'about' ? 'visible' : 'hidden',
              pointerEvents: activeDropdown === 'about' ? 'auto' : 'none',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}>
              
              <div className="dropdown-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1.2fr) 2.5fr', gap: '32px' }}>
                
                {/* Left Side: Featured Brand Card (Inside Creativals) */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ 
                    padding: '32px', 
                    background: 'linear-gradient(135deg, #1e293b, #0f172a)', 
                    borderRadius: '24px', 
                    color: 'white', 
                    display: 'flex', 
                    flexDirection: 'column',
                    gap: '24px',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.3)'
                  }}>
                    {/* Background Soft Glow */}
                    <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                    
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>World-Class Systems</span>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', color: '#ffffff' }}>Inside Creativals</h3>
                      <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#94a3b8', fontWeight: 500, margin: 0 }}>We donâ€™t just run marketing. We build systems, products, and playbooks that scale businesses.</p>
                    </div>

                    <div style={{ position: 'relative', zIndex: 2, background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '32px', height: '32px', background: 'rgba(124, 58, 237, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Award size={18} color="#7C3AED" />
                        </div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#e2e8f0' }}>Trusted by 100+ growing brands across industries.</span>
                      </div>
                    </div>

                    <div style={{ marginTop: 'auto', position: 'relative', zIndex: 2 }}>
                      <Link to="/about-us" onClick={handleMouseLeave} style={{ color: 'white', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Explore our story <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Side: Structured Sections */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                  
                  {/* Section 1: WHO WE ARE */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Who we are</span>
                      <p style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600, margin: 0 }}>The force behind the results.</p>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {[
                        { title: 'About Us', desc: 'Our story and mission', icon: Users, href: '/about-us' },
                        { title: 'Approach', desc: 'How we think and work', icon: Target, href: '/approach' },
                        { title: 'Case Studies', desc: 'Proof of performance', icon: BarChart3, href: '/case-studies' },
                        { title: 'Join Us', desc: 'Join the movement', icon: Briefcase, href: '/join-us' }
                      ].map((item, id) => (
                        <Link to={item.href} onClick={handleMouseLeave} key={id} className="mega-card-hover" style={{ display: 'flex', gap: '12px', padding: '10px', borderRadius: '12px', textDecoration: 'none', transition: 'background 0.2s' }}>
                          <div style={{ width: '32px', height: '32px', background: '#f8fafc', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
                            <item.icon size={16} color="#475569" />
                          </div>
                          <div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>{item.title}</div>
                            <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 500 }}>{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Section 2: LAB â€” WHAT WE BUILD */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>What we build</span>
                      <p style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600, margin: 0 }}>Built in-house for scale.</p>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {[
                        { title: 'Our Products', desc: 'In-house SaaS & tools', icon: FlaskConical, href: '/products' },
                        { title: 'Automations', desc: 'Infrastructure that scales', icon: Cpu, href: '/automations' },
                        { title: 'Experiments', desc: 'What we\'re testing now', icon: Zap, href: '/experiments' }
                      ].map((item, id) => (
                        <Link to={item.href} onClick={handleMouseLeave} key={id} className="mega-card-hover" style={{ display: 'flex', gap: '12px', padding: '10px', borderRadius: '12px', textDecoration: 'none', transition: 'background 0.2s' }}>
                          <div style={{ width: '32px', height: '32px', background: '#f8fafc', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
                            <item.icon size={16} color="#475569" />
                          </div>
                          <div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>{item.title}</div>
                            <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 500 }}>{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                      <div style={{ marginTop: 'auto', padding: '12px 10px' }}>
                        <p style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 600, fontStyle: 'italic', margin: 0 }}>"Used by our clients before itâ€™s public"</p>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: ACADEMY â€” WHAT WE TEACH */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>What we teach</span>
                      <p style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600, margin: 0 }}>Playbooks behind our results.</p>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {[
                        { title: 'Academy', desc: 'Structured learning', icon: BookOpen, href: '/academy' },
                        { title: 'Playbooks', desc: 'Proven frameworks', icon: Library, href: '/playbooks' },
                        { title: 'Resources', desc: 'Guides and templates', icon: FileSearch, href: '/resources' }
                      ].map((item, id) => (
                        <Link to={item.href} onClick={handleMouseLeave} key={id} className="mega-card-hover" style={{ display: 'flex', gap: '12px', padding: '10px', borderRadius: '12px', textDecoration: 'none', transition: 'background 0.2s' }}>
                          <div style={{ width: '32px', height: '32px', background: '#f8fafc', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' }}>
                            <item.icon size={16} color="#475569" />
                          </div>
                          <div>
                            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>{item.title}</div>
                            <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 500 }}>{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                      <div style={{ marginTop: 'auto', padding: '12px 10px' }}>
                        <p style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 600, fontStyle: 'italic', margin: 0 }}>"Everything we use to scale clients"</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <Link to="/contact" style={{ color: '#374151', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}>Contact</Link>

          {/* â”€â”€ Far Right: Primary CTA â”€â”€â”€ */}
          <Link to="/contact" style={{ 
            background: '#7C3AED', color: 'white', textDecoration: 'none', 
            padding: '0.65rem 1.25rem', borderRadius: '99px', fontWeight: 700, 
            fontSize: '0.9rem', display: 'flex', flexDirection: 'column', alignItems: 'center',
            boxShadow: '0 4px 14px 0 rgba(124, 58, 237, 0.39)', transition: 'background 0.2s',
            marginLeft: '0.5rem'
          }}>
            Get Free Audit
          </Link>
        </div>

        {/* â”€â”€ Mobile Hamburger Icon â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <button
          className="desktop-hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} color="#111827" /> : <Menu size={26} color="#111827" />}
        </button>

      </nav>

      {/* â”€â”€ Mobile Menu â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
      {isOpen && (
        <div style={{ position: 'fixed', top: '72px', left: 0, width: '100%', height: 'calc(100vh - 72px)', background: 'rgba(5,8,18,0.97)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', zIndex: 9998, overflowY: 'auto', padding: '1.5rem 1.25rem 3rem', boxSizing: 'border-box' }}>

          {/* Primary CTA */}
          <Link to="/contact" onClick={() => setIsOpen(false)} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(135deg,#7C3AED,#A855F7)', color: 'white', textDecoration: 'none',
            padding: '1.1rem', borderRadius: '1rem', fontWeight: 800, fontSize: '1.05rem',
            boxShadow: '0 0 40px -10px rgba(124,58,237,0.7)', marginBottom: '1.75rem', gap: '0.2rem'
          }}>
            ⚡ Get Free Audit
            <span style={{ fontSize: '0.75rem', fontWeight: 500, opacity: 0.8 }}>Takes 30 seconds · 100% free</span>
          </Link>

          {/* Primary Nav Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1rem' }}>
            {[
              { label: 'Services',   href: '/services',   Icon: Zap,          color: '#A855F7', desc: '30+ growth services' },
              { label: 'Results',    href: '/results',    Icon: TrendingUp,   color: '#22C55E', desc: '160+ businesses scaled' },
              { label: 'Industries', href: '/industries', Icon: Building2,    color: '#38BDF8', desc: '22+ verticals covered' },
              { label: 'Pricing',    href: '/pricing',    Icon: BarChart2,    color: '#F59E0B', desc: 'Transparent plans' },
              { label: 'About',      href: '/about-us',   Icon: Users,        color: '#EC4899', desc: 'Our story & team' },
              { label: 'Contact',    href: '/contact',    Icon: MessageCircle,color: '#7C3AED', desc: 'Chat with us now' },
            ].map(({ label, href, Icon, color, desc }) => (
              <Link key={label} to={href} onClick={() => setIsOpen(false)} style={{
                display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 1rem',
                borderRadius: '0.875rem', textDecoration: 'none', background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)', transition: 'background 0.2s',
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}18`, border: `1px solid ${color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={17} color={color} />
                </div>
                <div>
                  <div style={{ color: '#F1F5F9', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.2 }}>{label}</div>
                  <div style={{ color: '#64748B', fontSize: '0.75rem', fontWeight: 500 }}>{desc}</div>
                </div>
                <ArrowRight size={14} color="#475569" style={{ marginLeft: 'auto', flexShrink: 0 }} />
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', margin: '1rem 0' }} />

          {/* Contact channels */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a href="https://wa.me/917997001700?text=Hi! I want a free audit." target="_blank" rel="noreferrer"
              onClick={() => setIsOpen(false)}
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.8rem', background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '0.75rem', color: '#4ADE80', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none' }}>
              <MessageCircle size={15} /> WhatsApp
            </a>
            <a href="mailto:hello@creativals.com"
              onClick={() => setIsOpen(false)}
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.8rem', background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.25)', borderRadius: '0.75rem', color: '#A78BFA', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none' }}>
              <Mail size={15} /> Email
            </a>
          </div>

          {/* Trust strip */}
          <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['160+ Clients', '7 Countries', '₹1B+ Revenue'].map(t => (
              <span key={t} style={{ fontSize: '0.72rem', color: '#475569', fontWeight: 600 }}>✓ {t}</span>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default Navbar;
