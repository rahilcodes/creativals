import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { ScrollProgress } from '../components/ui/primitives';
import Hero from '../components/home/Hero';
import Problem from '../components/home/Problem';
import LeakCalculator from '../components/home/LeakCalculator';
import SystemMethod from '../components/home/SystemMethod';
import ClientTicker from '../components/home/ClientTicker';
import ProofCards from '../components/home/ProofCards';
import Difference from '../components/home/Difference';
import IndustriesGrid from '../components/home/IndustriesGrid';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';

const HomePage = () => {
  useSEO({
    title: 'Digital Marketing Agency in Hyderabad | Creativals',
    description: 'Stop running ads that don\'t convert. Creativals is the leading digital marketing agency in Hyderabad building guaranteed growth systems that close deals.',
    keywords: 'digital marketing agency hyderabad, best marketing agency in hyderabad, growth agency hyderabad, seo company hyderabad',
    abstract: 'Creativals is a Hyderabad-based digital marketing agency and growth powerhouse founded in 2019 by four brothers: Rahil, Raiyan, Farhan, and Ahmed. We specialize in SEO, paid ads, web development, and branding.',
    schema: {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness"],
      "name": "Creativals",
      "url": "https://creativals.com",
      "logo": "https://creativals.com/logo.png",
      "image": "https://creativals.com/og-image.png",
      "description": "Creativals is the leading digital marketing agency in Hyderabad building guaranteed growth systems that close deals.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "areaServed": "Hyderabad",
      "telephone": "+917997001700",
      "priceRange": "$$",
      "founders": [
        { "@type": "Person", "name": "Mohammed Rahil Azeez" },
        { "@type": "Person", "name": "Raiyan Azeez" },
        { "@type": "Person", "name": "Farhan Azeez" },
        { "@type": "Person", "name": "Syed Ahmed" }
      ],
      "foundingDate": "2019"
    }
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
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
};

export default HomePage;
