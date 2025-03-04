<template>
  <div class="layout-default grid items-start">
    <div class="grid items-start lg:flex">
      <LayoutSidebar />
      <div class="w-full p-4">
        <slot />
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.layout-default {
}
</style>
