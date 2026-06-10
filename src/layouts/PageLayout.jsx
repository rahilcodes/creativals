import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ThemeToggle from '../components/ThemeToggle';

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <ThemeToggle />
    </div>
  );
};

export default PageLayout;
