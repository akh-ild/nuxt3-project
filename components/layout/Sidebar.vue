<script setup>
  const open = ref(false);
</script>

<template>
  <div class="sidebar">
    <div class="lg:hidden flex items-center justify-between w-full h-full p-4 z-50">
      <IconLogo />
      <Icon class="z-50 cursor-pointer left-2 top-2" size="30" name="iconamoon:menu-burger-horizontal" @click="open = true" />
      <div v-if="open" class="fixed bg-white top-0 left-0 z-[999] w-full h-full h-screen ">
        <Icon class="absolute z-50 cursor-pointer right-4 top-4" size="30" name="material-symbols:close" @click="open = false" />
        <LayoutMenu />
      </div>
    </div>
    <div class="hidden lg:flex w-[250px] h-screen flex-col justify-between border-r">
      <LayoutMenu />
      <div>
        UserItem
      </div>
    </div>
  </div>
</template>
