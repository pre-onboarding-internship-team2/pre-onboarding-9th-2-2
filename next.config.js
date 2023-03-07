/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
