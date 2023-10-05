/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: process.env.API_URL,
    COMPANY: process.env.COMPANY,
    ADDRESS: process.env.ADDRESS,
    STREET: process.env.STREET,
    POSTCODE: process.env.POSTCODE,
    CITY: process.env.CITY,
    STATE: process.env.STATE,
    PIB: process.env.PIB,
    MB: process.env.MB,
    CODE: process.env.CODE,
    SITE: process.env.SITE,
    EMAIL: process.env.EMAIL,
    TELEPHONE: process.env.TELEPHONE,

    CAPTCHAKEY: process.env.CAPTCHAKEY,
    GTM_ENABLED: process.env.GTM_ENABLED,
    GTM_ID: process.env.GTM_ID,
  },
  images: {
    domains: ["api.akt.croonus.com"],
  },
};

module.exports = nextConfig;
