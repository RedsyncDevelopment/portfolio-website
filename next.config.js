/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com", "media.graphcms.com"],
  },
};
const withTM = require("next-transpile-modules")(["three"]);

module.exports = withTM();
module.exports = nextConfig;
