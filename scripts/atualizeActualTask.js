import { taskList } from "./activies.js";
import { putValues } from "./allOfInputs.js";
import { 
    yesTagsActive, 
    yesPriorityActive, 
    yesRepetitiveActive 
} from "./interface/configTask/yes&no.js";
import { 
    title, description, selectPriority, 
    deadlinePriority, startDate, frequencyPriority 
} from "./interface/variables.js";

const atualizeActualTask = (idActualOfTask) => {
    const actualList = taskList.getList();
    const actualTask = actualList[idActualOfTask];
    const resultClass = actualTask.getClassType();

    switch(resultClass) {
        case 'Task': 
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            break;
        case 'AllTask': 
            yesTagsActive();
            yesPriorityActive();
            yesRepetitiveActive();

            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(selectPriority, actualTask.getPriority());
            putValues(deadlinePriority, actualTask.getDeadline());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequencyPriority, actualTask.getFrequency());
            break;
        case 'TagsTask': 
            yesTagsActive();
            
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            break;
        case 'RepetitiveTask': 
            yesRepetitiveActive();
            
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequencyPriority, actualTask.getFrequency());
            break;
        case 'PriorityTask': 
            yesPriorityActive();
            
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(selectPriority, actualTask.getPriority());
            putValues(deadlinePriority, actualTask.getDeadline());
            break;
        case 'Repetitive_Tags': 
            yesTagsActive();
            yesRepetitiveActive();
            
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequencyPriority, actualTask.getFrequency());
            break;
        case 'Priority_Repetitive': 
            yesPriorityActive();
            yesRepetitiveActive();

            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(selectPriority, actualTask.getPriority());
            putValues(deadlinePriority, actualTask.getDeadline());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequencyPriority, actualTask.getFrequency());
            break;
        case 'Priority_Tags': 
            yesTagsActive();
            yesPriorityActive();
        
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(selectPriority, actualTask.getPriority());
            putValues(deadlinePriority, actualTask.getDeadline());
            break;
        default:
            console.log("não entrou em nada, rpz");
            break;
    };
};

export { atualizeActualTask };