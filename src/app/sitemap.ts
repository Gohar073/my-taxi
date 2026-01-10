import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const routes = [
    '/',
    '/transport',
    '/flughafentransfer',
    '/krankentransport',
    '/rollstuhltransport',
    '/taxi70-in-muenster',
    '/kontakt',
    '/impressum',
    '/datenschutz',
    '/no_js',
  ] as const;

  return routes.map((path) => ({
    url: new URL(path, base).toString(),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}

