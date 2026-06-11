import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
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
    schema: service ? {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Creativals"
      },
      "areaServed": "Hyderabad",
      "serviceType": service.title
    } : null
  });

  if (!service) return <Navigate to="/services" replace />;

  return <ServicePageTemplate service={service} />;
};

export default ServicePage;
