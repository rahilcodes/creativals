import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { useBreadcrumbSchema } from '../hooks/useBreadcrumbSchema';
import { useCanonical } from '../hooks/useCanonical';

const PageLayout = ({ children }) => {
  useBreadcrumbSchema(); // BreadcrumbList JSON-LD on every page
  useCanonical(); // <link rel="canonical"> on every page
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PageLayout;
