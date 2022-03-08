let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma =0;
let maior = number[0];

// Imprimir Array

console.log(number);

//SOMA

for (i = 0; i < number.length; i++){
   soma += number[i]
  }
  console.log(soma);

  // Média aritimética

  let media = soma/number.length;
  console.log(media);
  if (media < 20){
    console.log("valor menor ou igual a 20")
  } else {
    console.log("valor maior que 20")
  }

  //Valor Maior
  
  for (let i = 1; i < number.length; i++){
    if(maior < number[i]){
      maior = number[i];
    }
  }

  console.log('O número maior é ', maior)