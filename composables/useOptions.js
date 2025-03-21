import { onMounted } from 'vue';

const options = [
  {
    id: 0,
    value: 'Home',
  },
  {
    id: 1,
    value: 'Grocery',
  },
  {
    id: 2,
    value: 'Car',
  },
];

export const useOptions = () => {
  onMounted(() => {
    /* if (JSON.parse(localStorage.getItem("transactions"))) {
      transactionsList.value = JSON.parse(localStorage.getItem("transactions"));
    }; */
  });

  function pushOption() {
    // if (transactionName.value === '' || transactionSum.value === 0) {
    //   return;
    // }
    // localStorage.setItem("transactions", JSON.stringify(transactionsList.value));
  };

  return {
    options,
    pushOption,
  };
}
