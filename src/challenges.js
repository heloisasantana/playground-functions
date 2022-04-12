 // Desafio 1
  function compareTrue(amostra1, amostra2) {
  if (amostra1 === true && amostra2 === true) {
  return true
  }
  else {return false}
  }

 // Desafio 2
  function calcArea(base,height) {
  let areaTriangulo = (base*height)/2
  return areaTriangulo
  }

 // Desafio 3: Referência consultada para inserir split: https://www.w3schools.com/jsref/jsref_split.asp 
  function splitSentence(frase) {
  let arrayStrings = [];
  arrayStrings = frase.split(' ');
  return arrayStrings;
  }
  
 // Desafio 4 : Referência consultada para inserir concat: https://www.w3schools.com/jsref/jsref_concat_string.asp
 function concatName(strings) {
  let lastWord = array[array.length-1]
  let firstWord = array[0]
  let concatenando = lastWord.concat(", " , firstWord)
  return concatenando
  }
  }

 // Desafio 5
 function footballPoints(wins, ties) {
  let points = (3*wins)+(1*ties)
  return points
  }

// Desafio 6
 function highestCount() {
 // seu código aqui
 }

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
