// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", 'nuxt-icon'],
  css: ["@/assets/style/main.css"],

  tailwindcss: {
    cssPath: "@/assets/style/main.css",
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Space Mono", "monospace"],
            abril: ["Abril Fatface", "cursive"],
            sacramento: ["Sacramento", "cursive"], //noppe
            Berkshire:["Berkshire Swash", "cursive"], //no
            Cinzel:["Cinzel Decorative", "cursive"], //okay...
            EB:["EB Garamond", "serif"], //hmm k
            Indie:["Indie Flower", "cursive"], //absolotely no
            Lobster:["Lobster", "cursive"], //No way
            Lugrasimo:["Lugrasimo", "cursive"], //uhhh no
            Nanum:["Nanum Myeongjo", "serif"], //can be but too classy
            Handjet:["Handjet", "cursive"],
            Inter:["Inter", "sans-serif"]




          },
          colors: {
            main_heading_background: "#9883F1",
            main_bg: "#D9D9D9",
            sub_background: "#D8D2F0",
            dark_sub_background:"#B3A8E2",
            main_color:"#7838E0",
            dark_main_color:"#172C51"
          },
        },
      },
    },
  },
});
