import { list } from './funcionalityJS.js';
import { isTag } from './interface/configTask/yes&no.js';
import { TaskList } from './classesTask.js';
import { edit_btnPencilAll } from './interface/variables.js'
import { closeCT, resetAllTaskCT } from './interface/configTask/configTask.js';
import { createTask_class, taskCreated } from './createTask.js';
import { addTaskInTheBox, addTagsInTheBox } from './interface/interface.js';

//Para os botões de Add Task, Alterate Task, Remove Task e Complete Task
let taskList = new TaskList();
let ids = 0; //MUDAR AQUI PRA ZERO DEPOIS

const addTask = () => {
    let task = createTask_class();

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
    
    resetAllTaskCT();
    edit_btnPencilAll();
    closeCT();
};

const removeTask = () => {

    edit_btnPencilAll();
    closeCT();
};

const completeTask = () => {
    
    edit_btnPencilAll();
    closeCT();
};

export { taskList };
export { addTask, alterateTask, removeTask, completeTask };

