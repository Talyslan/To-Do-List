const valueInput = document.querySelector("input[type='text']");
const select = document.querySelector("select");
const box = document.querySelector(".box-task");
const error = document.querySelector("#error");
const card = document.querySelector(".card");
const task_list = [];
let identify = 0;

const { clearInput, verifyInput } = require("./interface");

// Alteração de valores de um item na Lista de Tasks (task_list)
const modify = (completedValue, categoryValue, e, action) => {
  e.parentNode.children[1].classList[action]("risk");

  task_list[e.parentNode.id].completed = completedValue;
  task_list[e.parentNode.id].category = categoryValue;
}

const basesTask = (id, p) => {
  return `
    <div class="task" id=${id}>
      <input type="checkbox" onclick="activies.checked(this)" />
      <p contenteditable="true">${p}</p>
      <span onclick="activies.remove(this)">X</span>
    </div>`;
};

// Criação da classe Task
class Task {
  constructor(text) {
    this._id = identify;
    this._text = text;
    this._completed = false;
    this._category = "pendents";
  };

  basesHTML() {
    return basesTask(this._id, this._text);
  };
};

class TaskList {
  constructor() {
    this._list = [];
  }

  //adicionar, remover e checar
}

// Adicionar, remover e dizer se a task está feita
const activies = {
  add: function() {
    if (verifyInput(valueInput.value, error)) {
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
    //acessando ele na task_list e modificando o valor das props
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
  returns: function(select) {
    // Removendo os elementos
    while (box.firstChild)
      box.removeChild(box.firstChild);

    if (select.value == "all")
      this.all();
    else if (select.value == "checks")
      this.checks();
    else if (select.value == "pendents")
      this.pendents();
  },
  all: function() {
    for (const task of task_list)
      box.innerHTML += basesTask(task.id, task.text);

    this.otimize.checkTask();
   },
  checks: function() {
    this.otimize.condition("checks");
    this.otimize.checkTask();
  },
  pendents: function() {
    this.otimize.condition("pendents");
  },
  otimize: {
    condition: function(cond) {
      for (const task of task_list) 
        if (task.category === cond)
          box.innerHTML += basesTask(task.id, task.text);

    },
    checkTask: function() {
      // Readicionar os que já estavam checks
    const tasks_html = document.querySelectorAll(".task");

    /* ERROR aqui => certos casos o tasks_html[id] quer acessar 
      um elemento undefined, coloquei essas condições no if para
      bloquear esse erro porém no visual ele não fica checked na aba
      de "Checks". Ex: na aba All crie 3 tasks ("a", "b", "c"), agora 
      marque o "b" e o "c", agora troque para a aba "Checks". "b" não 
      fica checked pois seu índice não bate com o da task_list, já "c"
      fica checked.
    */
    for (const task of task_list)
      if (task.completed) {
        const id = task_list.indexOf(task);
        if (id >= 0 && id < tasks_html.length) {
          tasks_html[id].children[0].checked = true;
          tasks_html[id].children[1].classList.add("risk");
        }
      }
    }
  }
};