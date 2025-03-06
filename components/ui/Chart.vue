<script setup>
  const { chartOptions } = useChart();
</script>

<template>
  <div class="border p-4 rounded-lg">
    <highchart :options="chartOptions" class="w-full" />
  </div>
</template>
