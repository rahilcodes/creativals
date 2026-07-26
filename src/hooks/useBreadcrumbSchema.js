import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { breadcrumbSchema } from '../config/schema.js';

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
// Data files are imported dynamically so this eager hook doesn't pull all
// service/industry data into the entry bundle (they land in the shared chunks
// the service/industry pages already use).
export const useBreadcrumbSchema = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let cancelled = false;

    const resolveName = async (seg, prevSeg) => {
      if (STATIC_LABELS[seg]) return STATIC_LABELS[seg];
      if (prevSeg === 'services') {
        const { getServiceBySlug } = await import('../data/allServices');
        return getServiceBySlug(seg)?.title;
      }
      if (prevSeg === 'industries') {
        const { getIndustryBySlug } = await import('../data/industries');
        return getIndustryBySlug(seg)?.title;
      }
      return null;
    };

    (async () => {
      const segments = pathname.split('/').filter(Boolean);
      const items = [{ name: 'Home', path: '/' }];
      let path = '';
      for (let i = 0; i < segments.length; i++) {
        path += `/${segments[i]}`;
        const name = await resolveName(segments[i], segments[i - 1]);
        items.push({ name: name || titleCase(segments[i]), path });
      }
      if (cancelled) return;

      let tag = document.getElementById('breadcrumb-schema');
      if (!tag) {
        tag = document.createElement('script');
        tag.id = 'breadcrumb-schema';
        tag.type = 'application/ld+json';
        document.head.appendChild(tag);
      }
      tag.text = JSON.stringify(breadcrumbSchema(items));
    })();

    return () => { cancelled = true; };
  }, [pathname]);
};
