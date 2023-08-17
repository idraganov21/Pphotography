/** @type {import('next-i18next').UserConfig} */
const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'bg',
    locales: ['bg', 'en'],
    localePath: path.resolve('./public/static/locales')
  },
  fallbackLng: {
    default: ['bg'],
  }
}
  