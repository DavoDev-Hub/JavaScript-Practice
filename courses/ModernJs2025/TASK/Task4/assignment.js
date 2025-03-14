// function sayHello(name) {
//   console.log("Hi " + name);
// }

// sayHello();

// Task number 1
const hello = (name) => {
  console.log("Hi" + name);
};

hello("davo");

// Task number 2
// - Two arguments (Actually 3) -
const phrase = (alumno, nombre, edad) => {
  console.log(`${alumno} ${nombre}, Edad: ${edad}`);
};
phrase("Alumno:", "Davo", 21);

// - with no arguments -
const noArgs = () => {
  console.log("Hello World");
};

noArgs();

// - One returned value -
const returnVal = (num1, num2) => {
  return num1 + num2;
};

console.log(returnVal(2, 3));

// Task 3
// - Default argument -
const defaultArg = (name = "Davo") => {
  console.log(`Hello ${name}`);
};

defaultArg();

// Task 4
// - Unlimited arguments -
const checkInput = (...args) => {
  console.log(args);
};
checkInput(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
checkInput("Davo", "Lopez", 21, "M");
