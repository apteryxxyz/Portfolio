import withBundleAnalyser from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  redirects: () => [
    {
      source: '/github',
      destination: 'https://github.com/apteryxxyz',
      permanent: false,
    },
    {
      source: '/github/:path*',
      destination: 'https://github.com/apteryxxyz/:path*',
      permanent: false,
    },
    {
      source: '/discord',
      destination: 'https://discord.gg/vZQbMhwsKY',
      permanent: false,
    },
    {
      source: '/twitter',
      destination: 'https://twitter.com/apteryxxyz',
      permanent: false,
    },
  ],

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default withBundleAnalyser({
  enabled: process.env.ANALYSE === 'true',
})(nextConfig);
