/** @type {import('next').NextConfig} */
let nextConfig = {
    distDir: '.next',
    reactStrictMode: false,
    poweredByHeader: false,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: '/discord',
                destination: 'https://discord.gg/C3qVXYqX8J',
                permanent: false,
            }
        ]
    }
};

if (process.env['ANALYSE'] === 'true') {
    nextConfig = require('@next/bundle-analyzer')()(nextConfig);
}

module.exports = nextConfig;
