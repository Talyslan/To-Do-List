const box = document.querySelector('.box-task');
const task_list = [];

// Funções para adicionar, remover e dizer se a task está feita
const activies = {
  add: function() {
    const value = document.querySelector('#textTask').value;

    const task = {check: false, text: value}

    box.innerHTML += `
      <div class="task">
          <input type="checkbox" />
          <p>${task.text}</p>
          <span></span>
      </div>
      `;

      task_list.push(task);
      console.log(task_list);
  },
  
  //VER EVENT LISTENER
  remove: function() {},
  checked: function() {}
}

// Visualização do ALL, PENDENT AND CHECKS