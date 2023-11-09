import { list } from './interface/taskActionHTML.js';
import { isTag } from './interface/configTask/yes&no.js';
import { TaskList } from './taskCreation/classesTask.js';
import { checkAllInputsOn } from './interface/inputs/inputsGeral.js';
import { boxTask, edit_btnPencilAll } from './interface/variables.js';
import { createTask_class, taskCreated } from './taskCreation/createTask.js';
import { addCSSClasses, removeCSSClasses } from './interface/addClassesCSS/addClassesCSS.js';
import { 
    addTaskInTheBox, takeTags, 
    addTagsOnExistentTask 
} from './interface/taskActionHTML.js';
import { 
    closeCT, idOfClickedTask, elementClicked, 
    atualizeIDandElementClicked 
} from './interface/configTask/configTask.js';
import { 
    setNewInfo_Task, setNewInfo_AllTask, setNewInfo_TagsTask, setNewInfo_RepetitiveTask,
    setNewInfo_PriorityTask, setNewInfo_RepetitiveTags, setNewInfo_PriorityRepetitive,
    setNewInfo_PriorityTags
} from './updateTask/updateInJS.js';

//Para os botões de Add Task, Alterate Task, Remove Task e Complete Task
let taskList = new TaskList();
let ids = 0;

const addTask = () => {
    const task = createTask_class();

    if (task !== undefined) {
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

        //atualizar a variável que retorna uma lista com todas as tasks do HTML
        edit_btnPencilAll(); 
        closeCT();
    };
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

const completeTask = (e) => {
    const listOfTask = taskList.getList();
    let actualTask = listOfTask[idOfClickedTask];

    const checkbox = e.target;
    if (checkbox.classList.contains("checkbox"))
        atualizeIDandElementClicked(checkbox.parentNode)

    const hasNoCompleted = !elementClicked.classList.contains("completeTask");

    if (hasNoCompleted) {
        actualTask.completedTask();

        addCSSClasses();
    }
    
    if (checkbox.checked === false) {
        actualTask.unCompletedTask();
        
        removeCSSClasses();
    };

    edit_btnPencilAll();
    closeCT();
};

export { taskList };
export { addTask, alterateTask, removeTask, completeTask };

