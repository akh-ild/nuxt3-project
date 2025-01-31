<script setup>
const nuxt = useNuxtApp();

console.log(nuxt);
</script>

<template>
  <h1>event.id: {{ $route.params.id }}</h1>
</template>
