
function createNumberChain(start: number) {
  let currentNumber = start;
  const chain = {
    add(num: number) {
      currentNumber += num;
      return chain;
    },
    subtract(num: number) {
      currentNumber -= num;
      return chain;
    },
    multiply(num: number) {
      currentNumber *= num;
      return chain;
    },
    divide(num: number) {
      if (num !== 0) {
        currentNumber /= num;
      }
      return chain;
    },
    result() {
      return currentNumber;
    }
  };
  return chain;
}

export default createNumberChain;
