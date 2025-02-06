import { useState } from "nuxt/app"

export const useCounter = () => {
  const count = useState(() => 0);
  return {
    count,
  }
};
