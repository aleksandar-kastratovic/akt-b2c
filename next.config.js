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
    CAPTCHAKEY: process.env.CAPTCHAKEY,
    GTM_ENABLED: process.env.GTM_ENABLED,
    GTM_ID: process.env.GTM_ID,
  },
  images: {
    domains: ["api.akt.croonus.com"],
  },
};

module.exports = nextConfig;
