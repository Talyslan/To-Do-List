import { takeValues, clearInput } from './inputs/inputsGeral.js';
import { elementClicked } from './configTask/configTask.js';
import { taskList } from "../actions.js";
import { 
  title, description, selectPriority, 
  deadlinePriority, startDate, frequency,
  boxTask,
  inputTags
} from "./variables.js";

const disappear = (e) => e.classList.add("disappear");
const appear  = (e) => e.classList.remove("disappear");
const appearAll = () => {
  appear(title);
  appear(description);
  appear(selectPriority);
  appear(deadlinePriority);
  appear(startDate);
  appear(frequency);
}

// criar um objeto que tera uma propriedade com o numero dos ids e o valor será 
const addTaskInTheBox = (textTask, id, tags = '') => {
  boxTask.innerHTML += `
  <div class="task" id="${id}">
  <input type="checkbox" class="checkbox">
  
  <div class="box-tags">
  <p contenteditable="true">${textTask}</p>
  ${tags}
  </div>
  
  <span class="btnEdit">&#x270E;</span>
  </div>
  `
};

let list = [];
const addTagInTheList = () => {
    list.push(takeValues(inputTags));
    clearInput(inputTags);
};

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

const takeTags = (...tags) => {
  let tagsList = [...tags];
  let tagsList_withSpan = [];
  
  tagsList.forEach(t => tagsList_withSpan.push(`<span>#${t}</span>`));
  
  return tagsList_withSpan.join(" ");
};


const resetList = () => list = [];

export { 
  appear, disappear, appearAll,
  addTaskInTheBox, takeTags, addTagsOnExistentTask,
  list, addTagInTheList, resetList
};