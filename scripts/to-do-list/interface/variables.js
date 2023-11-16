import { openCTedit } from "./configTask/configTask.js";
import { completeTask } from "../actions.js";

const createTask_btn = document.querySelector("#btnCreate");

const edit_btnPencilAll = () => {
    let edit_btnPencil = document.querySelectorAll(".btnEdit");
    for (const edit of edit_btnPencil)
        edit.addEventListener("click", openCTedit);

    let checkboxOfTask = document.querySelectorAll(".checkbox");
    for (const checkbox of checkboxOfTask)
        checkbox.addEventListener("change", completeTask);
}

export { createTask_btn, edit_btnPencilAll };

let boxTask = document.querySelector(".box-task");
const takeBoxTask = () => boxTask = document.querySelector(".box-task");
const errorMessage = document.querySelector("#errorMessage");

export { boxTask, takeBoxTask, errorMessage };

// Config Task
const configTask = document.querySelector(".config-Task");
// Botões da Config Task: 
const add_CTcreateBtn = document.querySelector(".add");
const taskComplete_CTeditBtn = document.querySelector(".taskComplete");
const deleteTask_CTeditBtn  = document.querySelector(".deleteTask");
const alterateTask_CTeditBtn  = document.querySelector(".alterateTask");
const buttonsCTedit = [ 
    taskComplete_CTeditBtn,
    deleteTask_CTeditBtn,
    alterateTask_CTeditBtn
];

export {
    configTask,
    add_CTcreateBtn,
    taskComplete_CTeditBtn,
    deleteTask_CTeditBtn,
    alterateTask_CTeditBtn,
    buttonsCTedit
}; 

// Title and Description from Config Task
const title = document.querySelector("#title");
const description = document.querySelector("#description");
export { title, description };

// For Tags Task
const yesTags = document.querySelector("#yesTags");
const noTags = document.querySelector("#noTags");
const inputTags = document.querySelector("#tags");
const buttonTags = inputTags.parentNode.children[1];
export { yesTags, noTags, inputTags, buttonTags };

// For Priority Task
const yesPriority = document.querySelector("#yesPriority");
const noPriority = document.querySelector("#noPriority");
const selectPriority = document.querySelector("#priority");
const deadlinePriority = document.querySelector("#deadline");
export { yesPriority, noPriority, selectPriority, deadlinePriority};

// For Repetitive Task
const yesRepetitive = document.querySelector("#yesRepetitive");
const noRepetitive = document.querySelector("#noRepetitive");
const startDate = document.querySelector("#startDate");
const frequency = document.querySelector("#frequency");
export { yesRepetitive, noRepetitive, startDate, frequency };

const tags_box = document.querySelector(".addTags");
const priority_box = document.querySelector(".priorityTask");
const repetitive_box = document.querySelector(".repetetiveTask");
export { repetitive_box, priority_box, tags_box };

// Filter
const filterSelect = document.querySelector("#filterTasks");
export { filterSelect };