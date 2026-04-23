import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './typography.css';
import './new-components.css';
import './premium-theme.css';

// Layout
import PageLayout from './layouts/PageLayout';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ResultsPage from './pages/ResultsPage';
import IndustriesPage from './pages/IndustriesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ApproachPage from './pages/ApproachPage';
import JoinUsPage from './pages/JoinUsPage';
import ProductsPage from './pages/ProductsPage';
import AutomationsPage from './pages/AutomationsPage';
import ExperimentsPage from './pages/ExperimentsPage';
import AcademyPage from './pages/AcademyPage';
import PlaybooksPage from './pages/PlaybooksPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import IndustryPage from './pages/IndustryPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import ClientReviewsPage from './pages/ClientReviewsPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/join-us" element={<JoinUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/automations" element={<AutomationsPage />} />
          <Route path="/experiments" element={<ExperimentsPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/playbooks" element={<PlaybooksPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/client-reviews" element={<ClientReviewsPage />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
