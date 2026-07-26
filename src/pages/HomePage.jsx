import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { orgSchema, faqSchema } from '../config/schema';
import { HOME_FAQS } from '../components/home/FAQ';
import { ScrollProgress } from '../components/ui/primitives';
import Hero from '../components/home/Hero';
import Problem from '../components/home/Problem';
import LeakCalculator from '../components/home/LeakCalculator';
import SystemMethod from '../components/home/SystemMethod';
import ClientTicker from '../components/home/ClientTicker';
import ProofCards from '../components/home/ProofCards';
import Difference from '../components/home/Difference';
import IndustriesGrid from '../components/home/IndustriesGrid';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';

const HomePage = () => {
  useSEO({
    title: 'Digital Marketing Agency in Hyderabad | Creativals',
    description: 'Stop running ads that don\'t convert. Creativals is the leading digital marketing agency in Hyderabad building guaranteed growth systems that close deals.',
    keywords: 'digital marketing agency hyderabad, best marketing agency in hyderabad, growth agency hyderabad, seo company hyderabad',
    abstract: 'Creativals is a Hyderabad-based digital marketing agency and growth powerhouse founded in 2019 by four brothers: Rahil, Raiyan, Farhan, and Ahmed. We specialize in SEO, paid ads, web development, and branding.',
    // Org + LocalBusiness(ProfessionalService) from the central config, plus
    // FAQPage mirroring the rendered FAQ block. Person schema deferred.
    schema: [orgSchema(), faqSchema(HOME_FAQS)].filter(Boolean),
  });

  return (
    <>
      <ScrollProgress />
      <Hero />
      <Problem />
      <LeakCalculator />
      <SystemMethod />
      <ClientTicker />
      <ProofCards />
      <Difference />
      <IndustriesGrid />
      <FAQ />
      <FinalCTA />
    </>
  );
};

export default HomePage;
