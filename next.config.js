/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["picsum.photos"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
