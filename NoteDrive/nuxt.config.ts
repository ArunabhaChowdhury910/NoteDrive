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
            Inter:["Inter", "sans-serif"],

            
            Montserrat: ["Montserrat", "sans-serif"],
            Montserrat_Alternative:["Montserrat Alternates", "sans-serif"],
            Playfair: ["Playfair Display", "serif"],
            Space:["Space Mono", "monospace"],



          },
          colors: {
            main_heading_background: "#9883F1",
            main_bg: "#D9D9D9",
            sub_background: "#D8D2F0",
            dark_sub_background:"#B3A8E2",
            main_color:"#7838E0",
            dark_main_color:"#172C51",
            halka_pink:"#E1CDFB",
            //suggested by AI for purpel
            Purple: "#9883F1",
            Light_Purple: "#BAA8FF",
            Dark_Gray: "#333333",
            Light_Gray: "#DCD9DD",
            Teal: "#34C2C9",
            //suggested by AI for just purpel
            Deep_Purple: "#6A0DAD", //(for a strong and distinctive base)
            Lavender: "#CAA2E6", //(to add softness and balance)
            Mauve: "#9775A8", //(for a deeper shade that complements the primary color)
            Lighter_Gray: "#E5E5E5", //(for a clean and modern background)
            Charcoal_Gray: "#333333", //(for subtle contrasts and elegance)
            Electric_Blue: "#4F8DE8", //(to provide a pop of energy and attention)

            //coolors.com 
            Whitish:"#F4EFFA",
            Dark:"#2F184B",
            Purpleish:"#532B88",
            lightish:"#9B72CF",
            very_light:"#C8B1E4",
          },
        },
      },
    },
  },
});
