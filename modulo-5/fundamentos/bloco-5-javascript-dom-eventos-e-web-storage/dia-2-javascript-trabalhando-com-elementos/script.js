var elemento_pai =document.body;
var titulo = document.createElement('h1');
elemento_pai.appendChild(titulo);

var principal = document.createElement('main');
elemento_pai.appendChild(principal);
principal.className = 'main-content';

var secao = document.createElement('section');
principal.appendChild(secao);

var paragrafo = document.createElement('p');
secao.appendChild(paragrafo)