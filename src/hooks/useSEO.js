import { useEffect } from 'react';

export const useSEO = ({ title, description, keywords, schema, abstract }) => {
  useEffect(() => {
    const setMeta = (name, content, isProperty = false) => {
      if (!content) return;
      const attr = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    if (title) {
      document.title = title;
      setMeta('og:title', title, true);
      setMeta('twitter:title', title);
    }

    if (description) {
      setMeta('description', description);
      setMeta('og:description', description, true);
      setMeta('twitter:description', description);
    }
    if (keywords) setMeta('keywords', keywords);
    if (abstract) setMeta('abstract', abstract);
    setMeta('og:type', 'website', true);
    setMeta('twitter:card', 'summary_large_image');

    let script;
    if (schema) {
      script = document.querySelector('script[id="dynamic-schema"]');
      if (!script) {
        script = document.createElement('script');
        script.id = 'dynamic-schema';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = typeof schema === 'string' ? schema : JSON.stringify(schema);
    }

    return () => {
      // Remove schema on unmount to prevent lingering on other pages
      if (script) script.remove();
    };
  }, [title, description, keywords, schema, abstract]);
};
