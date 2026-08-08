// ─── JSON-LD schema builders ─────────────────────────────────────────────────
// All structured data is built from the central org config (organization.js).
// Policy (CLAUDE.md): Organization + LocalBusiness(ProfessionalService) on the
// homepage; Service on service pages; BreadcrumbList sitewide; FAQPage only
// where a real FAQ block renders. NO Review/AggregateRating, NO Person schema
// (both deferred until verified sources / founder sign-off exist).

import { ORG } from './organization.js';

const BASE = ORG.url;

// Organization + LocalBusiness. ProfessionalService is a LocalBusiness subtype,
// so ["Organization","ProfessionalService"] covers both requirements.
export const orgSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${BASE}/#organization`,
    name: ORG.name,
    url: BASE,
    logo: ORG.logo,
    image: ORG.logo,
    description: ORG.description,
    foundingDate: ORG.foundingDate,
    address: { '@type': 'PostalAddress', ...ORG.address },
    areaServed: [
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'Country', name: 'India' },
    ],
    sameAs: ORG.sameAs,
  };
  if (ORG.email) schema.email = ORG.email;
  if (ORG.phone) schema.telephone = ORG.phone; // omitted until TODO_PHONE is set
  return schema;
};

export const serviceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  serviceType: service.title,
  description: service.metaDesc || service.heroSub,
  url: `${BASE}/services/${service.slug}`,
  provider: {
    '@type': 'Organization',
    '@id': `${BASE}/#organization`,
    name: ORG.name,
    url: BASE,
  },
  areaServed: [
    { '@type': 'City', name: 'Hyderabad' },
    { '@type': 'Country', name: 'India' },
  ],
});

// items: [{ name, path }] — path is site-relative ('/services/seo')
export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.path === '/' ? `${BASE}/` : `${BASE}${it.path}`,
  })),
});

// ContactPage schema — references the canonical Organization by @id instead of
// duplicating org data (the full object lives on the homepage).
export const contactPageSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${BASE}/contact`,
  url: `${BASE}/contact`,
  name: `Contact ${ORG.name}`,
  about: { '@id': `${BASE}/#organization` },
});

// Returns null when there are no FAQs so callers can .filter(Boolean).
export const faqSchema = (faqs) =>
  Array.isArray(faqs) && faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

// Article schema for blog posts.
export const articleSchema = (article) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.metaDesc || article.excerpt,
  datePublished: article.date,
  dateModified: article.date,
  url: `${BASE}/blog/${article.slug}`,
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/blog/${article.slug}` },
  author: {
    '@type': 'Organization',
    '@id': `${BASE}/#organization`,
    name: ORG.name,
    url: BASE,
  },
  publisher: {
    '@type': 'Organization',
    '@id': `${BASE}/#organization`,
    name: ORG.name,
    url: BASE,
    logo: { '@type': 'ImageObject', url: ORG.logo },
  },
});
