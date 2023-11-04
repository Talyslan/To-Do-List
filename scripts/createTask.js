import { verifyInput, takeValues } from "./interface/interface.js";
import { verifyWhatClass } from './funcionalityJS.js';

import { 
    title, description, selectPriority, 
    deadlinePriority, startDate, frequencyPriority
} from './interface/variables.js'

import {
    Task, PriorityTask, RepetitiveTask, TagsTask, 
    Priority_Tags, Priority_Repetitive, Repetitive_Tags, AllTask
} from './classesTask.js';

let taskCreated = false;

const createTask_class = () => {
    const classResult = verifyWhatClass();
    let resultVerifyInput = undefined;
    let task = undefined;
    
    switch(classResult) {
        case 'Task':
            resultVerifyInput = verifyInput(title, description); 
            if (resultVerifyInput)
                task = new Task(takeValues(title), takeValues(description));
            break;

        case 'AllTask':
            resultVerifyInput = verifyInput(title, description,
                                            selectPriority, deadlinePriority, 
                                            startDate, frequencyPriority);
            if (resultVerifyInput)
                task = new AllTask ( 
                    takeValues(title), takeValues(description), takeValues(selectPriority),
                    takeValues(deadlinePriority), takeValues(frequencyPriority), takeValues(startDate));
            break;
            
        case 'TagsTask':
            resultVerifyInput = verifyInput(title, description); 
            if (resultVerifyInput)
                task = new TagsTask (takeValues(title), takeValues(description)); 
            break;

        case 'RepetitiveTask': 
            resultVerifyInput = verifyInput(title, description, 
                                            startDate, frequencyPriority);
            if (resultVerifyInput)
                task = new RepetitiveTask (
                    takeValues(title), takeValues(description),
                    takeValues(frequencyPriority), takeValues(startDate)
                ); 
            break;

        case 'PriorityTask': 
            resultVerifyInput = verifyInput(title, 
                                            description, selectPriority, 
                                            deadlinePriority); 
            if (resultVerifyInput)
                task = new PriorityTask(
                    takeValues(title), takeValues(description), 
                    takeValues(selectPriority), takeValues(deadlinePriority)
                ); 
            break;

        case 'Repetitive_Tags': 
            resultVerifyInput = verifyInput(title, 
                                            description, startDate, 
                                            frequencyPriority);
            if (resultVerifyInput)
                task = new Repetitive_Tags(
                    takeValues(title), takeValues(description), 
                    takeValues(frequencyPriority), takeValues(startDate)); 
            break;

        case 'Priority_Repetitive': 
            resultVerifyInput = verifyInput(title, description,
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
            resultVerifyInput = verifyInput(title, description, 
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

    if (resultVerifyInput) {
        taskCreated = true;
        return task;
    };
};

export { createTask_class, taskCreated };