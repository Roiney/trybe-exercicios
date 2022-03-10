var resultado = 0;
for (var i = 50 ; i <= 100; i++) {
    resultado += i;
}
console.log("A soma de 50 a 100 é:", resultado);



//divisão

let divisiveis =[];

for ( var i = 1; i <=125; i++){
    if ( i % 3 === 0){
        divisiveis.push(i)
    }
}

console.log(divisiveis.length);

if (divisiveis.length === 50){
    console.log("é 50")
}

//Còdigo INTERNET https://pt.stackoverflow.com/questions/250079/pedra-papel-tesoura
let jogador1 = "papel";
let jogador2 = "tesoura"

if (jogador1 == "pedra") {
    if (jogador2 == "tesoura") {
         ("Pedra quebra tesoura");
    } else if (jogador2 == "papel"){
       console.log("Papel envolve a Pedra");
    } else if (jogador2 == "pedra") {
       console.log("Empate");
    }

}
else if (jogador1 == "tesoura") {
    if (jogador2 == "pedra") {
       console.log("Pedra quebra tesoura");
    } else if (jogador2 == papel){
       console.log("tesoura corta papel");
    } else if (jogador2 == "tesoura") {
       console.log("Empate");
    }
}

else if (jogador1 == "papel"){
    if (jogador2 == "pedra") {
       console.log("Papel envolve pedra");
    }else if (jogador2 == "tesoura") {
       console.log("Tesoura corta papel");
    }else if (jogador2 == "papel")  {
       console.log("Empate");
    }

}


//Pessoa Mais Nova

let Marcerlla = 50;
let Carlos = 30;
let Camila = 40;
let pessoaMaisNova = Marcerlla;

if (Marcerlla > pessoaMaisNova){
 Marcela = pessoaMaisNova
} else if (Camila > pessoaMaisNova) {
    Camila = pessoaMaisNova
} else if (Carlos > pessoaMaisNova){
    Carlos = pessoaMaisNova
}

console.log(pessoaMaisNova);
