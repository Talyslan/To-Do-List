// ======== Config Task BUTTONS ========
import { 
    add_CTcreateBtn, taskComplete_CTeditBtn,
    deleteTask_CTeditBtn, alterateTask_CTeditBtn
} from './scripts/interface/variables.js';

// Functions
import { addTask, completeTask, removeTask, alterateTask } from './scripts/actions.js';

// Fechar a Config Task a partir da ação 
add_CTcreateBtn.addEventListener("click", addTask);
taskComplete_CTeditBtn.addEventListener("click", completeTask); 
deleteTask_CTeditBtn.addEventListener("click", removeTask);
alterateTask_CTeditBtn.addEventListener("click", alterateTask);

//  ======== Botões da tela inicial "Create a Task" e os ícones do lápis ========
import { createTask_btn, edit_btnPencilAll } from './scripts/interface/variables.js'
// Function
import { openCTcreate } from './scripts/interface/configTask/configTask.js';

createTask_btn.addEventListener("click", openCTcreate);
edit_btnPencilAll();

//======== Sim e Não da Config Task ========
import { 
    yesTags, noTags, 
    yesPriority, noPriority, 
    yesRepetitive, noRepetitive 
} from './scripts/interface/variables.js';

// Functions
import { 
    yesTagsActive, noTagActive,
    yesPriorityActive, noPriorityActive,
    yesRepetitiveActive, noRepetitiveActive 
} from './scripts/interface/configTask/yes&no.js';

// For Tags Task
yesTags.addEventListener("click", yesTagsActive);
noTags.addEventListener("click", noTagActive);
// For Priority Task
yesPriority.addEventListener("click", yesPriorityActive)
noPriority.addEventListener("click", noPriorityActive)
// For Repetitive Task
yesRepetitive.addEventListener("click", yesRepetitiveActive);
noRepetitive.addEventListener("click", noRepetitiveActive)

//  ======== Add Tags ========
import { buttonTags } from './scripts/interface/variables.js';
import { addTagInTheList } from './scripts/interface/taskActionHTML.js';
buttonTags.addEventListener("click", addTagInTheList)

// Filter
import { filterSelect } from './scripts/interface/variables.js';
import { filter } from './scripts/interface/filter/filter.js'

filterSelect.addEventListener("change", filter);