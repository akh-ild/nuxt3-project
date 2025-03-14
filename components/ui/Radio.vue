<script setup>
import { ref } from 'vue';

const props = defineProps({
    label: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
})

const input = ref(null);

defineEmits(['update:modelValue']);
defineExpose({ input });
</script>

<template>
  <div class="radio flex gap-[8px] flex-row-reverse">
    <div class="label text-[18px] mb-[4px]">{{ props.label }}</div>
    <input
      ref="input"
      :value="props.id"
      type="radio"
      :id="props.id"
      :name="props.name"
      :checked="modelValue === value"
      class="input-radio"
      @input="$emit('update:modelValue', props.id)"
     />
  </div>
</template>
