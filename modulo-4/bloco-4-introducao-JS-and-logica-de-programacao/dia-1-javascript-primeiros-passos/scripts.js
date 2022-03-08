let a = 4;
let b = 2;
let c = 10;
const d = 0;

// triangulo

const e = 0;
const f = 90;
const g = 90;

// operaçãoes

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// compração com 2 variaveis

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

// compração com 3 variaveis

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

// 4
if (d > 0) {
  console.log("positive");
} else if (d < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// triangulo

let T = f + g + e;

if ((f+g+e) < 0) {
    console.log("error");
  } else if ((f+g+e) > 0 && (f+g+e) === 180) {
    console.log("true");
  } else if ((f+g+e) > 0 && (f+g+e) !== 180) {
    console.log("false");
  }

// xadrez

let text = 'Cavalo';

if ( text.toLowerCase() === 'rei'){
   console.log ("Peça = " + text +" "+"Movimento = se desloca uma casa na direção horizontal, vertical ou diagonal")
} else if ( text.toLowerCase() === 'dama') {
    console.log("Peça = " + text +" "+"Movimento = possui o movimento combinado da Torre e do Bispo, movendo-se em linha reta nas fileiras, colunas e diagonais")
} else if ( text.toLowerCase() === 'torre') {
    consloe.log("Peça = " + text +" "+"Movimento = move-se em linha reta nas colunas e fileiras do Tabuleiro")
} else if ( text.toLowerCase() === 'cavalo') {
console.log ("Peça = " + text +" "+"Movimento = assemelhado a um 'L' e, diferente das outras peças, pode pular as peças intervenientes.")
} else if ( text.toLowerCase() === 'peão') {
  console.log ("Peça = " + text +" "+"Movimento = move-se verticalmente na coluna que encontra-se, sendo incapaz de recuar. No primeiro movimento de cada peão, a partir do ponto de partida, pode avançar duas casas e, a partir daí, uma.")
} else {
    console.log('Peça não existe')
}
