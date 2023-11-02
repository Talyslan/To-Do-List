//Funções para liberar ou desabilitar campos
const baseYesActive = (eYes, eNo, ...elementsDisabled) => {
    if (!eYes.classList.contains("yesActive")) {
        eYes.classList.add("yesActive");
        eNo.classList.remove("noActive");
        elementsDisabled.forEach(e => e.removeAttribute("disabled"));
    };
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
const yesTags = document.querySelector("#yesTags");
const noTags = document.querySelector("#noTags");
const inputTags = document.querySelector("#tags");
const buttonTags = inputTags.parentNode.children[1];

const yesTagsActive = () => baseYesActive(yesTags, noTags, inputTags, buttonTags);
const noTagActive = () => baseNoActive(yesTags, noTags, inputTags, buttonTags);

// For Priority Task
const yesPriority = document.querySelector("#yesPriority");
const noPriority = document.querySelector("#noPriority");
const selectPriority = document.querySelector("#priority");
const deadlinePriority = document.querySelector("#deadline");

const yesPriorityActive = () => baseYesActive(yesPriority, noPriority, selectPriority, deadlinePriority);
const noPriorityActive = () => baseNoActive(yesPriority, noPriority, selectPriority, deadlinePriority);

// For Repetitive Task
const yesRepetitive = document.querySelector("#yesRepetitive");
const noRepetitive = document.querySelector("#noRepetitive");
const startDate = document.querySelector("#startDate");
const frequencyPriority = document.querySelector("#frequency");

const yesRepetitiveActive = () => baseYesActive(yesRepetitive, noRepetitive, startDate, frequencyPriority);
const noRepetitiveActive = () => baseNoActive(yesRepetitive, noRepetitive, startDate, frequencyPriority);

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