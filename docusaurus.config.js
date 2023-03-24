// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kimjisub',
  tagline: '개발자 김지섭입니다.',
  url: 'https://jisub.kim',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kimjisub', // Usually your GitHub org/user name.
  projectName: 'jisub.kim', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  // 	defaultLocale: 'en',
  // 	locales: ['en'],
  // },

  scripts: [
    {
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      defer: true,
      'data-cf-beacon': '{"token": "d48a0e3f33b14dccb807e2622b23a229"}',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'portfolio',
          routeBasePath: 'portfolio',
          sidebarPath: require.resolve('./sidebarsPortfolio.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 	'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 	'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tools',
        path: 'tools',
        routeBasePath: 'tools',
        sidebarPath: require.resolve('./sidebarsTools.js'),
        // editUrl: 'https://github.com/kimjisub/kimjisub/edit/tools/',
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'jisub.kim',
        logo: {
          alt: 'kimjisub',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/portfolio/intro',
            label: '포트폴리오',
            position: 'left',
            activeBaseRegex: `/portfolio/`,
          },
          {
            to: '/tools/intro',
            label: '도구',
            position: 'left',
            activeBaseRegex: `/tools/`,
          },
          { to: '/blog', label: '블로그', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Document',
                to: '/portfolio/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Portfolio',
                href: 'https://kimjisub.notion.site/',
              },
            ],
          },
          {
            title: 'SNS',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/kimjisub',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kimjisub.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
