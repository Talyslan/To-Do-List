import { checkAllInputsOn, resultVerifyInput, takeValues } from "../interface/inputs/inputsGeral.js";
import { verifyWhatClass } from "./funcionalityJS.js";

import { 
    title, description, selectPriority, 
    deadlinePriority, startDate, frequency
} from '../interface/variables.js'

import {
    Task, PriorityTask, RepetitiveTask, TagsTask, 
    Priority_Tags, Priority_Repetitive, Repetitive_Tags, AllTask
} from './classesTask.js';

let taskCreated = false;

const createTask_class = () => {
    const classResult = verifyWhatClass();
    let task = undefined;
    
    checkAllInputsOn();

    switch(classResult) {
        case 'Task':
            if (resultVerifyInput)
                task = new Task(takeValues(title), takeValues(description));
            break;
        case 'AllTask':
            if (resultVerifyInput)
                task = new AllTask ( 
                    takeValues(title), takeValues(description), takeValues(selectPriority),
                    takeValues(deadlinePriority), takeValues(frequency), takeValues(startDate));
            break;
        case 'TagsTask':
            if (resultVerifyInput)
                task = new TagsTask (takeValues(title), takeValues(description)); 
            break;
        case 'RepetitiveTask':
            if (resultVerifyInput)
                task = new RepetitiveTask (
                    takeValues(title), takeValues(description),
                    takeValues(frequency), takeValues(startDate)
                ); 
            break;
        case 'PriorityTask': 
            if (resultVerifyInput)
                task = new PriorityTask(
                    takeValues(title), takeValues(description), 
                    takeValues(selectPriority), takeValues(deadlinePriority)
                ); 
            break;
        case 'Repetitive_Tags': 
            if (resultVerifyInput)
                task = new Repetitive_Tags(
                    takeValues(title), takeValues(description), 
                    takeValues(frequency), takeValues(startDate)); 
            break;
        case 'Priority_Repetitive': 
            if (resultVerifyInput)
                task = new Priority_Repetitive(
                    takeValues(title), takeValues(description), 
                    takeValues(selectPriority), takeValues(deadlinePriority),
                    takeValues(frequency), takeValues(startDate)
                );
            break;
        case 'Priority_Tags': 
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
        task.setClassType(classResult);
        taskCreated = true;
        return task;
    };
};

export { createTask_class, taskCreated };