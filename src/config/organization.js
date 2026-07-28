// ─── Creativals — central organization config ────────────────────────────────
// Single source of truth for ALL business facts used in structured data, meta
// tags, and citations. Update HERE ONLY — never inline org data in components.
// Facts must match CLAUDE.md exactly. Never invent data.

// Business phone is NOT finalized yet (open item with the founders).
// Leave empty — schema builders omit `telephone` while this is empty.
// When the permanent number is confirmed, set it here in E.164 form (+91...).
export const TODO_PHONE = '';

export const ORG = {
  name: 'Creativals',
  url: 'https://creativals.com',
  logo: 'https://creativals.com/logo.webp',
  email: 'hello@creativals.com',
  phone: TODO_PHONE,
  foundingDate: '2019',
  description:
    'Creativals is a Hyderabad-based agency for custom website development, e-commerce, UI/UX, SEO, Google Ads, branding, and AI automation.',
  address: {
    streetAddress:
      'B 609, B-Block, Asian Sun City, Behind AMB Mall, Forest Dept Colony, Kothaguda X Road, Kondapur',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500084',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.instagram.com/creativals.agency/',
    'https://www.facebook.com/people/Creativalsagency/61560510279989/',
    'https://www.linkedin.com/company/creativals-digital-marketing-agency/',
    'https://www.youtube.com/@creativalsagency',
  ],
};

// ── Display/NAP helpers (single source for every visible address render) ─────
export const FULL_ADDRESS = `${ORG.address.streetAddress}, ${ORG.address.addressLocality}, ${ORG.address.addressRegion} ${ORG.address.postalCode}, India`;

const MAPS_QUERY = encodeURIComponent(`${ORG.name}, ${FULL_ADDRESS}`);
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`;
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=15&output=embed`;
