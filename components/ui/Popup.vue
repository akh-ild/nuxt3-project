<script setup>
const { popup, setPopup } = usePopup();

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div v-if="popup === name" class="popup border bg-white fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[800px] h-[800px] p-[48px]">
    <slot></slot>
    <div class="absolute right-4 top-4 cursor-pointer hover:opacity-50" @click="setPopup('')">Close</div>
  </div>
</template>
