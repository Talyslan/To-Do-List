import { atualizeActualTaskOnCT } from "../../atualizeActualTask.js";
import { appear, disappear } from "../interface.js"
import { clearInput } from "../../allOfInputs.js";
import { resetList, verifyWhatClass } from "../../funcionalityJS.js";
import { isTag, resetIsAll } from "./yes&no.js";
import { taskList } from "../../activies.js";
import { 
    title, description, selectPriority, 
    deadlinePriority, startDate, frequencyPriority 
} from "../variables.js";

import {
    configTask,
    add_CTcreateBtn,
    buttonsCTedit
} from '../variables.js';

import { 
    inputsOn_Task, inputsOn_AllTask, inputsOn_TagsTask, inputsOn_RepetitiveTask,
    inputsOn_PriorityTask, inputsOn_RepetitiveTags, inputsOn_PriorityRepetitive,
    inputsOn_PriorityTags
} from '../../allOfInputs.js';

const closeCT = () => disappear(configTask);

const openCTcreate = () => {
    appear(configTask);

    inputsOn_AllTask();

    if (add_CTcreateBtn.classList.contains("disappear"))
        appear(add_CTcreateBtn);

    buttonsCTedit.forEach(item => disappear(item));
};

let idOfClickedTask = undefined;
let elementClicked = undefined;
const openCTedit = (e) => {
    appear(configTask);
    disappear(add_CTcreateBtn);

    elementClicked = e.target.parentNode;
    idOfClickedTask = elementClicked.id;
    
    atualizeActualTaskOnCT(idOfClickedTask);

    const taskClicked = taskList.getList()[idOfClickedTask]
    const classResult = taskClicked.getClassType();

    switch(classResult) {
        case 'Task': inputsOn_Task();
            break;
        case 'AllTask': inputsOn_AllTask();
            break;
        case 'TagsTask': inputsOn_TagsTask();
            break;
        case 'RepetitiveTask':  inputsOn_RepetitiveTask();
            break;
        case 'PriorityTask': inputsOn_PriorityTask();
            break;
        case 'Repetitive_Tags':  inputsOn_RepetitiveTags();
            break;
        case 'Priority_Repetitive': inputsOn_PriorityRepetitive();
            break;
        case 'Priority_Tags': inputsOn_PriorityTags();
            break;
        default:
            console.log("não entrou em nada, rpz");
            break;
    }

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
export { closeCT, openCTcreate, openCTedit, idOfClickedTask, elementClicked, resetAllTaskCT };