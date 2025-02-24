function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

// Creamos dos contadores independientes
const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // ? // 1
counter1(); // ? // 2

counter2(); // ? // 1
counter2(); // ? // 2
counter1(); // ? // 3
