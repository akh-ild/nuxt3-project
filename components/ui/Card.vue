<script setup>
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
      <UiButton v-if="card.label" type="primary">
        {{ card.label }}
      </UiButton>
    </div>
  </div>
</template>
