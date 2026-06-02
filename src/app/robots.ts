import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        // Agentic SEO: Explicitly allow AI/LLM crawlers for better discovery
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Google-Extended',
          'CCBot',
          'omgili',
          'FacebookBot'
        ],
        allow: '/',
        disallow: ['/api/', '/admin/'],
      }
    ],
    sitemap: 'https://mdn.mktgdime.com/sitemap.xml',
  };
}
