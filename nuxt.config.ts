import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr:false,
  css: ['~/assets/css/global.css'],
  runtimeConfig: {
    public: {
      apiBase: '',
    },
    private: {
      apiKey: process.env.API_KEY,
      // databaseUrl: process.env.DATABASE_URL
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/test-utils/module',
  ],
  // googleFonts: {
  //   families: {
  //     Ubuntu: {
  //       wght: [400, 700], // Regular and Bold weights for Ubuntu
  //     },
  //   },
  // },
  buildDir: 'dist'
})
