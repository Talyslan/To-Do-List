import { disappear } from "../interface/taskActionHTML.js";
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
import { 
    inputsOn_AllTask, inputsOn_PriorityRepetitive, inputsOn_PriorityTags, inputsOn_RepetitiveTags, inputsOn_RepetitiveTask, inputsOn_TagsTask, inputsOn_Task 
} from "../interface/inputs/inputsBaseadOnTask.js";

const atualizeActualTaskOnCT = (idActualOfTask) => {
    const actualList = taskList.getList();
    const actualTask = actualList[idActualOfTask];
    const resultClass = actualTask.getClassType();

    switch(resultClass) {
        case 'Task': 
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());

            inputsOn_Task();
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

            inputsOn_AllTask();
            break;
        case 'TagsTask': 
            yesTagsActive();
            
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());

            inputsOn_TagsTask();
            break;
        case 'RepetitiveTask': 
            yesRepetitiveActive();
            
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequency, actualTask.getFrequency());

            inputsOn_RepetitiveTask();
            break;
        case 'PriorityTask': 
            yesPriorityActive();

            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(selectPriority, actualTask.getPriority());
            putValues(deadlinePriority, actualTask.getDeadline());
            
            inputsOn_PriorityTags();
            break;
        case 'Repetitive_Tags': 
            yesTagsActive();
            yesRepetitiveActive();
            
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequency, actualTask.getFrequency());

            inputsOn_RepetitiveTags();
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

            inputsOn_PriorityRepetitive();
            break;
        case 'Priority_Tags': 
            yesTagsActive();
            yesPriorityActive();
        
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(selectPriority, actualTask.getPriority());
            putValues(deadlinePriority, actualTask.getDeadline());

            inputsOn_PriorityTags();
            break;
        default:
            console.log("não entrou em nada, rpz");
            break;
    };
};

export { atualizeActualTaskOnCT };