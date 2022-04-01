let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log('Bem-vinda,'+" "+ info.personagem);

info.recorrente = 'Sim'

console.log(info.recorrente)

for(key in info){
  console.log(key)
}

for(key in info){
  console.log(info[key])
}

let info1= {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "sim",
};

for(i = 0; i > info; i++){
  console.log(info[i] + info1[i])
}

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log("O livro favorito de " + leitor.nome + leitor.sobrenome + "se chama " + leitor.livrosFavoritos[0])


function verificaPalindromo(s){
 console.log(s.reverse())
}

verificaPalindromo(texto)