import { defineConfig } from "vitepress";

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  title: "HUNT Cloud",
  description: "About",
  lang: "en-US",

  base: "",
  outDir: "../build",
  appearance: 'light',
  cleanUrls: 'with-subfolders',

  // https://vitepress.vuejs.org/config/app-configs#head
  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        href: "https://www.ntnu.no/assets/images/favicon.ico"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#00509e"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes"
      }
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black"
      }
    ]
  ],

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
          { text: 'Do Science', link: '#testing1' },
          { text: 'Administer Science', link: '#testing2' },
          { text: 'Find Out', link: '#testing3' },
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
    },
  }
});
