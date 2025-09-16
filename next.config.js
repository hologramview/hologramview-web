/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'es', 'fr', 'de', 'ja', 'zh', 'pt', 'it', 'ru'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'static.videezy.com',
      'source.unsplash.com'
    ],
  },
}

module.exports = nextConfig
