<script setup>
const props = defineProps({
    options: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: String,
      default: '',
    },
});

defineEmits(['update:modelValue']);
</script>

<template>
  <select
    :value="modelValue"
    aria-hidden="true"
    tabindex="-1"
    class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1"
    @change="$emit('update:modelValue', $event.target.value)"
  >
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
      :selected="option.value === modelValue"
    >
      {{ option.value }}
    </option>
  </select>
</template>
