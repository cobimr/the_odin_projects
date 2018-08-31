// Global Variables
const gridContainer = document.getElementById('grid-container');
const inputGridSize = document.getElementById('resize-input');
let defaultSize = 16;
let colorful = false;
let border = false;


// Initialization
generateSquare(defaultSize);
eventListeners();


// Store all event listeners

function eventListeners() {

    inputGridSize.addEventListener('change', (e) => {
        resetSquares();
        generateSquare(changeGridSize(e.target.value)); 
    })

    const resetBtn = document.getElementById('reset-btn');
    resetBtn.addEventListener("click", () => {
        resetSquares();
        generateSquare(inputGridSize.value);
    })

    const colorfulBtn = document.getElementById('colorful-btn');
    colorfulBtn.addEventListener('click', () => {
        colorful == true ? colorful = false : colorful = true;

        if (colorful) {
            colorfulBtn.style.backgroundColor = 'black';
            colorfulBtn.style.color = 'white';
            colorfulBtn.textContent = 'Color: On';
        } else {
            colorfulBtn.style.backgroundColor = 'transparent';
            colorfulBtn.style.color = 'black';
            colorfulBtn.textContent = 'Color: Off';
        }
    })

    const borderBtn = document.getElementById('border-btn');
    borderBtn.addEventListener('click', () => {
        border == true ? border = false : border = true;

        if (border) {
            borderBtn.style.backgroundColor = 'black';
            borderBtn.style.color = 'white';
            borderBtn.textContent = 'Border: On';
        } else {
            borderBtn.style.backgroundColor = 'transparent';
            borderBtn.style.color = 'black';
            borderBtn.textContent = 'Border: Off';
        }
    })
}

// Functions Below

function generateSquare(size) {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            let div = document.createElement('div');
            div.classList.add('square');
            div.style.height = 100 / size + '%';
            div.style.width = 100 / size + '%';
            gridContainer.appendChild(div);
        }
    } // <- End For Loop
    fillSquare();
}

function resetSquares() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function changeGridSize(input) {
    newSize = input;

    if (newSize > 64) {
        alert('Invalid value, must be in a range of 64');
        generateSquare(defaultSize);
     } else {
        return newSize;
    }
}

function fillSquare() {
    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseenter', getColorSquare);
        square.addEventListener('mouseenter', getBorderSquare);
    });
}

function getColorSquare(e) {
    
    if (colorful) {
        let r = Math.floor(Math.random() * 256); // Random between 0-255
        let g = Math.floor(Math.random() * 256); // Random between 0-255
        let b = Math.floor(Math.random() * 256); // Random between 0-255
        let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
        e.target.style.backgroundColor = rgb;
    } else {
        e.target.style.backgroundColor = "#121212";
    }
}

function getBorderSquare(e) {
    
    if (border) {
        e.target.style.border = '1px solid rgb(192, 192, 192)';
    } else {
        e.target.style.border = 'transparent';
    }
}
