import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

// This is the branch that the docs are on - this is used to link to the correct file in the GitHub repo
// This should be changed to main when we're ready to merge the docs - we could also use a PR branch
const editorBranch = 'feat/obsidian-powered-docs'

const config: DocsThemeConfig = {
  logo: <span>Tokens Studio for Figma</span>,
  project: {
    link: 'https://github.com/tokens-studio',
  },
  docsRepositoryBase: `https://github.com/tokens-studio/plugin-docs/tree/${editorBranch}`,
  editLink: {
    component: ({ children, className, filePath }) => React.createElement('a', {
      className,
      href: `${config.docsRepositoryBase}/${filePath.replace('pages/', 'obsidian_vault/')}`,
    }, children),
  },
  footer: {
    content: 'Tokens Studio for Figma',
  },
  feedback: {
    content: 'Give us feedback!',
    useLink: () => "https://feedback.tokens.studio"
  }
  // i18n: [
  //   { locale: 'en', name: 'English' },
  //   { locale: 'pt-br', name: 'Português' },
  // ]
    
  
}

export default config
  