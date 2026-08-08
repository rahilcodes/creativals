// Unified service data — imports all services
import baseServices from './services.js';
import extraServices from './servicesExtra.js';
import devServices from './servicesDev.js';
import brandingServices from './servicesBranding.js';

const allServices = [...baseServices, ...extraServices, ...devServices, ...brandingServices];

export const getServiceBySlug = (slug) => {
  let targetSlug = slug;
  if (slug === 'ecommerce-stores') targetSlug = 'ecommerce-development';
  if (slug === 'web-applications') targetSlug = 'web-app-development';
  return allServices.find(s => s.slug === targetSlug);
};

export const getRelatedServices = (slugs) => allServices.filter(s => {
  if (!Array.isArray(slugs)) return false;
  return slugs.includes(s.slug) ||
    (s.slug === 'ecommerce-development' && slugs.includes('ecommerce-stores')) ||
    (s.slug === 'web-app-development' && slugs.includes('web-applications'));
});

export default allServices;

