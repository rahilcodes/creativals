// ─── Blog articles — unified data ────────────────────────────────────────────
// Combines article batches and exposes lookup helpers consumed by
// BlogArticlePage.jsx and scripts/routes.js (sitemap + prerender).

import { article1, article2, article3 } from './blogArticlesBatch1.js';
import { article4, article5, article6 } from './blogArticlesBatch2.js';

const allArticles = [article1, article2, article3, article4, article5, article6];

export const getArticleBySlug = (slug) => allArticles.find((a) => a.slug === slug) || null;
export const getAllArticles = () => allArticles;
export default allArticles;
