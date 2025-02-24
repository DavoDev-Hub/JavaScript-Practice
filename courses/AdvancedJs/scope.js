let a = 10;

function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }

  inner();
}

outer();

// Examples

let x = 5;

function firstFunction() {
  let y = 10;

  function secondFunction() {
    let z = 15;
    console.log(x, y, z); // ¿Qué valores imprime? // 5, 10, 15
  }
  function thirdFunction() {
    console.log(x, y);
  }

  secondFunction();
  thirdFunction();
  console.log(x, y); // ¿Qué valores imprime? // 5, 10
}

firstFunction();

console.log(x); // ¿Qué valor imprime? 5

// ¿Qué sucede si mueves la declaración let x = 5; dentro de firstFunction? ¿Cómo cambian los valores?
// No imprimiria la x y daria un error de sintaxis
