    

function playRound() {

const gameArray = [];

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

// Comparing the results 

const win = 1;
const lose = -1;
const tie = 0;

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

console.log(gameScore);
gameArray.push(gameScore);
}

console.log(gameArray);

let sum = 0;

function game(){ 
    for (let i = 0; i<gameArray.length; i++) {
    sum += gameArray[i];
}
return(sum);
};

console.log(game());

const declareVictor = game();

if (declareVictor == 0) {alert("It's a tie!")}
else if (declareVictor <= -1) {alert("You lose :(")}
else {alert("Congratulations, you win! :)")}

}

console.log(playRound());





/*

// Declaring the winner

if (finalResult() == win) {alert("You win, " + playerSelection + " beats " + computerSelection + "!")}
else if (finalResult() == lose) {alert("You lose, " + computerSelection + " beats " + playerSelection + "!")}
else {alert("It's a tie!")};

return(finalResult());

*/