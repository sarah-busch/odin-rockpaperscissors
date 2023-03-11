const playerArray = [];
const compArray = [];
const tieArray = [];

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let playerContainer = document.getElementById("playerScore");
let compContainer = document.getElementById("compScore");
let displayOutcome = document.getElementById("displayOutcome")


function playRound() {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    const x = Math.random();

    const playerSelection = `${this.id}`

    console.log("Player: " + playerSelection);

        function getComputerSelection() 
            {
            if (x < (1/3)) {return(rock)}
            else if (x < (2/3)) {return(paper)}
            else {return(scissors)};
            };

    const computerSelection = getComputerSelection();
    console.log("Computer: " + computerSelection);

    
    const win = "win";
    const lose = "lose";
    const tie = "tie";
         
        function finalResult() 
            {
            if (playerSelection === computerSelection) {return(tie)} 
            else if (playerSelection == scissors && computerSelection == rock ||
                    playerSelection == rock && computerSelection == paper ||
                    playerSelection == paper && computerSelection == scissors) 
                    {return(lose)} 
            else {return(win)}
            };
         
    const roundResult = finalResult();

    displayOutcome.textContent = roundResult;

    let playerSum = 0;
    let compSum = 0;

    if (roundResult == 'win') {
        playerArray.push(1);
        playerArray.forEach(item => {playerSum += item;});
        compArray.forEach(item => {compSum += item;});
        }
        else if (roundResult == 'lose') {
        compArray.push(1);
        playerArray.forEach(item => {playerSum += item;});
        compArray.forEach(item => {compSum += item;});
        }
        else {playerArray.forEach(item => {playerSum += item;});
        compArray.forEach(item => {compSum += item;});
        };

    playerContainer.textContent = "Player score: " + playerSum;
    compContainer.textContent = "Computer score: " + compSum;
}

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);




/*let buttons = document.querySelectorAll('button');

function playRound() {

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log("Player: " + button.id);

            const rock = "rock";
            const paper = "paper";
            const scissors = "scissors";
            const x = Math.random();

            function getComputerSelection() 
                {
                if (x < (1/3)) {return(rock)}
                else if (x < (2/3)) {return(paper)}
                else {return(scissors)};
                };

             const computerSelection = getComputerSelection();
             console.log("Computer: " + computerSelection);

             const win = "win";
             const lose = "lose";
             const tie = "tie";
         
             function finalResult() 
                {
                 if (button.id === computerSelection) {return(tie)} 
                 else if (button.id == scissors && computerSelection == rock ||
                     button.id == rock && computerSelection == paper ||
                     button.id == paper && computerSelection == scissors) 
                     {return(lose)} 
                 else {return(win)}
                };
         
             const roundResult = finalResult();

             if (roundResult == win) {playerArray.push(1)}
             else if (roundResult == lose) {compArray.push(1)}
             else {tieArray.push(0)}

             let playerSum = 0 
             let compSum = 0
             
             playerArray.forEach(item => {playerSum += item;});
             compArray.forEach(item => {compSum += item;});
             
             console.log("Player score is " + playerSum);
             console.log("Computer score is " + compSum);
         });
    });   
}

console.log(playRound());*/

