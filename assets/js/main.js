const container = document.querySelector('.container');
const input = document.querySelector('.input-tarefa');
const button = document.querySelector('.btn-tarefa');
const li = document.createElement('li');
const tasks = document.querySelector('.tarefas');

button.addEventListener('click', function(){
  container.appendChild(tasks);
  for (i=0; i<1; i++){
      let node = tasks.appendChild(li.cloneNode());
      node.innerHTML = input.value;
  }
})