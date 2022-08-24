// Desafio 1
function compareTrue(compara1, compara2) {


 const girafa = true;
  const elefante = true;
  const macaco = false;

  if (compara1 && compara2) {
    return true
  }


  else {

    return false
  }

}
// Desafio 2
function calcArea(base, height) {
    var calc = (base * height) / 2

    return calc
}
// Desafio 3
function splitSentence(string) {
  var resultado = string.split(" ")

  return resultado
}
// Desafio 4
function concatName(word) {
  
  let first = word[0]

   
  let  last = word[word.length -1]

  
  return last + ', '+ first
}

// Desafio 5
function footballPoints() {

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
