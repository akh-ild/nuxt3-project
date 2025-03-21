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
  <div v-if="popup === name" class="popup fixed top-0 left-0 z-[999] w-full h-full flex items-center justify-center">
    <div class="popup-content border bg-white w-[400px] p-[48px] z-50 relative">
      <slot></slot>
      <div class="absolute right-4 top-4 cursor-pointer hover:opacity-50" @click="setPopup('')">Close</div>
    </div>
    <div class="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50" @click="setPopup('')" />
  </div>
</template>
