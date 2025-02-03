export const useConsole = () => {
  function sayHello() {
    console.log('hello');
  };
  return {
    sayHello
  };
};
