import { isTag, isPriority, isRepetitive } from './interface/configTask/yes&no.js';
import { takeValues, clearInput } from './allOfInputs.js';
import { inputTags } from './interface/variables.js';

const cond = (isTagValue, isRepetitiveValue, isPriorityValue) => {
    return isTag === isTagValue && isRepetitive === isRepetitiveValue && isPriority === isPriorityValue;
};

const verifyWhatClass = () => {
    if (cond(false, false, false)) return 'Task';
    else if (cond(true, true, true)) return 'AllTask';
    else if (cond(true, false, false)) return 'TagsTask';
    else if (cond(false, true, false)) return 'RepetitiveTask';
    else if (cond(false, false, true)) return 'PriorityTask';
    else if (cond(true, true, false)) return 'Repetitive_Tags';
    else if (cond(false, true, true)) return 'Priority_Repetitive';
    else if (cond(true, false, true)) return 'Priority_Tags'
};

export { verifyWhatClass };

let list = [];
const addTagInTheList = () => {
    console.log("=== ADD TAGS IN THE LIST ===")
    console.log(inputTags)
    console.log(takeValues(inputTags))
    list.push(takeValues(inputTags));
    clearInput(inputTags);
    console.log("=== FIM ADD TAGS IN THE LIST ===")
};

const resetList = () => list = [];

export { list }
export { addTagInTheList, resetList };