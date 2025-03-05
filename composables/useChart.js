import { computed, onMounted, ref } from 'vue';
const currentCategory = ref('');
const data = ref([]);
const categories = ref(
  {
    today: [
        "00:00", "01:00", "02:00", "03:00",
        "04:00", "05:00", "06:00", "07:00",
        "08:00", "09:00", "10:00", "11:00",
        "12:00", "13:00", "14:00", "15:00",
        "16:00", "17:00", "18:00", "19:00",
        "20:00", "21:00", "22:00", "23:00",
    ],
    week: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    year: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
);
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
}));


export const useChart = () => {
  function setCategory(title) {
    currentCategory.value = categories.value[title.toLowerCase()];
    generateRandomData(currentCategory.value.length);
  };

  function generateRandomData(number = 24) {
    let values = [];
    for (let i = 0; i < number; i++) {
      values.push(Math.floor(Math.random() * 100))
    }
    data.value = values;
    return values;
  };

  function generateMonth() {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();

    function generateMonthDates() {
      let monthDates = [];
      let daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

      for (let i =1; i <= daysInMonth; i++) {
        let dayString = ("0" + i).slice(-2); // day 01, 02 ...
        let monthString = ("0" + currentMonth).slice(-2); // month 01, 02 ...
        monthDates.push(monthString + "/" + dayString);
      }

      return monthDates;
    }

    let month = generateMonthDates();
    categories.value = ({...categories.value, month});
  }

  return {
    chartOptions,
    setCategory,
    generateMonth,
  };
};
