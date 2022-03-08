let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma =0;

// Imprimir Array

console.log(number);

//SOMA

for (i = 0; i < number.length; i++){
   soma += number[i]
  }
  console.log(soma);

  // MÉdia aritimética

  let media = soma/number.length;
  console.log(media);
  if (media < 20){
    console.log("valor menor ou igual a 20")
  } else {
    console.log("valor maior que 20")
  }