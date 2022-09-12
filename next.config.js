/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["three"]);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com", "media.graphcms.com"],
  },
};

module.exports = withTM();
module.exports = nextConfig;
