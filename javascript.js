    

function playRound() {

alert("Welcome to rock paper scissors! You'll play 5 rounds against the computer, with the winner being declared at the end. Ready?")

const gameArray = [];

// Loop through 5 rounds

for (let i = 0; i<5; i++) {
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

// Human selection options

const playerPrompt = prompt("Choose your weapon! Will it be rock, paper or scissors?");

function getPlayerSelection(){
if (playerPrompt.toLowerCase() == "rock") {return(rock)}
else if (playerPrompt.toLowerCase() == "paper") {return(paper)}
else if (playerPrompt.toLowerCase() == "scissors") {return(scissors)}
else {alert("Invalid selection.")};
};

const playerSelection = getPlayerSelection();

// Computer selection options

const x = Math.random();

function getComputerSelection() {
    if (x < (1/3)) {return(rock)}
    else if (x < (2/3)) {return(paper)}
    else {return(scissors)};
};

const computerSelection = getComputerSelection();

alert("The computer has selected " + computerSelection);

// Comparing the round results 

const win = 'win';
const lose = 'lose';
const tie = 'tie';

function finalResult() {
    if (playerSelection === computerSelection) 
        {return(tie)} 
    else if (playerSelection == scissors && computerSelection == rock ||
            playerSelection == rock && computerSelection == paper ||
            playerSelection == paper && computerSelection == scissors) 
            {return(lose)} 
    else {return(win)}
};

const gameScore = finalResult();

if (gameScore == win) {alert("You win this round, " + playerSelection + " beats " + computerSelection + ".")}
else if (gameScore == lose) {alert("You lose this round, " + computerSelection + " beats " + playerSelection + ".")}
else {alert("It's a tie!")};

console.log(gameScore);
gameArray.push(gameScore);
}

// End of loop & summarize results of game

console.log(gameArray);

function getOccurrence(gameArray, value) {
    let count = 0;
    gameArray.forEach(x => x === value && count++);
    return count;
};

console.log(getOccurrence(gameArray, 'win'));
console.log(getOccurrence(gameArray, 'lose'));

let playerVictories = getOccurrence(gameArray, 'win');
let computerVictories = getOccurrence(gameArray, 'lose');

alert("Time for the final score! You won " + playerVictories + " of 5 rounds. The computer won " + computerVictories + " of 5 rounds.");

if (playerVictories > computerVictories) {alert("Congratulations, you win!")} 
else if (playerVictories < computerVictories) {alert("So sorry, you lose. Better luck next time!")}
else (alert("It's a tie!"));
}

console.log(playRound());
