import { closeCT } from './interface/configTask/configTask.js';
import { isTag } from './interface/configTask/yes&no.js';
import { edit_btnPencilAll } from './interface/variables.js'
import { verifyWhatClass, list } from './funcionalityJS.js';
import { 
    verifyInput, takeValues, 
    addTaskInTheBox, addTagsInTheBox
} from "./interface/interface.js";
import { 
    errorMessage,
    title, description,
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
let taskList = new TaskList();

const addTask = () => {
    const classResult = verifyWhatClass();
    console.log(classResult)
    let resultVerifyInput = undefined;
    let task = undefined;
    
    switch(classResult) {
        case 'Task':
            resultVerifyInput = verifyInput(errorMessage, title, description); 
            if (resultVerifyInput)
                task = new Task(takeValues(title), takeValues(description));
        
            break;
        case 'AllTask':
            resultVerifyInput = verifyInput(errorMessage, title, description,
                                            selectPriority, deadlinePriority, 
                                            startDate, frequencyPriority);
            if (resultVerifyInput)
                task = new AllTask ( 
                    takeValues(title), takeValues(description), takeValues(selectPriority),
                    takeValues(deadlinePriority), takeValues(frequencyPriority), takeValues(startDate));
        
            break;
        case 'TagsTask':
            resultVerifyInput = verifyInput(errorMessage, title, description); 
            console.log("verify dos inputs" + resultVerifyInput)
            if (resultVerifyInput)
                task = new TagsTask (takeValues(title), takeValues(description)); 
        
            break;
        case 'RepetitiveTask': 
            resultVerifyInput = verifyInput(errorMessage, title, description, 
                                            startDate, frequencyPriority);
            if (resultVerifyInput)
                task = new RepetitiveTask (
                    takeValues(title), takeValues(description),
                    takeValues(frequencyPriority), takeValues(startDate)
                ); 
    
            break;
        case 'PriorityTask': 
            resultVerifyInput = verifyInput(errorMessage, title, 
                                            description, selectPriority, 
                                            deadlinePriority); 
            if (resultVerifyInput)
                task = new PriorityTask(
                    takeValues(title), takeValues(description), 
                    takeValues(selectPriority), takeValues(deadlinePriority)
                ); 

            break;
        case 'Repetitive_Tags': 
            resultVerifyInput = verifyInput(errorMessage, title, 
                                            description, startDate, 
                                            frequencyPriority);
            if (resultVerifyInput)
                task = new Repetitive_Tags(
                    takeValues(title), takeValues(description), 
                    takeValues(frequencyPriority), takeValues(startDate)); 
    
            break;
            //title, description, selectPriority, deadlinePriority, inputTags, buttonTags
        case 'Priority_Repetitive': 
            resultVerifyInput = verifyInput(errorMessage, title, description,
                                            selectPriority, deadlinePriority, startDate, 
                                            frequencyPriority);
            if (resultVerifyInput)
                task = new Priority_Repetitive(
                    takeValues(title), takeValues(description), 
                    takeValues(selectPriority), takeValues(deadlinePriority),
                    takeValues(frequencyPriority), takeValues(startDate)
                );

            break;
        case 'Priority_Tags': 
            resultVerifyInput = verifyInput(errorMessage, title, description, 
                                            selectPriority, deadlinePriority);
            if (resultVerifyInput)
                task = new Priority_Tags(
                    takeValues(title), takeValues(description), 
                    takeValues(selectPriority), takeValues(deadlinePriority));

            break;
        default:
            console.log("não entrou em nada, rpz");
            break;
    }
    
    if (isTag && resultVerifyInput) {
        for (const i of list)
            task.addTag(i);
            addTagsInTheBox(...list);
    }

    console.log(list)
    console.log(task)
    console.log(taskList)
    
    // if (isTag)
    //     addTaskInTheBoxWithTags(takeValues(title), ...list)
    // else
    //     addTaskInTheBox(takeValues(title));
    
    if (resultVerifyInput) {
        addTaskInTheBox(task.getTitle(), task.getId());
        taskList.addTask(task);
        edit_btnPencilAll();
        closeCT();
    } 
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

