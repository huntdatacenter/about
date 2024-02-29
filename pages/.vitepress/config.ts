// refer https://vitepress.vuejs.org/config/introduction for details
import { defineConfig, type HeadConfig } from 'vitepress';

// https://vitepress.vuejs.org/config/app-configs#head
const customHead: HeadConfig[] = [
  ["link", { rel: "shortcut icon", href: "https://www.ntnu.no/assets/images/favicon.ico", sizes: "any" }],

  ['meta', { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],

  ["meta", { name: "author", content: "HUNT Cloud" }],
  ["meta", { name: "keywords", content: "HUNT Cloud,services,prices,about" }],

  ["meta", { name: "theme-color", content: "#00509e" }],
  ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ["meta", { name: "msapplication-TileColor", content: "#00509e" }],

  // ["meta", { rel: "stylesheet", type: "text/css", href: "/css/custom.css", sizes: "any" }],
  ["meta", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons", sizes: "any" }],

  ["link", { rel: "icon", type: "image/svg+xml", href: "/img/hunt-cloud-logo.svg", sizes: "any" }],
  ["link", { rel: "mask-icon", type: "image/svg+xml", href: "/img/hunt-cloud-logo.svg", color: "#00509e" }],
];

export default {
  title: "HUNT Cloud",
  description: "About",
  lang: "en-US",

  base: "",
  outDir: "../build",
  appearance: false,
  // appearance: 'light',
  cleanUrls: true,

  head: customHead,

  // https://vitepress.vuejs.org/config/app-configs#markdown
  markdown: {
    theme: 'solarized-dark',
    lineNumbers: false,
  },

  // https://vitepress.vuejs.org/config/theme-configs
  themeConfig: {
    siteTitle: false,
    logo: "/img/hunt-cloud-logo.svg",

    // https://vitepress.vuejs.org/config/theme-configs#nav
    nav: [
      { text: "Home", link: "/" },
      {
        text: 'Products',
        items: [
          { text: 'Get started', link: '/products/' },
          {
            text: 'Core products',
            items: [
              { text: '🧭 Explore', link: '/products/explore/' },
              { text: '🧬 Evolve', link: '/products/evolve/' },
              { text: '👩‍💼 Scientific Suite', link: '/products/scientific-suite/' },
            ]
          },
          {
            text: 'Overview by roles',
            items: [
              { text: "Scientist", link: "/roles/scientist/" },
              { text: "Scientific leader", link: "/roles/scientific-leader/" },
              // { text: "Scientific administrator", link: "/roles/scientific-administrator/" },
              { text: "Teacher", link: "/roles/teacher/" },
              { text: "Private enterprise", link: "/roles/private-enterprise/" },
              { text: "Department", link: "/roles/department/" },
              { text: "Clinic", link: "/roles/clinic/" },
            ]
          },
        ],
      },
      {
        text: 'Solutions',
        items: [
          {
            text: 'Overview by field',
            items: [
              { text: "Genomics", link: "#link" },
              { text: "Statistics", link: "#link" },
              { text: "Engineering", link: "#link" },
            ]
          },
          {
            text: 'Use cases',
            items: [
              { text: "Machine learning", link: "#link" },
              { text: "Generative AI", link: "#link" },
              { text: "Sensitive AI", link: "#link" },
              { text: "Phenotyping", link: "#link" },
              { text: "Text annotation", link: "#link" },
              { text: "Image processing", link: "#link" },
              { text: "Image annotation", link: "#link" },
            ]
          },
        ],
      },
      {
        text: 'About',
        items: [
          { text: "Team", link: "/team" },
          { text: 'Products', link: '/products/' },
          { text: 'Compliance', link: '/compliance/' },
          { text: 'Pillars', link: '/pillars/' },
          { text: 'Tools', link: '/tools/' },
        ],
      },
    ],

    // https://vitepress.vuejs.org/config/theme-configs#sidebar
    sidebar: {
      "/": [
        {
          text: "Welcome",
          items: [
            { text: "Home", link: "/" },
            { text: "Team", link: "/team" },
            { text: "Products", link: "/products" },
            { text: "Roles", link: "/roles" },
            { text: "Compliance", link: "/compliance" },
            { text: "Pillars", link: "/pillars" },
            { text: "Tools", link: "/tools" },
          ]
        }
      ],
      "/products/": [
        {
          text: "Products",
          link: "/products/",
          items: [
            { text: "Explore", link: "/products/explore/" },
            { text: "Evolve", link: "/products/evolve/" },
            { text: "Scientific Suite", link: "/products/scientific-suite/" },
            // { text: "Test", link: "/explore/test" },
          ]
        },
      ],
      "/roles/": [
        {
          text: "Overview by roles",
          link: "/roles/",
          items: [
            { text: "Scientist", link: "/roles/scientist/" },
            { text: "Scientific leader", link: "/roles/scientific-leader/" },
            // { text: "Scientific administrator", link: "/roles/scientific-administrator/" },
            { text: "Teacher", link: "/roles/teacher/" },
            { text: "Private enterprise", link: "/roles/private-enterprise/" },
            { text: "Department", link: "/roles/department/" },
            { text: "Clinic", link: "/roles/clinic/" },
          ]
        },
      ],
      "/tools/": [
        {
          text: "Tools",
          items: [
            { text: "Introduction", link: "/tools/" },
            { text: "Workbench", link: "/tools/workbench/" },
          ]
        },
      ],
      "/compliance/": [
        {
          text: "Compliance",
          link: "/compliance/",
          items: [
            { text: "Quality management", link: "/compliance/quality-management/" },
            { text: "Information security", link: "/compliance/information-security/" },
            { text: "Information privacy", link: "/compliance/information-privacy/" },
          ]
        },
      ],
      "/pillars/": [
        {
          text: "Pillars",
          link: "/pillars/",
          items: [
            { text: "Trust", link: "/pillars/trust/" },
            { text: "Technology", link: "/pillars/technology/" },
            { text: "Collaboration", link: "/pillars/collaboration/" },
          ]
        },
      ],
    },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"]
    }
  }
}
