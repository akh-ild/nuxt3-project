// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

import { resolve } from 'path';

export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'),
  },

  css: ["~/assets/css/main.scss"],
  compatibilityDate: '2025-01-31',
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  routeRules: {
    '/custom': { redirect: '/' }
  }
});
