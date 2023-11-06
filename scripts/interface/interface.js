const disappear = (e) => e.classList.add("disappear");
const appear  = (e) => e.classList.remove("disappear");

export { appear, disappear };

import { boxTask } from "./variables.js";

// criar um objeto que tera uma propriedade com o numero dos ids e o valor será 
const addTaskInTheBox = (textTask, id, tags = '') => {
  boxTask.innerHTML += `
  <div class="task" id="${id}">
  <input type="checkbox">
  
  <div class="box-tags">
  <p contenteditable="true">${textTask}</p>
  ${tags}
  </div>
  
  <span class="btnEdit">&#x270E;</span>
  </div>
  `
};

const takeTags = (...tags) => {
  let tagsList = [...tags];
  let tagsList_withSpan = [];
  
  tagsList.forEach(t => tagsList_withSpan.push(`<span>#${t}</span>`));
  
  return tagsList_withSpan.join(" ");
};

import { taskList } from "../activies.js";
import { elementClicked } from "./configTask/configTask.js";
import { list } from "../funcionalityJS.js";

const addTagsOnExistentTask = (id) => {
  const taskClicked = taskList.getList()[id];
  const listTags = taskClicked.getTagList();
  
  list.forEach(i => taskClicked.addTag(i));

  let boxTags = elementClicked.children[1];

  while (boxTags.children[1] !== undefined)
    for (let i = 1; i < boxTags.children.length; i++)
      boxTags.children[i].remove();

  for (const tag of listTags) {
    const span = document.createElement("span");
    span.innerHTML = `#${tag}`;

    boxTags.appendChild(span)
  };

};

export { addTaskInTheBox, takeTags, addTagsOnExistentTask };