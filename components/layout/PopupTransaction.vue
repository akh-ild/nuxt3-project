<script setup>
  const { transactionName, transactionSum, transactionType, pushTransaction } = useTransactions();
  const { options } = useOptions();

</script>

<template>
  <UiPopup name="transaction">
    <div class="title text-2xl font-semibold mb-4">
      New transaction
    </div>
    <form>
      <div class="radio-wrapper mb-3">
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
      <div class="flex flex-col space-y-1.5 mb-3">
        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="framework">
          Name
        </label>
        <UiSelect :options="options" v-model="transactionName" />
      </div>
      <div class="flex flex-col space-y-1.5 mb-3">
        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="name">
          Sum
        </label>
        <UiInput v-model="transactionSum" placeholder="Name of your project" />
      </div>
      <UiButton type="secondary" class="button" @click.prevent="pushTransaction">Add</UiButton>
    </form>
  </UiPopup>
</template>
