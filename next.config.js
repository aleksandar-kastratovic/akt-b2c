/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '/',
  }
}

module.exports = nextConfig
