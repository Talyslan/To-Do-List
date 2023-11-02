//Limpa o input
const clearInput = (element) => element.value = "";

// Verificação: o input tem algo escrito
const verifyInput = (element, errorMessage) => {
  if (element === "") {
    errorMessage.innerText = "Error! Write something";
    return false;
  }
  else {
    errorMessage.innerText = "";
    return true;
  }
};

const disappear = (e) => e.classList.add("disappear");
const appear  = (e) => e.classList.remove("disappear");

export { 
  appear, disappear, verifyInput, clearInput 
};