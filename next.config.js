const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
});


module.exports = withNextra({
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  redirects: () => {
    return [
      {
        source: "/reset-tokens",
        destination: "/troubleshooting/reset-tokens",
        statusCode: 302
      },
      {
        source: "/non-local-styles",
        destination: "/styles/non-local-styles",
        statusCode: 302
      },
      {
        source: "/sams-fancy-link",
        destination: "/guides/naming-design-tokens",
        statusCode: 302
      },
      {
        source: "/convert-to-dtcg-format",
        destination: "/token-format/token-format-view-change-dtcg",
        statusCode: 302
      },
      {
        source: "/pt-br/:path*",
        destination: "/",
        statusCode: 302
      },
    ]
  }
})
