const valueInput = document.querySelector("input[type='text']");
const box = document.querySelector(".box-task");
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
  task_list[id].completed = completedValue;
  task_list[id].category = categoryValue;
}

// Criação da classe Task
class Task {
  constructor(text) {
    this.completed = false;
    this.text = text;
    this.category = "pendents";
  };

  basesHTML() {
    return `<div class="task" id=${identify}>
        <input type="checkbox" onclick="activies.checked(this)" />
        <p>${this.text}</p>
        <span onclick="activies.remove(this)">X</span>
    </div>`
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
      console.log(box.children)
      clearInput();
    }
  },
  remove:function(element) {
    element.parentNode.remove()
  },
  checked: function(element) {
    //acessando ele na Lista de Tasks (task_list) 
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
    this.resetAllTasks();

    if (select.value == "all")
      this.all();
    else if (select.value == "checks")
      this.checks();
    else if (select.value == "pendents")
      this.pendents();
  },
  all: function() { },
  checks: function() { },
  pendents: function() { },
  resetAllTasks: function() {

    console.log(box.children)
    for (const son of box.children) {
      console.log(son)
      son.remove();
    }

    identify = 0;
  }
};