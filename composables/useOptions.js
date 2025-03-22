import { onMounted, ref } from 'vue';

const optionName = ref('');
const options = ref([
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
]);

export const useOptions = () => {
  onMounted(() => {
    if (JSON.parse(localStorage.getItem("options"))) {
      options.value = JSON.parse(localStorage.getItem("options"));
    };
  });

  function pushOption() {
    if (optionName.value === '') {
      return;
    }
    options.value.push(
      {
        id: options.value.length,
        value: optionName.value,
      }
    );
    resetFields();
    console.log('options', options.value);
    localStorage.setItem("options", JSON.stringify(options.value));
  };

  function resetFields() {
    optionName.value = '';
  };

  return {
    options,
    pushOption,
    optionName,
  };
}
