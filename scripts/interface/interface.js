//Limpa o input
const clearInput = (...element) => {
  const elementsList = [...element];
  elementsList.forEach(e => e.value = "");
}

// Verificação: o input tem algo escrito
import { errorMessage } from "./variables.js";

const verifyInput = (...element) => {
  const listElements = [...element];

  for (const e of listElements)
    if (e.value === "") {
      errorMessage.innerHTML = "Error! Write something";
      return false;
    }
    
    errorMessage.innerHTML = "";
    return true;
};

//error de return undefined
// const verifyInput = (errorMessage, ...element) => {
//   const listElements = [...element];

//   listElements.forEach(e => {
//     if (e.value === "") {
//       errorMessage.innerHTML = "Error! Write something";
//       return false;
//     }
//     else {
//       errorMessage.innerHTML = "";
//     }
//   });

//   return true;
// };

const takeValues = (element) => element.value;
const putValues = (input, valueOfInput) => input.value = valueOfInput;
const disappear = (e) => e.classList.add("disappear");
const appear  = (e) => e.classList.remove("disappear");

export { appear, disappear, verifyInput, clearInput, takeValues, putValues };

import { boxTask } from "./variables.js";

// criar um objeto que tera uma propriedade com o numero dos ids e o valor será 
const addTaskInTheBox = (textTask, id) => {
  boxTask.innerHTML += `
    <div class="task" id="${id}">
      <input type="checkbox">
    
      <div class="box-tags">
        <p contenteditable="true">${textTask}</p>
      </div>
    
      <span class="btnEdit">&#x270E;</span>
    </div>
  `
};

const addTagsInTheBox = (textTask, id, ...tag) => {
  let tagsList = [...tag];
  let tagsList_withSpan = [];

  tagsList.forEach(t => tagsList_withSpan.push(`<span>#${t}</span>`));

  boxTask.innerHTML += `
    <div class="task" id="${id}">
      <input type="checkbox">

      <div class="box-tags">
        <p contenteditable="true">${textTask}</p>
        ${tagsList_withSpan.join(" ")}
      </div>

      <span class="btnEdit">&#x270E;</span>
    </div>
  `;
}

export { addTaskInTheBox, addTagsInTheBox };

// const resetCT = () => {};