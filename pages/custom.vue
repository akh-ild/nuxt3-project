<script setup>
import { ref } from 'vue';

  definePageMeta({
    layout: 'custom',
  });

  const title = ref('Nuxt 3 app');
</script>

<template>
  <div>custom</div>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" content="This is custom page" />
    <Style type="text/css" children="body { color: green; }" ></Style>
  </Head>
</template>
