function addRows (size) {
    cellsArray = [];
    const canvas = document.querySelector('.canvas');
    canvas.innerHTML = '';
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add(`row${i}`);
        canvas.appendChild(row);
    }
}

let clear = false;
let color = false;
let rainbow = false;
let black = true;

function addCells (size) {
    clear = false;
    for (let i = 0; i < size; i++) {
        const row = document.querySelector(`.row${i}`);
        row.setAttribute('style', 'display : flex; flex : 1;')
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cells');
            row.appendChild(cell);
            cell.addEventListener('mousemove', () => {
                if (clear) {
                    cell.style.backgroundColor = 'white';
                } else if (color) {
                    colorValue = document.querySelector('#colorpicker').value;
                    cell.style.backgroundColor = colorValue;
                } else if(black) {
                    cell.style.backgroundColor = 'black';
                } else if (rainbow) {
                    const randomColor = Math.floor(Math.random()*16777215).toString(16);
                    cell.style.backgroundColor = '#' + randomColor;
                }
            });
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

function makeBlack() {
    this.classList.add('black');
}

const erase = document.querySelector('#erase');
erase.addEventListener('click', slider.oninput);

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    black = false;
    color = false;
    rainbow = false;
    clear = true;
    blackBtn.style.backgroundColor = '#C2CAD0';
    clearBtn.style.backgroundColor = '#0B0C10';
    clearBtn.style.color = '#C2CAD0';
    colorBtn.style.backgroundColor = '#C2CAD0';
    rainbowBtn.style.backgroundColor = '#C2CAD0';
    blackBtn.style.color = '#0B0C10';
    colorBtn.style.color = '#0B0C10';
    rainbowBtn.style.color = '#0B0C10';
})

const colorBtn = document.querySelector('#color');
colorBtn.addEventListener('click', () => {
    clear = false;
    black = false;
    rainbow = false;
    color = true;
    blackBtn.style.backgroundColor = '#C2CAD0';
    clearBtn.style.backgroundColor = '#C2CAD0';
    colorBtn.style.backgroundColor = '#0B0C10';
    colorBtn.style.color = '#C2CAD0';
    rainbowBtn.style.backgroundColor = '#C2CAD0';
    blackBtn.style.color = '#0B0C10';
    clearBtn.style.color = '#0B0C10';
    rainbowBtn.style.color = '#0B0C10';
})

const blackBtn = document.querySelector('#black');
blackBtn.addEventListener('click', () => {
    clear = false;
    color = false;
    rainbow = false;
    black = true;
    blackBtn.style.backgroundColor = '#0B0C10';
    blackBtn.style.color = '#C2CAD0';
    clearBtn.style.backgroundColor = '#C2CAD0';
    colorBtn.style.backgroundColor = '#C2CAD0';
    rainbowBtn.style.backgroundColor = '#C2CAD0';
    clearBtn.style.color = '#0B0C10';
    colorBtn.style.color = '#0B0C10';
    rainbowBtn.style.color = '#0B0C10';  
})

const rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener('click', () => {
    clear = false;
    color = false;
    black = false;
    rainbow = true;
    blackBtn.style.backgroundColor = '#C2CAD0';
    clearBtn.style.backgroundColor = '#C2CAD0';
    colorBtn.style.backgroundColor = '#C2CAD0';
    rainbowBtn.style.backgroundColor = '#0B0C10';
    rainbowBtn.style.color = '#C2CAD0';
    blackBtn.style.color = '#0B0C10';
    clearBtn.style.color = '#0B0C10';
    colorBtn.style.color = '#0B0C10';
})