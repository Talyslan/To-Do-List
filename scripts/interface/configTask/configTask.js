import { appear, disappear } from "../interface.js"

import {
    configTask,
    add_CTcreateBtn,
    buttonsCTedit
} from '../variables.js';

const closeCT = () => disappear(configTask);

const openCTcreate = () => {
    appear(configTask);

    if (add_CTcreateBtn.classList.contains("disappear"))
        appear(add_CTcreateBtn);

    buttonsCTedit.forEach(item => disappear(item));
};

const openCTedit = () => {
    appear(configTask);

    disappear(add_CTcreateBtn);

    buttonsCTedit.forEach(item => {
        if (item.classList.contains("disappear"))
            appear(item);
    });
};

// Funções
export { closeCT, openCTcreate, openCTedit };