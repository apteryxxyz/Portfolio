/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true },

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
};

const truthy = (v) => ['true', '1', 'yes', 'y'].includes(v);
export default [
  truthy(process.env.ANALYSE) &&
    (await import('@next/bundle-analyzer')).default({ enabled: true }),
  !truthy(process.env.TURBOPACK) &&
    (await import('@million/lint')).next({ rsc: true }),
]
  .filter(Boolean)
  .reduce((acc, curr) => curr(acc), nextConfig);
