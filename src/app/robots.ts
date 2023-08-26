import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/utilities/url-helpers';

export default function Robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api', '/_next', '/static'],
      },
    ],
    host: absoluteUrl().toString(),
    sitemap: absoluteUrl('/sitemap.xml').toString(),
  } satisfies MetadataRoute.Robots;
}
