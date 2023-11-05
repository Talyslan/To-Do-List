const disappear = (e) => e.classList.add("disappear");
const appear  = (e) => e.classList.remove("disappear");

export { appear, disappear };

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