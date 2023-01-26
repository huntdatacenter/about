import { defineConfig } from "vitepress";

// refer https://vitepress.vuejs.org/config/introduction for details
export default defineConfig({
  lang: "en-US",
  title: "HUNT Cloud",
  description: "Vite & Vue powered static site generator.",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Example", link: "/example" }

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        text: "Welcome",
        items: [
          { text: "Home", link: "/" },
          { text: "Example", link: "/example" }
          // ...
        ]
      }
    ]
  }
});
