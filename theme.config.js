export default {
  repository: 'https://github.com/six7/figma-tokens',
  docsRepository: 'https://github.com/six7/figma-tokens-docs',
  titleSuffix: ' – Figma Tokens',
  logo: (
    <>
      <img src="/logo.svg" alt="Figma Tokens" className="mr-2"/>
      <span className="mr-2 font-extrabold hidden md:inline">Figma Tokens</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Plugin Docs
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Figma Tokens: Plugin Docs" />
      <meta name="og:description" content="Figma Tokens: Plugin Docs" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://img.websnap.app/?url=https://docs.tokens.studio&token=D5rpX7VfD3dACoyb&viewport_width=1200&viewport_height=630" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://docs.tokens.studio" />
      <meta name="og:title" content="Figma Tokens: Plugin Docs" />
      <meta name="og:image" content="https://img.websnap.app/?url=https://docs.tokens.studio&token=D5rpX7VfD3dACoyb&viewport_width=1200&viewport_height=630" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="stylesheet" href="/style.css"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
    </>
  ),
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'pt-br', text: 'Português (Brasil)' }
  ],
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: (
    <div>
      <div className="mb-4">© {new Date().getFullYear()} Jan Six</div>
      <a href="https://splitbee.io/?ref=badge" className="block mb-4">
        <img src="https://splitbee-cdn.fra1.cdn.digitaloceanspaces.com/static/badge/splitbee-badge.svg" alt="Analytics by Splitbee.io" /> 
      </a>
      <a href="https://vercel.com?utm_source=figma-tokens&utm_campaign=oss" className="block mb-4">
        <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Powered by Vercel" /> 
      </a>
      <a href="https://www.websnap.app?utm_campaign=badge">
        <img src="https://www.websnap.app/assets/img/badges/websnap-badge-dark.svg" alt="Social share images by Websnap.app" /> 
      </a>
    </div>
  )
}
