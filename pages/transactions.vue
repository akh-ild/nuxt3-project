<script setup>
  const { cards } = useCards();
</script>

<template>
  <div class="grid w-full gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, welcome back!</p>
        <h1>Dashboard</h1>
      </div>
      <div class="w-[120px] h-[36px] bg-neutral-200"></div>
    </header>
    <main class="grid gap-4">
      <Tabs class="tabs" />
    </main>
    <footer class="lg:flex lg:items-center lg:justify-between gap-1">
      <UiCard v-for="(item, index) in cards" :key="index" :card="item" />
    </footer>
  </div>
</template>
