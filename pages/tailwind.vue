<script setup lang="ts">
 definePageMeta({
    layout: 'tailwind',
  });
</script>

<template>
  <div class="page-tailwind pt-8 dark:bg-slate-900">
    <Tailwind v-if="false" class="tailwind mb-5" />
    <TailwindTypography class="typography mb-5" />
    <TailwindFlex v-if="false" class="flex mb-5" />
    <TailwindGrid v-if="false" class="grid mb-5" />
    <TailwindLayouts v-if="false" class="layout mb-5" />
    <TailwindEffects v-if="false" class="effects mb-5" />
  </div>
</template>
