const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const hasAlgolia = Boolean(
  process.env.ALGOLIA_APP_ID &&
  process.env.ALGOLIA_API_KEY &&
  process.env.ALGOLIA_INDEX_NAME
);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pressundo Framework',
  tagline: 'Modern WordPress options & metaboxes. Vafpress compatible.',
  favicon: 'img/favicon.svg',
  url: 'https://docs.pressundo.com',
  baseUrl: '/',
  organizationName: 'ziedelifa',
  projectName: 'pressundo-docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en'},
      fr: {label: 'Français', htmlLang: 'fr-FR'}
    }
  },
  presets: [
    ['classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: true,
        versions: {
          current: {label: '1.x', path: ''}
        }
      },
      blog: false,
      theme: {customCss: require.resolve('./src/css/custom.css')},
      sitemap: {changefreq: 'weekly', priority: 0.5}
    }]
  ],
  plugins: hasAlgolia ? [] : [
    [require.resolve('@easyops-cn/docusaurus-search-local'), {
      hashed: true,
      language: ['en', 'fr'],
      indexDocs: true,
      indexPages: true,
      docsRouteBasePath: '/',
      highlightSearchTermsOnTargetPage: true
    }]
  ],
  themeConfig: {
    image: 'img/social-card.svg',
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
    navbar: {
      title: 'Pressundo',
      logo: {alt: 'Pressundo Framework', src: 'img/logo.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs'},
        {to: '/fields', label: 'Fields', position: 'left'},
        {to: '/vafpress-migration', label: 'Vafpress Migration', position: 'left'},
        {to: '/api', label: 'API', position: 'left'},
        {type: 'docsVersionDropdown', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://wordpress.org/', label: 'WordPress', position: 'right'}
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Learn', items: [
          {label: 'Get started', to: '/getting-started/installation'},
          {label: 'All fields', to: '/fields'},
          {label: 'Vafpress migration', to: '/vafpress-migration'}
        ]},
        {title: 'Reference', items: [
          {label: 'Public API v1', to: '/api'},
          {label: 'Security', to: '/security'},
          {label: 'Troubleshooting', to: '/troubleshooting'}
        ]},
        {title: 'Pressundo', items: [
          {label: 'Changelog', to: '/reference/changelog'},
          {label: 'API freeze', to: '/reference/api-freeze'}
        ]}
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pressundo. Built with Docusaurus.`
    },
    prism: {theme: lightCodeTheme, darkTheme: darkCodeTheme, additionalLanguages: ['php', 'bash', 'json', 'css', 'javascript']},
    ...(hasAlgolia ? {
      algolia: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        contextualSearch: true,
        searchParameters: {}
      }
    } : {})
  }
};

module.exports = config;
