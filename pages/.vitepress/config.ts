import { defineConfig } from "vitepress";

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  title: "HUNT Cloud",
  description: "Vite & Vue powered static site generator.",

  lang: "en-US",
  outDir: "../build",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Team", link: "/team" },
      {
        text: 'Sections',
        items: [
          { text: 'Do Science', link: '#do-science' },
          { text: 'Administer Science', link: '#administer-science' },
          { text: 'Find Out', link: '#find-out' },
        ],
      },
    ],

    sidebar: [
      {
        text: "Welcome",
        items: [
          { text: "Home", link: "/" },
          { text: "Team", link: "/team" },
        ]
      }
    ]
  }
});
