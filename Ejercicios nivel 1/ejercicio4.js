/* Return the number (count) of vowels in the given string. The input string will only consist of lower case letters and/or spaces*/
/* Devuelve el número (recuento) de vocales en la cadena dada. La cadena de entrada solo estará compuesta por letras minúsculas y/o espacios*/

const vowels = ["a", "e", "i", "o", "u"];

function getCount(word) {
  var vowelsCount = 0;
  return word
    .split("")
    .reduce(
      (vowelsCount, letter) =>
        vowels.includes(letter) ? vowelsCount + 1 : vowelsCount,
      0
    );
}

console.log(getCount("ana"));
