<script setup lang="ts">
import { useLazyFetch } from 'nuxt/app';
import { toRaw } from 'vue';

  /* definePageMeta({
    middleware: 'auth',
  }); */

  const { count } = useCounter();

  /* import { useCounterStore } from '~/stores/myStore';
  const store = useCounterStore();
  console.log('pinia store', store); */

  const { data: products, pending } = await useLazyFetch('/api/products');
  // console.log(toRaw(products.value));
</script>

<template>
  <Counter />
  <Alert />
  <img src="/images/1.png" alt="">
  <IconsCat />
  <div>Counter: {{ count }}</div>

  <p>{{ pending ? 'Loading...' : products }}</p>
</template>
