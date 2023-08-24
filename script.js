const box = document.querySelector('.box-task');

function add() {
  const value = document.querySelector('#textTask').value;
  
  const task = {
    feito: false,
    texto: undefined,
  };

  task.texto = value;

  const text = `
    <div class="task">
        <input type="checkbox" />
        <p>${task.texto}</p>
        <span></span>
    </div>
    `;

  box.innerHTML += text;
}