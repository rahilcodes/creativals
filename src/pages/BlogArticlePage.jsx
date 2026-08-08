import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { articleSchema, breadcrumbSchema } from '../config/schema';
import { getArticleBySlug, getAllArticles } from '../data/blogArticles';
import BlogArticleTemplate from '../templates/BlogArticleTemplate';

const BlogArticlePage = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  const crumbs = article
    ? [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: article.title, path: `/blog/${article.slug}` },
      ]
    : [{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }];

  useSEO({
    title: article ? article.metaTitle : 'Blog | Creativals',
    description: article ? article.metaDesc : '',
    keywords: article ? article.keywords : '',
    schema: article
      ? [articleSchema(article), breadcrumbSchema(crumbs)]
      : [breadcrumbSchema(crumbs)],
  });

  if (!article) return <Navigate to="/blog" replace />;

  return <BlogArticleTemplate article={article} allArticles={getAllArticles()} />;
};

export default BlogArticlePage;
