<script setup>
  const { activeTransaction } = useTransactions();
</script>

<template>
  <UiPopup name="list">
    <div class="title text-2xl font-semibold mb-4">
      Transactions list
    </div>
    <div class="list">
      <div v-for="(item, index) in activeTransaction.list" :key="index" class="flex gap-2">
        <div class="index">{{ `${index + 1}.` }}</div>
        <div class="title">{{ item.title }}</div>
        <div class="num">{{ item.num }}</div>
      </div>
    </div>
    <div class="total flex gap-3 mt-3">
      <div class="title">Total</div>
        <div class="num">{{ activeTransaction.amount }}</div>
    </div>
  </UiPopup>
</template>
