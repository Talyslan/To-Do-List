import { appear, disappear } from "../interface.js"

const configTaskArea = document.querySelector(".config-Task");
// Botões da Config Task: 
const btnsCTedit = document.querySelectorAll(".btnInCTedit");
const addCTcreate = document.querySelector(".add");

const closeCT = () => disappear(configTaskArea);

const openCTcreate = () => {
    appear(configTaskArea);

    if (addCTcreate.classList.contains("disappear"))
        appear(addCTcreate);

    btnsCTedit.forEach(item => disappear(item));
};

const openCTedit = () => {
    appear(configTaskArea);
    // Tirar o btn Add e adicionar os outros
    disappear(addCTcreate);

    for (const item of btnsCTedit)
        if (item.classList.contains("disappear"))
            appear(item);
};

// Variáveis
export { configTaskArea, btnsCTedit, addCTcreate };
// Funções
export { closeCT, openCTcreate, openCTedit };

// 