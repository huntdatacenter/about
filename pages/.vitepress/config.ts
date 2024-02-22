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
      { text: "Team", link: "/team" },
      {
        text: 'Sections',
        items: [
          { text: 'Explore', link: '/explore/' },
          { text: 'Evolve', link: '/evolve/' },
          { text: 'Scientific Suite', link: '/scientific-suite/' },
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
          ]
        }
      ],
      "/explore/": [
        {
          text: "Explore",
          items: [
            { text: "Introduction", link: "/explore/" },
            { text: "Test", link: "/explore/test" },
          ]
        },
      ],
      "/evolve/": [
        {
          text: "Evolve",
          items: [
            { text: "Introduction", link: "/evolve/" },
          ]
        },
      ],
      "/scientific-suite/": [
        {
          text: "Scientific Suite",
          items: [
            { text: "Introduction", link: "/scientific-suite/" },
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
    },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"]
    }
  }
}
