import { defineNuxtRouteMiddleware, navigateTo } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
  /* const isLoggedIn = true;
  console.log(to);
  if (isLoggedIn) {
    // redirect to the page we want to go
    return navigateTo(to.fullPath);
  }
  // redirect to index page
  return navigateTo("/"); */
});
