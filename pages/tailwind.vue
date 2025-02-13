<script setup lang="ts">
 definePageMeta({
    layout: 'tailwind',
  });
</script>

<template>
  <div class="page-tailwind pt-8">
    <Tailwind v-if="false" class="tailwind mb-5" />
    <TailwindTypography v-if="false" class="typography mb-5" />
    <TailwindFlex v-if="false" class="flex mb-5" />
    <TailwindGrid v-if="false" class="grid" />
    <TailwindLayouts class="layout" />
  </div>
</template>
