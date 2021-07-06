const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
module.exports = withNextra({
  i18n: {
    locales: ['en', 'pt-br'],
    defaultLocale: 'en',
  },
  async rewrites() {
    return [
      {
        source: "/bee.js",
        destination: "https://cdn.splitbee.io/sb.js",
      },
      {
        source: "/_hive/:slug",
        destination: "https://hive.splitbee.io/:slug",
      },
    ]
  },
})
