<script setup lang="ts">
  /* definePageMeta({
    middleware: 'auth',
  }); */

  const { count } = useCounter();

  /* import { useCounterStore } from '~/stores/myStore';
  const store = useCounterStore();
  console.log('pinia store', store); */

  const { data } = await useFetch('/api/hello')
</script>

<template>
  <Counter />
  <Alert />
  <img src="/images/1.png" alt="">
  <IconsCat />
  <div>Counter: {{ count }}</div>

  <pre>{{ data }}</pre>
</template>
