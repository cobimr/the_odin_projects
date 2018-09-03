// Value input variable
const inputField = document.getElementById('input');

// Insert number on input fied
const insertNum = num => inputField.textContent += num;

// Do operation using eval()
const equalTo = () => (inputField.textContent) ? inputField.textContent = eval(inputField.textContent) : false;

// Remove 1 val at time
const eraseNum = () => inputField.textContent = inputField.textContent.substring(0, inputField.textContent.length - 1);

// Clear all the input
const clearInput = () => inputField.textContent = '';


// Change UI Color
const colorChangeBtn = document.getElementById('color-change');
const body = document.getElementById('bg-body');
const calcBtn = document.querySelectorAll('.btn-num');
const inputColor = document.getElementById('input');

// Event Listener
colorChangeBtn.addEventListener('click', changeColor);

function changeColor() {

    // Input Color
    inputColor.classList.toggle('white-bg');
    inputColor.classList.toggle('blue-text');

    // Buttons Colors
    calcBtn.forEach(btn => {
        btn.classList.toggle('white-bg');
    })

    // Body background
    body.classList.toggle('blue-bg')

    // Color Change
    colorChangeBtn.classList.toggle('white-bg');
    colorChangeBtn.classList.toggle('blue-text');

    // Links
    document.querySelector('.author').classList.toggle('white-text');
    document.querySelector('.author a').classList.toggle('white-text');
}