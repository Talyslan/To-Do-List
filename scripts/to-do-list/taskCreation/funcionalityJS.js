import { isTag, isPriority, isRepetitive } from '../interface/configTask/yes&no.js';

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