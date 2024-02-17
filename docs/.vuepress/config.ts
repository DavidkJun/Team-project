import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import MarkdownItPlantuml from 'markdown-it-plantuml';

export default defineUserConfig({
  base: "/db-course-hope-template/",

  lang: "en-US",
  title: "Назва проєкту",
  description: "Лабораторні роботи",

  theme,

  extendsMarkdown: md =>{
    md.use(MarkdownItPlantuml);
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});