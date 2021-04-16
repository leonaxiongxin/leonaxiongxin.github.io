/** @type {import('@docusaurus/types').DocusaurusConfig} */


const userName = 'leonaxiongxin'
const repoName = 'leonaxiongxin.github.io';
const ghDomain = `https://${repoName}`;
const netlifyDomain = 'https://xinxiong.netlify.app';
const githubUrl = 'https://github.com/leonaxiongxin';
const zhihuUrl = 'https://www.zhihu.com/people/xiong-xin-64-58';
const doubanUrl = 'https://www.douban.com/people/157300719/';
const linkedinUrl = 'https://www.linkedin.com/in/xinxiong96';

module.exports = {
  title: 'Xin Xiong',
  tagline: 'Stay curious, stay foolish.',
  url: `${ghDomain}`,
  baseUrl: `/`,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: `${userName}`, // Usually your GitHub org/user name.
  projectName: `${repoName}`, // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'archive',
          label: 'Archive',
          position: 'left',
        },
        {
          to: 'about',
          label: 'About',
          position: 'left',
        },
        {
          href: `${githubUrl}/${repoName}`,
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          items: [
            {
              label: '知乎',
              name: 'zhihu',
              href: `${zhihuUrl}`,
            },
            {
              label: '豆瓣',
              name: 'douban',
              href: `${doubanUrl}`,
            },
            {
              label: 'Github',
              name: 'github',
              href: `${githubUrl}`,
            },
            {
              label: 'Linkedin',
              name: 'linkedin',
              href: `${linkedinUrl}`,
            },
          ],
        }
      ],
      copyright: `Copyright © 2018-${new Date().getFullYear()} Xin Xiong. Built with <a href="https://docusaurus.io/">Docusaurus</a> and 💙.`,
    },
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Algolia search parameters
      searchParameters: {},
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          /**
           * Number of blog post elements to show in the blog sidebar
           * 'ALL' to show all blog posts
           * 0 to disable
           */
          blogSidebarCount: 0,
          /**
           * Title of the blog sidebar
           */
          blogSidebarTitle: 'Recent posts',
          postsPerPage: 10,
        },
        theme: {
          customCss: require.resolve('./src/scss/custom.scss'),
        },
      },
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
        routeBasePath: '/',
        include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/*.test.{js,ts}',
          '**/__tests__/**',
        ],
        mdxPageComponent: '@theme/MDXPage',
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
  ],
  customFields: {
    keywords: [
      'xiong xin',
      'personal website',
      'front end development',
      'natural language processing',
    ],
    image: 'boilerplate@2x.png',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['cn', 'en'],
    localeConfigs: {
      cn: {
        label: '中文',
      },
      en: {
        label: 'English',
      }
    },
  },
};
