<script setup ts>
const { sayHello } = useConsole();

import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const target = ref(null)
onClickOutside(target, event => console.log(event))

/* const { $sayHallo } = useNuxtApp();
$sayHallo('Ildar'); */
</script>

<template>
  <h1 ref="target" class="alert" @click="sayHello">
    This is an alert
  </h1>
</template>
