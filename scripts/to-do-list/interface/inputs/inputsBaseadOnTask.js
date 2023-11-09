import { disappear, appear } from "../taskActionHTML.js";
import { repetitive_box, priority_box, tags_box } from '../variables.js';

const appearAllInputs = () => {
    appear(repetitive_box);
    appear(priority_box);
    appear(tags_box);
};

const inputsOn_Task = () => {
    appearAllInputs();
    disappear(tags_box);
    disappear(priority_box);
    disappear(repetitive_box);
};

const inputsOn_AllTask = () => appearAllInputs();

const inputsOn_TagsTask = () => {
    appearAllInputs();
    disappear(priority_box);
    disappear(repetitive_box);
};

const inputsOn_RepetitiveTask = () => {
    appearAllInputs();
    disappear(tags_box);
    disappear(priority_box);
};

const inputsOn_PriorityTask = () => {
    appearAllInputs();
    disappear(tags_box);
    disappear(repetitive_box);
};

const inputsOn_RepetitiveTags = () => {
    appearAllInputs();
    disappear(priority_box);
};

const inputsOn_PriorityRepetitive = () => {
    appearAllInputs();
    disappear(tags_box);
};

const inputsOn_PriorityTags = () => {
    appearAllInputs();
    disappear(repetitive_box);
};

export { 
    appearAllInputs,
    inputsOn_Task, inputsOn_AllTask, inputsOn_TagsTask, inputsOn_RepetitiveTask, inputsOn_PriorityTask, 
    inputsOn_RepetitiveTags, inputsOn_PriorityRepetitive,
    inputsOn_PriorityTags
};