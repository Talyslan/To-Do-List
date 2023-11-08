import { verifyWhatClass } from "../../taskCreation/funcionalityJS.js";
import { 
    title, description, selectPriority, 
    deadlinePriority, startDate, frequency,
    errorMessage
} from '../variables.js';


//Limpa o input
const putValues = (input, valueOfInput) => input.value = valueOfInput;
const takeValues = (element) => element.value;

const clearInput = (...element) => {
    const elementsList = [...element];
    elementsList.forEach(e => e.value = "");
};

// Verificação: o input tem algo escrito
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
//};

let resultVerifyInput = undefined;
const checkAllInputsOn = () => {
    const className = verifyWhatClass();
    switch(className) {
        case 'Task':
            resultVerifyInput = verifyInput(title, description); 
            break;
        case 'AllTask':
            resultVerifyInput = verifyInput(title, description, selectPriority, deadlinePriority, startDate, frequency);
            break;
        case 'TagsTask':
            resultVerifyInput = verifyInput(title, description);
            break;
        case 'RepetitiveTask': 
            resultVerifyInput = verifyInput(title, description, startDate, frequency);
            break;
        case 'PriorityTask': 
            resultVerifyInput = verifyInput(title, description, selectPriority, deadlinePriority); 
            break;
        case 'Repetitive_Tags': 
            resultVerifyInput = verifyInput(title, description, startDate, frequency);
            break;
        case 'Priority_Repetitive': 
            resultVerifyInput = verifyInput(title, description, selectPriority, deadlinePriority, startDate, frequency);
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

const clearInputOfCT = () => {
    const resultClass = verifyWhatClass();

    switch(resultClass) {
        case 'Task': clearInput(title, description); 
            break;
        case 'AllTask': clearInput(title, description, selectPriority, deadlinePriority, startDate, frequency);
            break;
        case 'TagsTask': clearInput(title, description); 
            break;
        case 'RepetitiveTask': clearInput(title, description, startDate, frequency);
            break;
        case 'PriorityTask': clearInput(title, description, selectPriority, deadlinePriority); 
            break;
        case 'Repetitive_Tags': clearInput(title, description, startDate, frequency);
            break;
        case 'Priority_Repetitive': clearInput(title, description, selectPriority, deadlinePriority, startDate, frequency);
            break;
        case 'Priority_Tags': clearInput(title, description, selectPriority, deadlinePriority);
            break;
        default:
            console.log("não entrou em nada, rpz");
            break;
    };
};

export { 
    clearInput, takeValues, putValues,
    verifyInput, checkAllInputsOn, resultVerifyInput, clearInputOfCT 
};