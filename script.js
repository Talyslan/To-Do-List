const box = document.querySelector('.tasks');

function add() {
  const value = document.querySelector('#textTask').value;
  
  const task = {
  feito: false,
  texto: undefined,
  };

  task.texto = value;

  const text = `
    <div class="t">
        <input type="checkbox" />
        <p>${task.texto}</p>
        <span></span>
    </div>
    `;

  box.innerHTML += text;
}