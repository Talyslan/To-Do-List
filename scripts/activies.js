import { closeCT } from './interface/configTask/configTask.js';
import { isTag } from './interface/configTask/yes&no.js';
import { edit_btnPencilAll } from './interface/variables.js'
import { verifyWhatClass } from './funcionalityJS.js';
import { 
    verifyInput, takeValues, 
    addTaskInTheBox
} from "./interface/interface.js";
import { 
    errorMessage,
    title, description,
    inputTags, buttonTags,
    selectPriority, deadlinePriority,
    startDate, frequencyPriority
} from './interface/variables.js'

import {
    TaskList, Task, PriorityTask, RepetitiveTask, 
    TagsTask, Priority_Tags, Priority_Repetitive,
    Repetitive_Tags,
    AllTask
} from './classesTask.js';

//Para os botões de Add Task, Alterate Task, Remove Task e Complete Task
let list = [];
const addTagInTheList = () => list.push(takeValues(inputTags));
export {addTagInTheList};

let taskList = new TaskList();
let task = undefined;
let resultVerifyInput = undefined;

const addTask = () => {
    const classResult = verifyWhatClass();

    switch(classResult) {
        case 'Task':
            resultVerifyInput = verifyInput(errorMessage, title, description); 

            if (resultVerifyInput) {
                task = new Task(takeValues(title), takeValues(description)); 
                taskList.addTask(task);
            }
            break;
        case 'AllTask':
            resultVerifyInput = verifyInput(errorMessage, title, description, inputTags, 
                                buttonTags, selectPriority, deadlinePriority, 
                                startDate, frequencyPriority);

            if (resultVerifyInput) {
                task = new AllTask ( 
                    takeValues(title), takeValues(description), takeValues(selectPriority),
                    takeValues(deadlinePriority), takeValues(frequencyPriority), takeValues(startDate), ...list);
                taskList.addTask(task);
            }
            break;
        case 'TagsTask':
            resultVerifyInput = verifyInput(errorMessage ,title, description, 
                                            inputTags, buttonTags); 

            if (resultVerifyInput) {
                task = new TagsTask (takeValues(title), takeValues(description), ...list); 
                taskList.addTask(task);
            }
            break;
        case 'RepetitiveTask': 
            resultVerifyInput = verifyInput(errorMessage, title, description, 
                                            startDate, frequencyPriority);

            if (resultVerifyInput) {
                task = new RepetitiveTask (
                    takeValues(title), takeValues(description),
                    takeValues(frequencyPriority), takeValues(startDate)
                ); 
                taskList.addTask(task);
            }
            break;
        case 'PriorityTask': 
            resultVerifyInput = verifyInput(errorMessage, title, 
                                            description, selectPriority, 
                                            deadlinePriority); 

            if (resultVerifyInput) {
                task = new PriorityTask(
                    takeValues(title), takeValues(description), 
                    takeValues(selectPriority), takeValues(deadlinePriority)
                ); 
                taskList.addTask(task);
            }
            break;
        case 'Repetitive_Tags': 
            resultVerifyInput = verifyInput(errorMessage, title, 
                                            description, startDate, 
                                            frequencyPriority, inputTags, 
                                            buttonTags);

            if (resultVerifyInput) {
                task = new Repetitive_Tags(
                    takeValues(title), takeValues(description), 
                    takeValues(frequencyPriority), takeValues(startDate), ...list); 
                taskList.addTask(task);
            }
            break;
            //title, description, selectPriority, deadlinePriority, inputTags, buttonTags
        case 'Priority_Repetitive': 
            resultVerifyInput = verifyInput(errorMessage, title, description,
                                         selectPriority, deadlinePriority, startDate, 
                                         frequencyPriority);

            if (resultVerifyInput) {
                task = new Priority_Repetitive(
                    takeValues(title), takeValues(description), 
                    takeValues(selectPriority), takeValues(deadlinePriority),
                    takeValues(frequencyPriority), takeValues(startDate)
                ); 
                taskList.addTask(task);
            }
            break;
        case 'Priority_Tags': 
            resultVerifyInput = verifyInput(errorMessage, title, description, 
                                            selectPriority, deadlinePriority, 
                                            inputTags, buttonTags)

            if (resultVerifyInput) {
                task = new Priority_Tags(
                    takeValues(title), takeValues(description), 
                    takeValues(selectPriority), takeValues(deadlinePriority), ...list);
                taskList.addTask(task);
            }
            break;
        default:
            console.log("não entrou em nada, rpz");
            break;
    }
    console.log(isTag)
    console.log(task)
    console.log(list)
    if (isTag)
        for (const i of list)
            task.addTag(i);

    if (isTag)
        addTaskInTheBoxWithTags(takeValues(title), ...list)
    else
        addTaskInTheBox(takeValues(title));

    edit_btnPencilAll();
    closeCT();
}

const alterateTask = () => {

    edit_btnPencilAll();
    closeCT();
}

const removeTask = () => {

    edit_btnPencilAll();
    closeCT();
}

const completeTask = () => {
    
    edit_btnPencilAll();
    closeCT();
}

export { addTask, alterateTask, removeTask, completeTask };

