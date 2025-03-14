<script setup>
const { transactionType } = useTransactions();
</script>

<template>
  <UiPopup name="transaction">
    <div class="title text-2xl font-semibold">
      New transaction
    </div>
    <form>
      <div class="radio-wrapper">
        <UiRadio
          v-model="transactionType"
          label="Income"
          id="income"
          name="category"
          class="radio"
         />
        <UiRadio
          v-model="transactionType"
          label="Expense"
          id="expense"
          name="category"
          class="radio"
         />
      </div>
    </form>
  </UiPopup>
</template>
