//Limpa o input
const clearInput = (element) => element.value = "";

// Verificação: o input tem algo escrito
const verify = (element, errorMessage) => {
    if (element === "") {
        errorMessage.innerText = "Error! Write something";
    return false;
  }
  else {
    errorMessage.innerText = "";
    return true;
  }
};

exports.clearInput = clearInput;
exports.verify = verifyInput;