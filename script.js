const valueInput = document.querySelector("input[type='text']");
const select = document.querySelector("#visualizacao");
const box = document.querySelector(".box-task");
const error = document.querySelector("#error");
const card = document.querySelector(".card");
const task_list = [];
let identify = 0;

// Limpar o input
const clearInput = () => valueInput.value = "";

// Verificação: o input tem algo escrito?
const verify = () => {
  if (valueInput.value === "") {
    error.innerText = "Error! Write something";
    return false;
  }
  else {
    error.innerText = "";
    return true;
  }
}

// Alteração de valores de um item na Lista de Tasks (task_list)
const modify = (completedValue, categoryValue, e, action) => {
  e.parentNode.children[1].classList[action]("risk");

  task_list[e.parentNode.id].completed = completedValue;
  task_list[e.parentNode.id].category = categoryValue;
}

// Criação da classe Task
class Task {
  constructor(text) {
    this.id = identify;
    this.text = text;
    this.completed = false;
    this.category = "pendents";
  };

  basesHTML() {
    return `
    <div class="task" id=${identify}>
        <input type="checkbox" onclick="activies.checked(this)" />
        <p contenteditable="true">${this.text}</p>
        <span onclick="activies.remove(this)">X</span>
    </div>`;
  };
};

// Adicionar, remover e dizer se a task está feita
const activies = {
  add: function() {
    if (verify()) {
      const taskTemp = new Task(valueInput.value);

      box.innerHTML += taskTemp.basesHTML();

      task_list.push(taskTemp);
      identify++;
      clearInput();
    }
  },
  remove: function(element) {
    // Remover o objeto da lista e do HTML
    task_list.splice(element.parentNode.id, 1);
    element.parentNode.remove();

    // Redifinir os valores dos ids dos objetos no JS e no HTML
    const tasks_html = document.querySelectorAll(".task");

    for (const i in tasks_html)
      tasks_html[i].id = Number(i); 

    for (const i in task_list)
      task_list[i].id = Number(i);
    
    // Diminuindo o valor do Identify porque 1 elemento foi retirado
    identify--;
  },
  checked: function(element) {
    //acessando ele na Lista de Tasks (task_list) e verificando o valor das props
    if (element.checked) {
      modify(true, "checks", element, "add");
    }
    else {
      modify(false, "pendents", element, "remove");
    }
  }
};

// Visualização do ALL, PENDENTs AND CHECKS
const filter = {
  // Apaga a Box-tasks e define qual opção a pessoa escolheu ver
  returns: function(select) {
    this.resetBoxTasks();

    if (select.value == "all")
      this.all();
    else if (select.value == "checks")
      this.checks();
    else if (select.value == "pendents")
      this.pendents();
  },
  resetBoxTasks: function() {
    while (box.firstChild) {
      box.removeChild(box.firstChild);
    }
      
  },
  all: function() {
      for (const task of task_list)
        box.innerHTML += `
        <div class="task" id=${task.id}>
          <input type="checkbox" onclick="activies.checked(this)" />
          <p contenteditable="true">${task.text}</p>
          <span onclick="activies.remove(this)">X</span>
        </div>`;

      // Readicionar os que já estavam checks
      const tasks_html = document.querySelectorAll(".task");
      for (const i in task_list)
        if (task_list[i].completed) {
          tasks_html[i].children[0].checked = true;
          tasks_html[i].children[1].classList.add("risk");
        } 

   },
  checks: function() {
    for (const task of task_list) 
      if (task.category === "checks")
        box.innerHTML += `
        <div class="task" id=${task.id}>
          <input type="checkbox" onclick="activies.checked(this)" />
          <p contenteditable="true">${task.text}</p>
          <span onclick="activies.remove(this)">X</span>
        </div>`;

    // Readicionar os que já estavam checks
    const tasks_html = document.querySelectorAll(".task");
    for (const i in task_list)
      if (task_list[i].completed) {
        tasks_html[i].children[0].checked = true;
        tasks_html[i].children[1].classList.add("risk");
      } 
  },
  pendents: function() {
    for (const task of task_list) 
      if (task.category === "pendents")
        box.innerHTML += `
        <div class="task" id=${task.id}>
          <input type="checkbox" onclick="activies.checked(this)" />
          <p contenteditable="true">${task.text}</p>
          <span onclick="activies.remove(this)">X</span>
        </div>`;
  }
};