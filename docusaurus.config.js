// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EduArt Docs',
  tagline: 'Education art of teaching autonomous robotics',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://eduart.sinamatic.de',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eduart-robotik', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',                 // <- wichtig
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    image: 'img/docusaurus-social-card.jpg',
    colorMode: { respectPrefersColorScheme: true },

    navbar: {
      title: '', // wir nutzen nur das Logo
      logo: {
        alt: 'EduArt',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        href: '/',
        target: '_self',
        className: 'menu__logo',
        width: 140,
        height: 40,
      },

      items: [
        // --- CENTER (wird per CSS zentriert) ---
        {
          type: 'dropdown',
          label: 'Home',
          position: 'left',
          items: [
            { label: 'Überblick', to: '/' },
            { label: 'Blog', to: '/blog' },
          ],
          className: 'menu__item--top',
        },
        {
          label: 'Products',
          position: 'left',
          to: '/products',
          className: 'menu__item--top',
        },
        {
          label: 'Contact',
          position: 'left',
          to: '/contact',
          className: 'menu__item--top',
        },

        // (optional) dein Docs-Eintrag bleibt erhalten
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
          className: 'menu__item--top',
        },

        // --- RIGHT: Links + Socials ---
        { href: 'http://test.eduart-robotik.com/', label: 'Back to Website', position: 'right' },
        { href: 'https://github.com/EduArt-Robotik', label: 'GitHub', position: 'right' },

        // WICHTIG: in v3 als type:'html' + value
        {
          type: 'html',
          position: 'right',
          value: `
            <div class="social-icons">
              <a href="https://example.com/app" aria-label="App">
                <img src="/img/social/app.svg" alt="" />
              </a>
              <a href="https://youtube.com/…" aria-label="YouTube">
                <img src="/img/social/youtube.svg" alt="" />
              </a>
              <a href="https://instagram.com/…" aria-label="Instagram">
                <img src="/img/social/instagram.svg" alt="" />
              </a>
              <a href="https://linkedin.com/company/…" aria-label="LinkedIn">
                <img src="/img/social/linkedin.svg" alt="" />
              </a>
              <a href="https://github.com/…" aria-label="GitHub">
                <img src="/img/social/github.svg" alt="" />
              </a>
            </div>
          `,
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Tutorial', to: '/docs/intro' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/eduard' },
            { label: 'Discord', href: 'https://discordapp.com/invite/eduard' },
            { label: 'X', href: 'https://x.com/docusaurus' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/EduArt-Robotik' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EduArt Robotik GmbH. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};
export default config;
