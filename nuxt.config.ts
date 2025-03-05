// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';

export default defineNuxtConfig({
  app: {
    rootId: 'nuxt3',
  },
  devServer: {
    port: 3001,
  },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ["~/assets/css/main.scss"],
  compatibilityDate: '2025-01-31',
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
    'nuxt-highcharts',
  ],
  routeRules: {
    // '/custom': { redirect: '/' }
  },
});
