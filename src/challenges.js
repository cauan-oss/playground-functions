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
function footballPoints(wins, ties) {

  var calc = wins * 3;

    var calc2 = ties 
  
    var calc3 = calc + calc2
     
    return calc3
  }



// Desafio 6
function highestCount(array) {
  

    var maiorNumero = array[0]
  
    var contador = 0 
  
    for(let i = 0 ; i < array.length; i += 1) {
       
       var numero = array[i]
  
       if(numero > maiorNumero) {
         maiorNumero = numero
       }
   }
  
   
    
   for(let i = 0; i < array.length; i += 1){
      if(array[i] === maiorNumero) {
        contador += 1
      }
   }
  
   return contador
  }

 ///console.log(highestCount( [-2, -2, -1]))
  
  
  

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
