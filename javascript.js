const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

// Human selection options

const playerPrompt = prompt("Choose your weapon! Will it be rock, paper or scissors?");
function getPlayerSelection(){
if (playerPrompt.toLowerCase(`${playerPrompt}`) == "rock") {return(rock)}
else if (playerPrompt.toLowerCase(`${playerPrompt}`) == "paper") {return(paper)}
else if (playerPrompt.toLowerCase(`${playerPrompt}`) == "scissors") {return(scissors)}
else {alert("Invalid selection.")};
};

const playerSelection = getPlayerSelection();

// Computer selection options
const x = Math.random();

function getComputerChoice(x) {
    if (x < 0.33) {return(rock)}
    else if (x < 0.66) {return(paper)}
    else {return(scissors)};
};

alert("The computer has selected " + getComputerChoice(x));

const computerSelection = getComputerChoice(x);

// Comparing the results and declaring the winner


