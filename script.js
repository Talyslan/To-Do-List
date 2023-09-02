const card = document.querySelector(".card");
const valueInput = document.querySelector("input[type='text']");
const error = document.querySelector("#error");
const select = document.querySelector("#visualizacao");
const task_list = [];
let identify = 0;

// Limpar o input
const clearInput = () => valueInput.value = "";

// Verificação: o input tem algo escrito?
const verify = () => {
  if (valueInput.value == "") {
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

  let id = e.parentNode.id;
  console.log(id)
  task_list[id].completed = completedValue;
  task_list[id].category = categoryValue;
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
        <p>${this.text}</p>
        <span onclick="activies.remove(this)">X</span>
    </div>`;
  };
};

// Adicionar, remover e dizer se a task está feita
const activies = {
  add: function() {
    if (verify()) {
      console.log(task_list)
      const taskTemp = new Task(valueInput.value);      
      //pega o novo box
      const box = document.querySelector(".box-task");

      box.innerHTML += taskTemp.basesHTML();

      task_list.push(taskTemp);
      identify++;
      clearInput();
    }
  },
  remove:function(element) {
    element.parentNode.remove()

    // Remover o objeto da lista
    task_list.splice(element.parentNode.id, 1);

    // Redifinir os valores dos ids dos objetos no JS e no HTML
    for (const i in task_list) {
      task_list[i].id = Number(i);
    }

    const tasks_html = document.querySelectorAll(".task");
    for (const i in tasks_html) {
      tasks_html[i].id = Number(i); 
    }
    
    // Diminuindo o valor do Id porque 1 elemento foi retirado
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
  all: function() {
    //Verifica se a div já existe para não adicionar várias box's
    if (card.children[1] === undefined) 
      card.innerHTML += `<div class="box-task"></div>`;

      for (const task of task_list) {
        card.children[1].innerHTML += `
        <div class="task" id=${task.id}>
          <input type="checkbox" onclick="activies.checked(this)" />
          <p>${task.text}</p>
          <span onclick="activies.remove(this)">X</span>
        </div>`;
      }

      // Readicionar os que já estavam checks
      const tasks_html = document.querySelectorAll(".task");
      console.log(tasks_html)

      for (const i in task_list) {
        if (task_list[i].completed) {
          tasks_html[i].children[0].checked = true;
          tasks_html[i].children[0].classList.add("risk");
        } 
      }

  },
  checks: function() {},
  pendents: function() {},
  resetBoxTasks: function() {
    //pega o novo box
    const box = document.querySelector(".box-task");

    // Verifica se a Box existe para poder removê-la
    if (card.children[1] !== undefined)
      box.remove();
  }
};