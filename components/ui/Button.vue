<script>
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
  @apply py-2 px-3 text-white rounded-md transition duration-300 disabled:bg-slate-600 disabled:hover:bg-slate-600;
  &_primary {
    @apply bg-blue-400 hover:bg-blue-600 dark:bg-red-400 dark:hover:bg-red-600;
  }
  &_secondary {
    @apply bg-cyan-400 hover:bg-cyan-600;
  }
}
</style>
