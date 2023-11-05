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
// const verifyInput = (errorMessage, ...element) => {
//   const listElements = [...element];

//   listElements.forEach(e => {
//     if (e.value === "") {
//       errorMessage.innerHTML = "Error! Write something";
//       return false;
//     }
//     else {
//       errorMessage.innerHTML = "";
//     }
//   });

//   return true;
// };

let resultVerifyInput = undefined;
const checkAllInputsOn = () => {

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