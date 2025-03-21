<script setup>
  const { pushOption } = useOptions();

</script>

<template>
  <UiPopup name="option">
    <div class="title text-2xl font-semibold mb-4">
      New option
    </div>
    <form>
      <div class="flex flex-col space-y-1.5 mb-3">
        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="name">
          Name option
        </label>
        <UiInput v-model="optionName" placeholder="Name option" />
      </div>
      <UiButton type="secondary" class="button" @click.prevent="pushOption">Add</UiButton>
    </form>
  </UiPopup>
</template>
