const randomNumber = Math.random();
const randomNumber2 = Math.random();

const ArrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// - 1 -
if (randomNumber > 0.7) {
  console.log(randomNumber + " is greater than 0.7");
}

// - 2 -
for (let i = 0; i < ArrayNumbers.length; i++) {
  console.log(ArrayNumbers[i]);
}

for (const number of ArrayNumbers) {
  console.log(number);
}

// - 3 -
for (let i = ArrayNumbers.length; i >= 0; i--) {
  console.log(ArrayNumbers[i]);
}

// - 4 -
if (randomNumber > 0.7 && randomNumber2 > 0.7) {
  console.log("Both numbers are greater than 0.7");
} else if (randomNumber2 < 0.2) {
  console.log(randomNumber2);
  console.log("randomNumber2 is less than 0.2");
}
