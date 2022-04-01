function adicionar() {
  var tarefa = document.getElementById("ingrediente").value;
  var listaNew = document.getElementById("lista").innerHTML;
  lele = listaNew +"<li>"+tarefa+"</li>";
  
  document.getElementById("lista").innerHTML = lele;
}


