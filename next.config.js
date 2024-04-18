import remarkObsidian from 'remark-obsidian';

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_flexsearch: true,
  unstable_staticImage: true,
  mdxOptions: {
    remarkPlugins: [remarkObsidian]
  }
});


module.exports = withNextra({
  i18n: {
    locales: ['en', 'pt-br'],
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
      }
    ]
  }
})
