// Functions
import {  
    closeCT,
    openCTcreate, 
    openCTedit 
} from './interface/configTask/configTask.js';

import { 
    add_CTcreateBtn,
    taskComplete_CTeditBtn,
    deleteTask_CTeditBtn,
    alterateTask_CTeditBtn
} from './interface/variables.js';

// Funções
import {
    addTask
} from './activies.js';

// Fechar a Config Task a partir da ação 
add_CTcreateBtn.addEventListener("click", addTask);
taskComplete_CTeditBtn.addEventListener("click", closeCT); 
deleteTask_CTeditBtn.addEventListener("click", closeCT);
alterateTask_CTeditBtn.addEventListener("click", closeCT)

// abrir a Config Task Botão "Create a task" e Edits do lado das tasks
import { createTask_btn, edit_btnPencil } from './interface/variables.js';

createTask_btn.addEventListener("click", openCTcreate);
for (const edit of edit_btnPencil)
    edit.addEventListener("click", openCTedit);

//======== Sim e Não da Config Task ========
import { 
    yesTags, noTags, 
    yesPriority, noPriority, 
    yesRepetitive, noRepetitive 
} from './interface/variables.js';

// Funções
import { 
    yesTagsActive, noTagActive,
    yesPriorityActive, noPriorityActive,
    yesRepetitiveActive, noRepetitiveActive 
} from './interface/configTask/yes&no.js';

// For Tags Task
yesTags.addEventListener("click", yesTagsActive);
noTags.addEventListener("click", noTagActive);
// For Priority Task
yesPriority.addEventListener("click", yesPriorityActive)
noPriority.addEventListener("click", noPriorityActive)
// For Repetitive Task
yesRepetitive.addEventListener("click", yesRepetitiveActive);
noRepetitive.addEventListener("click", noRepetitiveActive)

// Adicionar tags
import { buttonTags } from './interface/variables.js';
import { addTagInTheList } from './activies.js';
buttonTags.addEventListener("click", addTagInTheList)