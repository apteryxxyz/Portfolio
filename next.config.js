/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ protocol: "https", hostname: "**" }],
    },
    experimental: {
        serverActions: true,
        typedRoutes: true,
    },
};
module.exports = nextConfig;