import { list } from './funcionalityJS.js';
import { isTag } from './interface/configTask/yes&no.js';
import { TaskList } from './classesTask.js';
import { checkAllInputsOn } from './allOfInputs.js';
import { boxTask, edit_btnPencilAll } from './interface/variables.js'
import { addTaskInTheBox, takeTags, addTagsOnExistentTask } from './interface/interface.js';
import { createTask_class, taskCreated } from './createTask.js';
import { closeCT, resetAllTaskCT, idOfClickedTask } from './interface/configTask/configTask.js';

import { 
    setNewInfo_Task, setNewInfo_AllTask, setNewInfo_TagsTask, setNewInfo_RepetitiveTask,
    setNewInfo_PriorityTask, setNewInfo_RepetitiveTags, setNewInfo_PriorityRepetitive,
    setNewInfo_PriorityTags
} from './atualizeActualTask.js';

//Para os botões de Add Task, Alterate Task, Remove Task e Complete Task
let taskList = new TaskList();
let ids = 0;

const addTask = () => {
    const task = createTask_class();

    if (taskCreated !== undefined) {
        task.setId(ids);
        ids++;
        taskList.addTask(task);

        // Adicionar tags nas classes que admitem Tag tanto no HTML quanto no JS
        if (isTag && taskCreated) {
            const listOfTags = takeTags(...list)
            addTaskInTheBox(task.getTitle(), task.getId(), listOfTags);
            list.forEach(i => task.addTag(i));
        }
        else
            addTaskInTheBox(task.getTitle(), task.getId());

        resetAllTaskCT();
        //atualizar a variável que retorna uma lista com todas as tasks do HTML
        edit_btnPencilAll(); 
        closeCT();
    };

    console.log(taskList.getList())
};

const alterateTask = () => {
    const taskClicked = taskList.getList()[idOfClickedTask];
    const classResult = taskClicked.getClassType();

    checkAllInputsOn();

    switch(classResult) {
        case 'Task': setNewInfo_Task();
            break;
        case 'AllTask': setNewInfo_AllTask();
            break;
        case 'TagsTask': setNewInfo_TagsTask();
            break;
        case 'RepetitiveTask': setNewInfo_RepetitiveTask();
            break;
        case 'PriorityTask': setNewInfo_PriorityTask();
            break;
        case 'Repetitive_Tags': setNewInfo_RepetitiveTags();
            break;
        case 'Priority_Repetitive': setNewInfo_PriorityRepetitive();
            break;
        case 'Priority_Tags': setNewInfo_PriorityTags();
            break;
        default:
            console.log("não entrou em nada, rpz");
            break;
    }

    if (isTag && taskCreated) 
        addTagsOnExistentTask(idOfClickedTask);

    resetAllTaskCT();
    edit_btnPencilAll();
    closeCT();
};

const removeTask = () => {
    const listOfTask = taskList.getList();
    const indiceOfTask = listOfTask.indexOf(idOfClickedTask);
    listOfTask.splice(indiceOfTask, 1);

    boxTask.children[idOfClickedTask].remove();

    edit_btnPencilAll();
    closeCT();
};

const completeTask = () => {
    console.log('complete ' + taskCreated)
    edit_btnPencilAll();
    // closeCT();
};

export { taskList };
export { addTask, alterateTask, removeTask, completeTask };

