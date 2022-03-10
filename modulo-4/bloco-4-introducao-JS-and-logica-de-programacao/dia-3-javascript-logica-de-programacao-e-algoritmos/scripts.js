//fatotial

var resultado; 
for (let i = 50 ; i < 100; i++) {
    resultado += i;
}
console.log(resultado);


//Palavra inversa
var word ='tryber';
var inverso = [];
for (var i=0; i < word.length; i++){
  inverso.push(word[i])
}
console.log(inverso)

// Maior Paravra
let array = ['java', 'javascript', 'python', 'html', 'css']
let maior = ['java']

for (let i = 1; i < array.length; i++) {
    if (maior.length < array[i].length) {
      maior = array[i];
    }
  }
  
  console.log('O maior palavra é ', maior);

  // Menor Palavra

  for (let i = 1; i < array.length; i++) {
    if (maior.length > array[i].length) {
      maior = array[i];
    }
  }
  
  console.log('O menor palavra é ', maior);

 // Primos
 let divisiveisPorDois =[];

for ( var i = 1; i <=5; i++){
    if ( i % 2 ==! 0){
        divisiveisPorDois.push(i)
    }
}


console.log(divisiveisPorDois);


