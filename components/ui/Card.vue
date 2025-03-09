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
})
const options = [
    {
      id: 0,
      value: 'Next.js',
    },
    {
      id: 1,
      value: 'SvelteKit',
    },
    {
      id: 2,
      value: 'Astro',
    },
    { id: 3,
      value: 'Nuxt.js',
    },
  ];
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
    <div class="p-6 pt-0">
      <form v-if="isForm">
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="name">
              Name
            </label>
            <UiInput placeholder="Name of your project" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="framework">
              Framework
            </label>
            <UiSelect :options="options" />
          </div>
        </div>
      </form>
    </div>
    <div class="items-center px-6 py-3 flex justify-between border-t">
      <div class="text-sm text-neutral-400">
        {{ card.description }}
      </div>
      <UiButton v-if="card.label" type="primary">
        {{ card.label }}
      </UiButton>
      <UiButton v-if="false" type="secondary">
        Deploy
      </UiButton>
    </div>
  </div>
</template>
