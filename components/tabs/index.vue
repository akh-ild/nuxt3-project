<script setup>
  const { tabs, activeTabId, activateTab } = useTabs();
  const { setCategory, generateMonth } = useChart();

  onMounted(() => {
    setCategory('today');
    generateMonth();
  });
</script>

<template>
  <div>
    <div class="tabs flex gap-1 mb-4 p-1 bg-slate-200 rounded-lg w-[400px]">
      <TabsTrigger v-for="tab in tabs" :key="tab.id" :class="{ 'bg-white': tab.id === activeTabId }" @click="activateTab(tab)">
        {{ tab.title }}
      </TabsTrigger>
    </div>
    <div class="content">
      <TabsContent v-for="tab in tabs" :key="tab.id" class="tab-content">
        <div v-if="tab.id === activeTabId">
          <UiChart />
        </div>
      </TabsContent>
    </div>
  </div>
</template>
