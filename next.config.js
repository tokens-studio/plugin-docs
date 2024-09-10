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
        source: "/pt-br/:path*",
        destination: "/",
        statusCode: 302
      },
      {
        source: "/available-tokens/asset-tokens",
        destination: "/token-types/token-type-asset",
        statusCode: 302
      },
      {
        source: "/available-tokens/available-tokens",
        destination: "/token-types/token-type-overview",
        statusCode: 302
      },
      {
        source: "/available-tokens/border-radius-tokens",
        destination: "/token-types/token-type-border-radius",
        statusCode: 302
      },
      {
        source: "/available-tokens/border-tokens",
        destination: "/token-types/token-type-border-composite",
        statusCode: 302
      },
      {
        source: "/available-tokens/border-width-tokens",
        destination: "/token-types/token-type-border-width",
        statusCode: 302
      },
      {
        source: "/available-tokens/color-tokens",
        destination: "/token-types/token-type-color",
        statusCode: 302
      },
      {
        source: "/available-tokens/composition-tokens",
        destination: "/token-types/token-type-composition-pro",
        statusCode: 302
      },
      {
        source: "/available-tokens/dimension-tokens",
        destination: "/token-types/token-type-dimension",
        statusCode: 302
      },
      {
        source: "/available-tokens/opacity-tokens",
        destination: "/token-types/token-type-opacity",
        statusCode: 302
      },
      {
        source: "/available-tokens/shadow-tokens",
        destination: "/token-types/token-type-box-shadow-composite",
        statusCode: 302
      },
      {
        source: "/available-tokens/sizing-tokens",
        destination: "/token-types/token-type-sizing",
        statusCode: 302
      },
      {
        source: "/available-tokens/spacing-tokens",
        destination: "/token-types/token-type-spacing",
        statusCode: 302
      },
      {
        source: "/available-tokens/typography-tokens",
        destination: "/token-types/token-type-typography-composite",
        statusCode: 302
      },
      {
        source: "/sync/ado",
        destination: "/token-storage-and-sync/sync-provider-azure-devops",
        statusCode: 302
      },
      {
        source: "/sync/bitbucket",
        destination: "/token-storage-and-sync/sync-provider-bitbucket",
        statusCode: 302
      },
      {
        source: "/sync/branch-switching",
        destination: "/token-storage-and-sync/sync-branch-pro",
        statusCode: 302
      },
{
        source: "/sync/generic-storage",
        destination: "/token-storage-and-sync/sync-provider-generic-versioned",
        statusCode: 302
      },
      {
        source: "/sync/github",
        destination: "/token-storage-and-sync/sync-provider-github",
        statusCode: 302
      },
      {
        source: "/sync/gitlab",
        destination: "/token-storage-and-sync/sync-provider-gitlab",
        statusCode: 302
      },
      {
        source: "/sync/jsonbin",
        destination: "/token-storage-and-sync/sync-provider-jsonbin",
        statusCode: 302
      },
      {
        source: "/sync/multi-file",
        destination: "/token-storage-and-sync/sync-multi-file-remote-storage-folder-pro",
        statusCode: 302
      },
      {
        source: "/sync/second-screen",
        destination: "/token-storage-and-sync/sync-provider-overview",
        statusCode: 302
      },
      {
        source: "/sync/supernova",
        destination: "/token-storage-and-sync/sync-provider-supernova",
        statusCode: 302
      },
          {
        source: "/sync/sync",
        destination: "/token-storage-and-sync/sync-provider-overview",
        statusCode: 302
      },
      {
        source: "/sync/tokens-studio",
        destination: "/token-storage-and-sync/sync-provider-tokens-studio",
        statusCode: 302
      },
      {
        source: "/sync/url",
        destination: "/token-storage-and-sync/sync-provider-url",
        statusCode: 302
      }
    ]
  }
})
