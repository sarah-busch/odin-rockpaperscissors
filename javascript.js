const playerArray = [];
const compArray = [];

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerContainer = document.getElementById("playerScore");
const compContainer = document.getElementById("compScore");
const displayOutcome = document.getElementById("displayOutcome")
const body = document.querySelector('body');
const compImage = document.getElementById('compImage');
const summaryBox = document.getElementById('summaryBox');

function playRound() {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    const x = Math.random();
    const img = document.createElement("img");

    const playerSelection = `${this.id}`

    function displayImage(src, width, height) {
        const img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        compImage.appendChild(img);
       };

    while (compImage.firstChild) {
        compImage.removeChild(compImage.firstChild);
    }
    
    function getComputerSelection() 
        {
        if (x < (1/3)) {
            displayImage('./images/rock.png', 120, 80); 
            return(rock)}
        else if (x < (2/3)) {
            displayImage('./images/paper.png', 70, 90);
            return(paper)}
        else {
            displayImage('./images/scissors.png', 120, 60);
            return(scissors)};
        };

    const computerSelection = getComputerSelection();
    
    const win = "PLAYER WINS";
    const lose = "COMPUTER WINS";
    const tie = "TIE";
         
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

    function tallyResults() 
        {
        playerArray.forEach(item => {playerSum += item;});
        compArray.forEach(item => {compSum += item;});
        };

    if (roundResult == win) 
        {
        playerArray.push(1);
        tallyResults(); 
        }
        else if (roundResult == lose) {
        compArray.push(1);
        tallyResults();}
        else {tallyResults()};

    playerContainer.textContent = "Player: " + playerSum;
    compContainer.textContent = "Computer: " + compSum;

    function reload() {
        location.reload();
    }

    function createButton() {
        const createButton = document.createElement('button');
        createButton.innerText = "Click here to play again";
        createButton.style.fontFamily = "monospace";
        createButton.style.color = "#4ff8a4";
        createButton.style.textShadow = "0 0 5px #1c905b";
        createButton.style.fontSize = "20px";
        createButton.style.marginTop = "40px";
        createButton.style.marginLeft = "400px";
        createButton.style.marginRight = "400px";
        createButton.addEventListener('click', reload);
        body.appendChild(createButton);
    }

    if (playerArray.length == 5) {
        summaryBox.textContent = "CONGRATULATIONS, YOU WIN!";
        body.style.fontSize = "50px";
        createButton();
        }
        else if (compArray.length == 5) {
        summaryBox.textContent= "COMPUTER WINS";
        body.style.fontSize = "50px";
        createButton();
        } 
        else {console.log("continue")};
}

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

