import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:created', () => {
    console.log('created');
  });

  /* return {
    provide: {
      sayHallo: (msg: string) => console.log(`Hallo ${msg}`),
    },
  }; */
})
