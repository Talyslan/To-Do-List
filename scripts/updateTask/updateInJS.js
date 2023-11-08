import { takeValues } from "../interface/inputs/inputsGeral.js";
import { taskList } from "../actions.js";

import {
    title, description, selectPriority, deadlinePriority,
    frequency, startDate
} from "../interface/variables.js";

import { idOfClickedTask } from "../interface/configTask/configTask.js";

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
    taskClicked.setFrequency(takeValues(frequency));
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
    taskClicked.setFrequency(takeValues(frequency));
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
    taskClicked.setFrequency(takeValues(frequency));
    taskClicked.setStartDate(takeValues(startDate));
};

const setNewInfo_PriorityRepetitive = () => {
    const taskClicked = taskList.getList()[idOfClickedTask];

    taskClicked.setTitle(takeValues(title));
    taskClicked.setDescription(takeValues(description));
    taskClicked.setPriority(takeValues(selectPriority));
    taskClicked.setDeadline(takeValues(deadlinePriority));
    taskClicked.setFrequency(takeValues(frequency));
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