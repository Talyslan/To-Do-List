import { disappear, appearAll } from "../interface/taskActionHTML.js";
import { putValues } from "../interface/inputs/inputsGeral.js";
import { taskList } from "../actions.js";

import { 
    yesTagsActive, 
    yesPriorityActive, 
    yesRepetitiveActive
} from "../interface/configTask/yes&no.js";
import { 
    title, description, selectPriority, 
    deadlinePriority, startDate, frequency
} from "../interface/variables.js";

const atualizeActualTaskOnCT = (idActualOfTask) => {
    const actualList = taskList.getList();
    const actualTask = actualList[idActualOfTask];
    const resultClass = actualTask.getClassType();

    switch(resultClass) {
        case 'Task': 
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());

            appearAll();
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
            putValues(frequency, actualTask.getFrequency());

            appearAll();
            break;
        case 'TagsTask': 
            yesTagsActive();
            
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());

            appearAll();
            disappear(selectPriority);
            disappear(deadlinePriority);
            disappear(startDate);
            disappear(frequency);
            break;
        case 'RepetitiveTask': 
            yesRepetitiveActive();
            
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequency, actualTask.getFrequency());

            appearAll();
            disappear(selectPriority);
            disappear(deadlinePriority);
            break;
        case 'PriorityTask': 
            yesPriorityActive();

            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(selectPriority, actualTask.getPriority());
            putValues(deadlinePriority, actualTask.getDeadline());
            
            appearAll();
            break;
        case 'Repetitive_Tags': 
            yesTagsActive();
            yesRepetitiveActive();
            
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequency, actualTask.getFrequency());

            appearAll();
            disappear(startDate);
            disappear(frequency);
            break;
            case 'Priority_Repetitive': 
            yesPriorityActive();
            yesRepetitiveActive();

            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(selectPriority, actualTask.getPriority());
            putValues(deadlinePriority, actualTask.getDeadline());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequency, actualTask.getFrequency());

            appearAll();
            break;
        case 'Priority_Tags': 
            yesTagsActive();
            yesPriorityActive();
        
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(selectPriority, actualTask.getPriority());
            putValues(deadlinePriority, actualTask.getDeadline());

            appearAll();
            disappear(selectPriority);
            disappear(deadlinePriority);
            break;
        default:
            console.log("não entrou em nada, rpz");
            break;
    };
};

export { atualizeActualTaskOnCT };