let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let maior = number[0];
let menor = number[0];
let arrayDeFormaAleatoria =[];
let arrayDivisao = [];

// Imprimir Array

console.log(number);

//SOMA

for (i = 0; i < number.length; i++) {
  soma += number[i]
}
console.log(soma);

// Média aritimética

let media = soma / number.length;
console.log(media);
if (media < 20) {
  console.log("valor menor ou igual a 20")
} else {
  console.log("valor maior que 20")
}

//Valor Maior

for (let i = 1; i < number.length; i++) {
  if (maior < number[i]) {
    maior = number[i];
  }
}

console.log('O número maior é ', maior);


// Valores Ímpares


let valoresImpares = [];

for (i = 0; i < number.length; i++) {
  if (number[i] % 2 ==! 0) {
    valoresImpares.push(number[i])
  } }
  
 if (number.length < 0) {
    console.log("nenhum valor ímpar encontrado")
  } else {
    console.log('Os valores ímpares são ', valoresImpares);
  }

//Valore Menor

for (let i = 1; i < number.length; i++) {
  if (menor > number[i]) {
    menor = number[i];
  }
}

console.log('O número menor é ', menor);

// array que vá de 1 até 25

for (let i = 0; i < 25; i++){
  arrayDeFormaAleatoria.push(Math.floor(Math.random() * 100))
}

console.log(arrayDeFormaAleatoria)
console.log('tamanho do meu array é' ,arrayDeFormaAleatoria.length)

// Dicisão por 2
for (i = 0; i < arrayDeFormaAleatoria.length; i++){
arrayDivisao.push(arrayDeFormaAleatoria[i] / 2)
}
console.log(arrayDivisao)
console.log('tamanho do meu array é', arrayDivisao.length)