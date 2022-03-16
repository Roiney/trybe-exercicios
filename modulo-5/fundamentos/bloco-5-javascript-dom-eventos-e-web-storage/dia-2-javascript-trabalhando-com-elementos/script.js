let elemento_pai = document.body;
let titulo = document.createElement("h1");
elemento_pai.appendChild(titulo);

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
for(i=0; i < ulList.length; i++){
     let numero = ulList[i];
     let lista = document.createElement('li');
     lista.innerText = numero;

     addUlList.appendChild(lista)

 };
