import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";


export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  iconAssets: "fontawesome-with-brands",

  // logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  editLink: false,

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "docs",
  // navbar
  navbar,

  // sidebar
  sidebar,


  footer: "ECL 2.0 Licensed | Copyright © [YYYY] [Your Name] ",

  displayFooter: true,

 // integrate plantuml into theme 

  plugins: {
    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      mermaid: true,
    },
  },
});
