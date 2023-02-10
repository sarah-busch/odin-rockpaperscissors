const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

// Human selection options

const playerPrompt = prompt("Choose your weapon! Will it be rock, paper or scissors?");

function getPlayerSelection(){
if (playerPrompt.toLowerCase(`${playerPrompt}`) == "rock") {return(rock)}
else if (playerPrompt.toLowerCase(`${playerPrompt}`) == "paper") {return(paper)}
else if (playerPrompt.toLowerCase(`${playerPrompt}`) == "scissors") {return(scissors)}
else {alert("Invalid selection.")}
};

const playerSelection = getPlayerSelection();
console.log("The user has selected " + playerSelection);

// Computer selection options
const x = Math.random();

function getComputerChoice(x) {
    if (x < 0.33) {return(rock)}
    else if (x < 0.66) {return(paper)}
    else {return(scissors)};
};

const computerSelection = getComputerChoice(x);

alert("The computer has selected " + computerSelection);
console.log("The computer has selected " + computerSelection);

// Comparing the results 

function finalResult(){
if (playerSelection == rock && computerSelection == scissors ||
    playerSelection == paper && computerSelection == rock ||
    playerSelection == scissors && computerSelection == paper) {
        return("win")
    } else if (playerSelection == scissors && computerSelection == rock ||
        playerSelection == rock && computerSelection == paper ||
        playerSelection == paper && computerSelection == scissors) {
            return("lose")
        } else {
            return("tie")
        };
    };

// Declaring the winner

if (finalResult() == "win" ) {alert("You win, " + playerSelection + " beats " + computerSelection + "!")}
else if (finalResult() == "lose") {alert("You lose, " + computerSelection + " beats " + playerSelection + "!")}
else {alert("It's a tie!")};

console.log(finalResult());



