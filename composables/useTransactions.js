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
    filterTransactions();
    setAmount();
    if (JSON.parse(localStorage.getItem("transactions"))) {
      transactionsList.value = JSON.parse(localStorage.getItem("transactions"));
    };
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
    localStorage.setItem("transactions", JSON.stringify(transactionsList.value));
    resetFields();
    filterTransactions();
    setAmount();
    return transactions;
  };

  function filterTransactions() {
    transactions.value.forEach((transaction) => {
      transaction.list = (transactionsList.value.filter((item) => item.type === transaction.title));
    });
  };

  function setAmount() {
    transactions.value.forEach((transaction) => {
      transaction.amount = transaction.list.reduce((acc, item) => acc + item.num, 0);
    });
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
