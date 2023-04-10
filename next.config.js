/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: process.env.API_URL,
    COMPANY: process.env.COMPANY,
    ADDRESS: process.env.ADDRESS,
    TOWN: process.env.TOWN,
    PIB: process.env.PIB,
    MB: process.env.MB,
    EMAIL: process.env.EMAIL,
  },
  images: {
    domains: ["api.akt.croonus.com"],
  },
};

module.exports = nextConfig;
