const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

let x = Math.random();

function getComputerChoice(x) {
    if (x < 0.33) {return(rock)}
    else if (x < 0.66) {return(paper)}
    else {return(scissors)};
};

console.log(getComputerChoice(x));