import { openCTedit } from "./interface/configTask/configTask.js";
import { taskList } from "./activies.js";
import { putValues } from "./interface/interface.js";
import { verifyWhatClass } from "./funcionalityJS.js";
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
    const resultClass = verifyWhatClass();
    const actualList = taskList.getList();
    const actualTask = actualList[idActualOfTask];

    switch(resultClass) {
        case 'Task': 
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            break;
        case 'AllTask': 
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(selectPriority, actualTask.getPriority());
            putValues(deadlinePriority, actualTask.getDeadline());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequencyPriority, actualTask.getFrequency());

            yesTagsActive();
            yesPriorityActive();
            yesRepetitiveActive();
            break;
        case 'TagsTask': 
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());

            yesTagsActive();
            break;
        case 'RepetitiveTask': 
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequencyPriority, actualTask.getFrequency());

            yesRepetitiveActive();
            break;
        case 'PriorityTask': 
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(selectPriority, actualTask.getPriority());
            putValues(deadlinePriority, actualTask.getDeadline());

            yesPriorityActive();
            break;
        case 'Repetitive_Tags': 
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequencyPriority, actualTask.getFrequency());

            yesTagsActive();
            yesRepetitiveActive();
            break;
        case 'Priority_Repetitive': 
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(selectPriority, actualTask.getPriority());
            putValues(deadlinePriority, actualTask.getDeadline());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequencyPriority, actualTask.getFrequency());

            yesPriorityActive();
            yesRepetitiveActive();
            break;
        case 'Priority_Tags': 
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(selectPriority, actualTask.getPriority());
            putValues(deadlinePriority, actualTask.getDeadline());

            yesTagsActive();
            yesPriorityActive();
            break;
        default:
            console.log("não entrou em nada, rpz");
            break;
    };
};

export { atualizeActualTask };