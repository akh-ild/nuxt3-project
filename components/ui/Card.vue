<script setup>
const props = defineProps({
  card: {
    type: Object,
    default: () => {},
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
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-[350px]">
    <div class="flex flex-col space-y-1.5 p-6">
      <div class="title text-2xl font-semibold leading-none tracking-tight">
        {{ card.title }}
      </div>
      <div class="subtitle text-sm text-muted-foreground">Subtitle</div>
    </div>
    <div class="p-6 pt-0">
      <form>
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
    <div class="items-center p-6 pt-0 flex justify-between">
      <UiButton type="primary">
        Cancel
      </UiButton>
      <UiButton type="secondary">
        Deploy
      </UiButton>
    </div>
  </div>
</template>
