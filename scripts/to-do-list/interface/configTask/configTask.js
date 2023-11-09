import { atualizeActualTaskOnCT } from "../../updateTask/updateInHTML.js";
import { appear, disappear } from "../taskActionHTML.js";
import { clearInputOfCT } from "../inputs/inputsGeral.js";
import { resetIsAll } from "./yes&no.js";
import { resetList } from "../taskActionHTML.js";
import { taskList } from "../../actions.js";

import {
    configTask,
    add_CTcreateBtn,
    buttonsCTedit
} from '../variables.js';

import { 
    inputsOn_Task, inputsOn_AllTask, inputsOn_TagsTask, inputsOn_RepetitiveTask,
    inputsOn_PriorityTask, inputsOn_RepetitiveTags, inputsOn_PriorityRepetitive,
    inputsOn_PriorityTags,
    appearAllInputs
} from '../inputs/inputsBaseadOnTask.js';

const resetAllTaskCT = () => {
    clearInputOfCT();
    resetList();
    resetIsAll();
};

let idOfClickedTask = 0;
let elementClicked = undefined;

const atualizeIDandElementClicked = (element) => {
    elementClicked = element;
    idOfClickedTask = elementClicked.id;
};

const closeCT = () => disappear(configTask);

const openCTcreate = () => {
    appearAllInputs();
    resetAllTaskCT();
    appear(configTask);

    inputsOn_AllTask();

    if (add_CTcreateBtn.classList.contains("disappear"))
        appear(add_CTcreateBtn);

    buttonsCTedit.forEach(item => disappear(item));
};

const openCTedit = (e) => {
    appearAllInputs();
    resetAllTaskCT();

    appear(configTask);
    disappear(add_CTcreateBtn);
    buttonsCTedit.forEach(item => {
        if (item.classList.contains("disappear"))
            appear(item);
    });

    atualizeIDandElementClicked(e.target.parentNode);
    
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

};

// Funções
export { 
    closeCT, openCTcreate, openCTedit,
    atualizeIDandElementClicked, idOfClickedTask, elementClicked 
};