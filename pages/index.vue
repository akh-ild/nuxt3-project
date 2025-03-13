<script setup>
  const { cards } = useTransactions();
  const { setPopup } = usePopup();
</script>

<template>
  <div class="grid w-full gap-4">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, welcome back!</p>
        <h1>Dashboard</h1>
      </div>
      <!-- todo: create popup -->
      <UiButton type="secondary" @click="setPopup('transaction')">
        Create new transaction
      </UiButton>
    </header>
    <main class="grid gap-4">
      <Tabs class="tabs" />
    </main>
    <footer class="max-w-[1200px] lg:flex lg:items-center gap-1">
      <UiCard v-for="(item, index) in cards" :key="index" :card="item" />
    </footer>
  </div>
</template>
