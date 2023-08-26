const checkbox = document.querySelectorAll("input[type='checkbox'");
const valueInput = document.querySelector("input[type='text']");
const box = document.querySelector('.box-task');
const error = document.querySelector('#error');
const task_list = [];

// Funções úteis
const clearInput = () => valueInput.value = "";
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

// Criação da classe
class Task {
  constructor(text) {
    this.completed = false;
    this.text = text;
    this.category = "all";
  };

  basesHTML() {
    return `<div class="task">
        <input type="checkbox" />
        <p>${this.text}</p>
        <span onclick="activies.remove(this)">X</span>
    </div>`
  };

};

// Funções para adicionar, remover e dizer se a task está feita
const activies = {
  add: function() {
    if (verify()) {
      const taskTemp = new Task(valueInput.value);
  
      box.innerHTML += taskTemp.basesHTML();
  
      task_list.push(taskTemp);
      console.log(task_list)
      clearInput();
    }
  },
  remove:(element) => element.parentNode.classList.add("delete"),
  checked: function() {

    for (const item of checkbox)
      item.addEventListener("click", () => {
        item.parentNode.children[1].classList.toggle("risk")
      });
    
  }
};

activies.checked()
// Visualização do ALL, PENDENT AND CHECKS