import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ORG } from '../config/organization.js';

// Keeps <link rel="canonical"> in sync with the current route. Mounted once in
// PageLayout so every page carries a canonical URL (no trailing slash except /).
export const useCanonical = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    const clean = pathname.replace(/\/+$/, '') || '/';
    link.setAttribute('href', clean === '/' ? `${ORG.url}/` : `${ORG.url}${clean}`);
  }, [pathname]);
};
