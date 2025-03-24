// usual way to create an array
// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2, 3, 4); // always creates an array
// console.log(yetMoreNumbers); // [1, 2, 3, 4]

// const listItems = document.querySelectorAll('li'); // returns a NodeList
// console.log(listItems);
// const arrayListItems = Array.from(listItems); // converts a NodeList to an array
// console.log(arrayListItems);

// const hobbies = ["Cooking", "Sports"];
// const personalData = [30, "Max", { moreDetail: [] }]; // array of mixed types
// console.log(personalData);

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ]; // array of arrays
// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading"); // adds to the end of the array
// hobbies.unshift("Coding"); // adds to the beginning of the array
// const poppedValue = hobbies.pop(); // removes the last element of the array
// hobbies.shift(); // removes the first element of the array
// console.log(hobbies);

const hobbies = ["Sports", "Cooking", "Videogames"]; // array of strings
// hobbies[1] = "Coding"; // overwrites the second element
// hobbies[5] = "Reading"; // rarely used
// console.log(hobbies, hobbies[4]);

hobbies.splice(2, 0, "Good Food"); // adds 'Good Food' at index 1
console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log(personData.indexOf({ name: 'Manuel' }));

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return 1;
//   }
// });
// // console.log(sortedPrices.reverse());
// console.log(sortedPrices);

// const filteredArray = prices.filter(p => p > 6);

// console.log(filteredArray);

// // let sum = 0;

// // prices.forEach((price) => {
// //   sum += price
// // });

// // console.log(sum);

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sum);

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }];
// const copiedPersons = persons.map(person => ({
//   name: person.name,
//   age: person.age
// }));

// persons.push({ name: 'Anna', age: 29 });
// persons[0].age = 31;

// console.log(persons, copiedPersons);

// const nameData = ["Max", "Schwarz", "Mr", 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

// const [firstName, lastName, ...otherInformation] = nameData;
// console.log(firstName, lastName, otherInformation);
