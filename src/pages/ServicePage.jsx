import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { serviceSchema, faqSchema } from '../config/schema';
import { getServiceBySlug } from '../data/allServices';
import ServicePageTemplate from '../templates/ServicePageTemplate';

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  const localTitle = service ? `${service.title} in Hyderabad | Guaranteed Rankings | Creativals` : '';
  const localDesc = service ? `Get premium ${service.title.toLowerCase()} in Hyderabad. Creativals helps local businesses and global brands scale profitably with expert ${service.title.toLowerCase()}.` : '';

  useSEO({
    title: localTitle,
    description: localDesc,
    keywords: service ? `${service.title.toLowerCase()} hyderabad, best ${service.title.toLowerCase()} agency hyderabad, ${service.title.toLowerCase()} company in hyderabad` : '',
    // Service schema + FAQPage (every service page renders a real FAQ block)
    schema: service ? [serviceSchema(service), faqSchema(service.faqs)].filter(Boolean) : null,
  });

  if (!service) return <Navigate to="/services" replace />;

  return <ServicePageTemplate service={service} />;
};

export default ServicePage;
