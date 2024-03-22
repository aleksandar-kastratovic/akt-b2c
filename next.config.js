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
    INSTAGRAM_KEY: process.env.INSTAGRAM_KEY,
  },
  images: {
    domains: [
      "api.akt.croonus.com",
      "scontent.cdninstagram.com",
      "video.cdninstagram.com",
      "api.staging.croonus.com",
      "scontent-frx5-1.cdninstagram.com",
      "scontent-frt3-2.cdninstagram.com",
      "scontent-frt3-1.cdninstagram.com",
      "scontent-vie1-1.cdninstagram.com",
      "scontent-atl3-1.cdninstagram.com",
      "scontent-cgk1-1.cdninstagram.com",
      "scontent-fco2-1.cdninstagram.com",
      "scontent.cdninstagram.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.akt.croonus.com",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
    ],
  },
  async redirects() {
    return []
  },
};

module.exports = nextConfig;
