<script setup lang="ts">
  import { refreshNuxtData, useAsyncData, useHead, useLazyFetch } from 'nuxt/app';

  useHead({
    title: 'Nuxt3 app',
    meta: [
      {
        name: 'description',
        content: 'This is index page',
      },
      {
        name: 'keywords',
        content: 'Nuxt.js 3, vue3, scss, tailwind, middleware, pinia',
      },
    ],
    script: [
      {
        children: 'console.log("index page")',
      }
    ],
  });

  /* definePageMeta({
    middleware: 'auth',
  }); */

  const { count } = useCounter();

  /* import { useCounterStore } from '~/stores/myStore';
  const store = useCounterStore();
  console.log('pinia store', store); */

  // const { data: products, pending } = await useLazyFetch('/api/products');
  // console.log(toRaw(products.value));

  const { data: productCount, pending } = await useAsyncData('products', () =>
    $fetch('/api/asyncProducts')
  );

  const refresh = () => refreshNuxtData('products');
</script>

<template>
  <Counter />
  <Alert />
  <img src="/images/1.png" alt="">
  <IconsCat />
  <div>Counter: {{ count }}</div>

  <!-- <p>{{ pending ? 'Loading...' : products }}</p> -->
  <p>{{ pending ? 'Loading...' : productCount }}</p>
  <button @click="refresh">Refresh</button>
</template>
