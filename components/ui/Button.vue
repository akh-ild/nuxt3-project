<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'primary', // primary, secondary
  },
});
</script>

<template>
  <button class="btn" :class="`btn_${type}`" @click="handleClick">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  @apply inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition disabled:pointer-events-none hover:opacity-50 border h-10 px-4 py-2;
  &_primary {
    @apply bg-white text-black;
  }
  &_secondary {
    @apply bg-black text-white;
  }
}
</style>
