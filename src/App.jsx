import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/theme.css';

// Layout
import PageLayout from './layouts/PageLayout';
import ScrollToTop from './components/ScrollToTop';

// Homepage stays eager — most-visited entry, no second round-trip.
import HomePage from './pages/HomePage';

// Every other page is route-split (React.lazy) so its code + data load on
// demand instead of shipping in one bundle.
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ApproachPage = lazy(() => import('./pages/ApproachPage'));
const JoinUsPage = lazy(() => import('./pages/JoinUsPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const AutomationsPage = lazy(() => import('./pages/AutomationsPage'));
const ExperimentsPage = lazy(() => import('./pages/ExperimentsPage'));
const AcademyPage = lazy(() => import('./pages/AcademyPage'));
const PlaybooksPage = lazy(() => import('./pages/PlaybooksPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogArticlePage = lazy(() => import('./pages/BlogArticlePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const IndustryPage = lazy(() => import('./pages/IndustryPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLayout>
        <Suspense fallback={null}>
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
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* /success-stories and /client-reviews removed until verified
                content exists (CLAUDE.md content policy) */}
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/industries/:slug" element={<IndustryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
