import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { getIndustryBySlug } from '../data/industries';
import IndustryPageTemplate from '../templates/IndustryPageTemplate';

const IndustryPage = () => {
  const { slug } = useParams();
  const industry = getIndustryBySlug(slug);

  if (!industry) return <Navigate to="/" replace />; // Alternatively redirect to a general industries hub if we had one

  const localTitle = industry.name + ' Marketing Agency in Hyderabad | Creativals';
  const localDesc = `We build custom growth systems for ${industry.name} in Hyderabad. See how Creativals helps local businesses dominate their market and scale profitably.`;

  // Generate FAQ schema dynamically if FAQs exist
  const faqSchema = industry.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  useSEO({
    title: localTitle,
    description: localDesc,
    keywords: `${industry.name.toLowerCase()} marketing hyderabad, ${industry.name.toLowerCase()} digital marketing agency hyderabad, grow ${industry.name.toLowerCase()} business hyderabad`,
    schema: faqSchema,
  });

  return <IndustryPageTemplate industry={industry} />;
};

export default IndustryPage;
