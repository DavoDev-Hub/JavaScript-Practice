// - 1 -
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ej1 = arrayNumbers.filter((p) => p > 5);
console.log(ej1);

const ej2 = arrayNumbers.map((value) => ({ num: value }));
console.log(ej2);

const multiplication = arrayNumbers.reduce(
  (prevValue, curValue) => prevValue * curValue,
  1
);

console.log(multiplication);

// - 2 -
function findMax(arrayNumbers) {
  const max = arrayNumbers.reduce((prevValue, curValue) => {
    return prevValue > curValue ? prevValue : curValue;
  });
  console.log(max);
}

findMax(arrayNumbers);

// - 3 -
// min and max
function findMinMax(arrayNumbers) {
  const minMax = arrayNumbers.reduce(
    (prevValue, curValue) => {
      return {
        min: prevValue.min < curValue ? prevValue.min : curValue,
        max: prevValue.max > curValue ? prevValue.max : curValue,
      };
    },
    [{ min: arrayNumbers[0] }, { max: arrayNumbers[0] }]
  );
  return minMax;
}

findMinMax(arrayNumbers);
const min = findMinMax(arrayNumbers).min; // 1
const max = findMinMax(arrayNumbers).max; // 1, 10
const arrayMinMax = [min, max]; // [1, 10]
console.log(arrayMinMax); // [1, 10]

const userIds = new Set(); // this is a set of unique user IDs
userIds.add(10);
userIds.add(20);
userIds.add(10);
console.log(userIds);
