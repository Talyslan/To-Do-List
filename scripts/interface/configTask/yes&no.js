//Funções para liberar ou desabilitar campos
//eYes => o elemento botao Yes
//eNo => o elemento botao No
//elementsDisabled e elementsToDisable são os elementos disabilitados e para desabilitar, respectivamente
const baseYesActive = (eYes, eNo, ...elementsDisabled) => {
    if (!eYes.classList.contains("yesActive")) {
        eYes.classList.add("yesActive");
        eNo.classList.remove("noActive");
        elementsDisabled.forEach(e => e.removeAttribute("disabled"));
    }
};

const baseNoActive = (eYes, eNo, ...elementsToDisable) => {
    if (!eNo.classList.contains("noActive")) {
        eNo.classList.add("noActive");
        eYes.classList.remove("yesActive");
        elementsToDisable.forEach(e => e.setAttribute("disabled", true));
    };
};

export { baseYesActive, baseNoActive };

// For Tags Task
import { 
    yesTags, noTags, inputTags, buttonTags,
    yesPriority, noPriority, selectPriority, deadlinePriority,
    yesRepetitive, noRepetitive, startDate, frequencyPriority
} from '../variables.js';

let isTag = false;
let isRepetitive = false; 
let isPriority = false;

// For Tags of Task
const yesTagsActive = () => {
    baseYesActive(yesTags, noTags, inputTags, buttonTags);
    isTag = true;
};
const noTagActive = () => {
    baseNoActive(yesTags, noTags, inputTags, buttonTags);
    isTag = false;
};

// For Priority Task
const yesPriorityActive = () => {
    baseYesActive(yesPriority, noPriority, selectPriority, deadlinePriority);
    isPriority = true;
};
const noPriorityActive = () => {
    baseNoActive(yesPriority, noPriority, selectPriority, deadlinePriority);
    isRepetitive = false;
}

// For Repetitive Task
const yesRepetitiveActive = () => {
    baseYesActive(yesRepetitive, noRepetitive, startDate, frequencyPriority);
    isRepetitive = true;
}
const noRepetitiveActive = () => {
    baseNoActive(yesRepetitive, noRepetitive, startDate, frequencyPriority);
    isRepetitive = false;
}

export { isTag, isRepetitive, isPriority };

// Variáveis
export { 
    yesTags, noTags, 
    yesPriority, noPriority, 
    yesRepetitive, noRepetitive };
// Funções
export { 
    yesTagsActive, noTagActive,
    yesPriorityActive, noPriorityActive,
    yesRepetitiveActive, noRepetitiveActive };