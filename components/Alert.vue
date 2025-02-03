<script setup>
const { sayHello } = useConsole();

import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const target = ref(null)
onClickOutside(target, event => console.log(event))
</script>

<template>
  <h1 ref="target" class="alert" @click="sayHello">
    This is an alert
  </h1>
</template>
