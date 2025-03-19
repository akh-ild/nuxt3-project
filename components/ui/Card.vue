<script setup>
  const { setPopup } = usePopup();
  const { setActiveTransaction } = useTransactions();

  const props = defineProps({
    card: {
      type: Object,
      default: () => {},
    },
    isForm: {
      type: Boolean,
      default: false
    },
  });

  const onClick = (val) => {
    setActiveTransaction(val);
    setPopup('list');
  };
</script>

<template>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-[450px]">
    <div class="flex justify-between p-6">
      <div class="title text-2xl font-semibold leading-none tracking-tight">
        {{ card.title }}
      </div>
      <div class="subtitle text-sm text-muted-foreground">
        {{ `$${card.amount}` }}
      </div>
    </div>
    <div class="items-center px-6 py-3 flex justify-end border-t">
      <UiButton v-if="card.label" type="primary" @click="onClick(card.title)">
        {{ card.label }}
      </UiButton>
    </div>
  </div>
</template>
