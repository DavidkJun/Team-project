import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Назва проєкту",
  description: "Лабораторні роботи",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
