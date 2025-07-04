// refer https://vitepress.vuejs.org/config/introduction for details
import { defineConfig, type HeadConfig } from 'vitepress';

// https://vitepress.vuejs.org/config/app-configs#head
const customHead: HeadConfig[] = [
  ["link", { rel: "shortcut icon", href: "https://www.ntnu.no/assets/images/favicon.ico", sizes: "any" }],

  ['meta', { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],

  ["meta", { name: "author", content: "HUNT Cloud" }],
  ["meta", { name: "keywords", content: "HUNT Cloud,services,prices,about" }],

  ["meta", { name: "theme-color", content: "#00509e" }],
  ["meta", { name: "mobile-web-app-capable", content: "yes" }],
  ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],  // DEPRECATED
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ["meta", { name: "msapplication-TileColor", content: "#00509e" }],

  // ["meta", { rel: "stylesheet", type: "text/css", href: "/css/custom.css", sizes: "any" }],
  ["meta", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons", sizes: "any" }],

  ["link", { rel: "icon", type: "image/svg+xml", href: "/img/hunt-cloud-logo.svg", sizes: "any" }],
  ["link", { rel: "mask-icon", type: "image/svg+xml", href: "/img/hunt-cloud-logo.svg", color: "#00509e" }],
  // ["script", { src: "https://plausible.io/js/script.file-downloads.hash.outbound-links.tagged-events.js", 'data-domain': "hdc.ntnu.no", defer: "" }],
];

export default defineConfig({
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
    nav: navigationMenu(),

    // https://vitepress.vuejs.org/config/theme-configs#sidebar
    sidebar: {
      "/": sidebarCommon(),
      "/en/": sidebarEnglish(),
      "/no/": sidebarNorwegian(),
      // "/overview-by-role/": [
      //   {
      //     text: "Overview by role",
      //     link: "/overview-by-role/",
      //     items: [
      //       { text: "Scientist", link: "/overview-by-role/scientist/" },
      //       { text: "Scientific leader", link: "/overview-by-role/scientific-leader/" },
      //       // { text: "Scientific administrator", link: "/overview-by-role/scientific-administrator/" },
      //       { text: "Teacher", link: "/overview-by-role/teacher/" },
      //       { text: "Private enterprise", link: "/overview-by-role/private-enterprise/" },
      //       { text: "Department", link: "/overview-by-role/department/" },
      //       { text: "Clinic", link: "/overview-by-role/clinic/" },
      //     ]
      //   },
      // ],
      // "/overview-by-field/": [
      //   {
      //     text: "Overview by field",
      //     link: "/overview-by-field/",
      //     items: [
      //       { text: "Genomics", link: "/overview-by-field/genomics" },
      //       { text: "Statistics", link: "/overview-by-field/statistics" },
      //       { text: "Engineering", link: "/overview-by-field/engineering" },
      //     ]
      //   },
      // ],
      // "/tools/": [
      //   {
      //     text: "Tools",
      //     items: [
      //       { text: "Introduction", link: "/tools/" },
      //       { text: "Workbench", link: "/tools/workbench/" },
      //     ]
      //   },
      // ],
      // "/compliance/": [
      //   {
      //     text: "Compliance",
      //     link: "/compliance/",
      //     items: [
      //       { text: "Quality management", link: "/compliance/quality-management/" },
      //       { text: "Information security", link: "/compliance/information-security/" },
      //       { text: "Information privacy", link: "/compliance/information-privacy/" },
      //     ]
      //   },
      // ],
      // "/pillars/": [
      //   {
      //     text: "Pillars",
      //     link: "/pillars/",
      //     items: [
      //       { text: "Trust", link: "/pillars/trust/" },
      //       { text: "Technology", link: "/pillars/technology/" },
      //       { text: "Collaboration", link: "/pillars/collaboration/" },
      //     ]
      //   },
      // ],
      // "/use-cases/": [
      //   {
      //     text: '🧪 Use cases',
      //     link: "/pillars/",
      //     items: [
      //       { text: "Sensitive AI", link: "/use-cases/sensitive-ai" },
      //       { text: "Phenotyping", link: "/use-cases/phenotyping" },
      //       { text: "Image processing", link: "/use-cases/image-processing" },
      //       { text: "Image annotation", link: "/use-cases/image-annotation" },
      //       { text: "Text annotation", link: "/use-cases/text-annotation" },
      //       { text: "Generative AI", link: "/use-cases/generative-ai" },
      //       { text: "Machine learning", link: "/use-cases/machine-learning" },
      //     ]
      //   },
      // ],
    },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"]
    }
  }
})

function navigationMenu() {
  return [
    { text: "Home", link: "/" },
    { text: "Researchers", link: "/en/researchers/" },
    { text: "Organizations", link: "/en/organizations/" },
    { text: 'News', link: '/articles/', activeMatch: '/articles/' },
    {
      text: 'About',
      items: [
        { text: "About us", link: "/en/about/about-us" },
        { text: "Careers", link: "/en/about/careers" },
        { text: "Glossary", link: "/en/about/glossary" },
        // { text: 'Products', link: '/products/' },
        // { text: 'Compliance', link: '/compliance/' },
        // { text: 'Pillars', link: '/pillars/' },
        // { text: 'Tools', link: '/tools/' },
        // { text: 'Resources', link: '/resources/' },
      ],
    },
    {
      text: '🇳🇴',
      items: [
        { text: "Forskningsdeltakere", link: "/no/forskningsdeltakere/" },
      ],
    },
    // {
    //   text: 'Products',
    //   items: [
    //     { text: 'Get started', link: '/products/' },
    //     {
    //       text: 'Core products',
    //       items: [
    //         { text: '🧭 Explore', link: '/products/explore/' },
    //         { text: '🧬 Evolve', link: '/products/evolve/' },
    //         { text: '👩‍💼 Scientific Suite', link: '/products/scientific-suite/' },
    //       ]
    //     },
    //     {
    //       text: 'Overview by roles',
    //       items: [
    //         { text: "Scientist", link: "/overview-by-role/scientist/" },
    //         { text: "Scientific leader", link: "/overview-by-role/scientific-leader/" },
    //         // { text: "Scientific administrator", link: "/overview-by-role/scientific-administrator/" },
    //         { text: "Teacher", link: "/overview-by-role/teacher/" },
    //         { text: "Private enterprise", link: "/overview-by-role/private-enterprise/" },
    //         { text: "Department", link: "/overview-by-role/department/" },
    //         { text: "Clinic", link: "/overview-by-role/clinic/" },
    //       ]
    //     },
    //   ],
    // },
    // {
    //   text: 'Solutions',
    //   items: [
    //     {
    //       text: '👩‍🔬 Overview by field',
    //       items: [
    //         { text: "Genomics", link: "/overview-by-field/genomics" },
    //         { text: "Statistics", link: "/overview-by-field/statistics" },
    //         { text: "Engineering", link: "/overview-by-field/engineering" },
    //       ]
    //     },
    //     {
    //       text: '🧪 Use cases',
    //       items: [
    //         { text: "Sensitive AI", link: "/use-cases/sensitive-ai" },
    //         { text: "Phenotyping", link: "/use-cases/phenotyping" },
    //         { text: "Image processing", link: "/use-cases/image-processing" },
    //         { text: "Image annotation", link: "/use-cases/image-annotation" },
    //         { text: "Text annotation", link: "/use-cases/text-annotation" },
    //         { text: "Generative AI", link: "/use-cases/generative-ai" },
    //         { text: "Machine learning", link: "/use-cases/machine-learning" },
    //       ]
    //     },
    //   ],
    // },
    // {
    //   text: 'Resources',
    //   items: [
    //     { text: "Agreements", link: "/resources/agreements" },
    //     { text: "Prices", link: "/resources/prices" },
    //     { text: "Documentation", link: "https://docs.hdc.ntnu.no/" },
    //     { text: "Documentation", link: "https://docs.hdc.ntnu.no/" },
    //     { text: 'Community', link: 'https://docs.hdc.ntnu.no/do-science/community/' },
    //     { text: 'Certificates', link: 'https://docs.hdc.ntnu.no/govern-science/compliance/certificates/' },
    //     { text: 'Tingweek', link: 'https://docs.hdc.ntnu.no/govern-science/tingweek/' },
    //   ],
    // },
  ]
}

function sidebarCommon() {
  return [
    {
      text: "Welcome",
      items: [
        { text: "Home", link: "/" },
        { text: "About us", link: "/en/about/about-us" },
        { text: "Careers", link: "/en/about/careers" },
        {
          text: 'News',
          link: '/articles/',
          activeMatch: '/articles/',
        },
        // { text: "Products", link: "/products/" },
        // { text: "Overview by role", link: "/overview-by-role/" },
        // { text: "Overview by field", link: "/overview-by-field/" },
        // { text: "Compliance", link: "/compliance/" },
        // { text: "Pillars", link: "/pillars/" },
        // { text: "Tools", link: "/tools/" },
        // {
        //   text: 'Resources',
        //   link: '/resources/',
        //   items: [
        //     { text: "Agreements", link: "/resources/agreements" },
        //     { text: "Prices", link: "/resources/prices" },
        //   ]
        // },
      ]
    }
  ]
}

function sidebarEnglish() {
  return [
    {
      items: [
        { text: "Researchers", link: "/en/researchers/" },
        { text: "Organizations", link: "/en/organizations/" },
        { text: "Price estimator", link: "/en/price-calculator/" },
      ]
    },
  ]
}

function sidebarNorwegian() {
  return [
    {
      items: [
        { text: "Forskningsdeltakere", link: "/no/forskningsdeltakere/" },
      ]
    },
  ]
}
