<script setup>
const { count } = useCounter();
</script>

<template>
  <div class="counter">
    <div>Counter: {{ count }}</div>
    <button @click="count++">+</button>
    <button @click="count--">-</button>
  </div>
</template>
