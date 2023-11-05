import { list } from './funcionalityJS.js';
import { isTag } from './interface/configTask/yes&no.js';
import { TaskList } from './classesTask.js';
import { takeValues } from './allOfInputs.js';
import { edit_btnPencilAll, title } from './interface/variables.js'
import { createTask_class, taskCreated } from './createTask.js';
import { addTaskInTheBox, addTagsInTheBox } from './interface/interface.js';
import { closeCT, idOfClickedTask, resetAllTaskCT } from './interface/configTask/configTask.js';
import { checkAllInputsOn } from './allOfInputs.js';

//Para os botões de Add Task, Alterate Task, Remove Task e Complete Task
let taskList = new TaskList();
let ids = 0; //MUDAR AQUI PRA ZERO DEPOIS

const addTask = () => {
    const task = createTask_class();

    if (taskCreated) {
        task.setId(ids);
        ids++;
        taskList.addTask(task);
        // Adicionar tags nas classes que admitem Tag tanto no HTML quanto no JS
        if (isTag && taskCreated) {
            addTagsInTheBox(task.getTitle(), task.getId(), ...list);
            list.forEach(i => task.addTag(i));
        }
        else
            addTaskInTheBox(task.getTitle(), task.getId());

        resetAllTaskCT();
        //atualizar a variável que retorna uma lista com todas as tasks do HTML
        edit_btnPencilAll(); 
        closeCT();
    };
};

const alterateTask = () => {
    console.log('Alterate ')
    const taskClicked = taskList.getList()[idOfClickedTask];
    const classResult = taskClicked.getClassName();

    checkAllInputsOn();

    switch(classResult) {
        case 'Task':
            if (resultVerifyInput) {
                taskClicked.setTitle(takeValues(title));
                taskClicked.setDescription(takeValues(description));
            }
            break;
        case 'AllTask':
            if (resultVerifyInput)
                taskClicked.setTitle(takeValues(title));
                taskClicked.setDescription(takeValues(description));
                taskClicked.setPriority(takeValues(selectPriority));
                taskClicked.setDeadline(takeValues(deadlinePriority));
                taskClicked.setFrequency(takeValues(frequencyPriority));
                taskClicked.setStartDate(takeValues(startDate));
            break;
        case 'TagsTask':
            if (resultVerifyInput) {
                taskClicked.setTitle(takeValues(title));
                taskClicked.setDescription(takeValues(description));
            };
            break;
        case 'RepetitiveTask': 
            if (resultVerifyInput) {
                taskClicked.setTitle(takeValues(title));
                taskClicked.setDescription(takeValues(description));
                taskClicked.setFrequency(takeValues(frequencyPriority));
                taskClicked.setStartDate(takeValues(startDate));
            }
            break;
        case 'PriorityTask': 
            if (resultVerifyInput) {
                taskClicked.setTitle(takeValues(title));
                taskClicked.setDescription(takeValues(description));
                taskClicked.setPriority(takeValues(selectPriority));
                taskClicked.setDeadline(takeValues(deadlinePriority));
            }
            break;
        case 'Repetitive_Tags': 
            if (resultVerifyInput) {
                taskClicked.setTitle(takeValues(title));
                taskClicked.setDescription(takeValues(description));
                taskClicked.setFrequency(takeValues(frequencyPriority));
                taskClicked.setStartDate(takeValues(startDate));
            }
            break;
        case 'Priority_Repetitive': 
            if (resultVerifyInput) {
                taskClicked.setTitle(takeValues(title));
                taskClicked.setDescription(takeValues(description));
                taskClicked.setPriority(takeValues(selectPriority));
                taskClicked.setDeadline(takeValues(deadlinePriority));
                taskClicked.setFrequency(takeValues(frequencyPriority));
                taskClicked.setStartDate(takeValues(startDate));
            }
            break;
        case 'Priority_Tags': 
            if (resultVerifyInput) {
                taskClicked.setTitle(takeValues(title));
                taskClicked.setDescription(takeValues(description));
                taskClicked.setPriority(takeValues(selectPriority));
                taskClicked.setDeadline(takeValues(deadlinePriority));
            };
            break;
        default:
            console.log("não entrou em nada, rpz");
            break;
    }

    resetAllTaskCT();
    edit_btnPencilAll();
    closeCT();
};

const removeTask = () => {
    console.log('remove ' + taskCreated)
    edit_btnPencilAll();
    // closeCT();
};

const completeTask = () => {
    console.log('complete ' + taskCreated)
    edit_btnPencilAll();
    // closeCT();
};

export { taskList };
export { addTask, alterateTask, removeTask, completeTask };

