// Variáveis e funções
import { addCTcreate, btnsCTedit } from './interface/configTask/configTask.js';
import { closeCT, openCTcreate, openCTedit } from './interface/configTask/configTask.js';

// Botão "Create a task" e Edit do lado das tasks
const btnCardCreate = document.querySelector("#btnCreate");
const btnsCardEdit = document.querySelectorAll(".btnEdit");

btnCardCreate.addEventListener("click", openCTcreate);
addCTcreate.addEventListener("click", closeCT);
btnsCTedit[2].addEventListener("click", closeCT); 
for (const edit of btnsCardEdit)
    edit.addEventListener("click", openCTedit);

// Sim e Não da Config Task
// Variáveis
import { 
    yesTags, noTags, 
    yesPriority, noPriority, 
    yesRepetitive, noRepetitive 
} from './interface/configTask/yes&no.js';
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