import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { breadcrumbSchema } from '../config/schema.js';
import { getServiceBySlug } from '../data/allServices';
import { getIndustryBySlug } from '../data/industries';

const STATIC_LABELS = {
  services: 'Services',
  industries: 'Industries',
  results: 'Results',
  pricing: 'Pricing',
  'about-us': 'About Us',
  approach: 'Approach',
  'join-us': 'Join Us',
  products: 'Products',
  automations: 'Automations',
  experiments: 'Experiments',
  academy: 'Academy',
  playbooks: 'Playbooks',
  resources: 'Resources',
  contact: 'Contact',
  'case-studies': 'Case Studies',
};

const titleCase = (slug) =>
  slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

// Injects a BreadcrumbList JSON-LD script for the current route. Mounted once
// in PageLayout so every page carries breadcrumbs without per-page wiring.
// Uses its own <script> tag (separate from useSEO's #dynamic-schema).
export const useBreadcrumbSchema = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const segments = pathname.split('/').filter(Boolean);
    const items = [{ name: 'Home', path: '/' }];
    let path = '';
    segments.forEach((seg, i) => {
      path += `/${seg}`;
      let name = STATIC_LABELS[seg];
      if (!name && segments[i - 1] === 'services') name = getServiceBySlug(seg)?.title;
      if (!name && segments[i - 1] === 'industries') name = getIndustryBySlug(seg)?.title;
      items.push({ name: name || titleCase(seg), path });
    });

    let tag = document.getElementById('breadcrumb-schema');
    if (!tag) {
      tag = document.createElement('script');
      tag.id = 'breadcrumb-schema';
      tag.type = 'application/ld+json';
      document.head.appendChild(tag);
    }
    tag.text = JSON.stringify(breadcrumbSchema(items));
  }, [pathname]);
};
