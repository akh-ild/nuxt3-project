<script setup>
  import { ref, resolveComponent } from 'vue'

  const tabs = [
    {
      id: 0,
      title: 'Today',
      content: resolveComponent("TabsToday"),
    },
    {
      id: 1,
      title: 'Week',
      content: 'This week',
      content: resolveComponent("TabsWeek"),
    },
    { id: 2,
      title: 'Month',
      content: 'This month',
      content: resolveComponent("TabsMonth"),
    },
    { id: 3,
      title: 'Year',
      content: 'This year',
      content: resolveComponent("TabsYear"),
    },
  ];

  const activeTabId = ref(0)

  const activateTab = (id) => {
    activeTabId.value = id;
  }
</script>

<template>
  <div>
    <div class="tabs flex gap-1 mb-4 p-1 bg-slate-200 rounded-lg w-[400px]">
      <TabsTrigger v-for="tab in tabs" :key="tab.id" :class="{ 'bg-white': tab.id === activeTabId }" @click="activateTab(tab.id)">
        {{ tab.title }}
      </TabsTrigger>
    </div>
    <div class="content">
      <TabsContent v-for="tab in tabs" :key="tab.id" class="tab-content">
        <div v-if="tab.id === activeTabId">
          <component :is="tab.content" />
        </div>
      </TabsContent>
    </div>
  </div>
</template>
