import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal, SecNum, waLink } from '../components/ui/primitives';

const mono = (extra = {}) => ({ fontFamily: "'IBM Plex Mono',monospace", ...extra });

const BlogArticleTemplate = ({ article, allArticles }) => {
  const related = (article.relatedSlugs || [])
    .map((s) => allArticles.find((a) => a.slug === s))
    .filter(Boolean);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: '#17151A', color: '#F4F2EC', borderBottom: '4px solid #17151A' }}>
        <div className="cx-wrap cx-section">
          <Reveal>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
              <Link to="/blog" className="cx-flink" style={{ color: 'rgba(244,242,236,.6)', fontSize: 13 }}>← Back to Blog</Link>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(244,242,236,.3)' }} />
              <span className="cx-tag cx-tag-indigo">{article.category}</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="cx-display cx-h2" style={{ marginBottom: 20, maxWidth: 820 }}>
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <div style={mono({ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontSize: 12, color: 'rgba(244,242,236,.6)' })}>
              <span>{article.dateDisplay}</span>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(244,242,236,.3)' }} />
              <span>{article.readTime}</span>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(244,242,236,.3)' }} />
              <span>By Creativals</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE BODY ─────────────────────────────────────────── */}
      <section style={{ background: '#F4F2EC', color: '#17151A' }}>
        <div className="cx-wrap cx-section">
          <div className="cx-article-layout" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, maxWidth: 820 }}>

            {/* Table of Contents */}
            <Reveal>
              <nav
                aria-label="Table of contents"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #17151A',
                  borderRadius: 16,
                  padding: '24px 28px',
                  marginBottom: 8,
                }}
              >
                <div style={mono({ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 700 })}>
                  In this article
                </div>
                <ol style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {article.sections.map((sec) => (
                    <li key={sec.id}>
                      <a
                        href={`#${sec.id}`}
                        style={{ color: '#4F46E5', textDecoration: 'none', fontSize: 14.5, fontWeight: 500, lineHeight: 1.5 }}
                      >
                        {sec.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </Reveal>

            {/* Article Sections */}
            {article.sections.map((sec, i) => (
              <Reveal key={sec.id} delay={i * 60}>
                <article id={sec.id} style={{ scrollMarginTop: 100 }}>
                  <h2 style={{
                    fontSize: 'clamp(22px, 2.6vw, 28px)',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    letterSpacing: '-0.015em',
                    margin: '0 0 18px',
                    paddingTop: 8,
                    borderTop: i > 0 ? '1px solid rgba(23,21,26,.12)' : 'none',
                  }}>
                    {sec.heading}
                  </h2>
                  <div
                    className="cx-article-body"
                    style={{ fontSize: 16.5, lineHeight: 1.75, color: 'rgba(23,21,26,.85)' }}
                    dangerouslySetInnerHTML={{ __html: sec.body }}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED ARTICLES ─────────────────────────────────────── */}
      {related.length > 0 && (
        <section style={{ background: '#FFFFFF', color: '#17151A', borderTop: '4px solid #17151A' }}>
          <div className="cx-wrap cx-section">
            <Reveal><SecNum n="—" label="Related Reads" /></Reveal>
            <div className="cx-grid2" style={{ gap: 28 }}>
              {related.map((rel, i) => (
                <Reveal key={rel.slug} delay={i * 90}>
                  <Link
                    to={`/blog/${rel.slug}`}
                    className="cx-card"
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      color: 'inherit',
                      background: '#F4F2EC',
                      border: '2px solid #17151A',
                      borderRadius: 16,
                      padding: 28,
                      transition: 'transform .15s, box-shadow .15s',
                    }}
                  >
                    <span className="cx-tag cx-tag-indigo" style={{ marginBottom: 14, display: 'inline-block' }}>{rel.category}</span>
                    <h3 style={{ fontSize: 19, fontWeight: 800, margin: '0 0 10px', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                      {rel.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: 'rgba(23,21,26,.65)' }}>
                      {rel.excerpt}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────── */}
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
              Ready to build something<br />
              <span style={{ color: '#FFD84D', fontStyle: 'italic' }}>that actually scales?</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ margin: '0 auto 36px', maxWidth: 520, fontSize: 17, lineHeight: 1.6, color: 'rgba(244,242,236,.75)' }}>
              We turn architecture decisions into deployed, revenue-generating systems. Strategy, code, and growth — unified.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href={waLink(`Hi! I just read your article "${article.title}" and would like to discuss a project.`)}
              target="_blank"
              rel="noreferrer"
              className="cx-btn cx-btn-lg cx-btn-yellow"
            >
              Get Free Growth Audit →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default BlogArticleTemplate;
