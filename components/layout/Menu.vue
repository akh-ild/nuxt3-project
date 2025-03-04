<script setup>
  const items = ref([
    {
      title: 'Overview',
      path: '/overview',
      icon: 'ri:dashboard-line',
    },
    {
      title: 'Transactions',
      path: '/transactions',
      icon: 'lucide:arrow-left-right',
    },
    {
      title: 'Account',
      path: '/account',
      icon: 'lucide:bolt',
    },
    {
      title: 'Contacts',
      path: '/contacts',
      icon: 'lucide:square-user-round',
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: 'lucide:settings',
    }
  ]);
</script>

<template>
  <div class="menu">
    <header class="flex items-center gap-2 p-4 hover:scale-[101%]" transition cursor-pointer>
      <IconLogo />
      <div class="font-bold">NUxt-finance</div>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <NuxtLink v-for="item in items" :key="item.title" :href="item.path" class="flex items-center gap-2 px-2 py-1 transition roudeed cursor-pointer hover:bg-neutral-100">
          <Icon size="20" :name="item.icon" color="black" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
}
</style>
