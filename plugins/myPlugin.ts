import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      sayHallo: (msg: string) => console.log(`Hallo ${msg}`),
    },
  };
})
