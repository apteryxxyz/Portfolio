// Temporarily enable ts node so we can validate the env file
const service = require('ts-node').register();
const { loadEnvConfig } = require('@next/env');
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== 'production');
service.enabled(false);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: [] },
  redirects: async () => require('./vercel.json').redirects ?? [],
  rewrites: async () => require('./vercel.json').rewrites ?? [],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer');
const { withContentlayer } = require('next-contentlayer');

// module.exports = withContentlayer(
//   withBundleAnalyzer({
//     enabled: process.env['ANALYZE'] === 'true',
//   })(nextConfig),
// );

module.exports = nextConfig;