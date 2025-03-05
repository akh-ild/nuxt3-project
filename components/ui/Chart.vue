<script setup>
  const { chartOptions } = useChart();
</script>

<template>
  <div>
    <highchart :options="chartOptions" class="w-full" />
  </div>
</template>
