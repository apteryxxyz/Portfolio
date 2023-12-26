import { join } from 'path';
import { readFile } from 'fs/promises';
import { MetadataRoute } from 'next';
import { absoluteUrl } from '~/utilities/url-helpers';

async function loadStaticPaths() {
  // Loads the static paths from the Next.js routes manifest
  const manifestPath = join(process.cwd(), '.next', 'routes-manifest.json');
  const manifestContent = await readFile(manifestPath, 'utf8');
  const manifest = JSON.parse(manifestContent) as RoutesManifest;

  return manifest.staticRoutes
    .filter(({ page }) => !page.split('.')[1])
    .map(({ page }) => ({
      url: absoluteUrl(page).toString(),
      lastModified: new Date(),
    }));
}

async function loadDynamicPaths() {
  // You can load dynamic paths from anywhere, such as a database

  // return allPosts.map((post) => ({
  //   url: absoluteUrl(`/blog/${post.slug}`).toString(),
  //   lastModified: new Date(post.publishedAt),
  // }));

  return [];
}

export default async function Sitemap() {
  return [
    ...(await loadStaticPaths().catch(() => [])),
    ...(await loadDynamicPaths().catch(() => [])),
  ] satisfies MetadataRoute.Sitemap;
}

export interface RoutesManifest {
  version: number;
  pages404: boolean;
  caseSensitive: boolean;
  basePath: string;
  redirects: {
    source: string;
    destination: string;
    internal: boolean;
    statusCode: number;
    regex: string;
  }[];
  headers: unknown[];
  dynamicRoutes: {
    page: string;
    regex: string;
    routeKeys: Record<string, string>;
    namedRegex: string;
  }[];
  staticRoutes: {
    page: string;
    regex: string;
    routeKeys: Record<string, string>;
    namedRegex: string;
  }[];
  dataRoutes: unknown[];
  rsc: {
    header: string;
    varyHeader: string;
    contentTypeHeader: string;
  };
  rewrites: {
    source: string;
    destination: string;
    regex: string;
  }[];
}
