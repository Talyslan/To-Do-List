import { atualizeActualTask } from "../../atualizeActualTask.js";
import { appear, clearInput, disappear } from "../interface.js"
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

const openCTedit = (e) => {
    appear(configTask);
    disappear(add_CTcreateBtn);

    let idActual = e.target.parentNode.id;

    atualizeActualTask(idActual);

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
    resetIsAll();
    resetList();
    clearInputOfCT();
};

// Funções
export { closeCT, openCTcreate, openCTedit, resetAllTaskCT };