import React from 'react';
import { useSEO } from '../hooks/useSEO';
import Problem from '../components/Problem';
import InteractiveProblem from '../components/InteractiveProblem';
import Method from '../components/Method';
import Funnels from '../components/Funnels';
import CaseStudies from '../components/CaseStudies';
import Comparison from '../components/Comparison';
import Industries from '../components/Industries';
import FounderVideo from '../components/FounderVideo';
import Testimonials from '../components/Testimonials';
import CostOfInaction from '../components/CostOfInaction';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Hero from '../components/Hero';

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
      <Hero />
      <Problem />
      <InteractiveProblem />
      <Method />
      <Funnels />
      <CaseStudies />
      <Comparison />
      <Industries />
      <FounderVideo />
      <Testimonials />
      <CostOfInaction />
      <FAQ />
      <FinalCTA />
    </>
  );
};

export default HomePage;
