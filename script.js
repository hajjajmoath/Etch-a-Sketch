const container = document.getElementById('container');

function changeColor(cell, color) {
    cell.style.backgroundColor = color;
}

for (let i = 0; i < 256; i++) {
const cell = document.createElement('div');
cell.setAttribute('id', 'cell');
container.appendChild(cell);
cell.addEventListener('mouseover', () => changeColor(cell, 'red'))
}