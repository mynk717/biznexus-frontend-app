import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '@/lib/mockBlogPosts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mdn.mktgdime.com';
  const blogPosts = await getAllBlogPosts();

  const staticPages = [
    '',
    '/insurance',
    '/insurance/health',
    '/insurance/life',
    '/insurance/vehicle',
    '/insurance/travel/international',
    '/insurance/travel/student',
    '/insurance/travel/senior-citizen',
    '/insurance/travel/domestic',
    '/insurance/travel/multi-trip',
    '/insurance/travel/compare',
    '/solar/residential',
    '/solar/commercial',
    '/solar/calculator',
    '/services/digital',
    '/services/media',
    '/services/properties',
    '/services/used-cars',
    '/neighborhood/samta-colony',
    '/neighborhood/ge-road',
    '/neighborhood/shankar-nagar',
    '/neighborhood/telibandha',
    '/blog',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogEntries = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publicationDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogEntries];
}
