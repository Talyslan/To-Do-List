import { elementClicked } from "../configTask/configTask.js";

const addCSSClasses = () => {
    elementClicked.classList.add("completeTask");
    elementClicked.children[0].checked = true;
    elementClicked.children[1].classList.add("completeTags");
    elementClicked.children[1].children[0].classList.add("risk");
    elementClicked.children[2].classList.add("completeBtnEdit");
};

const removeCSSClasses = () => {
    elementClicked.classList.remove("completeTask");
    elementClicked.children[0].checked = false;
    //Por que isso abaixo não funciona toda vez??
    //elementClicked.children[0].setAttribute("checked", false);
    elementClicked.children[1].classList.remove("completeTags");
    elementClicked.children[1].children[0].classList.remove("risk");
    elementClicked.children[2].classList.remove("completeBtnEdit");
};

export { addCSSClasses, removeCSSClasses }