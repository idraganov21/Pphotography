/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['bg', 'en'],
    defaultLocale: 'bg',
    localeDetection: false,
  },
  experimental: {
    outputFileTracing: true,
  },
}

module.exports = nextConfig
