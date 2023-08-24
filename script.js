const box = document.querySelector('.box-task');

const task = () => {return {feito: false, texto: undefined}};

function add() {
  const value = document.querySelector('#textTask').value;

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