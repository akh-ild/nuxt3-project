import { ref } from 'vue'

export const useTabs = () => {
  const { setCategory } = useChart();

  const tabs = [
    {
      id: 0,
      title: 'Today',
    },
    {
      id: 1,
      title: 'Week',
    },
    {
      id: 2,
      title: 'Month',
    },
    { id: 3,
      title: 'Year',
    },
  ];

  const activeTabId = ref(0);

  const activateTab = (tab) => {
    activeTabId.value = tab.id;
    setCategory(tab.title);
  };

  return {
    tabs,
    activeTabId,
    activateTab,
  };
};
