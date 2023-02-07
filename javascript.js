function addRows (size) {
    const canvas = document.querySelector('.canvas');
    canvas.innerHTML = '';
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add(`row${i}`);
        canvas.appendChild(row);
    }
}

function addCells (size) {
    for (let i = 0; i < size; i++) {
        const row = document.querySelector(`.row${i}`);
        row.setAttribute('style', 'display : flex; flex : 1;')
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cells');
            row.appendChild(cell);
        }
    }
}

window.onload = function () {
    addRows(16);
    addCells(16);
}

const slider = document.querySelector('#slider')
const sliderValue = document.querySelector('#sliderValue');
sliderValue.innerHTML = `${slider.value}x${slider.value}`;

slider.oninput = function() {
    sliderValue.innerHTML = `${slider.value}x${slider.value}`;
    addRows(slider.value);
    addCells(slider.value);
}





