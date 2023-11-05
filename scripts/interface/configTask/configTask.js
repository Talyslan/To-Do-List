import { atualizeActualTask } from "../../atualizeActualTask.js";
import { appear, disappear } from "../interface.js"
import { clearInput } from "../../allOfInputs.js";
import { resetList, verifyWhatClass } from "../../funcionalityJS.js";
import { resetIsAll } from "./yes&no.js";
import { title, description, selectPriority, 
        deadlinePriority, startDate, frequencyPriority 
} from "../variables.js";

import {
    configTask,
    add_CTcreateBtn,
    buttonsCTedit
} from '../variables.js';

const closeCT = () => disappear(configTask);

const openCTcreate = () => {
    appear(configTask);

    if (add_CTcreateBtn.classList.contains("disappear"))
        appear(add_CTcreateBtn);

    buttonsCTedit.forEach(item => disappear(item));
};

let idOfClickedTask = undefined;

const openCTedit = (e) => {
    appear(configTask);
    disappear(add_CTcreateBtn);

    idOfClickedTask = e.target.parentNode.id;

    atualizeActualTask(idOfClickedTask);

    buttonsCTedit.forEach(item => {
        if (item.classList.contains("disappear"))
            appear(item);
    });
};

const clearInputOfCT = () => {
    const resultClass = verifyWhatClass();

    switch(resultClass) {
        case 'Task': clearInput(title, description); 
            break;
        case 'AllTask': clearInput(title, description, selectPriority, deadlinePriority, startDate, frequencyPriority);
            break;
        case 'TagsTask': clearInput(title, description); 
            break;
        case 'RepetitiveTask': clearInput(title, description, startDate, frequencyPriority);
            break;
        case 'PriorityTask': clearInput(title, description, selectPriority, deadlinePriority); 
            break;
        case 'Repetitive_Tags': clearInput(title, description, startDate, frequencyPriority);
            break;
        case 'Priority_Repetitive': clearInput(title, description, selectPriority, deadlinePriority, startDate, frequencyPriority);
            break;
        case 'Priority_Tags': clearInput(title, description, selectPriority, deadlinePriority);
            break;
        default:
            console.log("não entrou em nada, rpz");
            break;
    }
};

const resetAllTaskCT = () => {
    clearInputOfCT();
    resetList();
    resetIsAll();
};

// Funções
export { closeCT, openCTcreate, openCTedit, idOfClickedTask, resetAllTaskCT };