// Header and Instruction
const header = document.getElementById('header');
const instructionWrapper = document.getElementById('instruction-wrapper');
// Round Elem
const roundWrapper = document.getElementById('round-wrapper');
const roundDiv = document.getElementById('round');
const roundInput = document.getElementById('round-input');
let nextRoundBtn = document.getElementById('next-round-btn');
// Options Elem
const optionsWrapper = document.getElementById('options-wrapper');
const options = document.querySelectorAll('.em');
const rockBorder = document.getElementById('rock-border');
const paperBorder = document.getElementById('paper-border');
const scissorBorder = document.getElementById('scissor-border');
// Buttons Elem
const buttonsWrapper = document.getElementById('buttons-wrapper');
const startBtn = document.getElementById('start-btn').firstElementChild;
const restartBtn = document.getElementById('restart-btn').firstElementChild;
// Poins Elem
const pointWrapper = document.getElementById('points-wrapper');
const usrPointDiv = document.getElementById('usr-point');
const cpuPointDiv = document.getElementById('cpu-point');
// Message Elem
const finalMessageDiv = document.getElementById('final-message');


/* INITIAL SETUP */

optionsWrapper.style.display = "none";
roundWrapper.style.display = "none";
restartBtn.style.display = "none";

let usrPoints = 0;
let cpuPoints = 0;
let round = 1;

roundDiv.textContent = String(round);

usrPointDiv.textContent = '0';
cpuPointDiv.textContent = '0';


/*
===========================
=== Event Listeners =======
===========================
*/

startBtn.addEventListener('click', () => {
    // Setup Interface
    setupInterface();

    // Loop trough each option
    options.forEach(choice => {
        // Get click event for each option
        choice.addEventListener('click', gameInit);
    })
})


// Restart Game Event
restartBtn.addEventListener('click', reset)

function reset() {
    resetClasses();
    usrPoints = 0;
    cpuPoints = 0;
    round = 1;
    roundDiv.textContent = String(round);
    usrPointDiv.textContent = '0';
    cpuPointDiv.textContent = '0';
    optionsWrapper.style.display = "none";
    roundWrapper.style.display = "none";
    restartBtn.style.display = "none";
    startBtn.parentElement.style.display = "block";
    roundInput.parentElement.style.display = "block";
    finalMessageDiv.classList.remove('draw-text', 'win-text', 'lose-text');
    finalMessageDiv.textContent = '';
    nextRoundBtn.style.display = "none";
    pointWrapper.style.display = "none";
    header.style.display = "block";
    instructionWrapper.style.display = "block";
}


/*
===========================
=== Functions Below =======
===========================
*/

// Setup the interface to start gaming
function setupInterface() {
    pointWrapper.style.display = "block";
    startBtn.parentElement.style.display = "none";
    roundInput.parentElement.style.display = "none";
    optionsWrapper.style.display = "block";
    roundWrapper.style.display = "block";
    restartBtn.style.display = "block";
    header.style.display = "none";
    instructionWrapper.style.display = "none";
    
}

// Game Function
function gameInit(e) {

    // Get User and Computer input
    let user = e.target.id;
    let computer = computerPlay().toLowerCase();

    // Console login the options :)
    console.log('User: Choice', e.target.id);
    console.log('Computer Choice:', computer);

    // Trigger the game function
    playRound(user, computer);

    // Check the winner
    if (round > roundInput.value) {
        if (usrPoints > cpuPoints) {
            nextRoundBtn.style.display = 'none';
            removeHandler();
            finalMessageDiv.classList.add('win-text');
            finalMessageDiv.textContent = `You win the match!`;
        } else if (usrPoints < cpuPoints) {
            nextRoundBtn.style.display = 'none';
            removeHandler();
            finalMessageDiv.classList.add('lose-text');
            finalMessageDiv.textContent = `You lose the match!`;
        } else {
            nextRoundBtn.style.display = 'none';
            removeHandler();
            finalMessageDiv.classList.add('draw-text');
            finalMessageDiv.textContent = `You have a Draw!`;
        }
    } else {
        // Disable click for options until the Next Button is clicked
        removeHandler();

        console.log(round);
        console.log(roundInput.value);

        nextRoundBtn.style.display = "block";

        // Restart Game Event
        restartBtn.addEventListener('click', reset)

        // Next Round Click Event
        nextRoundBtn.addEventListener('click', () => {
            // Render number of the round
            resetClasses();
            roundDiv.textContent = String(round);
            nextRoundBtn.style.display = 'none';
            // Make click options available again
            options.forEach(choice => {
                choice.addEventListener('click', gameInit);
            })
        })
    }
}


// Logic fo the Round
function playRound(userChoice, computerChoice) {

    // Reset classes
    resetClasses();

    // Check if the option are equal or not!                
    if (userChoice === computerChoice) {

        // Add Draw color of all options
        rockBorder.classList.add('draw');
        paperBorder.classList.add('draw');
        scissorBorder.classList.add('draw');


    } else if (userChoice === 'rock' && computerChoice === "scissor") {

        // Update point and round
        usrPoints += 1;
        round += 1;
        // Add Win and Lose options
        rockBorder.classList.add('win');
        scissorBorder.classList.add('lose');
        // Render point in the table
        usrPointDiv.textContent = String(usrPoints);

    } else if (userChoice === 'rock' && computerChoice === "paper") {

        // Update point and round
        cpuPoints += 1;
        round += 1;
        // Add Win and Lose options
        rockBorder.classList.add('lose');
        paperBorder.classList.add('win');
        // Render point in the table
        cpuPointDiv.textContent = String(cpuPoints);

    } else if (userChoice === 'scissor' && computerChoice === 'paper') {

        // Update point and round
        usrPoints += 1;
        round += 1;
        // Add Win and Lose options
        scissorBorder.classList.add('win');
        paperBorder.classList.add('lose');
        // Render point in the table
        usrPointDiv.textContent = String(usrPoints);

    } else if (userChoice === 'scissor' && computerChoice === 'rock') {

        // Update point and round
        cpuPoints += 1;
        round += 1;
        // Add Win and Lose options
        rockBorder.classList.add('win');
        scissorBorder.classList.add('lose');
        // Render point in the table
        cpuPointDiv.textContent = String(cpuPoints);

    } else if (userChoice === 'paper' && computerChoice === 'rock') {

        // Update point and round
        usrPoints += 1;
        round += 1;
        // Add Win and Lose options
        paperBorder.classList.add('win');
        rockBorder.classList.add('lose');
        // Render point in the table
        usrPointDiv.textContent = String(usrPoints);

    } else {

        // Update point and round
        cpuPoints += 1;
        round += 1;
        // Add Win and Lose options
        paperBorder.classList.add('lose');
        scissorBorder.classList.add('win');
        // Render point in the table
        cpuPointDiv.textContent = String(cpuPoints);

    }
}



// Get computer ramdon input
function computerPlay() {
    let number = Math.floor(Math.random() * 3);
    let choise;

    if (number === 1) {
        choise = 'paper';
    } else if (number === 2) {
        choise = 'scissor';
    } else {
        choise = 'rock';
    }
    return choise;
}

// Function to reset the result color of the options
function resetClasses() {
    rockBorder.classList.remove('draw');
    paperBorder.classList.remove('draw');
    scissorBorder.classList.remove('draw');
    rockBorder.classList.remove('win');
    paperBorder.classList.remove('win');
    scissorBorder.classList.remove('win');
    rockBorder.classList.remove('lose');
    paperBorder.classList.remove('lose');
    scissorBorder.classList.remove('lose');
}

// Disable Click Event 
function removeHandler() {
    // Loop trough each option
    options.forEach(choice => {
        choice.removeEventListener("click", gameInit);
    })
}

// Bootstrap 4 Modal
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})