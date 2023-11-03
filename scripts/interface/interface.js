//Limpa o input
const clearInput = (...element) => {
  const elementsList = [...element];
  elementsList.forEach(e => e.value = "");
}

// Verificação: o input tem algo escrito
const verifyInput = (errorMessage, ...element) => {
  const listElements = [...element];

  for (const e of listElements)
    if (e.value === "") {
      errorMessage.innerHTML = "Error! Write something";
      return false;
    }
    else
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

const disappear = (e) => e.classList.add("disappear");
const appear  = (e) => e.classList.remove("disappear");

export { appear, disappear, verifyInput, clearInput, takeValues };

import { boxTask, boxTags } from "./variables.js";

// criar um objeto que tera uma propriedade com o numero dos ids e o valor será 
const addTaskInTheBox = (textTask, id) => {
  boxTask.innerHTML += 
  `<div class="task" id="${id}">
    <input type="checkbox">
  
    <div class="box-tags">
    <p contenteditable="true">${textTask}</p>
    </div>
  
    <span class="btnEdit">&#x270E;</span>
  </div>`
};

const addTagsInTheBox = (...tag) => {
  let tagsList = [...tag];
  for (const tagText of tagsList)
    boxTags.innerHTML += `<span>#${tagText}</span>`;
}

export { addTaskInTheBox, addTagsInTheBox };