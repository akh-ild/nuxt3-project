import { onMounted, ref } from 'vue';

const transactionName = ref('Home');
const transactionSum = ref(0);
const transactionType = ref('expense');
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

const transactionsList = ref([]);

const transactions = ref([
  {
    title: 'income',
    list: [],
    amount: 0,
    label: 'View incomes',
    icon: 'solar:ticket-sales-outline',
  },
  {
    title: 'expense',
    list: [],
    amount: 0,
    label: 'View expenses',
    icon: 'heroicon-outline:receipt-refund',
  },
]);

export const useTransactions = () => {
  onMounted(() => {
    // TODO: get transactions from localstorage
    /* if (JSON.parse(localStorage.getItem("transactions"))) {
      transactions.value = JSON.parse(localStorage.getItem("transactions"));
    }; */
  });

  function pushTransaction() {
    if (transactionName.value === '' || transactionSum.value === 0) {
      return;
    }
    transactionsList.value.push(
      {
        title: transactionName.value,
        num: parseInt(transactionSum.value),
        type: transactionType.value,
      }
    );
    resetFields();
    filterTransactions();
    localStorage.setItem("transactions", JSON.stringify(transactions.value));
    return transactions;
  };

  function filterTransactions() {
    transactions.value.forEach((transaction) => {
      transaction.list = (transactionsList.value.filter((item) => item.type === transaction.title));
    });
    setAmount();
  };

  function setAmount() {
    transactions.value.forEach((transaction) => {
      transaction.amount = transaction.list.reduce((acc, item) => acc + item.num, 0);
    });
    console.log(transactions.value);
  };

  function resetFields() {
    transactionName.value = 'Home';
    transactionSum.value = 0;
    transactionType.value = 'expense';
  };

  return {
    transactionName,
    transactionSum,
    transactionType,
    transactionsList,
    pushTransaction,
    transactions,
    options,
  };
}
