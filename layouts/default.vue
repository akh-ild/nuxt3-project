<template>
  <div class="layout-default w-screen h-screen bg-blue-500">
    <Header />
    <slot />
  </div>
</template>


<style scoped lang="scss">
.layout-default {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
