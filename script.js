alert(
    "Para usar esse projeto, é simples, apenas siga os passos:\n1. Digite sua tarefa;\n2. Aperte o botão para adicionar a tarefa;\n3. Para deixar a tarefa concluída, dê um clique na tarefa;\n4. Para apagar a tarefa, dê um duplo clique na tarefa."
  );
  // button
  let buttonAdd = document.getElementById("btnAdd");
  // input
  let input = document.getElementById("inputTarefa");
  // area das tarefas
  let tarefas = document.getElementById("tarefas");
  
  // function de adicionar tarefa
  buttonAdd.addEventListener("click", function () {
    if (input.value.trim() !== "") {
      // variavel tarefa
      var tarefa = document.createElement("p");
      // tarefa tem o valor do input
      tarefa.innerText = "- " + input.value;
      // tarefa recebe cursor
      tarefa.style.cursor = "pointer";
      // div tarefas insere tarefa
      tarefas.appendChild(tarefa);
      // input fica vazio
      input.value = "";
    } else {
      alert("Digite uma tarefa primeiro!");
    }
  
    // risca tarefa ao clicar
    tarefa.addEventListener("click", function () {
      tarefa.style.textDecoration = "line-through";
    });
  
    //   apaga tarefa ao clicar duas vezes
    tarefa.addEventListener("dblclick", function () {
      tarefas.removeChild(tarefa);
    });
  });
  