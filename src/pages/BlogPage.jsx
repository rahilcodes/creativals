import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const CATEGORIES = ['All', 'App Development', 'Web Engineering', 'E-Commerce', 'SEO & Local', 'Web Portals'];

const ARTICLES = [
  {
    id: 1,
    slug: 'app-development-companies-hyderabad-guide',
    title: 'App Development Companies in Hyderabad: 2026 Architecture & Cost Guide',
    excerpt: 'A comprehensive breakdown of native vs cross-platform React Native development, backend API scalability, and true cost estimates for Hyderabad businesses.',
    category: 'App Development',
    readTime: '6 min read',
    date: 'August 2026',
    featured: true,
    tag: 'FEATURED GUIDE',
  },
  {
    id: 2,
    slug: 'custom-web-development-vs-templates',
    title: 'Custom Web Development vs Templates: What Actually Scales in 2026?',
    excerpt: 'Why pre-made themes cost more in lost conversions and slow load times than building clean, conversion-engineered custom websites.',
    category: 'Web Engineering',
    readTime: '5 min read',
    date: 'August 2026',
    featured: false,
  },
  {
    id: 3,
    slug: 'shopify-vs-woocommerce-conversion-breakdown',
    title: 'Shopify vs WooCommerce: The High-Volume Conversion Playbook',
    excerpt: 'Comparing cart recovery flows, Indian payment gateway integrations (Razorpay, COD verification), and mobile checkout speeds.',
    category: 'E-Commerce',
    readTime: '7 min read',
    date: 'July 2026',
    featured: false,
  },
  {
    id: 4,
    slug: 'ranking-local-commercial-keywords-hyderabad',
    title: 'How to Rank #1 for Commercial Local Keywords in Hyderabad',
    excerpt: 'Step-by-step strategy on localized JSON-LD schema, cluster hub architecture, and Core Web Vitals optimization.',
    category: 'SEO & Local',
    readTime: '8 min read',
    date: 'July 2026',
    featured: false,
  },
  {
    id: 5,
    slug: 'enterprise-web-portal-architecture',
    title: 'Enterprise Web Portals: Security, Concurrency & Matching Engines',
    excerpt: 'How we build high-concurrency matrimonial, travel, and B2B portals with role-based access control and instant search.',
    category: 'Web Portals',
    readTime: '6 min read',
    date: 'June 2026',
    featured: false,
  },
  {
    id: 6,
    slug: 'speed-and-conversion-flaws-mobile-traffic',
    title: '5 Speed & UX Flaws Killing Mobile Web Conversions (And Fixes)',
    excerpt: 'Over 60% of traffic in India is mobile. Fix these 5 critical load and layout bugs to instantly improve lead quality.',
    category: 'Web Engineering',
    readTime: '4 min read',
    date: 'June 2026',
    featured: false,
  },
];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  useSEO({
    title: 'App Development & Playbooks Hyderabad | Creativals',
    description: 'Growth guides, web engineering insights & app development breakdowns from Hyderabad\'s top digital execution agency.',
    keywords: 'app development companies in hyderabad, app developers in hyderabad, designers in hyderabad, web development blog hyderabad, software services agency hyderabad',
  });

  const filteredArticles = activeCategory === 'All' 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category === activeCategory);

  const featuredPost = ARTICLES.find(a => a.featured);

  return (
    <>
      {/* 1. HERO SECTION — Dark Ink */}
      <section style={{ background: '#17151A', color: '#F4F2EC', borderBottom: '4px solid #17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 })}>
              <span className="cx-dot" />
              Creativals Insights & Playbooks
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h1" style={{ marginBottom: 28, maxWidth: 840 }}>
              Engineering,<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>growth & code.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: 0, maxWidth: 620, fontSize: 18, lineHeight: 1.6, color: 'rgba(244,242,236,.85)' }}>
              Deep-dive technical guides on app development in Hyderabad, custom web architecture, e-commerce conversion engines, and local SEO domination.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE SECTION — Yellow Banner */}
      {featuredPost && (
        <section style={{ background: '#FFD84D', color: '#17151A', borderBottom: '4px solid #17151A' }}>
          <div className="cx-wrap cx-section">
            <Reveal><SecNum n="01" label="Featured Breakdown" yellow /></Reveal>
            <div className="cx-grid2" style={{ alignItems: 'center', gap: 48 }}>
              <Reveal delay={60}>
                <div>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 }}>
                    <span className="cx-tag cx-tag-ink">{featuredPost.tag}</span>
                    <span style={mono({ fontSize: 12, fontWeight: 700 })}>{featuredPost.readTime} · {featuredPost.date}</span>
                  </div>
                  <h2 className="cx-display cx-h2" style={{ marginBottom: 20, color: '#17151A' }}>
                    {featuredPost.title}
                  </h2>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(23,21,26,.85)', marginBottom: 28 }}>
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="cx-btn cx-btn-ink"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div style={{ background: '#17151A', color: '#F4F2EC', padding: 36, borderRadius: 16, border: '2px solid #17151A' }}>
                  <div style={mono({ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FFD84D', marginBottom: 16 })}>
                    Key takeaways inside
                  </div>
                  <ul style={{ margin: 0, paddingLeft: 20, fontSize: 15, lineHeight: 1.8, color: 'rgba(244,242,236,.85)' }}>
                    <li>Cross-Platform vs Native cost comparisons for 2026.</li>
                    <li>How to structure scalable Node.js & React Native backends.</li>
                    <li>Security protocols required for enterprise app store approvals.</li>
                    <li>WhatsApp lead integration & direct CRM connection.</li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* 3. ARTICLES GRID — Cream Section */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal><SecNum n="02" label="Latest Insights" /></Reveal>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 48 }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cx-tag ${activeCategory === cat ? 'cx-tag-ink' : ''}`}
                style={{
                  cursor: 'pointer',
                  border: '1.5px solid #17151A',
                  background: activeCategory === cat ? '#17151A' : 'transparent',
                  color: activeCategory === cat ? '#F4F2EC' : '#17151A',
                  padding: '8px 18px',
                  fontSize: 13,
                  borderRadius: 999,
                  fontWeight: 600,
                  transition: 'all .2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="cx-grid3">
            {filteredArticles.map((article, index) => (
              <Reveal key={article.id} delay={index * 90}>
                <div
                  className="cx-card"
                  style={{
                    height: '100%',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    background: '#FFFFFF',
                    border: '2px solid #17151A',
                    borderRadius: 16,
                    padding: 28,
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                      <span className="cx-tag cx-tag-indigo">{article.category}</span>
                      <span style={mono({ fontSize: 11, color: 'rgba(23,21,26,.6)' })}>{article.readTime}</span>
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 14px', lineHeight: 1.35, letterSpacing: '-0.01em' }}>
                      {article.title}
                    </h3>
                    <p style={{ margin: '0 0 24px', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(23,21,26,.72)' }}>
                      {article.excerpt}
                    </p>
                  </div>

                  <Link
                    to={`/blog/${article.slug}`}
                    className="cx-flink"
                    style={{ fontWeight: 700, fontSize: 14, color: '#4F46E5' }}
                  >
                    Read Full Article →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION — Dark Ink */}
      <section style={{ background: '#17151A', color: '#F4F2EC' }}>
        <div className="cx-wrap cx-section" style={{ textAlign: 'center' }}>
          <Reveal>
            <div style={mono({ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 24 })}>
              <span className="cx-dot" />
              Build with Creativals
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="cx-display cx-h2-xl" style={{ marginBottom: 20 }}>
              Need a custom web or app system<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>built for your business?</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 auto 36px', maxWidth: 520, fontSize: 17, lineHeight: 1.6, color: 'rgba(244,242,236,.75)' }}>
              From high-converting custom websites to complex mobile apps and web portals, we build systems that scale.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a href={waLink('Hi! I visited your blog and want to consult on a web/app development project.')} target="_blank" rel="noreferrer" className="cx-btn cx-btn-lg cx-btn-yellow">
              Get Free Growth Audit →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
