function addRows (size) {
    for (let i = 0; i < size; i++) {
        const canvas = document.querySelector('.canvas');
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

