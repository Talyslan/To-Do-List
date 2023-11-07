import { disappear, appear } from "./interface/interface.js";
import { repetitive_box, priority_box, tags_box } from './interface/variables.js';

const appearAllInputs = () => {
    appear(repetitive_box);
    appear(priority_box);
    appear(tags_box);
};

const inputsOn_Task = () => {
    appearAllInputs();
    disappear(tags_box);
    disappear(priority_box);
    disappear(repetitive_box);
};

const inputsOn_AllTask = () => appearAllInputs();

const inputsOn_TagsTask = () => {
    appearAllInputs();
    disappear(priority_box);
    disappear(repetitive_box);
};

const inputsOn_RepetitiveTask = () => {
    appearAllInputs();
    disappear(tags_box);
    disappear(priority_box);
};

const inputsOn_PriorityTask = () => {
    appearAllInputs();
    disappear(tags_box);
    disappear(repetitive_box);
};

const inputsOn_RepetitiveTags = () => {
    appearAllInputs();
    disappear(priority_box);
};

const inputsOn_PriorityRepetitive = () => {
    appearAllInputs();
    disappear(tags_box);
};

const inputsOn_PriorityTags = () => {
    appearAllInputs();
    disappear(repetitive_box);
};

export { 
    inputsOn_Task, inputsOn_AllTask, inputsOn_TagsTask, inputsOn_RepetitiveTask,
    inputsOn_PriorityTask, inputsOn_RepetitiveTags, inputsOn_PriorityRepetitive,
    inputsOn_PriorityTags
};

//Limpa o input
const clearInput = (...element) => {
    const elementsList = [...element];
    elementsList.forEach(e => e.value = "");
};

const takeValues = (element) => element.value;
const putValues = (input, valueOfInput) => input.value = valueOfInput;

export { clearInput, takeValues, putValues };

// Verificação: o input tem algo escrito
import { errorMessage } from "./interface/variables.js";

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
//const verifyInput = (errorMessage, ...element) => {
//const listElements = [...element];

//listElements.forEach(e => {
//if (e.value === "") {
//  errorMessage.innerHTML = "Error! Write something";
//  return false;
//}
//else {
//  errorMessage.innerHTML = "";
//  }
//});

//   return true;
// };

import { 
    title, description, selectPriority, 
    deadlinePriority, startDate, frequencyPriority
} from './interface/variables.js'

import { verifyWhatClass } from "./funcionalityJS.js";

let resultVerifyInput = undefined;
const checkAllInputsOn = () => {
    const className = verifyWhatClass();
    switch(className) {
        case 'Task':
            resultVerifyInput = verifyInput(title, description); 
            break;
        case 'AllTask':
            resultVerifyInput = verifyInput(title, description, selectPriority, deadlinePriority, startDate, frequencyPriority);
            break;
        case 'TagsTask':
            resultVerifyInput = verifyInput(title, description);
            break;
        case 'RepetitiveTask': 
            resultVerifyInput = verifyInput(title, description, startDate, frequencyPriority);
            break;
        case 'PriorityTask': 
            resultVerifyInput = verifyInput(title, description, selectPriority, deadlinePriority); 
            break;
        case 'Repetitive_Tags': 
            resultVerifyInput = verifyInput(title, description, startDate, frequencyPriority);
            break;
        case 'Priority_Repetitive': 
            resultVerifyInput = verifyInput(title, description, selectPriority, deadlinePriority, startDate, frequencyPriority);
            break;
        case 'Priority_Tags': 
            resultVerifyInput = verifyInput(title, description, selectPriority, deadlinePriority);
            break;
        default:
            console.log("não entrou em nada, rpz");
            break;
    }
    return resultVerifyInput;
};

export { verifyInput, checkAllInputsOn, resultVerifyInput }