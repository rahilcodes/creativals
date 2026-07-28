import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { faqSchema } from '../config/schema';
import { getIndustryBySlug } from '../data/industries';
import IndustryPageTemplate from '../templates/IndustryPageTemplate';

const IndustryPage = () => {
  const { slug } = useParams();
  const industry = getIndustryBySlug(slug);

  const localTitle = industry ? industry.metaTitle || `${industry.title} Marketing Agency in Hyderabad | Creativals` : '';
  const localDesc = industry
    ? industry.metaDesc || `We build custom growth systems for ${industry.title} in Hyderabad. See how Creativals helps local businesses dominate their market and scale profitably.`
    : '';

  useSEO({
    title: localTitle,
    description: localDesc,
    keywords: industry ? `${industry.title} marketing Hyderabad, ${industry.title} digital marketing agency Hyderabad, grow ${industry.title} business Hyderabad` : '',
    // FAQPage only — every industry page renders a real FAQ block
    schema: industry ? faqSchema(industry.faqs) : null,
  });

  if (!industry) return <Navigate to="/industries" replace />;

  return <IndustryPageTemplate industry={industry} />;
};

export default IndustryPage;
