const paletaDeCores = document.getElementById('color-palette');
const body = document.getElementsByTagName('body');
//
const blocoBlack = document.createElement('div');
blocoBlack.style.backgroundColor = 'black';
blocoBlack.classList.add('color');
paletaDeCores.appendChild(blocoBlack);
//
let blocoBlue = document.createElement('div');
blocoBlue.style.backgroundColor = 'blue';
blocoBlue.classList.add('color');
paletaDeCores.appendChild(blocoBlue);
//
let blocoRed = document.createElement('div');
blocoRed.style.backgroundColor = 'red';
blocoRed.classList.add('color');
paletaDeCores.appendChild(blocoRed);
//
let blocoGreen = document.createElement('div');
blocoGreen.style.backgroundColor = 'green';
blocoGreen.classList.add('color');
paletaDeCores.appendChild(blocoGreen);

//

window.onload = blocoBlue.style.backgroundColor = `rgb(${Math.floor(
  Math.random() * 256
)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
blocoRed.style.backgroundColor = `rgb(${Math.floor(
  Math.random() * 256
)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
blocoGreen.style.backgroundColor = `rgb(${Math.floor(
  Math.random() * 256
)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;

function generateRows(num) {
  for (let i = 0; i < num; i++) {
    let rows = document.createElement('div');
    rows.className = 'rows static-row';
    pixelBoard.appendChild(rows);
  }
}

paletaDeCores.addEventListener('click', function (event) {
  let selected = document.querySelector('.selected');
  // é necessario declarar o elemento com queryselector DENTRO da função pra ele poder redefinir o novo elemento com a classe à cada click, caso contrario ele sempre vai considerar o primeiro elemento selecionado e apenas adicionará a classe aos outros elementos. Usa-se o querySelector porque ele seleciona APENAS o primeiro da classe especificada.
  selected.classList.remove('selected');
  event.target.classList.add('selected');
});

window.onload = blocoBlack.classList.add('selected');

const pixelBoard = document.getElementById('pixel-board');
pixelBoard.addEventListener('click', function (event) {
  let selected = document.querySelector('.selected');
  event.target.style.backgroundColor = selected.style.backgroundColor; // preciso conseguir as cores do BG das paletas. Ao criar as os elementos com JS e adicionar o bgColor é possivel[RESOLVIDO]
});

function removeStaticRows() {
  let staticRows = document.querySelectorAll('.static-row'); // pq funciona com querySelector e nao com getElementsByClass?
  console.log(staticRows);
  for (let i = 0; i < staticRows.length; i++) {
    pixelBoard.removeChild(staticRows[i]);
  }
}

//

const clearBtn = document.createElement('button');
clearBtn.id = 'clear-board';
clearBtn.addEventListener('click', function () {
  let pixels = document.getElementsByClassName('pixel');

  for (let i of pixels) {
    i.style.backgroundColor = 'white';
  }
});
clearBtn.innerText = 'Limpar';
let btnContainer = document.getElementById('btn-container');
btnContainer.appendChild(clearBtn);
//

let inputContainer = document.getElementById('input-container');

let inputSize = document.createElement('input');
inputSize.type = 'number';
inputSize.id = 'board-size';
inputSize.step = '1';
inputSize.min = 1;
inputSize.max = 50;
inputContainer.appendChild(inputSize);
let vqvBtn = document.createElement('button');
vqvBtn.id = 'generate-board';
vqvBtn.innerText = 'VQV';
inputContainer.appendChild(vqvBtn);

vqvBtn.addEventListener('click', function () {
  if (inputSize.value == '' || inputSize.value <= 0) {
    window.alert('Board inválido!');
  } else if (inputSize.value < 5) {
    inputSize.value = 5;
  } else if (inputSize.value > 50) {
    inputSize.value = 50;
  }
  removeStaticRows();
  generateRows(inputSize.value);
  let rows = document.getElementsByClassName('rows');
  for (let i = 0; i < inputSize.value; i++) {
    for (let j = 0; j < inputSize.value; j++) {
      const pixelDiv = document.createElement('div');
      pixelDiv.className = 'pixel';
      rows[i].appendChild(pixelDiv);
    }
  }
});
