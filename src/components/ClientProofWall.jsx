import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Globe, MessageCircle } from 'lucide-react';
import {
  ALL_CLIENTS, INDUSTRIES, COUNTRIES, SERVICES,
  INDUSTRY_COLORS, SERVICE_LABEL_COLORS, COUNTRY_FLAGS,
} from '../data/clientData';

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

// ── Client Card ───────────────────────────────────────────────────────────────
const ClientCard = ({ client, index }) => {
  const [hovered, setHovered] = useState(false);
  const industryColor = INDUSTRY_COLORS[client.industry] || '#A855F7';
  const isInternational = client.country !== 'India';
  const flag = COUNTRY_FLAGS[client.country] || '🌐';

  const waMsg = encodeURIComponent(
    `Hi! I saw ${client.name} on your results page and want similar results for my business.`
  );
  const waUrl = `https://wa.me/917997001700?text=${waMsg}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.93 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.93 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.35) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 16,
        border: `1px solid ${hovered ? industryColor + '55' : 'rgba(255,255,255,.06)'}`,
        background: hovered
          ? `linear-gradient(145deg, ${industryColor}10, rgba(255,255,255,.02))`
          : 'rgba(255,255,255,.02)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color .25s, background .25s, transform .25s, box-shadow .25s',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 40px -12px ${industryColor}33` : 'none',
        cursor: 'default',
      }}
    >
      {/* Subtle industry color top bar */}
      <div style={{ height: 2, background: `linear-gradient(90deg, ${industryColor}cc, transparent)`, borderRadius: '16px 16px 0 0' }} />

      {/* Result badge (top-right) */}
      {client.badge && (
        <div style={{
          position: 'absolute', top: 12, right: 12,
          background: `${client.badge.color}18`,
          border: `1px solid ${client.badge.color}44`,
          color: client.badge.color,
          fontSize: '.6rem', fontWeight: 800,
          padding: '.18rem .55rem', borderRadius: '99px',
          letterSpacing: '.04em', textTransform: 'uppercase',
          boxShadow: `0 0 10px ${client.badge.color}22`,
        }}>
          🏅 {client.badge.text}
        </div>
      )}

      {/* Card body */}
      <div style={{ padding: `0.75rem 1.1rem ${hovered ? '0.5rem' : '1.1rem'}`, display: 'flex', flexDirection: 'column', gap: '0.65rem', transition: 'padding .25s' }}>
        {/* Avatar + Name row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{
            width: 42, height: 42, borderRadius: 12, flexShrink: 0,
            background: `linear-gradient(135deg, ${industryColor}cc, ${industryColor}66)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 900, fontSize: '0.85rem',
            boxShadow: `0 4px 14px ${industryColor}44`,
          }}>
            {getInitials(client.name)}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              color: 'white', fontWeight: 800, fontSize: '0.88rem', lineHeight: 1.2,
              marginBottom: '0.18rem',
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              paddingRight: client.badge ? '80px' : '0',
            }}>
              {client.name}
            </div>
            <div style={{ fontSize: '.66rem', fontWeight: 600, color: '#4B5563', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span>{flag} {client.country}</span>
              <span style={{ color: '#2D3748' }}>·</span>
              <span style={{ color: industryColor, fontWeight: 700 }}>{client.industry}</span>
            </div>
          </div>
        </div>

        {/* International badge */}
        {isInternational && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.3rem',
            background: 'rgba(56,189,248,.08)', border: '1px solid rgba(56,189,248,.2)',
            color: '#38BDF8', fontSize: '.6rem', fontWeight: 800,
            padding: '.2rem .5rem', borderRadius: '99px', letterSpacing: '.05em',
            textTransform: 'uppercase', alignSelf: 'flex-start',
          }}>
            <Globe size={9} /> International
          </div>
        )}

        {/* Result */}
        <p style={{ color: '#94A3B8', fontSize: '.79rem', lineHeight: 1.55, margin: 0 }}>
          {client.result}
        </p>

        {/* Service tags */}
        {client.services.length > 0 && (
          <div style={{ display: 'flex', gap: '.3rem', flexWrap: 'wrap' }}>
            {client.services.map(s => (
              <span key={s} style={{
                fontSize: '.58rem', fontWeight: 800,
                color: SERVICE_LABEL_COLORS[s] || '#A855F7',
                background: `${SERVICE_LABEL_COLORS[s] || '#A855F7'}12`,
                padding: '.18rem .45rem', borderRadius: '6px',
                border: `1px solid ${SERVICE_LABEL_COLORS[s] || '#A855F7'}25`,
                textTransform: 'uppercase', letterSpacing: '.04em',
              }}>{s}</span>
            ))}
          </div>
        )}
      </div>

      {/* Hover CTA — slides up */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            style={{ padding: '0 1.1rem 1rem' }}
          >
            <a href={waUrl} target="_blank" rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.45rem',
                padding: '.55rem', borderRadius: 10,
                background: `${industryColor}18`, border: `1px solid ${industryColor}44`,
                color: industryColor, fontWeight: 800, fontSize: '.75rem',
                textDecoration: 'none', transition: 'background .2s',
                letterSpacing: '.01em',
              }}
              onMouseEnter={e => e.currentTarget.style.background = `${industryColor}28`}
              onMouseLeave={e => e.currentTarget.style.background = `${industryColor}18`}
            >
              <MessageCircle size={13} /> Want similar results? →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ── Filter Pill ───────────────────────────────────────────────────────────────
const FilterPill = ({ label, active, onClick }) => (
  <button onClick={onClick} style={{
    padding: '.38rem .95rem', borderRadius: '99px',
    border: `1px solid ${active ? '#A855F7' : 'rgba(255,255,255,.09)'}`,
    background: active ? 'rgba(168,85,247,.15)' : 'rgba(255,255,255,.02)',
    color: active ? '#C4B5FD' : '#64748B',
    fontWeight: 700, fontSize: '.73rem', cursor: 'pointer',
    transition: 'all .18s', fontFamily: 'inherit', whiteSpace: 'nowrap',
  }}>
    {label}
  </button>
);

// ── Main Component ────────────────────────────────────────────────────────────
const ClientProofWall = () => {
  const [industry, setIndustry] = useState('All');
  const [country,  setCountry]  = useState('All');
  const [service,  setService]  = useState('All');
  const [search,   setSearch]   = useState('');

  const filtered = useMemo(() => ALL_CLIENTS.filter(c => {
    if (industry !== 'All' && c.industry !== industry) return false;
    if (country  !== 'All' && c.country  !== country)  return false;
    if (service  !== 'All' && !c.services.includes(service)) return false;
    if (search && !c.name.toLowerCase().includes(search.toLowerCase())
               && !c.result.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }), [industry, country, service, search]);

  const resetFilters = () => { setIndustry('All'); setCountry('All'); setService('All'); setSearch(''); };
  const hasFilters = industry !== 'All' || country !== 'All' || service !== 'All' || search;

  return (
    <div id="client-wall" style={{ padding: '4rem 2rem 5rem' }}>
      {/* Section heading */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.28rem .9rem', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.1)', borderRadius: '99px', marginBottom: '1rem' }}>
          <span style={{ fontSize: '.72rem', fontWeight: 800, color: '#94A3B8', letterSpacing: '.07em', textTransform: 'uppercase' }}>The Proof Wall</span>
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .1 }}
          style={{ color: 'white', fontWeight: 900, fontSize: 'clamp(1.8rem,3vw,2.4rem)', letterSpacing: '-.04em', lineHeight: 1.1, margin: '0 0 .75rem' }}>
          Every business we've transformed.
        </motion.h2>
        <p style={{ color: '#64748B', fontSize: '.92rem', maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
          Filter by industry, country, or service to find businesses just like yours.
        </p>
      </div>

      {/* ── Filters ───────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto 2rem' }}>
        {/* Search bar */}
        <div style={{ position: 'relative', maxWidth: 360, marginBottom: '1.25rem' }}>
          <Search size={15} color="#64748B" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search a client or result…"
            style={{ width: '100%', padding: '.72rem 1rem .72rem 2.4rem', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, color: 'white', fontSize: '.88rem', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box' }}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{ position: 'absolute', right: '.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#64748B', display: 'flex' }}>
              <X size={13} />
            </button>
          )}
        </div>

        {/* Country pills */}
        <div style={{ display: 'flex', gap: '.45rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '.6rem' }}>
          <span style={{ fontSize: '.65rem', fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '.06em', minWidth: 56 }}>Country</span>
          {COUNTRIES.map(c => (
            <FilterPill key={c} label={c === 'All' ? 'All Countries' : `${COUNTRY_FLAGS[c] || ''} ${c}`} active={country === c} onClick={() => setCountry(c)} />
          ))}
        </div>
        {/* Service pills */}
        <div style={{ display: 'flex', gap: '.45rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '.6rem' }}>
          <span style={{ fontSize: '.65rem', fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '.06em', minWidth: 56 }}>Service</span>
          {SERVICES.map(s => (
            <FilterPill key={s} label={s === 'All' ? 'All Services' : s} active={service === s} onClick={() => setService(s)} />
          ))}
        </div>
        {/* Industry pills */}
        <div style={{ display: 'flex', gap: '.45rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '.65rem', fontWeight: 800, color: '#374151', textTransform: 'uppercase', letterSpacing: '.06em', minWidth: 56 }}>Industry</span>
          <div style={{ display: 'flex', gap: '.45rem', flexWrap: 'wrap' }}>
            {INDUSTRIES.map(i => (
              <FilterPill key={i} label={i === 'All' ? 'All Industries' : i} active={industry === i} onClick={() => setIndustry(i)} />
            ))}
          </div>
        </div>

        {/* Results count + reset */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,.05)' }}>
          <span style={{ color: '#64748B', fontSize: '.83rem' }}>
            Showing <strong style={{ color: '#A855F7' }}>{filtered.length}</strong> of {ALL_CLIENTS.length} clients
          </span>
          {hasFilters && (
            <button onClick={resetFilters} style={{ display: 'flex', alignItems: 'center', gap: '.4rem', color: '#64748B', fontSize: '.78rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              <X size={12} /> Clear filters
            </button>
          )}
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(268px, 1fr))', gap: '1.1rem' }}>
          <AnimatePresence>
            {filtered.map((client, i) => (
              <ClientCard key={client.name} client={client} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem 2rem', color: '#4B5563', fontSize: '.95rem' }}>
            No clients match this filter.{' '}
            <button onClick={resetFilters} style={{ color: '#A855F7', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientProofWall;
