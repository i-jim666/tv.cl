/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }
// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  // disable css-modules component styling

  webpack(config) {
    config.module.rules.forEach((rule) => {
      const { oneOf } = rule;
      if (oneOf) {
        oneOf.forEach((one) => {
          if (!`${one.issuer?.and}`.includes("_app")) return;
          one.issuer.and = [path.resolve(__dirname)];
        });
      }
    });
    return config;
  },

  reactStrictMode: false,
  images: {
    domains: ["image.tmdb.org"],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};

module.exports = nextConfig;
