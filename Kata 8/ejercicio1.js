//CHALLENGE GONCY 6/9
// Write a function that returns a string in which firstname is swapped with lastname
// Escribe una función que devuelva una cadena en la que el nombre se intercambia con el apellido

let str = "Gabriela Pachano";

// function nameShuffler(str) {
//   return str.split(" ").reverse().join(" ");
// }

/// Otra forma:
function nameShuffler(str) {
  const [firstName, lastName] = str.split(" ");
  return `${lastName} ${firstName}`;
}

console.log(nameShuffler(str));
