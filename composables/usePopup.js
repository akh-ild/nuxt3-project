import { ref } from "vue";

const popup = ref('');
export const usePopup = () => {
  function setPopup(value) {
    popup.value = value;
  };
  return {
    popup,
    setPopup
  };
};
