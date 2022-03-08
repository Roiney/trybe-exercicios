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

let text = 'Dama';

if ( text.toLowerCase() === 'rei'){
    console.log('se desloca uma casa na direção horizontal, vertical ou diagonal')
} else if ( text.toLowerCase() === 'dama') {
    console.log('possui o movimento combinado da Torre e do Bispo, movendo-se em linha reta nas fileiras, colunas e diagonais')
} else if ( text.toLowerCase() === 'torre') {
    consloe.log('move-se em linha reta nas colunas e fileiras do Tabuleiro')
} else {
    console.log('peça não existe')
}
