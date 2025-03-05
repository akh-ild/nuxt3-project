<script setup>
  import { computed, ref } from 'vue';

  const categories = ref(
    {
      'today': [],
      'week': [],
      'month': [],
      'year': [],
    },
  );
  const data = ref([16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2, 22.0, 17.8]);
  const currentCategory = ref(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

  const chartOptions = computed(() => ({
    chart: {
      type: 'line',
      animation: {
        enabled: false,
      },
    },
    legend: {
      enabled: false,
    },
    title: {
      text: '',
    },
    xAxis: {
      gridLineColor: 'transparent',
      categories: currentCategory.value,
    },
    yAxis: {
      gridLineColor: 'transparent',
      title: {
        text: '',
      },
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false,
        },
        dataLabels: {
          enabled: false,
        },
        enableMouseTracking: true,
      },
    },
    series: [
      {
        name: 'line',
        lineWidth: '4px',
        color: {
          linearGradient: {},
          stops: [
            [0, 'rgba(252, 176, 69, 1)'],
            [0.33, 'rgba(253, 29, 29, 1)'],
            [0.66, 'rgba(131, 58, 180, 1)'],
            [1, 'rgba(29, 217, 83, 1)'],
          ],
        },
        data: data.value,
      },
    ]
  }))
</script>

<template>
  <div>
    <highchart :options="chartOptions" class="w-full" />
  </div>
</template>
