const configTaskArea = document.querySelector(".config-Task");
const btnCardCreate = document.querySelector("#btnCreate");
const btnsCardEdit = document.querySelectorAll(".btnEdit");
// Botões da Config Task: 
const btnsCTedit = document.querySelectorAll(".btnInCTedit");
const addCTcreate = document.querySelector(".add");

const disappear = (e) => e.classList.add("disappear");
const appear  = (e) => e.classList.remove("disappear");

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

// EVENTOS
btnCardCreate.addEventListener("click", openCTcreate);

for (const edit of btnsCardEdit)
    edit.addEventListener("click", openCTedit);

// Btn Add
addCTcreate.addEventListener("click", closeCT);
// Btn Alterate
btnsCTedit[2].addEventListener("click", closeCT);

///////////////////////////////////////////////////////////////
const yesAll = document.querySelectorAll(".btnYes");
const noAll = document.querySelectorAll(".btnNo");

for (const i of yesAll)
    i.addEventListener("click", (e) => {
        e.target.classList.add("yesActive")

        const noActual = e.target.parentNode.children[2]
        
        if (noActual.classList.contains("noActive"))
            noActual.classList.remove("noActive");
    });

for (const i of noAll)
    i.addEventListener("click", (e) => {
        e.target.classList.add("noActive")

        const yesActual = e.target.parentNode.children[1]
        
        if (yesActual.classList.contains("yesActive"))
            yesActual.classList.remove("yesActive");
    });