let elemento_pai = document.body;
let titulo = document.createElement("h1");
elemento_pai.appendChild(titulo);
titulo.className = "title";

let principal = document.createElement("main");
elemento_pai.appendChild(principal);
principal.className = "main-content";

let secao = document.createElement("section");
principal.appendChild(secao);

let paragrafo = document.createElement("p");
secao.appendChild(paragrafo);
paragrafo.innerText = "texto";

let leftSection = document.createElement("section");
principal.appendChild(leftSection);
leftSection.className = "left-content";
principal.removeChild(leftSection);

let rightSection = document.createElement("section");
principal.appendChild(rightSection);
rightSection.className = "right-content";

let imgLeftSection = document.createElement("img");
imgLeftSection.className = "small-image";
imgLeftSection.src = "https://picsum.photos/200";
leftSection.appendChild(imgLeftSection);

let addUlList = document.createElement("ul");
rightSection.appendChild(addUlList);
let ulList = [
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
];
let numeros = document.querySelector(".right-content");
for(i=0; i < 8; i++){
     let numero = ulList[i];
     let lista = document.createElement('li');
     lista.innerText = numero;

     addUlList.appendChild(lista)

 };

 let umh3 = document.createElement('h3');
 let doish3 = document.createElement('h3');
 let tresh3 = document.createElement('h3');
 principal.appendChild(umh3);
 umh3.className = "description";
 principal.appendChild(doish3);
 doish3.className = "description";
 principal.appendChild(tresh3);
 tresh3.className = "description";

 