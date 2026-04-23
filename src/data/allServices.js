// Unified service data — imports all 30 services
import baseServices from './services';
import extraServices from './servicesExtra';
import devServices from './servicesDev';
import brandingServices from './servicesBranding';

const allServices = [...baseServices, ...extraServices, ...devServices, ...brandingServices];

export const getServiceBySlug = (slug) => allServices.find(s => s.slug === slug);
export const getRelatedServices = (slugs) => allServices.filter(s => slugs.includes(s.slug));
export default allServices;
