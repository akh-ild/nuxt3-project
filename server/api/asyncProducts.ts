let productCount = 0;

export default async () => {
  /* await new Promise((resolve) => {
    setTimeout(() => {
      resolve(productCount++);
    }, 2000);
  }); */
  setInterval(() => {
    productCount++
  }, 1000);
  return {
    productCount,
  }
}
