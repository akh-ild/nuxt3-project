import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('event', {
    mounted (el, binding) {
      el.addEventListener('click', () => {
        console.log('click', binding.value);
      });
    },
  });
});
