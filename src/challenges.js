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
  
 // Desafio 4: Referência consultada para inserir concat: https://www.w3schools.com/jsref/jsref_concat_string.asp
  function concatName(array) {
  let lastWord = array[array.length-1]
  let firstWord = array[0]
  let concatenando = lastWord.concat(", " , firstWord)
  return concatenando
  }
  
 // Desafio 5
  function footballPoints(wins, ties) {
  let points = (3*wins)+(1*ties)
  return points
  }

 // Desafio 6 
  function highestCount(numbers) {
  let maiorNumero = numbers[0];
  for (indice = 0; indice < numbers.length; indice += 1) {
  if (numbers[indice] > maiorNumero) {maiorNumero = numbers[indice]}
  }
    
  let contador = 0;
  for(let posicao = 0; posicao < numbers.length; posicao += 1) { 
  if (numbers[posicao] === maiorNumero) 
  {contador = contador + 1}
  }
  return contador
  }
 
 // Desafio 7: Referência consultada para inserir Math.abs: https://www.w3schools.com/jsref/jsref_abs.asp
  function catAndMouse(mouse, catOne, catTwo) {
  let distanciaUm = Math.abs(mouse - catOne)
  let distanciaDois = Math.abs(mouse - catTwo)
  if (distanciaUm < distanciaDois) {return "cat1"}
  else if (distanciaDois < distanciaUm) {return "cat2"}
  else {return "os gatos trombam e o rato foge"}
  }
     
 // Desafio 8
  function fizzBuzz(arrayNumbers) {
  let arrayNova = [];
  for (index = 0; index < arrayNumbers.length; index += 1) { 
  if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 !== 0) { 
  arrayNova.push('fizz') } 
  else if (arrayNumbers[index] % 5 === 0 && arrayNumbers[index] % 3 !== 0 ) {
  arrayNova.push('buzz') } 
  else if (arrayNumbers[index] % 5 === 0 && arrayNumbers[index] % 3 === 0) { 
  arrayNova.push('fizzBuzz') }
  else {arrayNova.push('bug!')
  }
  }
  return arrayNova
  }

 // Desafio 9
  function encode() {
  
  }
 
  function decode() {
  
  }
  
  // // Desafio 10
  function techList() {
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
