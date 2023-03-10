function playRound (player, computer) {

    let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id);

            const rock = "rock";
            const paper = "paper";
            const scissors = "scissors";
            const x = Math.random();

            function getComputerSelection() {
            if (x < (1/3)) {return(rock)}
            else if (x < (2/3)) {return(paper)}
            else {return(scissors)};
             };

             const computerSelection = getComputerSelection();
             console.log(computerSelection);

             const win = 'win';
             const lose = 'lose';
             const tie = 'tie';
         
             function finalResult() {
                 if (button.id === computerSelection) {return(tie)} 
                 else if (button.id == scissors && computerSelection == rock ||
                     button.id == rock && computerSelection == paper ||
                     button.id == paper && computerSelection == scissors) 
                     {return(lose)} 
                 else {return(win)}
             };
         
             const roundResult = finalResult();
         
             console.log(roundResult);
        });
    });   
}


console.log(playRound());
