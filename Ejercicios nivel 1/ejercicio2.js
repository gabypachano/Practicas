//! Ejercicio 2
// The goal is to create a function numberToPower(number, power) that "raises" the number (ie multiplies number by itself power times)
//! Note: Math.pow and some other Math functions like eval() and ** are disabled
// El objetivo es crear una función numberToPower(número, potencia) que "aumente" el número (es decir, multiplique el número por sí mismo multiplicando la potencia)
//! //! Nota: Math.pow y algunas otras funciones matemáticas como eval() y ** están deshabilitadas

// Examples:
// numberToPower(3,2) // -> 9 (3*3)

function numberToPower(number, power) {
  if (power === 0) return 1;

  let buffer = number;
  for (let remainingPower = power; remainingPower >= 1; remainingPower--) {
    buffer *= number;
  }
  return buffer;
}

console.log(numberToPower(4, 2));
console.log(numberToPower(10, 4));
console.log(numberToPower(10, 0));
