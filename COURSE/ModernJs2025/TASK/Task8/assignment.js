const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ej1 = arrayNumbers.filter((p) => p > 5);
console.log(ej1);

const ej2 = arrayNumbers.map((number) => {
  const numberObj = { num: number };
  return numberObj;
});

console.log(ej2);
