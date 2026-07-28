import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { serviceSchema, faqSchema } from '../config/schema';
import { getServiceBySlug } from '../data/allServices';
import ServicePageTemplate from '../templates/ServicePageTemplate';

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  // Template keeps every title ≤60 chars (longest service title is 32 chars) and
  // mentions the service once. Data files may override via metaTitle/metaDesc
  // (used by the keyword-mapped on-page pass). Title case preserved — never
  // lowercase service names (breaks SEO/UI/UX/CRM/API/AI casing).
  const localTitle = service ? service.metaTitle || `${service.title} in Hyderabad | Creativals` : '';
  const localDesc = service
    ? service.metaDesc ||
      `${service.title} in Hyderabad by Creativals — strategy, execution, and measurable results for local businesses and global brands.`
    : '';

  useSEO({
    title: localTitle,
    description: localDesc,
    keywords: service ? `${service.title} Hyderabad, ${service.title} agency Hyderabad, ${service.title} company in Hyderabad` : '',
    // Service schema + FAQPage (every service page renders a real FAQ block)
    schema: service ? [serviceSchema(service), faqSchema(service.faqs)].filter(Boolean) : null,
  });

  if (!service) return <Navigate to="/services" replace />;

  return <ServicePageTemplate service={service} />;
};

export default ServicePage;
