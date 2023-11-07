import { taskList } from "./activies.js";
import { appear, disappear, appearAll } from "./interface/interface.js";
import { putValues, takeValues } from "./allOfInputs.js";

import { 
    yesTagsActive, 
    yesPriorityActive, 
    yesRepetitiveActive, 
    isTag,
    isPriority,
    isRepetitive
} from "./interface/configTask/yes&no.js";
import { 
    title, description, selectPriority, 
    deadlinePriority, startDate, frequencyPriority
} from "./interface/variables.js";


const atualizeActualTaskOnCT = (idActualOfTask) => {
    const actualList = taskList.getList();
    const actualTask = actualList[idActualOfTask];
    const resultClass = actualTask.getClassType();

    console.log(' ')
    console.log("=== ATUALIZE ===")
    console.log(actualList)
    console.log(actualTask);
    console.log(resultClass)

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
            putValues(frequencyPriority, actualTask.getFrequency());

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
            disappear(frequencyPriority);
            break;
        case 'RepetitiveTask': 
            yesRepetitiveActive();
            
            putValues(title, actualTask.getTitle());
            putValues(description, actualTask.getDescription());
            putValues(startDate, actualTask.getStartDate());
            putValues(frequencyPriority, actualTask.getFrequency());

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
            putValues(frequencyPriority, actualTask.getFrequency());

            appearAll();
            disappear(startDate);
            disappear(frequencyPriority);
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

    console.log("=== FIM DO ATUALIZE ===")
};

export { atualizeActualTaskOnCT };

import { idOfClickedTask } from "./interface/configTask/configTask.js";

const setNewInfo_Task = () => {
    const taskClicked = taskList.getList()[idOfClickedTask];

    taskClicked.setTitle(takeValues(title));
    taskClicked.setDescription(takeValues(description));
};
  
const setNewInfo_AllTask = () => {
    const taskClicked = taskList.getList()[idOfClickedTask];

    taskClicked.setTitle(takeValues(title));
    taskClicked.setDescription(takeValues(description));
    taskClicked.setPriority(takeValues(selectPriority));
    taskClicked.setDeadline(takeValues(deadlinePriority));
    taskClicked.setFrequency(takeValues(frequencyPriority));
    taskClicked.setStartDate(takeValues(startDate));

    isTagCreateABoxType();
};

const setNewInfo_TagsTask = () => {
    const taskClicked = taskList.getList()[idOfClickedTask];

    taskClicked.setTitle(takeValues(title));
    taskClicked.setDescription(takeValues(description));
};

const setNewInfo_RepetitiveTask = () => {
    const taskClicked = taskList.getList()[idOfClickedTask];

    taskClicked.setTitle(takeValues(title));
    taskClicked.setDescription(takeValues(description));
    taskClicked.setFrequency(takeValues(frequencyPriority));
    taskClicked.setStartDate(takeValues(startDate));
};

const setNewInfo_PriorityTask = () => {
    const taskClicked = taskList.getList()[idOfClickedTask];

    taskClicked.setTitle(takeValues(title));
    taskClicked.setDescription(takeValues(description));
    taskClicked.setPriority(takeValues(selectPriority));
    taskClicked.setDeadline(takeValues(deadlinePriority));
};

const setNewInfo_RepetitiveTags = () => {
    const taskClicked = taskList.getList()[idOfClickedTask];

    taskClicked.setTitle(takeValues(title));
    taskClicked.setDescription(takeValues(description));
    taskClicked.setFrequency(takeValues(frequencyPriority));
    taskClicked.setStartDate(takeValues(startDate));
};

const setNewInfo_PriorityRepetitive = () => {
    const taskClicked = taskList.getList()[idOfClickedTask];

    taskClicked.setTitle(takeValues(title));
    taskClicked.setDescription(takeValues(description));
    taskClicked.setPriority(takeValues(selectPriority));
    taskClicked.setDeadline(takeValues(deadlinePriority));
    taskClicked.setFrequency(takeValues(frequencyPriority));
    taskClicked.setStartDate(takeValues(startDate));
};

const setNewInfo_PriorityTags = () => {
    const taskClicked = taskList.getList()[idOfClickedTask];

    taskClicked.setTitle(takeValues(title));
    taskClicked.setDescription(takeValues(description));
    taskClicked.setPriority(takeValues(selectPriority));
    taskClicked.setDeadline(takeValues(deadlinePriority));
};

export {
    setNewInfo_Task, setNewInfo_AllTask, setNewInfo_TagsTask, setNewInfo_RepetitiveTask,
    setNewInfo_PriorityTask, setNewInfo_RepetitiveTags, setNewInfo_PriorityRepetitive,
    setNewInfo_PriorityTags
};